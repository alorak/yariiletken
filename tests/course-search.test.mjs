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

test("all 38 topics from lessons 02–06 are included in both localized search indexes",()=>{
  for(const index of [tr,en]){
    assert.equal(index.length,38);
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


test("dropdown interaction searches in the selected language and opens the matching lesson topic",()=>{
  const elements={},events={};
  const makeElement=()=>({
    attrs:{},handlers:{},hidden:false,innerHTML:"",value:"",
    setAttribute(k,v){this.attrs[k]=v;},
    addEventListener(k,fn){this.handlers[k]=fn;},
    focus(){this.focused=true;},
    contains(){return false;}
  });
  for(const id of ["course-search-toggle","course-search-panel","course-search-input","course-search-results","course-search-close"])
    elements[id]=makeElement();
  elements["course-search-panel"].hidden=true;
  elements["course-search-toggle"].click=()=>elements["course-search-toggle"].handlers.click();
  const doc={
    getElementById(id){return elements[id];},
    addEventListener(name,handler){events[name]=handler;}
  };
  const live={};
  runInNewContext(read("course-search.js"),{window:live,document:doc});
  let language="tr",selected=null;
  const ui=live.CourseSearch.setup({
    getLessons:()=>language==="tr"?window.COURSE_LESSONS:window.COURSE_LESSONS_EN,
    getLanguage:()=>language,
    onSelect:(lessonId,index,query)=>{selected={lessonId,index,query};}
  });
  const toggle=elements["course-search-toggle"],panel=elements["course-search-panel"],
    input=elements["course-search-input"],results=elements["course-search-results"];
  toggle.click();
  assert.equal(panel.hidden,false);
  assert.equal(toggle.attrs["aria-expanded"],"true");
  assert.equal(input.focused,true);
  input.value="öz taşıyıcı";
  input.handlers.input();
  assert.match(results.innerHTML,/data-search-result="0"/);
  assert.match(results.innerHTML,/Öz taşıyıcı/);
  results.handlers.click({target:{closest:()=>({dataset:{searchResult:"0"}})}});
  assert.deepEqual(selected,{lessonId:"03",index:7,query:"öz taşıyıcı"});
  assert.equal(panel.hidden,true);
  language="en";
  input.value="intrinsic carrier";
  ui.refresh();
  assert.match(results.innerHTML,/Intrinsic carrier/);
  assert.equal(input.placeholder,"Search topics or concepts…");
  toggle.click();
  input.handlers.keydown({key:"Escape",preventDefault(){}});
  assert.equal(panel.hidden,true);
  assert.equal(toggle.focused,true);
});

test("selected multiword Turkish phrase is highlighted without rewriting physics markup",()=>{
  const content="Öz taşıyıcı yoğunluğu sıcaklıkla artar.";
  let replaced=null;
  const node={
    nodeValue:content,
    parentElement:{closest(){return null;}},
    parentNode:{replaceChild(fragment){replaced=fragment;}}
  };
  const doc={
    createTreeWalker(root,kind,filter) {
      assert.equal(filter.acceptNode(node),1);
      let used=false;
      return {nextNode(){if(used)return false;used=true;this.currentNode=node;return true;}};
    },
    createDocumentFragment(){return{children:[],append(v){this.children.push(v);}};},
    createTextNode(text){return{nodeValue:text};},
    createElement(tag){return{tagName:tag,className:"",textContent:""};}
  };
  const live={};
  runInNewContext(read("course-search.js"),{
    window:live,document:doc,NodeFilter:{SHOW_TEXT:4,FILTER_ACCEPT:1,FILTER_REJECT:2}
  });
  const first=live.CourseSearch.highlightTopic({},"oz tasiyici");
  assert.ok(first);
  assert.equal(first.tagName,"mark");
  assert.equal(first.className,"course-search-highlight");
  assert.equal(first.textContent,"Öz taşıyıcı");
  assert.ok(replaced.children.map(x=>x.nodeValue||x.textContent).join("")===content);
});
