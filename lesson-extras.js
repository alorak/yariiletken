/* Additional educational illustrations for lessons 02 and 06.
   Original, coordinate-driven SVGs; no external assets or geometry library. */
(() => {
"use strict";
const esc = x => String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const localizations = {
  tr: {
    silicon: {
      title:"Silisyum kristali — birim hücre ve yükseklikli izdüşüm",
      unit:"(a) Diamond-kübik birim hücre",projection:"(b) [001] yönünden izdüşüm",
      cubeNote:"Renkli bağlar bir Si atomunun dört tetrahedral komşusunu gösterir.",
      projectionNote:"Köşeler ve kenar ortaları fcc örgü atomlarını; kırmızı noktalar ikinci alt örgüyü gösterir. Sayılar z/a yükseklikleridir.",
      lattice:"Örgü sabiti a", atoms:"Geleneksel hücredeki etkin atom", density:"Atom yoğunluğu (cm⁻³)",
      note:"İki iç içe fcc alt örgü (a/4, a/4, a/4) ötelenmiştir. Paylaşılan köşe/yüz atomları sayılırken geleneksel hücre başına 8 atom elde edilir. 5,43 Å oda sıcaklığına yakın yaklaşık örgü sabitidir. Bu, ders slaytındaki 3B hücre–yükseklikli izdüşüm düzeninin yeniden çizimidir."
    },
    nonEq: {
      title:"Bir örnek ne zaman termal dengede değildir?",
      cards:[
        {name:"Sıcaklık gradyanı",description:"T₁ > T₂ ise ısı akışı vardır; sistem termal dengede değildir.",short:"T₁ > T₂"},
        {name:"Sürekli aydınlatma",description:"Işık ek elektron–hol çiftleri üretebilir; denge dağılımı bozulur.",short:"hν"},
        {name:"Dış kutuplama",description:"Gerilim, taşıyıcı akışını sürer; sabit akım kararlı durum olabilir ama termal denge değildir.",short:"I"}
      ],
      foot:"Kaynak slaytta üç örnek: temperature gradient, illumination ve applied bias. Termal dengede makroskopik net ısı veya elektrik akışı yoktur; mikroskobik üretim ve rekombinasyon yine sürer."
    },
    whyEq: {
      title:"Termal denge neden hesaplamaların başlangıcıdır?",
      equilibrium:"Termal dengede p–n eklemi", driven:"Küçük dış kutuplamayla",
      diffusion:"Difüzyon bileşeni",drift:"Sürüklenme bileşeni",net:"Net akım",
      foot:"Bir p–n ekleminde denge, zıt yönlü akım bileşenlerinin birbirini tam dengelemesini sağlar. Dış kutuplama bu dengeyi değiştirir ve ölçülebilir diyot akımı doğar. +1000, −1000 ve +1010 burada yalnızca aritmetiği göstermek için seçilmiş göreli örneklerdir; cihaz ölçümü değildir."
    },
    majority:{
      title:"Katkılama: çoğunluk ve azınlık taşıyıcıları — sayısal örnekler",
      intro:"300 K'de yaklaşık nᵢ = 10¹⁰ cm⁻³. Tam iyonlaşmış, kompanzasyonsuz ve dejenere olmayan n-tipi Si için aşağıdaki tablo geçerlidir.",
      donor:"Donör yoğunluğu Nᴅ",electrons:"Elektron n₀ (çoğunluk)",holes:"Hol p₀ (azınlık)",
      densityUnit:"cm⁻³", foot:"n₀ ≈ Nᴅ ve p₀ = nᵢ²/n₀. Örneğin Nᴅ = 10¹⁵ cm⁻³ için p₀ ≈ 10²⁰/10¹⁵ = 10⁵ cm⁻³. Yaklaşık 5×10²² Si atomu/cm³ içinde 10¹⁵ katkı atomu ≈ 20 ppb atom oranıdır. Bu bağıntıları freeze-out ve intrinsik rejimde aynen kullanma; iyonlaşma ve yük nötrlüğü yeniden çözülmelidir.",
      band:"Düşük T: Nᴅ⁺ < Nᴅ",plateau:"Orta T: n₀ ≈ Nᴅ",high:"Yüksek T: n₀, p₀ ≈ nᵢ"
    }
  },
  en: {
    silicon:{
      title:"Silicon crystal — conventional cell and height-labelled projection",
      unit:"(a) Diamond-cubic conventional cell",projection:"(b) Projection along [001]",
      cubeNote:"Highlighted bonds identify four tetrahedral neighbors around one Si atom.",
      projectionNote:"Corners and edge midpoints show fcc sites; red dots represent the shifted sublattice. Numbers indicate fractional heights z/a.",
      lattice:"Lattice constant a",atoms:"Effective atoms per conventional cell",density:"Atomic density (cm⁻³)",
      note:"The diamond lattice comprises two interpenetrating fcc sublattices displaced by (a/4, a/4, a/4). Shared corner/face atoms count to eight atoms per conventional cell. 5.43 Å is an approximate near-room-temperature value. This is an original re-drawing of the lecture's cell-and-height-projection format."
    },
    nonEq:{
      title:"When is a sample NOT in thermal equilibrium?",
      cards:[
        {name:"Temperature gradient",description:"T₁ > T₂ produces heat flow; the sample is out of thermal equilibrium.",short:"T₁ > T₂"},
        {name:"Continuous illumination",description:"Light can generate extra electron–hole pairs and disturb the equilibrium distribution.",short:"hν"},
        {name:"Applied voltage",description:"The bias drives current; a constant current may be steady state, but not thermal equilibrium.",short:"I"}
      ],
      foot:"The lecture's three examples are temperature gradient, illumination and applied bias. In equilibrium there is no macroscopic net heat or electrical flow, even though microscopic generation and recombination can continue."
    },
    whyEq:{
      title:"Why is thermal equilibrium the starting point?",
      equilibrium:"p–n junction at equilibrium",driven:"With small applied bias",
      diffusion:"Diffusion component",drift:"Drift component",net:"Net current",
      foot:"At equilibrium in a p–n junction, opposing current components cancel exactly. A bias changes this balance and generates a measurable diode current. The +1000, −1000 and +1010 values are illustrative relative current units, not device measurements."
    },
    majority:{
      title:"Doping: majority and minority carriers — worked examples",
      intro:"At 300 K, take nᵢ ≈ 10¹⁰ cm⁻³. These examples apply to fully ionized, uncompensated, nondegenerate n-type silicon.",
      donor:"Donor concentration Nᴅ",electrons:"Electron n₀ (majority)",holes:"Hole p₀ (minority)",
      densityUnit:"cm⁻³",foot:"n₀ ≈ Nᴅ and p₀ = nᵢ²/n₀. With Nᴅ = 10¹⁵ cm⁻³, p₀ ≈ 10²⁰/10¹⁵ = 10⁵ cm⁻³. Compared with approximately 5×10²² Si atoms/cm³, 10¹⁵ dopants/cm³ is about 20 ppb atomic fraction. Do not apply these approximations unchanged in freeze-out or intrinsic regimes: solve ionization and charge neutrality again.",
      band:"Low T: Nᴅ⁺ < Nᴅ",plateau:"Intermediate T: n₀ ≈ Nᴅ",high:"High T: n₀, p₀ ≈ nᵢ"
    }
  }
};
function point3(p){return {x:74+190*p[0]+72*p[2],y:272-191*p[1]-64*p[2]};}
function line3(a,b,cls){const A=point3(a),B=point3(b);return '<line class="'+cls+'" x1="'+A.x.toFixed(1)+'" y1="'+A.y.toFixed(1)+'" x2="'+B.x.toFixed(1)+'" y2="'+B.y.toFixed(1)+'"/>';}
function circles3(nodes,cls,r){return nodes.map(n=>{const p=point3(n);return '<circle class="'+cls+'" cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="'+r+'"/>';}).join("");}
const corners=[];for(let x of [0,1])for(let y of [0,1])for(let z of [0,1])corners.push([x,y,z]);
const faces=[[.5,.5,0],[.5,.5,1],[.5,0,.5],[.5,1,.5],[0,.5,.5],[1,.5,.5]];
const basis=[[.25,.25,.25],[.25,.75,.75],[.75,.25,.75],[.75,.75,.25]];
const allA=[...corners,...faces];
const dist=(a,b)=>Math.hypot(...a.map((v,i)=>v-b[i]));
const core=basis[0];
function conventionalCellSvg(label){
  const edges=[];
  for(let i=0;i<corners.length;i++)for(let j=i+1;j<corners.length;j++)
    if(corners[i].filter((v,k)=>v!==corners[j][k]).length===1)edges.push(line3(corners[i],corners[j],"si-cell-edge"));
  const bonds=[];for(const atom of allA)for(const site of basis)
    if(Math.abs(dist(atom,site)-Math.sqrt(3)/4)<1e-6){
      const highlighted=site===core;
      bonds.push(line3(atom,site,highlighted?"si-cell-bond-hi":"si-cell-bond"));
    }
  return '<svg viewBox="0 0 390 323" class="si-cell-svg" role="img" aria-label="'+esc(label)+'">'+
    '<title>'+esc(label)+'</title>'+edges.join("")+
    bonds.join("")+circles3(allA,"si-cell-atom",5)+circles3(basis,"si-cell-shifted",6)+
    '<text class="si-cell-axis-label" x="67" y="298">A</text>'+
    '<text class="si-cell-axis-label" x="272" y="298">B</text>'+
    '<text class="si-cell-axis-label" x="123" y="26">C</text>'+
    '<text class="si-cell-axis-label" x="341" y="35">D</text>'+
    '<path class="si-cell-measure" d="M74 285 V295 H264 V285"/>'+
    '<text class="si-cell-axis-label" x="167" y="313" text-anchor="middle">a</text></svg>';
}
function projectionSvg(label){
  const x=x=>58+231*x,y=y=>267-231*y;
  let nodes=[],bonds=[];
  const dots=[...corners,...faces,...basis];
  // [001] projection combines the top and bottom of the conventional cube.
  for(let ix of [0,1])for(let iy of [0,1]){
    nodes.push('<circle cx="'+x(ix)+'" cy="'+y(iy)+'" r="5" class="si-proj-atom"/>');
    nodes.push('<text x="'+(x(ix)+(ix===0?-12:8))+'" y="'+(y(iy)+13)+'" class="si-proj-fraction">0</text>');
  }
  for(const p of [[.5,0],[.5,1],[0,.5],[1,.5]]){
    nodes.push('<circle cx="'+x(p[0])+'" cy="'+y(p[1])+'" r="5" class="si-proj-face"/>');
    nodes.push('<text x="'+(x(p[0])+6)+'" y="'+(y(p[1])-8)+'" class="si-proj-fraction">½</text>');
  }
  nodes.push('<circle cx="'+x(.5)+'" cy="'+y(.5)+'" r="6" class="si-proj-face"/>');
  nodes.push('<text x="'+(x(.5)+8)+'" y="'+(y(.5)-8)+'" class="si-proj-fraction">0</text>');
  for(const p of basis){
    bonds.push('<line class="si-proj-bond" x1="'+x(.5)+'" y1="'+y(.5)+'" x2="'+x(p[0])+'" y2="'+y(p[1])+'"/>');
    nodes.push('<circle cx="'+x(p[0])+'" cy="'+y(p[1])+'" r="6" class="si-proj-shifted"/>');
    nodes.push('<text x="'+(x(p[0])+(p[0]<.5?-21:8))+'" y="'+(y(p[1])+(p[1]<.5?14:-9))+'" class="si-proj-fraction">'+(p[2]===.25?"¼":"¾")+'</text>');
  }
  return '<svg viewBox="0 0 350 322" class="si-cell-svg" role="img" aria-label="'+esc(label)+'">'+
    '<title>'+esc(label)+'</title>'+
    '<rect x="'+x(0)+'" y="'+y(1)+'" width="231" height="231" class="si-proj-outline"/>'+
    bonds.join("")+nodes.join("")+
    '<text x="36" y="288" class="si-cell-axis-label">A</text>'+
    '<text x="288" y="288" class="si-cell-axis-label">D</text>'+
    '<text x="36" y="25" class="si-cell-axis-label">C</text>'+
    '<text x="288" y="25" class="si-cell-axis-label">B</text>'+
    '<text x="180" y="311" text-anchor="middle" class="si-cell-axis-label">z / a</text></svg>';
}
function diagram(title,body,note,extraClass=""){
  return '<figure class="lesson-figure lesson-extra '+extraClass+'"><figcaption>'+esc(title)+'</figcaption>'+
    body+'<p class="lesson-figure-note">'+esc(note)+'</p></figure>';
}
function silicon(lang){
  const d=localizations[lang].silicon;
  const stats=[["5.43 Å",d.lattice],["8",d.atoms],["5 × 10²²",d.density]];
  const block='<div class="silicon-cell-layout"><div class="silicon-cell-diagrams">'+
    '<div class="silicon-cell-frame"><strong>'+esc(d.unit)+'</strong>'+conventionalCellSvg(d.unit)+
    '<small>'+esc(d.cubeNote)+'</small></div>'+
    '<div class="silicon-cell-frame"><strong>'+esc(d.projection)+'</strong>'+projectionSvg(d.projection)+
    '<small>'+esc(d.projectionNote)+'</small></div></div>'+
    '<div class="silicon-cell-stats">'+stats.map(([v,label])=>
      '<div class="silicon-cell-stat"><strong>'+v+'</strong><span>'+esc(label)+'</span></div>').join("")+'</div></div>';
  return diagram(d.title,block,d.note,"silicon-structure");
}
function nonEqSvg(index,caption){
  let inner="";
  if(index===0){
    inner='<defs><linearGradient id="si-heat-grad"><stop offset="0" stop-color="#eb7773"/><stop offset="1" stop-color="#769bd9"/></linearGradient></defs>'+
      '<rect x="30" y="36" width="200" height="54" fill="url(#si-heat-grad)" stroke="var(--muted)" stroke-width="1.5" rx="3"/>'+
      '<text x="34" y="27">T₁</text><text x="217" y="27">T₂</text>'+
      '<path d="M65 113 H207 l-12 -6 m12 6 -12 6" fill="none" class="non-eq-red"/>';
  }else if(index===1){
    inner='<rect x="35" y="42" width="194" height="56" rx="3" fill="var(--surface)" stroke="var(--ink-soft)" stroke-width="2"/>'+
      [80,128,176].map(x=>'<path d="M'+x+' 10 v26 m-5 -8 5 8 5 -8" class="non-eq-rays"/>').join("")+
      '<text x="135" y="123" text-anchor="middle">hν</text>';
  }else{
    inner='<path d="M38 55 H48 V22 H215 V55 H229 V96 H165 M95 96 H38 V55" class="non-eq-circuit"/>'+
      '<rect x="48" y="43" width="181" height="48" fill="var(--surface)" stroke="var(--ink-soft)" stroke-width="2"/>'+
      '<path d="M125 83 V118 M133 91 V110 M95 118 H125 M133 118 H169" class="non-eq-circuit"/>'+
      '<path d="M99 15 H184 l-11 -6 m11 6 -11 6" fill="none" class="non-eq-red"/>'+
      '<text x="194" y="18">I</text>';
  }
  return '<svg class="non-eq-diagram" viewBox="0 0 266 142" role="img" aria-label="'+esc(caption)+'">'+
    '<title>'+esc(caption)+'</title>'+inner+'</svg>';
}
function nonEq(lang){
  const d=localizations[lang].nonEq;
  return diagram(d.title,'<div class="non-eq-grid">'+d.cards.map((card,i)=>
    '<div class="non-eq-card">'+nonEqSvg(i,card.name)+'<strong>'+esc(card.name)+'</strong>'+
    '<p>'+esc(card.description)+'</p></div>').join("")+'</div>',d.foot);
}
function equilibriumValue(lang){
  const d=localizations[lang].whyEq;
  const values=[
    {title:d.equilibrium,plus:1000,minus:-1000,net:0},
    {title:d.driven,plus:1010,minus:-1000,net:10}
  ];
  const block='<div class="equilibrium-compare">'+values.map(row=>
    '<div class="equilibrium-compare-row"><strong>'+esc(row.title)+'</strong>'+
    '<div class="equilibrium-opposing"><span>'+esc(d.diffusion)+': <b>+'+row.plus+'</b></span>'+
    '<span>'+esc(d.drift)+': <b>'+row.minus+'</b></span></div>'+
    '<div class="equilibrium-net">'+esc(d.net)+': <strong>'+
    (row.net===0?"0":"+"+row.net)+'</strong></div></div>').join("")+'</div>';
  return diagram(d.title,block,d.foot);
}
function majority(lang){
  const d=localizations[lang].majority;
  const dop=[["10¹⁵","10¹⁵","10⁵"],["10¹⁶","10¹⁶","10⁴"],["10¹⁷","10¹⁷","10³"]];
  const table='<div class="majority-table-wrap"><table class="majority-table"><thead><tr>'+
    [d.donor,d.electrons,d.holes].map(s=>'<th>'+esc(s)+' <small>(cm⁻³)</small></th>').join("")+'</tr></thead>'+
    '<tbody>'+dop.map(row=>'<tr>'+row.map(cell=>'<td>'+cell+'</td>').join("")+'</tr>').join("")+'</tbody></table></div>';
  const legend='<div class="majority-regimes"><span>'+esc(d.band)+'</span><span>'+esc(d.plateau)+'</span>'+
    '<span>'+esc(d.high)+'</span></div>';
  return diagram(d.title,'<p class="majority-intro">'+esc(d.intro)+'</p>'+table+legend,d.foot,"majority-quantities");
}
function render(kind,language="tr"){
  const lang=language==="en"?"en":"tr";
  if(kind==="silicon-cell")return silicon(lang);
  if(kind==="non-equilibrium")return nonEq(lang);
  if(kind==="equilibrium-value")return equilibriumValue(lang);
  if(kind==="majority-numbers")return majority(lang);
  return "";
}
window.SemiconductorLessonExtras={render};
})();