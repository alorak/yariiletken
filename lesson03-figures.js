/* Educational diagrams for Part 3 (Electron & Hole).
 * Source framing: lec03.pdf. SVGs are original illustrations; the bond-energy
 * convergence analogy is explicitly labeled qualitative rather than a literal
 * microscopic mechanism. All displayed strings have TR/EN counterparts. */
(() => {
  "use strict";
  const H = {
    tr: {
      interference: {
        title: "Enerji nereden gelir? Örgü dalgalarının girişimi",
        summary: "Her atomun titreşimi kristalde elastik dalgalara katkı verir. Farklı kaynaklardan gelen dalgalar üst üste biner; yerel genlik artabilir.",
        left: "İki dalga kaynağı", right: "Yerel girişim", note: "Dersin dalga girişimi anlatımı nitel bir benzetmedir. Elektronun bantlar arasında uyarılması, gerçek kristalde enerji ve momentum korunumu ile kuantum mekaniksel geçişler üzerinden açıklanır; belli sayıda fononun tek bağda birleşmesi zorunlu bir mekanizma değildir.",
        caption: "Dalgaların üst üste binmesi ≠ kimyasal Si–Si bağını doğrudan 1,12 eV ile koparmak"
      },
      dipole: {
        title: "Titreşen atom, salınan dipol ve foton",
        summary: "Pozitif yük merkezinin elektron bulutuna göre yer değiştirdiği bir sistemde dipol momenti zamanla değişebilir. Salınan elektrik dipolü EM ışınımı üretebilir.",
        stages: ["− yük merkezi", "+ yük merkezi", "EM dalgası"],
        note: "Önemli sınır: saf Si merkez simetrili ve apolar olduğu için tek-fonon elektrik-dipol kızılötesi soğurumu birinci mertebede yasaklıdır; her Si örgü titreşimi ışınım yapan bir dipol değildir. Termal elektromanyetik ışınım ile örgü fononlarını da eşitlememek gerekir.",
        types: ["Fonon · örgü titreşimi", "Foton · EM alan kuantumu", "Elektron · iletim taşıyıcısı", "Hol · eksik valans elektronu"]
      },
      generation: {
        title: "Üretim ve yeniden birleşme — bant geçişleri",
        gen: "Üretim (generation)", rec: "Yeniden birleşme (recombination)",
        genText: "Enerji alan valans elektronu iletim bandına geçer ve valans bandında hol bırakır.",
        recText: "İletim elektronu bir valans boşluğunu doldurur: serbest elektron–hol çifti ortadan kalkar.",
        conduction: "İletim bandı", valence: "Valans bandı",
        note: "Bu bant şeması olayların yönünü gösterir; Si dolaylı bant aralıklı olduğundan fotonla geçişte fonon/momentum koşulları önemlidir. Rekombinasyon enerjisi ışık, fononlar veya başka taşıyıcılara aktarılabilir. Dengede toplam üretim ve rekombinasyon hızları eşittir."
      },
      scattering: {
        title: "Saçılma mı, yeniden birleşme mi?",
        scatter: "Saçılma (scattering)", rec: "Yeniden birleşme (recombination)",
        scatterText: "Taşıyıcı yol değiştirir veya enerji aktarır; serbest elektron–hol çifti zorunlu olarak kaybolmaz.",
        recText: "Bir iletim elektronu valans holünü doldurur; serbest elektron–hol çiftinin sayısı azalır.",
        mobility: "Saçılma → momentum gevşemesi, mobilite", lifetime: "Rekombinasyon → taşıyıcı yaşam süresi",
        note: "Her karşılaşma yeniden birleşme değildir. Fonon ve iyonize safsızlık saçılması taşınımı etkiler; SRH, ışınımsal ve Auger rekombinasyonu ayrı taşıyıcı yok olma kanallarıdır."
      },
      bond: {
        title: "Bağ modeli: dolu bağ → boş bağ (hol)",
        before: "Dolu kovalent bağlar", after: "Uyarılmış elektron + boş bağ",
        note: "Düzlemsel çizim, gerçek 3B diamond-kübik Si kristalinin öğretici bir izdüşümüdür. Uyarılan elektronun valans durumunda bıraktığı boşluk hol olarak davranır. Bu model çift üretimini açıklar, fakat durum yoğunluğunu ve taşıyıcı doluluk istatistiğini nicel hesaplamaz."
      },
      mass: {
        title: "Etkin kütle — aynı kuvvet, farklı yanıt",
        electron: "Elektron · yaklaşık iletkenlik etkin kütlesi",
        hole: "Hol · yaklaşık iletkenlik etkin kütlesi",
        curve: "Bant eğriliği E(k)", note: "Si için yaklaşık iletkenlik değerleri örnektir, tüm yönlerde geçerli tek bir skaler kütle değildir. Si elektron bantları anizotropiktir; hol bantları da çoklu bantlıdır. Durum yoğunluğu etkin kütlesi farklı tanımlanır. Kavram Ders 04–05'te daha nicel incelenecek."
      },
      concentration: {
        title: "nᵢ ne kadar küçük? 300 K'de Si",
        atoms: "cm³ başına Si atomu", carriers: "cm³ başına öz elektron (ve hol)",
        ratio: "Yaklaşık her 5×10¹² atom başına 1 iletim elektronu",
        note: "Sayılar mertebe örneğidir: nᵢ ≈ 10¹⁰ cm⁻³, Si atom yoğunluğu ≈ 5×10²² cm⁻³. Bir elektron–hol çifti üretimi bir elektron ve bir hol oluşturur; nᵢ, elektron ve hol için ayrı ayrı yoğunluğu belirtir."
      },
      equation: {
        title: "Bağ modeli denklem olarak — neden ln(nᵢ) ∝ 1/T?",
        qualitative: "Nitel olasılık modeli", quantitative: "Bant modelindeki nicel ifade",
        chart: "Doğrusal ilişki: ln(nᵢ/N) – 1/T", x: "1/T (K⁻¹)", y: "ln(nᵢ/N)",
        note: "Ders slaytındaki nᵢ = N·p^(E/kT) bir sezgisel oyuncak modeldir: p<1 seçilir, model p'yi hesaplamaz. Buradaki örnek eğri yalnızca p=0,5 ve E=1,1 eV için çizilir; 1,1 eV kimyasal Si–Si bağ kopma enerjisi olarak sunulmaz. Nicel öz taşıyıcı hesabı, √(NᶜNᵛ)·exp[−Eᵍ/(2kT)] ve geçerli bant varsayımlarıyla yapılır. 1/T grafiğindeki eğim bant modelinde sıcaklığa bağlı prefaktör nedeniyle yalnızca yaklaşık sabittir."
      }
    },
    en: {
      interference: {
        title: "Where does the energy come from? Lattice-wave interference",
        summary: "Each vibrating atom contributes to elastic disturbances in the crystal. Waves from multiple sources superpose and their local amplitudes can become larger.",
        left: "Two wave sources", right: "Local interference", note: "The wave-convergence story from the lecture is a qualitative analogy. Actual electronic transitions follow quantum mechanics and energy/momentum conservation; a particular number of phonons need not literally gather on one bond.",
        caption: "Wave superposition is not the same as breaking a Si–Si chemical bond using 1.12 eV"
      },
      dipole: {
        title: "A vibrating atom as an oscillating dipole",
        summary: "If the positive and negative charge centers move relative to each other, the dipole moment changes with time. An oscillating electric dipole can radiate electromagnetic waves.",
        stages: ["Negative charge center", "Positive charge center", "EM wave"],
        note: "Important limit: pure centrosymmetric, nonpolar Si has no first-order one-phonon electric-dipole infrared absorption; not every Si lattice vibration acts as a radiating dipole. Thermal electromagnetic radiation and lattice phonons are distinct phenomena.",
        types: ["Phonon · lattice vibration", "Photon · EM-field quantum", "Electron · conduction carrier", "Hole · missing valence electron"]
      },
      generation: {
        title: "Generation and recombination — band transitions",
        gen: "Generation", rec: "Recombination",
        genText: "An energized valence electron reaches the conduction band, leaving behind a valence-band hole.",
        recText: "A conduction electron fills a valence-band vacancy: the free electron–hole pair disappears.",
        conduction: "Conduction band", valence: "Valence band",
        note: "This diagram shows transition directions, not transition probabilities. Silicon has an indirect band gap, so phonon/momentum constraints matter in optical transitions. Recombination energy may go to light, phonons or other carriers. At equilibrium the overall generation and recombination rates balance."
      },
      scattering: {
        title: "Scattering versus recombination",
        scatter: "Scattering", rec: "Recombination",
        scatterText: "A carrier changes trajectory or transfers energy; the electron–hole pair does not necessarily disappear.",
        recText: "A conduction electron fills a valence hole; the number of free electron–hole pairs decreases.",
        mobility: "Scattering → momentum relaxation and mobility", lifetime: "Recombination → carrier lifetime",
        note: "Not every encounter causes recombination. Phonon and ionized-impurity scattering affect transport; SRH, radiative and Auger recombination are distinct pair-removal pathways."
      },
      bond: {
        title: "Bond model: filled bond → vacant bond (hole)",
        before: "Filled covalent bonds", after: "Excited electron + vacant bond",
        note: "This flat cartoon is an educational projection, not the actual 3D diamond-cubic Si structure. Excitation leaves a missing valence state described as a hole. The model explains pair generation but cannot quantitatively calculate density of states or occupation statistics."
      },
      mass: {
        title: "Effective mass — same force, different response",
        electron: "Electron · approximate conductivity effective mass",
        hole: "Hole · approximate conductivity effective mass",
        curve: "Band curvature E(k)", note: "These are illustrative Si conductivity-mass values, not universal scalar masses along all crystal axes. Silicon has anisotropic electron valleys and multiple hole bands. Density-of-states effective mass is a different definition. See Lessons 04–05 for details."
      },
      concentration: {
        title: "How large is nᵢ? Silicon at 300 K",
        atoms: "Si atoms per cm³", carriers: "Intrinsic electrons (and holes) per cm³",
        ratio: "About 1 conduction electron per 5×10¹² atoms",
        note: "Orders-of-magnitude example: nᵢ ≈ 10¹⁰ cm⁻³, Si atomic density ≈ 5×10²² cm⁻³. Generation of one electron–hole pair creates one of each; nᵢ is the density of electrons and, separately, the density of holes."
      },
      equation: {
        title: "The model as an equation — why ln(nᵢ) scales with 1/T",
        qualitative: "Qualitative probability model", quantitative: "Quantitative band-model expression",
        chart: "Linear trend: ln(nᵢ/N) vs 1/T", x: "1/T (K⁻¹)", y: "ln(nᵢ/N)",
        note: "The lecture's nᵢ = N·p^(E/kT) is a qualitative toy model: p<1 is assumed, not derived. The illustrated curve uses p=0.5 and E=1.1 eV solely as example parameters; 1.1 eV is not asserted to be the Si–Si chemical bond-dissociation energy. Quantitative intrinsic carrier density uses √(NᶜNᵛ)·exp[−Eᵍ/(2kT)] with appropriate band assumptions. In the band model the 1/T slope is only approximately constant because of the temperature-dependent prefactor."
      }
    }
  };
  const escape = s => String(s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const txt = (x,y,text,clazz="l03-text",anchor="middle") =>
    '<text x="'+x+'" y="'+y+'" text-anchor="'+anchor+'" class="'+clazz+'">'+escape(text)+'</text>';
  function frame(kind,d,body) {
    return '<figure class="lesson-figure l03-figure" data-figure="'+kind+'">'+
      '<figcaption>'+escape(d.title)+'</figcaption>'+body+
      '<p class="lesson-figure-note">'+escape(d.note)+'</p></figure>';
  }
  function ripple(d) {
    const circles=[132,340].flatMap(x=>Array.from({length:6},(_,i)=>
      '<circle cx="'+x+'" cy="110" r="'+(20+i*24)+'" class="l03-wave-circle"/>')).join("");
    return '<div class="l03-wave-layout"><svg viewBox="0 0 475 226" role="img" aria-label="'+escape(d.title)+'">'+
      '<defs><clipPath id="l03-wave-clip"><rect x="6" y="6" width="463" height="210" rx="8"/></clipPath></defs>'+
      '<rect x="6" y="6" width="463" height="210" rx="8" class="l03-svg-paper"/>'+
      '<g clip-path="url(#l03-wave-clip)">'+circles+'</g>'+
      '<circle cx="132" cy="110" r="6" class="l03-dot"/><circle cx="340" cy="110" r="6" class="l03-dot"/>'+
      '<ellipse cx="236" cy="110" rx="49" ry="77" class="l03-overlap"/>'+
      '</svg><div class="l03-diagram-copy"><strong>'+escape(d.left)+' → '+escape(d.right)+'</strong>'+
      '<p>'+escape(d.summary)+'</p><p class="l03-muted">'+escape(d.caption)+'</p></div></div>';
  }
  function dipole(d) {
    const path=Array.from({length:85},(_,i)=>{
      const x=382+i*3.05,y=110-31*Math.sin((i/84)*5*Math.PI);
      return (i===0?'M':'L')+x.toFixed(1)+','+y.toFixed(1);
    }).join(' ');
    return '<svg viewBox="0 0 690 215" role="img" aria-label="'+escape(d.title)+'">'+
      '<rect x="15" y="20" width="653" height="171" rx="10" class="l03-svg-paper"/>'+
      '<ellipse cx="127" cy="108" rx="84" ry="60" class="l03-cloud"/>'+
      '<circle cx="156" cy="108" r="20" class="l03-nucleus"/>'+txt(156,114,'+','l03-charge')+
      '<circle cx="116" cy="108" r="8" class="l03-negative"/>'+
      '<path d="M122 138 L159 138 m-9 -8 9 8 -9 8" class="l03-arrow"/>'+
      txt(136,164,'p(t)','l03-small')+
      '<path d="'+path+'" class="l03-em-line"/>'+txt(525,49,d.stages[2],'l03-small')+
      txt(127,33,d.stages[0]+' / '+d.stages[1],'l03-small')+
      '</svg><div class="l03-facts">'+d.types.map(s=>'<span>'+escape(s)+'</span>').join('')+'</div>';
  }
  function bandDiagram(d,up) {
    const x=178;
    return '<svg viewBox="0 0 356 254" role="img" aria-label="'+escape(up?d.gen:d.rec)+'">'+
      '<rect x="23" y="37" width="310" height="57" rx="7" class="l03-band-conduction"/>'+
      '<rect x="23" y="170" width="310" height="57" rx="7" class="l03-band-valence"/>'+
      txt(39,57,d.conduction,'l03-band-name','start')+
      txt(39,191,d.valence,'l03-band-name','start')+
      '<circle cx="'+x+'" cy="'+(up?185:67)+'" r="15" class="l03-electron"/>'+txt(x,(up?191:73),'−','l03-charge')+
      (up?'<circle cx="'+x+'" cy="69" r="15" class="l03-hole"/>'+
          '<path d="M178 154 V111 m-7 9 7 -9 7 9" class="l03-arrow"/>':
          '<circle cx="'+x+'" cy="185" r="15" class="l03-hole"/>'+
          '<path d="M178 111 V154 m-7 -9 7 9 7 -9" class="l03-arrow"/>')+
      '<text x="279" y="141" text-anchor="middle" class="l03-small">Eᵍ</text>'+
      '</svg>';
  }
  function transition(d) {
    const cards=[["gen",d.gen,d.genText,true],["rec",d.rec,d.recText,false]];
    return '<div class="l03-two-panel">'+cards.map(([id,title,description,up])=>
      '<div class="l03-diagram-panel"><strong>'+escape(title)+'</strong>'+
      bandDiagram(d,up)+'<p>'+escape(description)+'</p></div>').join('')+'</div>';
  }
  function scattering(d) {
    const scatter='<svg viewBox="0 0 340 180" role="img" aria-label="'+escape(d.scatter)+'">'+
      '<path d="M25 137 L139 95 L168 96 L281 26" class="l03-motion"/>'+
      '<circle cx="161" cy="95" r="18" class="l03-scatterer"/>'+txt(161,101,'●','l03-small')+
      '<circle cx="109" cy="106" r="14" class="l03-electron"/>'+txt(109,111,'−','l03-charge')+
      '<circle cx="247" cy="49" r="14" class="l03-electron"/>'+txt(247,54,'−','l03-charge')+
      '</svg>';
    const recomb='<svg viewBox="0 0 340 180" role="img" aria-label="'+escape(d.rec)+'">'+
      '<path d="M32 60 H159 M307 130 H185" class="l03-motion"/>'+
      '<circle cx="84" cy="60" r="15" class="l03-electron"/>'+txt(84,66,'−','l03-charge')+
      '<circle cx="254" cy="130" r="15" class="l03-hole"/>'+txt(254,136,'+','l03-charge')+
      '<circle cx="172" cy="91" r="15" class="l03-neutral"/>'+
      '<path d="M157 76 L187 106 M187 76 L157 106" class="l03-cross"/>'+
      '</svg>';
    return '<div class="l03-two-panel"><div class="l03-diagram-panel"><strong>'+escape(d.scatter)+'</strong>'+scatter+
      '<p>'+escape(d.scatterText)+'</p><span class="l03-panel-tag">'+escape(d.mobility)+'</span></div>'+
      '<div class="l03-diagram-panel"><strong>'+escape(d.rec)+'</strong>'+recomb+
      '<p>'+escape(d.recText)+'</p><span class="l03-panel-tag">'+escape(d.lifetime)+'</span></div></div>';
  }
  function bonding(d) {
    function cell(broken) {
      const points=[[147,25],[147,160],[45,93],[249,93]];
      return '<svg viewBox="0 0 300 185" role="img" aria-label="'+escape(broken?d.after:d.before)+'">'+
        points.map(([x,y],i)=>'<line x1="147" y1="93" x2="'+x+'" y2="'+y+'" class="'+(broken&&i===1?'l03-broken':'l03-bond-line')+'"/>').join('')+
        points.map(([x,y])=>'<circle cx="'+x+'" cy="'+y+'" r="14" class="l03-bond-atom"/>').join('')+
        '<circle cx="147" cy="93" r="18" class="l03-nucleus"/>'+txt(147,99,'Si','l03-charge')+
        (broken?'<circle cx="147" cy="146" r="11" class="l03-hole"/>'+txt(147,152,'+','l03-charge')+
          '<circle cx="246" cy="30" r="12" class="l03-electron"/>'+txt(246,36,'−','l03-charge')+
          '<path d="M158 137 Q197 48 234 32" class="l03-arrow"/>':'')+
        '</svg>';
    }
    return '<div class="l03-two-panel">'+[[d.before,false],[d.after,true]].map(([title,broken])=>
      '<div class="l03-diagram-panel"><strong>'+escape(title)+'</strong>'+cell(broken)+'</div>').join('')+'</div>';
  }
  function effectiveMass(d) {
    const W=520,H=240;const curve=(a,c)=>Array.from({length:81},(_,i)=>{
      const k=(i-40)/40;
      const x=50+i*5.4,y=198-a*k*k*160;
      return (i===0?'M':'L')+x.toFixed(1)+','+y.toFixed(1);
    }).join(" ");
    return '<div class="l03-mass-stats"><div><strong>0.26 m₀</strong><span>'+escape(d.electron)+'</span></div>'+
      '<div><strong>0.35–0.37 m₀</strong><span>'+escape(d.hole)+'</span></div></div>'+
      '<svg viewBox="0 0 '+W+' '+H+'" class="l03-mass-plot" role="img" aria-label="'+escape(d.curve)+'">'+
      '<path d="M48 26 V201 H489" class="l03-axes"/>'+
      '<path d="'+curve(.8)+'" class="l03-mass-curve-a"/>'+
      '<path d="'+curve(.47)+'" class="l03-mass-curve-b"/>'+
      txt(268,228,'k','l03-small')+txt(35,18,'E','l03-small')+
      txt(360,43,d.curve,'l03-small')+'</svg>'+
      '<div class="l03-equation">m* = ℏ² / (d²E/dk²) <small>(1D, parabolic band)</small></div>';
  }
  function intrinsicSize(d) {
    return '<div class="l03-stat-grid">'+[
      ["5×10²²",d.atoms],["≈10¹⁰",d.carriers],["1 / (5×10¹²)",d.ratio]
    ].map(([num,label])=>'<div class="l03-stat"><strong>'+num+'</strong><span>'+escape(label)+'</span></div>').join('')+'</div>';
  }
  function equation(d) {
    const k=8.617333262145e-5, E=1.1, probability=.5;
    const values=Array.from({length:91},(_,i)=>{
      const T=250+i*(250/90);
      return {x:1/T,y: (E/(k*T))*Math.log(probability)};
    });
    const minX=.002,maxX=.004,minY=-37,maxY=-14;
    const pos=p=>[60+(p.x-minX)/(maxX-minX)*520,30+(maxY-p.y)/(maxY-minY)*206];
    const path=values.map((p,i)=>{const [x,y]=pos(p);return (i?'L':'M')+x.toFixed(1)+','+y.toFixed(1)}).join(' ');
    const ticks=[.002,.0025,.003,.0035,.004].map(x=>{
      const xx=60+(x-minX)/(maxX-minX)*520;
      return '<line x1="'+xx+'" y1="30" x2="'+xx+'" y2="236" class="l03-grid"/>'+
        txt(xx,257,x.toFixed(4),'l03-axis-label');
    }).join('');
    return '<div class="l03-equation-grid"><div class="l03-equation-card"><strong>'+escape(d.qualitative)+'</strong>'+
      '<div class="l03-equation">nᵢ = N · p<sup>E / kT</sup></div>'+
      '<div class="l03-equation">ln(nᵢ / N) = (E ln p / k) · (1/T)</div>'+
      '</div><div class="l03-equation-card"><strong>'+escape(d.quantitative)+'</strong>'+
      '<div class="l03-equation">nᵢ = √(N<sub>c</sub>N<sub>v</sub>) · exp[−E<sub>g</sub>/(2kT)]</div></div></div>'+
      '<svg class="l03-model-plot" viewBox="0 0 620 295" role="img" aria-label="'+escape(d.chart)+'">'+
      '<path d="M60 30 V236 H590" class="l03-axes"/>'+ticks+
      [ -35,-30,-25,-20,-15 ].map(y=>'<line x1="60" y1="'+(30+(maxY-y)/(maxY-minY)*206)+'" x2="580" y2="'+(30+(maxY-y)/(maxY-minY)*206)+'" class="l03-grid"/>'+txt(44,34+(maxY-y)/(maxY-minY)*206,String(y),'l03-axis-label')).join('')+
      '<path d="'+path+'" class="l03-model-line"/>'+txt(321,289,d.x,'l03-axis-label')+
      txt(11,24,d.y,'l03-axis-label','start')+'</svg>';
  }
  const handlers={interference:ripple,dipole,generation:transition,scattering,bond:bonding,mass:effectiveMass,concentration:intrinsicSize,equation};
  function render(kind,locale="tr") {
    const lang=locale==="en"?"en":"tr";
    const d=H[lang][kind];const fn=handlers[kind];
    return d&&fn ? frame(kind,d,fn(d)) : "";
  }
  window.Lesson03Figures={render};
})();