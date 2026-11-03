import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {runInNewContext} from "node:vm";
const read=file=>readFileSync(new URL("../"+file,import.meta.url),"utf8");
const files=["lessons.js","lessons.en.js","activities.js","lesson03-questions.js",
 "intrinsic-density-questions.js","lesson02-04-questions.js","activity-engine.js"];
const w={},memory=new Map();
const localStorage={getItem:key=>memory.get(key)||null,setItem:(key,value)=>memory.set(key,value)};
class FakeNode {
 constructor(){
  this.children=[];this.buttons=[];this.handlers={};this.dataset={};
  this.disabled=false;this.value="";this._html="";
 }
 set innerHTML(value){
  this._html=String(value);this.buttons=[];
  for(const result of this._html.matchAll(/<button\b[^>]*>/g)){
   const tag=result[0],name=/\bdata-(step|answer|prev|next|again|back)(?:="([^"]*)")?/.exec(tag);
   if(name){
    const button=new FakeNode();
    button.dataset[name[1]]=name[2]||"";
    button.disabled=/\bdisabled(?:\s|>|=)/.test(tag);
    this.buttons.push(button);
   }
  }
 }
 get innerHTML(){return this._html;}
 addEventListener(name,fn){this.handlers[name]=fn;}
 append(node){this.children.push(node);}
 replaceChildren(...nodes){this.children=[...nodes];}
 querySelectorAll(selector){
  const key=/^\[data-(\w+)\]$/.exec(selector)?.[1];
  if(key)return this.buttons.filter(btn=>Object.hasOwn(btn.dataset,key));
  return [];
 }
 querySelector(selector){return this.querySelectorAll(selector)[0]||null;}
}
const document={createElement:()=>new FakeNode()};
const context={window:w,document,localStorage};
for(const file of files)runInNewContext(read(file),context,{filename:file});
const ids=["02","03","04"],counts={"02":13,"03":25,"04":22};

test("02/03 append-only question extension retains the original indices and persisted answers",()=>{
 const original={};
 const base={};
 for(const file of files.slice(0,5))runInNewContext(read(file),{window:base},{filename:file});
 for(const id of ["02","03"]){
  const old=base.COURSE_ACTIVITIES[id].questions,newer=w.COURSE_ACTIVITIES[id].questions;
  assert.ok(newer.length>old.length);
  for(let i=0;i<old.length;i++)
   assert.equal(JSON.stringify(newer[i]),JSON.stringify(old[i]),"original "+id+" #"+(i+1)+" changed");
 }
});

test("all three modules have full topic coverage and localized per-option explanations",()=>{
 for(const id of ids){
  const lesson=w.COURSE_LESSONS.find(l=>l.id===id);
  const questions=w.COURSE_ACTIVITIES[id].questions;
  assert.equal(questions.length,counts[id]);
  assert.deepEqual([...new Set(questions.map(q=>q.topic))].sort((a,b)=>a-b),
    Array.from({length:lesson.topics.length},(_,i)=>i));
  for(const q of questions){
   assert.ok(Number.isInteger(q.topic)&&q.topic>=0&&q.topic<lesson.topics.length);
   assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<3);
   assert.equal(q.options.length,3);assert.equal(q.reasons.length,3);
   for(const lang of ["tr","en"]){
    assert.ok(q.q[lang].length>15);
    for(const o of q.options)assert.ok(o[lang].length>2);
    for(const why of q.reasons)assert.ok(why[lang].length>10);
   }
  }
 }
});

test("02 now covers projections, density ratios, detailed balance and linear n_i(T)",()=>{
 const q=w.COURSE_ACTIVITIES["02"].questions.map(q=>q.q.tr).join(" ");
 for(const t of ["[001]","5×10²²","sürüklenme","aydınlatmada","nᵢ–T"])assert.ok(q.includes(t),t);
});

test("03 now assesses photogeneration, impact, radiative, SRH, Auger and 300 K kT",()=>{
 const data=w.COURSE_ACTIVITIES["03"].questions.map(q=>q.q.tr).join(" ");
 for(const t of ["impact ionization","radiative","SRH","Auger","0,026 eV","NᶜNᵛ"])assert.ok(data.includes(t),t);
});

test("04 covers all 14 learning outcomes, models and all nine topics",()=>{
 const q=w.COURSE_ACTIVITIES["04"].questions;
 const texts=q.map(x=>x.q.tr).join(" ");
 for(const t of ["Bağ modeli","üç ilkesi","Pauli","3p","6N","osilatör","4N","Eᵍ","Eᴮ",
  "boş bağ","yeniden birleşme","vakuma","durum yoğunluğu","m*","E(k)"])
  assert.ok(texts.includes(t),t);
 assert.ok(q.filter(x=>x.topic===3).length>=3);
 assert.ok(q.filter(x=>x.topic===8).length>=3);
});

