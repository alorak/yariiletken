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
  assert.deepEqual(Array.from(tr, l => l.topics.length), [6, 9, 8, 7, 8]);
  assert.deepEqual(Array.from(en, l => l.topics.length), [6, 9, 8, 7, 8]);
  assert.match(app, /lesson\.topics\.map\(\(topic, index\) =>/);
  assert.match(app, /data-topic="' \+ \(index \+ 1\)/);
  assert.match(app, /span aria-hidden="true">' \+ \(index \+ 1\)/);
  assert.doesNotMatch(app, /'<div class="section-intro"/);
});

test("numbered topic boxes stay sticky directly beneath the lesson tabs within the left column", () => {
  assert.match(css, /\.topic-guide\s*\{[^}]*position:\s*sticky;[^}]*top:\s*var\(--topic-sticky-top\);/s);
  assert.match(css, /\.topic-step\[aria-current="step"\]/);
  assert.match(css, /\.topic-index\s*\{[^}]*flex-wrap:\s*nowrap;[^}]*overflow-x:\s*auto;/s);
  assert.match(css, /\.topic-index::-webkit-scrollbar\s*\{\s*display:\s*none;/s);
  assert.match(css, /\.topic-step::after\s*\{[^}]*border-top:/s);
  assert.match(css, /\.topic-card\s*\{[^}]*scroll-margin-top:\s*calc\(var\(--topic-navigation-height\) \+ 20px\)/s);
});

test("the step strip occupies only the left column; right outcomes are separate", () => {
  assert.match(app, /'<div class="learning-layout"><div class="topics-column">'/);
  const guideStart = app.indexOf('id="topic-guide"');
  const endLeft = app.indexOf("topics + '</div>'", guideStart);
  const aside = app.indexOf("'<aside class=\"outcomes-card\"", guideStart);
  assert.ok(guideStart > 0 && endLeft > guideStart && aside > endLeft,
    "Topic stepper and topics belong to the left column; outcomes start after it");
  assert.match(css, /\.topics-column\s*\{[^}]*min-width:\s*0;/s);
  assert.match(css, /--topic-sticky-top:\s*calc\(var\(--site-header-height\) \+ var\(--lesson-sticky-height\)\)/);
  assert.match(css, /\.topic-guide\s*\{[^}]*background:\s*var\(--bg\);[^}]*box-shadow:\s*0 -6px 0 var\(--bg\)/s);
});

