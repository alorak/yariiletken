import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const read = filename => readFileSync(new URL("../" + filename, import.meta.url), "utf8");
const files = ["lessons.js", "lessons.en.js", "lesson-figures.js", "lesson-extras.js"];
const window = {};
for (const name of files) runInNewContext(read(name), { window }, { filename: name });
const app = read("app.js");
const html = read("index.html");
const css = read("styles.css");

test("each of the five modules displays its original concise synopsis", () => {
  assert.match(app, /class="hero-description"/);
  assert.match(css, /\.hero-description\s*\{[^}]*white-space:\s*nowrap;[^}]*text-overflow:\s*ellipsis;/s);
  assert.equal(window.COURSE_LESSONS.length,5);
  assert.equal(window.COURSE_LESSONS_EN.length,5);
  for(const l of window.COURSE_LESSONS) assert.ok(l.description.length>30);
  for(const l of window.COURSE_LESSONS_EN) assert.ok(l.description.length>30);
});

test("lecture 02: 3 non-equilibrium scenarios and opposing pn-junction currents", () => {
  const lesson = window.COURSE_LESSONS.find(l=>l.id==="02");
  assert.deepEqual(Array.from(lesson.topics[3].extraVisual),["non-equilibrium","equilibrium-value"]);
  const sample=window.SemiconductorLessonExtras.render("non-equilibrium","tr");
  assert.match(sample,/Sıcaklık gradyanı/);
  assert.match(sample,/aydınlatma/i);
  assert.match(sample,/Dış kutuplama/);
  const balance=window.SemiconductorLessonExtras.render("equilibrium-value","tr");
  assert.match(balance,/p–n/);
  assert.match(balance,/\+1000/);
  assert.match(balance,/-1000/);
  assert.match(balance,/\+1010/);
  assert.match(balance,/\+10/);
  assert.match(balance,/cihaz ölçümü değildir/);
});

test("diamond silicon structure diagrams use fcc coordinates and fractional z/a labels", () => {
  const l = window.COURSE_LESSONS.find(x=>x.id==="02");
  assert.deepEqual(Array.from(l.topics[2].extraVisual),["silicon-cell"]);
  for(const locale of ["tr","en"]) {
    const s = window.SemiconductorLessonExtras.render("silicon-cell",locale);
    for(const token of ['viewBox="0 0 390 323"','viewBox="0 0 350 322"','si-cell-bond-hi','si-proj-bond','5.43 Å','5 × 10²²','¼','½','¾'])
      assert.ok(s.includes(token), "Missing "+token+" in "+locale);
    assert.match(s,/role="img"/);
    assert.match(s,/diamond/i);
  }
});

test("majority carrier numbers are in lesson 06, not in lesson 02", () => {
  const l02=window.COURSE_LESSONS.find(x=>x.id==="02");
  const l06=window.COURSE_LESSONS.find(x=>x.id==="06");
  assert.ok(l02.topics.every(t=>!(t.visual||[]).includes("temperature-preview")));
  assert.deepEqual(Array.from(l06.topics[6].visual),["temperature-preview"]);
  assert.deepEqual(Array.from(l06.topics[6].extraVisual),["majority-numbers"]);
  for(const locale of ["tr","en"]) {
    const t=window.SemiconductorLessonExtras.render("majority-numbers",locale);
    for(const v of ["10¹⁵","10¹⁶","10¹⁷","10⁵","10⁴","10³","20 ppb"])assert.ok(t.includes(v));
    assert.match(t,/300 K/);
    assert.match(t,/nᵢ/);
  }
  // n_i^2 / Nd at 300 K, with illustrative n_i=10^10 cm^-3.
  for(const nd of [1e15,1e16,1e17]) assert.equal(1e20/nd, {1e15:1e5,1e16:1e4,1e17:1e3}[nd]);
  assert.equal((1e15/5e22)*1e9,20);
});

test("visual additions preserve original outcome indices and question mapping", () => {
  for (const locale of ["tr","en"]) {
    const modules=locale==="tr"?window.COURSE_LESSONS:window.COURSE_LESSONS_EN;
    assert.equal(modules.find(x=>x.id==="02").topics.length,6);
    assert.equal(modules.find(x=>x.id==="02").outcomes.length,10);
    assert.equal(modules.find(x=>x.id==="06").topics.length,8);
    assert.equal(modules.find(x=>x.id==="06").outcomes.length,10);
  }
  assert.ok(html.indexOf("lesson-extras.js")>html.indexOf("lesson-figures.js"));
  assert.ok(html.indexOf("lesson-extras.js")<html.indexOf("app.js"));
  assert.match(app,/window.SemiconductorLessonExtras\.render/);
});
