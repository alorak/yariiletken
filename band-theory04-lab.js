/* Lesson 04 bilingual UI. No dependencies or external requests. */
(() => {
"use strict";
const M=window.BandTheory04Model;
const e=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const format=(v,n=2)=>Number(v).toLocaleString("en-US",{minimumFractionDigits:n,maximumFractionDigits:n});
const L={
 tr:{
  charts:"BANT TEORİSİ · GRAFİKLER",sims:"BANT TEORİSİ · SİMÜLASYONLAR",
  related:"İlgili anlatım",model:"Modelin varsayımları ve sınırları",
  n:"Atom sayısı N",r:"Kuplaj kᶜ/k",W:"Valans bant genişliği W",nAtom:"Atom yoğunluğu (×10²² cm⁻³)",
  t:"Atlama enerjisi t",a:"Örgü aralığı a",ka:"Seçili ka",chi:"Elektron ilgisi χ",Eg:"Bant aralığı Eᵍ",
  pairs:"Elektron–hol çifti",energy:"Verilen enerji ΔE",mode:"Olay türü",
  G5:"N atom yaklaşırken enerji düzeylerinin ayrışması",G5d:"N eşdeğer atomik durumun, kuplaj t arttıkça N farklı izinli enerjiye nasıl ayrıldığını incele.",
  limit5:"N adet tek-orbitali açık uçlu 1B sıkı-bağ zinciri: εⱼ=−2t cos(jπ/(N+1)). t=0'da N dejenere durum, t>0'da N ayrık seviye vardır. Bu elektronik öğretim modeli, Si'nin gerçek 3s/3p karışımı veya 3B bant hesabı değildir.",
  S4:"Üç bağlı kütlenin normal modları",S4d:"Üç kütlenin birlikte, orta kütle sabit ve ters fazlı hareketlerini mod ve faz sürgüsüyle incele.",
  modeSelect:"Normal mod",phase:"Salınım fazı",modeNames:["Birlikte","Orta kütle durur","Orta kütle ters fazda"],
  limitS4:"Üç m kütlesi yere k yaylarıyla, komşularına kᶜ yaylarıyla bağlıdır. Faz görseli normal modların özvektörlerini gösterir. ω₀=√(k/m), ω₁=√((k+kᶜ)/m), ω₂=√((k+3kᶜ)/m). Gerçek örgü fononları veya bant yapısı hesaplanmaz.",
  G1:"Atom sayısı ve izinli spin durumları",G1d:"1s–3p durumları ile 4N değerlik elektronunun N ile nasıl ölçeklendiğini gör.",
  G2:"Üç ve yirmi bağlı osilatörün frekansları",G2d:"Kuplaj, frekans bandının genişliğini; atom sayısı seviyelerin sıklığını değiştirir.",
  G3:"Valans bandında N(E) ve toplam durum sayısı",G3d:"Bant genişliği değişirken DOS eğrisinin alanını ve yüksekliğini karşılaştır.",
  G4:"E(k), bant eğriliği ve etkin kütle",G4d:"Basit 1B sıkı-bağ modeli üzerinden eğriliğin etkin kütleye etkisini incele.",
  S1:"N atom — dolu/boş durum simülasyonu",S1d:"0 K'nin 4N dolu/4N boş tablosunda dışarıdan elektron–hol çiftleri oluştur.",
  S2:"Silisyum enerji seviyelerinin ölçekli modeli",S2d:"χ, Eᵍ ve W'yi değiştirerek vakuma göre gerçek enerji oranlarını incele.",
  S3:"Üretim, birleşme, hareket ve vakuma çıkış",S3d:"Elektron–hol oluştur; ardından farklı enerji koşullarında geçişleri uygula.",
  limit1:"Tam atomik sayım: 1s/2s 2N, 2p/3p 6N, 3s 2N spin durumu; değerlik toplamı 8N durum ve 4N e⁻. Bu sayım tek başına gerçek Si bant yapısı değildir.",
  limit2:"Serbest uçlu, en yakın komşu bağlı kütle–yay analojisi: ωⱼ/ω₀=√[1+2(kᶜ/k)(1−cos(jπ/N))]. Fonon benzetmesi elektronik bant hesabı değildir.",
  limit3:"N(E), alanı tam 4n_atom olan 6u(1−u) öğretici dağılımıdır; deneysel Si DOS'u değildir. ≈12 eV valans genişliği yaklaşık seçilmiştir. Gerçek Si DOS'unun şekli hesaplanmamıştır.",
  limit4:"E(k)=−2t cos(ka), m*=ℏ²/(2ta²) sadece 1B komşu-atlama, bant kenarı yaklaşımıdır. Si'nin gerçek dolaylı E(k) yapısını veya anisotropik kütlesini vermez.",
  limitS1:"İdeal 0 K öz Si'de 4N alt durum dolu, 4N üst durum boştur. Sürgüyle oluşturulan çiftler dış uyarılmayı temsil eder; termal denge yoğunluğu değildir.",
  limitS2:"E₀=0; Eᶜ=−χ; Eᵛ=−(χ+Eᵍ); Eᴮ=−(χ+Eᵍ+W). Enerji aralıkları tek doğrusal düşey ölçekle çizilir. χ yüzeye, Eᵍ sıcaklığa bağlıdır; W yaklaşık öğretici değerdir.",
  limitS3:"Bu model yalnız enerji eşiklerini ve mevcut elektron/hol durumunu denetler. Si dolaylı bant aralıklıdır; optik geçişte fonon ve momentum koşulları gerekebilir. Gerçek cihazdaki emisyon, soğurma, saçılma ve rekombinasyon olasılıkları hesaplanmaz.",
  upper:"İletim bandı · 4N durum",lower:"Valans bandı · 4N durum",total:"Toplam izinli durum",electrons:"Değerlik elektronu",holes:"Hol",pairsLabel:"Çift",
  apply:"Olayı uygula",reset:"Sıfırla",notApplied:"Uygulanmadı",applied:"Uygulandı",allowed:"Enerji ve durum koşulu sağlanıyor.",
  denied:"Enerji eşiği veya durum koşulu sağlanmıyor.",needPair:"Önce çift oluştur.",needsReset:"Yeni bir çift için sıfırla.",
  states:["Çift yok","Elektron + hol","Elektron ayrıldı; yalnız hol"],
  events:["Çift üretimi","Yeniden birleşme","Elektron kinetik enerjisi","Hol kinetik enerjisi","İletim elektronunun vakuma çıkışı","Valans elektronunun vakuma çıkışı"],
  noExternal:"Dışarıdan enerji gerekmez",noteElectron:"Elektron enerjisi yukarı gider.",noteHole:"Holün kinetik enerjisi artarken valans elektron enerjisi ekseninde aşağı yönde ilerler.",
  threshold:"Gerekli enerji",status:"Mevcut durum"
 },
 en:{
  charts:"BAND THEORY · GRAPHS",sims:"BAND THEORY · SIMULATIONS",
  related:"Related lesson",model:"Model assumptions and limitations",
  n:"Number of atoms N",r:"Coupling kᶜ/k",W:"Valence-band width W",nAtom:"Atomic density (×10²² cm⁻³)",
  t:"Hopping energy t",a:"Lattice spacing a",ka:"Selected ka",chi:"Electron affinity χ",Eg:"Band gap Eᵍ",
  pairs:"Electron–hole pairs",energy:"Supplied energy ΔE",mode:"Process",
  G5:"How N atomic levels split as atoms interact",G5d:"See N degenerate atomic states separate into N allowed energies as electronic coupling t increases.",
  limit5:"Open-end nearest-neighbor 1D chain with one orbital per site: εⱼ=−2t cos(jπ/(N+1)). At t=0, N states share one energy; for t>0 they split into N levels. This teaching model is not the real 3s/3p hybridization or 3D silicon band structure.",
  S4:"Normal modes of three coupled masses",S4d:"Change the mode and phase to inspect in-phase, stationary-center and out-of-phase patterns.",
  modeSelect:"Normal mode",phase:"Oscillation phase",modeNames:["In phase","Middle mass stationary","Middle mass opposite"],
  limitS4:"Three equal masses m have grounding springs k and neighbor coupling springs kᶜ. The plot shows mode eigenvectors: ω₀=√(k/m), ω₁=√((k+kᶜ)/m), ω₂=√((k+3kᶜ)/m). This is a mechanical analogy, not a measured silicon phonon or band structure.",
  G1:"Atom count and available spin states",G1d:"Study how 1s–3p state counts and 4N valence electrons scale with N.",
  G2:"Frequency modes of three and twenty coupled oscillators",G2d:"Coupling controls the frequency spread; system size controls mode density.",
  G3:"Valence N(E) and its integrated state count",G3d:"Change band width and compare the DOS peak to its conserved integrated area.",
  G4:"E(k), band curvature and effective mass",G4d:"Explore curvature and effective mass in a simple one-dimensional tight-binding model.",
  S1:"N-atom filled/empty-state simulation",S1d:"Create externally excited electron–hole pairs among the ideal 0 K 4N/4N states.",
  S2:"Scaled silicon energy levels",S2d:"Vary χ, Eᵍ and W to separate different vacuum-referenced energy intervals.",
  S3:"Generation, recombination, motion and escape",S3d:"Create an electron–hole pair and apply events subject to energy and state conditions.",
  limit1:"Exact atomic accounting: s subshells 2N, p subshells 6N; 8N valence spin states with 4N valence electrons. This alone is not a computed Si band structure.",
  limit2:"Open-end nearest-neighbor spring chain: ωⱼ/ω₀=√[1+2(kᶜ/k)(1−cos(jπ/N))]. Oscillator modes are a mechanical analogy, not electronic bands.",
  limit3:"N(E) is an illustrative 6u(1−u) curve normalized to integrated area 4n_atom; it is not measured or calculated Si DOS. ≈12 eV is an approximate teaching width.",
  limit4:"E(k)=−2t cos(ka) and m*=ℏ²/(2ta²) describe a 1D nearest-neighbor model near the parabolic edge, not real anisotropic, indirect Si band structure.",
  limitS1:"At ideal 0 K, the lower 4N spin states are filled and upper 4N are empty. Created pairs represent external excitation, not thermal-equilibrium concentration.",
  limitS2:"E₀=0, Eᶜ=−χ, Eᵛ=−(χ+Eᵍ), Eᴮ=−(χ+Eᵍ+W). All intervals use one linear energy scale. χ depends on surface and Eᵍ on temperature; W is approximate.",
  limitS3:"Only energy thresholds and carrier-state requirements are modeled. Indirect Si transitions can require phonon/momentum assistance. Real optical rates, scattering and emission probabilities are not simulated.",
  upper:"Conduction · 4N states",lower:"Valence · 4N states",total:"Total available states",electrons:"Valence electrons",holes:"Holes",pairsLabel:"Pairs",
  apply:"Apply event",reset:"Reset",notApplied:"Not applied",applied:"Applied",allowed:"Energy and state conditions satisfied.",
  denied:"Energy threshold or carrier state condition not satisfied.",needPair:"Generate a pair first.",needsReset:"Reset before creating another pair.",
  states:["No pair","Electron + hole","Electron escaped; hole remains"],
  events:["Pair generation","Recombination","Electron kinetic energy","Hole kinetic energy","Conduction electron escape","Valence electron escape"],
  noExternal:"No supplied energy required",noteElectron:"Electron energy increases upward.",noteHole:"Hole kinetic energy increases downward on the electron-energy axis.",
  threshold:"Required energy",status:"Current state"
 }
};
const esc=e,escH=e;
const stat=(name,value)=>'<div class="b04lab-stat"><span>'+esc(name)+'</span><strong>'+esc(value)+'</strong></div>';
const specs=[
 {key:"counts",title:"G1",desc:"G1d",topic:"3–5",note:"limit1",def:{N:5},control:[["N","n",1,20,1]]},
 {key:"splitting",title:"G5",desc:"G5d",topic:"4",note:"limit5",def:{N:8,t:.5},control:[["N","n",2,20,1],["t","t",0,1.2,.05]]},
 {key:"modes",title:"G2",desc:"G2d",topic:"4",note:"limit2",def:{r:.8},control:[["r","r",0,2,.05]]},
 {key:"dos",title:"G3",desc:"G3d",topic:"6, 9",note:"limit3",def:{W:12,nAtom:5},control:[["W","W",8,16,.5],["nAtom","nAtom",4,6,.1]]},
 {key:"dispersion",title:"G4",desc:"G4d",topic:"9",note:"limit4",def:{t:.8,a:.54,ka:0},control:[["t","t",.2,1.2,.05],["a","a",.3,.6,.01],["ka","ka",-3.14,3.14,.157]]}
];
function slider(key,label,min,max,step,value){
 return '<label class="b04lab-control"><span>'+esc(label)+' <output data-output="'+key+'">'+format(value,step<1?2:0)+'</output></span>'+
 '<input type="range" data-key="'+key+'" min="'+min+'" max="'+max+'" step="'+step+
 '" value="'+value+'" aria-label="'+esc(label)+'"/></label>';
}
function assumptions(q,note){
 return '<details class="lab-assumptions"><summary>'+esc(q.model)+'</summary><p>'+esc(q[note])+'</p></details>';
}
function header(q,title,desc,i,topics){
 return '<div class="b04lab-head"><span class="b04lab-index">'+i+'</span><div><h3>'+esc(q[title])+
 '</h3><p>'+esc(q[desc])+'</p><small>'+esc(q.related)+': '+topics+'</small></div></div>';
}
function plot(config,title){
 const {xMin,xMax,yMin,yMax,curves,marker}=config,W=820,H=342,L=88,R=22,T=23,B=62,pw=W-L-R,ph=H-T-B;
 const X=x=>L+(x-xMin)/(xMax-xMin)*pw,Y=y=>T+(yMax-y)/(yMax-yMin)*ph;
 let grid="";
 for(let j=0;j<=4;j++){
  const x=xMin+(xMax-xMin)*j/4,y=yMin+(yMax-yMin)*j/4;
  grid+='<line x1="'+X(x)+'" x2="'+X(x)+'" y1="'+T+'" y2="'+(H-B)+'" class="b04lab-grid"/>'+
  '<text class="b04lab-tick" text-anchor="middle" x="'+X(x)+'" y="'+(H-B+21)+'">'+format(x,xMax<=20?1:0)+'</text>'+
  '<line x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(y)+'" y2="'+Y(y)+'" class="b04lab-grid"/>'+
  '<text class="b04lab-tick" text-anchor="end" x="'+(L-10)+'" y="'+(Y(y)+4)+'">'+format(y,1)+'</text>';
 }
 const paths=curves.map((c,i)=>{
  let d="";
  for(let j=0;j<=100;j++){
   const x=xMin+j*(xMax-xMin)/100,y=c.f(x);
   if(!Number.isFinite(y))continue;
   d+=(d?"L":"M")+X(x).toFixed(2)+" "+Y(Math.max(yMin,Math.min(yMax,y))).toFixed(2)+" ";
  }
  return '<path d="'+d+'" class="b04lab-line '+(c.ghost?"ghost":"line-"+i%5)+'"/>';
 }).join("");
 return '<svg class="b04lab-plot" role="img" aria-label="'+esc(title)+'" viewBox="0 0 '+W+' '+H+
 '"><title>'+esc(title)+'</title>'+grid+'<path d="M'+L+' '+T+'V'+(H-B)+'H'+(W-R)+'" class="b04lab-axis"/>'+
 paths+'<line x1="'+X(marker)+'" x2="'+X(marker)+'" y1="'+T+'" y2="'+(H-B)+'" class="b04lab-marker"/>'+
 '<text class="b04lab-axis-label" text-anchor="middle" x="'+(L+pw/2)+'" y="'+(H-9)+'">'+esc(config.xLabel)+'</text>'+
 '<text class="b04lab-axis-label" text-anchor="middle" x="22" y="'+(T+ph/2)+
 '" transform="rotate(-90 22 '+(T+ph/2)+')">'+esc(config.yLabel)+'</text></svg>';
}
function graphCard(meta,lang,i){
 const q=L[lang],p={...meta.def},node=document.createElement("article");node.className="lab-card b04lab-card";
 node.innerHTML=header(q,meta.title,meta.desc,i,meta.topic)+
 '<div class="b04lab-controls">'+meta.control.map(([key,name,min,max,step])=>slider(key,q[name],min,max,step,p[key])).join("")+'</div>'+
 '<div data-plot></div><div class="b04lab-legend" data-legend></div><div class="b04lab-stats" data-stats aria-live="polite"></div>'+
 assumptions(q,meta.note);
 const update=()=>{
  const c=M.graph(meta.key,p,lang);
  node.querySelector("[data-plot]").innerHTML=plot(c,q[meta.title]);
  node.querySelector("[data-legend]").innerHTML=meta.key==="splitting"
   ?"<span>N="+p.N+" · "+(lang==="en"?"allowed levels":"izinli seviye")+"</span>"
   :meta.key==="modes"
   ?'<span class="ghost">N=20 (20)</span><span>N=3 (3)</span>'
   :c.curves.map((v,i)=>'<span class="line-'+i%5+'">'+esc(v.label)+'</span>').join("");
  node.querySelector("[data-stats]").innerHTML=c.info.map(([a,b])=>stat(a,b)).join("");
 };
 node.querySelectorAll("input[data-key]").forEach(input=>input.addEventListener("input",()=>{
  const key=input.dataset.key;p[key]=Number(input.value);
  node.querySelector('[data-output="'+key+'"]').textContent=format(p[key],Number(input.step)<1?2:0);
  update();
 }));update();return node;
}
function simOne(lang,i){
 const q=L[lang],p={N:4,pairs:0},node=document.createElement("article");node.className="lab-card b04lab-card";
 node.innerHTML=header(q,"S1","S1d",i,"3–5")+
 '<div class="b04lab-controls">'+slider("N",q.n,1,12,1,4)+slider("pairs",q.pairs,0,12,1,0)+'</div>'+
 '<div data-visual></div><div class="b04lab-stats" data-stats aria-live="polite"></div>'+assumptions(q,"limitS1");
 const spots=(count,filled,isValence)=>'<div class="b04lab-dotgrid">'+Array.from({length:count},(_,j)=>
  '<span aria-hidden="true" class="b04lab-dot '+(isValence?(j<filled?"full":"hole"):(j<filled?"electron":"empty"))+'">'+
  (isValence?(j<filled?"•":"+"):(j<filled?"−":""))+'</span>').join("")+'</div>';
 const update=()=>{
  const max=4*p.N;p.pairs=Math.min(p.pairs,p.N);
  const pairs=node.querySelector('[data-key="pairs"]');pairs.max=p.N;pairs.value=p.pairs;
  node.querySelector('[data-output="pairs"]').textContent=p.pairs;
  node.querySelector("[data-visual]").innerHTML='<div class="b04lab-bandgrid"><div><strong>'+esc(q.upper)+
   '</strong>'+spots(max,p.pairs,false)+'</div><div><strong>'+esc(q.lower)+
   '</strong>'+spots(max,max-p.pairs,true)+'</div></div>';
  node.querySelector("[data-stats]").innerHTML=stat(q.total,8*p.N)+stat(q.electrons,4*p.N)+
   stat(q.pairsLabel,p.pairs)+stat(q.holes,p.pairs);
 };
 node.querySelectorAll("input[data-key]").forEach(input=>input.addEventListener("input",()=>{
  p[input.dataset.key]=Number(input.value);node.querySelector('[data-output="'+input.dataset.key+'"]').textContent=input.value;update();
 }));update();return node;
}
function simTwo(lang,i){
 const q=L[lang],p={chi:4.05,Eg:1.12,W:12},node=document.createElement("article");node.className="lab-card b04lab-card";
 node.innerHTML=header(q,"S2","S2d",i,"6–7")+
 '<div class="b04lab-controls">'+slider("chi",q.chi,3.5,4.6,.05,p.chi)+
 slider("Eg",q.Eg,.8,1.5,.02,p.Eg)+slider("W",q.W,8,16,.5,p.W)+'</div>'+
 '<div data-visual></div><div class="b04lab-stats" data-stats aria-live="polite"></div>'+assumptions(q,"limitS2");
 const update=()=>{
  const E=M.edges(p.chi,p.Eg,p.W),y=v=>44-v*(400/(p.chi+p.Eg+p.W));
  const labels=[["E₀",E.E0],["Eᶜ",E.Ec],["Eᵛ",E.Ev],["Eᴮ",E.Eb]];
  let svg='<svg role="img" class="b04lab-energy-svg" viewBox="0 0 820 505" aria-label="'+esc(q.S2)+'"><title>'+
  esc(q.S2)+'</title><line x1="110" y1="22" x2="110" y2="463" class="b04lab-axis"/>'+
  '<rect x="165" y="'+y(E.Ev)+'" width="380" height="'+(y(E.Eb)-y(E.Ev))+'" class="b04lab-vb"/>'+
  '<rect x="165" y="'+y(E.Ec)+'" width="380" height="'+(y(E.Ev)-y(E.Ec))+'" class="b04lab-eg"/>'+
  labels.map(([name,v])=>'<line x1="152" x2="564" y1="'+y(v)+'" y2="'+y(v)+'" class="b04lab-level"/>'+
  '<text x="577" y="'+(y(v)+5)+'" class="b04lab-axis-label">'+name+' = '+format(v,2)+' eV</text>').join("")+
  '<text x="190" y="'+((y(E.Eb)+y(E.Ev))/2)+'" class="b04lab-axis-label">W = '+format(p.W,1)+' eV</text>'+
  '<text x="190" y="'+((y(E.Ec)+y(E.E0))/2)+'" class="b04lab-axis-label">χ = '+format(p.chi,2)+' eV</text>'+
  '</svg>';
  node.querySelector("[data-visual]").innerHTML=svg;
  node.querySelector("[data-stats]").innerHTML=stat("Eᶜ",format(E.Ec,2)+" eV")+
  stat("Eᵛ",format(E.Ev,2)+" eV")+stat("Eᴮ",format(E.Eb,2)+" eV")+
  stat("E₀−Eᵛ",format(E.escapeValence,2)+" eV");
 };
 node.querySelectorAll("input[data-key]").forEach(input=>input.addEventListener("input",()=>{
  p[input.dataset.key]=Number(input.value);node.querySelector('[data-output="'+input.dataset.key+'"]').textContent=format(input.value,2);update();
 }));update();return node;
}
function simThree(lang,i){
 const q=L[lang],node=document.createElement("article");node.className="lab-card b04lab-card";
 let mode=0,energy=1.5,state="none",last=false;
 node.innerHTML=header(q,"S3","S3d",i,"7–8")+
 '<div class="b04lab-controls"><label class="b04lab-control"><span>'+esc(q.mode)+'</span>'+
 '<select data-mode aria-label="'+esc(q.mode)+'">'+q.events.map((x,i)=>'<option value="'+i+'">'+esc(x)+'</option>').join("")+'</select></label>'+
 slider("energy",q.energy,0,7,.05,energy)+'</div><div data-visual></div>'+
 '<div class="b04lab-actions"><button type="button" data-apply>'+esc(q.apply)+'</button>'+
 '<button type="button" class="secondary" data-reset>'+esc(q.reset)+'</button></div>'+
 '<div class="b04lab-stats" data-stats aria-live="polite"></div>'+assumptions(q,"limitS3");
 const draw=()=>{
  const result=M.event(mode,energy,state),pair=state==="pair";
  let svg='<svg class="b04lab-trans-svg" role="img" aria-label="'+esc(q.S3)+'" viewBox="0 0 770 280"><title>'+
   esc(q.S3)+'</title><rect x="100" y="43" width="540" height="64" class="b04lab-cb"/>'+
   '<rect x="100" y="190" width="540" height="64" class="b04lab-vb"/>'+
   '<text x="130" y="69" class="b04lab-axis-label">Eᶜ</text>'+
   '<text x="130" y="216" class="b04lab-axis-label">Eᵛ</text>'+
   '<text x="130" y="146" class="b04lab-tick">Eᵍ ≈ 1.12 eV</text>'+
   (pair?'<circle cx="530" cy="75" r="20" class="b04lab-e"/><text x="530" y="82" class="b04lab-sign" text-anchor="middle">−</text>':"")+
   (state!=="none"?'<circle cx="530" cy="222" r="20" class="b04lab-h"/><text x="530" y="229" class="b04lab-sign" text-anchor="middle">+</text>':"")+
   '<line x1="406" y1="111" x2="406" y2="183" class="b04lab-marker"/>'+
   '<text x="430" y="153" class="b04lab-tick">'+(mode===3?"h⁺ ↓":mode===1?"e⁻ ↓":"e⁻ ↑")+'</text></svg>';
  node.querySelector("[data-visual]").innerHTML=svg;
  const stateText=state==="pair"?q.states[1]:state==="hole"?q.states[2]:q.states[0];
  const reason=!result.stateOk?(mode===0||mode===5?q.needsReset:q.needPair):(result.energyOk?q.allowed:q.denied);
  node.querySelector("[data-stats]").innerHTML=stat(q.status,stateText)+
   stat(q.threshold,[1,2,3].includes(mode)?q.noExternal:format(result.threshold,2)+" eV")+
   stat(last?q.applied:q.notApplied,reason)+
   (mode===2?stat(q.energy,q.noteElectron):mode===3?stat(q.energy,q.noteHole):"");
  node.querySelector("[data-apply]").disabled=!result.allowed;
 };
 node.querySelector("[data-mode]").addEventListener("change",event=>{mode=Number(event.target.value);last=false;draw();});
 const input=node.querySelector('input[data-key="energy"]');
 input.addEventListener("input",()=>{energy=Number(input.value);last=false;node.querySelector('[data-output="energy"]').textContent=format(energy,2);draw();});
 node.querySelector("[data-apply]").addEventListener("click",()=>{
  const result=M.event(mode,energy,state);
  if(!result.allowed)return;
  state=result.next;last=true;draw();
 });
 node.querySelector("[data-reset]").addEventListener("click",()=>{
  state="none";last=false;mode=0;energy=1.5;node.querySelector("[data-mode]").value="0";input.value="1.5";
  node.querySelector('[data-output="energy"]').textContent="1.50";draw();
 });
 draw();return node;
}
function mount({container,language="tr",tabId}){
 if(!container||!["grafikler","simulasyonlar"].includes(tabId))return false;
 const lang=language==="en"?"en":"tr",q=L[lang],section=document.createElement("div");
 section.className="lab-section b04lab-section";
 section.innerHTML='<div class="lab-section-intro"><span class="eyebrow">'+esc(tabId==="grafikler"?q.charts:q.sims)+'</span></div>';
 if(tabId==="grafikler")specs.forEach((meta,i)=>section.append(graphCard(meta,lang,i+1)));
 else [simOne,simTwo,simThree].forEach((fn,i)=>section.append(fn(lang,i+1)));
 container.replaceChildren(section);return true;
}
window.BandTheory04Lab={mount};
})();
