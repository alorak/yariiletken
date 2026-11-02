/* Lesson visual explanations — 2D bond-model drawing, classifications, equilibrium and a
 * qualitative introduction to majority carriers across temperature regimes.
 * These are explanatory diagrams, not a numerical crystal or transport solver. */
(() => {
  "use strict";

  const copy = {
    tr: {
      classification: {
        title: "Pure · Intrinsic · Extrinsic — üç farklı soru",
        items: [
          {head:"Saf (Pure)", detail:"Kristal ne kadar kusursuz ve safsızlıktan arınmış?", tag:"Yapısal özellik"},
          {head:"Öz (Intrinsic)", detail:"Termal dengede taşıyıcılar eşit mi? n₀ = p₀ = nᵢ", tag:"Taşıyıcı rejimi"},
          {head:"Katkılı (Extrinsic)", detail:"Donör/akseptörler hangi taşıyıcıyı baskın kılıyor?", tag:"Katkı etkisi"}
        ],
        foot:"Saflık ile öz rejim aynı ölçüt değildir. Dışarıdan aydınlatılmış saf bir kristal termal dengede olmayabilir. Katkılı bir kristal de yüksek sıcaklıkta öz taşıyıcı rejimine yaklaşabilir."
      },
      bond2d: {
        title:"Two-dimensional representation — iki boyutlu bağ modeli",
        left:"Öğretici 2B şema",
        right:"Gerçek Si kristali",
        atom:"Kesişim = atom",
        bond:"Çizgi parçası = bağ",
        coord:"4 en yakın komşu",
        foot:"Soldaki kare ağ gerçek diamond-kübik yapı değildir: düzlemde görülen 90° açılarını gerçek kovalent bağ açısı olarak yorumlama. Si'de bağ yönleri uzayda tetrahedral ve açı ≈109,47°'dir. 1,12 eV ise Si'nin elektronik bant aralığıdır, tek bir Si–Si kimyasal bağını koparma enerjisi olarak alınmamalıdır."
      },
      "steady-subset": {
        title:"Equilibrium ⊂ Steady state",
        outer:"Kararlı durum (Steady state)",
        inner:"Termal denge (Equilibrium)",
        outside:"Sabit kutuplamalı diyot • Sürekli aydınlatılan güneş hücresi",
        inside:"Dış uyarı yok • Makroskopik net akış yok",
        foot:"Termal dengede gözlenen nicelikler zamanla değişmez. Dışarıdan sürekli sürülen sistemde de zaman bağımlılığı kaybolabilir, ancak bu durum termal denge koşulunu sağlamaz."
      },
      "temperature-preview": {
        title:"Çoğunluk taşıyıcıları ve sıcaklık — ön bakış",
        types:"n-tipi: elektronlar çoğunluk · p-tipi: holler çoğunluk",
        bands:[
          {head:"I · Freeze-out",desc:"Düşük T: katkılar kısmen iyonlaşmıştır; taşıyıcı sayısı artar."},
          {head:"II · Extrinsic",desc:"Orta T: katkılar yaklaşık tamamen iyonlaşmıştır; n ≈ Nᴅ (uygun n-tipi koşullarda)."},
          {head:"III · Intrinsic",desc:"Yüksek T: termal elektron–hol üretimi baskınlaşır; n ve p birbirine yaklaşır."}
        ],
        foot:"Ders 06'da üç çalışma rejimi gösteriliyor. Aşağıdaki sayısal karşılaştırma, 300 K'de ve ekstrinsik rejimde geçerli basitleştirilmiş örnekler içerir; freeze-out ve intrinsik rejimler için iyonlaşma ve yük nötrlüğü yeniden hesaplanmalıdır."
      }
    },
    en: {
      classification: {
        title:"Pure · Intrinsic · Extrinsic — three distinct questions",
        items:[
          {head:"Pure",detail:"How free is the crystal of defects and impurities?",tag:"Structural property"},
          {head:"Intrinsic",detail:"At thermal equilibrium, are carriers balanced? n₀ = p₀ = nᵢ",tag:"Carrier regime"},
          {head:"Extrinsic",detail:"Which carrier type dominates because of donors/acceptors?",tag:"Doping effect"}
        ],
        foot:"Purity and intrinsic behavior are different criteria. A pure crystal under illumination need not remain in thermal equilibrium. At high enough temperatures a doped crystal may approach the intrinsic carrier regime."
      },
      bond2d:{
        title:"Two-dimensional representation — bond-model cartoon",
        left:"Teaching diagram (2D)",
        right:"Actual silicon crystal",
        atom:"Intersection = atom",
        bond:"Segment = bond",
        coord:"4 nearest neighbors",
        foot:"The square grid is not the true diamond-cubic structure: its apparent 90° angles are not real covalent bond angles. In Si, bonds are tetrahedral in 3D (≈109.47°). The 1.12 eV value denotes the electronic band gap, not the dissociation energy of one chemical Si–Si bond."
      },
      "steady-subset":{
        title:"Equilibrium ⊂ Steady state",
        outer:"Steady state",
        inner:"Thermal equilibrium",
        outside:"Constant-bias diode • Continuously illuminated solar cell",
        inside:"No external drive • No macroscopic net flux",
        foot:"In thermal equilibrium, observables do not vary with time. A continuously driven system can also become time independent while still failing the conditions for equilibrium."
      },
      "temperature-preview":{
        title:"Majority carriers versus temperature — preview",
        types:"n-type: electrons are majority · p-type: holes are majority",
        bands:[
          {head:"I · Freeze-out",desc:"Low T: dopants are only partially ionized; carrier density increases."},
          {head:"II · Extrinsic",desc:"Intermediate T: dopants are largely ionized; n ≈ Nᴅ under suitable n-type assumptions."},
          {head:"III · Intrinsic",desc:"High T: thermally generated pairs dominate; n and p approach one another."}
        ],
        foot:"Lesson 06 compares three operating regimes. The numerical example below applies to simplified conditions at 300 K in the extrinsic regime; freeze-out and intrinsic regimes require ionization and charge neutrality to be calculated again."
      }
    }
  };

  function escape(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
    }[c]));
  }

  function gridSvg(lang) {
    const label=copy[lang].bond2d;
    const intersections=[];
    const edges=[];
    for(let iy=0; iy<5; iy++){
      for(let ix=0; ix<5; ix++){
        const x=56+ix*46,y=28+iy*42;
        intersections.push('<circle cx="'+x+'" cy="'+y+'" r="'+(ix===2&&iy===2?7:4)+
          '" class="'+(ix===2&&iy===2?"bond-center":"bond-node")+'"/>');
      }
    }
    for(let i=0;i<5;i++){
      const x=56+i*46,y=28+i*42;
      edges.push('<line x1="'+x+'" y1="28" x2="'+x+'" y2="196" class="bond-grid-line"/>');
      edges.push('<line x1="56" y1="'+y+'" x2="240" y2="'+y+'" class="bond-grid-line"/>');
    }
    const active=[[148,112,102,112],[148,112,194,112],[148,112,148,70],[148,112,148,154]]
      .map(v=>'<line x1="'+v[0]+'" y1="'+v[1]+'" x2="'+v[2]+'" y2="'+v[3]+'" class="bond-highlight"/>').join("");
    const tetra=[[1,1,1],[1,-1,-1],[-1,1,-1],[-1,-1,1]];
    const coords=tetra.map(([x,y,z])=>{
      const rx=x*.83+z*.55,ry=y*.82-z*.3;
      return [465+rx*62,119-ry*62];
    });
    const links=coords.map(([x,y])=>'<line x1="465" y1="119" x2="'+x.toFixed(1)+'" y2="'+y.toFixed(1)+'" class="bond-tetra-link"/>').join("");
    const atoms=coords.map(([x,y])=>'<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="12" class="bond-tetra-node"/>').join("");
    return '<svg class="bond-lesson-svg" viewBox="0 0 650 240" role="img" aria-label="'+escape(label.left+" / "+label.right)+'">'+
      '<title>'+escape(label.title)+'</title>'+
      edges.join("")+active+intersections.join("")+
      links+atoms+'<circle cx="465" cy="119" r="17" class="bond-tetra-core"/>'+
      '<text x="465" y="123" text-anchor="middle" class="bond-tetra-text">Si</text>'+
      '<text x="148" y="224" text-anchor="middle" class="bond-figure-label">'+escape(label.left)+'</text>'+
      '<text x="465" y="224" text-anchor="middle" class="bond-figure-label">'+escape(label.right)+'</text></svg>';
  }

  function render(kind,lang="tr"){
    const l=lang==="en"?"en":"tr",data=copy[l][kind];
    if(!data)return "";
    let content="";
    if(kind==="classification"){
      content='<div class="lesson-mini-grid">'+data.items.map(v=>
        '<div class="lesson-mini-box"><strong>'+escape(v.head)+'</strong><p>'+
        escape(v.detail)+'</p><span>'+escape(v.tag)+'</span></div>').join("")+'</div>';
    }else if(kind==="bond2d"){
      content=gridSvg(l)+'<div class="lesson-figure-legend"><span>'+escape(data.atom)+'</span>'+
        '<span>'+escape(data.bond)+'</span><span>'+escape(data.coord)+'</span></div>';
    }else if(kind==="steady-subset"){
      content='<div class="lesson-steady-universe"><div class="lesson-steady-heading">'+escape(data.outer)+'</div>'+
        '<div class="lesson-steady-inner"><strong>'+escape(data.inner)+'</strong><span>'+escape(data.inside)+'</span></div>'+
        '<div class="lesson-steady-example">'+escape(data.outside)+'</div></div>';
    }else if(kind==="temperature-preview"){
      content='<p class="lesson-majority-label">'+escape(data.types)+'</p>'+
        '<div class="lesson-regime-grid">'+data.bands.map(v=>
        '<div class="lesson-regime"><strong>'+escape(v.head)+'</strong><span>'+escape(v.desc)+'</span></div>').join("")+'</div>';
    }
    return '<figure class="lesson-figure" data-figure="'+escape(kind)+'"><figcaption>'+escape(data.title)+
      '</figcaption>'+content+'<p class="lesson-figure-note">'+escape(data.foot)+'</p></figure>';
  }

  window.CourseLessonVisuals = {render};
})();