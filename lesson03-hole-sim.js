/* Inline, interactive hole motion for the Lesson 03 narration.
 * A discrete vacancy / bound-electron analogy, NOT a Bloch-state transport solver. */
(() => {
 "use strict";
 const labels={
 tr:{
  title:"Hol hareketi — adım adım simülasyon",
  hint:"Bir komşu valans elektronu boş konuma geçince, hol onun eski konumuna taşınır.",
  left:"Soldaki elektronu hareket ettir",right:"Sağdaki elektronu hareket ettir",
  play:"Otomatik ilerlet",pause:"Duraklat",reset:"Başa dön",
  filled:"Elektronla dolu konum",vacant:"Hol (boş valans konumu)",
  start:"Başlangıç: 3. konumda hol bulunuyor. Sağa veya sola hareket ettir.",
  move:(from,to)=>"Elektron "+from+" → "+to+" konumuna geçer; hol "+to+" → "+from+" yönünde hareket eder.",
  last:"Sağ sınır: otomatik ilerleme tamamlandı. Başa dön veya sola hareket ettir.",
  note:"Bu, 1B ayrık bağ/boşluk benzetmesidir. Gerçek Si'de hol, valans bandındaki kuantum durumlarının ortak hareketidir; atom çekirdeği yer değiştirmez."
 },
 en:{
  title:"Hole motion — step-by-step simulation",
  hint:"When a neighboring valence electron fills a vacant state, the hole moves to the electron's former site.",
  left:"Move electron from the left",right:"Move electron from the right",
  play:"Auto advance",pause:"Pause",reset:"Reset",
  filled:"Occupied electron site",vacant:"Hole (vacant valence state)",
  start:"Initial state: a hole occupies site 3. Move it left or right.",
  move:(from,to)=>"Electron moves site "+from+" → "+to+"; the hole moves "+to+" → "+from+".",
  last:"Right boundary reached: auto advance complete. Reset or move left.",
  note:"This is a discrete 1D bond/vacancy analogy. In actual Si, holes represent collective valence-band quantum states; an atomic nucleus does not move."
 }
 };
 const htmlEscape=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const count=7;
 const createModel=(initial=2)=>{
  let hole=initial,history=null;
  return {
   get position(){return hole;},
   get lastMove(){return history;},
   step(direction){
     const next=hole+direction;
     if(!Number.isInteger(direction)||Math.abs(direction)!==1||next<0||next>=count)return false;
     history={electronFrom:next,electronTo:hole,holeFrom:hole,holeTo:next};
     hole=next;
     return true;
   },
   reset(){hole=initial;history=null;}
  };
 };
 let cleanup=null;
 function renderSvg(model,l){
   const cx=i=>50+i*98,from=model.lastMove?.electronFrom,to=model.lastMove?.electronTo;
   const movement=from===undefined?'':(
     '<path class="l03-hole-motion-line" d="M'+cx(from)+' 42 L'+cx(to)+' 42"/>'+
     '<path class="l03-hole-motion-tip" d="M'+cx(to)+' 42 l'+(from>to?11:-11)+' -7 v14 Z"/>');
   return '<svg class="l03-hole-motion-svg" viewBox="0 0 695 180" role="img" aria-label="'+htmlEscape(l.title)+'">'+
    '<title>'+htmlEscape(l.title)+'</title>'+
    '<line x1="50" y1="93" x2="638" y2="93" class="l03-hole-motion-track"/>'+
    movement+
    Array.from({length:count},(_,i)=>{
      const empty=i===model.position,x=cx(i);
      return '<circle cx="'+x+'" cy="93" r="29" class="'+(empty?'l03-hole-motion-vacant':'l03-hole-motion-electron')+'"/>'+
       '<text x="'+x+'" y="100" text-anchor="middle" class="l03-hole-motion-symbol">'+(empty?'+':'−')+'</text>'+
       '<text x="'+x+'" y="144" text-anchor="middle" class="l03-hole-motion-index">'+(i+1)+'</text>';
    }).join("")+'</svg>';
 }
 function mount(container,language="tr"){
   if(!container)return;
   if(cleanup)cleanup();
   const l=labels[language==="en"?"en":"tr"],model=createModel();
   let timer=null;
   container.innerHTML='<section class="l03-hole-sim" aria-label="'+htmlEscape(l.title)+'">'+
    '<h4>'+htmlEscape(l.title)+'</h4><p>'+htmlEscape(l.hint)+'</p>'+
    '<div data-hole-visual></div>'+
    '<div class="l03-hole-sim-controls">'+
    '<button type="button" data-hole-left>'+htmlEscape(l.left)+'</button>'+
    '<button type="button" data-hole-right>'+htmlEscape(l.right)+'</button>'+
    '<button type="button" data-hole-play>'+htmlEscape(l.play)+'</button>'+
    '<button type="button" data-hole-reset>'+htmlEscape(l.reset)+'</button>'+
    '</div>'+
    '<div data-hole-status class="l03-hole-status" aria-live="polite"></div>'+
    '<small>'+htmlEscape(l.note)+'</small></section>';
   const $=selector=>container.querySelector(selector);
   const left=$("[data-hole-left]"),right=$("[data-hole-right]"),
     play=$("[data-hole-play]"),reset=$("[data-hole-reset]");
   const stop=()=>{if(timer!==null){clearInterval(timer);timer=null;}play.textContent=l.play;};
   const draw=(message)=>{
     $("[data-hole-visual]").innerHTML=renderSvg(model,l);
     $("[data-hole-status]").textContent=message||l.start;
     left.disabled=model.position===0;
     right.disabled=model.position===count-1;
   };
   const step=direction=>{
     if(!model.step(direction))return false;
     const m=model.lastMove;
     draw(l.move(m.electronFrom+1,m.electronTo+1));
     return true;
   };
   left.addEventListener("click",()=>{stop();step(-1);});
   right.addEventListener("click",()=>{stop();step(1);});
   reset.addEventListener("click",()=>{stop();model.reset();draw();});
   play.addEventListener("click",()=>{
     if(timer!==null){stop();return;}
     if(model.position===count-1){draw(l.last);return;}
     play.textContent=l.pause;
     timer=setInterval(()=>{
       if(!step(1)||model.position===count-1){
         stop();if(model.position===count-1)$("[data-hole-status]").textContent=l.last;
       }
     },850);
   });
   draw();
   cleanup=()=>{stop();cleanup=null;};
 }
 window.Lesson03HoleSim={mount,cleanup(){if(cleanup)cleanup();},createModel};
})();