import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {runInNewContext} from "node:vm";
const read=path=>readFileSync(new URL("../"+path,import.meta.url),"utf8");
const window={};
for(const file of ["lessons.js","lessons.en.js","band-theory04-model.js","band-theory04-lab.js"])
  runInNewContext(read(file),{window},{filename:file});
const M=window.BandTheory04Model;
const near=(actual,expected,tol=1e-10)=>assert.ok(Math.abs(actual-expected)<=tol,actual+" ≠ "+expected);

test("N spin-resolved states: exact 1s–3p and valence electron budget",()=>{
  for(const N of [1,2,8,20,200]){
    const c=M.states(N);
    assert.deepEqual(Array.from(c.shells),[2*N,2*N,6*N,2*N,6*N]);
    assert.deepEqual(Array.from(c.occupied),[2*N,2*N,6*N,2*N,2*N]);
    assert.equal(c.totalStates,18*N);
    assert.equal(c.totalElectrons,14*N);
    assert.equal(c.valenceStates,8*N);
    assert.equal(c.valenceElectrons,4*N);
    assert.equal(c.valenceBand,c.conductionBand);
    assert.equal(c.valenceBand,4*N);
  }
  for(const N of [0,-2,1.2,201,Infinity])assert.throws(()=>M.states(N),{name:"RangeError"});
});

test("three free-end coupled masses give normalized 1, sqrt(1+r), sqrt(1+3r)",()=>{
  for(const r of [0,.25,1,2]){
    near(M.oscillator(0,3,r),1);
    near(M.oscillator(1,3,r),Math.sqrt(1+r));
    near(M.oscillator(2,3,r),Math.sqrt(1+3*r));
  }
});

test("N=20 has 20 ordered modes and coupling changes width, not count",()=>{
  for(const r of [.1,1,2]){
    const y=Array.from({length:20},(_,j)=>M.oscillator(j,20,r));
    assert.equal(y.length,20);
    assert.ok(y.every(v=>Number.isFinite(v)&&v>=1));
    assert.ok(y.every((v,i)=>!i||v>=y[i-1]));
  }
  assert.ok(M.oscillator(19,20,2)-1 > M.oscillator(19,20,.5)-1);
  for(const args of [[-1,3,1],[3,3,1],[1,1,1],[0,3,-1],[0,3,NaN]])
    assert.throws(()=>M.oscillator(...args),{name:"RangeError"});
});

test("N-site tight-binding splitting preserves N states and approach from degeneracy",()=>{
  for(const N of [2,3,8,20,200]){
    assert.equal(M.splitLevels(N,0).length,N);
    assert.ok(M.splitLevels(N,0).every(v=>v===0));
    const energies=M.splitLevels(N,1);
    assert.ok(energies.every(Number.isFinite));
    assert.ok(energies.every((v,i)=>!i||v>energies[i-1]));
    near(energies.reduce((a,b)=>a+b,0),0,1e-9);
    assert.ok(energies.at(-1)-energies[0]<4+1e-12);
  }
  const e=M.splitLevels(3,1);
  near(e[0],-Math.sqrt(2));near(e[1],0);near(e[2],Math.sqrt(2));
  assert.ok(M.splitLevels(20,1).at(-1)-M.splitLevels(20,1)[0] > M.splitLevels(3,1).at(-1)-M.splitLevels(3,1)[0]);
});

test("level splitting rejects invalid N and hopping parameters",()=>{
  for(const x of [[1,1],[201,1],[3,-.1],[3,NaN],[2,Infinity]])
    assert.throws(()=>M.splitLevels(...x),{name:"RangeError"});
});

test("illustrative valence DOS has exact integrated state count 4*n_atom",()=>{
  for(const W of [8,12,16]){
    const n=5e22,steps=2000,dx=W/steps;
    const integral=Array.from({length:steps+1},(_,i)=>{
      const weight=(i===0||i===steps)?0.5:1;
      return weight*M.density(-W+i*dx,W,n)*dx;
    }).reduce((a,b)=>a+b,0);
    near(integral/M.densityArea(W,n),1,5e-7);
    near(M.densityArea(W,n),2e23,1e8);
    near(M.density(-W/2,W,n),6*n/W,1e8);
    assert.equal(M.density(-W-1,W,n),0);
    assert.equal(M.density(1,W,n),0);
  }
  assert.ok(M.density(-4,8)>M.density(-8,16));
});

test("density rejects invalid energy, width, density or non-finite parameters",()=>{
  for(const p of [[0,-1,5e22],[NaN,12,5e22],[0,12,0],[0,12,Infinity]])
    assert.throws(()=>M.density(...p),{name:"RangeError"});
});

test("tight-binding endpoints and band-edge effective mass obey 1/t and 1/a²",()=>{
  near(M.energy(0,1),-2);
  near(M.energy(Math.PI,1),2);
  near(M.energy(Math.PI/2,1),0);
  const mass=M.mass(.7,.54);
  assert.ok(mass>0&&Number.isFinite(mass));
  near(M.mass(1.4,.54),mass/2);
  near(M.mass(.7,1.08),mass/4);
  assert.throws(()=>M.mass(0,.5),{name:"RangeError"});
});

