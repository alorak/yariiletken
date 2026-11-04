import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const read = path => readFileSync(new URL("../" + path, import.meta.url), "utf8");
const window = {};
const scripts = [
  "lessons.js", "lessons.en.js", "lecture05-06-content.js", "lecture07-content.js",
  "activities.js", "lecture05-06-questions.js", "lecture07-questions.js",
  "lecture05-06-labs.js", "lecture07-labs.js"
];
for (const name of scripts) runInNewContext(read(name), { window }, { filename: name });
const m = window.Lecture0506Model, lab = window.Lecture07Lab;
const close = (actual, expected, rel=1e-7) => assert.ok(
  Number.isFinite(actual) && Math.abs(actual-expected) <= rel*Math.max(1,Math.abs(expected)),
  "Expected "+actual+" ~= "+expected
);

test("lecture 07 registers as the sixth lesson in both languages", () => {
  assert.equal(window.COURSE_LESSONS.length, 6);
  assert.equal(window.COURSE_LESSONS_EN.length, 6);
  const tr=window.COURSE_LESSONS[5], en=window.COURSE_LESSONS_EN[5];
  assert.equal(tr.id, "07"); assert.equal(en.id, "07");
  assert.equal(tr.topics.length,10); assert.equal(en.topics.length,10);
  assert.equal(tr.outcomes.length,10); assert.equal(en.outcomes.length,10);
  assert.ok(tr.gGuide.title.includes("g=1"));
  assert.ok(tr.gGuide.intro.includes("g=1"));
  assert.ok(tr.gGuide.caveat.includes("g_D=2"));
  assert.ok(en.gGuide.title.includes("g=1"));
  for(let i=0;i<10;i++){
    assert.equal(tr.topics[i].paragraphs.length,en.topics[i].paragraphs.length);
    assert.ok(tr.topics[i].slideReference.includes("lec07.pdf"));
    assert.ok(tr.topics[i].paragraphs.every(Boolean));
    assert.ok(en.topics[i].paragraphs.every(Boolean));
  }
  assert.ok(tr.topics.filter(t=>t.gContext).length>=5);
});

test("g=1 lecture convention changes numeric occupancy but not charge neutrality", () => {
  const s1=m.neutrality(77,1e15,0,1,1);
  const s2=m.neutrality(77,1e15,0,2,4);
  close(s1.donorFraction,.83226,2e-4);
  close(s2.donorFraction,.73696,2e-4);
  assert.ok(s1.donorFraction>s2.donorFraction);
  for(const s of [s1,s2]){
    close(s.n+s.acceptors,s.p+s.donors,1e-10);
    close(s.n*s.p/(s.ni*s.ni),1,1e-10);
  }
});

test("legacy lesson 06 keeps its gD=2 gA=4 default after the extension", () => {
  for(const [T,Nd,Na] of [[30,1e15,0],[77,1e15,0],[300,1e16,4e15]]) {
    const before=m.neutrality(T,Nd,Na), explicit=m.neutrality(T,Nd,Na,2,4);
    close(before.n,explicit.n);
    close(before.p,explicit.p);
    close(before.donors,explicit.donors);
    close(before.acceptors,explicit.acceptors);
  }
});

test("freeze-out root reproduces the slide's g=1 77 K example", () => {
  const T=77,Nd=1e15;
  const ncprime=m.nc(T)*Math.exp(-m.ED/m.kT(T));
  const fraction=2/(1+Math.sqrt(1+4*Nd/ncprime));
  close(fraction,.83226,2e-4);
  const lower=2/(1+Math.sqrt(1+8*Nd/ncprime));
  close(lower,.73696,2e-4);
});

test("full-ionization crossover has golden-ratio electron density", () => {
  const Nd=1e15,ni=Nd;
  close((Nd+Math.sqrt(Nd*Nd+4*ni*ni))/(2*Nd),(1+Math.sqrt(5))/2);
});

test("all lecture07 questions are translated with option-specific feedback", () => {
  const qs=window.COURSE_ACTIVITIES["07"].questions;
  assert.equal(qs.length,20);
  assert.deepEqual([...new Set(qs.map(q=>q.topic))].sort((a,b)=>a-b),
    [0,1,2,3,4,5,6,7,8,9]);
  for(const q of qs){
    assert.ok(q.q.tr&&q.q.en);
    assert.equal(q.options.length,3);
    assert.equal(q.reasons.length,3);
    assert.ok(q.correct>=0&&q.correct<3);
    for(const a of [...q.options,...q.reasons])assert.ok(a.tr&&a.en);
  }
});

test("lecture07 inline diagrams and graph curves are present in both languages", () => {
  for(const kind of lab.chartKinds) {
    for(const lang of ["tr","en"]){
      const html=lab.figure(kind,lang);
      assert.match(html,/<figure class="l56-topic-figure/);
      assert.ok(html.includes("l07-energy")||html.includes("<svg"));
    }
  }
  assert.match(lab.figure("ionization","tr"),/g_D=2/);
  assert.match(lab.figure("neutrality","tr"),/polyline/);
});

test("all tabs display the g explanation and are wired to the 07 labs", () => {
  const html=read("index.html"), app=read("app.js"), css=read("lecture07.css");
  for(const asset of ["lecture07-content.js","lecture07-questions.js","lecture07-labs.js","lecture07.css"])
    assert.ok(html.includes(asset),asset);
  assert.ok(html.indexOf("lessons.en.js")<html.indexOf("lecture07-content.js"));
  assert.ok(html.indexOf("activities.js")<html.indexOf("lecture07-questions.js"));
  assert.ok(html.indexOf("lecture07-labs.js")<html.indexOf("app.js"));
  assert.match(app,/function guideMarkup\(lesson\)/);
  assert.match(app,/guideMarkup\(lesson\) \+ topics/);
  assert.match(app,/tabId !== "anlatim" && lesson\.gGuide/);
  assert.match(app,/Lecture07Lab\?\.mount/);
  assert.match(app,/Lecture07Lab\.figure/);
  assert.match(css,/\.lecture-g-guide\s*\{/);
  assert.match(css,/\.lecture-g-context\s*\{/);
});
