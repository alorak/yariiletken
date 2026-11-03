/* Slide-derived narrative supplements, applied after the TR/EN lesson data load.
 * lec05.pdf pp.3–17 and lec06.pdf pp.3–13.
 * The existing topic order is preserved; additions cover missing derivations,
 * assumptions, numerical examples and the distinction between schematic models
 * and quantitative physical claims.
 */
(() => {
  "use strict";
  const add = (id, index, tr, en, figure) => {
    const a=window.COURSE_LESSONS.find(x=>x.id===id);
    const b=window.COURSE_LESSONS_EN.find(x=>x.id===id);
    if(!a||!b||!a.topics[index]||!b.topics[index])throw Error("Lecture 05/06 translation alignment: "+id+"-"+index);
    a.topics[index].paragraphs.push(tr);
    b.topics[index].paragraphs.push(en);
    if(figure){a.topics[index].lectureFigure=figure;b.topics[index].lectureFigure=figure;}
  };
  // Lecture 05 — density of states, occupancy and intrinsic statistics.
  add("05",0,
    "Slayt 3–4'teki <strong>kova benzetmesi</strong> önemlidir: 'tam E enerjisinde kaç durum var?' sorusunun yerine E ile E+dE <em>aralığındaki</em> durum sayısını sorarız. Birim analizi: N(E) [cm⁻³ eV⁻¹] × dE [eV] = cm⁻³. Tüm valans bandı boyunca integral, doluluk değil izinli durum sayımıdır; Si'de valans durumu sayısı yaklaşık 4×(5×10²²) cm⁻³ mertebesindedir.",
    "The <strong>bucket analogy</strong> on slides 3–4 distinguishes the meaningless question 'how many states exactly at E?' from the number in the finite interval E to E+dE. Units: N(E) [cm⁻³ eV⁻¹] × dE [eV] = cm⁻³. Integrating over the entire valence band counts allowed states, of order 4×(5×10²²) cm⁻³ in Si, not occupied states.",
    "dos");
  add("05",0,
    "Bant kenarına yakın parabolik E(k) ilişkisi <strong>karekök DOS</strong> verir: N_c(E)=a₁√(E−E_c), N_v(E)=a₂√(E_v−E). Bu yaklaşım bantların iç bölgelerini değil, taşıyıcıların yoğunlaştığı kenarlarını modeller. Sunum, enerjiyi dikey gösteren bant şemasını ve alışılmış yatay enerji grafiğini birlikte kullanır.",
    "Parabolic E(k) near the edges yields the <strong>square-root DOS</strong>: N_c(E)=a₁√(E−E_c), N_v(E)=a₂√(E_v−E). This approximates the band edges where carriers concentrate, not the entire band. The slides show both the vertical-energy band-diagram convention and the conventional horizontal-energy plot.");
  add("05",1,
    "Slayt 6–7'nin temel ayrımı: <strong>E_F bir enerji referansıdır, otomatik olarak izinli bir durum değildir.</strong> Öz Si'de E_F bant aralığında olsa bile f(E_F)=1/2 eşitliği matematiksel olarak geçerlidir; aralıkta N(E)=0 olduğundan dolacak durum yoktur. 0 K'de basamak, T>0'da iki taraflı kuyruk oluşur.",
    "The key distinction on slides 6–7: <strong>E_F is an energy reference, not necessarily an allowed electronic state.</strong> In intrinsic Si it can lie in the gap where N(E)=0, even though f(E_F)=1/2 formally holds. At 0 K there is a step; at T>0 there are two thermal tails.",
    "fd");
  add("05",2,
    "Slayt 8'deki <strong>3kT ölçütü</strong> niceldir: x=(E−E_F)/kT=3 iken tam f=1/(1+e³)≈0,0474, Boltzmann f_B=e⁻³≈0,0498; göreli hata yaklaşık %5'tir. 300 K'de kT≈0,02585 eV, 3kT≈0,0776 eV. Holler için E, E_F'nin <em>altındaysa</em> yaklaşık 1−f(E)≈exp[−(E_F−E)/kT] kullanılır.",
    "Slide 8 makes the <strong>3kT criterion</strong> quantitative: at x=(E−E_F)/kT=3, exact f=1/(1+e³)≈0.0474 versus Boltzmann e⁻³≈0.0498, about a 5% relative error. At 300 K, kT≈0.02585 eV and 3kT≈0.0776 eV. For holes below E_F, the corresponding approximation is 1−f≈exp[−(E_F−E)/kT].");
  add("05",3,
    "Slayt 9–10'a göre iletim bandında <strong>N_c(E)f(E,T)</strong> integrandı N(E) artarken doluluk azaldığı için bant kenarının az üzerinde tepe yapar. Parabolik DOS ve Boltzmann koşulunda tepe E−E_c=kT/2 ≈13 meV (300 K) noktasındadır; yaklaşık 0,15 eV yukarıda katkı çok küçüktür. Bu, integrali ∞'ye uzatmanın neden uygun olduğunu da açıklar.",
    "On slides 9–10 the <strong>N_c(E)f(E,T)</strong> integrand peaks slightly above the band edge because DOS rises while occupancy falls. For parabolic DOS in the Boltzmann regime, E−E_c=kT/2≈13 meV at 300 K; contributions are tiny by about 0.15 eV. This also explains why the upper integration limit can be extended to infinity.",
    "product");
  add("05",3,
    "Holler için eşdeğer hesap p₀=∫<sub>−∞</sub><sup>Eᵛ</sup>N_v(E)[1−f(E,T)]dE'dir. Burada <strong>n₀</strong> herhangi bir dengedeki iletim elektron yoğunluğudur; yalnızca öz durumda n₀=nᵢ olur. 'nᵢ=∫N(E)f(E)dE' yazımı öz duruma özgüdür.",
    "The analogous hole integral is p₀=∫ from −∞ to E_v of N_v(E)[1−f(E,T)]dE. The symbol <strong>n₀</strong> denotes conduction electrons for any equilibrium doping; only intrinsic material has n₀=n_i. An integral labeled n_i is intrinsic-specific.");
  add("05",4,
    "Slayt 11'deki <strong>etkin N_c ve N_v</strong>, gerçek enerji dağılımının tüm durumlarını fiziksel olarak E_c ve E_v'ye taşımak değildir; integrali tek eşdeğer sayı ile ifade eden hesaplama kısayoludur. 300 K Si için N_c≈2,8×10¹⁹, N_v≈1×10¹⁹ cm⁻³ referansları kullanılabilir.",
    "The <strong>effective N_c and N_v</strong> on slide 11 do not literally move electronic states to E_c or E_v; they are compact integrals represented by an equivalent concentration. Useful 300 K Si references are N_c≈2.8×10¹⁹ and N_v≈1×10¹⁹ cm⁻³.");
  add("05",4,
    "Slayt 15'in ayrımı: Si elektronları için <strong>iletkenlik etkin kütlesi</strong> yaklaşık 0,26m₀ iken DOS etkin kütlesi yaklaşık 1,18m₀ değerinde verilir; sayım ve taşınım farklı büyüklüklerdir. Slayt 5'te DOS kütlesi yaklaşık 1,08m₀ olarak da yazılmıştır: bu iki yaklaşık değeri tek bir kesin sabit gibi sunmak yerine, kullanılan vadi/dejenerasyon tanımını ve N_c referansını belirtmek gerekir.",
    "Slide 15 distinguishes the Si electron <strong>conductivity effective mass</strong> (about 0.26m₀) from a DOS effective mass (about 1.18m₀). Slide 5 also quotes about 1.08m₀: these should not be treated as one unambiguous constant without specifying valley/degeneracy convention and the N_c reference.");
  add("05",5,
    "Slayt 10, 13: n₀=N_c exp[−(E_c−E_F)/kT], p₀=N_v exp[−(E_F−E_v)/kT]. Çarpılınca E_F sadeleşir ve <strong>n₀p₀=N_cN_v exp(−E_g/kT)=nᵢ²</strong> bulunur. Bu bağıntı denge + non-degenerate sınırına bağlıdır; aşırı katkı veya denge dışı durumda aynı basit biçim güvenle kullanılamaz.",
    "Slides 10 and 13: n₀=N_c exp[−(E_c−E_F)/kT], p₀=N_v exp[−(E_F−E_v)/kT]. Multiplying cancels E_F, giving <strong>n₀p₀=N_cN_v exp(−E_g/kT)=n_i²</strong>. This result assumes equilibrium and nondegenerate carriers; it is not the same universal formula for strongly degenerate or nonequilibrium conditions.");
  add("05",6,
    "Slayt 14 iki nᵢ(300 K) referansı içerir: ders tablosundaki <strong>klasik 1,5×10¹⁰</strong> cm⁻³ ile daha güncel ölçüm/yeniden analiz değeri <strong>9,65×10⁹</strong> cm⁻³. Simülasyonun sıcaklık eğrisi ikinci referansa sabitlenmiştir. E_g, N_c ve N_v bağımsız ölçülmüş yaklaşık parametreler olduğundan formülden elde edilen değer ile ölçülen nᵢ'nin bire bir eşleşmesi beklenmemelidir.",
    "Slide 14 lists both the <strong>traditional 1.5×10¹⁰</strong> cm⁻³ and a more recent measured/reanalyzed <strong>9.65×10⁹</strong> cm⁻³ intrinsic Si reference at 300 K. Our temperature graph is anchored to the latter. Independently measured approximate E_g, N_c and N_v need not reproduce that measured n_i exactly.",
    "arr");
  add("05",6,
    "Slayt 16–17: ln nᵢ=ln B+(3/2)ln T−E_g/(2kT) olduğundan ln nᵢ–1/T çizgisinin eğimi yaklaşık −E_g/2k'dir; T<sup>3/2</sup> düzeltmesi göz ardı edilmemelidir. Öz Fermi seviyesi <strong>Eᵢ=(E_c+E_v)/2+(kT/2)ln(N_v/N_c)</strong> olup Si'de 300 K'de orta bandın yaklaşık 10–14 meV altındadır. E−E_F ekseni bu mutlak kaymayı gizler.",
    "Slides 16–17: ln n_i=ln B+(3/2)ln T−E_g/(2kT), so the ln n_i versus 1/T slope is approximately −E_g/2k, with a non-negligible T³ᐟ² correction. The intrinsic Fermi energy is <strong>E_i=(E_c+E_v)/2+(kT/2)ln(N_v/N_c)</strong>, around 10–14 meV below midgap in Si at 300 K. An E−E_F plot hides the absolute shift.");

  // Lecture 06 — shallow impurity ionization, compensation and temperature ranges.
  add("06",0,
    "Slayt 4'ün sayısal örneğinde N_D=10¹⁶ cm⁻³ ve 1 cm³ örnek için atom sayısı yaklaşık N=10¹⁶, tipik Poisson sapması <strong>√N=10⁸</strong>'dir; oran yalnızca 10⁻⁸'dir. Bu ± değer mutlak sınır değil standart sapmadır. Küçük gözlem hacimlerinde bağıl dalgalanma artar.",
    "Slide 4: with N_D=10¹⁶ cm⁻³ in 1 cm³, the count is about N=10¹⁶ and its typical Poisson standard deviation <strong>√N=10⁸</strong>, a relative fluctuation of 10⁻⁸. The ± value is a standard deviation, not a hard bound. Relative fluctuations increase in small volumes.");
  add("06",0,
    "Slayt 5: Si atom yoğunluğu yaklaşık 5×10²² cm⁻³ olduğundan 10¹⁶ cm⁻³ katkı, yaklaşık <strong>5 milyon Si atomuna bir katkı atomu</strong> demektir. Ortalama katkı aralığı N_D⁻¹ᐟ³≈46 nm'dir. Bu seyreltik açıklama 10¹³–10²⁰ cm⁻³ gibi tüm aralık boyunca eşit derecede güvenilir değildir; yüksek katkıda orbital örtüşmesi ve bant değişimleri başlar.",
    "Slide 5: Si has about 5×10²² atoms/cm³, so 10¹⁶ cm⁻³ corresponds to roughly <strong>one impurity in five million Si atoms</strong>. Mean dopant spacing N_D⁻¹ᐟ³≈46 nm. The isolated-impurity approximation is not equally valid throughout 10¹³–10²⁰ cm⁻³; high concentrations introduce wave-function overlap and band changes.");
  add("06",1,
    "Slayt 6'daki <strong>0 K bağ şemaları</strong> gerçek elektron/hol yörüngeleri değildir. P, dört kovalent bağa ek beşinci zayıf bağlı elektronu sağlar; P⁺ + e⁻ üretirken doğrudan hol üretmez. B elektronu kabul edince B⁻ + h⁺ oluşur; doğrudan iletim elektronu üretilmez.",
    "The <strong>0 K bond sketches</strong> on slide 6 are not literal electron or hole orbits. P has four covalent bonds plus a fifth weakly bound electron; P⁺+e⁻ does not directly create a hole. B accepts an electron, leaving B⁻+h⁺ without directly generating a conduction electron.");
  add("06",2,
    "Slayt 7'deki hidrojen-benzeri yaklaşım <strong>E_ion≈(m*/m₀)13,6 eV/ε_r²</strong> şeklindedir. Si'de ε_r≈12 ve yörünge yarıçapı yaklaşık 2,4 nm'dir. Basitleştirilmiş model ≈0,025 eV verirken ölçülen Si:P ≈0,045 eV'dur; As ≈0,054, Sb ≈0,039, B ≈0,045 eV. B ile P eşitliği bir simetri yasası değildir.",
    "The hydrogenic approximation on slide 7 is <strong>E_ion≈(m*/m₀)13.6 eV/ε_r²</strong>. For Si, ε_r≈12 and the characteristic radius is about 2.4 nm. The simplified model predicts about 0.025 eV whereas measured Si:P is about 0.045 eV; As ≈0.054, Sb ≈0.039 and B ≈0.045 eV. Equality of B and P is not enforced by symmetry.");
  add("06",2,
    "Önemli fiziksel ayrım: E_g≈1,12 eV, <strong>elektronik bant aralığıdır</strong>; tek bir Si–Si kimyasal bağının kopma enerjisi olarak kesin tanımlanamaz. Dersin 0,045 eV ile 1,1 eV karşılaştırması, katkı iyonlaşmasının bantlar arası üretimden çok daha az enerji gerektirdiğini anlatan yaklaşık karşılaştırmadır.",
    "Important distinction: E_g≈1.12 eV is the <strong>electronic band gap</strong>, not by definition the energy of breaking one isolated Si–Si chemical bond. The slide's 0.045 versus 1.1 eV comparison illustrates the much lower energy of shallow-impurity ionization relative to interband excitation.");
  add("06",3,
    "Slayt 8'e göre iki taşıyıcı kaynağını ayır: <strong>donör iyonlaşması → tek serbest elektron</strong>; <strong>termal bantlar arası uyarılma → bir elektron ve bir hol</strong>. 300 K'de kT≈0,026 eV'dur; E_ion/kT≈1,7 ve E_g/kT≈43 karşılaştırması bir enerji ölçeğidir, 'iki veya kırk iki parçacığın kesin birleşmesi gerekir' demek değildir.",
    "Slide 8 separates two sources: <strong>donor ionization produces a single free electron</strong>; <strong>thermal interband excitation produces one electron and one hole</strong>. At 300 K, kT≈0.026 eV; E_ion/kT≈1.7 and E_g/kT≈43 compare energy scales, not a literal requirement for two or 42 particles to cooperate.");
  add("06",4,
    "Slayt 10: yalnız donör varsa <strong>n₀=N_D⁺+p₀</strong>; yalnız akseptör varsa <strong>p₀=N_A⁻+n₀</strong>. Her iki katkıda da genel denklem n₀+N_A⁻=p₀+N_D⁺ kullanılır. Azınlık taşıyıcıları katkının doğrudan iyonlaşma ürünleri değildir; denge ve kütle etkisi yasasıyla ilişkilidir.",
    "Slide 10: for donors only, <strong>n₀=N_D⁺+p₀</strong>; for acceptors only, <strong>p₀=N_A⁻+n₀</strong>. With both species use the general neutrality condition n₀+N_A⁻=p₀+N_D⁺. Minority carriers are not direct impurity-ionization products; equilibrium statistics determine their concentration.");
  add("06",5,
    "Slayt 11'in tam iyonlaşmış örneğinde N_D=10¹⁶, N_A=4×10¹⁵ cm⁻³ için <strong>net katkı 6×10¹⁵</strong> cm⁻³ olsa da toplam iyonlaşmış katkı <strong>1,4×10¹⁶</strong> cm⁻³'tür. Yalnız net farkı bilmek çoğunluk taşıyıcısını yaklaşık hesaplamaya yeter; saçılma merkezlerini saymaya yetmez. Mobilite, sadece bu toplamın fonksiyonu da değildir.",
    "Slide 11: for fully ionized N_D=10¹⁶ and N_A=4×10¹⁵ cm⁻³, the <strong>net density is 6×10¹⁵</strong> cm⁻³ but the <strong>total ionized impurity concentration is 1.4×10¹⁶</strong> cm⁻³. The net difference estimates majority carriers, not the number of scattering centers. Mobility is not determined solely by that sum.");
  add("06",6,
    "Slayt 3, 9 ve 12'de üç katkı düzeyi için iki farklı gösterim vardır: <strong>n–T doğrusal</strong> eğrisinde yükseliş/plato/öz artış; <strong>n–1000/T logaritmik</strong> eğrisinde düşük T ve yüksek T üstel davranışı görünür. Kısmi iyonlaşma (I) için n≈N_D⁺, ekstrinsik (II) için n≈N_D, öz (III) için n≈p≈nᵢ yaklaşımı kullanılır.",
    "Slides 3, 9 and 12 show two perspectives for three doping levels: the <strong>linear n versus T</strong> curve reveals onset/plateau/intrinsic rise; the <strong>log n versus 1000/T</strong> plot highlights exponential behavior at low and high temperatures. Approximate regions: (I) n≈N_D⁺, (II) n≈N_D, and (III) n≈p≈n_i.",
    "nd");
  add("06",6,
    "Slayt 12'deki Tᵢ≈550/650/790 K (sırasıyla N_D=10¹⁵/10¹⁶/10¹⁷ cm⁻³) değerleri <strong>sunumun seçtiği yaklaşık modelin referanslarıdır</strong>; evrensel geçiş sıcaklıkları değildir. Tᵢ için genellikle nᵢ(Tᵢ)≈N_D tanımı kullanılır. Gösterimde nᵢ(300) ölçüm referansı ve sabit E_g kullanıldığından sınır sayıları az da olsa farklı çıkabilir.",
    "The T_i≈550/650/790 K values on slide 12 (N_D=10¹⁵/10¹⁶/10¹⁷ cm⁻³) are <strong>approximate reference points for the slide's chosen model</strong>, not universal thresholds. A common criterion is n_i(T_i)≈N_D. The simulator uses a measured n_i(300) anchor and constant E_g, so predicted crossover temperatures may differ.");
  add("06",7,
    "Slayt 13: bağ modeli <strong>neden</strong> elektron veya hol oluştuğunu açıklar ama azınlık yoğunluğunu, iyonlaşmış katkı payını ve sıcaklıktaki geçişi tek başına hesaplayamaz. Bir sonraki bant modeli adımı E_D ve E_A katkı seviyelerinin E_F'ye göre doluluklarını ve yük nötrlüğünü birlikte çözmektir.",
    "Slide 13: the bond model explains <strong>why</strong> donors yield electrons and acceptors holes, but not the minority concentration, partial-ionization fraction or full temperature dependence. Quantitative extrinsic band theory solves the E_D/E_A occupancies relative to E_F together with charge neutrality.");

  const tr05=window.COURSE_LESSONS.find(x=>x.id==="05"),
        en05=window.COURSE_LESSONS_EN.find(x=>x.id==="05"),
        tr06=window.COURSE_LESSONS.find(x=>x.id==="06"),
        en06=window.COURSE_LESSONS_EN.find(x=>x.id==="06");
  tr05.outcomes.push("3kT'de yaklaşık %5 Boltzmann hatasını hesaplar, öz Fermi seviyesinin orta bant kaymasını bulurum.");
  en05.outcomes.push("Calculate roughly 5% Boltzmann error at 3kT and the midgap shift of intrinsic E_F.");
  tr06.outcomes.push("Katkı iyonlaşmasıyla termal elektron–hol çifti üretimini ayırır, toplam iyonlaşmış safsızlıkları yorumlarım.");
  en06.outcomes.push("Distinguish impurity ionization from thermal electron–hole pair generation and assess total ionized impurities.");
})();