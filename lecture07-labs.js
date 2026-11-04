/* Lecture 07 — slide-grounded, dependency-free interactive figures and labs.
 * Sources: lec07.pdf, especially pp. 10–20, 22–24, 28–46, 48–55.
 * Teaching models only: equilibrium, nondegenerate Si, isolated shallow dopants,
 * E_g=1.12 eV (constant), n_i(300 K)=9.65e9 cm^-3.
 * g=1 is the didactic reference; g_D=2/g_A=4 are comparison values.
 */
(() => {
  "use strict";
  const m = window.Lecture0506Model;
  if (!m) {
    window.Lecture07Lab = { error: "Lecture0506Model missing", mount: () => false,
      figure: () => "", chartKinds: [] };
    return;
  }
  const EG = m.EG, K = m.K, ED = m.ED, EA = m.EA;
  const color = ["var(--accent)", "#ba655b", "#39826a", "#8067a8"];
  const chartKinds = ["levels", "dos", "ionization", "neutrality", "fermi",
    "temperature", "arrhenius", "compensation"];
  const labels = {
    tr: {
      charts: "07 · ETKİLEŞİMLİ GRAFİKLER",
      sims: "07 · FİZİK LABORATUVARLARI",
      help: "Ne görmeliyim?", check: "Kendini kontrol et", assumptions: "Model varsayımları",
      models: "Referans: g=1, nᵢ(300 K)=9,65×10⁹ cm⁻³, E_g=1,12 eV sabit.",
      caution: "Seyreltik, sığ katkı ve non-degenerate termal denge varsayımı. Bant daralması, ağır katkı, kusur tuzakları ve gerçek hareketlilik modellenmez.",
      levels: ["Katkılı bant diyagramı",
        "E_D ve E_A sabitken katkı türü ile E_F'nin nasıl değiştiğini incele.",
        "Donör E_c'ye, akseptör E_v'ye yakındır. E_F ise yük nötrlüğünden bulunur.",
        "E_F, elektronun bulunmak zorunda olduğu bir izinli durum mudur?", "Hayır; yasak bantta da olabilir."],
      dos: ["Katkılı kristalde DOS ve safsızlık seviyeleri",
        "Parabolik bant kenarları ve dar, yerel katkı seviyeleri karşılaştırması.",
        "Bant DOS'u süreklidir; ideal seyreltik katkı seviyesi bir delta tepesidir.",
        "Delta tepesinin yüksekliği mi alanı mı N_D'dir?", "Alanı N_D (cm⁻³)'tür; çizim ölçekli değildir."],
      ionization: ["Donör iyonlaşması — g=1 ve g_D=2",
        "x=(E_D−E_F)/kT değerini değiştir ve yüzdeleri kıyasla.",
        "E_F donör seviyesinin altına indikçe iyonlaşma artar. g=1 fizikte başlangıç modelidir.",
        "g=1 değerini 2 yapınca hangi sonuç değişir?", "Yük nötrlüğü değil, sayısal iyonlaşma yüzdesi."],
      neutrality: ["Fermi seviyesi: yük nötrlüğü kesişimi",
        "Deneme E_F noktasında negatif ve pozitif yük yoğunluklarını karşılaştır.",
        "E_F, n=p+N_D⁺ denkleminin sağlandığı kesişimdir; keyfî seçilmez.",
        "Mavi eğri pozitif toplamın altındaysa ne yapılır?", "E_F artırılır; iletim elektronları artar."],
      fermi: ["Fermi seviyesi – katkı yoğunluğu",
        "300 K yakınında 10 kat katkının neden yaklaşık 60 meV kayma verdiğini gözle.",
        "Boltzmann ve tam iyonlaşma varsayımlarında E_F ∝ ln N. Kenara yaklaşıldığında geçerlilik kaybolur.",
        "10 kat katkı artışı neden sabit enerji kayması verir?", "ln(10N)−ln(N)=ln 10 olduğu için."],
      temperature: ["Üç sıcaklık rejimi: n(T)",
        "10¹⁵, 10¹⁶ ve 10¹⁷ cm⁻³ donörler için düşük T, plato ve öz rejim.",
        "Freeze-out: kısmi iyonlaşma; ekstrinsik: n≈N_D; yüksek T: n ve p öz taşıyıcılara yaklaşır.",
        "Plato neden yüksek sıcaklıkta devam etmez?", "Bantlar arası termal elektron–hol çiftleri baskınlaşır."],
      arrhenius: ["Arrhenius: log n – 1000/T",
        "Soğuk sağda, sıcak solda; eğimler iyonlaşma enerjisi ve bant aralığı ile ilgilidir.",
        "Freeze-out'ta eğim ~−E_ion/(2k); öz bölgede ~−E_g/(2k). T'ye bağlı prefaktörler vardır.",
        "Neden grafiğin sağı düşük sıcaklıktır?", "Çünkü 1000/T büyüdükçe T küçülür."],
      compensation: ["Kompanzasyon: n, p ve nᵢ",
        "Aynı numunede sıcaklığı değiştirirken çoğunluk/azınlık taşıyıcıları izle.",
        "Net katkı taşıyıcı tipini, toplam iyonlaşmış katkı ise saçılma merkezi sayısını etkiler.",
        "Tam kompanzasyonda iyonların hepsi kaybolur mu?", "Hayır; n≈p≈nᵢ olsa da yüklü katkılar kalabilir."],
      compare: ["Laboratuvar 1 — g=1 ve standart g karşılaştırması",
        "T, N_D ve N_A değerlerini değiştir; iki modeli aynı koşullarda karşılaştır.",
        "Donör/akseptör mekanizması aynı kalır, sayısal kısmi iyonlaşma farklı olur.",
        "77 K'de g=1 ile g_D=2 neden farklıdır?", "Mikrodurumların sayımı doluluk oranını değiştirir."],
      freeze: ["Laboratuvar 2 — freeze-out denklemi",
        "Yalnız donörlü numunede pozitif kökü tam yük dengesiyle karşılaştır.",
        "Karekök yaklaşımı soğukta geçerlidir; öz elektron–hol çiftleri artınca bozulur.",
        "Neden ikinci dereceden denklemin negatif kökü alınmaz?", "Negatif serbest elektron yoğunluğu fiziksel değildir."],
      compensationLab: ["Laboratuvar 3 — kompanzasyon çözücüsü",
        "300 ve 600 K örneklerini, net katkıyı ve iyonlaşmış merkezleri incele.",
        "600 K'de termal taşıyıcılar artar; net katkı ile çoğunluk yoğunluğu artık aynı olmak zorunda değildir.",
        "N_D=N_A iken n=p olması iyonların sıfır olduğu anlamına gelir mi?", "Hayır. Zıt yüklü katkı iyonları birbirini dengeler."],
      T: "Sıcaklık", Nd: "Donör yoğunluğu", Na: "Akseptör yoğunluğu",
      trial: "Deneme E_F−E_v", x: "(E_D−E_F)/kT", type: "Numune",
      intrinsic: "Öz", donor: "n-tipi", acceptor: "p-tipi",
      model: "İstatistiksel model", course: "g=1 (ders modeli)", standard: "g_D=2 / g_A=4",
      preset: "Hazır deneyler", preset77: "77 K — freeze-out", preset300: "300 K — ekstrinsik",
      preset600: "600 K — kompanzasyon", presetEqual: "Tam kompanzasyon",
      reset: "Başlangıca dön", predicted: "Tahmin", result: "Hesap sonucu",
      percent: "iyonlaşmış", majority: "Çoğunluk", donors: "Donör", acceptors: "Akseptör",
      samples: "Kaynak: lec07.pdf, slayt 10–55.",
      regimes: ["Kısmi iyonlaşma", "Ekstrinsik", "Öz etkiler"],
      noteRef: "Not: 07. slaytlardaki bazı örneklerde klasik nᵢ(300 K)=1,5×10¹⁰ alınır. Bu grafikler önceki uygulamayla tutarlı 9,65×10⁹ referansını kullanır; sayısal sonuçlar farklı olabilir.",
      notValid: "3kT/Boltzmann sınırına yakın veya dışında: bu sonuç yaklaşık modelin güvenilir bölgesi dışında.",
      noFreeze: "Bu noktada p artık ihmal edilemeyebilir; freeze-out kapalı formülü yerine tam denge çözümü kullanılır.",
      exact: "Yük nötrlüğü ve n·p=nᵢ² birlikte sağlanır.",
      compareHint: "Düşük sıcaklıkta g seçimi fark yaratır. Oda sıcaklığında donörlerin çoğu iyonlaşmışsa iki tahmin birbirine yaklaşır."
    },
    en: {
      charts: "07 · INTERACTIVE GRAPHS",
      sims: "07 · PHYSICS LABORATORIES",
      help: "What to notice", check: "Check your understanding", assumptions: "Model assumptions",
      models: "Reference: g=1, nᵢ(300 K)=9.65×10⁹ cm⁻³, constant E_g=1.12 eV.",
      caution: "Dilute shallow impurities and nondegenerate equilibrium. Band-gap narrowing, heavy doping, traps and mobility are not modeled.",
      levels: ["Extrinsic band diagram",
        "Change the sample type and see how E_F shifts while E_D/E_A stay fixed.",
        "Donors are near E_c, acceptors near E_v; neutrality determines E_F.",
        "Must E_F coincide with an allowed state?", "No. It may lie inside the band gap."],
      dos: ["DOS and impurity levels",
        "Compare parabolic band edges with localized shallow impurity states.",
        "Band DOS is continuous; an ideal dilute impurity level is a delta peak.",
        "Is the delta peak's height or area N_D?", "Its integrated area is N_D (cm⁻³); the sketch is not to scale."],
      ionization: ["Donor ionization — g=1 versus g_D=2",
        "Change x=(E_D−E_F)/kT and compare both ionized fractions.",
        "Ionization rises as E_F drops below E_D. g=1 is a useful teaching reference.",
        "What changes if g changes from 1 to 2?", "The numeric ionization fraction, not the neutrality principle."],
      neutrality: ["Finding E_F by charge neutrality",
        "Move a trial E_F and compare negative versus positive charge.",
        "E_F is the intersection where n=p+N_D⁺, not an arbitrary selection.",
        "What if the electron curve is below the positive charge?", "Raise E_F to increase conduction electrons."],
      fermi: ["Fermi level versus doping",
        "Explore why tenfold doping changes E_F by about 60 meV near 300 K.",
        "For complete ionization and Boltzmann statistics E_F∝ln N. Near band edges this approximation breaks down.",
        "Why is a decade a fixed energy shift?", "Because ln(10N)−ln(N)=ln 10."],
      temperature: ["Three temperature regimes: n(T)",
        "Compare 10¹⁵, 10¹⁶ and 10¹⁷ cm⁻³ donors across temperature.",
        "Freeze-out: partial ionization; extrinsic: n≈N_D; intrinsic: thermally generated pairs dominate.",
        "Why does the extrinsic plateau end?", "Interband electron–hole generation becomes significant."],
      arrhenius: ["Arrhenius: log n versus 1000/T",
        "Cold is to the right, hot to the left; slopes reveal activation energies.",
        "Freeze-out slope ~−E_ion/(2k), intrinsic slope ~−E_g/(2k), with temperature prefactors.",
        "Why is the right side colder?", "1000/T increases as temperature falls."],
      compensation: ["Compensation: n, p and nᵢ",
        "Vary temperature in a sample containing both donors and acceptors.",
        "Net doping sets polarity; total ionized impurities affect scattering.",
        "Do charged ions disappear at perfect compensation?", "No; free carriers may be intrinsic-like even with charged dopants."],
      compare: ["Lab 1 — g=1 versus standard factors",
        "Change temperature and both dopant concentrations and compare models.",
        "The mechanism is unchanged, but incomplete-ionization fractions can differ.",
        "Why do g=1 and g_D=2 differ at 77 K?", "Their microscopic multiplicity corrections differ."],
      freeze: ["Lab 2 — freeze-out equation",
        "For donors only, compare the positive quadratic root with full neutrality.",
        "The cold approximation fails when thermal minority carriers matter.",
        "Why is the negative root discarded?", "Negative electron concentration is unphysical."],
      compensationLab: ["Lab 3 — compensation solver",
        "Study 300 K, 600 K, net doping and total ionized impurities.",
        "At 600 K thermal carriers increase; majority concentration need not equal net doping.",
        "If N_D=N_A and n=p, are all impurity ions gone?", "No; oppositely charged impurities can balance."],
      T: "Temperature", Nd: "Donor concentration", Na: "Acceptor concentration",
      trial: "Trial E_F−E_v", x: "(E_D−E_F)/kT", type: "Sample",
      intrinsic: "Intrinsic", donor: "n-type", acceptor: "p-type",
      model: "Statistics model", course: "g=1 (teaching)", standard: "g_D=2 / g_A=4",
      preset: "Ready-made experiments", preset77: "77 K — freeze-out", preset300: "300 K — extrinsic",
      preset600: "600 K — compensated", presetEqual: "Perfect compensation",
      reset: "Reset", predicted: "Prediction", result: "Calculated",
      percent: "ionized", majority: "Majority", donors: "Donors", acceptors: "Acceptors",
      samples: "Source: lec07.pdf, slides 10–55.",
      regimes: ["Partial ionization", "Extrinsic", "Intrinsic influence"],
      noteRef: "Note: some lecture 07 examples use the older nᵢ(300 K)=1.5×10¹⁰ reference. These plots retain 9.65×10⁹ from the earlier app; numeric results may differ.",
      notValid: "Near or outside the 3kT/Boltzmann validity range; treat this as an extrapolation.",
      noFreeze: "Minority holes may not be negligible; use the full neutrality solution instead of the freeze-out quadratic.",
      exact: "Charge neutrality and n·p=nᵢ² are both satisfied.",
      compareHint: "At low temperature the g correction matters. At room temperature, nearly complete ionization makes the estimates converge."
    }
  };
  const esc = x => String(x).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = x => {
    if (!Number.isFinite(x)) return "—";
    if (x === 0) return "0";
    if (Math.abs(x) >= 1e4 || Math.abs(x) < .01) {
      const ex = x.toExponential(2).split("e");
      return ex[0] + " × 10^" + Number(ex[1]);
    }
    return Number(x.toPrecision(4)).toLocaleString("en-US");
  };
  const sample = (a,b,fn,steps=100) => Array.from({length:steps+1},(_,i)=>{
    const x = a+(b-a)*i/steps; return [x,fn(x)];
  });
  const log = v => Math.log10(Math.max(1e-200,v));
  const solve = (T,Nd,Na,g=1) => m.neutrality(T,Nd,Na,g,g===1?1:4);
  // Use the same conduction-band relation as the charge-balance plot. The
  // separate measured n_i(300 K) reference need not reproduce Nc,Nv,Eg exactly.
  const energy = state => EG-m.kT(state.T)*Math.log(m.nc(state.T)/state.n);
  const inRange = state => {
    const Ef = energy(state), d=3*m.kT(state.T);
    return Ef >= d && EG-Ef >= d;
  };
  function svgLines({series,xMin,xMax,yMin,yMax,xAxis,yAxis,xTicks=[],yTicks=[],marks=[]}) {
    const W=746,H=320,L=75,R=15,TOP=22,B=53;
    const X=x=>L+(x-xMin)/(xMax-xMin)*(W-L-R),Y=y=>TOP+(yMax-y)/(yMax-yMin)*(H-TOP-B);
    const ticks = yTicks.map(v=>'<line x1="'+L+'" y1="'+Y(v)+'" x2="'+(W-R)+'" y2="'+Y(v)+'" class="l56-grid"/>'+
      '<text x="'+(L-7)+'" y="'+(Y(v)+4)+'" text-anchor="end" class="l56-tick">'+esc(Number(v.toFixed(2)))+'</text>').join("")+
      xTicks.map(v=>'<line x1="'+X(v)+'" y1="'+TOP+'" x2="'+X(v)+'" y2="'+(H-B)+'" class="l56-grid"/>'+
      '<text x="'+X(v)+'" y="'+(H-B+17)+'" text-anchor="middle" class="l56-tick">'+esc(Number(v.toFixed(2)))+'</text>').join("");
    const curves = series.map((s,i)=>{
      const points = s.points.filter(p=>Number.isFinite(p[0])&&Number.isFinite(p[1]))
        .map(([x,y])=>X(Math.min(xMax,Math.max(xMin,x))).toFixed(1)+","+Y(Math.min(yMax,Math.max(yMin,y))).toFixed(1)).join(" ");
      return '<polyline fill="none" points="'+points+'" stroke="'+(s.color||color[i%color.length])+
        '" stroke-width="2.7" stroke-linejoin="round" stroke-linecap="round"'+(s.dash?' stroke-dasharray="7 5"':'')+'/>';
    }).join("");
    const lines = marks.map(v=>'<line x1="'+X(v)+'" y1="'+TOP+'" x2="'+X(v)+'" y2="'+(H-B)+'" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="5 4"/>').join("");
    const legend = series.map((s,i)=>'<span class="l56-legend-item"><i style="background:'+(s.color||color[i%color.length])+'"></i>'+esc(s.name)+'</span>').join("");
    return '<div class="l56-plot l07-plot"><svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+esc(yAxis+" / "+xAxis)+'">'+
      ticks+lines+curves+'<line x1="'+L+'" y1="'+TOP+'" x2="'+L+'" y2="'+(H-B)+'" class="l56-axis"/>'+
      '<line x1="'+L+'" y1="'+(H-B)+'" x2="'+(W-R)+'" y2="'+(H-B)+'" class="l56-axis"/>'+
      '<text x="'+(W/2)+'" y="'+(H-10)+'" text-anchor="middle" class="l56-axis-label">'+esc(xAxis)+'</text>'+
      '<text x="16" y="'+H/2+'" transform="rotate(-90 16 '+H/2+')" text-anchor="middle" class="l56-axis-label">'+esc(yAxis)+'</text></svg>'+
      '<div class="l56-legend">'+legend+'</div></div>';
  }
  function bandDiagram(type="n",exp=16,T=300) {
    const N=10**exp,Nd=type==="n"?N:0,Na=type==="p"?N:0;
    const state=solve(T,Nd,Na),Ef=energy(state),Ei=EG/2+m.kT(T)/2*Math.log(m.nv(T)/m.nc(T));
    const H=315, y=e=>278-213*(e/EG), line=(v,name,stroke,dash="") =>
      '<line x1="80" x2="620" y1="'+y(v)+'" y2="'+y(v)+'" stroke="'+stroke+'" stroke-width="2.8"'+
      (dash?' stroke-dasharray="8 5"':'')+'/>'+
      '<text x="628" y="'+(y(v)+4)+'" fill="var(--ink-soft)" font-size="13">'+esc(name)+'</text>';
    return '<svg class="l07-bands" viewBox="0 0 746 '+H+'" role="img" aria-label="Silicon extrinsic semiconductor band levels">'+
      '<rect x="80" y="'+y(EG)+'" width="540" height="'+(y(EG-0.07)-y(EG))+'" fill="var(--accent-soft)"/>'+
      '<rect x="80" y="'+y(.07)+'" width="540" height="'+(y(0)-y(.07))+'" fill="var(--surface-alt)"/>'+
      line(EG,"E_c","#497f9c")+line(EG-ED,"E_D","#39826a","dash")+
      line(Ef,"E_F","#ba655b")+line(Ei,"E_i","#8067a8","dash")+
      line(EA,"E_A","#b68b4b","dash")+line(0,"E_v","#497f9c")+
      '<text x="88" y="28" fill="var(--ink-soft)" font-size="13">E ↑ (eV)</text>'+
      '<text x="100" y="303" fill="var(--muted)" font-size="12">E_g=1.12 eV · E_D=E_c−0.045 eV · E_A=E_v+0.045 eV</text></svg>';
  }
  function dosPlot(mode="both") {
    const series = [
      {name:"N_c(E)",points:sample(-.15,1.27,E=>E<EG?0:Math.sqrt((E-EG)/.15))},
      {name:"N_v(E)",points:sample(-.15,1.27,E=>E>0?0:Math.sqrt(-E/.15)),color:color[1]}
    ];
    // The spikes have arbitrary display height: the area, not plotted height, counts impurity states.
    if (mode!=="p")series.push({name:"E_D · N_Dδ(E−E_D)",points:[[EG-ED-.006,0],[EG-ED,0.9],[EG-ED+.006,0]],color:color[2]});
    if (mode!=="n")series.push({name:"E_A · N_Aδ(E−E_A)",points:[[EA-.006,0],[EA,.9],[EA+.006,0]],color:color[3]});
    return svgLines({series,xMin:-.15,xMax:1.27,yMin:0,yMax:1.1,
      xAxis:"E−E_v (eV)",yAxis:"N(E) / schematic",xTicks:[0,.045,.4,.8,1.075,1.12],
      yTicks:[0,.5,1]});
  }
  function chart(kind,lang,settings={}) {
    const b=labels[lang], T=Number(settings.T??300), N=10**Number(settings.exp??16), Na=10**Number(settings.naExp??16);
    if(kind==="levels") {
      const type=settings.type||"n";
      const s=solve(300,type==="n"?N:0,type==="p"?N:0);
      return {visual:bandDiagram(type,Number(settings.exp??16)),
        detail:"E_F−E_v = "+energy(s).toFixed(3)+" eV · n = "+fmt(s.n)+" cm⁻³ · p = "+fmt(s.p)+" cm⁻³",
        warning:inRange(s)?"":b.notValid};
    }
    if(kind==="dos")return {visual:dosPlot(settings.type||"both"),
      detail:lang==="tr"?"Yasak bantta N(E) idealde 0; katkı tepesinin alanı N_D veya N_A'dır.":"Ideal gap DOS is zero; impurity peak area counts N_D or N_A."};
    if(kind==="ionization"){
      const x=Number(settings.x??3),p1=100/(1+Math.exp(-x)),p2=100/(1+2*Math.exp(-x));
      return {visual:svgLines({series:[
        {name:"g=1",points:sample(-5,8,z=>100/(1+Math.exp(-z)))},
        {name:"g_D=2",points:sample(-5,8,z=>100/(1+2*Math.exp(-z))),color:color[1]}],
        xMin:-5,xMax:8,yMin:0,yMax:100,xAxis:"x=(E_D−E_F)/kT",yAxis:lang==="tr"?"İyonlaşmış (%)":"Ionized (%)",
        xTicks:[-4,-2,0,2,4,6,8],yTicks:[0,25,50,75,100],marks:[x]}),
        detail:"x="+x.toFixed(1)+" · g=1: "+p1.toFixed(1)+"% · g_D=2: "+p2.toFixed(1)+"%"};
    }
    if(kind==="neutrality"){
      const Nd=N,g=1,trial=Number(settings.trial??.91),fixed=solve(300,Nd,0,g);
      const f=ef=>{
        const n=m.nc(300)*Math.exp((ef-EG)/m.kT(300)),
          p=m.ni(300)**2/n,
          d=Nd/(1+g*(n/m.nc(300))*Math.exp(ED/m.kT(300)));
        return {n,p,d,pos:p+d};
      };
      const s=f(trial), ef=energy(fixed);
      return {visual:svgLines({series:[
        {name:"n₀ (−)",points:sample(.52,1.06,x=>log(f(x).n))},
        {name:"p₀+N_D⁺ (+)",points:sample(.52,1.06,x=>log(f(x).pos)),color:color[1]}],
        xMin:.52,xMax:1.06,yMin:8,yMax:19,xAxis:"E_F−E_v (eV)",yAxis:"log₁₀ cm⁻³",
        xTicks:[.55,.65,.75,.85,.95,1.05],yTicks:[8,10,12,14,16,18],marks:[ef,trial]}),
        detail:"E_F (denge / equilibrium) = "+ef.toFixed(4)+" eV · "+
          "trial: n="+fmt(s.n)+" · p+N_D⁺="+fmt(s.pos)+" cm⁻³",
        warning:trial<ef?(lang==="tr"?"Denemede elektron az: E_F artır.":"Too few electrons: increase E_F."):
          trial>ef?(lang==="tr"?"Denemede elektron fazla: E_F azalt.":"Too many electrons: decrease E_F."):""};
    }
    if(kind==="fermi"){
      const D=Number(settings.T??300), d=m.kT(D);
      const pN=sample(13,19,x=>[x,EG-d*Math.log(m.nc(D)/10**x)]),
            pP=sample(13,19,x=>[x,d*Math.log(m.nv(D)/10**x)]);
      return {visual:svgLines({series:[
        {name:"n-type",points:pN,color:color[0]},
        {name:"p-type",points:pP,color:color[1]}],
        xMin:13,xMax:19,yMin:0,yMax:EG,xAxis:"log₁₀ N (cm⁻³)",
        yAxis:"E_F−E_v (eV)",xTicks:[13,14,15,16,17,18,19],yTicks:[0,.28,.56,.84,1.12]}),
        detail:"kT ln10 = "+(d*Math.log(10)*1e3).toFixed(1)+" meV / decade",
        warning:lang==="tr"?
          "Çizgilerin bant kenarına 3kT'den fazla yaklaştığı kısımlar Boltzmann yaklaşımının dışındadır.":
          "Parts of the lines within 3kT of a band edge exceed Boltzmann accuracy."};
    }
    if(kind==="temperature"||kind==="arrhenius"){
      const inverse=kind==="arrhenius",lo=inverse?1.3:40,hi=inverse?25:770;
      const f=x=>inverse?1000/x:x;
      const NdVals=[1e15,1e16,1e17],curve=NdVals.map((Nd,i)=>({
        name:"N_D=10^"+(15+i),
        points:sample(lo,hi,x=>log(solve(f(x),Nd,0,1).n)),color:color[i]
      }));
      curve.push({name:"nᵢ(T)",points:sample(lo,hi,x=>log(m.ni(f(x)))),color:color[3],dash:true});
      return {visual:svgLines({series:curve,
        xMin:lo,xMax:hi,yMin:7,yMax:20,xAxis:inverse?"1000/T (K⁻¹)":"T (K)",
        yAxis:"log₁₀ n (cm⁻³)",xTicks:inverse?[2,5,10,15,20,25]:[100,200,300,400,500,600,700],
        yTicks:[8,10,12,14,16,18,20]}),
        detail:inverse?
          (lang==="tr"?"1000/T ekseninde sağ taraf soğuk, sol taraf sıcaktır.":"With 1000/T, the right side is cold and the left side is hot."):
          (lang==="tr"?"T arttıkça freeze-out → ekstrinsik plato → öz rejim izlenir.":"As T rises, observe freeze-out → extrinsic plateau → intrinsic regime.")};
    }
    if(kind==="compensation"){
      const selectedT=Number(settings.T??600);
      const series=[
        {name:"p₀",points:sample(250,800,x=>log(solve(x,5e15,1e16,1).p))},
        {name:"n₀",points:sample(250,800,x=>log(solve(x,5e15,1e16,1).n)),color:color[1]},
        {name:"nᵢ(T)",points:sample(250,800,x=>log(m.ni(x))),color:color[2],dash:true}
      ];
      const s=solve(selectedT,5e15,1e16,1);
      return {visual:svgLines({series,xMin:250,xMax:800,yMin:3,yMax:19,
        xAxis:"T (K)",yAxis:"log₁₀ cm⁻³",xTicks:[300,400,500,600,700,800],
        yTicks:[4,7,10,13,16,19],marks:[selectedT]}),
        detail:"T="+selectedT+" K · p="+fmt(s.p)+" · n="+fmt(s.n)+" cm⁻³",
        warning:inRange(s)?"":b.notValid};
    }
    return {visual:"",detail:""};
  }
  function numberInput(title,key,value,min,max,step,unit="") {
    return '<label class="l56-control"><span>'+esc(title)+' <strong data-read="'+key+'"></strong></span>'+
      '<input aria-label="'+esc(title)+'" type="range" data-control="'+key+'" min="'+min+'" max="'+max+'" step="'+step+'" value="'+value+'" data-unit="'+esc(unit)+'"></label>';
  }
  function selectInput(title,key,options) {
    return '<label class="l56-control"><span>'+esc(title)+'</span><select data-control="'+key+'">'+
      options.map(o=>'<option value="'+esc(o[0])+'">'+esc(o[1])+'</option>').join("")+'</select></label>';
  }
  function guidance(key,lang) {
    const b=labels[lang],t=b[key];
    return '<div class="l07-learning"><strong>'+esc(b.help)+'</strong><p>'+esc(t[2])+'</p></div>'+
      '<details class="l07-check"><summary>'+esc(b.check)+': '+esc(t[3])+'</summary><p>'+esc(t[4])+'</p></details>';
  }
  function card(key,lang,controls,body="") {
    const b=labels[lang],t=b[key];
    return '<article class="l56-card l07-card" data-activity="'+key+'">'+
      '<div class="l56-card-head"><span class="lab-card-index">'+(chartKinds.indexOf(key)>=0?chartKinds.indexOf(key)+1:["compare","freeze","compensationLab"].indexOf(key)+1)+'</span>'+
      '<div><h3>'+esc(t[0])+'</h3><p>'+esc(t[1])+'</p></div></div>'+
      (controls?'<div class="l56-controls l07-controls">'+controls+'</div>':"")+
      '<div class="l07-visual" data-visual>'+body+'</div><div class="l07-output" data-output aria-live="polite"></div>'+
      guidance(key,lang)+'</article>';
  }
  function stat(name,value) {
    return '<div class="l56-stat"><small>'+esc(name)+'</small><strong>'+esc(value)+'</strong></div>';
  }
  function presets(lang) {
    const b=labels[lang];
    return '<div class="l07-presets" role="group" aria-label="'+esc(b.preset)+'">'+
      [['cold',b.preset77],['room',b.preset300],['warm',b.preset600],['equal',b.presetEqual]].
      map(([id,name])=>'<button type="button" class="lab-secondary-button" data-preset="'+id+'">'+esc(name)+'</button>').join("")+'</div>';
  }
  function simControls(kind,lang) {
    const b=labels[lang],shared=numberInput(b.T,"T",kind==="compare"?77:kind==="freeze"?77:300,40,800,1," K")+
      numberInput("log₁₀ N_D (cm⁻³)","nd",kind==="freeze"?15:kind==="compensationLab"?15.7:15,13,17,.1);
    if(kind==="freeze")return presets(lang)+shared+
      selectInput(b.model,"g",[["1",b.course],["2",b.standard]]);
    return presets(lang)+shared+numberInput("log₁₀ N_A (cm⁻³) · 0 = yok / none","na",
      kind==="compensationLab"?16:0,0,17,.1);
  }
  function read(card,key,def) {
    const ctl=card.querySelector('[data-control="'+key+'"]');
    return ctl?Number(ctl.value):def;
  }
  function labelInputs(card) {
    card.querySelectorAll("input[data-control]").forEach(el=>{
      const out=card.querySelector('[data-read="'+el.dataset.control+'"]');
      if(out)out.textContent=el.dataset.control==="T"?el.value+" K":
        el.dataset.control==="nd"||el.dataset.control==="na"?
          (Number(el.value)===0?"0":fmt(10**Number(el.value))+" cm⁻³"):
          Number(el.value).toFixed(el.dataset.control==="trial"?3:1);
    });
  }
  function validity(s,lang) {
    return inRange(s)?"":labels[lang].notValid;
  }
  function simUpdate(card,kind,lang) {
    const b=labels[lang],T=read(card,"T",300),Nd=10**read(card,"nd",15),
      Na=kind==="freeze"?0:(read(card,"na",0)===0?0:10**read(card,"na",0));
    const one=solve(T,Nd,Na,1),standard=solve(T,Nd,Na,2);
    const u=card.querySelector("[data-visual]"),out=card.querySelector("[data-output]");
    const info=[];
    if(kind==="compare"){
      const left=stat("g=1 · n₀",fmt(one.n)+" cm⁻³")+
        stat("g=1 · p₀",fmt(one.p)+" cm⁻³")+
        stat("g=1 · N_D⁺/N_D",(one.donorFraction*100).toFixed(1)+"%")+
        stat("g=1 · N_A⁻/N_A",Na?(one.acceptorFraction*100).toFixed(1)+"%":"—");
      const right=stat("g_D=2/g_A=4 · n₀",fmt(standard.n)+" cm⁻³")+
        stat("g_D=2/g_A=4 · p₀",fmt(standard.p)+" cm⁻³")+
        stat("g_D=2 · N_D⁺/N_D",(standard.donorFraction*100).toFixed(1)+"%")+
        stat("g_A=4 · N_A⁻/N_A",Na?(standard.acceptorFraction*100).toFixed(1)+"%":"—");
      u.innerHTML='<div class="l07-compare-grid"><div><h4>'+esc(b.course)+'</h4><div class="l07-stats">'+left+'</div></div>'+
        '<div><h4>'+esc(b.standard)+'</h4><div class="l07-stats">'+right+'</div></div></div>';
      info.push(b.compareHint);
      out.innerHTML='<p>'+esc(info.join(" "))+'</p>';
    }else if(kind==="freeze"){
      const g=read(card,"g",1),s=g===1?one:standard;
      const ncp=m.nc(T)/g*Math.exp(-m.ED/m.kT(T));
      const positive=2*Nd/(1+Math.sqrt(1+4*Nd/ncp));
      u.innerHTML='<div class="l07-stats">'+
        stat("N′_c",fmt(ncp)+" cm⁻³")+
        stat("x (quadratic)",(positive/Nd*100).toFixed(2)+"%")+
        stat("n₀ (quadratic)",fmt(positive)+" cm⁻³")+
        stat("n₀ (full)",fmt(s.n)+" cm⁻³")+
        stat("p₀",fmt(s.p)+" cm⁻³")+
        stat("E_c−E_F",(EG-energy(s)).toFixed(4)+" eV")+
        stat("E_F−E_i",s.efMinusEi.toFixed(4)+" eV")+
        stat("n·p/nᵢ²",(s.n*s.p/(s.ni*s.ni)).toFixed(5))+'</div>';
      info.push(s.p/s.n>.02?b.noFreeze:b.exact);
      const vr=validity(s,lang);if(vr)info.push(vr);
      out.innerHTML='<p>'+esc(info.join(" "))+'</p>';
    }else {
      const net=Nd-Na,s=one,ir=one.donors+one.acceptors;
      const maj=s.n>s.p?"n":s.p>s.n?"p":"n≈p";
      u.innerHTML='<div class="l07-stats">'+
        stat("N_D−N_A",fmt(net)+" cm⁻³")+
        stat("N_D⁺+N_A⁻",fmt(ir)+" cm⁻³")+
        stat("n₀",fmt(s.n)+" cm⁻³")+
        stat("p₀",fmt(s.p)+" cm⁻³")+
        stat(b.majority,maj)+
        stat("N_D⁺/N_D",(s.donorFraction*100).toFixed(1)+"%")+
        stat("N_A⁻/N_A",Na?(s.acceptorFraction*100).toFixed(1)+"%":"—")+
        stat("E_F−E_i",s.efMinusEi.toFixed(4)+" eV")+
        stat("n·p/nᵢ²",(s.n*s.p/(s.ni*s.ni)).toFixed(5))+'</div>';
      info.push(b.exact);
      const vr=validity(s,lang);if(vr)info.push(vr);
      out.innerHTML='<p>'+esc(info.join(" "))+'</p>';
    }
    labelInputs(card);
  }
  function applyPreset(card,preset,kind) {
    const values={
      cold:{T:77,nd:15,na:0,g:1},
      room:{T:300,nd:16,na:0,g:1},
      warm:{T:600,nd:15.7,na:16,g:1},
      equal:{T:300,nd:16,na:16,g:1}
    }[preset];
    if(!values)return;
    for(const [key,value] of Object.entries(values)){
      const control=card.querySelector('[data-control="'+key+'"]');
      if(control)control.value=String(value);
    }
  }
  function chartControls(kind,lang) {
    const b=labels[lang];
    if(kind==="levels")return selectInput(b.type,"type",[["n",b.donor],["p",b.acceptor],["i",b.intrinsic]])+
      numberInput("log₁₀ N (cm⁻³)","exp",16,13,17,.1);
    if(kind==="dos")return selectInput(b.type,"type",[["both","n + p"],["n",b.donor],["p",b.acceptor]]);
    if(kind==="ionization")return numberInput(b.x,"x",3,-5,8,.1);
    if(kind==="neutrality")return numberInput("log₁₀ N_D (cm⁻³)","exp",16,14,17,.1)+
      numberInput(b.trial,"trial",.91,.52,1.06,.005," eV");
    if(kind==="fermi")return numberInput(b.T,"T",300,200,550,10," K");
    if(kind==="compensation")return numberInput(b.T,"T",600,250,800,10," K");
    return "";
  }
  function chartUpdate(card,kind,lang) {
    const settings={type:card.querySelector('[data-control="type"]')?.value,
      exp:read(card,"exp",16),x:read(card,"x",3),T:read(card,"T",300),trial:read(card,"trial",.91)};
    const result=chart(kind,lang,settings);
    card.querySelector("[data-visual]").innerHTML=result.visual;
    card.querySelector("[data-output]").textContent=[result.detail,result.warning].filter(Boolean).join(" · ");
    labelInputs(card);
  }
  function figure(kind,language="tr") {
    const lang=language==="en"?"en":"tr",b=labels[lang];
    if(!chartKinds.includes(kind))return "";
    const t=b[kind],result=chart(kind,lang);
    return '<figure class="l56-topic-figure l07-topic"><figcaption>'+esc(t[0])+'</figcaption>'+
      result.visual+'<p class="l56-note">'+esc(t[2])+'</p></figure>';
  }
  function mount({lessonId,tabId,language,container}) {
    if(lessonId!=="07"||!["grafikler","simulasyonlar"].includes(tabId))return false;
    const lang=language==="en"?"en":"tr",b=labels[lang];
    const root=document.createElement("div");
    root.className="l56-section l07-section";
    root.innerHTML='<p class="eyebrow">'+esc(tabId==="grafikler"?b.charts:b.sims)+'</p>'+
      '<p class="l07-models">'+esc(b.models)+'</p>';
    const keys=tabId==="grafikler"?chartKinds:["compare","freeze","compensationLab"];
    for(const key of keys){
      const controls=tabId==="grafikler"?chartControls(key,lang):simControls(key,lang);
      root.insertAdjacentHTML("beforeend",card(key,lang,controls));
    }
    root.insertAdjacentHTML("beforeend",'<div class="l07-assumptions"><strong>'+esc(b.assumptions)+
      '</strong><p>'+esc(b.caution)+'</p><p>'+esc(b.noteRef)+'</p><small>'+esc(b.samples)+'</small></div>');
    container.replaceChildren(root);
    for(const el of root.querySelectorAll("[data-activity]")){
      const kind=el.dataset.activity;
      const update=()=>{try{
        if(chartKinds.includes(kind))chartUpdate(el,kind,lang);
        else simUpdate(el,kind,lang);
      }catch(error){
        console.error("Lecture 07 activity error",kind,error);
        el.querySelector("[data-visual]").textContent=lang==="tr"?
          "Hesaplama gösterilemedi. Parametreleri varsayılan değerlere döndürün.":
          "Calculation could not be displayed. Restore the default parameters.";
      }};
      el.addEventListener("input",update);
      el.addEventListener("change",update);
      el.querySelectorAll("[data-preset]").forEach(button=>{
        button.addEventListener("click",()=>{applyPreset(el,button.dataset.preset,kind);update();});
      });
      update();
    }
    return true;
  }
  window.Lecture07Lab = {mount,figure,chartKinds,chart,solve,applyPreset};
})();