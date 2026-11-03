/* Reconstructed teaching diagrams for Band Theory (Lesson 04).
 * Original vector drawings corresponding to the user-supplied lecture figures:
 * isolated Si atom, N-atom level splitting, conventional band edges and Si scale.
 * "States" count includes spin throughout; no computed DFT dispersion is implied.
 */
(() => {
"use strict";
const esc=v=>String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const labels={
 tr:{
  why:"Bağ modeli neden tek başına yeterli değil?",bond:"Bağ resmi",band:"Bant resmi",local:"Yerel kovalent bağ / boşluk",global:"Kuantum durumları + doluluk",whyFoot:"Bağ modeli n, p ve Fermi seviyesini hesaplayacak enerji/durum yoğunluğu bilgisini vermez.",
  principles:"Bant modelinin üç ilkesi",principleNames:["1. İzinli durum","2. Pauli","3. Doluluk"],principleNotes:["Kristalde belirli kuantum durumları vardır.","Aynı tam kuantum durumunu iki elektron paylaşamaz.","0 K'de düşük enerji dolu; T>0 için Fermi–Dirac."],
  atom:"Yalıtılmış bir Si atomunda 14 elektron",energy:"Elektron enerjisi ↑",states:"spin durumu",occupied:"dolu",empty:"boş",out:"işaretli daire = dolu; boş daire = boş durum. Enerji aralıkları ölçekli değildir.",shells:["2 durum / 2 dolu","2 durum / 2 dolu","6 durum / 6 dolu","2 durum / 2 dolu","6 durum / 2 dolu"],
  split:"N atom yaklaşırken izinli enerji seviyeleri",sep:"Atomlar arası uzaklık →",eq:"Si kristalinin denge aralığı",bandUpper:"Üst bant: 4N durum / 0 e⁻ (0 K)",bandLower:"Alt bant: 4N durum / 4N e⁻",merged:"3s–3p karışımı / 8N durum",core:"İç kabuklar dar kalır (şematik)",splitNote:"Şema enerjilerin atomlar arası uzaklıkla değişimini nitel gösterir; bant genişlikleri ölçekli değildir.",
  bandCounts:"Denge uzaklığında iki bant",val:"Valans bandı",cond:"İletim bandı",filled:"4N durum / 4N elektron",unfilled:"4N durum / 0 elektron (0 K)",gap:"Yasak aralık Eᵍ",countNote:"Bu 8N spin durumu/4N elektron sayımı 3s–3p kökenli temel öğretim modelidir.",
  diagram:"Bant diyagramı — iki gösterim",allowed:"(a) Yalnız izinli enerji bölgeleri",standard:"(b) Geleneksel bant kenarı gösterimi",vacuum:"Vakum",chi:"Elektron ilgisi",diagramNote:"Eᵍ = Eᶜ − Eᵛ; χ = E₀ − Eᶜ. Ölçekli olmayan genel şema; Fermi seviyesi gösterilmez.",
  scaled:"Si · 300 K · ortak düşey enerji ölçeği",scaleNote:"E₀ = 0 referansı; Eᶜ = −4,05 eV; Eᵛ = −5,17 eV. Çizimde 4,05/1,12 uzaklıkları orantılıdır. χ yüzey durumuna göre değişebilir.",
  bridge:"Aynı üretim olayı, iki fiziksel dil",before:"Önce",after:"Uyarılma sonrası",vacancy:"Hol (+)",electron:"Elektron (−)",bridgeNote:"Bant geçişi bir Si–Si bağının kimyasal ayrılması değildir. Şemalar birebir atomistik hesap değildir."
 },
 en:{
  why:"Why is the bond model insufficient?",bond:"Bond picture",band:"Band picture",local:"Localized covalent bond / vacancy",global:"Quantum states + occupation",whyFoot:"The bond model cannot compute n, p or Fermi levels without allowed energies and densities of states.",
  principles:"Three principles of the band model",principleNames:["1. Allowed states","2. Pauli exclusion","3. Occupation"],principleNotes:["Only certain quantum states exist in the crystal.","Two electrons cannot share one complete quantum state.","Low energies fill at 0 K; Fermi–Dirac at T>0."],
  atom:"14 electrons in an isolated Si atom",energy:"Electron energy ↑",states:"spin states",occupied:"occupied",empty:"empty",out:"Crossed circle = occupied; open circle = empty. Energy separations are not to scale.",shells:["2 states / 2 occupied","2 states / 2 occupied","6 states / 6 occupied","2 states / 2 occupied","6 states / 2 occupied"],
  split:"Allowed energies as N atoms approach",sep:"Interatomic separation →",eq:"Equilibrium Si crystal spacing",bandUpper:"Upper band: 4N states / 0 e⁻ (0 K)",bandLower:"Lower band: 4N states / 4N e⁻",merged:"3s–3p mixing / 8N states",core:"Core levels remain narrow (schematic)",splitNote:"Qualitative level splitting vs atomic separation; band widths are not drawn to scale.",
  bandCounts:"Two bands at the equilibrium spacing",val:"Valence band",cond:"Conduction band",filled:"4N states / 4N electrons",unfilled:"4N states / 0 electrons (0 K)",gap:"Forbidden gap Eᵍ",countNote:"The 8N spin states and 4N electrons count is a simplified 3s/3p-derived teaching model.",
  diagram:"Band diagram — two representations",allowed:"(a) Allowed energy regions",standard:"(b) Conventional band edges",vacuum:"Vacuum",chi:"Electron affinity",diagramNote:"Eᵍ = Eᶜ − Eᵛ; χ = E₀ − Eᶜ. General schematic, not to scale; the Fermi level is not shown.",
  scaled:"Si · 300 K · one common vertical energy scale",scaleNote:"Reference E₀ = 0, Eᶜ = −4.05 eV and Eᵛ = −5.17 eV. The 4.05/1.12 distances are proportional. Actual electron affinity depends on surface conditions.",
  bridge:"One excitation, two physical languages",before:"Before",after:"After excitation",vacancy:"Hole (+)",electron:"Electron (−)",bridgeNote:"An electronic band transition does not chemically dissociate an individual Si–Si bond. These are conceptual diagrams, not atomistic calculations."
 }
};
function txt(x,y,t,cls="b04-label",anchor="start"){return '<text x="'+x+'" y="'+y+'" class="'+cls+'" text-anchor="'+anchor+'">'+esc(t)+'</text>';}
function svg(content,width=780,height=340,title=""){
 return '<svg viewBox="0 0 '+width+' '+height+'" role="img" aria-label="'+esc(title)+'" class="b04-svg">'+
 '<title>'+esc(title)+'</title>'+content+'</svg>';
}
function fig(d,kind,body,foot){
 return '<figure class="lesson-figure b04-figure b04-'+kind+'"><figcaption>'+esc(d[kind]||d.why||kind)+'</figcaption>'+
 body+'<p class="lesson-figure-note">'+esc(foot)+'</p></figure>';
}
function reason(d){
 const panels=[{x:20,name:d.bond,main:d.local},{x:405,name:d.band,main:d.global}];
 const graphic=svg(panels.map((p,i)=>'<g>'+
 '<rect x="'+p.x+'" y="18" width="350" height="205" rx="14" class="b04-frame"/>'+
 txt(p.x+18,48,p.name,"b04-title")+
 (i===0?'<path d="M'+(p.x+65)+' 109 L'+(p.x+120)+' 169 L'+(p.x+175)+' 109 L'+(p.x+230)+' 169" class="b04-bond"/>'+
 [65,120,175,230].map((xx,j)=>'<circle cx="'+(p.x+xx)+'" cy="'+(j%2?169:109)+'" r="12" class="b04-atom"/>').join('')+
 '<circle cx="'+(p.x+148)+'" cy="138" r="11" class="b04-hole"/>'+
 txt(p.x+148,143,'+',"b04-charge","middle"):
 '<rect x="'+(p.x+48)+'" y="78" width="256" height="46" rx="6" class="b04-upper"/>'+
 '<rect x="'+(p.x+48)+'" y="159" width="256" height="46" rx="6" class="b04-lower"/>'+
 '<circle cx="'+(p.x+170)+'" cy="102" r="11" class="b04-electron"/>'+txt(p.x+170,107,'−',"b04-charge","middle")+
 '<circle cx="'+(p.x+170)+'" cy="182" r="11" class="b04-hole"/>'+txt(p.x+170,187,'+',"b04-charge","middle"))+
 txt(p.x+175,248,p.main,"b04-small","middle")+'</g>').join(''),780,268,d.why);
 return fig(d,"why",graphic,d.whyFoot);
}
function principles(d){
 const cards=d.principleNames.map((x,i)=>'<div class="b04-principle">'+
 '<strong>'+esc(x)+'</strong><p>'+esc(d.principleNotes[i])+'</p>'+
 '<div class="b04-principle-symbol">'+(["E₁, E₂, …","↑↓","f(E)"][i])+'</div></div>').join("");
 return '<figure class="lesson-figure b04-figure"><figcaption>'+esc(d.principles)+'</figcaption>'+
 '<div class="b04-principles">'+cards+'</div></figure>';
}
function circle(cx,cy,filled){
 return '<circle cx="'+cx+'" cy="'+cy+'" r="11" class="b04-state"/>'+
 (filled?'<path d="M'+(cx-6)+' '+(cy-6)+' l12 12 m0 -12 l-12 12" class="b04-state-mark"/>':'');
}
function atomic(d){
 const lines=[
 {orb:"1s",y:405,total:2,used:2,label:d.shells[0]},
 {orb:"2s",y:343,total:2,used:2,label:d.shells[1]},
 {orb:"2p",y:307,total:6,used:6,label:d.shells[2]},
 {orb:"3s",y:200,total:2,used:2,label:d.shells[3]},
 {orb:"3p",y:132,total:6,used:2,label:d.shells[4]}
 ];
 const body='<path d="M62 440 V65 l-8 10 m8 -10 8 10" class="b04-axis"/>'+txt(30,38,d.energy,"b04-label")+
 lines.map(r=>{
  const spots=Array.from({length:r.total},(_,j)=>circle(265+j*32,r.y,j<r.used)).join("");
  return '<path d="M113 '+r.y+' H480" class="b04-level"/>'+spots+
   txt(495,r.y+6,r.orb,"b04-orb")+txt(554,r.y+5,r.label,"b04-label");
 }).join("")+
 circle(80,481,false)+txt(96,486,d.empty,"b04-small")+circle(300,481,true)+txt(318,486,d.occupied,"b04-small");
 return fig(d,"atom",svg(body,850,510,d.atom),d.out);
}
function splitting(d){
 // The middle 3s/3p levels spread, mix, and separate into two bands at the crystal spacing.
 const upper='M110 98 C185 135 240 170 330 195 C405 221 435 237 466 246 C497 253 515 257 540 258 L540 280 C500 268 467 272 439 282 C391 300 322 336 250 355 C199 366 151 370 110 372 L110 327 C165 326 195 323 226 310 C273 295 291 275 321 255 C272 214 188 190 110 171 Z';
 const lower='M110 420 C180 406 258 397 335 375 C397 357 445 334 479 321 L540 321 L540 345 C478 346 420 371 371 397 C280 443 186 469 110 470 Z';
 const body='<path d="M75 508 V45 l-8 9 m8 -9 8 9 M75 508 H710 l-8 -8 m8 8 -8 8" class="b04-axis"/>'+
 txt(20,24,d.energy,"b04-small")+txt(502,543,d.sep,"b04-small")+
 '<path d="'+upper+'" class="b04-upper-shape"/><path d="'+lower+'" class="b04-lower-shape"/>'+
 '<path d="M190 68 V500" class="b04-eq-line"/>'+txt(197,494,d.eq,"b04-annotation")+
 [470,432,393].map(y=>'<path d="M102 '+y+' H648" class="b04-core"/>').join("")+
 txt(663,474,'1s',"b04-small")+txt(663,436,'2s',"b04-small")+txt(663,397,'2p',"b04-small")+
 '<path d="M540 321 H649 M540 258 H649" class="b04-level"/>'+
 txt(655,325,'3s',"b04-orb")+txt(655,261,'3p',"b04-orb")+
 txt(118,73,d.bandUpper,"b04-small")+txt(118,311,d.bandLower,"b04-small")+
 txt(344,137,d.merged,"b04-small")+
 txt(335,485,d.core,"b04-small");
 return fig(d,"split",svg(body,820,559,d.split),d.splitNote);
}
function bands(d){
 const body='<rect x="130" y="65" width="516" height="103" rx="13" class="b04-upper"/>'+
 '<rect x="130" y="242" width="516" height="103" rx="13" class="b04-lower"/>'+
 txt(154,96,d.cond,"b04-title")+txt(154,136,d.unfilled,"b04-label")+
 txt(154,273,d.val,"b04-title")+txt(154,313,d.filled,"b04-label")+
 '<path d="M665 169 V241 m-7 -9 7 9 7 -9" class="b04-measure"/>'+
 txt(640,210,d.gap,"b04-small","end");
 return fig(d,"bandCounts",svg(body,780,398,d.bandCounts),d.countNote);
}
function diagram(d){
 const content='<path d="M40 344 V38 l-7 9 m7 -9 7 9" class="b04-axis"/>'+
 txt(49,37,'E ↑',"b04-title")+
 '<g><path d="M92 72 H325 M92 151 H325 M92 256 H325" class="b04-level"/>'+
 '<rect x="112" y="151" width="184" height="57" class="b04-upper" />'+
 '<rect x="112" y="256" width="184" height="61" class="b04-lower" />'+
 txt(98,353,d.allowed,"b04-small")+
 txt(304,70,'E₀',"b04-label","end")+txt(304,146,'Eᶜ',"b04-label","end")+
 txt(304,251,'Eᵛ',"b04-label","end")+'</g>'+
 '<path d="M393 344 V38 l-7 9 m7 -9 7 9" class="b04-axis"/>'+
 '<path d="M443 72 H700 M443 151 H700 M443 256 H700" class="b04-level"/>'+
 '<rect x="467" y="153" width="193" height="53" class="b04-upper"/>'+
 '<rect x="467" y="258" width="193" height="57" class="b04-lower"/>'+
 '<path d="M720 72 V151 m-5 -8 5 8 5 -8 M720 151 V256 m-5 -8 5 8 5 -8" class="b04-measure"/>'+
 txt(735,116,'χ',"b04-title")+txt(735,206,'Eᵍ',"b04-title")+
 txt(650,62,'E₀',"b04-orb")+txt(650,143,'Eᶜ',"b04-orb")+txt(650,248,'Eᵛ',"b04-orb")+
 txt(480,353,d.standard,"b04-small");
 return fig(d,"diagram",svg(content,860,372,d.diagram),d.diagramNote);
}
function scaled(d){
 // Vacuum to conduction = 4.05 eV, conduction to valence = 1.12 eV.
 // All THREE line heights computed with identical px/eV scaling, not an illustrative ratio.
 const y0=55,unit=70,yc=y0+4.05*unit,yv=y0+5.17*unit;
 const content='<path d="M92 468 V30 l-7 10 m7 -10 7 10" class="b04-axis"/>'+
 [0,-1,-2,-3,-4,-5].map(e=>{
  const y=y0-e*unit;
  return '<line x1="92" x2="690" y1="'+y+'" y2="'+y+'" class="b04-grid"/>'+
    txt(79,y+4,String(e),"b04-small","end");
 }).join('')+
 txt(15,20,'E (eV)',"b04-small")+
 '<path d="M155 '+y0+' H628 M155 '+yc+' H628 M155 '+yv+' H628" class="b04-level"/>'+
 '<rect x="185" y="'+(yc+3)+'" width="352" height="'+(yv-yc-6)+'" class="b04-gap-area"/>'+
 '<path d="M568 '+y0+' V'+yc+' m-6 -9 6 9 6 -9 M568 '+yc+' V'+yv+' m-6 -9 6 9 6 -9" class="b04-measure"/>'+
 txt(645,y0+6,'E₀ = 0',"b04-orb")+txt(645,yc+6,'Eᶜ = −4.05',"b04-label")+txt(645,yv+6,'Eᵛ = −5.17',"b04-label")+
 txt(548,(y0+yc)/2+6,'χ = 4.05 eV',"b04-small","end")+
 txt(548,(yc+yv)/2+6,'Eᵍ = 1.12 eV',"b04-small","end")+
 '<rect x="181" y="'+(yc-45)+'" width="350" height="38" rx="6" class="b04-upper"/>'+
 txt(197,yc-20,d.cond,"b04-label")+
 '<rect x="181" y="'+(yv+6)+'" width="350" height="39" rx="6" class="b04-lower"/>'+
 txt(197,yv+31,d.val,"b04-label");
 return fig(d,"scaled",svg(content,855,494,d.scaled),d.scaleNote);
}
function bridge(d){
 const panels=[{x:12,title:d.bond},{x:395,title:d.band}];
 const graphic=svg(panels.map((p,i)=>'<g>'+
 '<rect x="'+p.x+'" y="13" width="365" height="248" rx="13" class="b04-frame"/>'+
 txt(p.x+20,45,p.title,"b04-title")+
 (i===0?'<circle cx="'+(p.x+105)+'" cy="136" r="23" class="b04-atom"/>'+
 '<circle cx="'+(p.x+252)+'" cy="136" r="23" class="b04-atom"/>'+
 '<path d="M'+(p.x+128)+' 136 H'+(p.x+230)+'" class="b04-bond"/>'+
 '<circle cx="'+(p.x+179)+'" cy="136" r="12" class="b04-hole"/>'+txt(p.x+179,142,'+',"b04-charge","middle")+
 '<circle cx="'+(p.x+264)+'" cy="83" r="12" class="b04-electron"/>'+txt(p.x+264,89,'−',"b04-charge","middle"):
 '<rect x="'+(p.x+44)+'" y="78" width="277" height="50" class="b04-upper"/>'+
 '<rect x="'+(p.x+44)+'" y="183" width="277" height="50" class="b04-lower"/>'+
 '<path d="M'+(p.x+183)+' 173 V135 m-7 8 7 -8 7 8" class="b04-measure"/>'+
 '<circle cx="'+(p.x+250)+'" cy="102" r="13" class="b04-electron"/>'+txt(p.x+250,108,'−',"b04-charge","middle")+
 '<circle cx="'+(p.x+250)+'" cy="208" r="13" class="b04-hole"/>'+txt(p.x+250,214,'+',"b04-charge","middle"))+
 '</g>').join(''),780,290,d.bridge);
 return fig(d,"bridge",graphic,d.bridgeNote);
}
function render(kind,lang="tr"){
 const d=labels[lang==="en"?"en":"tr"];
 const renders={why:reason,principles,atom:atomic,splitting,bands,diagram,scaled,bridge};
 return renders[kind]?renders[kind](d):"";
}
window.BandTheory04Visuals={render};
})();