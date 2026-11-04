import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const read = path => readFileSync(new URL("../"+path, import.meta.url), "utf8");
const window = {};
const allCards = [];
function mockCard(kind, html) {
  const inputs = new Map(), reads = new Map(), buttons = new Map();
  for(const match of html.matchAll(/<input[^>]*data-control="([^"]+)"[^>]*>/g)){
    const value=match[0].match(/value="([^"]+)"/)?.[1]??"0";
    inputs.set(match[1], {value,dataset:{control:match[1]}});
  }
  for(const match of html.matchAll(/<select[^>]*data-control="([^"]+)"[^>]*>/g)){
    const value=html.slice(match.index).match(/<option value="([^"]+)"/)?.[1]??"0";
    inputs.set(match[1], {value,dataset:{control:match[1]}});
  }
  for(const match of html.matchAll(/data-read="([^"]+)"/g))
    reads.set(match[1],{textContent:""});
  for(const match of html.matchAll(/data-preset="([^"]+)"/g))
    buttons.set(match[1],{
      dataset:{preset:match[1]},listeners:{},
      addEventListener(event,callback){this.listeners[event]=callback},
      click(){this.listeners.click?.()}
    });
  const visual={innerHTML:"",textContent:""},output={innerHTML:"",textContent:""};
  const events={};
  const obj={
    dataset:{activity:kind},inputs,reads,buttons,events,visual,output,
    addEventListener(event,callback){events[event]=callback},
    querySelector(selector){
      if(selector==="[data-visual]")return visual;
      if(selector==="[data-output]")return output;
      const ctl=selector.match(/^\[data-control="([^"]+)"\]$/);
      if(ctl)return inputs.get(ctl[1])??null;
      const read=selector.match(/^\[data-read="([^"]+)"\]$/);
      if(read)return reads.get(read[1])??null;
      return null;
    },
    querySelectorAll(selector){
      if(selector==="input[data-control]")
        return [...inputs.values()].filter(x=>x.dataset.control && x.dataset.control!=="type" && x.dataset.control!=="g");
      if(selector==="[data-preset]")return [...buttons.values()];
      return [];
    }
  };
  allCards.push(obj);
  return obj;
}
const document = {
  createElement(){
    let html="";
    return {
      className:"",
      set innerHTML(value){html=value},
      get innerHTML(){return html},
      insertAdjacentHTML(position,value){html+=value},
      querySelectorAll(selector){
        if(selector==="[data-activity]"){
          return [...html.matchAll(/<article class="l56-card l07-card" data-activity="([^"]+)">([\s\S]*?)<\/article>/g)]
            .map(match=>mockCard(match[1],match[2]));
        }
        return [];
      }
    };
  }
};
for(const file of ["lecture05-06-labs.js","lecture07-labs.js"])
  runInNewContext(read(file),{window,document,console},{filename:file});
const lab=window.Lecture07Lab;
function render(tabId,language="tr") {
  allCards.length=0;
  const container={root:null,replaceChildren(root){this.root=root}};
  const result=lab.mount({lessonId:"07",tabId,language,container});
  return {result,container,cards:[...allCards]};
}
const close = (a,b,rtol=1e-8) =>
  assert.ok(Math.abs(a-b)<=rtol*Math.max(1,Math.abs(b)),a+" != "+b);

test("lesson07 creates eight visible graph cards, with SVG or band diagram",()=>{
  for(const lang of ["tr","en"]){
    const {result,container,cards}=render("grafikler",lang);
    assert.equal(result,true);
    assert.equal(cards.length,8);
    assert.ok(container.root.innerHTML.includes("l07-learning"));
    assert.ok(container.root.innerHTML.includes("l07-check"));
    assert.ok(container.root.innerHTML.includes("l07-assumptions"));
    for(const card of cards) {
      assert.ok(card.visual.innerHTML.includes("<svg"),card.dataset.activity);
      assert.ok(card.visual.innerHTML.length>600,card.dataset.activity);
      assert.ok(card.output.textContent.length>10,card.dataset.activity);
    }
  }
});

test("graphs respond to controls, including neutrality trial and ionization g",()=>{
  const {cards}=render("grafikler");
  const ion=cards.find(c=>c.dataset.activity==="ionization");
  assert.match(ion.output.textContent,/95\.3%/);
  ion.inputs.get("x").value="0";
  ion.events.input();
  assert.match(ion.output.textContent,/50\.0%/);
  const neutral=cards.find(c=>c.dataset.activity==="neutrality");
  const before=neutral.output.textContent;
  neutral.inputs.get("trial").value=".80";neutral.events.input();
  assert.notEqual(neutral.output.textContent,before);
  assert.match(neutral.visual.innerHTML,/polyline/);
  const levels=cards.find(c=>c.dataset.activity==="levels");
  assert.equal(levels.inputs.get("type").value,"n");
  levels.inputs.get("type").value="p";levels.events.change();
  assert.match(levels.visual.innerHTML,/E_A/);
});

test("three laboratories produce finite populated results and presets update inputs",()=>{
  for(const lang of ["tr","en"]){
    const {result,cards}=render("simulasyonlar",lang);
    assert.equal(result,true);assert.equal(cards.length,3);
    for(const card of cards){
      assert.ok(card.visual.innerHTML.includes("l56-stat"),card.dataset.activity);
      assert.ok(card.output.innerHTML.includes("<p>"),card.dataset.activity);
      assert.equal(card.buttons.size,4);
    }
    const comp=cards.find(c=>c.dataset.activity==="compensationLab");
    comp.buttons.get("warm").click();
    assert.equal(Number(comp.inputs.get("T").value),600);
    assert.equal(Number(comp.inputs.get("na").value),16);
    assert.match(comp.visual.innerHTML,/N_D−N_A/);
    comp.buttons.get("equal").click();
    assert.equal(comp.inputs.get("nd").value,"16");
    assert.equal(comp.inputs.get("na").value,"16");
    const freeze=cards.find(c=>c.dataset.activity==="freeze");
    freeze.inputs.get("g").value="2";freeze.events.change();
    assert.match(freeze.visual.innerHTML,/quadratic/);
  }
});

test("physical model: g comparison, charge balance and mass action hold",()=>{
  const one=lab.solve(77,1e15,0,1),two=lab.solve(77,1e15,0,2);
  close(one.donorFraction,.83226,2e-4);
  close(two.donorFraction,.73696,2e-4);
  assert.ok(one.donorFraction>two.donorFraction);
  for(const [T,Nd,Na] of [[77,1e15,0],[300,1e16,4e15],[600,5e15,1e16],[300,1e16,1e16]]){
    const result=lab.solve(T,Nd,Na);
    close(result.n+result.acceptors,result.p+result.donors,1e-9);
    close(result.n*result.p/(result.ni**2),1,1e-9);
  }
});

test("existing model remains unchanged and 07 has explicit load failure state",()=>{
  const app=read("app.js"),index=read("index.html");
  assert.match(app,/lesson\.id === "07" && \(tabId === "grafikler" \|\| tabId === "simulasyonlar"\)/);
  assert.match(app,/role="alert"/);
  assert.ok(index.indexOf("lecture05-06-labs.js")<index.indexOf("lecture07-labs.js"));
  assert.ok(index.indexOf("lecture07-labs.js")<index.indexOf("app.js"));
  assert.equal(lab.mount({lessonId:"06",tabId:"grafikler",language:"tr",container:{}}),false);
});
