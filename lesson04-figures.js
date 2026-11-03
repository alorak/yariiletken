/* Band theory lecture 04: original SVG teaching diagrams, matching the
 * supplied isolated-atom, N-atom, and conventional band-diagram schematics.
 * Counts include electron spin; graphics are not DFT calculations.
 */
(() => {
"use strict";
const esc=v=>String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const c={
 tr:{
 why:{title:"Neden yalnız bağ modeliyle hesap yapamayız?",rows:[
 ["İzinli enerjiler","Bağ resmi tek tek elektronik enerjileri vermez."],
 ["Durum sayısı","Birim enerjide kaç kuantum durumu bulunduğunu hesaplamaz."],
 ["Doluluk","Sıcaklıkta dolu/boş kalma oranını sayısal belirlemez."]],
 foot:"Bağ modeli bir sezgi; nicel taşıyıcı hesabı için bant yapısı, g(E) ve f(E) gerekir."},
 principles:{title:"Üç ayrı soru, tek fiziksel hesap",rows:[
 ["1 · İzinli durumlar","Elektron hangi E enerjilerinde bulunabilir?","Eₙ, E(k)"],
 ["2 · Durum yoğunluğu","E ile E+dE arasında hacim başına kaç durum var?","g(E) dE"],
 ["3 · Doluluk","Bu durumun elektronla dolu olma olasılığı kaç?","f(E,T)"]],
 foot:"Elektron sayısı = izinli durumların ağırlıklı toplamı. Hol için [1−f(E)] kullanılır."},
 atom:{title:"Yalıtılmış silisyum atomunda spin dâhil kuantum durumları",occupied:"dolu durum (×)",empty:"boş durum",states:"durum",occupiedCount:"dolu",energy:"Elektron enerjisi ↑",notes:"3p: 6 durumdan 2'si dolu. Daireler spin durumlarını temsil eder; çizimdeki enerji farkları ölçekli değildir."},
 split:{title:"N atom yaklaşınca seviyelerin yayılıp bantlaşması",energy:"Elektron enerjisi",sep:"Atomlar arası uzaklık →",crystal:"Si denge uzaklığı",upper:"İletim: 4N durum, 0 K'de boş",lower:"Valans: 4N durum, 0 K'de dolu",merged:"3s + 3p → 8N durum / 4N e⁻",core:"İç 1s, 2s, 2p: dar bant",note:"Şema: sağda birbirinden uzak atomların ayrık seviyeleri, solda yaklaşan atomların bantları. 0 K doluluğu ideal öz Si içindir; hesaplanmış E(k) veya atomik uzaklık grafiği değildir."},
 bands:{title:"İzinli bantlardan standart enerji diyagramına",energy:"Elektron enerjisi",vacuum:"Vakum seviyesi",cb:"İletim bandı",vb:"Valans bandı",gap:"Yasak aralık",electronAffinity:"Elektron ilgisi",core:"Derin çekirdek seviyeleri",left:"İzinli enerjiler",right:"Geleneksel diyagram",note:"Bu şema ölçekli değildir. E₀ vakum seviyesidir, χ = E₀ − Eᶜ ve E₉ = Eᶜ − Eᵛ birbirinden farklıdır."},
 scale:{title:"Silisyum bantları — enerji ekseni ölçekli (300 K, örnek değerler)",vacuum:"Vakum",conduction:"İletim",valence:"Valans",gap:"Bant aralığı",affinity:"Elektron ilgisi",note:"Vakum referansı E₀=0 eV; Eᶜ=−4,05 eV, Eᵛ=−5,17 eV. Düşey mesafeler gerçek eV oranında çizildi. χ yüzeye bağlıdır; tek bir Si yüzeyi için mutlak garanti değildir. Bu şemada bant genişlikleri değil, bant kenarları ölçeklidir."},
 "bond-band":{title:"Aynı elektron–hol olayı, iki açıklama",bond:"Bağ modeli · yerel durum",band:"Bant modeli · elektronik durum",hole:"Hol (+)",electron:"Elektron (−)",energy:"Enerji ↑",note:"N atom → yaklaşık 2N bağ × 2 e⁻ = 4N valans elektronu. Uyarılma valans boşluğu ile iletim elektronunu birlikte oluşturur. Bant aralığı, tek bir Si–Si kimyasal bağ kopma enerjisi değildir."}
 },
 en:{
 why:{title:"Why a bond picture alone cannot calculate carrier densities",rows:[
 ["Allowed energies","The local bond cartoon does not determine electronic band energies."],
 ["State count","It cannot determine how many states exist per unit energy."],
 ["Occupancy","It does not calculate thermal occupation probabilities."]],
 foot:"The bond model provides intuition; quantitative carrier counts need bands, g(E) and f(E)."},
 principles:{title:"Three distinct questions in a quantitative calculation",rows:[
 ["1 · Allowed states","At which electron energies are states available?","Eₙ, E(k)"],
 ["2 · Density of states","How many states per volume lie between E and E+dE?","g(E) dE"],
 ["3 · Occupancy","What fraction of states is occupied by electrons?","f(E,T)"]],
 foot:"The electron count sums allowed states weighted by occupancy. Holes use [1−f(E)]."},
 atom:{title:"Spin-resolved states of one isolated silicon atom",occupied:"occupied state (×)",empty:"empty state",states:"states",occupiedCount:"occupied",energy:"Electron energy ↑",notes:"3p: 2 of 6 states occupied. Circles denote individual spin states; energy spacings are not to scale."},
 split:{title:"From separated N atoms to the band structure of a crystal",energy:"Electron energy",sep:"Interatomic separation →",crystal:"Si crystal spacing",upper:"Conduction: 4N states, empty at 0 K",lower:"Valence: 4N states, full at 0 K",merged:"3s + 3p → 8N states / 4N e⁻",core:"Core 1s, 2s, 2p: narrow",note:"Schematic: widely separated atomic levels to the right, broadened bands to the left. 0-K occupancy assumes ideal intrinsic Si; this is not a numerical E(k) or atomic-spacing calculation."},
 bands:{title:"From allowed energies to the conventional band diagram",energy:"Electron energy",vacuum:"Vacuum level",cb:"Conduction band",vb:"Valence band",gap:"Forbidden gap",electronAffinity:"Electron affinity",core:"Deep core levels",left:"Allowed energies",right:"Conventional diagram",note:"Not to scale. E₀ is the vacuum reference; χ=E₀−Eᶜ and E₉=Eᶜ−Eᵛ denote two different separations."},
 scale:{title:"Silicon band edges on a proportional electron-energy scale (300 K)",vacuum:"Vacuum",conduction:"Conduction",valence:"Valence",gap:"Band gap",affinity:"Electron affinity",note:"Vacuum reference E₀=0 eV; Eᶜ=−4.05 eV, Eᵛ=−5.17 eV. Vertical intervals are proportional to real energy in eV. χ depends on the surface and is not a universal constant for every Si termination. Only band edges, not entire bandwidths, are drawn to scale."},
 "bond-band":{title:"One electron–hole process described at two levels",bond:"Bond view · local picture",band:"Band view · quantum states",hole:"Hole (+)",electron:"Electron (−)",energy:"Energy ↑",note:"N atoms → about 2N bonds × 2 e⁻ = 4N valence electrons. Excitation yields one conduction electron and a valence vacancy. The band gap is not the chemical dissociation energy of a single Si–Si bond."}
 }
};
const text=(x,y,v,cls="b04-text",anchor="start")=>'<text x="'+x+'" y="'+y+'" class="'+cls+'" text-anchor="'+anchor+'">'+esc(v)+'</text>';
const line=(x1,y1,x2,y2,cls="b04-line")=>'<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" class="'+cls+'"/>';
const svg=(body,description,viewBox="0 0 800 420")=>'<svg viewBox="'+viewBox+'" role="img" aria-label="'+esc(description)+'">'+
 '<title>'+esc(description)+'</title>'+body+'</svg>';
const wrap=(caption,inside,note)=>'<figure class="lesson-figure band04-figure"><figcaption>'+esc(caption)+'</figcaption>'+
 inside+(note?'<p class="lesson-figure-note">'+esc(note)+'</p>':"")+'</figure>';
function cards(rows) {
 return '<div class="band04-principles">'+rows.map((r,i)=>'<article><b>'+esc(r[0])+'</b><p>'+esc(r[1])+'</p>'+
 (r[2]?'<code>'+esc(r[2])+'</code>':"")+'</article>').join("")+'</div>';
}
function atom(d){
 const groups=[{name:"3p",y:80,n:6,occ:2},{name:"3s",y:146,n:2,occ:2},
 {name:"2p",y:237,n:6,occ:6},{name:"2s",y:281,n:2,occ:2},{name:"1s",y:356,n:2,occ:2}];
 let body=line(110,375,110,35,"b04-axis")+text(27,24,d.energy,"b04-label");
 body+='<path d="M104 46 L110 35 L116 46" class="b04-axis"/>';
 for(const g of groups){
   body+=line(152,g.y,478,g.y);
   const width=g.n===6?24:24,base=333;
   for(let j=0;j<g.n;j++){
     const x=base+j*width;
     body+='<circle cx="'+x+'" cy="'+g.y+'" r="10" class="b04-state"/>';
     if(j<g.occ)body+=line(x-6,g.y-6,x+6,g.y+6,"b04-cross")+line(x-6,g.y+6,x+6,g.y-6,"b04-cross");
   }
   body+=text(505,g.y+6,g.name,"b04-orbital")+text(569,g.y+5,g.n+" "+d.states+" · "+g.occ+" "+d.occupiedCount,"b04-small");
 }
 body+='<circle cx="224" cy="406" r="9" class="b04-state"/>'+line(219,401,229,411,"b04-cross")+line(219,411,229,401,"b04-cross")+
 text(239,411,d.occupied,"b04-small")+'<circle cx="493" cy="406" r="9" class="b04-state"/>'+
 text(508,411,d.empty,"b04-small");
 return wrap(d.title,svg(body,d.title,"0 0 800 450"),d.notes);
}
function split(d){
 const X=138,Y=45,base=590;
 let body=line(X,380,X,Y,"b04-axis")+line(X,380,735,380,"b04-axis")+
 text(28,25,d.energy,"b04-small")+text(605,405,d.sep,"b04-small");
 body+='<path d="M139 96 C250 119 355 168 493 182 L493 199 C354 203 249 156 139 170 Z" class="b04-upper"/>'+
 '<path d="M139 228 C253 249 356 221 493 199 L493 218 C351 258 251 297 139 298 Z" class="b04-lower"/>';
 // Crystal spacing indicator: on the strong coupling side, left of isolated levels.
 body+=line(208,40,208,379,"b04-dash")+text(219,365,d.crystal,"b04-small");
 body+=line(500,182,691,182)+line(500,219,691,219);
 const core=[{name:"2p",y:303,n:6},{name:"2s",y:327,n:2},{name:"1s",y:357,n:2}];
 for(const a of core){
   body+=line(139,a.y,692,a.y);
   for(let i=0;i<a.n;i++){
     const xx=566+i*15;body+='<circle cx="'+xx+'" cy="'+a.y+'" r="5" class="b04-tiny-state"/>';
     body+=line(xx-3,a.y-3,xx+3,a.y+3,"b04-thin");
   }
   body+=text(706,a.y+4,a.name,"b04-orbital");
 }
 body+=text(709,176,"3p","b04-orbital")+text(709,218,"3s","b04-orbital");
 body+=text(150,79,d.upper,"b04-small")+text(151,318,d.lower,"b04-small")+
 text(468,135,d.merged,"b04-small","middle");
 return wrap(d.title,svg(body,d.title,"0 0 830 430"),d.note);
}
function bands(d){
 const bandsSvg='<rect x="58" y="106" width="206" height="50" rx="4" class="b04-upper"/>'+
 '<rect x="58" y="218" width="206" height="63" rx="4" class="b04-lower"/>'+
 text(66,131,d.cb,"b04-small")+text(66,248,d.vb,"b04-small")+
 text(66,194,d.gap+" E₉","b04-label")+text(50,71,d.left,"b04-label")+
 line(52,308,265,308)+text(67,326,d.core+" 1s, 2s, 2p","b04-small");
 const right='<g transform="translate(392 0)">'+
 text(0,71,d.right,"b04-label")+line(25,100,307,100,"b04-line")+
 text(319,105,"E₀ — "+d.vacuum,"b04-small")+line(25,188,307,188)+
 text(319,193,"Eᶜ","b04-orbital")+line(25,252,307,252)+
 text(319,257,"Eᵛ","b04-orbital")+
 '<rect x="25" y="188" width="282" height="64" fill="none" stroke="var(--stroke)" stroke-width="1.5"/>'+
 line(50,101,50,188,"b04-arrow")+line(45,109,50,101,"b04-arrow")+line(55,109,50,101,"b04-arrow")+
 text(65,152,"χ — "+d.electronAffinity,"b04-small")+
 line(162,189,162,251,"b04-arrow")+text(177,223,"E₉ — "+d.gap,"b04-small")+'</g>';
 return wrap(d.title,svg(bandsSvg+right,d.title,"0 0 850 355"),d.note);
}
function scale(d){
 // Electron energy 0 to -5.17 eV, 1 eV = 66 px, so distances are proportional.
 const y=e=>60+e*66, ec=y(4.05), ev=y(5.17), top=y(0);
 let body=line(110,38,110,423,"b04-axis")+text(35,25,"E / eV","b04-label");
 for(let k=0;k<=5;k++){
  const yy=y(k);body+=line(105,yy,113,yy)+text(93,yy+5,(k===0?"0":"−"+k),"b04-small","end");
 }
 const w=280;
 body+=line(165,top,165+w,top,"b04-line")+text(462,top+5,"E₀ = 0 eV","b04-label")+
 line(165,ec,165+w,ec,"b04-line")+text(462,ec+5,"Eᶜ = −4.05 eV","b04-label")+
 line(165,ev,165+w,ev,"b04-line")+text(462,ev+5,"Eᵛ = −5.17 eV","b04-label");
 body+='<rect x="165" y="'+ec+'" width="'+w+'" height="'+(ev-ec)+'" class="b04-gap"/>';
 body+=line(198,top,198,ec,"b04-arrow")+text(215,(top+ec)/2,"χ = 4.05 eV · "+d.affinity,"b04-label")+
 line(307,ec,307,ev,"b04-arrow")+text(324,(ec+ev)/2-3,"E₉ = 1.12 eV","b04-label");
 body+=text(165,ec-12,d.conduction,"b04-small")+text(165,ev+18,d.valence,"b04-small");
 return wrap(d.title,svg(body,d.title,"0 0 800 480"),d.note);
}
function bondBand(d){
 let body=text(25,31,d.bond,"b04-label")+text(438,31,d.band,"b04-label");
 // local Si links with one missing electron in a bond
 const pts=[[135,112],[225,112],[135,206],[225,206]],center=[181,159];
 for(const p of pts){body+=line(center[0],center[1],p[0],p[1],"b04-bond");}
 for(const [i,p] of pts.entries()){body+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="20" class="b04-atom"/>'+text(p[0],p[1]+5,"Si","b04-si","middle");}
 body+='<circle cx="181" cy="159" r="17" class="b04-hole"/>'+text(181,165,"+","b04-symbol","middle");
 body+=text(185,256,d.hole,"b04-small","middle")+
 '<path d="M255 155 H384 m-13 -9 13 9 -13 9" class="b04-arrow"/>';
 // conduction/valence transition
 body+='<rect x="432" y="73" width="260" height="50" rx="4" class="b04-upper"/>'+
 '<rect x="432" y="195" width="260" height="50" rx="4" class="b04-lower"/>'+
 text(448,93,"Eᶜ","b04-orbital")+text(448,216,"Eᵛ","b04-orbital")+
 '<circle cx="618" cy="101" r="16" class="b04-electron"/>'+text(618,107,"−","b04-symbol","middle")+
 '<circle cx="618" cy="222" r="16" class="b04-hole"/>'+text(618,228,"+","b04-symbol","middle")+
 line(700,179,700,137,"b04-arrow")+text(711,156,"E₉","b04-label");
 body+=text(618,278,d.electron+" + "+d.hole,"b04-small","middle");
 return wrap(d.title,svg(body,d.title,"0 0 800 320"),d.note);
}
function render(kind,language="tr"){
 const d=c[language==="en"?"en":"tr"]?.[kind];
 if(!d)return "";
 if(kind==="why"||kind==="principles")
  return wrap(d.title,cards(d.rows),d.foot);
 if(kind==="atom")return atom(d);
 if(kind==="split")return split(d);
 if(kind==="bands")return bands(d);
 if(kind==="scale")return scale(d);
 if(kind==="bond-band")return bondBand(d);
 return "";
}
window.Lesson04Figures={render};
})();