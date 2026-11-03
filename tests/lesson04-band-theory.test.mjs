import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const read=name=>readFileSync(new URL("../"+name,import.meta.url),"utf8");
const window={};
for(const name of ["lessons.js","lessons.en.js","band-theory04-visuals.js"])
  runInNewContext(read(name),{window},{filename:name});
const get=(language="tr")=>(language==="en"?window.COURSE_LESSONS_EN:window.COURSE_LESSONS).find(x=>x.id==="04");
const topicVisuals=[
 ["why"],["principles"],["atom"],
 ["far","splitting","coupled","coupling-curves"],
 ["bands","classification"],["diagram"],["scaled"],["bridge","transitions"],["dos"]
];
const kinds=[...new Set(topicVisuals.flat())];

test("Lesson 04 includes all requested topics in both languages",()=>{
 for(const lang of ["tr","en"]){
  const l=get(lang);
  assert.equal(l.topics.length,9);
  assert.equal(l.outcomes.length,14);
  assert.deepEqual(Array.from(l.topics,x=>Array.from(x.visual04||[])),topicVisuals);
  assert.ok(l.topics.every(x=>x.title&&x.paragraphs.length>=2&&x.key));
  assert.ok(l.outcomes.every(x=>x.length>30));
 }
 assert.equal(window.COURSE_LESSONS.reduce((n,l)=>n+l.topics.length,0),39);
 assert.equal(window.COURSE_LESSONS.reduce((n,l)=>n+l.outcomes.length,0),55);
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

test("all fourteen PDF-aligned bilingual figures render correctly",()=>{
 for(const lang of ["tr","en"]){
  for(const kind of kinds){
   const html=window.BandTheory04Visuals.render(kind,lang);
   assert.ok(html.length>550,kind+"/"+lang);
   assert.match(html,/class="lesson-figure b04-figure/);
   if(!["principles","far"].includes(kind))assert.match(html,/<svg viewBox=.*role="img"/);
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


test("Part 4 PDF three principles have correct physics and exact source order",()=>{
 for(const lang of ["tr","en"]){
  const parts=get(lang).topics[1].paragraphs.join(" ");
  assert.match(parts,/Pauli/);
  assert.match(parts,/N\(E\)/);
  assert.match(parts,/f\(E,T\)/);
  assert.match(parts,/cm⁻³ eV⁻¹/);
  const svg=window.BandTheory04Visuals.render("principles",lang);
  assert.match(svg,/N\(E\)/);
  assert.match(svg,/f\(E,T\)/);
  assert.match(svg,/Pauli/);
 }
});

test("far-apart N atom table counts all orbital states and occupied electrons",()=>{
 for(const lang of ["tr","en"]){
  const html=window.BandTheory04Visuals.render("far",lang);
  assert.match(html,/<table class="b04-atom-table">/);
  for(const x of ["1s","2s","2p","3s","3p","8N","4N","6N","2N"])assert.ok(html.includes(x),x);
  const text=get(lang).topics[3].paragraphs.join(" ");
  assert.match(text,/6N\/2N/);
 }
});

test("coupled oscillator frequencies and N=3/N=20 mode curves follow source",()=>{
 const coupling=.7;
 const freq=(j,N)=>Math.sqrt(1+2*coupling*(1-Math.cos(j*Math.PI/N)));
 assert.ok(Math.abs(freq(1,3)-Math.sqrt(1+coupling))<1e-12);
 assert.ok(Math.abs(freq(2,3)-Math.sqrt(1+3*coupling))<1e-12);
 for(const lang of ["tr","en"]){
   const modes=window.BandTheory04Visuals.render("coupled",lang);
   for(const token of ["ω₀","ω₁","ω₂","kᶜ"])assert.ok(modes.includes(token),token);
   const curves=window.BandTheory04Visuals.render("coupling-curves",lang);
   assert.match(curves,/N = 3/);
   assert.match(curves,/N = 20/);
   assert.equal((curves.match(/class="b04-mode-strong"/g)||[]).length,3);
   assert.equal((curves.match(/class="b04-mode-curve"/g)||[]).length,20);
   assert.match(get(lang).topics[3].paragraphs.join(" "),/kuplaj|coupling/);
 }
});

test("300 K Si source figure draws 12 eV valence width, Eg and chi on one scale",()=>{
 const f=window.BandTheory04Visuals.render("scaled","en");
 const three=f.match(/d="M155 ([0-9.]+) H628 M155 ([0-9.]+) H628 M155 ([0-9.]+) H628"/);
 const bottom=f.match(/d="M155 ([0-9.]+) H628" class="b04-level"/);
 assert.ok(three && bottom,"energy levels missing");
 const [zero,con,val]=three.slice(1).map(Number),b=Number(bottom[1]);
 assert.ok(Math.abs((con-zero)/(val-con)-4.05/1.12)<1e-10);
 assert.ok(Math.abs((b-val)/(val-con)-12/1.12)<1e-10);
 for(const value of ["12 eV","17.17","5.17","4.05","1.12"])assert.ok(f.includes(value),value);
});

test("four physical band transitions include kinetic signs and vacuum escape",()=>{
 for(const lang of ["tr","en"]){
  const svg=window.BandTheory04Visuals.render("transitions",lang);
  for(const v of ["χ","E₀","Eᶜ","Eᵛ","χ + Eᵍ","e⁻ ↑","h⁺ ↓"])assert.ok(svg.includes(v),v);
  assert.equal((svg.match(/class="b04-frame"/g)||[]).length,4);
  assert.match(get(lang).topics[7].paragraphs.join(" "),/kinetik|kinetic/);
 }
});

test("DOS bridge integrates the valence-state count from 5e22 Si atoms per cubic centimeter",()=>{
 for(const lang of ["tr","en"]){
  const svg=window.BandTheory04Visuals.render("dos",lang);
  for(const token of ["N(E)","Eᶜ","Eᵛ","2×10²³"])assert.ok(svg.includes(token),token);
  const body=get(lang).topics[8].paragraphs.join(" ");
  assert.match(body,/5×10²²/);
  assert.match(body,/2×10²³/);
  assert.match(body,/E<sub>B<\/sub>/);
  assert.match(body,/f\(E,T\)/);
 }
});

test("English equations do not retain Turkish labels and existing outcome positions are stable",()=>{
 const l=get("en");
 assert.match(l.topics[3].equation,/states/);
 assert.doesNotMatch(l.topics[3].equation,/durum/);
 assert.match(l.topics[8].equation,/1D/);
 assert.match(l.topics[6].equation,/4\.05/);
 assert.equal(get("tr").outcomes.length,14);
});
