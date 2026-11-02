import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const read = file => readFileSync(new URL("../"+file,import.meta.url),"utf8");
const window={};
for(const file of ["lessons.js","lessons.en.js","course-search.js"])
  runInNewContext(read(file),{window}, {filename:file});
const api=window.CourseSearch;
const tr=api.buildIndex(window.COURSE_LESSONS);
const en=api.buildIndex(window.COURSE_LESSONS_EN);

test("all 37 topics from lessons 02–06 are included in both localized search indexes",()=>{
  for(const index of [tr,en]){
    assert.equal(index.length,37);
    assert.deepEqual([...new Set(index.map(x=>x.lessonId))],["02","03","04","05","06"]);
    assert.ok(index.every(x=>Number.isInteger(x.topicIndex)&&x.topicIndex>=0&&x.title));
    assert.ok(index.every(x=>x.paragraphs.length>=2));
    assert.ok(index.every(x=>!x.title.includes("<")));
  }
});

test("Turkish diacritics and English words search the correct localized sources",()=>{
  const typed=api.search(tr,"oz tasiyici");
  assert.ok(typed.some(x=>x.lessonId==="03"&&x.title.includes("nᵢ")));
  assert.ok(api.search(tr,"öz taşıyıcı").some(x=>x.lessonId==="03"));
  assert.ok(api.search(tr,"n_i").some(x=>x.lessonId==="03"));
  assert.ok(api.search(en,"intrinsic carrier").some(x=>x.lessonId==="03"));
  assert.ok(api.search(en,"Fermi").some(x=>x.lessonId==="05"));
  assert.ok(api.search(tr,"band aralığı").some(x=>x.lessonId==="03"));
  assert.ok(api.search(en,"Boltzmann").length>0);
});

test("body text and equations are searchable with stable lesson/topic coordinates",()=>{
  const matches=api.search(tr,"steady state");
  assert.ok(matches.some(x=>x.lessonId==="02"));
  const m=api.search(tr,"nᵢ")[0];
  assert.ok(m.lessonId&&m.title&&m.snippet);
  assert.ok(m.topicIndex<window.COURSE_LESSONS.find(x=>x.id===m.lessonId).topics.length);
  assert.ok(api.search(tr,"safsızlık").length>0);
});

test("query lengths, accents, no-result behavior and HTML escaping are safe",()=>{
  assert.equal(api.search(tr,"x").length,0);
  assert.equal(api.search(tr,"").length,0);
  assert.equal(api.search(tr,"truly impossible query 97531").length,0);
  assert.equal(api.normalize("FİZİK ve taşıyıcı"),"fizik ve tasiyici");
  assert.equal(api.plain("E<sub>g</sub> &nbsp; <b>yarıiletken</b>"),"Eg yarıiletken");
});

test("search results remain deterministic and title matches outrank body mentions",()=>{
  const a=api.search(tr,"Fermi"),b=api.search(tr,"Fermi");
  assert.deepEqual(Array.from(a,x=>[x.lessonId,x.topicIndex]),Array.from(b,x=>[x.lessonId,x.topicIndex]));
  assert.ok(a[0].title.includes("Fermi"));
  assert.equal(api.search(tr,"Fermi",1).length,1);
});

test("header contains accessible dropdown controls and a real search icon",()=>{
  const html=read("index.html"),css=read("styles.css"),app=read("app.js");
  for(const id of ["course-search-toggle","course-search-panel","course-search-input",
    "course-search-results","course-search-close"])assert.ok(html.includes('id="'+id+'"'));
  assert.match(html,/aria-expanded="false" aria-controls="course-search-panel"/);
  assert.match(html,/<circle cx="10\.8" cy="10\.8" r="7"\/>/);
  assert.match(html,/course-search\.js" defer/);
  assert.ok(html.indexOf("course-search.js")<html.indexOf("app.js"));
  assert.match(css,/\.course-search-panel\[hidden\]/);
  assert.match(css,/position:fixed; top:calc\(var\(--site-header-height\)/);
  assert.match(app,/searchUI = window\.CourseSearch\?\.setup\(/);
  assert.match(app,/onSelect: navigateToTopic/);
  assert.match(app,/searchUI\?\.refresh\(\)/);
});

test("search navigation resolves a topic across lessons, highlights and positions it below sticky elements",()=>{
  const app=read("app.js");
  assert.match(app,/function navigateToTopic\(lessonId, topicIndex, query = ""\)/);
  assert.match(app,/pendingTopic = \{ lessonId, topicIndex, query \}/);
  assert.match(app,/if \(location\.hash === target\) render\(\)/);
  assert.match(app,/window\.CourseSearch\?\.highlightTopic\(target, query\)/);
  assert.match(app,/scrollToCourseTopic\(match \|\| target\)/);
  assert.match(app,/window\.scrollTo\(\{ top, behavior: "instant" \}\)/);
});

test("local offline search updates without a network request",()=>{
  const js=read("course-search.js");
  assert.doesNotMatch(js,/fetch\(|XMLHttpRequest|https?:\/\//);
  assert.match(js,/keydown/);
  assert.match(js,/ArrowDown/);
  assert.match(js,/Escape/);
  assert.match(js,/ctrlKey\|\|event\.metaKey/);
});
