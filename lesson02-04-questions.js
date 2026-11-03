/* Coverage additions for first three course modules (02/03/04).
 * Existing 02/03 questions are not reordered: stored answers retain their indices.
 * New 04 bank is grounded in the nine current Part 4 lesson topics.
 * Each option has its own bilingual feedback and topic index.
 */
(() => {
"use strict";
const course=window.COURSE_ACTIVITIES;
if(!course?.["02"]?.questions || !course?.["03"]?.questions)throw Error("Load activities and earlier question extensions first");
const mk=(topic,correct,q,options,reasons)=>({
 topic,correct,q:{tr:q[0],en:q[1]},
 options:options.map(v=>({tr:v[0],en:v[1]})),
 reasons:reasons.map(v=>({tr:v[0],en:v[1]}))
});
const q02=[
mk(2,1,["[001] izdüşümünde gösterilen iki atom aynı (x,y) koordinatında olabilir mi?","Can two atoms in a [001] projection share (x,y) coordinates?"],[
["Hayır, bütün atomların z yüksekliği aynıdır.","No: all atoms have equal z coordinates."],
["Evet. İzdüşümde üst üste görünseler bile farklı z/a yüksekliklerinde bulunabilirler.","Yes. They may overlap in projection while having different z/a heights."],
["Yalnızca kristal tamamen iki boyutluysa mümkündür.","Only if the crystal is strictly two-dimensional."]
],[
["3B diamond yapısındaki atomların yükseklikleri birbirinden farklıdır.","The diamond lattice has multiple atomic heights."],
["Doğru. [001] izdüşümü z bileşenini göstermez; atomların 3B tetrahedral komşuluğu korunur.","Correct. Projection suppresses z, although the 3D tetrahedral coordination remains."],
["İki boyutlu gösterim, üç boyutlu örgünün bir izdüşümüdür.","A 2D diagram is a projection of a 3D lattice."]
]),
mk(1,2,["5×10²² Si atomu/cm³ ve 10¹⁰ öz elektron/cm³ için atom/öz elektron oranı kaçtır?","For 5×10²² Si atoms/cm³ and 10¹⁰ intrinsic electrons/cm³, what is the atom/electron ratio?"],[
["5×10⁻¹²","5×10⁻¹²"],["5×10²²","5×10²²"],["5×10¹²","5×10¹²"]
],[
["Bu atom/elektron oranının tersidir.","This is the inverse of the required atom/electron ratio."],
["Atom yoğunluğunu taşıyıcı yoğunluğuna bölmek gerekir.","You must divide atomic density by carrier density."],
["Doğru: (5×10²²)/(10¹⁰)=5×10¹² atom başına bir öz elektron.","Correct: (5×10²²)/(10¹⁰)=5×10¹² atoms per intrinsic electron."]
]),
mk(3,0,["Termal dengedeki p–n ekleminde sürüklenme ve difüzyon akımlarının ilişkisi nedir?","At equilibrium in a p–n junction, how are drift and diffusion currents related?"],[
["Toplam akım sıfırdır; karşıt yönlü sürüklenme ve difüzyon bileşenleri dengelenir.","The net current is zero; opposing drift and diffusion components balance."],
["Difüzyon tamamen yok olur.","Diffusion disappears entirely."],
["Sürüklenme ve difüzyon aynı yönde sürekli büyür.","Drift and diffusion grow in the same direction."]
],[
["Doğru. Ayrıntılı dengede termal dengede net akım yoktur; mikroskobik süreçler durmaz.","Correct. Detailed equilibrium gives zero net current without freezing microscopic motion."],
["Denge iki akım mekanizmasının yok olması değil, dengelenmesidir.","Equilibrium balances two transport mechanisms rather than removing diffusion."],
["Net büyüyen akım termal denge durumuna uymaz.","A growing net current is incompatible with thermal equilibrium."]
]),
mk(4,1,["Sabit aydınlatmada üretim ve rekombinasyon eşitlenmişse örnek için ne söylenir?","Under steady illumination, generation balances recombination. What can be concluded?"],[
["Kesinlikle termal dengededir.","It must be in thermal equilibrium."],
["Kararlı durumda olabilir ama dış uyarım nedeniyle termal dengede değildir.","It may be steady-state but is not in thermal equilibrium because of external drive."],
["Böyle bir durum asla mümkün değildir.","Such a state is impossible."]
],[
["Net üretimin sıfır olması dışarıdan enerji akışı yok demek değildir.","Zero net generation does not imply absence of external energy input."],
["Doğru. Kararlı durum dengeyi içerebilir; ama her kararlı durum termal denge değildir.","Correct. Equilibrium is a subset of steady states, not vice versa."],
["Aydınlatma altında kararlı taşıyıcı nüfusu mümkün olabilir.","Steady carrier populations are possible under illumination."]
]),
mk(5,2,["nᵢ–T grafiği doğrudan cm⁻³ biriminde çizildiğinde sıcaklık artışı nasıl yorumlanır?","On an nᵢ–T graph whose y-axis is directly in cm⁻³, how should rising temperature be read?"],[
["Grafik otomatik olarak log₁₀[nᵢ] gösterir.","It automatically shows log₁₀[nᵢ]."],
["Her sıcaklıkta nᵢ sabittir.","nᵢ is constant at every temperature."],
["Y ekseni gerçek nᵢ yoğunluğudur; daha yüksek T genellikle daha fazla öz taşıyıcı oluşturur.","The y-axis shows actual nᵢ density; higher T generally creates more intrinsic carriers."]
],[
["Doğrusal eksendeki nᵢ ile logaritması ayrı niceliklerdir.","An nᵢ linear axis and its logarithm are different representations."],
["Termal uyarılma sıcaklığa bağlıdır.","Thermal excitation depends on temperature."],
["Doğru. Eğri nᵢ'nin fiziksel yoğunluğunu gösterir; model parametreleri ve geçerlilik aralığı ayrıca belirtilmelidir.","Correct. The curve shows physical density; model parameters and validity limits still matter."]
])
];
const q03=[
mk(1,1,["Fotonla üretim ve impact ionization arasındaki temel fark nedir?","What distinguishes photogeneration from impact ionization?"],[
["İkisinde de yalnız foton soğurulur.","Both require photon absorption only."],
["Fotogeneration ışığın soğurulmasıyla; çarpışma iyonlaşması enerjik bir taşıyıcının çarpışmasıyla çift oluşturabilir.","Photogeneration follows absorption; impact ionization uses collisions from a high-energy carrier."],
["Çarpışma iyonlaşmasında hiçbir ek elektron–hol çifti oluşmaz.","Impact ionization cannot create additional electron–hole pairs."]
],[
["Impact iyonizasyonu foton soğurması olarak açıklamak yanlıştır.","Impact ionization is not simply photon absorption."],
["Doğru. Enerji aktarım mekanizmaları farklıdır; her ikisinde de enerji ve momentum korunmalıdır.","Correct. Energy transfer differs; both obey energy and momentum conservation."],
["Yeterli taşıyıcı enerjisinde ek çift oluşabilir.","Additional pairs can form if carrier energy is sufficient."]
]),
mk(3,0,["Işımalı (radiative) rekombinasyon sonucunda enerji hangi kanala aktarılabilir?","In radiative recombination, where can the released energy go?"],[
["Foton olarak yayılabilir.","It can be emitted as a photon."],
["Mutlaka başka bir elektronun kinetik enerjisine gider.","It must go to another electron's kinetic energy."],
["Hiçbir enerji açığa çıkmaz.","No energy is released."]
],[
["Doğru. Işımalı geçişte foton yayımı mümkündür; Si'de dolaylı aralık nedeniyle olasılığı düşüktür.","Correct. Photon emission is possible; indirect-gap Si has relatively inefficient radiative transitions."],
["Bu, Auger kanalı için daha tipik açıklamadır.","That is more characteristic of Auger recombination."],
["Rekombinasyon enerjisinin bir yere aktarılması gerekir.","Recombination energy must be transferred."]
]),
mk(3,1,["SRH (Shockley–Read–Hall) rekombinasyonu hangi mekanizmaya dayanır?","What is the basis of Shockley–Read–Hall recombination?"],[
["Yalnız iletim bandı içindeki elastik saçılmaya.","Only elastic scattering within the conduction band."],
["Bant aralığındaki kusur/tuzak seviyeleri aracılığıyla taşıyıcı yakalanmasına.","Carrier capture via defect or trap levels within the band gap."],
["Mutlaka çok sayıda foton yayılmasına.","Mandatory emission of many photons."]
],[
["Elastik saçılma çift sayısını ortadan kaldırmaz.","Elastic scattering does not remove an electron–hole pair."],
["Doğru. Kusur seviyeleri rekombinasyona aracılık edebilir ve taşıyıcı ömrünü etkiler.","Correct. Trap-assisted recombination can affect carrier lifetime."],
["SRH için çoklu foton yayımı zorunlu değildir.","SRH does not require multiple photon emission."]
]),
mk(3,2,["Auger rekombinasyonu sırasında açığa çıkan enerji ne olur?","What happens to energy released by Auger recombination?"],[
["Her durumda doğrudan ışık olarak çıkar.","It always emerges directly as light."],
["Tamamen yok olur.","It disappears."],
["Üçüncü bir taşıyıcıya aktarılır ve daha sonra ısıl gevşeme olabilir.","It transfers to a third carrier, which may subsequently thermalize."]
],[
["Bu ışımaya dayalı rekombinasyonu anlatır, Auger'i değil.","That describes radiative recombination rather than Auger."],
["Enerji korunur.","Energy is conserved."],
["Doğru. Auger süreci taşıyıcı yoğunluğu arttığında önemli hale gelebilir.","Correct. Auger processes can become important at high carrier concentrations."]
]),
mk(0,1,["300 K'de kT≈0,026 eV ve Si Eᵍ≈1,12 eV ise hangisi doğrudur?","At 300 K, kT≈0.026 eV and Si Eᵍ≈1.12 eV. Which statement is correct?"],[
["kT her elektronun tam 1,12 eV enerji taşıdığını gösterir.","kT means every electron carries exactly 1.12 eV."],
["kT termal enerji ölçeğidir; Eᵍ daha büyüktür, ancak dağılımın yüksek enerjili kuyruğu taşıyıcı oluşumuna katkı yapabilir.","kT is a thermal scale; Eᵍ is larger, but the distribution tail can contribute to excitation."],
["Eᵍ ve kT aynı fiziksel niceliğin zorunlu olarak eşit iki adıdır.","Eᵍ and kT are necessarily equal names for one quantity."]
],[
["kT tek tek tüm elektronların kesin enerjisi değildir.","kT is not an exact energy held by each electron."],
["Doğru. İstatistiksel doluluk ve erişilebilir enerji durumları önemlidir.","Correct. Statistical occupancy and allowed states matter."],
["Bant aralığı ile termal enerji ölçeği farklıdır.","Band gap and thermal energy scale are distinct."]
]),
mk(7,2,["nᵢ=√(NᶜNᵛ)·exp(−Eᵍ/2kT) modelinde hangi değişim nᵢ'yi artırır (diğerleri sabit)?","In nᵢ=√(NᶜNᵛ)·exp(−Eᵍ/2kT), which change increases nᵢ with other factors fixed?"],[
["Eᵍ'yi büyütmek.","Increasing Eᵍ."],
["Nᶜ'yi küçültmek.","Reducing Nᶜ."],
["T'yi yükseltmek.","Increasing T."]
],[
["Bant aralığını artırmak üstel terimi küçültür.","Larger band gap reduces the exponential factor."],
["Nᶜ azalırsa prefaktör küçülür.","A smaller Nᶜ reduces the prefactor."],
["Doğru. Sabit Nᶜ, Nᵛ ve Eᵍ yaklaşımında T artışı nᵢ'yi büyütür.","Correct. Under fixed Nᶜ, Nᵛ and Eᵍ assumptions, raising T increases nᵢ."]
])
];
const q04=[
mk(0,1,["Bağ modeli neden taşıyıcı yoğunluğunu tek başına hesaplayamaz?","Why can't the bond picture alone calculate carrier concentration?"],[
["Dört Si bağını açıklayamadığı için.","Because it cannot describe four Si bonds."],
["İzinli enerji, durum sayısı ve doluluk istatistiğini nicel vermediği için.","Because it does not quantitatively determine allowed energies, state counts and occupancy."],
["Elektron–hol çifti fikrini içermediği için.","Because it cannot represent an electron–hole pair."]
],[
["Bağ resmi dört tetrahedral bağı açıklar.","The bond picture describes four tetrahedral bonds."],
["Doğru. Bant modeli durum sayısını ve f(E,T) doluluğunu birlikte kullanır.","Correct. Band theory combines state counts with occupation f(E,T)."],
["Elektron ve hol bağımsız sayımlar için yetersiz olsa da bağ modeliyle sezgisel gösterilebilir.","The bond picture can illustrate electrons and holes qualitatively."]
]),
mk(1,0,["Bant modelinin üç ilkesi hangi sırada tanımlanır?","Which sequence correctly states the three principles of the band model?"],[
["İzinli kuantum durumları; enerjiye göre durum dağılımı N(E); doluluk f(E,T).","Allowed quantum states; distribution N(E); occupation f(E,T)."],
["Pauli; yalnız kristal atom sayısı; sadece elektrik akımı.","Pauli; number of crystal atoms alone; electric current only."],
["Elektron ilgisi; kimyasal bağ; taşıyıcı hızı.","Electron affinity; chemical bonds; carrier speed."]
],[
["Doğru. Kuantum durumları ve DOS'u kuantum mekaniği, doluluğu istatistiksel mekanik belirler.","Correct. Quantum mechanics determines allowed states and DOS; statistical mechanics determines occupancy."],
["Pauli ilk ilkenin parçasıdır; ikinci ilke N(E) olmalıdır.","Pauli belongs within principle one; principle two is N(E)."],
["Bunlar kaynak sunumdaki üç ilkeden farklıdır.","These are not the three source principles."]
]),
mk(1,2,["Pauli ilkesi aynı enerjiye sahip iki elektron için neyi yasaklar?","What does Pauli exclusion forbid for two equal-energy electrons?"],[
["Farklı spin durumlarında bulunmayı.","Occupying different spin states."],
["Eş enerjili farklı kuantum durumları kullanmayı.","Using distinct degenerate quantum states."],
["Tamamen aynı kuantum durumunu paylaşmayı.","Sharing the exact same complete quantum state."]
],[
["Farklı spinler farklı durumlar olabilir.","Different spins can be different states."],
["Dejenere seviyelerde birden fazla farklı durum olabilir.","Degenerate energies can contain multiple distinct states."],
["Doğru. Aynı enerji, aynı tüm kuantum sayıları anlamına gelmez.","Correct. Equal energy does not imply all quantum numbers are identical."]
]),
mk(2,1,["Yalıtılmış Si atomunda 3p alt kabuğu kaç spin durumu ve kaç elektron içerir?","How many spin states and electrons are in isolated Si's 3p subshell?"],[
["2 durum, 6 elektron.","2 states, 6 electrons."],
["6 durum, 2 elektron.","6 states, 2 electrons."],
["6 durum, 6 elektron.","6 states, 6 electrons."]
],[
["3p toplam altı spin durumu sunar, iki elektronla dolar.","3p offers six spin states but contains two electrons."],
["Doğru. Si'nin 3p² gösterimi iki elektronun altı izinli spin durumuna yerleştiğini belirtir.","Correct. The 3p² configuration places two electrons among six spin states."],
["Bu doluluk 2p⁶ için geçerlidir, 3p için değil.","That occupancy applies to 2p⁶, not 3p."]
]),
mk(3,0,["Birbirinden uzak N Si atomunda 3p için izinli durum/elektron sayısı nedir?","For N well-separated Si atoms, what are the 3p states and electrons?"],[
["6N durum ve 2N elektron.","6N states and 2N electrons."],
["2N durum ve 6N elektron.","2N states and 6N electrons."],
["6N durum ve 6N elektron.","6N states and 6N electrons."]
],[
["Doğru. Tek atomun 3p seviyesindeki 6 durum ve 2 elektron N ile çarpılır.","Correct. Multiply the six available 3p states and two electrons per atom by N."],
["Durum ve doluluk sayıları ters çevrilmiş.","State and electron counts are reversed."],
["3p kabuğu boş spin durumlarını da içerir.","The 3p subshell has unoccupied spin states as well."]
]),
mk(3,2,["N atom yaklaşırken neden ayrık seviyeler bantlara dönüşür?","Why do levels broaden into bands as N atoms approach?"],[
["Sadece atom sayısı arttığı için her seviye daha geniş olmak zorundadır.","Increasing N alone forces each band to widen without bound."],
["Bütün atomlar aynı kuantum durumunu paylaşabildiği için.","All atoms can share exactly one quantum state."],
["Atomlar arası dalga fonksiyonu etkileşimi seviyeleri ayrıştırır; N durum sayısını, kuplaj genişliği etkiler.","Orbital overlap splits levels; N sets their number and coupling influences the spread."]
],[
["N daha sık düzeyler sağlar; genişlik esas olarak kuplaja da bağlıdır.","N adds denser levels; bandwidth also depends primarily on coupling."],
["Pauli aynı tam kuantum durumunun paylaşılmasını yasaklar.","Pauli forbids sharing the same complete state."],
["Doğru. Denge uzaklığı ve orbital etkileşimi bant oluşumunun belirleyicisidir.","Correct. Equilibrium spacing and orbital interactions govern band formation."]
]),
mk(3,1,["Üç bağlı osilatör için ω₂/ω₀ (kᶜ/k=1) kaçtır?","For three coupled oscillators with kᶜ/k=1, what is ω₂/ω₀?"],[
["√2","√2"],["2","2"],["3","3"]
],[
["√2 orta normal moddur: ω₁/ω₀.","√2 is the middle mode ω₁/ω₀."],
["Doğru: √(1+3·1)=2; bu mekanik analojidir.","Correct: √(1+3·1)=2; this is a mechanical analogy."],
["Karekök alınmalıdır; sonuç 3 değildir.","The square root is required, so the result is not 3."]
]),
mk(3,0,["Aynı kuplajla N=3 yerine N=20 alınırsa hangi sonuç beklenir?","At equal coupling, what changes when N grows from 3 to 20?"],[
["Daha sık normal modlar; frekans bandı N ile 20/3 kat büyümek zorunda değil.","Denser modes; the frequency span need not increase in proportion to 20/3."],
["Sadece bir moda düşer.","It collapses to a single mode."],
["Her modun frekansı 20 kat artar.","Every mode frequency increases 20-fold."]
],[
["Doğru. Mod sayısı sistem boyutuyla, frekans aralığı kuplajla ilişkilidir.","Correct. Mode count scales with system size, while frequency spread depends on coupling."],
["Bağlı N osilatör N normal moda sahiptir.","A chain of N coupled oscillators has N normal modes."],
["N tek başına bu katsayıyı belirlemez.","N alone does not set such a multiplier."]
]),
mk(4,1,["İdeal 0 K öz Si için 4N değerlik elektronu hangi durumları doldurur?","In ideal intrinsic Si at 0 K, where do 4N valence electrons reside?"],[
["4N iletim durumunu doldurur.","They occupy 4N conduction states."],
["4N valans durumunu doldurur; 4N iletim durumu boş kalır.","They fill 4N valence states while 4N conduction states remain empty."],
["8N durumu eşit yarım doldurur.","They half-fill all 8N states equally."]
],[
["0 K ideal öz Si için iletim boş kabul edilir.","The conduction band is empty for ideal intrinsic Si at 0 K."],
["Doğru. 8N değerlik-kökenli durumun alt 4N'ini 4N elektron doldurur.","Correct. Four N valence electrons fill the lower 4N of 8N states."],
["Kararlı kristalde bant ayrımı dolu ve boş bantları ayırır.","At stable spacing, the band splitting separates filled and empty bands."]
]),
mk(4,2,["Dış uyarılmayla bir çift oluştuğunda 0 K başlangıç doluluğuna göre ne değişir?","What changes when one pair is externally generated from the ideal 0 K occupation?"],[
["Valans elektronu sayısı bir artar.","Valence electron count increases by one."],
["Toplam elektron sayısı bir artar.","Total electron count increases by one."],
["Valansta bir boş durum, iletimde bir elektron oluşur; toplam elektron korunur.","One valence vacancy and one conduction electron appear; total electron count is conserved."]
],[
["Bir elektron valans bandından çıkar.","An electron leaves the valence band."],
["Çift üretimi yeni elektron yaratmaz, mevcut elektronu uyarır.","Pair generation does not create a new electron; it excites an existing one."],
["Doğru. Doluluk değişir, toplam elektron sayısı değişmez.","Correct. Occupancies change, but electron count does not."]
]),
mk(5,0,["Eᵍ ve χ arasındaki doğru fark hangisidir?","Which relation distinguishes Eᵍ from χ?"],[
["Eᵍ=Eᶜ−Eᵛ; χ=E₀−Eᶜ.","Eᵍ=Eᶜ−Eᵛ; χ=E₀−Eᶜ."],
["Eᵍ=E₀−Eᶜ; χ=Eᶜ−Eᵛ.","Eᵍ=E₀−Eᶜ; χ=Eᶜ−Eᵛ."],
["Eᵍ her zaman χ ile aynıdır.","Eᵍ always equals χ."]
],[
["Doğru. Bant aralığı ve elektron ilgisi iki farklı enerji farkıdır.","Correct. Gap and electron affinity are distinct energy differences."],
["İki tanım birbiriyle karıştırılmış.","The two definitions have been swapped."],
["İlgili enerji kenarları farklıdır.","The energy references are different."]
]),
mk(5,1,["Bant kenarlarını gösteren standart tek nokta diyagramında yatay eksenin görevi nedir?","In the conventional single-point band-edge diagram, what does the horizontal axis represent?"],[
["Mutlaka atomlar arası mesafedir.","It must be interatomic distance."],
["Bu şemada fiziksel değişken göstermez; enerji düşeyde karşılaştırılır.","It need not represent a physical variable; electron energies are compared vertically."],
["Her zaman dalga vektörü k'dir.","It is always the wavevector k."]
],[
["Atom uzaklığına bağlı bant oluşumu grafiği farklıdır.","An interatomic-spacing diagram is a different plot."],
["Doğru. E(k) ve konuma bağlı bant çizimlerinde yatay eksen başka değişkendir.","Correct. E(k) and spatial band diagrams use other horizontal variables."],
["Standart enerji-kenar şeması E(k) grafiği değildir.","A simple band-edge diagram is not an E(k) plot."]
]),
mk(6,2,["χ=4,05 eV, Eᵍ=1,12 eV, E₀=0 için Eᵛ kaç eV'dir?","With χ=4.05 eV, Eᵍ=1.12 eV and E₀=0, what is Eᵛ?"],[
["−4,05 eV","−4.05 eV"],["+5,17 eV","+5.17 eV"],["−5,17 eV","−5.17 eV"]
],[
["−4,05 eV iletim kenarı Eᶜ'dir.","−4.05 eV is the conduction edge Eᶜ."],
["Vakumun altındaki enerji negatiftir; işaret yanlış.","The energy below vacuum is negative, not positive."],
["Doğru: Eᵛ=E₀−χ−Eᵍ=−5,17 eV.","Correct: Eᵛ=E₀−χ−Eᵍ=−5.17 eV."]
]),
mk(6,0,["Valans bandı genişliği ≈12 eV ise Eᴮ yaklaşık kaçtır (Eᵛ=−5,17 eV)?","With ≈12 eV valence width and Eᵛ=−5.17 eV, what is Eᴮ?"],[
["−17,17 eV","−17.17 eV"],["−12 eV","−12 eV"],["+6,83 eV","+6.83 eV"]
],[
["Doğru: Eᴮ=Eᵛ−W=−5,17−12=−17,17 eV (yaklaşık).","Correct: Eᴮ=Eᵛ−W=−5.17−12=−17.17 eV (approximate)."],
["W bir referans seviye değil bant genişliğidir.","W is an interval, not an absolute energy reference."],
["Vakum referansında valans bandı aşağıdadır.","Valence energies lie below the vacuum reference."]
]),
mk(7,1,["Bağ modelindeki 'boş bağ' bant modelinde neye karşılık gelir?","What corresponds to a vacant bond in the band model?"],[
["Atom çekirdeğinin yokluğuna.","A missing atomic nucleus."],
["Valans bandındaki boş elektronik duruma (hole).","An unoccupied valence-band electron state (hole)."],
["İletim bandındaki iki elektrona.","Two conduction electrons."]
],[
["Hol bir çekirdek boşluğu değildir.","A hole is not a missing nucleus."],
["Doğru. Yerel bağ sezgisi ile yayılmış kristal bant resmi farklı açıklama seviyeleridir.","Correct. The local bond picture and extended band states are two levels of description."],
["Hol valans bandındaki dolmamış durumdur.","A hole is an empty valence state."]
]),
mk(7,2,["Üretim ve yeniden birleşme arasında hangi ayrım doğrudur?","Which statement distinguishes generation and recombination?"],[
["Her ikisinde de iletim elektronu sayısı artar.","Both increase conduction electron count."],
["Üretimde iletim elektronu valans holünü doldurur.","In generation a conduction electron fills a valence hole."],
["Üretim elektron–hol çifti oluşturur; yeniden birleşme serbest çifti azaltır.","Generation creates an electron–hole pair; recombination removes a free pair."]
],[
["Rekombinasyon iletim elektronu sayısını azaltabilir.","Recombination can decrease conduction electron count."],
["Bu tanım üretimin değil rekombinasyonun parçasıdır.","That describes recombination, not generation."],
["Doğru. Enerji fotona, fononlara veya başka taşıyıcılara aktarılabilir.","Correct. Energy may transfer to photons, phonons or other carriers."]
]),
mk(7,0,["Elektron enerji ekseninde holün kinetik enerjisi artışı hangi yönde gösterilir?","On an electron-energy axis, which way represents increasing hole kinetic energy?"],[
["Valans bandında elektron enerji ekseninde aşağı.","Downward in valence electron energy."],
["İletim bandı minimumu üzerinde daima yukarı.","Always upward above the conduction minimum."],
["Eksen yönü bütün durumlarda anlamsızdır.","Energy direction is irrelevant in all cases."]
],[
["Doğru. Hol enerjisi valans tepesinden aşağıya doğru olan eksik elektron durumuyla tanımlanabilir.","Correct. Hole energy is measured from the valence top downward in electron energy."],
["Bu daha çok iletim elektronu kinetik enerjisinin artışına karşılık gelir.","That describes increased kinetic energy of a conduction electron."],
["Band modelinde elektron/hol enerjileri farklı işaretlerle ölçülür.","Electron and hole energies are referenced differently."]
]),
mk(7,2,["Si'de Eᶜ'deki elektronun vakuma çıkması için yaklaşık enerji farkı nedir?","Approximately what energy separates an electron at Si's Eᶜ from vacuum?"],[
["Eᵍ=1,12 eV","Eᵍ=1.12 eV"],["W≈12 eV","W≈12 eV"],["χ≈4,05 eV","χ≈4.05 eV"]
],[
["Eᵍ iki bant kenarı arasındaki farktır.","Eᵍ separates valence and conduction edges."],
["W valans bandının genişliğidir.","W is the width of the valence band."],
["Doğru. χ=E₀−Eᶜ; gerçek emisyon için yüzey/taşınım koşulları ayrıca önemlidir.","Correct. χ=E₀−Eᶜ; actual emission also involves surface and transport effects."]
]),
mk(8,1,["5×10²² Si atomu/cm³ ve 4N valans durumu varsa toplam durum yoğunluğu integrali kaçtır?","With 5×10²² Si atoms/cm³ and four valence states per atom, what is the integrated state count?"],[
["2×10²² cm⁻³","2×10²² cm⁻³"],["2×10²³ cm⁻³","2×10²³ cm⁻³"],["12 eV","12 eV"]
],[
["Atom yoğunluğu dört ile çarpılmalıdır.","Multiply atomic density by four."],
["Doğru. ∫N(E)dE=4×5×10²²=2×10²³ durum/cm³.","Correct. ∫N(E)dE=4×5×10²²=2×10²³ states/cm³."],
["eV enerji birimidir; integralin birimi cm⁻³ olmalıdır.","eV is energy; the integrated count has units cm⁻³."]
]),
mk(8,0,["Durum yoğunluğu g(E) ile doluluk f(E) farkı nedir?","What is the difference between density of states g(E) and occupancy f(E)?"],[
["g(E) izinli durum sayısını, f(E) bu durumun dolu olma olasılığını verir.","g(E) counts available states, f(E) gives their occupation probability."],
["İkisi daima aynı birimde ve aynı değerdedir.","They always have identical units and values."],
["f(E) atom sayısıdır; g(E) her zaman 0 ile 1 arasındadır.","f(E) is atom count; g(E) always lies between zero and one."]
],[
["Doğru. Elektron yoğunluğu için uygun bantta g(E)f(E) integrali kullanılır.","Correct. Electron density is obtained by integrating g(E)f(E) in the relevant band."],
["g(E) genelde hacim−¹ enerji−¹, f(E) boyutsuzdur.","g(E) commonly has units volume−¹ energy−¹; f(E) is dimensionless."],
["f(E) olasılıktır; g(E) boyutsuz bir olasılık değildir.","f(E) is a probability; g(E) is not dimensionless."]
]),
mk(8,1,["1B E(k)=−2t cos(ka) modelinde t iki katına çıkarsa kenardaki m* ne olur (a sabit)?","In 1D E(k)=−2t cos(ka), what happens to band-edge m* if t doubles at fixed a?"],[
["İki katına çıkar.","It doubles."],
["Yarıya iner.","It halves."],
["Değişmez.","It stays unchanged."]
],[
["m*=ℏ²/(2ta²), t ile ters orantılıdır.","m*=ℏ²/(2ta²), inversely proportional to t."],
["Doğru. Daha yüksek eğrilik bu modelde daha düşük etkin kütle verir.","Correct. Greater curvature gives smaller effective mass in this model."],
["Sabit a durumunda t eğriliği değiştirir.","At fixed a, t changes curvature."]
]),
mk(8,2,["Bir bant E(k) eğrisinin enerji-kenarı şemasından farkı nedir?","How does an E(k) plot differ from a simple band-edge diagram?"],[
["Yatay eksen her ikisinde de zorunlu olarak atomlar arası uzaklıktır.","Both necessarily plot atomic distance horizontally."],
["E(k) yalnız elektron ilgisini çizer.","E(k) only depicts electron affinity."],
["E(k) kristal dalga vektörüne göre dağılımı, enerji-kenarı şeması ise referans seviyeleri gösterir.","E(k) shows dispersion versus crystal wavevector; the edge diagram shows energy references."]
],[
["Atomlar arası uzaklık grafiği başka bir grafiktir.","A plot versus interatomic distance is a different diagram."],
["Elektron ilgisi E(k)'yi tek başına belirlemez.","Electron affinity alone cannot determine E(k)."],
["Doğru. Etkin kütleyi hesaplamak için enerji bantlarının k eğriliği gerekir.","Correct. Effective mass requires band curvature versus k."]
])
];
course["02"].questions.push(...q02);
course["03"].questions.push(...q03);
course["04"]={
  graphs:[],simulations:[],questions:q04
};
for(const id of ["02","03","04"]){
 const c=course[id],count=window.COURSE_LESSONS.find(l=>l.id===id).topics.length;
 if(!c.questions.length||!c.questions.every(q=>
  Number.isInteger(q.topic)&&q.topic>=0&&q.topic<count&&q.options.length===3&&q.reasons.length===3&&
  Number.isInteger(q.correct)&&q.correct>=0&&q.correct<3&&q.q?.tr&&q.q?.en&&
  q.options.every(v=>v.tr&&v.en)&&q.reasons.every(v=>v.tr&&v.en)))
  throw Error("Invalid bilingual question bank for "+id);
}
})();