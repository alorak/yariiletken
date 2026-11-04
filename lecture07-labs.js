/* Lecture 07 visual/numeric models. All examples use g=1 by default;
 * standard shallow-impurity factors (gD=2, gA=4) can be compared explicitly.
 * Reuses lecture05-06-labs.js numerical neutrality; no dependency/build step.
 */
(() => {
"use strict";
const m=window.Lecture0506Model;
if(!m)throw Error("Lecture07 requires Lecture0506Model");
const K=m.K, EG=m.EG, ED=m.ED, EA=m.EA;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const sci=n=>!Number.isFinite(n)?"—":n===0?"0":Math.abs(n)>=1e4||Math.abs(n)<.01?n.toExponential(2).replace(/e\+?/," × 10^"):Number(n.toPrecision(4)).toLocaleString("en-US");
const logr=n=>Math.log10(Math.max(n,1e-250));
const sample=(min,max,fn,N=84)=>Array.from({length:N+1},(_,i)=>{const x=min+(max-min)*i/N;return [x,fn(x)];});
const texts={
 tr:{
  charts:"SLAYT 07 · ETKİLEŞİMLİ GRAFİKLER",sims:"SLAYT 07 · SAYISAL SİMÜLASYONLAR",
  levels:["Katkılı bant diyagramı — E_D ve E_A","Yerel donör ve akseptör seviyeleri, iyon yükleri ve enerji farkları; ideal Si bantları."],
  dos:["Katkılı durumda DOS: bantlar ve delta seviyeleri","Sığ katkı seviyesi sivri tepe olarak gösterilir. Alan N_D veya N_A'dır; yükseklik fiziksel bir sonsuzluk iddiası değildir."],
  ionization:["Fermi konumuna göre donör iyonlaşması — g etkisi","x=(E_D−E_F)/kT değişince g=1 ve g_D=2 eğrilerini karşılaştır."],
  neutrality:["E_F için yük nötrlüğü kesişimi","Si:P, N_D=10¹⁶ cm⁻³, 300 K: n(E_F) ile p(E_F)+N_D⁺(E_F) kesişimini gösterir."],
  fermi:["Katkıya karşı E_F — 60 meV kuralı","300 K'de tam iyonlaşmış katkı varsayımıyla n ve p tiplerinde logaritmik seviye kayması."],
  temperature:["Üç rejim — n(T) ve g karşılaştırması","10¹⁵ cm⁻³ Si:P; g=1 ile g_D=2 arasında en büyük ayrım düşük T'de olur."],
  arrhenius:["Arrhenius: log n – 1000/T","Freeze-out, ekstrinsik plato ve öz bölgelerinin farklı eğimleri."],
  compensation:["Kompanzasyon: 300–700 K çoğunluk/azınlık","N_A=10¹⁶, N_D=5×10¹⁵ cm⁻³; sıcaklık arttığında termal çiftler azınlığı artırır."],
  slider:"Sıcaklık T (K)",doping:"Donör N_D (cm⁻³)",acceptor:"Akseptör N_A (cm⁻³)",
  gd:"İyonlaşma modeli",intro:"Varsayılan <strong>g=1</strong>, fiziği sade anlatmak içindir. Seçilen değer yalnız sayısal iyonlaşmayı değiştirir; yük nötrlüğü her zaman çözülür.",
  sim1:"g=1 mi g_D=2/g_A=4 mü? — aynı örnekte karşılaştır",
  sim1Desc:"Sıcaklık ve katkıları değiştir; sade referans modelini standart istatistiksel sayımla yan yana gör. Özellikle 77 K sonucu karşılaştır.",
  sim2:"Freeze-out, E_F ve kütle etkisi laboratuvarı",
  sim2Desc:"Tek donörlü Si'de sıcaklık ve katkı yoğunluğunu değiştir; fiziksel kök ve elektron/hol yoğunluklarını gözle.",
  warning:"Bu yaklaşık model yalnızca termal denge, parabolik/non-degenerate bant, izole sığ katkı ve sabit E_g=1,12 eV için geçerlidir. Ağır katkıda Fermi–Dirac ve bant daralması hesaba katılmalıdır.",
  ion:"Donör iyonlaşması",major:"n / p",sum:"Toplam iyonlar",shift:"E_F−E_i",bandDistance:"E_c−E_F",nu:"Yük nötrlüğü kalanı",
  freeze:"Freeze-out x",note:"Kavramsal g=1 seçimi fiziksel süreci öğretir; hassas düşük-T hesaplarında g ve diğer malzeme parametreleri önem kazanır.",
  selectable:"g=1 (ders referansı)",standard:"g_D=2, g_A=4 (standart sayım)"
 },
 en:{
  charts:"LECTURE 07 · INTERACTIVE GRAPHS",sims:"LECTURE 07 · NUMERICAL SIMULATIONS",
  levels:["Extrinsic band diagram — E_D and E_A","Local donor and acceptor levels, ion charges and energy distances in ideal silicon."],
  dos:["DOS with impurities: bands and delta levels","A dilute impurity is a sharp level with integrated area N_D or N_A, not an infinite physical peak."],
  ionization:["Donor ionization versus Fermi level — g effect","Compare g=1 and g_D=2 for x=(E_D−E_F)/kT."],
  neutrality:["Charge-neutrality intersection versus E_F","Si:P, N_D=10¹⁶ cm⁻³, 300 K: the intersection of n(E_F) with p(E_F)+N_D⁺(E_F)."],
  fermi:["E_F versus doping — 60 meV rule","The logarithmic Fermi shift for nearly fully ionized n/p-type silicon at 300 K."],
  temperature:["Three regions: n(T) and g comparison","For Si:P at 10¹⁵ cm⁻³, g matters most in low-T partial ionization."],
  arrhenius:["Arrhenius: log n versus 1000/T","Compare freeze-out, extrinsic plateau and intrinsic exponential slopes."],
  compensation:["Compensation: majority/minority at 300–700 K","N_A=10¹⁶ and N_D=5×10¹⁵ cm⁻³; thermal pairs raise minority carriers with temperature."],
  slider:"Temperature T (K)",doping:"Donors N_D (cm⁻³)",acceptor:"Acceptors N_A (cm⁻³)",
  gd:"Ionization model",intro:"Default <strong>g=1</strong> simplifies the physics; selecting another factor changes numerical ionization, not charge neutrality.",
  sim1:"Compare g=1 with g_D=2/g_A=4",
  sim1Desc:"Vary temperature and doping; compare the course model with standard statistical factors, especially near 77 K.",
  sim2:"Freeze-out, E_F and mass-action laboratory",
  sim2Desc:"Change temperature and donor concentration; observe the physical root and electron/hole populations.",
  warning:"Approximate equilibrium model: nondegenerate parabolic bands, isolated shallow impurities and constant E_g=1.12 eV. Heavy doping requires more complete statistics and band-gap corrections.",
  ion:"Donor ionization",major:"n / p",sum:"Total charged ions",shift:"E_F−E_i",bandDistance:"E_c−E_F",nu:"Neutrality residual",
  freeze:"Freeze-out x",note:"g=1 is sufficient for learning charge transfer, but detailed low-temperature fractions depend on degeneracy and material parameters.",
  selectable:"g=1 (course reference)",standard:"g_D=2, g_A=4 (standard)"
 }
};
const styles=["var(--accent)","#a2575b","#40846c","#8067a8"];
function plot({series,xMin,xMax,yMin,yMax,xText,yText,xTicks=[],yTicks=[],markers=[]}) {
 const W=748,H=320,L=69,R=15,T=21,B=49,X=x=>L+(x-xMin)/(xMax-xMin)*(W-L-R),
 Y=y=>T+(yMax-y)/(yMax-yMin)*(H-T-B);
 const grid=yTicks.map(v=>'<line x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(v)+'" y2="'+Y(v)+'" class="l56-grid"/><text x="'+(L-7)+'" y="'+(Y(v)+4)+'" text-anchor="end" class="l56-tick">'+esc(v)+'</text>').join("")+
 xTicks.map(v=>'<line x1="'+X(v)+'" x2="'+X(v)+'" y1="'+T+'" y2="'+(H-B)+'" class="l56-grid"/><text x="'+X(v)+'" y="'+(H-B+16)+'" text-anchor="middle" class="l56-tick">'+esc(v)+'</text>').join("");
 const paths=series.map((s,i)=>{
 const points=s.points.filter(p=>Number.isFinite(p[0])&&Number.isFinite(p[1]))
 .map(([a,b])=>X(Math.max(xMin,Math.min(xMax,a))).toFixed(1)+","+Y(Math.max(yMin,Math.min(yMax,b))).toFixed(1)).join(" ");
 return '<polyline points="'+points+'" fill="none" stroke="'+(s.color||styles[i%styles.length])+'" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" '+(s.dash?'stroke-dasharray="6 4"':'')+'/>';
 }).join("");
 const extra=markers.map(v=>'<line x1="'+X(v.x)+'" x2="'+X(v.x)+'" y1="'+T+'" y2="'+(H-B)+'" stroke="var(--muted)" stroke-dasharray="4 4"/>').join("");
 const svg='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+esc(yText+" versus "+xText)+'">'+grid+extra+paths+
 '<line x1="'+L+'" y1="'+T+'" x2="'+L+'" y2="'+(H-B)+'" class="l56-axis"/><line x1="'+L+'" y1="'+(H-B)+'" x2="'+(W-R)+'" y2="'+(H-B)+'" class="l56-axis"/>'+
 '<text x="'+(W/2)+'" y="'+(H-10)+'" text-anchor="middle" class="l56-axis-label">'+esc(xText)+'</text>'+
 '<text x="13" y="'+(H/2)+'" transform="rotate(-90 13 '+H/2+')" text-anchor="middle" class="l56-axis-label">'+esc(yText)+'</text></svg>';
 const legends=series.map((s,i)=>'<span class="l56-legend-item"><i style="background:'+(s.color||styles[i%styles.length])+'"></i>'+esc(s.name)+'</span>').join("");
 return '<div class="l56-plot l07-plot">'+svg+'<div class="l56-legend">'+legends+'</div></div>';
}
function diagram(kind, lang) {
 const b=texts[lang];
 const n=m.neutrality;
 if(kind==="levels"||kind==="dos"||kind==="deep"){
 const x=kind==="deep"?["Au","Cr","E_t"]:kind==="dos"?["N_D δ(E−E_D)","N_A δ(E−E_A)"]:["D⁰ → D⁺ + e⁻","A⁰ → A⁻ + h⁺"];
 return '<div class="l07-energy"><div class="l07-energy-diagram"><span class="l07-band conduction">E_c = 1.12 eV</span>'+
 (kind==="deep"?'<span class="l07-level donor deep">E_t — deep level</span>':
 '<span class="l07-level donor">E_D = E_c − 0.045 eV</span>')+
 '<span class="l07-reference">E_i ≈ 0.55 eV</span>'+
 '<span class="l07-level acceptor">E_A = E_v + 0.045 eV</span>'+
 '<span class="l07-band valence">E_v = 0</span></div><div class="l07-energy-notes">'+
 x.map(a=>'<p>'+esc(a)+'</p>').join("")+
 '<p>'+esc(lang==="tr"?"Yüksek katkıda tek bir delta seviyesi yerine safsızlık bandı oluşabilir.":"At heavy doping, the single delta level can broaden into an impurity band.")+'</p></div></div>';
 }
 if(kind==="ionization")return plot({series:[
 {name:"g=1",points:sample(-5,8,x=>100/(1+Math.exp(-x)))},
 {name:"g_D=2",points:sample(-5,8,x=>100/(1+2*Math.exp(-x)))}],
 xMin:-5,xMax:8,yMin:0,yMax:100,xText:"x=(E_D−E_F)/kT",yText:lang==="tr"?"İyonlaşma (%)":"Ionized (%)",
 xTicks:[-4,-2,0,2,4,6,8],yTicks:[0,25,50,75,100],markers:[{x:3}]});
 if(kind==="neutrality"){
 const N=1e16,T=300,ni=m.ni(T),nc=m.nc(T),nv=m.nv(T);
 const xLow=.46,xHigh=1.07;
 const negative=sample(xLow,xHigh,Ef=>logr(nc*Math.exp((Ef-EG)/(K*T))));
 const positive=sample(xLow,xHigh,Ef=>{
 const p=nv*Math.exp(-Ef/(K*T)), donors=N/(1+Math.exp((Ef-(EG-ED))/(K*T)));
 return logr(p+donors);
 });
 return plot({series:[{name:"n₀ (−)",points:negative},{name:"p₀+N_D⁺ (+)",points:positive}],
 xMin:xLow,xMax:xHigh,yMin:10,yMax:19,xText:"E_F − E_v (eV)",yText:"log₁₀ cm⁻³",
 xTicks:[.5,.6,.7,.8,.9,1],yTicks:[10,12,14,16,18]});
 }
 if(kind==="fermi"){
 const series=[
 {name:"n-type",points:sample(13,18,x=>EG-K*300*Math.log(m.nc(300)/10**x))},
 {name:"p-type",points:sample(13,18,x=>K*300*Math.log(m.nv(300)/10**x))}
 ];
 return plot({series,xMin:13,xMax:18,yMin:0,yMax:1.12,
 xText:"log₁₀ N_D / N_A (cm⁻³)",yText:"E_F − E_v (eV)",
 xTicks:[13,14,15,16,17,18],yTicks:[0,.25,.5,.75,1,1.12]});
 }
 if(kind==="temperature"||kind==="arrhenius"){
 const byT=(T,g)=>logr(n(T,1e15,0,g,g).n);
 const inv=kind==="arrhenius";
 const x0=inv?1.6:35,x1=inv?28:700;
 const temp=x=>inv?1000/x:x;
 return plot({series:[
 {name:"g=1",points:sample(x0,x1,x=>byT(temp(x),1))},
 {name:"g_D=2",points:sample(x0,x1,x=>byT(temp(x),2))},
 {name:"nᵢ",points:sample(x0,x1,x=>logr(m.ni(temp(x)))),dash:true}],
 xMin:x0,xMax:x1,yMin:inv?9:8,yMax:18,
 xText:inv?"1000/T (K⁻¹)":"T (K)",yText:"log₁₀ n (cm⁻³)",
 xTicks:inv?[2,5,10,15,20,25]:[100,200,300,400,500,600,700],
 yTicks:[10,12,14,16,18]});
 }
 if(kind==="compensation"){
 return plot({series:[
 {name:"p",points:sample(250,700,T=>logr(n(T,5e15,1e16,1,1).p))},
 {name:"n",points:sample(250,700,T=>logr(n(T,5e15,1e16,1,1).n))},
 {name:"nᵢ",points:sample(250,700,T=>logr(m.ni(T))),dash:true}],
 xMin:250,xMax:700,yMin:3,yMax:17,xText:"T (K)",yText:"log₁₀ cm⁻³",
 xTicks:[300,400,500,600,700],yTicks:[4,7,10,13,16]});
 }
 return "";
}
function n(T,Nd,Na,gd=1,ga=1){return m.neutrality(T,Nd,Na,gd,ga);}
function figure(kind,language="tr"){
 const lang=language==="en"?"en":"tr";
 if(!texts[lang][kind])return "";
 const [title,description]=texts[lang][kind];
 return '<figure class="l56-topic-figure l07-topic"><figcaption>'+esc(title)+'</figcaption>'+
 diagram(kind,lang)+'<p class="l56-note">'+esc(description)+'</p></figure>';
}
const chartKinds=["levels","dos","ionization","neutrality","fermi","temperature","arrhenius","compensation"];
function card(title,intro,body){
 return '<article class="l56-card"><div class="l56-head"><div><h3>'+esc(title)+'</h3><p>'+esc(intro)+'</p></div></div>'+body+'</article>';
}
function input(label,key,value,min,max,step){
 return '<label class="l56-control">'+esc(label)+' <strong data-value="'+key+'"></strong><input type="range" data-control="'+key+'" value="'+value+'" min="'+min+'" max="'+max+'" step="'+step+'"></label>';
}
function stat(label,value){
 return '<div class="l56-stat"><small>'+esc(label)+'</small><strong>'+esc(value)+'</strong></div>';
}
function updateCard(card,kind,lang){
 const b=texts[lang],get=k=>Number(card.querySelector('[data-control="'+k+'"]').value);
 const T=get("T"),D=10**get("nd");
 const A=kind==="compare" ? Number(card.querySelector('[data-control="na"]').value)*1e15 : 0;
 card.querySelector('[data-value="T"]').textContent=T+" K";
 card.querySelector('[data-value="nd"]').textContent=sci(D)+" cm⁻³";
 if(kind==="compare")card.querySelector('[data-value="na"]').textContent=sci(A)+" cm⁻³";
 const g1=n(T,D,A,1,1),gReal=n(T,D,A,2,4);
 let html="";
 const format=(s,tag)=>stat(tag+" n₀",sci(s.n)+" cm⁻³")+
 stat(tag+" p₀",sci(s.p)+" cm⁻³")+
 stat(tag+" N_D⁺/N_D",((s.donorFraction||0)*100).toFixed(1)+"%")+
 stat(tag+" N_A⁻/N_A",A?((s.acceptorFraction||0)*100).toFixed(1)+"%":"—");
 if(kind==="compare")html=format(g1,"g=1") + format(gReal,"g_D=2/g_A=4");
 else {
 const Nprime=m.nc(T)*Math.exp(-m.ED/m.kT(T));
 const x=2/(1+Math.sqrt(1+4*D/Nprime));
 html=stat("n₀",sci(g1.n)+" cm⁻³")+stat("p₀",sci(g1.p)+" cm⁻³")+
 stat(b.freeze,(100*x).toFixed(1)+"%")+stat(b.bandDistance,(m.EG-m.kT(T)*Math.log(m.nc(T)/g1.n)).toFixed(4)+" eV")+
 stat(b.shift,g1.efMinusEi.toFixed(4)+" eV")+
 stat("np/nᵢ²",(g1.n*g1.p/(g1.ni*g1.ni)).toFixed(5));
 }
 card.querySelector(".l56-results").innerHTML=html;
 card.querySelector(".l56-dynamic").textContent=kind==="compare"?b.note:b.warning;
}
function mount({lessonId,tabId,language,container}){
 if(lessonId!=="07"||!["grafikler","simulasyonlar"].includes(tabId))return false;
 const lang=language==="en"?"en":"tr",b=texts[lang],section=document.createElement("div");
 section.className="l56-section l07-section";
 section.innerHTML='<span class="eyebrow">'+esc(tabId==="grafikler"?b.charts:b.sims)+'</span>';
 if(tabId==="grafikler"){
 for(const kind of chartKinds) {
 const [title,description]=b[kind];
 section.insertAdjacentHTML("beforeend",card(title,description,diagram(kind,lang)));
 }
 } else {
 for(const kind of ["compare","freeze"]){
 const controls=input(b.slider,"T",kind==="compare"?77:300,40,700,1)+
 input(b.doping,"nd",kind==="compare"?15:16,13,17,.1)+
 (kind==="compare"?input(b.acceptor,"na",0,0,10,.5):"");
 section.insertAdjacentHTML("beforeend",'<article class="l56-card l07-simulator">'+
 '<h3>'+esc(kind==="compare"?b.sim1:b.sim2)+'</h3><p>'+esc(kind==="compare"?b.sim1Desc:b.sim2Desc)+'</p>'+
 '<p class="l07-g-note">'+b.intro+'</p><div class="l56-controls">'+controls+'</div>'+
 '<div class="l56-results" aria-live="polite"></div><div class="l56-dynamic"></div></article>');
 }
 for(const [i,card] of [...section.querySelectorAll(".l07-simulator")].entries()){
 const kind=i===0?"compare":"freeze";
 card.addEventListener("input",()=>updateCard(card,kind,lang));
 updateCard(card,kind,lang);
 }
 }
 section.insertAdjacentHTML("beforeend",'<p class="l56-note">'+esc(b.warning)+'</p>');
 container.replaceChildren(section);
 return true;
}
window.Lecture07Lab={mount,figure,chartKinds};
})();