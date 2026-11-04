/* Lecture 07: extrinsic semiconductor band model (lec07.pdf, 58 pages).
 * Both language records are built together, preserving heading/topic alignment.
 */
(() => {
"use strict";
const tr = [
 ["Öz bant modelinden katkılı modele",
  "Önceki derste öğrendiğimiz <strong>N(E)</strong> izinli durumları, <strong>f(E,T)</strong> doluluğu verir. Katkılama bu kuralları değiştirmez; yasak banda yerel seviyeler ekler ve termal dengede Fermi seviyesi E<sub>F</sub>'yi kaydırır. Enerji bantları için n₀=N<sub>c</sub>e<sup>−(E<sub>c</sub>−E<sub>F</sub>)/kT</sup>, p₀=N<sub>v</sub>e<sup>−(E<sub>F</sub>−E<sub>v</sub>)/kT</sup> hesapları sürer.",
  "Boltzmann (non-degenerate) yaklaşımını kullanmak için E<sub>c</sub>−E<sub>F</sub> ve E<sub>F</sub>−E<sub>v</sub> uzaklıklarının her biri yaklaşık <strong>3kT</strong> veya daha fazla olmalıdır. Bu yaklaşık %5 doluluk-hatası sınırıdır; kesin keskin geçiş değildir. Öz referans seviyesi E<sub>i</sub>=(E<sub>c</sub>+E<sub>v</sub>)/2+(kT/2)ln(N<sub>v</sub>/N<sub>c</sub>) olup Si'de 300 K'de bant ortasının ~13 meV altındadır.",
  "İzinli enerji durumları ile Fermi doluluğunu birbirine karıştırma.", "3–8"],
 ["Donör ve akseptör seviyelerinin banttaki konumu",
  "Sığ donör Si:P, E<sub>D</sub>=E<sub>c</sub>−0,045 eV; sığ akseptör Si:B, E<sub>A</sub>=E<sub>v</sub>+0,045 eV seviyesinde gösterilir. Bağlı elektronlar yerel katkı durumlarında bulunur. D⁺ elektronunu iletim bandına vermiş pozitif sabit iyon; A⁻ valans bandından elektron almış negatif sabit iyondur.",
  "Seyreltik tek-seviye yaklaşımında donör DOS katkısı <strong>N<sub>D</sub>δ(E−E<sub>D</sub>)</strong> olup delta tepesinin alanı N<sub>D</sub> cm⁻³'tür. Bu enerji seviyesi, banttaki yayılmış durumların yerine geçmez. P/As/Sb için ölçülen enerji farkları (0,045/0,054/0,039 eV) hidrojen-benzeri ortalama modeldeki ≈0,025 eV'den farklı olabilir. Ağır katkıda seviyeler örtüşerek safsızlık bandına ve bant daralmasına yol açabilir.",
  "Tek sivri katkı seviyesi yalnız yalıtık, sığ ve seyreltik katkı için uygun bir modeldir.", "9–14"],
 ["İyonlaşmış katkı oranı ve g faktörü",
  "Toplam donör N<sub>D</sub>, iyonlaşmış donör N<sub>D</sub>⁺, toplam akseptör N<sub>A</sub>, iyonlaşmış akseptör N<sub>A</sub>⁻ ile gösterilir. Dolu donör D⁰, elektronunu bırakmış donör D⁺ olur; akseptör elektron alınca A⁻ olur. Donör için E<sub>F</sub> yükseldikçe bağlı elektron olasılığı artar ve iyonlaşmış pay azalır.",
  "Öğretici hesapta <strong>g=1</strong> alınırsa donör oranı 1/[1+exp((E<sub>F</sub>−E<sub>D</sub>)/kT)] olur. Daha ayrıntılı sayım için g<sub>D</sub>=2 ve g<sub>A</sub>=4 örnek değerleri kullanılır. x=(E<sub>D</sub>−E<sub>F</sub>)/kT=3,5,7 için g=1 donör iyonlaşması sırasıyla yaklaşık %95,3, %99,3, %99,91'dir. g, sonuçların sayısal yüzdesini değiştirir; fiziksel mekanizma değişmez.",
  "g=1 kavramsal ders hesabı; g_D=2/g_A=4 daha hassas sayım seçeneğidir.", "15–20"],
 ["Yük nötrlüğü: dört bilinmeyen, dört denklem",
  "Yalnız donör içeren homojen örnekte bilinmeyenler <strong>n₀, p₀, N<sub>D</sub>⁺, E<sub>F</sub></strong>. İletim ve valans bandı yoğunlukları, donör iyonlaşma formülü ve <strong>n₀=N<sub>D</sub>⁺+p₀</strong> dört denklemi oluşturur. Hem donör hem akseptör varsa <strong>n₀+N<sub>A</sub>⁻=p₀+N<sub>D</sub>⁺</strong> çözülür.",
  "Slayt 23'te deneme E<sub>F</sub> üzerinde negatif yük eğrisi n₀ ile pozitif yük eğrisi N<sub>D</sub>⁺+p₀ kesişir. 300 K ve 10¹⁶ cm⁻³ P katkısında E<sub>c</sub>−E<sub>F</sub>≈0,206 eV, g=1 için donörler ≈%99,8 iyonlaşmıştır. Hesaptan sonra 3kT koşulu, kısmi iyonlaşma ve azınlık yoğunluğunun ihmal edilebilirliği ayrı ayrı denetlenir.",
  "Denge E_F'yi yük nötrlüğü belirler; g seçimi sadece iyonlaşma hesabının katsayısını etkiler.", "21–24"],
 ["Kütle etkisi yasası ve azınlık taşıyıcıları",
  "Dengede ve non-degenerate sınırında n₀p₀=N<sub>c</sub>N<sub>v</sub>exp(−E<sub>g</sub>/kT)=<strong>nᵢ²</strong>. Fermi seviyesi çarpımda sadeleşir. Böylece n-tipi Si için p₀=nᵢ²/n₀; p-tipi Si için n₀=nᵢ²/p₀ hesaplanır.",
  "Bu slaytların bazı örnekleri nᵢ(300 K)=1,5×10¹⁰ cm⁻³ (klasik ders referansı) alırken 05–06'daki model 9,65×10⁹ cm⁻³ ölçüm referansını kullanır. Ayrıca N<sub>c</sub>, N<sub>v</sub> ve E<sub>g</sub>'den elde edilen teorik nᵢ farklı çıkabilir. <strong>Aynı örneğin içinde referansları karıştırma;</strong> sonucu kullanılan referansla açıkla.",
  "Katkılama denge çarpımını değil, çoğunluk ve azınlık yoğunluklarının oranını değiştirir.", "25–26"],
 ["Fermi seviyesinin iki hesabı ve 60 meV kuralı",
  "Yol A: <strong>E<sub>c</sub>−E<sub>F</sub>=kT ln(N<sub>c</sub>/n₀)</strong>. Yol B: <strong>E<sub>F</sub>−E<sub>i</sub>=kT ln(n₀/nᵢ)</strong>. p-tipi için E<sub>F</sub>−E<sub>v</sub>=kT ln(N<sub>v</sub>/p₀) veya E<sub>i</sub>−E<sub>F</sub>=kT ln(p₀/nᵢ) kullanılır. Her iki yol aynı tutarlı veri setiyle birbiriyle uyumlu olmalıdır.",
  "300 K'de dopingin 10 katına çıkması, <strong>tam iyonlaşma ve Boltzmann geçerliyse</strong>, E<sub>F</sub>'yi yaklaşık kT ln10≈<strong>59,5 meV</strong> değiştirir. n-tipinde yukarı, p-tipinde aşağı hareket eder. Bant kenarlarına 3kT'den fazla yaklaşınca veya iyonlaşma tam değilken bu basit çizgiler güvenilir değildir.",
  "E_F kayması doğrusal katkı yoğunluğuyla değil, yoğunluğun logaritmasıyla değişir.", "27–32"],
 ["Freeze-out: tek denklem, pozitif kök ve 77 K örneği",
  "Soğukta n₀≈N<sub>D</sub>⁺, p₀≈0 kabul edilirse n₀²+N′<sub>c</sub>n₀−N′<sub>c</sub>N<sub>D</sub>=0 elde edilir; N′<sub>c</sub>=(N<sub>c</sub>/g<sub>D</sub>)exp(−E<sub>ion</sub>/kT) yalnızca yardımcı katsayıdır. Fiziksel kök <strong>x=n₀/N<sub>D</sub>=2/[1+√(1+4N<sub>D</sub>/N′<sub>c</sub>)]</strong> iyonlaşma oranını verir.",
  "Si:P, N<sub>D</sub>=10¹⁵ cm⁻³, T=77 K için slayt g=1 ile yaklaşık <strong>%83</strong> bulur; g=2 seçilirse pay daha düşüktür. Bu fark düşük sıcaklıkta belirginleştiği için g'yi nicel olarak önemli sayarız. Çok soğukta n₀≈√(N′<sub>c</sub>N<sub>D</sub>); daha ılık ekstrinsik bölgede n₀≈N<sub>D</sub> olur.",
  "Düşük sıcaklıkta tam iyonlaşma varsayımı kontrol edilmeden uygulanmaz.", "33–37"],
 ["Üç sıcaklık rejimi, E_F(T), Arrhenius ve T_i",
  "I — <strong>Freeze-out</strong>: n≈N<sub>D</sub>⁺. II — <strong>Extrinsic</strong>: n≈N<sub>D</sub>. III — <strong>Intrinsic</strong>: n≈p≈nᵢ. Tᵢ yaklaşık olarak nᵢ(Tᵢ)=N<sub>D</sub> eşitliğiyle tanımlanır, ancak tam iyonlaşma durumunda Tᵢ anında elektron yoğunluğu N<sub>D</sub> değil yaklaşık <strong>1,618N<sub>D</sub></strong>'dir.",
  "n–1000/T log grafiğinin sağında (düşük T) freeze-out eğimi yaklaşık −E<sub>ion</sub>/(2k), solunda (yüksek T) öz eğimi yaklaşık −E<sub>g</sub>/(2k)'dir; N<sub>c</sub>∝T³ᐟ² çarpanı eğim çıkarırken düzeltilmelidir. Kompanzasyon yokken T→0 limitinde E<sub>F</sub> yaklaşık (E<sub>c</sub>+E<sub>D</sub>)/2'ye, 0&lt;N<sub>A</sub>&lt;N<sub>D</sub> kompanzasyonunda ise E<sub>D</sub>'ye yaklaşır. T artarken E<sub>F</sub> ekstrinsik bölgede E<sub>i</sub>'ye ilerler; yüksek katkı öz rejime geçişi daha yüksek sıcaklığa iter. E<sub>g</sub>(T) modeli geçiş sayısını değiştirir.",
  "Üç bölge için tek denklem yerine her bölgenin varsayımını ve geçerliliğini kontrol et.", "38–46"],
 ["Telafili katkılama ve 300/600 K örnekleri",
  "İki katkı da tam iyonlaşmışsa net fark ΔN=N<sub>D</sub>−N<sub>A</sub> taşıyıcı türünü belirler. Ancak saçılma merkezleri yaklaşık <strong>N<sub>D</sub>+N<sub>A</sub></strong> toplamıyla ilgilidir. N<sub>D</sub>=N<sub>A</sub> ise n=p=nᵢ olabilir; kristal yine de toplam 2N<sub>D</sub> yüklü iyon içerir.",
  "p-tipi örnek N<sub>A</sub>=10¹⁶, N<sub>D</sub>=5×10¹⁵ cm⁻³. 300 K'de p≈5×10¹⁵ cm⁻³ olur. 600 K'de slayttaki klasik nᵢ(300)=1,5×10¹⁰, sabit E<sub>g</sub> hesabında nᵢ≈2,15×10¹⁵ çıkar; bu durumda p≈<strong>5,80×10¹⁵</strong> ve n≈<strong>0,80×10¹⁵</strong> cm⁻³. Sıcaklık artışıyla azınlık taşıyıcısı ihmal edilemez.",
  "Tam iyonlaşmış telafili p-tipi örnek için p=Δ/2+√[(Δ/2)²+nᵢ²], Δ=N_A−N_D>0.", "47–54"],
 ["Sığ, derin ve amfoterik seviyeler; model sınırları",
  "Sığ donör ve akseptörler bant kenarına yakın olduklarından oda sıcaklığında taşıyıcı yoğunluğunu etkiler. <strong>Derin seviyeler</strong> bandın iç kısmındadır; taşıyıcı tuzakları ve rekombinasyon merkezleri olarak yaşam süresini değiştirebilir. GaAs içinde Cr gibi derin akseptörlerin kısmi doluluğu Fermi seviyesini <strong>sabitleyerek (pinning)</strong> yüksek dirençli yarıyalıtkan altlık üretimine yardımcı olabilir.",
  "<strong>Amfoterik katkı</strong> konuma veya yük durumuna göre donör ya da akseptör rolü üstlenebilir. Au/Si için iletim bandından ≈0,54 eV aşağıdaki akseptör ve valans bandından ≈0,29 eV yukarıdaki donör seviye örnekleri; Si/GaAs için Ga ve As alt örgü konumlarına göre rol değişimi slaytta gösterilir. Derin ve çoklu seviyeler tek N<sub>D</sub>δ(E−E<sub>D</sub>) modelinden fazlasını gerektirir.",
  "Derin seviye ve ağır katkıda g=1 kadar, tek seviyeli sığ katkı modelinin kendisi de yetersiz kalır.", "48–58"]
];
const en=[
 ["From intrinsic bands to extrinsic bands",
  "The three ingredients from earlier lessons remain <strong>allowed states N(E)</strong>, <strong>occupancy f(E,T)</strong>, and charge balance. Doping adds localized gap states and shifts E_F. Equilibrium, nondegenerate bands still give n₀=N_c exp[−(E_c−E_F)/kT] and p₀=N_v exp[−(E_F−E_v)/kT].",
  "The Boltzmann approximation is appropriate when <strong>both E_c−E_F and E_F−E_v are about 3kT or larger</strong>, corresponding to roughly 5% single-state error. The intrinsic reference is E_i=(E_c+E_v)/2+(kT/2)ln(N_v/N_c), around 13 meV below midgap for Si at 300 K.",
  "Separate available energy states from their Fermi occupation.", "3–8"],
 ["Where donor and acceptor levels lie",
  "A shallow P donor sits at E_D=E_c−0.045 eV; a shallow B acceptor at E_A=E_v+0.045 eV. A donor that releases its electron becomes fixed D⁺; an acceptor that captures an electron becomes fixed A⁻. Neither ion moves as a current carrier.",
  "The dilute isolated-level model adds <strong>N_D δ(E−E_D)</strong> to the DOS, with integrated area N_D in cm⁻³. P/As/Sb have measured energies near 0.045/0.054/0.039 eV, unlike the ≈0.025 eV hydrogenic estimate. At heavy doping overlap forms impurity bands and may narrow the host band gap.",
  "The single sharp impurity level is a dilute, shallow-impurity approximation.", "9–14"],
 ["Ionized fractions and the statistical factor g",
  "Total donor/acceptor concentrations N_D/N_A differ from ionized N_D⁺/N_A⁻. D⁰ holds its electron; D⁺ has released it. A⁻ has captured an electron. Raising E_F generally lowers donor ionization.",
  "With teaching convention <strong>g=1</strong>, the donor fraction is 1/[1+exp((E_F−E_D)/kT)]. Standard shallow-Si counting commonly takes g_D=2 and g_A=4. For x=(E_D−E_F)/kT equal to 3, 5, 7, the g=1 fractions are about 95.3%, 99.3%, 99.91%. g changes numerical fractions, not the charge-transfer mechanism.",
  "Use g=1 to learn the physics, and standard factors for more precise quantitative results.", "15–20"],
 ["Four unknowns and four charge-neutrality equations",
  "For donors alone the unknowns are <strong>n₀, p₀, N_D⁺ and E_F</strong>. Conduction and valence densities, donor occupancy and neutrality n₀=N_D⁺+p₀ provide four equations. With both dopants, n₀+N_A⁻=p₀+N_D⁺.",
  "On slide 23, plot negative n₀ against positive p₀+N_D⁺ versus a trial E_F. Their intersection determines equilibrium. For 10¹⁶ cm⁻³ P in Si at 300 K, E_c−E_F≈0.206 eV and ≈99.8% donors ionize with g=1. Always check 3kT, ionization and minority-carrier assumptions.",
  "Charge neutrality determines E_F; g modifies occupancy statistics, not charge conservation.", "21–24"],
 ["Mass action and minority concentrations",
  "At equilibrium in the nondegenerate regime <strong>n₀p₀=N_cN_v exp(−E_g/kT)=n_i²</strong>. E_F cancels. For n-type material p₀=n_i²/n₀; for p-type n₀=n_i²/p₀.",
  "Lecture 07 often uses the traditional n_i(300 K)=1.5×10¹⁰ cm⁻³, whereas lectures 05–06 use a measured reference of 9.65×10⁹ cm⁻³. Independently chosen N_c, N_v and E_g can imply a different theoretical n_i. <strong>Never mix these references within one worked example.</strong>",
  "Doping changes the division between majority and minority carriers, not their equilibrium product.", "25–26"],
 ["Two routes to E_F and the 60 meV rule",
  "Route A: <strong>E_c−E_F=kT ln(N_c/n₀)</strong>. Route B: <strong>E_F−E_i=kT ln(n₀/n_i)</strong>. For holes E_F−E_v=kT ln(N_v/p₀) or E_i−E_F=kT ln(p₀/n_i). The two routes agree with a consistent parameter set.",
  "Near 300 K, a factor-ten doping increase shifts E_F by about <strong>kT ln10≈59.5 meV</strong> if dopants are nearly fully ionized and the Boltzmann approximation is valid. Donor doping raises E_F and acceptor doping lowers it. Near a band edge or in freeze-out this rule fails.",
  "The doping-induced Fermi shift is logarithmic in the concentration.", "27–32"],
 ["Freeze-out equation and the 77 K example",
  "At low temperature with donors only and negligible holes, n₀≈N_D⁺. Define N'_c=(N_c/g_D)exp(−E_ion/kT), a coefficient rather than a new carrier population. The charge equation is n₀²+N'_c n₀−N'_cN_D=0, giving <strong>x=n₀/N_D=2/[1+√(1+4N_D/N'_c)]</strong>.",
  "For Si:P with N_D=10¹⁵ cm⁻³ at 77 K the slides obtain about <strong>83%</strong> ionization with g=1; g=2 reduces it. When very cold, n≈√(N'_cN_D); on warming, before intrinsic carriers matter, n≈N_D.",
  "Do not assume complete ionization in freeze-out.", "33–37"],
 ["Three regimes, E_F(T), Arrhenius and T_i",
  "I: freeze-out n≈N_D⁺. II: extrinsic plateau n≈N_D. III: intrinsic n≈p≈n_i. Crossover T_i is conventionally defined by n_i(T_i)=N_D, but at T_i the actual n=φN_D≈<strong>1.618N_D</strong> for fully ionized donors.",
  "On ln n versus 1/T, the low-temperature slope is about −E_ion/(2k), while high-temperature intrinsic slope is about −E_g/(2k); account for the slowly varying T³ᐟ² DOS factor. As T→0, uncompensated donors give E_F→(E_c+E_D)/2; with 0&lt;N_A&lt;N_D compensation E_F→E_D. During the plateau E_F moves toward E_i as T rises; more doping delays intrinsic crossover.",
  "Use each limiting formula only in the regime where its assumptions hold.", "38–46"],
 ["Compensation and 300/600 K examples",
  "For fully ionized mixed dopants, the net N_D−N_A sets the carrier type; <strong>N_D+N_A</strong> gives the count of charged impurity scatterers. Perfect compensation N_D=N_A can give n=p=n_i while leaving twice the concentration of charged centers.",
  "For N_A=10¹⁶, N_D=5×10¹⁵ cm⁻³, room-temperature p≈5×10¹⁵. At 600 K using the slide's old n_i(300 K)=1.5×10¹⁰ and constant E_g, n_i≈2.15×10¹⁵, so <strong>p≈5.80×10¹⁵ and n≈0.80×10¹⁵ cm⁻³</strong>. Thermal generation can no longer be neglected.",
  "For p-type compensation p=Δ/2+√[(Δ/2)²+n_i²] where Δ=N_A−N_D>0.", "47–54"],
 ["Shallow, deep and amphoteric levels",
  "Shallow levels near band edges set free-carrier concentrations; <strong>deep levels</strong> trap carriers and affect lifetimes and recombination. Deep Cr acceptors in GaAs can partly fill and pin E_F near the trap energy, producing high resistivity.",
  "<strong>Amphoteric dopants</strong> can be donor-like or acceptor-like according to site/charge. Examples on the slides include Au in Si with a deep acceptor about 0.54 eV below E_c and a donor about 0.29 eV above E_v; Si in GaAs can be donor-like on Ga and acceptor-like on As lattice sites. Deep/multiple levels need more than a one-level shallow model.",
  "For deep levels and heavy doping, limitations of the whole model outweigh g=1 simplification.", "48–58"]
];
const formulas=[
 "E<sub>i</sub>=(E<sub>c</sub>+E<sub>v</sub>)/2+(kT/2)ln(N<sub>v</sub>/N<sub>c</sub>)",
 "E<sub>D</sub>=E<sub>c</sub>−E<sub>ion,D</sub> · E<sub>A</sub>=E<sub>v</sub>+E<sub>ion,A</sub>",
 "N<sub>D</sub>⁺/N<sub>D</sub>=1/[1+g<sub>D</sub>e<sup>(E<sub>F</sub>−E<sub>D</sub>)/kT</sup>]",
 "n₀+N<sub>A</sub>⁻=p₀+N<sub>D</sub>⁺",
 "n₀p₀=nᵢ²",
 "E<sub>c</sub>−E<sub>F</sub>=kTln(N<sub>c</sub>/n₀) · E<sub>F</sub>−E<sub>i</sub>=kTln(n₀/nᵢ)",
 "x=2/[1+√(1+4N<sub>D</sub>/N′<sub>c</sub>)]",
 "n=[N<sub>D</sub>+√(N<sub>D</sub>²+4nᵢ²)]/2 (tam iyonlaşma)",
 "p=[Δ+√(Δ²+4nᵢ²)]/2 (p-tipi, Δ=N<sub>A</sub>−N<sub>D</sub>)",
 "E<sub>t</sub> derin katkı seviyesi · E<sub>F</sub> ≈ E<sub>t</sub> (pinning)"
];
const outTr=[
 "Katkılı bant modelinin önceki N(E) ve f(E,T) bilgisine nasıl dayandığını açıklarım.",
 "Donör ve akseptör enerji seviyelerini bant diyagramında işaretlerim.",
 "g=1 ile standart g_D/g_A değerlerinin farkını ve sınırlarını açıklarım.",
 "Dört denklemle yük nötrlüğünü kurup E_F için kontrol yaparım.",
 "Kütle etkisi yasasından azınlık yoğunluğunu bulurum.",
 "E_F'yi bant kenarından ve öz seviyeden hesaplayıp 60 meV kuralını uygularım.",
 "Freeze-out ikinci derece denklemini ve 77 K iyonlaşmasını hesaplarım.",
 "Üç sıcaklık rejimini, Arrhenius eğimlerini ve T_i'yi yorumlarım.",
 "Kompanzasyon için net katkı, toplam iyon ve taşıyıcı yoğunluğunu ayırırım.",
 "Sığ, derin ve amfoterik katkı seviyelerinin cihaz etkisini açıklarım."
];
const outEn=[
 "Explain how the extrinsic band model reuses N(E) and f(E,T).",
 "Locate donor and acceptor levels in a band diagram.",
 "Explain the role and limits of g=1 versus standard g_D/g_A.",
 "Solve four-equation charge neutrality and check E_F.",
 "Find minority concentrations from mass action.",
 "Compute E_F via both routes and use the 60 meV rule.",
 "Derive the freeze-out quadratic and evaluate ionization at 77 K.",
 "Interpret the three regimes, Arrhenius slopes and T_i.",
 "Separate net doping, total ions and carriers under compensation.",
 "Explain how shallow, deep and amphoteric levels affect devices."
];
const globalGuide={
 tr:{
  title:"g faktörü: fiziği anlamak için neden g=1 ile başlıyoruz?",
  intro:"Bu derste temel mekanizmayı öğrenirken <strong>g=1</strong> seçimini kullanıyoruz. Böylece dikkatimizi <strong>E_F−E_D/E_A, sıcaklık, iyonlaşma ve yük nötrlüğü</strong> ilişkilerine verebiliyoruz. g, farklı mikroskobik durumların sayımına ilişkin istatistiksel düzeltmedir; yeni bir fiziksel taşıyıcı türü veya yeni bir enerji seviyesi değildir.",
  caveat:"<strong>Önemli sınır:</strong> g sayısal hesapta tamamen önemsiz değildir. Özellikle freeze-out'ta iyonlaşma yüzdesi değişir; standart sığ Si katkıları için çoğunlukla g_D=2 ve g_A=4 kullanılır. Slayttaki g=1 sonuçlarını deneysel kesin değer olarak yorumlamayın. Önceki 06. dersteki hesaplayıcı standart faktörleri varsayar; bu 07. derste iki seçimi karşılaştırabilirsiniz.",
  short:"Referans: g=1 (öğrenme modeli) · Ayrıntılı: g_D=2, g_A=4 (standart sayım)."
 },
 en:{
  title:"Why we use g=1 to learn the physics",
  intro:"This course starts with <strong>g=1</strong> to focus on <strong>E_F−E_D/E_A, temperature, ionization and charge neutrality</strong>. The g factor counts microscopic configurations; it is not a new carrier type or energy level.",
  caveat:"<strong>Important limit:</strong> g is not numerically irrelevant. Ionized fractions can differ substantially in freeze-out. Standard shallow Si statistics often use g_D=2 and g_A=4; a teaching g=1 result must not be labeled an exact measured value. The 06 simulator defaults to standard factors; this 07 lesson compares both.",
  short:"Reference: g=1 (learning model) · Detailed: g_D=2, g_A=4 (standard counting)."
 }
};
for(const [lang,rows,outcomes] of [["tr",tr,outTr],["en",en,outEn]]){
 const translated=rows.map((r,i)=>({
  title:r[0], paragraphs:[r[1],r[2]], key:r[3], equation:formulas[i], slideReference:"lec07.pdf, s. "+r[4], gContext:[2,3,6,7,8].includes(i),
  visual07:["levels","dos","ionization","neutrality",null,"fermi","temperature","arrhenius","compensation","deep"][i]
 }));
 const lesson={
  id:"07",
  navTitle:lang==="tr"?"Katkılı Bant Modeli":"Extrinsic Bands",
  title:lang==="tr"?"Katkılı Yarıiletkenlerde Bant Modeli, Fermi Seviyesi ve İyonlaşma":"Extrinsic Semiconductor Band Model, Fermi Level and Ionization",
  kicker:lang==="tr"?"Nicel katkı fiziği":"Quantitative extrinsic physics",
  description:lang==="tr"?"Bant içi katkı seviyelerinin doluluğunu yük nötrlüğüyle birleştir; Fermi seviyesini, sıcaklık rejimlerini ve kompanzasyonu hesapla.":"Combine impurity-level occupancy with charge neutrality to compute Fermi level, temperature regimes and compensation.",
  focus:lang==="tr"?"Yük nötrlüğünü çöz":"Solve charge neutrality",
  gGuide:globalGuide[lang],topics:translated,outcomes,
  future:{grafikler:[],simulasyonlar:[],sorular:[],
    oyunlar:lang==="tr"?["Seviyeleri eşleştir","Doğru rejimi seç"]:["Match the energy levels","Choose the correct regime"]}
 };
 const target=lang==="tr"?window.COURSE_LESSONS:window.COURSE_LESSONS_EN;
 if(!Array.isArray(target)||target.some(x=>x.id==="07"))throw Error("Cannot register lecture 07");
 target.push(lesson);
}
window.Lecture07Guide=globalGuide;
})();