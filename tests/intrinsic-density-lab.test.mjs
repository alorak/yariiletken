import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const read = f => readFileSync(new URL("../"+f, import.meta.url), "utf8");
const window={};
for(const file of ["lessons.js","lessons.en.js","activities.js","lesson03-questions.js",
  "intrinsic-density-questions.js","intrinsic-density-lab.js"]){
  runInNewContext(read(file),{window}, {filename:file});
}
const lab=window.IntrinsicDensityLab;
const base=lab.defaults();
const approx=(a,b,tolerance=1e-9)=>assert.ok(Math.abs(a/b-1)<tolerance, `expected ${a} ≈ ${b}`);

test("n_i(300 K) follows physical Nc/Nv and Eg parameters",()=>{
  const m=lab.compute(base);
  approx(m.nc,2.8e19);
  approx(m.nv,1.04e19);
  approx(m.eg,1.12);
  approx(m.kt,8.617333262145e-5*300);
  approx(m.ni,6.6758987197e9,1e-6);
  approx(m.ni,m.states*m.boltz);
  assert.ok(m.ni>6e9&&m.ni<7e9);
});

test("n_i rises with T, declines exponentially with Eg and grows as sqrt(DOS)",()=>{
  const at300=lab.compute(base).ni;
  assert.ok(lab.compute({...base,T:350}).ni>at300);
  assert.ok(lab.compute({...base,T:250}).ni<at300);
  const wider=lab.compute({...base,eg300:base.eg300+.10}).ni/at300;
  const expected=Math.exp(-.10/(2*8.617333262145e-5*300));
  approx(wider,expected);
  assert.ok(wider>.14&&wider<.15);
  approx(lab.compute({...base,nc300:2*base.nc300}).ni/at300,Math.SQRT2);
  approx(lab.compute({...base,nv300:2*base.nv300}).ni/at300,Math.SQRT2);
  approx(lab.compute({...base,nc300:base.nc300*4}).ni/at300,2);
});

test("Varshni correction matches Eg(300) but decreases gap at higher T",()=>{
  for(const mode of ["constant","varshni"]){
    approx(lab.compute({...base,T:300,gapMode:mode}).eg,1.12);
    approx(lab.compute({...base,T:300,gapMode:mode}).ni,lab.compute(base).ni);
  }
  const hotter=lab.compute({...base,T:450,gapMode:"varshni"});
  const fixed=lab.compute({...base,T:450,gapMode:"constant"});
  assert.ok(hotter.eg<1.12);
  assert.ok(hotter.ni>fixed.ni);
  assert.ok(lab.compute({...base,T:220,gapMode:"varshni"}).eg>1.12);
});

test("the adjusted Arrhenius plot is exactly linear in 1/T for fixed gap",()=>{
  const x=[200,300,500].map(T=>lab.compute({...base,T}));
  for(const m of x)approx(m.lnRatio,-m.eg/(2*8.617333262145e-5*m.T));
  const slope1=(x[1].lnRatio-x[0].lnRatio)/(x[1].inverse-x[0].inverse);
  const slope2=(x[2].lnRatio-x[1].lnRatio)/(x[2].inverse-x[1].inverse);
  approx(slope1,slope2);
  approx(slope1,-base.eg300/(2*8.617333262145e-5*1000));
});

test("invalid inputs do not produce meaningless physical results",()=>{
  for(const props of [{T:0},{T:1000},{nc300:0},{nv300:-1},{eg300:0}])
    assert.throws(()=>lab.compute({...base,...props}),/Invalid parameters/);
});

test("both lesson 03 languages explicitly define n_i and distinguish doping",()=>{
  for(const arr of [window.COURSE_LESSONS,window.COURSE_LESSONS_EN]){
    const l=arr.find(x=>x.id==="03"),topic=l.topics[7];
    assert.match(topic.title,/nᵢ/);
    assert.match(topic.paragraphs.join(" "),/n<sub>0<\/sub> = p<sub>0<\/sub> = n<sub>i<\/sub>/);
    assert.match(topic.paragraphs.join(" "),/N<sub>c<\/sub>/);
    assert.match(topic.paragraphs.join(" "),/N<sub>v<\/sub>/);
    assert.match(topic.paragraphs.join(" "),/6[,.]7/);
    assert.match(l.topics[8].paragraphs.join(" "),/1000\/T/);
    assert.equal(l.outcomes.length,13);
  }
});

test("numeric questions cover density, Eg, Nc and mass action",()=>{
  const q=window.COURSE_ACTIVITIES["03"].questions;
  assert.equal(q.length,19);
  for(const item of q.slice(15)){
    assert.ok([7,8].includes(item.topic));
    assert.equal(item.options.length,3);
    assert.equal(item.reasons.length,3);
    for(const lang of ["tr","en"]){
      assert.ok(item.q[lang]);
      for(const option of item.options)assert.ok(option[lang]);
      for(const reason of item.reasons)assert.ok(reason[lang]);
    }
  }
});

test("graphs/simulations are inserted after the existing 03 labs, not replacing them",()=>{
  const app=read("app.js"),html=read("index.html"),module=read("intrinsic-density-lab.js");
  assert.ok(app.includes('lesson.id === "03"'));
  assert.ok(app.includes("window.IntrinsicDensityLab?.mount"));
  assert.ok(html.indexOf("intrinsic-density-questions.js")>html.indexOf("lesson03-questions.js"));
  assert.ok(html.indexOf("intrinsic-density-questions.js")<html.indexOf("activity-engine.js"));
  assert.ok(html.indexOf("intrinsic-density-lab.js")<html.indexOf("app.js"));
  assert.match(module,/data-ni-control/);
  assert.match(module,/function svgChart/);
  assert.match(module,/nᵢ\(T\)/);
  assert.match(module,/ni-equation-hero/);
  assert.match(module,/section\.insertBefore\(card,section\.children\[1\]\|\|null\)/);
});
