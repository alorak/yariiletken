/* Lectures 05–06: slide-aligned, dependency-free DOS/Fermi and dopant labs.
 * Sources: lec05.pdf (pp. 3–17), lec06.pdf (pp. 3–13).
 * Teaching models, not measured device data. Nondegenerate parabolic bands;
 * isolated shallow impurities with illustrative gD=2, gA=4.
 */
(() => {
  "use strict";
  const K = 8.617333262145e-5, EG = 1.12, NI300 = 9.65e9;
  const NC300 = 2.8e19, NV300 = 1e19, ED = .045, EA = .045;
  const clampExp = z => Math.exp(Math.max(-650, Math.min(650, z)));
  const kT = T => K * T;
  const nc = T => NC300 * (T / 300) ** 1.5;
  const nv = T => NV300 * (T / 300) ** 1.5;
  const ni = T => NI300 * (T / 300) ** 1.5 *
    clampExp(-EG / (2 * K) * (1 / T - 1 / 300));
  const fd = (delta, T) => T <= 0 ? (delta > 0 ? 0 : delta < 0 ? 1 : .5) :
    1 / (1 + clampExp(delta / kT(T)));
  const boltzmann = (delta, T) => clampExp(-delta / kT(T));
  const dosC = delta => Math.sqrt(Math.max(0, delta));
  // Charge balance: n + NA- = p + ND+, with np=ni².
  // Donor and acceptor occupancy degeneracy factors are illustrative choices.
  function neutrality(T, Nd, Na) {
    const intrinsic = ni(T), ci = nc(T), vi = nv(T);
    const intr2 = intrinsic * intrinsic;
    const state = logN => {
      const n = Math.exp(logN), p = intr2 / n;
      const donors = Nd / (1 + 2 * n / ci * clampExp(ED / kT(T)));
      const acceptors = Na / (1 + 4 * p / vi * clampExp(EA / kT(T)));
      return { n, p, donors, acceptors,
        residual: n + acceptors - p - donors };
    };
    let lo = Math.log(1e-280), hi = Math.log(1e25);
    for (let i = 0; i < 115; i++) {
      const mid = (lo + hi) / 2;
      if (state(mid).residual > 0) hi = mid; else lo = mid;
    }
    const result = state((lo + hi) / 2);
    return { ...result, ni: intrinsic, nc: ci, nv: vi, T, Nd, Na,
      donorFraction: Nd ? result.donors / Nd : 0,
      acceptorFraction: Na ? result.acceptors / Na : 0,
      efMinusEi: kT(T) * Math.log(result.n / intrinsic) };
  }
  const model = { K, EG, NI300, NC300, NV300, ED, EA, kT, nc, nv,
    ni, fd, boltzmann, dosC, neutrality };
  window.Lecture0506Model = model;

  const L = {
    tr: {
      graph: "ETKİLEŞİMLİ GRAFİKLER", sim: "FİZİK SİMÜLASYONLARI",
      dos: "Bant kenarlarında durum yoğunluğu", dosIntro: "Valans ve iletim bandındaki izinli durumları karşılaştır. Bant aralığı içinde ideal modelde durum yoktur.",
      fd: "Fermi–Dirac doluluğu — 0, 300 ve 600 K", fdIntro: "E−E_F ekseninde 0 K basamağını ve artan sıcaklıkla yumuşayan geçişi incele. E=E_F'de olasılık 1/2'dir; orada izinli durum bulunması zorunlu değildir.",
      product: "N(E), f(E) ve çarpımı", productIntro: "İletim bandı kenarından itibaren normalize eğriler. Parabolik DOS × Boltzmann yaklaşımının tepe noktası E−E_c=kT/2 olur.",
      arr: "Öz taşıyıcı yoğunluğu — 1000/T", arrIntro: "300 K'de ölçüm referansına sabitlenmiş Si n_i(T) modeli. Logaritmik düşey eksen ve ters sıcaklık ekseni kullanılır.",
      ndGraph: "Üç katkı seviyesi — n ve 1000/T", ndGraphIntro: "P-katkılı Si için üç donör yoğunluğunda kısmi iyonlaşma, ekstrinsik plato ve yüksek sıcaklıkta öz taşıyıcıya geçiş.",
      balanceGraph: "İki taşıyıcı kaynağı — doğrusal eksen", balanceIntro: "N_D=10¹⁵ cm⁻³ için n=N_D⁺+p karşılaştırması. İyonlaşmış donörler ve termal üretilen holler ayrı gösterilir.",
      fdSim: "Fermi–Dirac ve 3kT sınırı", fdSimIntro: "T ile E−E_F değerlerini değiştir; tam olasılığı ve Boltzmann yaklaşımının bağıl hatasını karşılaştır.",
      carrierSim: "n, p, N_c, N_v ve öz Fermi seviyesi", carrierIntro: "Etkin durum yoğunluklarından hesaplanan, katkısız/parabolik bantların non-degenerate modelini değiştir. n_i için bu hesapta bant parametrelerinden çıkan teorik değeri kullanırız.",
      dopSim: "Yük nötrlüğü, iyonlaşma ve kompanzasyon", dopIntro: "N_D, N_A ve T'yi değiştir; çözüm n+N_A⁻=p+N_D⁺ ve np=n_i² koşullarını birlikte sağlar.",
      temp: "Sıcaklık", delta: "E − E_F", shift: "E_F − orta bant", donors: "Donör N_D", acceptors: "Akseptör N_A",
      noDop: "Yok", value: "Hesaplanan değerler", main: "Çoğunluk", freeze: "Kısmi iyonlaşma", plateau: "Ekstrinsik plato", intrinsic: "Öz rejim",
      cm: "cm⁻³", energy: "Enerji (eV)", tInv: "1000/T (K⁻¹)",
      notes05: "Slayt 05, s. 3–17. N(E) birimi cm⁻³ eV⁻¹, N_c/N_v birimi cm⁻³'tür. n_i(300 K)=9,65×10⁹ cm⁻³ ölçüm referansıdır; slayttaki klasik 1,5×10¹⁰ değeriyle karıştırılmamalıdır. Bant aralığı T ile sabit tutulmuştur.",
      notes06: "Slayt 06, s. 3–13. Tekil, sığ katkı yaklaşımı; g_D=2, g_A=4 örnek dejenerasyon çarpanlarıdır. Elektronlar için non-degenerate bant yaklaşımı ve sabit E_g kullanılır. Aşırı katkı, bant daralması ve mobilite hesaplanmaz; rejim sınırları yaklaşık değerlerdir.",
      invalid: "Boltzmann yaklaşımı sınır dışında: tam Fermi–Dirac kullan.",
      valid: "Yaklaşık 3kT ötesi: Boltzmann hatası %5 düzeyinin altındadır.",
      mathNote: "3kT kuralı yaklaşık %5'lik sınırdır; 300 K'de 3kT≈0,0776 eV.",
      paramNote: "N_c, N_v ∝ T³ᐟ²; n=N_c exp[−(E_c−E_F)/kT], p=N_v exp[−(E_F−E_v)/kT]. Boltzmann için her bant kenarı E_F'den 3kT uzakta olmalıdır.",
      ionNote: "Katkı iyonlaşması bir tür serbest taşıyıcı oluşturur; termal bantlar arası üretim ise elektron–hol çifti oluşturur. Azınlık yoğunluğu burada np=n_i² ile bulunur.",
      chartUnits: "Düşey eksen log₁₀ yoğunluk (cm⁻³).", chartLinear: "Düşey eksen yoğunluk (10¹⁵ cm⁻³)."
    },
    en: {
      graph: "INTERACTIVE GRAPHS", sim: "PHYSICS SIMULATIONS",
      dos: "Density of states near the band edges", dosIntro: "Compare allowed states in valence and conduction bands. In the ideal band model there are no states inside the gap.",
      fd: "Fermi–Dirac occupancy — 0, 300 and 600 K", fdIntro: "Observe the 0 K step and thermal broadening against E−E_F. At E=E_F the occupancy is one half, even if there is no allowed state at that energy.",
      product: "N(E), f(E) and their product", productIntro: "Curves normalized separately from the conduction-band edge. For parabolic DOS times Boltzmann occupancy, the maximum is at E−E_c=kT/2.",
      arr: "Intrinsic carrier density — 1000/T", arrIntro: "Silicon n_i(T) anchored to a measured 300 K reference. Vertical logarithmic scale and inverse-temperature axis.",
      ndGraph: "Three doping levels — n versus 1000/T", ndGraphIntro: "The partial-ionization, extrinsic plateau and high-temperature intrinsic regions of P-doped Si for three donor densities.",
      balanceGraph: "Two carrier sources — linear axis", balanceIntro: "For N_D=10¹⁵ cm⁻³, compare n=N_D⁺+p. Ionized donors and thermally generated holes are drawn separately.",
      fdSim: "Fermi–Dirac and the 3kT threshold", fdSimIntro: "Change T and E−E_F to compare exact occupancy with the relative error of the Boltzmann approximation.",
      carrierSim: "n, p, N_c, N_v and intrinsic Fermi level", carrierIntro: "Vary a nondegenerate, parabolic-band model. Here theoretical n_i is computed from the selected band parameters rather than the independently measured reference.",
      dopSim: "Charge balance, ionization and compensation", dopIntro: "Vary N_D, N_A and T; solve n+N_A⁻=p+N_D⁺ and np=n_i² simultaneously.",
      temp: "Temperature", delta: "E − E_F", shift: "E_F − midgap", donors: "Donors N_D", acceptors: "Acceptors N_A",
      noDop: "None", value: "Calculated values", main: "Majority", freeze: "Partial ionization", plateau: "Extrinsic plateau", intrinsic: "Intrinsic regime",
      cm: "cm⁻³", energy: "Energy (eV)", tInv: "1000/T (K⁻¹)",
      notes05: "Lecture 05, pp. 3–17. N(E) has units cm⁻³ eV⁻¹ whereas N_c/N_v have units cm⁻³. The 300 K value n_i=9.65×10⁹ cm⁻³ is a measured reference, distinct from the traditional 1.5×10¹⁰ figure. E_g is held constant with T.",
      notes06: "Lecture 06, pp. 3–13. Isolated shallow impurities; g_D=2, g_A=4 are illustrative degeneracy factors. Nondegenerate bands and constant E_g are assumed. Heavy doping, band-gap narrowing, and mobility are not modeled; temperature boundaries are approximate.",
      invalid: "Outside the Boltzmann approximation: use the full Fermi–Dirac function.",
      valid: "About 3kT beyond E_F: Boltzmann error is below roughly 5%.",
      mathNote: "The 3kT rule corresponds to roughly 5% error; at 300 K, 3kT≈0.0776 eV.",
      paramNote: "N_c,N_v ∝ T³ᐟ²; n=N_c exp[−(E_c−E_F)/kT], p=N_v exp[−(E_F−E_v)/kT]. Both band edges must be at least 3kT away from E_F for Boltzmann statistics.",
      ionNote: "Impurity ionization creates one type of free carrier; thermal band-to-band excitation creates an electron–hole pair. Minority concentration follows from np=n_i² here.",
      chartUnits: "Vertical scale: log₁₀ concentration (cm⁻³).", chartLinear: "Vertical scale: concentration (10¹⁵ cm⁻³)."
    }
  };
  const esc = x => String(x).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
  const format = n => {
    if (!Number.isFinite(n)) return "—";
    if (n === 0) return "0";
    if (Math.abs(n) < .01 || Math.abs(n) >= 1e5) return n.toExponential(2).replace("e+", "×10^");
    return Number(n.toPrecision(4)).toLocaleString("en-US");
  };
  const svgPoint = (x, y) => x.toFixed(2) + "," + y.toFixed(2);
  function plot({series, xMin, xMax, yMin, yMax, xLabel, yLabel, xTicks, yTicks, markers=[]}) {
    const W=760,H=320,l=66,r=14,top=18,bottom=55, pw=W-l-r,ph=H-top-bottom;
    const px = x => l+(x-xMin)/(xMax-xMin)*pw;
    const py = y => top+(yMax-y)/(yMax-yMin)*ph;
    const grid = (yTicks||[]).map(t =>
      '<line x1="'+l+'" y1="'+py(t)+'" x2="'+(W-r)+'" y2="'+py(t)+'" class="l56-grid"/>'+
      '<text x="'+(l-8)+'" y="'+(py(t)+4)+'" text-anchor="end" class="l56-tick">'+esc(t)+'</text>').join("")+
      (xTicks||[]).map(t =>
      '<line x1="'+px(t)+'" y1="'+top+'" x2="'+px(t)+'" y2="'+(H-bottom)+'" class="l56-grid"/>'+
      '<text x="'+px(t)+'" y="'+(H-bottom+17)+'" text-anchor="middle" class="l56-tick">'+esc(Number(t.toFixed(2)))+'</text>').join("");
    const markersSvg=markers.map(marker=>
      '<line x1="'+px(marker.x)+'" y1="'+top+'" x2="'+px(marker.x)+'" y2="'+(H-bottom)+'" stroke="var(--muted)" stroke-dasharray="4 4"/>'+
      '<text x="'+Math.min(W-85,px(marker.x)+4)+'" y="'+(top+13)+'" class="l56-tick">'+esc(marker.label)+'</text>').join("");
    const lines=series.map((s,i)=>{
      const coords=s.values.filter(p=>Number.isFinite(p[0])&&Number.isFinite(p[1])).map(p=>
        svgPoint(px(Math.max(xMin,Math.min(xMax,p[0]))),py(Math.max(yMin,Math.min(yMax,p[1]))))).join(" ");
      return '<polyline points="'+coords+'" fill="none" stroke="'+(s.color||"var(--accent)")+'" stroke-width="2.7" stroke-linejoin="round" stroke-linecap="round"'+(s.dash?' stroke-dasharray="6 5"':'')+'/>';
    }).join("");
    const legend=series.map((s,i)=>'<span class="l56-legend-item"><i style="background:'+esc(s.color||"var(--accent)")+'"></i>'+esc(s.label)+'</span>').join("");
    return '<div class="l56-plot"><svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+esc(yLabel+" / "+xLabel)+'">'+
      grid+markersSvg+lines+
      '<line x1="'+l+'" y1="'+(H-bottom)+'" x2="'+(W-r)+'" y2="'+(H-bottom)+'" class="l56-axis"/>'+
      '<line x1="'+l+'" y1="'+top+'" x2="'+l+'" y2="'+(H-bottom)+'" class="l56-axis"/>'+
      '<text x="'+(l+pw/2)+'" y="'+(H-15)+'" text-anchor="middle" class="l56-axis-label">'+esc(xLabel)+'</text>'+
      '<text x="16" y="'+(top+ph/2)+'" transform="rotate(-90 16 '+(top+ph/2)+')" text-anchor="middle" class="l56-axis-label">'+esc(yLabel)+'</text></svg>'+
      '<div class="l56-legend">'+legend+'</div></div>';
  }
  const sample = (min,max,fn,n=110) => Array.from({length:n+1},(_,i)=>{
    const x=min+i/n*(max-min);return [x,fn(x)];
  });
  function graph(kind,lang) {
    const b=L[lang];
    if(kind==="dos") {
      const a=sample(-.9,.9,x=>Math.sqrt(Math.max(0,-.56-x)));
      const c=sample(-.9,.9,x=>Math.sqrt(Math.max(0,x-.56)));
      return plot({series:[{label:"N_v(E)",color:"#ad5a54",values:a},{label:"N_c(E)",color:"var(--accent)",values:c}],
        xMin:-.9,xMax:.9,yMin:0,yMax:.65,xLabel:b.energy+" (E_i=0)",yLabel:"N(E) / a",
        xTicks:[-.8,-.56,0,.56,.8],yTicks:[0,.2,.4,.6],markers:[{x:-.56,label:"E_v"},{x:.56,label:"E_c"}]});
    }
    if(kind==="fd")return plot({series:[
      {label:"0 K",color:"var(--muted)",values:sample(-.22,.22,x=>fd(x,0))},
      {label:"300 K",color:"var(--accent)",values:sample(-.22,.22,x=>fd(x,300))},
      {label:"600 K",color:"#ad5a54",values:sample(-.22,.22,x=>fd(x,600))}],
      xMin:-.22,xMax:.22,yMin:0,yMax:1,xLabel:"E − E_F (eV)",yLabel:"f(E,T)",
      xTicks:[-.2,-.1,0,.1,.2],yTicks:[0,.25,.5,.75,1],markers:[{x:0,label:"E_F"}]});
    if(kind==="product"){
      const T=300,peak=kT(T)/2;
      const all=sample(0,.15,x=>Math.sqrt(x/0.15));
      const f=sample(0,.15,x=>Math.exp(-x/kT(T)));
      const max=Math.sqrt(peak)*Math.exp(-.5);
      const prod=sample(0,.15,x=>Math.sqrt(x)*Math.exp(-x/kT(T))/max);
      return plot({series:[{label:"N(E) / max",color:"var(--ink-soft)",values:all},
        {label:"f(E) / f(E_c)",color:"#ad5a54",values:f},
        {label:"N(E)f(E) / max",color:"var(--accent)",values:prod}],
        xMin:0,xMax:.15,yMin:0,yMax:1.05,xLabel:"E − E_c (eV)",yLabel:"normalized",
        xTicks:[0,.025,.05,.075,.1,.125,.15],yTicks:[0,.25,.5,.75,1],markers:[{x:peak,label:"kT/2"}]});
    }
    if(kind==="arr"){
      return plot({series:[{label:"Si n_i(T)",values:sample(1.3,4,x=>Math.log10(ni(1000/x)))}],
        xMin:1.3,xMax:4,yMin:8,yMax:18,xLabel:b.tInv,yLabel:"log₁₀ n_i (cm⁻³)",
        xTicks:[1.5,2,2.5,3,3.5,4],yTicks:[8,10,12,14,16,18]});
    }
    if(kind==="nd")return plot({series:[
      {label:"N_D=10¹⁵",color:"#36866a",values:sample(1.3,30,x=>Math.log10(neutrality(1000/x,1e15,0).n))},
      {label:"N_D=5×10¹⁵",color:"#ad5a54",values:sample(1.3,30,x=>Math.log10(neutrality(1000/x,5e15,0).n))},
      {label:"N_D=10¹⁶",color:"var(--accent)",values:sample(1.3,30,x=>Math.log10(neutrality(1000/x,1e16,0).n))}],
      xMin:1.3,xMax:30,yMin:10,yMax:18,xLabel:b.tInv,yLabel:"log₁₀ n (cm⁻³)",
      xTicks:[2,5,10,15,20,25,30],yTicks:[10,12,14,16,18]});
    if(kind==="sources"){
      const calc=(t,part)=>{const x=neutrality(t,1e15,0);return x[part]/1e15;};
      return plot({series:[
        {label:"n",color:"var(--accent)",values:sample(30,720,t=>calc(t,"n"))},
        {label:"N_D⁺",color:"#ad5a54",dash:true,values:sample(30,720,t=>calc(t,"donors"))},
        {label:"p (thermal)",color:"#36866a",dash:true,values:sample(30,720,t=>calc(t,"p"))}],
        xMin:30,xMax:720,yMin:0,yMax:16,xLabel:"T (K)",yLabel:"10¹⁵ cm⁻³",
        xTicks:[100,200,300,400,500,600,700],yTicks:[0,4,8,12,16]});
    }
    return "";
  }
  const specs={
    "05":[["dos","dos","dosIntro"],["fd","fd","fdIntro"],["product","product","productIntro"],["arr","arr","arrIntro"]],
    "06":[["nd","ndGraph","ndGraphIntro"],["sources","balanceGraph","balanceIntro"]]
  };
  function graphCard(type,title,description,lang,i) {
    return '<section class="l56-card"><div class="l56-head"><span class="lab-card-index">'+(i+1)+'</span><div><h3>'+esc(title)+'</h3><p>'+esc(description)+'</p></div></div>'+
      graph(type,lang)+'</section>';
  }
  function control(label,value,min,max,step,key,unit="") {
    return '<label class="l56-control"><span>'+esc(label)+': <strong data-readout="'+esc(key)+'">'+esc(value)+esc(unit)+'</strong></span>'+
      '<input type="range" data-param="'+esc(key)+'" min="'+min+'" max="'+max+'" step="'+step+'" value="'+value+'"></label>';
  }
  function stat(label,value) {return '<div class="l56-stat"><small>'+esc(label)+'</small><strong>'+esc(value)+'</strong></div>';}
  function simCard(title,description,notes,i) {
    return '<section class="l56-card"><div class="l56-head"><span class="lab-card-index">'+i+'</span><div><h3>'+esc(title)+'</h3><p>'+esc(description)+'</p></div></div>'+
      '<div class="l56-controls"></div><div class="l56-results" aria-live="polite"></div><div class="l56-dynamic"></div>'+
      '<p class="l56-note">'+esc(notes)+'</p></section>';
  }
  function mount({container,lessonId,tabId,language}) {
    if(!["05","06"].includes(lessonId)||!["grafikler","simulasyonlar"].includes(tabId))return false;
    const lang=language==="en"?"en":"tr",b=L[lang];
    container.replaceChildren();
    const section=document.createElement("div");
    section.className="l56-section";
    section.innerHTML='<p class="eyebrow">'+esc(tabId==="grafikler"?b.graph:b.sim)+'</p>';
    if(tabId==="grafikler"){
      specs[lessonId].forEach(([kind,title,desc],i)=>{
        section.insertAdjacentHTML("beforeend",graphCard(kind,b[title],b[desc],lang,i));
      });
      section.insertAdjacentHTML("beforeend",'<p class="l56-note">'+esc(lessonId==="05"?b.notes05:b.notes06)+'</p>');
    }else {
      const ids=lessonId==="05"?["fd","carrier"]:["doping"];
      ids.forEach((id,i)=>{
        const title=id==="fd"?b.fdSim:id==="carrier"?b.carrierSim:b.dopSim;
        const desc=id==="fd"?b.fdSimIntro:id==="carrier"?b.carrierIntro:b.dopIntro;
        section.insertAdjacentHTML("beforeend",simCard(title,desc,id==="fd"?b.mathNote:id==="carrier"?b.paramNote:b.ionNote,i+1));
      });
      const cards=section.querySelectorAll(".l56-card");
      ids.forEach((id,i)=>{
        const card=cards[i],controls=card.querySelector(".l56-controls"),
          results=card.querySelector(".l56-results"),dynamic=card.querySelector(".l56-dynamic");
        if(id==="fd"){
          controls.innerHTML=control(b.temp,300,50,900,10,"T"," K")+
            control(b.delta,.08,-.25,.25,.005,"delta"," eV");
          const update=()=>{
            const T=Number(card.querySelector('[data-param="T"]').value),
              delta=Number(card.querySelector('[data-param="delta"]').value);
            const exact=fd(delta,T),approx=boltzmann(delta,T);
            const valid=delta>=3*kT(T);
            const error=exact ? Math.abs(approx-exact)/exact*100 : 0;
            results.innerHTML=stat("f(E,T)",format(exact))+
              stat("Boltzmann",format(approx))+
              stat(lang==="tr"?"Bağıl hata":"Relative error",format(error)+"%")+
              stat("3kT",format(3*kT(T))+" eV");
            dynamic.textContent=valid?b.valid:b.invalid;
            card.querySelector('[data-readout="T"]').textContent=T+" K";
            card.querySelector('[data-readout="delta"]').textContent=delta.toFixed(3)+" eV";
          };
          controls.addEventListener("input",update);update();
        }else if(id==="carrier"){
          controls.innerHTML=control(b.temp,300,200,850,10,"T"," K")+
            control(b.shift,0,-.35,.35,.01,"ef"," eV");
          const update=()=>{
            const T=Number(card.querySelector('[data-param="T"]').value),
              shift=Number(card.querySelector('[data-param="ef"]').value);
            const thermal=kT(T), ci=nc(T),vi=nv(T);
            const EcEf=EG/2-shift, EfEv=EG/2+shift;
            const n=ci*clampExp(-EcEf/thermal),p=vi*clampExp(-EfEv/thermal),
              theoretical=Math.sqrt(ci*vi)*clampExp(-EG/(2*thermal));
            const EiMinusMid=.5*thermal*Math.log(vi/ci);
            results.innerHTML=stat("N_c",format(ci)+" cm⁻³")+
              stat("N_v",format(vi)+" cm⁻³")+
              stat("n₀",format(n)+" cm⁻³")+
              stat("p₀",format(p)+" cm⁻³")+
              stat("√(np)",format(Math.sqrt(n*p))+" cm⁻³")+
              stat("E_i−midgap",format(EiMinusMid*1000)+" meV");
            dynamic.textContent=(EcEf>=3*thermal&&EfEv>=3*thermal?b.valid:b.invalid)+" n·p = N_c N_v exp(−E_g/kT).";
            card.querySelector('[data-readout="T"]').textContent=T+" K";
            card.querySelector('[data-readout="ef"]').textContent=shift.toFixed(2)+" eV";
          };
          controls.addEventListener("input",update);update();
        }else{
          const dopOptions=[0,1e14,1e15,4e15,1e16,1e17];
          const choice=(key,label,current)=>'<label class="l56-control">'+esc(label)+
            '<select data-param="'+key+'">'+dopOptions.map(v=>'<option value="'+v+'"'+(v===current?' selected':'')+'>'+
              (v===0?b.noDop:format(v)+" cm⁻³")+'</option>').join("")+'</select></label>';
          controls.innerHTML=control(b.temp,300,25,850,5,"T"," K")+
            choice("Nd",b.donors,1e16)+choice("Na",b.acceptors,4e15);
          const update=()=>{
            const T=Number(card.querySelector('[data-param="T"]').value),
              Nd=Number(card.querySelector('[data-param="Nd"]').value),
              Na=Number(card.querySelector('[data-param="Na"]').value);
            const s=neutrality(T,Nd,Na);
            const residual=(s.n+s.acceptors)-(s.p+s.donors);
            results.innerHTML=stat("n₀",format(s.n)+" cm⁻³")+
              stat("p₀",format(s.p)+" cm⁻³")+
              stat("N_D⁺",format(s.donors)+" cm⁻³")+
              stat("N_A⁻",format(s.acceptors)+" cm⁻³")+
              stat("N_D⁺/N_D",Nd?(100*s.donorFraction).toFixed(2)+"%":"—")+
              stat("N_A⁻/N_A",Na?(100*s.acceptorFraction).toFixed(2)+"%":"—")+
              stat("E_F−E_i",format(s.efMinusEi)+" eV")+
              stat("n·p/n_i²",format(s.n*s.p/(s.ni*s.ni)));
            const regime = Math.max(s.n,s.p)<3*s.ni?b.intrinsic:
              (Nd>0&&s.donorFraction<.85)||(Na>0&&s.acceptorFraction<.85)?b.freeze:b.plateau;
            const type=s.n>1.01*s.p?"n-type":s.p>1.01*s.n?"p-type":"intrinsic";
            dynamic.textContent=type+" · "+regime+" · "+(lang==="tr"?"İyonlaşmış toplam katkı":"Total ionized dopants")+
              ": "+format(s.donors+s.acceptors)+" cm⁻³";
            card.querySelector('[data-readout="T"]').textContent=T+" K";
          };
          controls.addEventListener("input",update);controls.addEventListener("change",update);update();
        }
      });
    }
    container.append(section);
    return true;
  }
  window.Lecture0506Lab={mount};
})();