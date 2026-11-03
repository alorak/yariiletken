import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const read = file => readFileSync(new URL("../" + file, import.meta.url), "utf8");
const window = {};
for(const name of [
  "lessons.js", "lessons.en.js", "lecture05-06-content.js",
  "activities.js", "lecture05-06-questions.js", "lecture05-06-labs.js"
]) runInNewContext(read(name), {window}, {filename:name});
const m = window.Lecture0506Model;
const close = (a,b,rel=1e-9) =>
  assert.ok(Number.isFinite(a)&&Math.abs(a-b)<=rel*Math.max(1,Math.abs(b)),
    "expected "+a+" ≈ "+b);

test("TR/EN 05 and 06 topics remain aligned and include every slide supplement",()=>{
  for(const id of ["05","06"]){
    const tr=window.COURSE_LESSONS.find(l=>l.id===id);
    const en=window.COURSE_LESSONS_EN.find(l=>l.id===id);
    assert.equal(tr.topics.length,en.topics.length);
    assert.equal(tr.outcomes.length,en.outcomes.length);
    tr.topics.forEach((t,i)=>{
      assert.equal(t.paragraphs.length,en.topics[i].paragraphs.length);
      assert.ok(t.paragraphs.every(Boolean));
      assert.ok(en.topics[i].paragraphs.every(Boolean));
    });
  }
});

test("3kT Boltzmann criterion and 300 K reference values",()=>{
  close(m.ni(300),9.65e9);
  close(m.nc(300),2.8e19);
  close(m.nv(300),1e19);
  close(3*m.kT(300),0.077556,3e-4);
  close(m.fd(0,300),0.5);
  close(m.fd(3*m.kT(300),300),1/(1+Math.exp(3)));
  close(m.boltzmann(3*m.kT(300),300)/m.fd(3*m.kT(300),300)-1,
    Math.exp(-3));
  close(m.nc(600)/m.nc(300),Math.pow(2,1.5));
});

test("charge neutrality and np=ni squared across n, p, compensation and temperature",()=>{
  for(const [T,Nd,Na] of [
    [25,1e15,0],[50,1e15,0],[300,1e15,0],
    [300,1e16,4e15],[300,0,1e16],[30,0,1e16],
    [550,1e15,0],[700,1e15,0],[850,1e17,1e16]
  ]){
    const s=m.neutrality(T,Nd,Na);
    close(s.n+s.acceptors,s.p+s.donors,1e-10);
    close(s.n*s.p/(s.ni*s.ni),1,1e-10);
    assert.ok(s.donors>=0&&s.donors<=Nd);
    assert.ok(s.acceptors>=0&&s.acceptors<=Na);
    assert.ok(Number.isFinite(s.efMinusEi));
  }
});

test("freeze-out, plateau, compensation and intrinsic high-temperature behavior",()=>{
  const cold=m.neutrality(30,1e15,0);
  const room=m.neutrality(300,1e15,0);
  const hot=m.neutrality(700,1e15,0);
  assert.ok(cold.donorFraction<.9);
  assert.ok(room.donorFraction>.99);
  assert.ok(hot.p/hot.n>.5);
  const comp=m.neutrality(300,1e16,4e15);
  assert.ok(Math.abs(comp.n-6e15)/6e15<.02);
  assert.ok(Math.abs(comp.donors+comp.acceptors-1.4e16)/1.4e16<.02);
  const pa=m.neutrality(300,0,1e16);
  assert.ok(pa.p>pa.n);
});

test("all 05/06 questions are bilingual and have one valid correct answer with option feedback",()=>{
  for(const [id,topics] of [["05",7],["06",8]]){
    const qs=window.COURSE_ACTIVITIES[id].questions;
    assert.equal(qs.length,16);
    assert.equal(new Set(qs.map(q=>q.topic)).size,topics);
    for(const q of qs){
      assert.ok(q.topic>=0&&q.topic<topics);
      assert.ok(q.q.tr&&q.q.en);
      assert.ok(q.options.length>=3);
      assert.equal(q.options.length,q.reasons.length);
      assert.ok(q.correct>=0&&q.correct<q.options.length);
      for(const obj of [...q.options,...q.reasons])assert.ok(obj.tr&&obj.en);
    }
  }
});

test("five and six inline topic charts render as standalone SVG",()=>{
  for(const kind of ["dos","fd","product","arr","nd","sources"]){
    const markup=window.Lecture0506Lab.figure(kind,"tr");
    assert.match(markup,/<figure class="l56-topic-figure">/);
    assert.match(markup,/<svg viewBox="0 0 760 320"/);
    assert.match(markup,/<polyline /);
    assert.ok(window.Lecture0506Lab.figure(kind,"en").length>300);
  }
});

test("existing tabs are preserved while 05/06 labs are wired before placeholders",()=>{
  const html=read("index.html"),app=read("app.js");
  for(const file of ["lecture05-06-content.js","lecture05-06-questions.js",
    "lecture05-06-labs.js","lecture05-06.css"])assert.ok(html.includes(file));
  assert.ok(html.indexOf("lessons.en.js")<html.indexOf("lecture05-06-content.js"));
  assert.ok(html.indexOf("activities.js")<html.indexOf("lecture05-06-questions.js"));
  assert.ok(html.indexOf("lecture05-06-labs.js")<html.indexOf("app.js"));
  assert.match(app,/window\.Lecture0506Lab\?\.mount/);
  assert.match(app,/window\.Lecture0506Lab\.figure/);
  assert.match(app,/window\.CourseActivity\?\.render/);
});
