/* Dependency-free interactive activity engine for lessons 02 and 03.
   Scientific approximations and validity limits are documented in activities.js. */
(() => {
  "use strict";
  const source = window.COURSE_ACTIVITIES || {};
  const K = 8.617333262145e-5; // Boltzmann constant in eV/K
  const LN10 = Math.log(10);
  const $ = (root, q) => root.querySelector(q);
  const escapeText = text => String(text).replace(/[&<>"']/g, char =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const t = (obj, lang) => obj?.[lang] || "";
  const labels = {
    tr: {
      graphs: "ETKİLEŞİMLİ GRAFİKLER", sims: "FİZİK SİMÜLASYONLARI",
      questions: "KAZANIM SORULARI", models: "Modelin varsayımları ve sınırları",
      temperature: "Sıcaklık", lifetime: "Yaşam süresi", elapsed: "Geçen süre",
      generation: "Dış üretim", pulse: "Üretim şiddeti", angle: "Döndürme açısı",
      showBonds: "Bağları göster", photon: "Foton enerjisi", photonUnit: "eV",
      valueAt: "Seçilen noktadaki değerler", material: "Malzeme",
      density: "Taşıyıcı yoğunluğu", densityNi: "nᵢ (cm⁻³)", logDensity: "log₁₀[nᵢ / (cm⁻³)]",
      photonAvailable: "Enerji eşiği sağlanıyor; idealize edilmiş geçiş tetiklenebilir.",
      photonUnavailable: "hν < Eᵍ olduğundan bu tek-fotonlu bantlar arası geçiş için enerji yetersiz.",
      photonIndirect: "Si dolaylı bant aralıklıdır: enerji yeterli olsa da fonon desteği gerekebilir.",
      createPair: "Çift oluştur", recombine: "Yeniden birleştir", reset: "Sıfırla",
      electron: "elektron", hole: "hol", conduction: "İletim bandı",
      valence: "Valans bandı", gap: "Yasak aralık", lower: "Soldan elektron taşı",
      upper: "Sağdan elektron taşı", emptyBond: "Boş bağ", fullBond: "Dolu bağ",
      electronMoved: "Elektron boşluğa geldi; hol elektronun geldiği konuma geçti.",
      holeInitial: "Bir boş bağ seçili. Komşu elektronu buraya hareket ettir.",
      theta: "İdeal komşu bağ açısı", neighbors: "En yakın komşu",
      steady: "Kararlı duruma yaklaşıyor", transient: "Geçici rejim",
      equilibrium: "Termal denge (dış üretim yok)",
      driven: "Dış uyarımlı: termal denge değil",
      generationRate: "Toplam üretim", recombinationRate: "Toplam rekombinasyon",
      netRate: "Net üretim", normUnit: "normalize hız",
      normalized: "Normalize aşırı taşıyıcı", tau3: "τ = 3 µs", tau9: "τ = 9 µs",
      currentTau: "Seçilen τ", fixedGap: "Varsayımsal bant aralığı",
      modelCurve: "Model", marker: "Seçilen",
      question: "Soru", of: "/", select: "Bir seçenek seçerek kontrol et.",
      correct: "Doğru yanıt", incorrect: "Bu seçenek doğru değil",
      correction: "Doğru seçenek", next: "Sonraki soru", previous: "Önceki soru",
      finish: "Sonuçları gör", retry: "Soruları sıfırla", answered: "Yanıtlanan",
      right: "Doğru", completed: "Değerlendirme özeti",
      summary: "Yanıtlarınızı gözden geçirebilir veya soruları yeniden çözebilirsiniz.",
      questionLabel: "Yanıt seçenekleri",
      readout: "Eğrinin örneklenen değeri", activePulse: "Üretim açık (0–4 µs)",
      noPulse: "Üretim kapalı (4 µs sonrası)",
      phi: "t = ", time: "Zaman",
      ratio: "Kalan pay", generated: "Üretilmiş çift", noPair: "Çift yok",
      wavelengthHint: "Enerji koşulu tek başına absorpsiyon garantisi vermez."
    },
    en: {
      graphs: "INTERACTIVE GRAPHS", sims: "PHYSICS SIMULATIONS",
      questions: "LEARNING QUESTIONS", models: "Model assumptions and limitations",
      temperature: "Temperature", lifetime: "Lifetime", elapsed: "Elapsed time",
      generation: "External generation", pulse: "Generation intensity", angle: "Rotation angle",
      showBonds: "Show bonds", photon: "Photon energy", photonUnit: "eV",
      valueAt: "Values at the selected point", material: "Material",
      density: "Carrier density", densityNi: "nᵢ (cm⁻³)", logDensity: "log₁₀[nᵢ / (cm⁻³)]",
      photonAvailable: "The energy threshold is met; an idealized transition can be triggered.",
      photonUnavailable: "hν < Eᵍ: insufficient energy for this single-photon interband transition.",
      photonIndirect: "Si has an indirect gap: phonon assistance may be needed even if the energy is sufficient.",
      createPair: "Generate pair", recombine: "Recombine", reset: "Reset",
      electron: "electron", hole: "hole", conduction: "Conduction band",
      valence: "Valence band", gap: "Band gap", lower: "Move electron from left",
      upper: "Move electron from right", emptyBond: "Vacant bond", fullBond: "Occupied bond",
      electronMoved: "An electron filled the vacancy; the hole moved to the electron's former position.",
      holeInitial: "One bond is vacant. Move a neighboring electron into it.",
      theta: "Ideal bond angle", neighbors: "Nearest neighbors",
      steady: "Approaching steady state", transient: "Transient regime",
      equilibrium: "Thermal equilibrium (no external generation)",
      driven: "Externally driven: not thermal equilibrium",
      generationRate: "Total generation", recombinationRate: "Total recombination",
      netRate: "Net generation", normUnit: "normalized rate",
      normalized: "Normalized excess carriers", tau3: "τ = 3 µs", tau9: "τ = 9 µs",
      currentTau: "Selected τ", fixedGap: "Hypothetical band gap",
      modelCurve: "Model", marker: "Selected",
      question: "Question", of: "/", select: "Select an answer to check it.",
      correct: "Correct answer", incorrect: "Not quite",
      correction: "Correct option", next: "Next question", previous: "Previous question",
      finish: "View results", retry: "Reset questions", answered: "Answered",
      right: "Correct", completed: "Assessment summary",
      summary: "You can review your answers or take the questions again.",
      questionLabel: "Answer choices",
      readout: "Sampled curve value", activePulse: "Generation on (0–4 µs)",
      noPulse: "Generation off (after 4 µs)",
      phi: "t = ", time: "Time",
      ratio: "Remaining fraction", generated: "Generated pair", noPair: "No pair",
      wavelengthHint: "Satisfying the energy threshold alone does not guarantee absorption."
    }
  };

  function fmt(value, digits = 2) {
    if (!Number.isFinite(value)) return "—";
    if (value === 0) return "0";
    const a = Math.abs(value);
    if (a >= 100000 || a < 0.001) return value.toExponential(2).replace("e+", "×10^").replace("e-", "×10^-");
    return Number(value.toFixed(digits)).toLocaleString("en-US", { maximumFractionDigits: digits });
  }
  function slider(id, name, min, max, step, value, unit = "") {
    return '<label class="lab-control" for="' + id + '">' +
      '<span class="lab-control-top"><span>' + escapeText(name) + '</span><output data-output="' + id +
      '">' + fmt(value, 2) + ' ' + escapeText(unit) + '</output></span>' +
      '<input type="range" id="' + id + '" min="' + min + '" max="' + max +
      '" step="' + step + '" value="' + value + '" data-control="' + id +
      '" aria-label="' + escapeText(name) + '"></label>';
  }
  function noteBox(note, l) {
    return '<details class="lab-assumptions" open><summary>' + labels[l].models +
      '</summary><p>' + escapeText(note) + '</p></details>';
  }

  const graphModels = {
    "intrinsic-temperature": {
      controls: l => [ ["temp", labels[l].temperature, 200, 500, 10, 300, "K"] ],
      // n_i is calculated and plotted directly in cm^-3: no log axis or log-transformed data.
      config: (p,l) => {
        const material = [
          { name:"Si", eg:1.12, baseline:1e10, c:0 },
          { name:"Ge", eg:0.66, baseline:2.4e13, c:1 },
          { name:"GaAs", eg:1.42, baseline:1.8e6, c:2 }
        ];
        const selectedIndex = Math.min(2,Math.max(0,Number.isInteger(p.material)?p.material:0));
        const selected = material[selectedIndex];
        const ni = (mat,T) => mat.baseline * Math.pow(T/300, 1.5) *
          Math.exp(-mat.eg/(2*K) * (1/T - 1/300));
        // On a linear axis one material could completely mask the others.
        // Display one at a time, focusing on a local window around selected T.
        const xMin = Math.max(200,p.temp-50);
        const xMax = Math.min(500,p.temp+50);
        const maxValue = ni(selected,xMax) * 1.12;
        const exponent = Math.floor(Math.log10(maxValue));
        const unit = Math.pow(10,exponent);
        const leading = maxValue/unit;
        const rounded = [1,2,2.5,5,10].find(n=>n>=leading-1e-10) || 10;
        const yMax = rounded*unit;
        return {
          xMin,xMax,yMin:0,yMax,
          xTicks:Array.from({length:5},(_,i)=>xMin+(xMax-xMin)*i/4),
          yTicks:Array.from({length:5},(_,i)=>yMax*i/4),
          yTickFormat:"scientific",
          xLabel:"T (K)", yLabel:labels[l].densityNi,
          lines:[{label:selected.name,c:selected.c,fn:T=>ni(selected,T)}],
          markerX:p.temp,
          readout:material.map(mat=>({
            name:mat.name, value:"nᵢ ≈ "+fmt(ni(mat,p.temp),2)+" cm⁻³", c:mat.c
          }))
        };
      }
    },
    "gap-sensitivity": {
      controls: l => [ ["temp",labels[l].temperature,250,400,10,300,"K"] ],
      config: (p,l) => {
        const logni=(eg)=>10+1.5*Math.log10(p.temp/300)
          +(-eg/(2*K*p.temp)+1.12/(2*K*300))/LN10;
        return {
          xMin:.5,xMax:2,yMin:-8,yMax:20,
          xTicks:[.5,.75,1,1.25,1.5,1.75,2],
          yTicks:[-8,-4,0,4,8,12,16,20],
          xLabel:"E_g (eV)",yLabel:labels[l].logDensity,
          lines:[{label:labels[l].modelCurve,c:0,fn:logni}],
          markerX:1.12,
          readout:[{name:"E_g=1.12 eV",value:"nᵢ ≈ "+fmt(Math.pow(10,logni(1.12)))+" cm⁻³",c:0}]
        };
      }
    },
    "lifetime-decay": {
      controls:l=>[
        ["tau",labels[l].lifetime,1,12,.5,5,"µs"],
        ["elapsed",labels[l].elapsed,0,30,1,8,"µs"]
      ],
      config:(p,l)=>({
        xMin:0,xMax:30,yMin:0,yMax:1,
        xTicks:[0,5,10,15,20,25,30],yTicks:[0,.25,.5,.75,1],
        xLabel:"t (µs)",yLabel:"Δn(t) / Δn(0)",
        lines:[
          {label:labels[l].currentTau+" ("+fmt(p.tau,1)+" µs)",c:0,fn:x=>Math.exp(-x/p.tau)},
          {label:labels[l].tau3,c:1,fn:x=>Math.exp(-x/3)},
          {label:labels[l].tau9,c:2,fn:x=>Math.exp(-x/9)}
        ],
        markerX:p.elapsed,
        readout:[{name:labels[l].currentTau, value:labels[l].ratio+": "+fmt(Math.exp(-p.elapsed/p.tau),3),c:0}]
      })
    },
    "generation-pulse": {
      controls:l=>[
        ["tau",labels[l].lifetime,1,6,.5,3,"µs"],
        ["generation",labels[l].pulse,.5,6,.5,3,"rel."]
      ],
      config:(p,l)=>{
        const state=(x)=>x<=4?p.generation*p.tau*(1-Math.exp(-x/p.tau))
          :p.generation*p.tau*(1-Math.exp(-4/p.tau))*Math.exp(-(x-4)/p.tau);
        return {
          xMin:0,xMax:16,yMin:0,yMax:38,
          xTicks:[0,2,4,6,8,10,12,14,16],yTicks:[0,10,20,30,38],
          xLabel:"t (µs)",yLabel:"Δn (relative)",
          lines:[{label:"Δn(t)",c:0,fn:state}],
          markerX:4,
          readout:[
            {name:labels[l].activePulse,value:"Δn(4 µs) = "+fmt(state(4)),c:0},
            {name:labels[l].noPulse,value:"Δn(8 µs) = "+fmt(state(8)),c:2}
          ]
        };
      }
    }
  };

  const superscript = value => String(value).split("").map(digit =>
    ({ "-":"⁻", "+":"⁺", "0":"⁰", "1":"¹", "2":"²", "3":"³", "4":"⁴",
       "5":"⁵", "6":"⁶", "7":"⁷", "8":"⁸", "9":"⁹" }[digit] || digit)).join("");
  function linearScientific(value) {
    if(value===0)return "0";
    const exp=Math.floor(Math.log10(Math.abs(value)));
    const coefficient=Number((value/Math.pow(10,exp)).toFixed(2));
    return coefficient+"×10"+superscript(exp);
  }

  function svgPlot(conf, lang) {
    const W=840,H=342,L=87,R=24,T=23,B=62,plotW=W-L-R,plotH=H-T-B;
    const xScale=x=>L+plotW*(x-conf.xMin)/(conf.xMax-conf.xMin);
    const yScale=y=>T+plotH*(1-(y-conf.yMin)/(conf.yMax-conf.yMin));
    const gridX=conf.xTicks.map(n=>
      '<line class="lab-grid-line" x1="'+xScale(n)+'" y1="'+T+'" x2="'+xScale(n)+'" y2="'+(H-B)+'"/>'+
      '<text class="lab-plot-tick" x="'+xScale(n)+'" y="'+(H-B+20)+'" text-anchor="middle">'+fmt(n,2)+'</text>').join("");
    const gridY=conf.yTicks.map(n=>
      '<line class="lab-grid-line" x1="'+L+'" y1="'+yScale(n)+'" x2="'+(W-R)+'" y2="'+yScale(n)+'"/>'+
      '<text class="lab-plot-tick" x="'+(L-12)+'" y="'+(yScale(n)+4)+'" text-anchor="end">'+(conf.yTickFormat==="scientific"?linearScientific(n):fmt(n,2))+'</text>').join("");
    const paths=conf.lines.map(line=>{
      let d="";
      const segments=150;
      for(let i=0;i<=segments;i++){
        const x=conf.xMin+(conf.xMax-conf.xMin)*i/segments;
        const y=Math.max(conf.yMin-3,Math.min(conf.yMax+3,line.fn(x)));
        if(Number.isFinite(y))d+=(d?" L ":"M ")+xScale(x).toFixed(2)+" "+yScale(y).toFixed(2);
      }
      return '<path class="lab-plot-line line-'+line.c+'" d="'+d+'" />';
    }).join("");
    const marker=Number.isFinite(conf.markerX)?
      '<line class="lab-marker" x1="'+xScale(conf.markerX)+'" y1="'+T+'" x2="'+xScale(conf.markerX)+'" y2="'+(H-B)+'" />'+
      conf.lines.map(line=>{
        const y=line.fn(conf.markerX);
        return Number.isFinite(y)&&y>=conf.yMin&&y<=conf.yMax ?
          '<circle class="lab-marker-point dot-'+line.c+'" cx="'+xScale(conf.markerX)+'" cy="'+yScale(y)+'" r="5"/>' : "";
      }).join(""):"";
    const title=escapeText(conf.yLabel+" / "+conf.xLabel);
    return '<svg class="lab-plot" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+title+'" preserveAspectRatio="xMidYMid meet">'+
      '<title>'+title+'</title>'+gridX+gridY+
      '<line class="lab-axis" x1="'+L+'" y1="'+T+'" x2="'+L+'" y2="'+(H-B)+'"/>'+
      '<line class="lab-axis" x1="'+L+'" y1="'+(H-B)+'" x2="'+(W-R)+'" y2="'+(H-B)+'"/>'+
      paths+marker+
      '<text class="lab-plot-label" x="'+(L+plotW/2)+'" y="'+(H-12)+'" text-anchor="middle">'+escapeText(conf.xLabel)+'</text>'+
      '<text class="lab-plot-label" text-anchor="middle" x="'+(-T-plotH/2)+'" y="21" transform="rotate(-90)">'+escapeText(conf.yLabel)+'</text></svg>';
  }

  function chartCard(item, lang, ix) {
    const model=graphModels[item.id];
    const p=Object.fromEntries(model.controls(lang).map(([id, , , , ,v])=>[id,v]));
    if (item.id==="intrinsic-temperature") p.material=0;
    const id="chart-"+item.id;
    const node=document.createElement("article");
    node.className="lab-card";node.id=id;
    node.innerHTML=
      '<div class="lab-card-head"><span class="lab-card-index">'+String(ix+1).padStart(2,"0")+
      '</span><div><h3>'+escapeText(t(item.title,lang))+'</h3><p>'+escapeText(t(item.description,lang))+'</p></div></div>'+
      '<div class="lab-controls">'+model.controls(lang).map(([key,name,min,max,step,v,unit])=>
        slider(id+"-"+key,name,min,max,step,v,unit)).join("")+
        (item.id==="intrinsic-temperature"
          ? '<label class="lab-control lab-material-control" for="'+id+'-material"><span class="lab-control-top">'+
            escapeText(labels[lang].material)+'</span><select id="'+id+'-material" data-material aria-label="'+
            escapeText(labels[lang].material)+'"><option value="0">Si</option><option value="1">Ge</option>'+
            '<option value="2">GaAs</option></select></label>'
          : "")+'</div>'+
      '<div class="lab-plot-container" data-chart></div><div class="lab-legend" data-legend></div>'+
      '<div class="lab-readouts" data-readouts aria-live="polite"></div>'+
      noteBox(t(item.note,lang),lang);
    const update=()=>{
      const conf=model.config(p,lang);
      $(node,"[data-chart]").innerHTML=svgPlot(conf,lang);
      $(node,"[data-legend]").innerHTML=conf.lines.map(line=>
        '<span class="lab-legend-item"><i class="lab-legend-line line-'+line.c+'"></i>'+escapeText(line.label)+'</span>').join("");
      $(node,"[data-readouts]").innerHTML=conf.readout.map(x=>
        '<div class="lab-stat"><span>'+escapeText(x.name)+'</span><strong>'+escapeText(x.value)+'</strong></div>').join("");
    };
    node.querySelectorAll("[data-control]").forEach(input=>input.addEventListener("input",()=>{
      const key=input.id.slice(id.length+1);p[key]=Number(input.value);
      const definition=model.controls(lang).find(x=>x[0]===key);
      const out=node.querySelector('[data-output="'+input.id+'"]');
      if(out)out.textContent=fmt(p[key],2)+" "+definition[6];
      update();
    }));
    const materialSelect=$(node,"[data-material]");
    if(materialSelect)materialSelect.addEventListener("change",()=>{
      p.material=Number(materialSelect.value);
      update();
    });
    update();return node;
  }

  function tetraSvg(angle) {
    const rad=angle*Math.PI/180, vectors=[
      [1,1,1], [1,-1,-1], [-1,1,-1], [-1,-1,1]
    ];
    const points=vectors.map(v=>{
      const x=v[0]*Math.cos(rad)-v[2]*Math.sin(rad);
      const z=v[0]*Math.sin(rad)+v[2]*Math.cos(rad);
      const y=v[1]; const scale=82;
      return {x:365+scale*x,y:160-scale*(.82*y+.23*z),z};
    }).sort((a,b)=>a.z-b.z);
    return '<svg class="lab-diagram" viewBox="0 0 730 310" role="img" aria-label="Tetrahedral silicon bonding">'+
      '<title>One central Si and its four tetrahedrally coordinated neighbors</title>'+
      points.map(p=>'<line x1="365" y1="160" x2="'+p.x.toFixed(1)+'" y2="'+p.y.toFixed(1)+
        '" stroke="var(--accent)" stroke-width="6" opacity="'+(p.z<0?".38":".8")+'" stroke-linecap="round"/>').join("")+
      points.map(p=>'<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="25" class="lab-atom-side"/>'+
        '<text x="'+p.x.toFixed(1)+'" y="'+(p.y+5).toFixed(1)+'" text-anchor="middle" class="lab-atom-text">Si</text>').join("")+
      '<circle cx="365" cy="160" r="32" class="lab-atom-center"/>'+
      '<text x="365" y="166" text-anchor="middle" class="lab-atom-text">Si</text></svg>';
  }

  function holeSvg(index,lang){
    const W=720,spacing=108,base=89,y=108;
    return '<svg class="lab-diagram" viewBox="0 0 '+W+' 230" role="img" aria-label="'+escapeText(labels[lang].holeInitial)+'">'+
      '<title>'+escapeText(labels[lang].holeInitial)+'</title>'+
      '<line x1="'+base+'" y1="'+y+'" x2="'+(base+spacing*5)+'" y2="'+y+'" stroke="var(--stroke)" stroke-width="5"/>'+
      Array.from({length:6},(_,i)=>{
        const x=base+i*spacing;
        return '<circle cx="'+x+'" cy="'+y+'" r="27" class="'+(i===index?"lab-empty":"lab-filled")+'"/>'+
          (i===index?'<text x="'+x+'" y="'+(y+6)+'" text-anchor="middle" class="lab-hole-mark">+</text>'
            :'<text x="'+x+'" y="'+(y+6)+'" text-anchor="middle" class="lab-electron-mark">−</text>')+
          '<text x="'+x+'" y="'+(y+52)+'" class="lab-site-label" text-anchor="middle">'+(i+1)+'</text>';
      }).join("")+'</svg>';
  }

  function pairSvg(active,lang){
    const b=labels[lang];
    return '<svg class="lab-diagram" viewBox="0 0 730 270" role="img" aria-label="'+escapeText(active?b.generated:b.noPair)+'">'+
      '<title>'+escapeText(active?b.generated:b.noPair)+'</title>'+
      '<rect x="88" y="38" width="555" height="58" class="lab-band-upper" rx="7"/>'+
      '<rect x="88" y="175" width="555" height="58" class="lab-band-lower" rx="7"/>'+
      '<text x="106" y="60" class="lab-band-label">'+escapeText(b.conduction)+'</text>'+
      '<text x="106" y="199" class="lab-band-label">'+escapeText(b.valence)+'</text>'+
      '<text x="118" y="138" class="lab-site-label">Eᵍ ≈ 1.12 eV</text>'+
      (active?
        '<circle cx="445" cy="70" r="19" class="lab-filled"/><text x="445" y="76" text-anchor="middle" class="lab-electron-mark">−</text>'+
        '<circle cx="445" cy="202" r="19" class="lab-empty"/><text x="445" y="208" text-anchor="middle" class="lab-hole-mark">+</text>'+
        '<line x1="445" y1="105" x2="445" y2="173" class="lab-transition-line"/>':
        '<circle cx="445" cy="202" r="19" class="lab-filled"/><text x="445" y="208" text-anchor="middle" class="lab-electron-mark">−</text>'
      )+'</svg>';
  }

  function simulationCard(item,lang,ix){
    const b=labels[lang], node=document.createElement("article");
    node.className="lab-card";
    node.innerHTML='<div class="lab-card-head"><span class="lab-card-index">'+String(ix+1).padStart(2,"0")+
      '</span><div><h3>'+escapeText(t(item.title,lang))+'</h3><p>'+escapeText(t(item.description,lang))+'</p></div></div>'+
      '<div class="lab-controls" data-controls></div>'+
      '<div class="lab-simulation-visual" data-visual></div>'+
      '<div class="lab-simulation-actions" data-actions></div>'+
      '<div class="lab-simulation-readout" data-details aria-live="polite"></div>'+
      noteBox(t(item.note,lang),lang);
    const control=$(node,"[data-controls]"), visual=$(node,"[data-visual]"),
          actions=$(node,"[data-actions]"), details=$(node,"[data-details]");
    const mk=(key,label,min,max,step,def,unit="")=>slider(item.id+"-"+key,label,min,max,step,def,unit);
    if(item.id==="tetrahedral-bonds"){
      control.innerHTML=mk("rotation",b.angle,0,360,5,25,"°");
      const input=$(node,"[data-control]"), update=()=>{
        visual.innerHTML=tetraSvg(Number(input.value));
        details.innerHTML='<strong>'+escapeText(b.neighbors)+': 4</strong><span>'+
          escapeText(b.theta)+': 109.47°</span>';
        $(node,'[data-output="'+input.id+'"]').textContent=input.value+"°";
      };input.addEventListener("input",update);update();
    }else if(item.id==="equilibrium-balance"){
      control.innerHTML=mk("drive",b.generation,0,5,.5,0,"rel.")+
        mk("elapsed",b.elapsed,0,5,.25,0,"τ");
      const inputs=[...node.querySelectorAll("[data-control]")];
      const update=()=>{
        const drive=Number(inputs[0].value),time=Number(inputs[1].value);
        const totalG=1+drive, totalR=1+drive*(1-Math.exp(-time)),net=totalG-totalR;
        const bars=[{name:b.generationRate,value:totalG,c:"gen"},{name:b.recombinationRate,value:totalR,c:"rec"}];
        visual.innerHTML='<div class="lab-rate-bars">'+bars.map(x=>
          '<div class="lab-rate-row"><span>'+escapeText(x.name)+'</span>'+
          '<div class="lab-rate-track"><i class="'+x.c+'" style="width:'+(x.value/6*100)+'%"></i></div>'+
          '<strong>'+fmt(x.value)+'</strong></div>').join("")+'</div>';
        details.innerHTML='<strong>'+escapeText(b.netRate)+': '+fmt(net)+
          ' ('+escapeText(b.normUnit)+')</strong><span>'+
          escapeText(drive===0?b.equilibrium:(Math.abs(net)<.1?b.steady:b.transient))+
          (drive===0?"":" · "+b.driven)+'</span>';
        inputs.forEach(input=>$(node,'[data-output="'+input.id+'"]').textContent=
          fmt(Number(input.value))+(input===inputs[1]?" τ":" rel."));
      };inputs.forEach(input=>input.addEventListener("input",update));update();
    }else if(item.id==="hole-motion"){
      let hole=3;
      const message=document.createElement("p");message.className="lab-hint";
      actions.innerHTML='<button type="button" data-hop="-1">'+escapeText(b.lower)+'</button>'+
        '<button type="button" data-hop="1">'+escapeText(b.upper)+'</button>'+
        '<button type="button" class="lab-secondary-button" data-reset>'+escapeText(b.reset)+'</button>';
      actions.append(message);
      const update=moved=>{
        visual.innerHTML=holeSvg(hole,lang);
        const left=$(node,'[data-hop="-1"]'),right=$(node,'[data-hop="1"]');
        left.disabled=hole===0;right.disabled=hole===5;
        message.textContent=moved?b.electronMoved:b.holeInitial;
        details.innerHTML='<strong>'+escapeText(b.emptyBond)+': '+(hole+1)+'/6</strong>'+
          '<span>'+escapeText(b.hole)+': +e</span>';
      };
      node.querySelectorAll("[data-hop]").forEach(button=>button.addEventListener("click",()=>{
        hole+=Number(button.dataset.hop);update(true);
      }));
      $(node,"[data-reset]").addEventListener("click",()=>{hole=3;update(false);});
      update(false);
    }else if(item.id==="pair-transitions"){
      let active=false;
      control.innerHTML=mk("photon",b.photon,.5,2,.05,1.5,"eV");
      actions.innerHTML='<button type="button" data-create>'+escapeText(b.createPair)+'</button>'+
        '<button type="button" data-recombine class="lab-secondary-button">'+escapeText(b.recombine)+'</button>';
      const input=$(node,"[data-control]"), create=$(node,"[data-create]"),
            remove=$(node,"[data-recombine]");
      const update=()=>{
        const energy=Number(input.value),available=energy>=1.12;
        create.disabled=active||!available;remove.disabled=!active;
        visual.innerHTML=pairSvg(active,lang);
        details.innerHTML='<strong>hν = '+fmt(energy,2)+' eV · Eᵍ ≈ 1.12 eV</strong>'+
          '<span>'+escapeText(available?b.photonAvailable:b.photonUnavailable)+'</span>'+
          '<span>'+escapeText(b.photonIndirect)+'</span>';
        $(node,'[data-output="'+input.id+'"]').textContent=fmt(energy,2)+" eV";
      };
      input.addEventListener("input",update);
      create.addEventListener("click",()=>{active=true;update();});
      remove.addEventListener("click",()=>{active=false;update();});
      update();
    }
    return node;
  }

  const quizKey = "yariiletken-quiz-v1";
  const loadQuiz=()=>{try{
    const x=JSON.parse(localStorage.getItem(quizKey)||"{}");
    return x&&typeof x==="object"?x:{};
  }catch{return {};}};
  const savedQuizzes=loadQuiz();
  const saveQuiz=()=>{try{localStorage.setItem(quizKey,JSON.stringify(savedQuizzes));}catch{/* no persistent storage */}};
  const quizPosition = {};

  function quizUI(questionData,lang,lessonId){
    const b=labels[lang],node=document.createElement("section");
    node.className="lab-quiz";
    const questions=questionData,answers=savedQuizzes[lessonId]||{};
    let index=quizPosition[lessonId]??0;
    if(index>=questions.length)index=0;
    const draw=()=>{
      quizPosition[lessonId]=index;
      const answeredCount=Object.keys(answers).filter(k=>Number.isInteger(Number(k))&&answers[k]>=0).length;
      const rightCount=questions.filter((q,i)=>answers[i]===q.correct).length;
      if(index===questions.length){
        node.innerHTML='<div class="lab-quiz-summary"><span class="eyebrow">'+b.completed+
          '</span><h3>'+b.right+': '+rightCount+' / '+questions.length+'</h3>'+
          '<p>'+b.answered+': '+answeredCount+' / '+questions.length+'. '+b.summary+'</p>'+
          '<button type="button" class="lab-primary-button" data-again>'+b.retry+'</button>'+
          '<button type="button" class="lab-secondary-button" data-back>'+b.previous+'</button></div>';
        $(node,"[data-again]").addEventListener("click",()=>{
          Object.keys(answers).forEach(k=>delete answers[k]);saveQuiz();index=0;draw();
        });
        $(node,"[data-back]").addEventListener("click",()=>{index=questions.length-1;draw();});
        return;
      }
      const q=questions[index], selected=answers[index],hasAnswer=Number.isInteger(selected);
      node.innerHTML='<div class="lab-quiz-head"><span class="eyebrow">'+b.question+' '+(index+1)+' '+b.of+' '+questions.length+'</span>'+
        '<span class="lab-quiz-score">'+b.answered+': '+answeredCount+' · '+b.right+': '+rightCount+'</span></div>'+
        '<div class="lab-quiz-progress"><i style="width:'+((index+1)/questions.length*100)+'%"></i></div>'+
        '<h3 class="lab-question-title">'+escapeText(t(q.q,lang))+'</h3>'+
        '<div class="lab-options" role="group" aria-label="'+escapeText(b.questionLabel)+'">'+
        q.options.map((opt,i)=>'<button type="button" data-answer="'+i+'" class="lab-option'+
          (hasAnswer&&selected===i?(i===q.correct?" is-right":" is-wrong"):"")+
          '" '+(hasAnswer?'disabled ':'')+'><span class="lab-option-letter">'+String.fromCharCode(65+i)+
          '</span>'+escapeText(t(opt,lang))+'</button>').join("")+'</div>'+
        '<div class="lab-feedback" aria-live="polite">'+
        (hasAnswer?'<strong>'+escapeText(selected===q.correct?b.correct:b.incorrect)+'</strong>'+
          '<p>'+escapeText(t(q.reasons[selected],lang))+'</p>'+
          (selected!==q.correct?'<p><b>'+b.correction+': '+String.fromCharCode(65+q.correct)+
          '</b> — '+escapeText(t(q.reasons[q.correct],lang))+'</p>':"")
          :'<p>'+b.select+'</p>')+'</div>'+
        '<div class="lab-quiz-navigation"><button type="button" data-prev class="lab-secondary-button" '+
        (index===0?"disabled":"")+'>'+b.previous+'</button>'+
        '<button type="button" data-next class="lab-primary-button" '+(!hasAnswer?"disabled":"")+'>'+
        (index===questions.length-1?b.finish:b.next)+'</button></div>';
      node.querySelectorAll("[data-answer]").forEach(button=>button.addEventListener("click",()=>{
        answers[index]=Number(button.dataset.answer);
        savedQuizzes[lessonId]=answers;saveQuiz();draw();
      }));
      $(node,"[data-prev]").addEventListener("click",()=>{index=Math.max(0,index-1);draw();});
      $(node,"[data-next]").addEventListener("click",()=>{index+=1;draw();});
    };
    draw();return node;
  }

  function render({lessonId,tabId,language,container}) {
    const collection=source[lessonId];
    if(!collection||!["grafikler","simulasyonlar","sorular"].includes(tabId))return false;
    const lang=language==="en"?"en":"tr",b=labels[lang];
    container.replaceChildren();
    if(tabId==="grafikler"||tabId==="simulasyonlar"){
      const section=document.createElement("div");
      section.className="lab-section";
      section.innerHTML='<div class="lab-section-intro"><span class="eyebrow">'+
        (tabId==="grafikler"?b.graphs:b.sims)+'</span></div>';
      const array=tabId==="grafikler"?collection.graphs:collection.simulations;
      array.forEach((activity,index)=>section.append(
        tabId==="grafikler"?chartCard(activity,lang,index):simulationCard(activity,lang,index)
      ));
      container.append(section);
    }else{
      const intro=document.createElement("div");intro.className="lab-section-intro";
      intro.innerHTML='<span class="eyebrow">'+b.questions+'</span>';
      container.append(intro,quizUI(collection.questions,lang,lessonId));
    }
    return true;
  }
  window.CourseActivity={render,graphModels};
})();