test("a one-column viewport stacks reading before outcomes without overlapping sticky panels", () => {
  assert.match(css, /@media \(max-width:\s*960px\)\s*\{[\s\S]*?\.learning-layout\s*\{\s*grid-template-columns:\s*1fr;/);
  assert.match(css, /\.outcomes-card\s*\{\s*position:\s*static;\s*grid-row:\s*auto;/);
  assert.match(css, /\.outcomes-card\s*\{[^}]*top:\s*var\(--reading-offset\)/);
});

test("step controls scroll to topic, show current article and permit keyboard navigation", () => {
  assert.match(app, /scrollToCourseTopic\(topics\[index\]\)/);
  assert.match(app, /aria-current", "step"/);
  assert.match(app, /window\.addEventListener\("scroll", scheduleUpdate, \{ passive: true \}\)/);
  assert.match(app, /\["ArrowLeft", "ArrowRight", "Home", "End"\]/);
  assert.match(app, /topicNavCleanup = \(\) => \{/);
  assert.match(app, /resizeObserver\?\.disconnect\(\)/);
  assert.match(app, /clearTopicNavigation\(\);\s*document\.documentElement\.lang/);
  assert.match(app, /ResizeObserver\(\(\) => \{ refreshTopicNavigationOffsets\(\)/);
});

test("topic jumps use one measured sticky boundary without double scroll-padding", () => {
  assert.match(app, /function scrollToCourseTopic\(target\)/);
  assert.match(app, /siteHeight \+ stickyHeight \+ guideHeight \+ 9/);
  assert.match(app, /window\.scrollTo\(\{ top, behavior: "instant" \}\)/);
  assert.doesNotMatch(app, /topics\[index\]\?\.scrollIntoView\(/);
  assert.match(app, /getBoundingClientRect\(\)\.bottom \+ 16/);
  assert.match(app, /atPageEnd \? topics\.length - 1 : index/);
});

test("learning outcomes have a single compact title and keep completion counters", () => {
  assert.match(app, /id="outcomes-title">' \+ strings\.outcomes/);
  assert.doesNotMatch(app, /'<span class="eyebrow">' \+ strings\.objectives/);
  assert.doesNotMatch(app, /'<div class="progress-track"/);
  assert.match(app, /outcome-counter/);
  assert.match(app, /data-outcome/);
  assert.match(css, /\.outcomes-card h2\s*\{[^}]*font:\s*800 11px/);
  assert.match(css, /\.outcomes-list li:first-child\s*\{[^}]*border-top:\s*0;/s);
});

test("outcomes stay independent of the left sticky topic strip at all viewport sizes", () => {
  assert.match(css, /--topic-navigation-height:\s*0px/);
  assert.match(css, /\.outcomes-card\s*\{[^}]*top:\s*var\(--reading-offset\)/s);
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


test("click, scroll tracking and cleanup work with a minimal DOM harness", () => {
  const fragment = app.slice(
    app.indexOf("  function scrollToCourseTopic("),
    app.indexOf("  function navigateToTopic(")
  ) + "\n" + app.slice(
    app.indexOf("  function refreshTopicNavigationOffsets()"),
    app.indexOf("  function renderNarration(")
  );
  assert.ok(fragment.includes("function setupTopicStepper"));
  const listeners = {};
  const properties = {};
  const buttons = Array.from({ length:3 }, (_, i) => ({
    offsetLeft:i*76, offsetWidth:70, attrs:{}, events:{},
    setAttribute(key,value){this.attrs[key]=value;},
    removeAttribute(key){delete this.attrs[key];},
    addEventListener(type,handler){this.events[type]=handler;},
    focus(){this.focused=true;}
  }));
  const strip = {scrollLeft:0,clientWidth:125,querySelectorAll(){return buttons;}};
  const guide = {querySelector(){return strip;},getBoundingClientRect(){return {height:52,bottom:170};}};
  let positions=[200,700,1300];
  const topics=positions.map((_, i) => ({
    getBoundingClientRect(){return {top:positions[i]};}
  }));
  const document = {
    documentElement:{style:{setProperty(key,value){properties[key]=value;}}},
    getElementById(id){return topics[Number(id.split("-").at(-1))-1];}
  };
  let frames=[],nextFrame=1;
  const raf=handler=>{const id=nextFrame++;frames.push({id,handler});return id;};
  const cancelFrame=id=>{frames=frames.filter(frame=>frame.id!==id);};
  const runFrames=()=>{while(frames.length)frames.shift().handler();};
  const window={
    scrollY:0,innerHeight:600,
    scrollTo(options){this.lastScroll=options;},
    matchMedia:()=>({matches:false}),
    addEventListener(type,handler){listeners[type]=handler;},
    removeEventListener(type,handler){if(listeners[type]===handler)delete listeners[type];}
  };
  const Observer = class {
    constructor(handler){this.handler=handler;}
    observe(){}
    disconnect(){this.disconnected=true;}
  };
  const create = new Function("$","document","window","ResizeObserver","requestAnimationFrame","cancelAnimationFrame",
    '"use strict";let topicNavCleanup=null;\n'+fragment+
    "\nreturn {setupTopicStepper,clearTopicNavigation};");
  const controller=create(
    selector=>selector==="#topic-guide"?guide:null,
    document,window,Observer,raf,cancelFrame
  );
  controller.setupTopicStepper({id:"02",topics:[{},{},{}]});
  runFrames();
  assert.equal(buttons[0].attrs["aria-current"],"step");
  assert.equal(properties["--topic-navigation-height"],"52px");
  buttons[2].events.click();
  assert.equal(window.lastScroll.behavior,"instant");
  assert.equal(window.lastScroll.top,1300-52-9);
  assert.equal(buttons[2].attrs["aria-current"],"step");
  positions=[-700,-100,guide.getBoundingClientRect().bottom+8];
  listeners.scroll();
  runFrames();
  assert.equal(buttons[2].attrs["aria-current"],"step");
  assert.equal(buttons[0].attrs["aria-current"],undefined);
  assert.ok(strip.scrollLeft>0);
  controller.clearTopicNavigation();
  assert.equal(listeners.scroll,undefined);
  assert.equal(properties["--topic-navigation-height"],"0px");
});