test("one numbered step box is rendered for every quiz question, in both languages",()=>{
 for(const id of ids){
  for(const lang of ["tr","en"]){
   const container=new FakeNode();
   assert.equal(w.CourseActivity.render({lessonId:id,tabId:"sorular",language:lang,container}),true);
   assert.equal(container.children.length,2);
   const quiz=container.children[1];
   assert.equal(quiz.querySelectorAll("[data-step]").length,counts[id]);
   assert.match(quiz.innerHTML,/aria-current="step"/);
   assert.match(quiz.innerHTML,lang==="tr"?/Sorular arasında geçiş/:/Question navigation/);
  }
 }
});

test("numbered navigation, next/previous, answer feedback, score and summary work",()=>{
 const container=new FakeNode();
 w.CourseActivity.render({lessonId:"04",tabId:"sorular",language:"tr",container});
 const quiz=container.children[1];
 let steps=quiz.querySelectorAll("[data-step]");
 steps[4].handlers.click();
 assert.match(quiz.innerHTML,/Soru 5/);
 assert.match(quiz.innerHTML,/>5<\/button>/);
 const answer=quiz.querySelectorAll("[data-answer]");
 assert.equal(answer.length,3);
 answer[1].handlers.click();
 assert.match(quiz.innerHTML,/Yanıtlanan: 1/);
 assert.match(quiz.innerHTML,/is-right|is-wrong/);
 quiz.querySelector("[data-next]").handlers.click();
 assert.match(quiz.innerHTML,/Soru 6/);
 quiz.querySelector("[data-prev]").handlers.click();
 assert.match(quiz.innerHTML,/Soru 5/);
 steps=quiz.querySelectorAll("[data-step]");
 steps[21].handlers.click();
 assert.match(quiz.innerHTML,/Soru 22/);
 quiz.querySelector("[data-next]").handlers.click();
 assert.match(quiz.innerHTML,/Değerlendirme özeti/);
 assert.equal(quiz.querySelectorAll("[data-step]").length,22);
 quiz.querySelector("[data-back]").handlers.click();
 assert.match(quiz.innerHTML,/Soru 22/);
 quiz.querySelector("[data-reset]"); // no reset button in assessment mode
});

test("students may advance past an unanswered question, then revisit it",()=>{
 const container=new FakeNode();
 w.CourseActivity.render({lessonId:"02",tabId:"sorular",language:"tr",container});
 const quiz=container.children[1];
 assert.equal(quiz.querySelector("[data-next]").disabled,false);
 quiz.querySelector("[data-next]").handlers.click();
 assert.match(quiz.innerHTML,/Soru 2/);
 quiz.querySelectorAll("[data-step]")[0].handlers.click();
 assert.match(quiz.innerHTML,/Soru 1/);
});

test("quiz progress persists in localStorage across language renders and is resettable",()=>{
 const container=new FakeNode();
 w.CourseActivity.render({lessonId:"03",tabId:"sorular",language:"tr",container});
 let quiz=container.children[1];
 quiz.querySelectorAll("[data-step]")[24].handlers.click();
 quiz.querySelectorAll("[data-answer]")[0].handlers.click();
 const saved=JSON.parse(memory.get("yariiletken-quiz-v1"));
 assert.ok(Object.hasOwn(saved["03"],"24"));
 const en=new FakeNode();
 w.CourseActivity.render({lessonId:"03",tabId:"sorular",language:"en",container:en});
 quiz=en.children[1];
 assert.equal(quiz.querySelectorAll("[data-step]").length,25);
 assert.match(quiz.innerHTML,/Answered: 1/);
 quiz.querySelector("[data-next]").handlers.click();
 quiz.querySelector("[data-again]").handlers.click();
 assert.equal(Object.keys(JSON.parse(memory.get("yariiletken-quiz-v1"))["03"]).length,0);
});

test("04 special graph/simulation mounts stay separate from quiz rendering",()=>{
 const html=read("index.html"),js=read("app.js"),engine=read("activity-engine.js");
 assert.ok(html.indexOf("lesson02-04-questions.js")<html.indexOf("activity-engine.js"));
 assert.ok(html.indexOf("intrinsic-density-questions.js")<html.indexOf("lesson02-04-questions.js"));
 assert.match(js,/window\.BandTheory04Lab\?\.mount/);
 assert.match(engine,/data-step/);
 assert.match(engine,/aria-current="step"/);
 assert.match(read("styles.css"),/\.lab-quiz-stepper\s*\{/);
});
