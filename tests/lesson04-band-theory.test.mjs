import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
const read=name=>readFileSync(new URL("../"+name,import.meta.url),"utf8");
const window={};
for(const file of ["lessons.js","lessons.en.js","lesson04-figures.js"])
 runInNewContext(read(file),{window},{filename:file});
const lesson=locale=>(locale==="en"?window.COURSE_LESSONS_EN:window.COURSE_LESSONS).find(x=>x.id==="04");
const figures=window.Lesson04Figures;
const strip=s=>String(s).replace(/<[^>]*>/g," ");

test("Lesson 04 covers eight source-ordered subjects and ten bilingual learning outcomes",()=>{
 for(const locale of ["tr","en"]){
  const l=lesson(locale);
  assert.equal(l.topics.length,8);
  assert.equal(l.outcomes.length,10);
  assert.ok(l.topics.every(x=>x.title&&x.paragraphs.length===2&&x.key));
  assert.match(strip(l.topics[0].paragraphs.join(" ")),/band|bant/i);
  assert.match(strip(l.topics[1].paragraphs.join(" ")),/f\(E\)/);
  assert.match(strip(l.topics[2].paragraphs.join(" ")),/3p²/);
  assert.match(strip(l.topics[3].paragraphs.join(" ")),/8N/);
  assert.match(strip(l.topics[4].paragraphs.join(" ")),/χ/);
  assert.match(strip(l.topics[5].paragraphs.join(" ")),/5[,.]17/);
  assert.match(strip(l.topics[6].paragraphs.join(" ")),/4N/);
  assert.match(strip(l.topics[7].paragraphs.join(" ")),/E\(k\)/);
 }
});

test("the three band principles are explicit and separate energy, DOS, and Fermi occupation",()=>{
 for(const locale of ["tr","en"]){
  const body=strip(lesson(locale).topics[1].paragraphs.join(" "));
  for(const term of ["g(E)","f(E)","1−f(E)","cm⁻³ eV⁻¹"])assert.ok(body.includes(term),term);
  assert.match(body,/integr|∫/);
  assert.match(figures.render("principles",locale),/1 · /);
  assert.match(figures.render("principles",locale),/2 · /);
  assert.match(figures.render("principles",locale),/3 · /);
 }
});

test("atom figure counts all spin-resolved Si states correctly",()=>{
 for(const locale of ["tr","en"]){
  const s=figures.render("atom",locale);
  for(const a of ["1s","2s","2p","3s","3p"])assert.ok(s.includes(a));
  assert.ok(s.includes(locale==="tr"?"6 durum · 2 dolu":"6 states · 2 occupied"));
  assert.match(s,/viewBox="0 0 800 450"/);
  assert.match(s,/b04-cross/);
  const p=strip(lesson(locale).topics[2].paragraphs.join(" "));
  assert.match(p,/1s² 2s² 2p⁶ 3s² 3p²/);
  assert.match(p,/2\/6/);
 }
});

test("N-atom splitting diagram keeps 8N states and 4N valence electrons with full lower band",()=>{
 for(const locale of ["tr","en"]){
  const l=lesson(locale).topics[3];
  const s=figures.render("split",locale);
  assert.match(s,/3s \+ 3p → 8N/);
  assert.match(s,/4N/);
  assert.match(s,/b04-upper/);
  assert.match(s,/b04-lower/);
  assert.match(s,/b04-dash/);
  for(const key of ["2N","6N","8N","4N","1s","2s","2p"])
    assert.ok((strip(l.paragraphs.join(" "))+" "+s).includes(key),key);
 }
});

test("conventional and scaled silicon band drawings distinguish gap from affinity",()=>{
 for(const locale of ["tr","en"]){
  const ordinary=figures.render("bands",locale);
  const scaled=figures.render("scale",locale);
  for(const label of ["E₀","Eᶜ","Eᵛ","χ","E₉"]){
   assert.ok(ordinary.includes(label),label);
   assert.ok(scaled.includes(label),label);
  }
  assert.match(scaled,/−4[,.]05 eV/);
  assert.match(scaled,/−5[,.]17 eV/);
  assert.match(scaled,/1[,.]12 eV/);
  assert.ok(!/data:image|https?:\/\//.test(scaled));
 }
 // Values are generated on a linear scale with y=60+66*|E−E₀|:
 const source=read("lesson04-figures.js");
 assert.match(source,/const y=e=>60\+e\*66/);
 const vacuum=60, ec=60+4.05*66, ev=60+5.17*66;
 assert.ok(Math.abs((ec-vacuum)/(ev-ec)-(4.05/1.12))<1e-9);
 assert.ok(ec<ev);
});

test("bond and band descriptions use the same 4N electron budget, without equating Eg to chemical bond breaking",()=>{
 for(const locale of ["tr","en"]){
  const l=lesson(locale).topics[6];
  const p=strip(l.paragraphs.join(" "));
  assert.match(p,/2N/);
  assert.match(p,/4N/);
  assert.match(p,/chemic|kimyasal/i);
  const figure=figures.render("bond-band",locale);
  assert.match(figure,/b04-hole/);
  assert.match(figure,/b04-electron/);
  assert.match(figure,/4N/);
 }
});

test("all figures attach to correct topic and English equations do not retain Turkish labels",()=>{
 const kinds=["why","principles","atom","split","bands","scale","bond-band"];
 for(const locale of ["tr","en"]){
  const l=lesson(locale);
  for(let i=0;i<7;i++){
   assert.deepEqual(Array.from(l.topics[i].visual04||[]),[kinds[i]]);
   const s=figures.render(kinds[i],locale);
   assert.match(s,/class="lesson-figure band04-figure"/);
   assert.match(s,/lesson-figure-note/);
   assert.ok(s.length>450);
  }
  assert.equal(l.topics[7].visual04,undefined);
 }
 const english=lesson("en");
 assert.match(english.topics[3].equation,/states/);
 assert.doesNotMatch(english.topics[3].equation,/durum/);
 assert.match(english.topics[6].equation,/bonds/);
 assert.match(english.topics[5].equation,/4\.05/);
});

test("source files and script ordering integrate SVG renderer with the narrative",()=>{
 const html=read("index.html"),app=read("app.js"),css=read("styles.css");
 assert.ok(html.indexOf("lesson04-figures.js")>=0);
 assert.ok(html.indexOf("lesson04-figures.js")<html.indexOf("app.js"));
 assert.match(app,/lesson\.id === "04" && Array\.isArray\(topic\.visual04\)/);
 assert.match(app,/window\.Lesson04Figures\.render\(kind, language\)/);
 assert.match(css,/\.band04-figure/);
 assert.match(css,/\.b04-state/);
 assert.match(css,/\.b04-gap/);
 assert.match(css,/html\[data-theme="dark"\]/);
});

test("other four lessons retain their topic and outcome counts",()=>{
 assert.deepEqual(Array.from(window.COURSE_LESSONS,x=>x.topics.length),[6,9,8,7,8]);
 assert.deepEqual(Array.from(window.COURSE_LESSONS_EN,x=>x.topics.length),[6,9,8,7,8]);
 assert.equal(window.COURSE_LESSONS.reduce((a,x)=>a+x.topics.length,0),38);
 assert.equal(window.COURSE_LESSONS.reduce((a,x)=>a+x.outcomes.length,0),51);
 assert.equal(window.COURSE_LESSONS_EN.reduce((a,x)=>a+x.outcomes.length,0),51);
});
