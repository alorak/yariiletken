import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const read = name => readFileSync(new URL("../" + name, import.meta.url), "utf8");
const app = read("app.js");
const css = read("styles.css");
const window = {};
runInNewContext(read("lessons.js"), { window });
runInNewContext(read("lessons.en.js"), { window });

test("all five lessons have numbered steps generated from their actual topic counts", () => {
  const tr = window.COURSE_LESSONS, en = window.COURSE_LESSONS_EN;
  assert.deepEqual(Array.from(tr, l => l.id), ["02", "03", "04", "05", "06"]);
  assert.deepEqual(Array.from(tr, l => l.topics.length), [6, 9, 7, 7, 8]);
  assert.deepEqual(Array.from(en, l => l.topics.length), [6, 9, 7, 7, 8]);
  assert.match(app, /lesson\.topics\.map\(\(topic, index\) =>/);
  assert.match(app, /'data-topic="' \+ \(index \+ 1\)/);
  assert.match(app, /'<span aria-hidden="true">' \+ \(index \+ 1\)/);
  assert.doesNotMatch(app, /'<div class="section-intro"/);
});

test("one-color topic boxes remain sticky below the lesson title and tabs", () => {
  assert.match(css, /\.topic-guide\s*\{[^}]*position:\s*sticky;[^}]*top:\s*var\(--reading-offset\);/s);
  assert.match(css, /\.topic-step\[aria-current="step"\]/);
  assert.match(css, /\.topic-index\s*\{[^}]*flex-wrap:\s*nowrap;[^}]*overflow-x:\s*auto;/s);
  assert.match(css, /\.topic-index::-webkit-scrollbar\s*\{\s*display:\s*none;/s);
  assert.match(css, /\.topic-step::after\s*\{[^}]*border-top:/s);
  assert.match(css, /\.topic-card\s*\{[^}]*scroll-margin-top:\s*calc\(var\(--topic-navigation-height\) \+ 10px\)/s);
});

test("step controls scroll to topic, show current article and permit keyboard navigation", () => {
  assert.match(app, /topics\[index\]\?\.scrollIntoView\(/);
  assert.match(app, /aria-current", "step"/);
  assert.match(app, /window\.addEventListener\("scroll", scheduleUpdate, \{ passive: true \}\)/);
  assert.match(app, /\["ArrowLeft", "ArrowRight", "Home", "End"\]/);
  assert.match(app, /topicNavCleanup = \(\) => \{/);
  assert.match(app, /resizeObserver\?\.disconnect\(\)/);
  assert.match(app, /clearTopicNavigation\(\);\s*document\.documentElement\.lang/);
  assert.match(app, /ResizeObserver\(\(\) => \{ refreshTopicNavigationOffsets\(\)/);
});

test("learning outcomes have a single compact title and keep completion counters", () => {
  assert.match(app, /'<h2 id="outcomes-title">' \+ strings\.outcomes/);
  assert.doesNotMatch(app, /'<span class="eyebrow">' \+ strings\.objectives/);
  assert.doesNotMatch(app, /'<div class="progress-track"/);
  assert.match(app, /outcome-counter/);
  assert.match(app, /data-outcome/);
  assert.match(css, /\.outcomes-card h2\s*\{[^}]*font:\s*800 11px/);
  assert.match(css, /\.outcomes-list li:first-child\s*\{[^}]*border-top:\s*0;/s);
});

test("sticky outcomes offset incorporates the topic strip height across viewports", () => {
  assert.match(css, /--topic-navigation-height:\s*0px/);
  assert.match(css, /\.outcomes-card\s*\{[^}]*top:\s*calc\(var\(--reading-offset\) \+ var\(--topic-navigation-height\) \+ 8px\)/s);
  assert.match(css, /@media \(max-width:\s*960px\)/);
  assert.match(css, /@media \(max-width:\s*600px\)/);
  assert.match(app, /document\.documentElement\.style\.setProperty\("--topic-navigation-height"/);
  assert.match(app, /refreshTopicNavigationOffsets\(\);\s*\}/);
});

test("other learning modes and translations remain reachable", () => {
  assert.match(app, /window\.CourseActivity\?\.render/);
  assert.match(app, /getChecked\(lesson\)/);
  assert.match(app, /yariiletken-progress-v1/);
  assert.match(app, /language === "en"/);
});