test("300 K silicon relative energy edges distinguish chi, Eg and W",()=>{
  const x=M.edges(4.05,1.12,12);
  assert.equal(x.E0,0);
  near(x.Ec,-4.05);
  near(x.Ev,-5.17);
  near(x.Eb,-17.17);
  near(x.Ec-x.Ev,1.12);
  near(x.E0-x.Ec,4.05);
  near(x.Ev-x.Eb,12);
  assert.throws(()=>M.edges(4.05,NaN,12),{name:"RangeError"});
});

test("generation and recombination preserve physical electron–hole state sequence",()=>{
  const noEnergy=M.event(0,1,"none");
  assert.equal(noEnergy.allowed,false);
  assert.equal(noEnergy.threshold,1.12);
  const generated=M.event(0,1.2,"none");
  assert.equal(generated.allowed,true);
  assert.equal(generated.next,"pair");
  const recombined=M.event(1,0,generated.next);
  assert.equal(recombined.allowed,true);
  assert.equal(recombined.next,"none");
  assert.equal(M.event(1,0,"none").allowed,false);
  assert.equal(M.event(0,1.5,"pair").allowed,false);
});

test("kinetic acceleration preserves carrier number; escape leaves valence hole",()=>{
  for(const mode of [2,3]){
    const result=M.event(mode,.7,"pair");
    assert.equal(result.allowed,true);
    assert.equal(result.next,"pair");
    assert.equal(M.event(mode,.7,"none").allowed,false);
  }
  assert.equal(M.event(4,4.0,"pair").allowed,false);
  assert.equal(M.event(4,4.05,"pair").next,"hole");
  assert.equal(M.event(5,5.16,"none").allowed,false);
  assert.equal(M.event(5,5.17,"none").next,"hole");
});

test("six events reject invalid mode/state and negative energy",()=>{
  for(const p of [[-1,2,"none"],[6,2,"none"],[0,-1,"none"],[0,2,"unknown"],[0,NaN,"none"]])
    assert.throws(()=>M.event(...p),{name:"RangeError"});
});

test("five interactive graph configurations return finite bounded sample values",()=>{
  const specs=[
    ["counts",{N:7},4],
    ["splitting",{N:12,t:.6},12],
    ["modes",{r:1},23],
    ["dos",{W:12,nAtom:5},1],
    ["dispersion",{t:.8,a:.54,ka:0},1]
  ];
  for(const [key,p,curveCount] of specs){
    for(const lang of ["tr","en"]){
      const c=M.graph(key,p,lang);
      assert.equal(c.curves.length,curveCount);
      assert.ok(c.xMin<c.xMax&&c.yMin<c.yMax);
      assert.ok(c.marker>=c.xMin&&c.marker<=c.xMax);
      assert.ok(c.curves.every(v=>[c.xMin,(c.xMin+c.xMax)/2,c.xMax].every(x=>Number.isFinite(v.f(x)))));
      assert.ok(c.info.every(([label,value])=>label&&value));
    }
  }
});

test("user interface mounts on lesson 04 graph/simulation tabs before placeholders",()=>{
  const html=read("index.html"),app=read("app.js"),css=read("band-theory04-lab.css"),ui=read("band-theory04-lab.js");
  assert.ok(html.includes('band-theory04-lab.css'));
  assert.ok(html.indexOf("band-theory04-model.js")<html.indexOf("band-theory04-lab.js"));
  assert.ok(html.indexOf("band-theory04-lab.js")<html.indexOf("app.js"));
  assert.match(app,/lesson\.id === "04" && window\.BandTheory04Lab\?\.mount/);
  assert.match(app,/window\.CourseActivity\?\.render/);
  assert.match(css,/\.b04lab-card/);
  assert.match(css,/\.b04lab-bandgrid/); // verify simulator styling
  assert.match(ui,/\[simOne,simFour,simTwo,simThree\]/);
  assert.match(ui,/const eventRoutes=\[/);
});

test("both languages describe limits and each activity is labeled by source topic",()=>{
  const ui=read("band-theory04-lab.js");
  for(const name of ["G1","G2","G3","G4","G5","S1","S2","S3","S4"])
    assert.match(ui,new RegExp(name+':'));
  for(const name of ["limit1","limit2","limit3","limit4","limit5","limitS1","limitS2","limitS3","limitS4"])
    assert.ok(ui.includes(name));
  assert.doesNotMatch(ui,/\bfetch\s*\(|\bXMLHttpRequest\b/);
});

test("lesson 04 narrative and outcomes remain intact",()=>{
  const l=window.COURSE_LESSONS.find(x=>x.id==="04"),en=window.COURSE_LESSONS_EN.find(x=>x.id==="04");
  assert.equal(l.topics.length,9);assert.equal(en.topics.length,9);
  assert.equal(l.outcomes.length,14);assert.equal(en.outcomes.length,14);
  assert.equal(window.COURSE_LESSONS.reduce((a,x)=>a+x.topics.length,0),39);
});
