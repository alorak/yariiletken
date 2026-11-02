import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const read = file => readFileSync(new URL("../" + file, import.meta.url), "utf8");
const window = {};
const context = { window };
for (const file of ["lessons.js", "lessons.en.js", "lesson-figures.js"]) {
  runInNewContext(read(file), context, { filename: file });
}
const tr = window.COURSE_LESSONS.find(lesson => lesson.id === "02");
const en = window.COURSE_LESSONS_EN.find(lesson => lesson.id === "02");

test("lesson 02 retains six topics and ten aligned outcomes in both languages", () => {
  assert.equal(tr.topics.length, 6);
  assert.equal(en.topics.length, 6);
  assert.equal(tr.outcomes.length, 10);
  assert.equal(en.outcomes.length, 10);
  assert.deepEqual(Array.from(tr.topics[0].visual), ["classification"]);
  assert.deepEqual(Array.from(tr.topics[1].visual), ["bond2d"]);
  assert.deepEqual(Array.from(tr.topics[4].visual), ["steady-subset"]);
});

test("classification introduces pure, intrinsic and extrinsic separately", () => {
  for (const locale of ["tr","en"]) {
    const html=window.CourseLessonVisuals.render("classification",locale);
    assert.match(html,/Pure/);
    assert.match(html,/Intrinsic/);
    assert.match(html,/Extrinsic/);
    assert.match(html,/n₀ = p₀ = nᵢ/);
  }
});

test("bonding diagram explicitly distinguishes two-dimensional drawing and actual silicon", () => {
  for (const locale of ["tr","en"]) {
    const html=window.CourseLessonVisuals.render("bond2d",locale);
    assert.match(html,/role="img"/);
    assert.match(html,/class="bond-grid-line"/);
    assert.match(html,/class="bond-tetra-link"/);
    assert.match(html,/109[,.]47°/);
    assert.match(html,/1[,.]12 eV/);
  }
});

test("steady-state subset is explicit and explained in both languages", () => {
  assert.match(tr.topics[4].equation,/⊂/);
  assert.match(en.topics[4].equation,/⊂/);
  for (const locale of ["tr","en"]) {
    const html=window.CourseLessonVisuals.render("steady-subset",locale);
    assert.match(html,/⊂/);
    assert.match(html,/lesson-steady-inner/);
  }
});

test("majority-temperature preview retains the detailed treatment in lesson 06", () => {
  for (const locale of ["tr","en"]) {
    const html=window.CourseLessonVisuals.render("temperature-preview",locale);
    for (const keyword of ["Freeze-out","Extrinsic","Intrinsic"]) assert.ok(html.includes(keyword));
    assert.match(html,/06/);
  }
  assert.equal(window.COURSE_LESSONS.find(x=>x.id==="06").topics.length,8);
  assert.equal(window.COURSE_LESSONS_EN.find(x=>x.id==="06").topics.length,8);
});

test("majority-temperature visualization is now attached to lesson 06", () => {
  const tr06 = window.COURSE_LESSONS.find(x => x.id === "06");
  const en06 = window.COURSE_LESSONS_EN.find(x => x.id === "06");
  assert.deepEqual(Array.from(tr06.topics[6].visual), ["temperature-preview"]);
  assert.deepEqual(Array.from(en06.topics[6].visual), ["temperature-preview"]);
  assert.ok(!tr.topics.some(t => t.visual?.includes("temperature-preview")));
});
