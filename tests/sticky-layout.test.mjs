import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = name => readFileSync(new URL("../" + name, import.meta.url), "utf8");
const html = read("index.html");
const css = read("styles.css");
const app = read("app.js");

test("navbar spans viewport, with brand and lessons left and controls right", () => {
  assert.match(html, /<div class="header-inner">/);
  assert.doesNotMatch(html, /class="wrap header-inner"/);
  const brand = html.indexOf('class="brand"');
  const lessons = html.indexOf('class="lesson-nav"');
  const actions = html.indexOf('class="header-actions"');
  const search = html.indexOf('id="course-search-toggle"');
  const language = html.indexOf('id="language-tr"');
  const theme = html.indexOf('id="theme-toggle"');
  assert.ok(brand >= 0 && brand < lessons && lessons < actions);
  assert.ok(actions < search && search < language && language < theme);
  assert.match(css, /\.header-inner\s*\{[^}]*width:\s*100%;[^}]*padding-inline:\s*clamp\(14px,\s*2vw,\s*32px\)/s);
  assert.match(css, /\.lesson-nav\s*\{[^}]*flex:\s*0 1 auto;/s);
  assert.match(css, /\.lesson-list\s*\{[^}]*display:\s*flex;/s);
  assert.match(css, /\.header-actions\s*\{[^}]*margin-left:\s*auto;/s);
  assert.match(css, /@media \(max-width: 960px\) \{[\s\S]*?\.lesson-nav\s*\{[^}]*flex:\s*0 1 260px;/);
  assert.match(css, /@media \(max-width: 600px\) \{[\s\S]*?\.header-inner\s*\{[^}]*display:\s*grid;/);
});

test("lesson title and all five tabs share one sticky container", () => {
  const start = html.indexOf('id="lesson-sticky"');
  const hero = html.indexOf('id="hero"', start);
  const tabs = html.indexOf('id="content-tabs"', start);
  const workspace = html.indexOf('class="workspace"', start);
  assert.ok(start >= 0 && hero > start && tabs > hero && workspace > tabs);
  assert.match(css, /\.lesson-sticky\s*\{[^}]*position:\s*sticky;[^}]*top:\s*var\(--site-header-height\)/s);
  assert.match(css, /\.site-header\s*\{[^}]*position:\s*sticky;/s);
  assert.match(css, /\.content-tabs\s*\{[^}]*overflow-x:\s*auto;/s);
});

test("offsets adapt to header and translated lesson-title heights", () => {
  assert.match(app, /new ResizeObserver\(refreshStickyOffsets\)/);
  assert.match(app, /observer\.observe\(\$\("\.site-header"\)\)/);
  assert.match(app, /observer\.observe\(\$\("#lesson-sticky"\)\)/);
  assert.match(app, /window\.addEventListener\("resize", refreshStickyOffsets\)/);
  assert.match(app, /refreshStickyOffsets\(\);\s*if \(pendingTopic/);
  assert.match(css, /--reading-offset:\s*calc\(var\(--site-header-height\) \+ var\(--lesson-sticky-height\) \+ 12px\)/);
});

test("learning outcomes stay sticky on desktop independently from the left strip", () => {
  assert.match(css, /\.outcomes-card\s*\{[^}]*position:\s*sticky;[^}]*top:\s*var\(--reading-offset\)/s);
  assert.match(css, /\.outcomes-list\s*\{[^}]*overflow-y:\s*auto;/s);
  assert.match(css, /@media \(max-width:\s*960px\)/);
  assert.match(css, /\.outcomes-card\s*\{ position:\s*static; grid-row:\s*auto;/);
  assert.match(css, /@media \(max-width:\s*600px\)/);
});

test("the one-line lesson synopsis stays, but redundant labels and outcome notes stay removed", () => {
  assert.doesNotMatch(app, /hero-kicker|outcomes-caption|outcomes-note/);
  assert.match(app, /hero-description/);
  assert.doesNotMatch(app, /Bu dersi bitirdiğinde neleri açıklayabildiğini işaretle/);
  assert.doesNotMatch(app, /İşaretlemeler bir sınav sonucu değildir/);
  assert.doesNotMatch(app, /Check what you can explain after completing this lesson/);
  assert.doesNotMatch(app, /These checks are self-assessment, not exam results/);
  assert.match(app, /<h1 id="lesson-title">' \+ lesson\.title/);
  assert.doesNotMatch(app, /'<div class="section-intro"/);
  assert.match(app, /'<nav class="topic-guide"/);
  assert.match(app, /id="outcomes-title">' \+ strings\.outcomes/);
});

test("existing lesson navigation, bilingual controls and progress tracking are retained", () => {
  assert.match(html, /id="lesson-navigation"/);
  assert.match(html, /id="language-tr"/);
  assert.match(html, /id="language-en"/);
  assert.match(app, /yariiletken-progress-v1/);
  assert.match(app, /data-outcome/);
  assert.match(app, /window\.CourseActivity\?\.render/);
});


test("footer attributes the lecture notes in Turkish and English", () => {
  assert.match(html, /id="footer-attribution">Prof\. Dr\. Barış Akaoğlu'nun ders notlarından yararlanılmıştır\.<\/p>/);
  assert.match(app, /footerAttribution: "Prof\. Dr\. Barış Akaoğlu'nun ders notlarından yararlanılmıştır\."/);
  assert.match(app, /footerAttribution: "Based on lecture notes by Prof\. Dr\. Barış Akaoğlu\."/);
  assert.match(app, /\$\("#footer-attribution"\)\.textContent = t\(\)\.footerAttribution;/);
  assert.match(css, /\.footer-attribution\s*\{[^}]*padding-bottom:\s*24px;/);
});
