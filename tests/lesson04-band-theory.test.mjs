import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const read=name=>readFileSync(new URL("../"+name,import.meta.url),"utf8");
const window={};
for(const name of ["lessons.js","lessons.en.js","band-theory04-visuals.js"])
  runInNewContext(read(name),{window},{filename:name});
const get=(language="tr")=>(language==="en"?window.COURSE_LESSONS_EN:window.COURSE_LESSONS).find(x=>x.id==="04");
const kinds=["why","principles","atom","splitting","bands","diagram","scaled","bridge"];

test("Lesson 04 includes all requested topics in both languages",()=>{
 for(const lang of ["tr","en"]){
  const l=get(lang);
  assert.equal(l.topics.length,9);
  assert.equal(l.outcomes.length,11);
  assert.deepEqual(Array.from(l.topics.slice(0,8),x=>x.visual04?.[0]),kinds);
  assert.ok(l.topics.every(x=>x.title&&x.paragraphs.length>=2&&x.key));
  assert.ok(l.outcomes.every(x=>x.length>30));
 }
 assert.equal(window.COURSE_LESSONS.reduce((n,l)=>n+l.topics.length,0),39);
 assert.equal(window.COURSE_LESSONS.reduce((n,l)=>n+l.outcomes.length,0),52);
});

test("isolated Si atom is counted with spin and correct electron configuration",()=>{
 for(const lang of ["tr","en"]){
  const l=get(lang),text=l.topics[2].paragraphs.join(" ");
  assert.match(text,/1s² 2s² 2p⁶ 3s² 3p²/);
  assert.match(text,/3p/);
  assert.match(text,/6/);
  const fig=window.BandTheory04Visuals.render("atom",lang);
  assert.equal((fig.match(/class="b04-state"/g)||[]).length-2,18); // exclude two legend symbols
  assert.equal((fig.match(/class="b04-state-mark"/g)||[]).length-1,14); // exclude occupied legend symbol
  for(const orbital of ["1s","2s","2p","3s","3p"])assert.ok(fig.includes(orbital));
 }
});

test("N-atom counting distinguishes states from electrons",()=>{
 for(const lang of ["tr","en"]){
  const l=get(lang),a=l.topics[3].paragraphs.join(" "),b=l.topics[4].paragraphs.join(" ");
  for(const v of ["2N","6N","8N","4N"])assert.ok(a.includes(v),v+" missing");
  assert.match(b,/4N/);
  const fig=window.BandTheory04Visuals.render("splitting",lang);
  assert.match(fig,/b04-eq-line/);
  assert.match(fig,/8N/);
  const groups=window.BandTheory04Visuals.render("bands",lang);
  assert.match(groups,/4N/);
  assert.ok(groups.includes("0 K"));
 }
});

test("all eight bilingual scientific illustrations render original accessible SVGs",()=>{
 for(const lang of ["tr","en"]){
  for(const kind of kinds){
   const html=window.BandTheory04Visuals.render(kind,lang);
   assert.ok(html.length>550,kind+"/"+lang);
   assert.match(html,/class="lesson-figure b04-figure/);
   if(kind!=="principles")assert.match(html,/<svg viewBox=.*role="img"/);
   assert.match(html,/<figcaption>/);
  }
 }
 assert.equal(window.BandTheory04Visuals.render("does-not-exist","tr"),"");
});

test("silicon 300 K energy edges share a true eV scale",()=>{
 const fig=window.BandTheory04Visuals.render("scaled","en");
 for(const label of ["4.05","1.12","−5.17","Eᶜ","Eᵛ"])assert.ok(fig.includes(label),label);
 const path=fig.match(/d="M155 ([0-9.]+) H628 M155 ([0-9.]+) H628 M155 ([0-9.]+) H628"/);
 assert.ok(path,"Missing three energy edges");
 const [vac,con,val]=path.slice(1).map(Number);
 const ratio=(con-vac)/(val-con);
 assert.ok(Math.abs(ratio-4.05/1.12)<1e-10, "Not to scale: "+ratio);
 assert.equal(get("tr").topics[6].visual04[0],"scaled");
});

test("E_g and chi definitions are never confused",()=>{
 for(const lang of ["tr","en"]){
  const l=get(lang),t=l.topics[5];
  assert.match(t.equation,/E<sub>g<\/sub>/);
  assert.match(t.equation,/χ = E<sub>0<\/sub> − E<sub>c<\/sub>/);
  assert.match(l.topics[6].paragraphs.join(" "),/5[,.]17 eV/);
  assert.match(l.topics[7].paragraphs.join(" "),/Si–Si|chemical bond/);
 }
});

test("illustrations are included only in Lesson 04 narration with scripts in correct order",()=>{
 const app=read("app.js"),html=read("index.html"),css=read("styles.css");
 assert.match(app,/lesson\.id === "04" && Array\.isArray\(topic\.visual04\)/);
 assert.match(app,/BandTheory04Visuals\.render\(kind, language\)/);
 assert.ok(html.includes('band-theory04-visuals.js'));
 assert.ok(html.indexOf('band-theory04-visuals.js')<html.indexOf('app.js'));
 assert.match(css,/\.b04-principles/);
 assert.match(css,/\.b04-svg/);
 assert.match(app,/bandTheoryProgressMigration/);
 assert.match(app,/0:2,1:1,2:4,3:5,4:6,5:8,6:10/);
});

test("bond and band models show before/after excitation and reverse recombination",()=>{
 for(const lang of ["tr","en"]){
  const fig=window.BandTheory04Visuals.render("bridge",lang);
  assert.equal((fig.match(/class="b04-frame"/g)||[]).length,4);
  assert.equal((fig.match(/class="b04-hole"/g)||[]).length,2);
  assert.match(fig,/Generation|Üretim/);
  assert.match(fig,/Recombination|Yeniden birleşme/);
  assert.match(fig,/After excitation|Uyarılma sonrası/);
 }
});

test("the three principles are distinct, visible and localized",()=>{
 for(const lang of ["tr","en"]){
  const fig=window.BandTheory04Visuals.render("principles",lang);
  assert.equal((fig.match(/class="b04-principle"/g)||[]).length,3);
  assert.match(fig,/Pauli/);
  assert.match(fig,/Fermi/);
 }
});

test("search and numbered navigation handle newly added topics",()=>{
 const tr=window.COURSE_LESSONS, en=window.COURSE_LESSONS_EN;
 assert.deepEqual(Array.from(tr,l=>l.topics.length),[6,9,9,7,8]);
 assert.deepEqual(Array.from(en,l=>l.topics.length),[6,9,9,7,8]);
 const q=get().topics.map(x=>x.title).join(" ");
 assert.match(q,/Bağ modeli/);
 assert.match(q,/Si atomu/);
 assert.match(q,/Silisyum 300 K/);
});
