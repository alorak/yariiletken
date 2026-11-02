import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const window = {};
const context = { window, Math, Number, Array, Object, String, Set, JSON };
for (const name of ["lessons.js", "lessons.en.js", "activities.js", "lesson03-questions.js", "activity-engine.js"]) {
  runInNewContext(readFileSync(new URL("../" + name, import.meta.url), "utf8"), context, {
    filename: name
  });
}

test("02 and 03 retain two graphs and two simulations, with expanded 03 questions", () => {
  const activities = window.COURSE_ACTIVITIES;
  for (const id of ["02", "03"]) {
    assert.equal(activities[id].graphs.length, 2);
    assert.equal(activities[id].simulations.length, 2);
    assert.equal(activities[id].questions.length, id === "03" ? 15 : 8);
    const outcomes = window.COURSE_LESSONS.find(lesson => lesson.id === id).topics.length;
    assert.equal(new Set(activities[id].questions.map(q => q.topic)).size, outcomes,
      "Each lesson topic needs at least one assessment question");
    for (const question of activities[id].questions) {
      assert.ok(question.topic >= 0 && question.topic < outcomes);
      assert.equal(question.options.length, 3);
      assert.equal(question.reasons.length, 3);
      assert.ok(question.correct >= 0 && question.correct < 3);
      for (const locale of ["tr", "en"]) {
        assert.ok(question.q[locale]);
        for (const option of question.options) assert.ok(option[locale]);
        for (const reason of question.reasons) assert.ok(reason[locale]);
      }
    }
  }
});

test("n_i(T) uses actual carrier concentration on a linear y-axis, not log10", () => {
  const plot = window.CourseActivity.graphModels["intrinsic-temperature"];
  const references = [1e10, 2.4e13, 1.8e6];
  for (const locale of ["tr", "en"]) {
    for (let material = 0; material < 3; material++) {
      for (const temp of [200, 300, 500]) {
        const c = plot.config({ temp, material }, locale);
        assert.equal(c.lines.length, 1);
        assert.equal(c.yMin, 0);
        assert.ok(c.yMax > 0);
        assert.equal(c.yTickFormat, "scientific");
        assert.ok(c.yLabel.includes("cm⁻³"));
        assert.ok(!c.yLabel.includes("log"));
        assert.equal(c.markerX, temp);
        assert.ok(c.xMin <= temp && temp <= c.xMax);
        assert.ok(c.xMax-c.xMin <= 100);
        assert.ok(c.yTicks.every(n => n >= 0 && n <= c.yMax));
        for (const x of [c.xMin,temp,c.xMax]) {
          assert.ok(c.lines[0].fn(x) > 0 && c.lines[0].fn(x) <= c.yMax);
        }
        if (temp === 300) {
          assert.ok(Math.abs(c.lines[0].fn(300)/references[material]-1) < 1e-12);
        }
        assert.equal(c.readout.length, 3);
      }
    }
  }
  const si = plot.config({ temp: 300, material: 0 }, "tr").lines[0];
  assert.ok(si.fn(400) > si.fn(300));
  assert.ok(si.fn(200) < si.fn(300));
});

test("band-gap teaching model: larger gap yields lower intrinsic concentration", () => {
  const curve = window.CourseActivity.graphModels["gap-sensitivity"]
    .config({ temp: 300 }, "en").lines[0].fn;
  assert.ok(Math.abs(curve(1.12) - 10) < 1e-9);
  assert.ok(curve(1.5) < curve(0.8));
});

test("single-lifetime decay: one lifetime corresponds to exp(-1)", () => {
  const model = window.CourseActivity.graphModels["lifetime-decay"]
    .config({ tau: 5, elapsed: 5 }, "tr");
  assert.ok(Math.abs(model.lines[0].fn(5) - Math.exp(-1)) < 1e-12);
  const longer = window.CourseActivity.graphModels["lifetime-decay"]
    .config({ tau: 10, elapsed: 5 }, "tr");
  assert.ok(longer.lines[0].fn(5) > model.lines[0].fn(5));
});

test("finite generation pulse is continuous and decays after turn-off", () => {
  const curve = window.CourseActivity.graphModels["generation-pulse"]
    .config({ tau: 3, generation: 3 }, "tr").lines[0].fn;
  assert.equal(curve(0), 0);
  assert.ok(Math.abs(curve(4) - curve(4 + 1e-9)) < 1e-7);
  assert.ok(curve(8) < curve(4));
});

test("all graphs have valid ranges and visible axis labels in both languages", () => {
  for (const graph of Object.values(window.CourseActivity.graphModels)) {
    for (const locale of ["tr", "en"]) {
      const p = Object.fromEntries(graph.controls(locale).map(c => [c[0], c[5]]));
      const config = graph.config(p, locale);
      assert.ok(config.xMin < config.xMax);
      assert.ok(config.yMin < config.yMax);
      assert.ok(config.xLabel);
      assert.ok(config.yLabel);
      for (const line of config.lines) {
        for (let i = 0; i <= 10; i++) {
          const x = config.xMin + (config.xMax - config.xMin) * i / 10;
          assert.ok(Number.isFinite(line.fn(x)));
        }
      }
    }
  }
});

test("other lessons remain available for future implementations", () => {
  assert.deepEqual(Array.from(window.COURSE_LESSONS, x => x.id), ["02", "03", "04", "05", "06"]);
  assert.equal(window.COURSE_LESSONS.length, window.COURSE_LESSONS_EN.length);
});
