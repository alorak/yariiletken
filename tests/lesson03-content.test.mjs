import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const read = name => readFileSync(new URL("../" + name, import.meta.url), "utf8");
const window = {};
for(const file of [
  "lessons.js", "lessons.en.js", "activities.js", "lesson03-questions.js", "lesson03-figures.js"
]) runInNewContext(read(file), { window }, { filename:file });

const getLesson = (id,locale) =>
  (locale==="en" ? window.COURSE_LESSONS_EN : window.COURSE_LESSONS).find(l=>l.id===id);

test("lesson 03 contains nine bilingual topics and thirteen learning objectives",()=>{
  for(const locale of ["tr","en"]){
    const l = getLesson("03",locale);
    assert.equal(l.topics.length,9);
    assert.equal(l.outcomes.length,13);
    assert.ok(l.topics.every(t=>t.title && t.paragraphs.length>=2 && t.key));
    assert.ok(l.outcomes.every(s=>s.length>25));
  }
});

test("original six topic positions and first seven learning objectives are preserved",()=>{
  const l = getLesson("03","tr");
  assert.match(l.topics[0].title,/Sıcaklık/);
  assert.match(l.topics[3].title,/Üretim/);
  assert.match(l.topics[4].title,/Saçılma/);
  assert.match(l.topics[5].title,/Bağ modeli/);
  assert.match(l.outcomes[0],/termal uyarılma/);
  assert.match(l.outcomes[6],/nicel taşıyıcı hesabı/);
  assert.equal(getLesson("02","tr").outcomes.length,10);
  assert.equal(getLesson("06","tr").outcomes.length,10);
});

test("the eight visuals are attached to their intended topics and translate completely",()=>{
  const expected = [
    ["interference","dipole"],[],[],["generation"],["scattering"],
    ["bond"],["mass"],["concentration"],["equation"]
  ];
  for(const locale of ["tr","en"]){
    const topics=getLesson("03",locale).topics;
    for(let i=0;i<expected.length;i++){
      assert.deepEqual(Array.from(topics[i].visual03 || []), expected[i]);
      for(const kind of expected[i]){
        const html = window.Lesson03Figures.render(kind,locale);
        assert.match(html,/class="lesson-figure l03-figure"/);
        assert.ok(html.length>500, "Figure missing content: "+kind+"/"+locale);
        assert.match(html,/lesson-figure-note/);
        assert.match(html,/role="img"|class="l03-stat-grid"/);
      }
    }
  }
});

test("thermal waves and dipole visuals explicitly state physical limitations",()=>{
  const tr=window.Lesson03Figures.render("interference","tr");
  const en=window.Lesson03Figures.render("dipole","en");
  assert.match(tr,/nitel bir benzetme/);
  assert.match(tr,/momentum korunumu/);
  assert.match(en,/centrosymmetric/);
  assert.match(en,/one-phonon/);
});

test("generation/recombination and scattering are distinct diagrams",()=>{
  for(const locale of ["tr","en"]){
    const g=window.Lesson03Figures.render("generation",locale);
    const s=window.Lesson03Figures.render("scattering",locale);
    assert.match(g,/l03-band-conduction/);
    assert.match(g,/l03-band-valence/);
    assert.match(g,/l03-electron/);
    assert.match(g,/l03-hole/);
    assert.match(s,/l03-motion/);
    assert.match(s,/l03-cross/);
  }
});

test("effective mass and carrier-density visuals preserve lecture scales",()=>{
  for(const locale of ["tr","en"]){
    const mass=window.Lesson03Figures.render("mass",locale);
    const size=window.Lesson03Figures.render("concentration",locale);
    assert.match(mass,/0\.26 m₀/);
    assert.match(mass,/0\.35–0\.37 m₀/);
    assert.match(size,/5×10²²/);
    assert.match(size,/≈10¹⁰/);
    assert.match(size,/5×10¹²/);
  }
});

test("qualitative p-model and quantitative band model are separated",()=>{
  for(const locale of ["tr","en"]){
    const html=window.Lesson03Figures.render("equation",locale);
    assert.match(html,/nᵢ = N/);
    assert.match(html,/exp\[/);
    assert.match(html,/1\/T/);
    assert.match(html,/p=0[,.]5|p=0\.5/);
    assert.match(html,/qualitative|nitel/);
  }
});

test("expanded quiz covers all nine topics in both languages, with feedback",()=>{
  const q=window.COURSE_ACTIVITIES["03"].questions;
  assert.equal(q.length,15);
  assert.equal(new Set(q.map(x=>x.topic)).size,9);
  for(const item of q){
    assert.ok(item.topic>=0&&item.topic<9);
    assert.ok(Number.isInteger(item.correct)&&item.correct>=0&&item.correct<3);
    assert.equal(item.options.length,3);
    assert.equal(item.reasons.length,3);
    for(const locale of ["tr","en"]){
      assert.ok(item.q[locale]);
      for(const x of [...item.options,...item.reasons])assert.ok(x[locale]);
    }
  }
  assert.equal(window.COURSE_ACTIVITIES["02"].questions.length,8);
});

test("script load order ensures translations, question additions and diagrams work",()=>{
  const html=read("index.html");
  const app=read("app.js");
  const activities=html.indexOf("activities.js");
  const questions=html.indexOf("lesson03-questions.js");
  const engine=html.indexOf("activity-engine.js");
  const visuals=html.indexOf("lesson03-figures.js");
  const router=html.indexOf("app.js");
  assert.ok(activities<questions&&questions<engine);
  assert.ok(visuals<router);
  assert.match(app,/Lesson03Figures\.render/);
});
