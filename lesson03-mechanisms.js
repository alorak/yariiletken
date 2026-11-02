/* Educational excitation conditions and generation/recombination pathways for Lesson 03.
 * Original SVG illustrations; all labels translated, no numerical absorption-rate claims. */
(() => {
"use strict";
const esc = value => String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const copy = {
 tr:{
  excitation:{
   title:"Bir elektron nasıl iletim bandına çıkar?",
   before:"Başlangıç",after:"Uyarılma sonrası",cb:"İletim bandı",vb:"Valans bandı",
   paths:[
    {head:"Işık soğurulması",sub:"Fotogeneration",body:"Soğurulan fotonun enerjisi uygun bant geçişine yetmelidir: hν ≳ E₉. Si'de momentum korunumu için fonon katılımı önemli olabilir.",example:"Örnek: Si fotodiyot, güneş hücresi"},
    {head:"Isıl üretim",sub:"Thermal generation",body:"Sıcaklık arttıkça elektronların yüksek enerjili durumları doldurma olasılığı değişir; termal üretim gerçekleşir.",example:"Örnek: Karanlıkta da oluşan termal taşıyıcılar"},
    {head:"Çarpışma iyonlaşması",sub:"Impact ionization",body:"Yüksek alanın hızlandırdığı taşıyıcı, çarpışmayla yeterli enerji aktarırsa yeni bir elektron–hol çifti oluşturabilir.",example:"Örnek: Çığ fotodiyot, ters kutuplamalı birleşim"}
   ],
   note:"300 K'deki E₉ ≈ 1,12 eV, elektronik bantlar arasındaki minimum enerji farkıdır. Tek Si–Si kimyasal bağının ayrışma enerjisi değildir. Yaklaşık 1107 nm eşiği bir enerji dönüşümüdür; fotonun kesin soğurulacağı anlamına gelmez. Çok güçlü elektrik alanlarında ayrıca bantlar arası tünelleme mümkündür."
  },
  mechanisms:{
   title:"Üretim ve yeniden birleşmenin fiziksel yolları",
   generation:"Elektron–hol üretimi", recombination:"Elektron–hol yeniden birleşmesi",
   items:[
    {group:"gen",kind:"photo",head:"Fotogeneration",flow:"Foton soğurulur → elektron + hol",example:"Güneş hücresi veya Si fotodiyot",detail:"Foton enerjisi ve izinli geçiş koşulları sağlandığında valans elektronu iletim durumuna uyarılır."},
    {group:"gen",kind:"impact",head:"Impact ionization",flow:"Sıcak taşıyıcı → ek elektron + hol",example:"Çığ fotodiyot (APD)",detail:"Güçlü elektrik alanında hızlanmış elektron veya hol çarpışarak bir ek çift üretir; yalnız E₉ kadar kinetik enerji her durumda yeterli değildir."},
    {group:"gen",kind:"thermal",head:"Thermal generation",flow:"Termal uyarılma → elektron + hol",example:"Karanlıkta yarıiletkenin öz taşıyıcıları",detail:"Sonlu sıcaklıkta elektronik durumların istatistiksel doluluğu ve termal süreçler bantlar arası taşıyıcı üretimini mümkün kılar."},
    {group:"rec",kind:"light",head:"Radiative recombination",flow:"Elektron + hol → foton",example:"GaAs gibi doğrudan bant aralıklı LED",detail:"Yeniden birleşme enerjisi foton olarak çıkar. Silisyum dolaylı bant aralıklı olduğundan bu kanal genelde daha zayıftır."},
    {group:"rec",kind:"trap",head:"SRH recombination",flow:"Elektron → kusur seviyesi → hol",example:"Si içindeki tuzak ve kusur merkezleri",detail:"Yasak aralık içindeki kusur seviyesi ara durak olur; enerji çoğunlukla fononlara aktarılır."},
    {group:"rec",kind:"auger",head:"Auger recombination",flow:"Elektron + hol → üçüncü taşıyıcıya enerji",example:"Yüksek enjeksiyonlu veya yoğun katkılanmış bölge",detail:"Yok olan çiftin enerjisi ışık yerine üçüncü elektrona veya hole aktarılır; yüksek taşıyıcı yoğunluklarında önem kazanabilir."}
   ],
   note:"Saçılmada serbest çift sayısı zorunlu olarak değişmez; rekombinasyonda bir serbest elektron–hol çifti ortadan kalkar. Termal dengede toplam üretim hızı G ile toplam yeniden birleşme hızı R eşittir; ışık altında sabit bir kararlı durum dengeyle aynı değildir."
  }
 },
 en:{
  excitation:{
   title:"How can an electron reach the conduction band?",
   before:"Initial state",after:"After excitation",cb:"Conduction band",vb:"Valence band",
   paths:[
    {head:"Light absorption",sub:"Photogeneration",body:"An absorbed photon needs enough energy for an allowed transition: hν ≳ E₉. In Si, phonon participation may be needed for momentum conservation.",example:"Example: Si photodiode or solar cell"},
    {head:"Thermal generation",sub:"Thermal generation",body:"As temperature increases, statistical occupancy of higher-energy electronic states changes, enabling thermal generation.",example:"Example: Thermally generated carriers in darkness"},
    {head:"Impact ionization",sub:"Impact ionization",body:"An energetic carrier accelerated by a strong field may transfer enough energy in a collision to create an additional electron–hole pair.",example:"Example: Avalanche photodiode or reverse-biased junction"}
   ],
   note:"At 300 K, E₉ ≈ 1.12 eV is the minimum energy difference between electronic bands, not the dissociation energy of one chemical Si–Si bond. The ≈1107 nm threshold is an energy conversion, not a promise that each photon is absorbed. Very strong fields can also induce band-to-band tunneling."
  },
  mechanisms:{
   title:"Physical routes for generation and recombination",
   generation:"Electron–hole generation",recombination:"Electron–hole recombination",
   items:[
    {group:"gen",kind:"photo",head:"Photogeneration",flow:"Absorbed photon → electron + hole",example:"Solar cell or Si photodiode",detail:"Absorption can promote a valence electron to an allowed conduction state when energy and selection conditions are met."},
    {group:"gen",kind:"impact",head:"Impact ionization",flow:"Hot carrier → additional electron + hole",example:"Avalanche photodiode (APD)",detail:"A carrier accelerated by a strong electric field collides and produces a pair. An impact threshold above E₉ can arise from energy and momentum conservation."},
    {group:"gen",kind:"thermal",head:"Thermal generation",flow:"Thermal excitation → electron + hole",example:"Intrinsic carriers generated in the dark",detail:"At finite temperature, statistical occupations and thermal processes allow electronic interband carrier generation."},
    {group:"rec",kind:"light",head:"Radiative recombination",flow:"Electron + hole → photon",example:"Direct-gap LEDs such as GaAs",detail:"The recombination energy is emitted as a photon. This pathway is generally less efficient in indirect-gap bulk Si."},
    {group:"rec",kind:"trap",head:"SRH recombination",flow:"Electron → defect trap → hole",example:"Trap centers and defects in silicon",detail:"A gap-state defect acts as an intermediate step; energy is often transferred to lattice vibrations (phonons)."},
    {group:"rec",kind:"auger",head:"Auger recombination",flow:"Electron + hole → energy to a third carrier",example:"High-injection or heavily doped regions",detail:"Energy from the recombining pair is transferred to another electron or hole instead of being emitted directly as light."}
   ],
   note:"Scattering need not change the free-pair count; recombination removes a free electron–hole pair. At thermal equilibrium total generation G equals total recombination R, while a steady illuminated state is not necessarily equilibrium."
  }
 }
};
function miniBand(d){
 function panel(isAfter){
  const xx=isAfter?360:34;
  return '<g transform="translate('+xx+' 0)">'+
   '<rect x="0" y="48" width="245" height="46" rx="7" class="l03-band-conduction"/>'+
   '<rect x="0" y="168" width="245" height="46" rx="7" class="l03-band-valence"/>'+
   '<text x="11" y="67" class="l03-band-name">'+esc(d.cb)+'</text>'+
   '<text x="11" y="188" class="l03-band-name">'+esc(d.vb)+'</text>'+
   (isAfter?
     '<circle cx="181" cy="70" r="14" class="l03-electron"/><text x="181" y="76" text-anchor="middle" class="l03-charge">−</text>'+
     '<circle cx="181" cy="190" r="14" class="l03-hole"/><text x="181" y="196" text-anchor="middle" class="l03-charge">+</text>':
     '<circle cx="181" cy="190" r="14" class="l03-electron"/><text x="181" y="196" text-anchor="middle" class="l03-charge">−</text>')+
   '<text x="120" y="29" text-anchor="middle" class="l03-small">'+esc(isAfter?d.after:d.before)+'</text>'+
   '</g>';
 }
 return '<svg viewBox="0 0 650 245" role="img" aria-label="'+esc(d.title)+'">'+
 panel(false)+panel(true)+
 '<path d="M290 128 H338 m-10 -9 10 9 -10 9" class="l03-arrow"/>'+
 '<text x="320" y="113" text-anchor="middle" class="l03-small">E₉</text></svg>';
}
function icon(kind){
  let path = {
   photo:'<path d="M12 5 L28 21 L19 21 L27 36"/><path d="M42 10 V42"/><circle cx="48" cy="18" r="5"/>',
   impact:'<path d="M7 25 H27 m-8 -8 8 8 -8 8"/><circle cx="36" cy="25" r="8"/><path d="M45 19 L57 8 M46 31 L57 43"/>',
   thermal:'<path d="M12 38 C24 28 13 17 24 8 M29 42 C40 33 31 17 43 9"/><path d="M43 34 L53 26 L62 34"/>',
   light:'<path d="M8 17 L26 33 m-9 0 9 0 0 -9"/><path d="M31 23 L57 7 m-16 15 7 -16 M38 13 L57 7"/>',
   trap:'<path d="M7 10 H57 M7 45 H57 M30 16 V37 m-6 -6 6 6 6 -6"/><rect x="20" y="28" width="20" height="7" rx="2"/>',
   auger:'<path d="M8 12 L28 30 m-11 0 11 0 0 -10"/><path d="M32 29 L55 9 m-11 0 11 0 0 11"/><circle cx="32" cy="29" r="5"/>'
  }[kind]||"";
  return '<svg class="l03-mechanism-icon" viewBox="0 0 70 54" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">'+path+'</svg>';
}
function render(kind,locale="tr"){
 const l=locale==="en"?"en":"tr",d=copy[l][kind];
 if(!d)return "";
 if(kind==="excitation"){
  return '<figure class="lesson-figure l03-figure l03-excitation"><figcaption>'+esc(d.title)+'</figcaption>'+
   miniBand(d)+'<div class="l03-excitation-paths">'+d.paths.map((p,i)=>'<div class="l03-excitation-path">'+
    '<strong>'+String(i+1)+'. '+esc(p.head)+'</strong><small>'+esc(p.sub)+'</small>'+
    '<p>'+esc(p.body)+'</p><span>'+esc(p.example)+'</span></div>').join("")+'</div>'+
    '<p class="lesson-figure-note">'+esc(d.note)+'</p></figure>';
 }
 const cards=group=>d.items.filter(x=>x.group===group).map(x=>
  '<article class="l03-mechanism-card">'+icon(x.kind)+'<div><strong>'+esc(x.head)+'</strong>'+
  '<p class="l03-mechanism-flow">'+esc(x.flow)+'</p><p>'+esc(x.detail)+'</p>'+
  '<small>'+esc(x.example)+'</small></div></article>').join("");
 return '<figure class="lesson-figure l03-figure l03-mechanisms"><figcaption>'+esc(d.title)+'</figcaption>'+
  '<div class="l03-mechanism-group"><h4>'+esc(d.generation)+'</h4><div class="l03-mechanism-grid">'+cards("gen")+'</div></div>'+
  '<div class="l03-mechanism-group"><h4>'+esc(d.recombination)+'</h4><div class="l03-mechanism-grid">'+cards("rec")+'</div></div>'+
  '<p class="lesson-figure-note">'+esc(d.note)+'</p></figure>';
}
window.Lesson03Mechanisms={render};
})();