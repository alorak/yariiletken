/* Lesson 03: Intrinsic-carrier concentration — independent numeric physics + bilingual labs.
 * Quantitative model: nondegenerate, approximately parabolic-band semiconductor.
 * n_i=sqrt(Nc Nv)*exp(-Eg/(2 k T)); Nc,Nv ∝ T^(3/2).
 * Optional temperature-dependent Si-like Varshni correction, not a fitted device measurement.
 */
(() => {
  "use strict";
  const K=8.617333262145e-5, ALPHA=4.73e-4, BETA=636, N_SI=5e22;
  const defaults={T:300,eg300:1.12,nc300:2.8,nv300:1.04,gapMode:"constant"};
  const translations={
    tr:{
      graphTitle:"Öz taşıyıcı yoğunluğu nᵢ — sıcaklık ve bant aralığı",
      graphIntro:"Gerçek nᵢ değerlerini doğrusal eksende incele; sıcaklık, bant aralığı ve etkin durum yoğunluklarını değiştir. Sağdaki grafik neden 1/T ile yaklaşık doğrusal bir ilişki çıktığını açıklar.",
      simTitle:"nᵢ hesaplama laboratuvarı — adım adım",
      simIntro:"Bant aralığı ve mevcut enerji durumları değiştiğinde, termal dengedeki elektron–hol yoğunluğunu sayısal olarak hesapla.",
      temp:"Sıcaklık T", gap:"E₉(300 K)", nc:"Nᶜ(300 K)", nv:"Nᵛ(300 K)", model:"Bant aralığı modeli",
      constant:"Sabit E₉",varshni:"Si-benzeri E₉(T) (Varshni)",
      linear:"nᵢ(T) — doğrusal eksen",arr:"Bant aralığı ve ters sıcaklık",
      yLinear:"nᵢ (cm⁻³)",yArr:"ln[nᵢ/√(NᶜNᵛ)]",xTemp:"T (K)",xInverse:"1000/T (K⁻¹)",
      current:"Seçilen sıcaklık", egCurrent:"E₉(T)",thermal:"kT", ncCurrent:"Nᶜ(T)",nvCurrent:"Nᵛ(T)",
      product:"Geometrik ortalama", exponent:"Boltzmann çarpanı",result:"Hesaplanan nᵢ",atomRatio:"Si atomu / elektron",
      equal:"Termal dengede öz malzeme: n₀ = p₀ = nᵢ",
      instruction:"Adım adım hesap",step1:"1. Enerji durumlarının geometrik ortalaması",
      step2:"2. Termal uyarılma olasılığıyla ilgili üstel çarpan",
      step3:"3. Serbest elektron ve hol yoğunluğu",
      compare:"Ne değişirse ne olur? (Diğer parametreler sabit)",
      hotter:"T +20 K",wider:"E₉ +0,10 eV",doubleNc:"Nᶜ ×2",doubleNv:"Nᵛ ×2",
      relative:"Yeni nᵢ / mevcut nᵢ",compLabel:"Yeni sonuç",
      conclusion:"Büyük bant aralığı nᵢ'yi üstel olarak azaltır. Sıcaklık hem durum yoğunluğunu hem de uyarılmayı etkiler. Nᶜ veya Nᵛ iki katına çıkarsa, diğerleri sabitken nᵢ √2 katına çıkar.",
      modeNote:"'Si-benzeri' seçeneği yalnız bant aralığına Si Varshni sıcaklık düzeltmesi uygular (α=4,73×10⁻⁴ eV/K, β=636 K). Nᶜ ve Nᵛ her iki modda T³ᐟ² ile ölçeklenir. Eg, Nc, Nv kaydırıcıları değiştirildiğinde parametreler varsayımsal hale gelir; gerçek farklı malzeme tahmini yapılmaz.",
      refNote:"Referans olarak Nᶜ(300)=2,8×10¹⁹ ve Nᵛ(300)=1,04×10¹⁹ cm⁻³, E₉=1,12 eV kullanıldığında nᵢ ≈ 6,7×10⁹ cm⁻³ bulunur; derslerde kullanılan ≈10¹⁰ cm⁻³ aynı mertebededir. Literatürdeki nᵢ değerleri etkin kütle, bant aralığı ve kullanılan deneysel bağıntıya göre değişir.",
      validity:"Bu model termal dengede, bant kenarlarına yakın Boltzmann (dejenere olmayan) yaklaşımında geçerlidir. Katkılama doğrudan malzemeye özgü nᵢ'yi artırmaz; dengede n ve p'yi değiştirir, ideal yaklaşımda np=nᵢ². Işık ve dış kutuplama denge dışı n,p oluşturabilir. Çok düşük T'de/yoğun katkıda model sınırları vardır.",
      hint:"nᵢ bir üretim hızı değil, cm³ başına yoğunluktur; bir elektron–hol çifti bir elektron ve bir hol sağlar.",
      kUnit:"×10¹⁹ cm⁻³",na:"Yaklaşık",ratio:"kat", labelCurrent:"Seçilen T"
    },
    en:{
      graphTitle:"Intrinsic carrier concentration nᵢ — temperature and gap",
      graphIntro:"Plot actual nᵢ on a linear axis while changing temperature, band gap and effective density of states. A second graph explains the approximately linear inverse-temperature relationship.",
      simTitle:"Calculate intrinsic carrier concentration — step by step",
      simIntro:"Calculate equilibrium electron–hole concentrations when the band gap and available states are varied.",
      temp:"Temperature T",gap:"E₉(300 K)",nc:"Nᶜ(300 K)",nv:"Nᵛ(300 K)",model:"Band-gap model",
      constant:"Fixed E₉",varshni:"Si-like E₉(T) (Varshni)",
      linear:"nᵢ(T) — linear axis",arr:"Gap and inverse temperature",
      yLinear:"nᵢ (cm⁻³)",yArr:"ln[nᵢ/√(NᶜNᵛ)]",xTemp:"T (K)",xInverse:"1000/T (K⁻¹)",
      current:"Selected temperature",egCurrent:"E₉(T)",thermal:"kT",ncCurrent:"Nᶜ(T)",nvCurrent:"Nᵛ(T)",
      product:"Geometric mean",exponent:"Boltzmann factor",result:"Calculated nᵢ",atomRatio:"Si atoms / electron",
      equal:"Intrinsic thermal equilibrium: n₀ = p₀ = nᵢ",
      instruction:"Step-by-step calculation",step1:"1. Geometric mean of available states",
      step2:"2. Exponential factor associated with thermal excitation",
      step3:"3. Free electron and hole concentration",
      compare:"What changes? (Other parameters held fixed)",
      hotter:"T +20 K",wider:"E₉ +0.10 eV",doubleNc:"Nᶜ ×2",doubleNv:"Nᵛ ×2",
      relative:"New nᵢ / current nᵢ",compLabel:"New result",
      conclusion:"A larger band gap exponentially suppresses nᵢ. Temperature affects both the density of states and thermal excitation. Doubling Nᶜ or Nᵛ multiplies nᵢ by √2, holding other quantities fixed.",
      modeNote:"The Si-like option applies only the silicon Varshni gap correction (α=4.73×10⁻⁴ eV/K, β=636 K). Both modes scale Nᶜ and Nᵛ as T³ᐟ². Moving the E₉, Nᶜ or Nᵛ sliders creates a hypothetical parameter set, not a prediction for another actual material.",
      refNote:"With Nᶜ(300)=2.8×10¹⁹ and Nᵛ(300)=1.04×10¹⁹ cm⁻³ and E₉=1.12 eV, the model yields nᵢ ≈ 6.7×10⁹ cm⁻³. The lecture's ≈10¹⁰ cm⁻³ is the same order of magnitude; published reference nᵢ values depend on effective masses, gap and chosen empirical model.",
      validity:"This equilibrium model assumes nondegenerate (Boltzmann) occupations near approximately parabolic band edges. Doping does not directly change the material's intrinsic nᵢ: it changes equilibrium n and p, with np=nᵢ² in the ideal approximation. Illumination and applied bias may generate nonequilibrium carrier densities. The model has limits at low T and in strongly doped systems.",
      hint:"nᵢ is a number density per cm³, not a generation rate: one generated pair contains one electron and one hole.",
      kUnit:"×10¹⁹ cm⁻³",na:"Approx.",ratio:"×",labelCurrent:"Selected T"
    }
  };
  const escape=s=>String(s).replace(/[&<>"']/g, ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  function compute(p){
    const T=Number(p.T),eg300=Number(p.eg300),nc300=Number(p.nc300),nv300=Number(p.nv300);
    if(![T,eg300,nc300,nv300].every(Number.isFinite)||T<180||T>550||eg300<=0||nc300<=0||nv300<=0)throw Error("Invalid parameters");
    const varshni=p.gapMode==="varshni";
    const eg=eg300+(varshni?ALPHA*(300**2/(300+BETA)-T**2/(T+BETA)):0);
    const multiplier=(T/300)**1.5;
    const nc=nc300*1e19*multiplier, nv=nv300*1e19*multiplier;
    const states=Math.sqrt(nc*nv),boltz=Math.exp(-eg/(2*K*T));
    return {T,eg,nc,nv,states,boltz,ni:states*boltz,kt:K*T,
      gapExponent:-eg/(2*K*T),inverse:1000/T, lnRatio:-eg/(2*K*T)};
  }
  const sc=(n,precision=2)=>{
    if(n===0)return "0";
    if(!Number.isFinite(n))return "—";
    const exp=Math.floor(Math.log10(Math.abs(n)));
    if(exp>=-2&&exp<=3)return Number(n.toPrecision(precision+1)).toLocaleString("en-US",{maximumFractionDigits:3});
    const base=Number((n/10**exp).toPrecision(precision+1));
    return base+"×10"+String(exp).replace(/[-0-9]/g,c=>({"-":"⁻","0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹"}[c]));
  };
  function controls(p,l){
    const slider=(field,title,min,max,step,unit)=>{
      const val=Number(p[field]),fmt=field==="T"?String(val):val.toFixed(field==="eg300"?2:2);
      return '<label class="ni-control"><span>'+escape(title)+' <output data-ni-out="'+field+'">'+fmt+' '+escape(unit)+'</output></span>'+
        '<input type="range" data-ni-control="'+field+'" min="'+min+'" max="'+max+'" step="'+step+'" value="'+val+'"/></label>';
    };
    return '<div class="ni-controls">'+slider("T",l.temp,200,500,5,"K")+
      slider("eg300",l.gap,.85,1.55,.01,"eV")+
      slider("nc300",l.nc,.5,5,.1,l.kUnit)+
      slider("nv300",l.nv,.5,5,.1,l.kUnit)+
      '<label class="ni-control"><span>'+escape(l.model)+'</span>'+
      '<select data-ni-control="gapMode"><option value="constant"'+(p.gapMode==="constant"?' selected':'')+'>'+escape(l.constant)+'</option>'+
      '<option value="varshni"'+(p.gapMode==="varshni"?' selected':'')+'>'+escape(l.varshni)+'</option></select></label></div>';
  }
  function svgChart({lo,hi,yMin,yMax,fn,marker,xLabel,yLabel,yScientific=false,tickCount=4}){
    const W=780,H=310,L=119,R=27,U=22,D=68, pw=W-L-R,ph=H-U-D;
    const xp=x=>L+(x-lo)/(hi-lo)*pw,yp=y=>U+(yMax-y)/(yMax-yMin)*ph;
    const path=Array.from({length:181},(_,i)=>{
      const x=lo+(hi-lo)*i/180, y=Math.max(yMin,Math.min(yMax,fn(x)));
      return (i?"L":"M")+xp(x).toFixed(2)+" "+yp(y).toFixed(2);
    }).join(" ");
    const yTick=(y)=>yScientific?sc(y,2):Number(y.toFixed(2)).toString();
    const yLines=Array.from({length:tickCount+1},(_,i)=>{
      const v=yMin+(yMax-yMin)*i/tickCount;
      const py=yp(v);
      return '<line class="ni-grid" x1="'+L+'" x2="'+(W-R)+'" y1="'+py+'" y2="'+py+'"/>'+
        '<text class="ni-tick" x="'+(L-9)+'" y="'+(py+5)+'" text-anchor="end">'+escape(yTick(v))+'</text>';
    }).join("");
    const xLines=Array.from({length:5},(_,i)=>{
      const val=lo+(hi-lo)*i/4,px=xp(val);
      return '<line class="ni-grid" x1="'+px+'" x2="'+px+'" y1="'+U+'" y2="'+(H-D)+'"/>'+
        '<text class="ni-tick" x="'+px+'" y="'+(H-D+24)+'" text-anchor="middle">'+(Number(val.toFixed(2)))+'</text>';
    }).join("");
    const mx=xp(Math.max(lo,Math.min(hi,marker))),my=yp(Math.max(yMin,Math.min(yMax,fn(Math.max(lo,Math.min(hi,marker))))));
    return '<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+escape(yLabel+' / '+xLabel)+'" class="ni-chart">'+
      yLines+xLines+'<path class="ni-line" d="'+path+'"/>'+
      '<line class="ni-marker-line" x1="'+mx+'" y1="'+U+'" x2="'+mx+'" y2="'+(H-D)+'"/>'+
      '<circle class="ni-marker" cx="'+mx+'" cy="'+my+'" r="6"/>'+
      '<text x="'+(W/2)+'" y="'+(H-9)+'" text-anchor="middle" class="ni-axis">'+escape(xLabel)+'</text>'+
      '<text x="15" y="16" text-anchor="start" class="ni-axis">'+escape(yLabel)+'</text></svg>';
  }
  function readouts(p,l){
    const m=compute(p);
    return '<div class="ni-readouts">'+[
      [l.current,m.T+" K"],[l.result,sc(m.ni)+" cm⁻³"],[l.egCurrent,m.eg.toFixed(4)+" eV"],
      [l.thermal,m.kt.toFixed(4)+" eV"],[l.ncCurrent,sc(m.nc)+" cm⁻³"],[l.nvCurrent,sc(m.nv)+" cm⁻³"]
    ].map(([name,value])=>'<div class="ni-readout"><span>'+escape(name)+'</span><strong>'+escape(value)+'</strong></div>').join("")+'</div>';
  }
  function graphs(p,l){
    const lo=Math.max(200,p.T-65),hi=Math.min(500,p.T+65);
    const atT=T=>compute({...p,T}).ni;
    let yMax=atT(hi)*1.10;
    const exp=Math.floor(Math.log10(yMax)),unit=10**exp;
    yMax=([1,2,2.5,5,10].find(x=>x>=yMax/unit-1e-12)||10)*unit;
    const graph1=svgChart({lo,hi,yMin:0,yMax,fn:atT,marker:p.T,xLabel:l.xTemp,yLabel:l.yLinear,yScientific:true});
    const a0=2,a1=5;
    const ry=x=>compute({...p,T:1000/x}).lnRatio;
    const vals=Array.from({length:101},(_,i)=>ry(a0+(a1-a0)*i/100));
    const min=Math.min(...vals),max=Math.max(...vals),margin=Math.max(1,(max-min)*.10);
    const graph2=svgChart({lo:a0,hi:a1,yMin:min-margin,yMax:max+margin,fn:ry,marker:1000/p.T,xLabel:l.xInverse,yLabel:l.yArr});
    return '<div class="ni-plot-grid">'+
      '<div class="ni-plot"><h4>'+escape(l.linear)+'</h4>'+graph1+'</div>'+
      '<div class="ni-plot"><h4>'+escape(l.arr)+'</h4>'+graph2+'</div></div>'+
      readouts(p,l)+'<p class="ni-footnote">'+escape(l.refNote)+'</p>'+
      '<p class="ni-footnote">'+escape(l.modeNote)+'</p>';
  }
  function simulation(p,l){
    const m=compute(p),energy=m.gapExponent;
    const nextT=Math.min(500,p.T+20);
    const cases=[
      [l.hotter.replace("20",String(nextT-p.T))+" ("+nextT+" K)",{...p,T:nextT}],
      [l.wider,{...p,eg300:Math.min(1.65,p.eg300+.10)}],
      [l.doubleNc,{...p,nc300:p.nc300*2}],
      [l.doubleNv,{...p,nv300:p.nv300*2}]
    ];
    return '<div class="ni-equation-hero">nᵢ = √(NᶜNᵛ) · exp[−E₉/(2kT)]</div>'+
      '<h4>'+escape(l.instruction)+'</h4>'+
      '<div class="ni-step-grid">'+
      '<div class="ni-step"><span>'+escape(l.step1)+'</span><strong>√('+sc(m.nc)+' × '+sc(m.nv)+') = '+sc(m.states)+' cm⁻³</strong></div>'+
      '<div class="ni-step"><span>'+escape(l.step2)+'</span><strong>exp('+energy.toFixed(3)+') = '+sc(m.boltz,3)+'</strong></div>'+
      '<div class="ni-step"><span>'+escape(l.step3)+'</span><strong>'+sc(m.states)+' × '+sc(m.boltz,3)+' = '+sc(m.ni)+' cm⁻³</strong></div></div>'+
      '<div class="ni-equal">'+escape(l.equal)+'</div>'+
      '<div class="ni-readouts">'+
      '<div class="ni-readout"><span>'+escape(l.result)+'</span><strong>'+sc(m.ni)+' cm⁻³</strong></div>'+
      '<div class="ni-readout"><span>'+escape(l.atomRatio)+'</span><strong>'+sc(N_SI/m.ni,2)+'</strong></div>'+
      '<div class="ni-readout"><span>'+escape(l.egCurrent)+'</span><strong>'+m.eg.toFixed(4)+' eV</strong></div></div>'+
      '<h4>'+escape(l.compare)+'</h4>'+
      '<div class="ni-compare">'+cases.map(([title,settings])=>{
        const newValue=compute(settings).ni;
        return '<div class="ni-case"><strong>'+escape(title)+'</strong>'+
          '<span>'+escape(l.compLabel)+': '+sc(newValue)+' cm⁻³</span>'+
          '<span>'+escape(l.relative)+': <b>'+sc(newValue/m.ni,3)+' '+escape(l.ratio)+'</b></span></div>';
      }).join("")+'</div>'+
      '<p class="ni-footnote">'+escape(l.conclusion)+'</p>'+
      '<p class="ni-footnote">'+escape(l.hint)+'</p>'+
      '<p class="ni-footnote">'+escape(l.validity)+'</p>'+
      '<p class="ni-footnote">'+escape(l.modeNote)+'</p>';
  }
  function mount({container,language="tr",tabId}){
    if(!container || !["grafikler","simulasyonlar"].includes(tabId))return false;
    const lang=language==="en"?"en":"tr",l=translations[lang],p={...defaults};
    const section=container.querySelector(".lab-section");
    if(!section)return false;
    const card=document.createElement("section");
    card.className="lab-card intrinsic-lab";
    card.innerHTML='<header class="ni-head"><h3>'+escape(tabId==="grafikler"?l.graphTitle:l.simTitle)+'</h3>'+
      '<p>'+escape(tabId==="grafikler"?l.graphIntro:l.simIntro)+'</p></header>'+
      controls(p,l)+'<div data-ni-output aria-live="polite"></div>';
    const output=card.querySelector("[data-ni-output]");
    const draw=()=>{output.innerHTML=tabId==="grafikler"?graphs(p,l):simulation(p,l);};
    card.querySelectorAll("[data-ni-control]").forEach(input=>{
      input.addEventListener(input.tagName==="SELECT"?"change":"input",()=>{
        const key=input.dataset.niControl;p[key]=key==="gapMode"?input.value:Number(input.value);
        const value=card.querySelector('[data-ni-out="'+key+'"]');
        if(value)value.textContent=(key==="T"?p[key].toFixed(0):p[key].toFixed(2))+
          " "+(key==="T"?"K":key==="eg300"?"eV":l.kUnit);
        draw();
      });
    });
    draw();
    section.insertBefore(card,section.children[1]||null);
    return true;
  }
  window.IntrinsicDensityLab={compute,mount,defaults:()=>({...defaults})};
})();