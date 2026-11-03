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
  principles:"Bant modelinin üç ilkesi",principleNames:["1. İzinli durum · Pauli","2. Dağılım N(E)","3. Dolu oran f(E,T)"],principleNotes:["Kuantum mekaniği: izinli enerjiler, Pauli dışarlama ve dejenere durumlar.","Kuantum mekaniği: enerjiye göre izinli durum sayısı N(E).","İstatistiksel mekanik: termal dengede Fermi–Dirac doluluğu."],
  atom:"Yalıtılmış bir Si atomunda 14 elektron",energy:"Elektron enerjisi ↑",states:"spin durumu",occupied:"dolu",empty:"boş",out:"işaretli daire = dolu; boş daire = boş durum. Enerji aralıkları ölçekli değildir.",shells:["2 durum / 2 dolu","2 durum / 2 dolu","6 durum / 6 dolu","2 durum / 2 dolu","6 durum / 2 dolu"],
  split:"N atom yaklaşırken izinli enerji seviyeleri",sep:"Atomlar arası uzaklık →",eq:"Si kristalinin denge aralığı",bandUpper:"Üst bant: 4N durum / 0 e⁻ (0 K)",bandLower:"Alt bant: 4N durum / 4N e⁻",merged:"3s–3p karışımı / 8N durum",core:"İç kabuklar dar kalır (şematik)",splitNote:"Şema enerjilerin atomlar arası uzaklıkla değişimini nitel gösterir; bant genişlikleri ölçekli değildir.",
  bandCounts:"Denge uzaklığında iki bant",val:"Valans bandı",cond:"İletim bandı",filled:"4N durum / 4N elektron",unfilled:"4N durum / 0 elektron (0 K)",gap:"Yasak aralık Eᵍ",countNote:"Bu 8N spin durumu/4N elektron sayımı 3s–3p kökenli temel öğretim modelidir.",
  diagram:"Bant diyagramı — iki gösterim",allowed:"(a) Yalnız izinli enerji bölgeleri",standard:"(b) Geleneksel bant kenarı gösterimi",vacuum:"Vakum",chi:"Elektron ilgisi",diagramNote:"Eᵍ = Eᶜ − Eᵛ; χ = E₀ − Eᶜ. Ölçekli olmayan genel şema; Fermi seviyesi gösterilmez.",
  scaled:"Si · 300 K · ortak düşey enerji ölçeği",scaleNote:"E₀ = 0 referansı; Eᶜ = −4,05 eV; Eᵛ = −5,17 eV. Çizimde 4,05/1,12 uzaklıkları orantılıdır. χ yüzey durumuna göre değişebilir.",
  bridge:"Aynı üretim olayı, iki fiziksel dil",before:"Önce",after:"Uyarılma sonrası",generation:"Üretim ↓",recombination:"Yeniden birleşme ↑",vacancy:"Hol (+)",electron:"Elektron (−)",bridgeNote:"Bant geçişi bir Si–Si bağının kimyasal ayrılması değildir. Şemalar birebir atomistik hesap değildir."
 },
 en:{
  why:"Why is the bond model insufficient?",bond:"Bond picture",band:"Band picture",local:"Localized covalent bond / vacancy",global:"Quantum states + occupation",whyFoot:"The bond model cannot compute n, p or Fermi levels without allowed energies and densities of states.",
  principles:"Three principles of the band model",principleNames:["1. Allowed states · Pauli","2. Distribution N(E)","3. Occupied fraction f(E,T)"],principleNotes:["Quantum mechanics: allowed energies, Pauli exclusion and degeneracy.","Quantum mechanics: how states are distributed over energy N(E).","Statistical mechanics: Fermi–Dirac equilibrium occupation."],
  atom:"14 electrons in an isolated Si atom",energy:"Electron energy ↑",states:"spin states",occupied:"occupied",empty:"empty",out:"Crossed circle = occupied; open circle = empty. Energy separations are not to scale.",shells:["2 states / 2 occupied","2 states / 2 occupied","6 states / 6 occupied","2 states / 2 occupied","6 states / 2 occupied"],
  split:"Allowed energies as N atoms approach",sep:"Interatomic separation →",eq:"Equilibrium Si crystal spacing",bandUpper:"Upper band: 4N states / 0 e⁻ (0 K)",bandLower:"Lower band: 4N states / 4N e⁻",merged:"3s–3p mixing / 8N states",core:"Core levels remain narrow (schematic)",splitNote:"Qualitative level splitting vs atomic separation; band widths are not drawn to scale.",
  bandCounts:"Two bands at the equilibrium spacing",val:"Valence band",cond:"Conduction band",filled:"4N states / 4N electrons",unfilled:"4N states / 0 electrons (0 K)",gap:"Forbidden gap Eᵍ",countNote:"The 8N spin states and 4N electrons count is a simplified 3s/3p-derived teaching model.",
  diagram:"Band diagram — two representations",allowed:"(a) Allowed energy regions",standard:"(b) Conventional band edges",vacuum:"Vacuum",chi:"Electron affinity",diagramNote:"Eᵍ = Eᶜ − Eᵛ; χ = E₀ − Eᶜ. General schematic, not to scale; the Fermi level is not shown.",
  scaled:"Si · 300 K · one common vertical energy scale",scaleNote:"Reference E₀ = 0, Eᶜ = −4.05 eV and Eᵛ = −5.17 eV. The 4.05/1.12 distances are proportional. Actual electron affinity depends on surface conditions.",
  bridge:"One excitation, two physical languages",before:"Before",after:"After excitation",generation:"Generation ↓",recombination:"Recombination ↑",vacancy:"Hole (+)",electron:"Electron (−)",bridgeNote:"An electronic band transition does not chemically dissociate an individual Si–Si bond. These are conceptual diagrams, not atomistic calculations."
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
 '<div class="b04-principle-symbol">'+(["E₁, E₂, …","N(E)","f(E,T)"][i])+'</div></div>').join("");
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
 // Slide 12: the 1.12 eV gap is small relative to the ~12 eV valence bandwidth.
 // All marked vertical separations have exactly one px/eV constant.
 const y0=54,unit=25,yc=y0+4.05*unit,yv=y0+5.17*unit,yb=yv+12*unit;
 const content='<path d="M92 520 V27 l-7 10 m7 -10 7 10" class="b04-axis"/>'+
 [0,-4.05,-5.17,-10,-15,-17.17].map(e=>{
   const y=y0-e*unit;
   return '<line x1="92" x2="700" y1="'+y+'" y2="'+y+'" class="b04-grid"/>'+
     txt(80,y+4,String(e),"b04-small","end");
 }).join('')+
 txt(15,20,'E (eV)',"b04-small")+
 '<rect x="155" y="'+(y0-26)+'" width="382" height="'+(yc-y0+26)+'" class="b04-upper"/>'+
 '<rect x="155" y="'+yv+'" width="382" height="'+(yb-yv)+'" class="b04-lower"/>'+
 '<rect x="155" y="'+yc+'" width="382" height="'+(yv-yc)+'" class="b04-gap-area"/>'+
 '<path d="M155 '+y0+' H628 M155 '+yc+' H628 M155 '+yv+' H628" class="b04-level"/>'+
 '<path d="M155 '+yb+' H628" class="b04-level"/>'+
 '<path d="M568 '+y0+' V'+yc+' M568 '+yc+' V'+yv+'" class="b04-measure"/>'+
 txt(642,y0+5,'E₀ = 0 eV',"b04-small")+
 txt(642,yc+5,'Eᶜ = −4.05 eV',"b04-small")+
 txt(642,yv+5,'Eᵛ = −5.17 eV',"b04-small")+
 txt(642,yb+5,'Eᴮ ≈ −17.17 eV',"b04-small")+
 txt(535,(y0+yc)/2,'χ = 4.05 eV',"b04-small","end")+
 txt(535,(yc+yv)/2+4,'Eᵍ = 1.12 eV',"b04-small","end")+
 txt(175,102,d.cond+" ↑","b04-label")+
 txt(175,(yv+yb)/2,'≈12 eV · '+d.val,"b04-title")+
 '<path d="M555 '+yv+' V'+yb+' m-6 -10 6 10 6 -10" class="b04-measure"/>'+
 txt(585,(yv+yb)/2+25,d.valenceWidth,"b04-small")+
 txt(170,yv-9,'χ + Eᵍ = 5.17 eV',"b04-annotation");
 const metrics='<div class="b04-scaled-metrics">'+
 [[d.gap,'1.12 eV'],[d.chiMetric,'4.05 eV'],[d.valenceWidth,'≈12 eV'],[d.freeValence,'5.17 eV']]
 .map(([key,value])=>'<div><strong>'+esc(value)+'</strong><small>'+esc(key)+'</small></div>').join('')+
 '</div>';
 return fig(d,"scaled",svg(content,855,565,d.scaled)+metrics,d.scaleNote);
}
function bridge(d){
 const cell=(x,y,isBond,after)=>{
  let elements='';
  if(isBond){
   elements='<circle cx="87" cy="93" r="21" class="b04-atom"/>'+
    '<circle cx="258" cy="93" r="21" class="b04-atom"/>'+
    '<path d="M108 93 H237" class="b04-bond"/>'+
    txt(87,99,'Si',"b04-small","middle")+txt(258,99,'Si',"b04-small","middle");
   if(after){
    elements+='<circle cx="160" cy="93" r="12" class="b04-hole"/>'+
       txt(160,99,'+',"b04-charge","middle")+
       '<circle cx="220" cy="38" r="12" class="b04-electron"/>'+
       txt(220,44,'−',"b04-charge","middle");
   } else {
    elements+='<circle cx="155" cy="93" r="10" class="b04-electron"/>'+
      txt(155,98,'−',"b04-charge","middle")+
      '<circle cx="184" cy="93" r="10" class="b04-electron"/>'+
      txt(184,98,'−',"b04-charge","middle");
   }
  }else{
   elements='<rect x="65" y="45" width="244" height="44" rx="6" class="b04-upper"/>'+
    '<rect x="65" y="115" width="244" height="44" rx="6" class="b04-lower"/>'+
    txt(70,37,d.cond,"b04-small")+txt(70,178,d.val,"b04-small");
   if(after){
    elements+='<circle cx="245" cy="66" r="12" class="b04-electron"/>'+txt(245,72,'−',"b04-charge","middle")+
      '<circle cx="245" cy="137" r="12" class="b04-hole"/>'+txt(245,143,'+',"b04-charge","middle");
   }else{
    elements+='<circle cx="245" cy="137" r="12" class="b04-electron"/>'+txt(245,143,'−',"b04-charge","middle");
   }
  }
  return '<g transform="translate('+x+' '+y+')">'+
   '<rect x="0" y="0" width="370" height="185" rx="10" class="b04-frame"/>'+
   txt(16,22,after?d.after:d.before,"b04-small")+elements+'</g>';
 };
 const body=txt(24,34,d.bond,"b04-title")+
  txt(472,34,d.band,"b04-title")+
  cell(20,46,true,false)+cell(462,46,false,false)+
  cell(20,283,true,true)+cell(462,283,false,true)+
  '<path d="M204 232 V280 m-7 -9 7 9 7 -9 M244 279 V233 m-7 9 7 -9 7 9" class="b04-measure"/>'+
  '<path d="M645 232 V280 m-7 -9 7 9 7 -9 M685 279 V233 m-7 9 7 -9 7 9" class="b04-measure"/>'+
  txt(155,250,d.generation,"b04-small","end")+
  txt(254,270,d.recombination,"b04-small")+
  txt(596,250,d.generation,"b04-small","end")+
  txt(697,270,d.recombination,"b04-small");
 return fig(d,"bridge",svg(body,870,480,d.bridge),d.bridgeNote);
}
const lecture04Extensions={
 tr:{
 far:"N atom hâlâ uzaktayken: durum ve elektron tablosu",level:"Alt kabuk",stateCount:"Durumlar",electronCount:"Elektronlar",
 farNote:"Tüm değerler N ile çarpılır. 3p: 6N durum, 2N elektron. Henüz kristal bant aralığı oluşmuş sayılmaz.",
 classification:"Metal · yarıiletken · yalıtkan",classificationNames:["Metal","Yarıiletken","Yalıtkan"],
 classificationNotes:["Kısmen dolu veya örtüşen bantlar","Tam alt bant ve küçük yasak aralık","Tam alt bant ve geniş yasak aralık"],
 classificationNote:"İdeal bant doluluk şemasıdır; sıcaklık, katkılama ve kusurlar ölçülen iletkenliği etkiler.",
 coupled:"Üç bağlı osilatör: bir frekans üç moda ayrılır",spring:"k",couplingSpring:"kᶜ",
 modes:["Birlikte","Orta kütle durur","Orta kütle ters"],
 coupledNote:"Üç aynı m kütlesi, dikey k ve komşular arasında kᶜ yayları: ω₀=√(k/m), ω₁=√((k+kᶜ)/m), ω₂=√((k+3kᶜ)/m). Bu bir mekanik analojidir, elektron bant hesabı değildir.",
 "coupling-curves":"N=3 ve N=20: kuplaj frekans aralığını genişletir",
 couplingAxis:"Kuplaj kᶜ/k",freqAxis:"ω/ω₀",couplingNote:"Serbest uçlu N kütle için ωⱼ/ω₀=√[1+2(kᶜ/k)(1−cos(jπ/N))]. N, mod sayısını artırır; aynı kuplajda aralığı N ile çarpmaz.",
 transitions:"Dört olay: üretim, birleşme, kinetik enerji, kristalden çıkış",
 transitionNames:["(a) Üretim","(b) Rekombinasyon","(c) Kinetik enerji","(d) Kristalden çıkış"],
 signNote:"Elektron enerjisi yukarı; holün enerjisi elektron enerji ekseninde aşağı doğru artar.",
 transitionsNote:"Eᶜ→vakum χ; Eᵛ→vakum χ+Eᵍ gerektirir. Bant kenarı diyagramı geçiş olasılığı veya yüzey bariyerinin tamamını vermez.",
 dos:"N(E): bantta durumlar enerjiye nasıl dağılır?",valenceBottom:"Eᴮ — valans altı",conductionTop:"Eᵀ — iletim üstü",dosTotal:"≈2×10²³ durum/cm³",
 dosNote:"N(E) birim enerji ve hacimdeki durumları verir; valans boyunca integral ≈2×10²³ cm⁻³. Doluluk ayrıca f(E,T) ile hesaplanır.",
 valenceWidth:"Valans bandı genişliği",freeValence:"Valanstan vakuma",chiMetric:"Elektron ilgisi"
 },
 en:{
 far:"N atoms, still far apart: states and electrons",level:"Subshell",stateCount:"States",electronCount:"Electrons",
 farNote:"All entries scale by N. The isolated 3p level has 6N states but only 2N electrons; a crystal gap has not yet been demonstrated.",
 classification:"Metal · semiconductor · insulator",classificationNames:["Metal","Semiconductor","Insulator"],
 classificationNotes:["Partly filled or overlapping bands","Full lower band and small gap","Full lower band and large gap"],
 classificationNote:"An idealized band occupation classification; temperature, doping and defects affect measured conduction.",
 coupled:"Three coupled oscillators: one frequency becomes three modes",spring:"k",couplingSpring:"kᶜ",
 modes:["In unison","Middle mass stationary","Middle mass opposite"],
 coupledNote:"Three identical masses m with grounding springs k and nearest-neighbor coupling kᶜ: ω₀=√(k/m), ω₁=√((k+kᶜ)/m), ω₂=√((k+3kᶜ)/m). This is a mechanical analogy, not an electronic band calculation.",
 "coupling-curves":"N=3 and N=20: coupling increases the frequency spread",
 couplingAxis:"Coupling kᶜ/k",freqAxis:"ω/ω₀",couplingNote:"For a free-end chain, ωⱼ/ω₀=√[1+2(kᶜ/k)(1−cos(jπ/N))]. More N increases mode count, not the spread by a factor of N at fixed coupling.",
 transitions:"Four processes: generation, recombination, kinetic energy and escape",
 transitionNames:["(a) Generation","(b) Recombination","(c) Kinetic energy","(d) Escape to vacuum"],
 signNote:"Electron energy increases upward; hole energy increases downward on the electron-energy axis.",
 transitionsNote:"From Eᶜ to vacuum needs χ; from Eᵛ to vacuum needs χ+Eᵍ. These edge diagrams do not predict transition rates or all surface barriers.",
 dos:"N(E): how states are distributed across a band",valenceBottom:"Eᴮ — valence bottom",conductionTop:"Eᵀ — conduction top",dosTotal:"≈2×10²³ states/cm³",
 dosNote:"N(E) counts states per unit energy and volume; its integral over valence ≈2×10²³ cm⁻³. Occupation requires f(E,T).",
 valenceWidth:"Valence-band width",freeValence:"Valence top to vacuum",chiMetric:"Electron affinity"
 }
};
for(const language of ["tr","en"])Object.assign(labels[language],lecture04Extensions[language]);

function render(kind,lang="tr"){
 const d=labels[lang==="en"?"en":"tr"];
 const renders={why:reason,principles,atom:atomic,splitting,bands,diagram,scaled,bridge};
 return renders[kind]?renders[kind](d):"";
}
window.BandTheory04Visuals={render};
})();