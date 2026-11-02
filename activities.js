/* Lesson 02–03 interactive activities: bilingual explanatory content and assessment.
   Formula implementations live in activity-engine.js, independent from the narratives. */
window.COURSE_ACTIVITIES = {
  "02": {
    graphs: [
      {
        id: "intrinsic-temperature",
        title: { tr: "Öz taşıyıcı yoğunluğu – sıcaklık", en: "Intrinsic carrier density vs temperature" },
        description: {
          tr: "Si, Ge veya GaAs seçerek öz taşıyıcı yoğunluğunu gerçek nᵢ (cm⁻³) değerleriyle doğrusal eksende incele. Sıcaklık değişince grafik seçilen T çevresinde ±50 K'lik bir pencereye odaklanır; üç malzemenin sayısal değerleri altta korunur.",
          en: "Select Si, Ge or GaAs to plot the actual intrinsic carrier concentration nᵢ (cm⁻³) on a linear axis. Changing temperature focuses the plot within a ±50 K window; numerical values for all three materials remain below."
        },
        note: {
          tr: "Model: nᵢ(T) = nᵢ(300 K)(T/300)³ᐟ² exp[−Eᵍ/(2k)(1/T−1/300)]. Dikey eksen doğrusaldır ve nᵢ sayısal değerlerini (cm⁻³) gösterir; log₁₀ kullanılmaz. Çok farklı büyüklükleri aynı doğrusal eksende saklamamak için her defasında tek malzeme çizilir. Eᵍ sabit kabul edilir; geniş sıcaklık aralığı için hassas malzeme kestirimi değildir. 300 K referansları: Si ≈ 10¹⁰, Ge ≈ 2,4×10¹³, GaAs ≈ 1,8×10⁶ cm⁻³.",
          en: "Model: nᵢ(T) = nᵢ(300 K)(T/300)³ᐟ² exp[−Eᵍ/(2k)(1/T−1/300)]. The y-axis is linear and shows actual nᵢ values (cm⁻³); no log₁₀ transform is used. One material is plotted at a time to avoid hiding other curves with much smaller magnitudes. Eᵍ is held constant, so this is not an accurate prediction over a broad temperature range. Approximate 300 K references: Si 10¹⁰, Ge 2.4×10¹³, GaAs 1.8×10⁶ cm⁻³."
        }
      },
      {
        id: "gap-sensitivity",
        title: { tr: "Bant aralığının taşıyıcı yoğunluğuna etkisi", en: "How the band gap affects carrier density" },
        description: {
          tr: "Diğer malzeme parametreleri sabitken enerji aralığının nᵢ'yi neden üstel olarak etkilediğini incele.",
          en: "Investigate why band-gap energy has an exponential effect on nᵢ while other material parameters are kept fixed."
        },
        note: {
          tr: "Bu grafik Si için 300 K ve Eᵍ=1,12 eV noktasına kalibre edilmiş pedagojik bir modeldir. Eᵍ değişirken etkin kütle, Nᶜ ve Nᵛ gibi malzeme özellikleri sabit varsayılır; farklı malzemelerin gerçek nᵢ değerleri yalnızca Eᵍ ile belirlenmez.",
          en: "This teaching model is calibrated to Si at 300 K and Eᵍ=1.12 eV. Effective masses and material factors such as Nᶜ and Nᵛ are held fixed as Eᵍ changes; the real nᵢ of different materials is not determined by Eᵍ alone."
        }
      }
    ],
    simulations: [
      {
        id: "tetrahedral-bonds",
        title: { tr: "Si kristalinde tetrahedral bağlar", en: "Tetrahedral bonds in silicon" },
        description: {
          tr: "Merkez Si atomunun dört en yakın komşusunu üç boyutlu projeksiyonda döndür. Bağlar arası açı ideal tetrahedral düzen için yaklaşık 109,47°'dir.",
          en: "Rotate a three-dimensional projection of the central Si atom and its four nearest neighbors. The angle between ideal tetrahedral bonds is approximately 109.47°."
        },
        note: {
          tr: "Şema yerel bağ geometrisini temsil eder; tüm diamond-kübik birim hücreyi veya gerçek atom ölçeğini göstermez.",
          en: "The diagram represents local bonding geometry, not the complete diamond-cubic unit cell or actual atomic scale."
        }
      },
      {
        id: "equilibrium-balance",
        title: { tr: "Termal denge mi, kararlı durum mu?", en: "Thermal equilibrium or steady state?" },
        description: {
          tr: "Sürekli dış üretimi (ör. aydınlatma) ve geçen zamanı değiştir. Üretim ve rekombinasyon hızları yeniden eşitlenebilir; dış uyarı varsa yine de termal denge söz konusu değildir.",
          en: "Vary external generation (e.g. illumination) and elapsed time. Generation and recombination can balance again, yet an externally driven sample is still not in thermal equilibrium."
        },
        note: {
          tr: "Basitleştirilmiş tek ömürlü model: dΔn/dt = ΔG − Δn/τ, Δn(0)=0 ve sabit ΔG. Kullanılan hızlar normalize edilmiştir; gerçek bir Si cihazı parametre seti değildir.",
          en: "Simplified single-lifetime model: dΔn/dt = ΔG − Δn/τ, Δn(0)=0, with constant ΔG. Rates are normalized, not calibrated to a real silicon device."
        }
      }
    ],
    questions: [
      {
        q: { tr: "Aşağıdakilerden hangisi bileşik yarıiletkendir?", en: "Which of these is a compound semiconductor?" },
        options: [{tr:"Silisyum (Si)",en:"Silicon (Si)"},{tr:"Galyum arsenit (GaAs)",en:"Gallium arsenide (GaAs)"},{tr:"Germanyum (Ge)",en:"Germanium (Ge)"}],
        correct: 1,
        reasons: [
          {tr:"Si tek elementten oluşan elementel yarıiletkendir.",en:"Si is an elemental semiconductor made from a single element."},
          {tr:"Doğru. GaAs, galyum ve arsenik elementlerinden oluşan bileşik yarıiletkendir.",en:"Correct. GaAs is a compound semiconductor containing gallium and arsenic."},
          {tr:"Ge de tek elementli, yani elementel bir yarıiletkendir.",en:"Ge is also an elemental semiconductor."}
        ],
        topic: 0
      },
      {
        q: {tr:"'Saf' ve 'öz' yarıiletken için hangisi en doğrudur?",en:"Which statement best distinguishes 'pure' and 'intrinsic' semiconductors?"},
        options: [
          {tr:"İki terim her koşulda eş anlamlıdır.",en:"The terms are always interchangeable."},
          {tr:"Saflık kusur/safsızlıkla; öz davranış katkının baskın olmamasıyla ilgilidir.",en:"Purity concerns defects/impurities; intrinsic behavior is not dominated by doping."},
          {tr:"Öz yarıiletken mutlaka yüksek akım taşır.",en:"An intrinsic semiconductor must carry a high current."}
        ],correct:1,reasons:[
          {tr:"Yanlış. Kavramlar farklı özellikleri tanımlar.",en:"Incorrect: the concepts describe different properties."},
          {tr:"Doğru. Saflık bir malzeme özelliğidir, öz taşıyıcı davranışı ise taşıyıcı dengesini tanımlar.",en:"Correct. Purity describes the material, while intrinsic behavior describes its carrier balance."},
          {tr:"Akım; taşıyıcı yoğunluğu, elektrik alan ve hareketlilik gibi koşullara bağlıdır.",en:"Current depends on carrier density, electric field and mobility, among other factors."}
        ],topic:0
      },
      {
        q:{tr:"Kristalde bir Si atomunun en yakın kaç komşusuyla kovalent bağı vardır?",en:"How many nearest neighbors does a silicon atom covalently bond to in the crystal?"},
        options:[{tr:"İki",en:"Two"},{tr:"Dört",en:"Four"},{tr:"Altı",en:"Six"}],correct:1,reasons:[
          {tr:"İki komşu, silisyumun tetrahedral bağ koordinasyonunu açıklamaz.",en:"Two neighbors do not describe silicon's tetrahedral coordination."},
          {tr:"Doğru. Her Si atomunun dört tetrahedral yönlü en yakın komşusu vardır.",en:"Correct. Each Si atom has four nearest neighbors in tetrahedral directions."},
          {tr:"Altı koordinasyon, diamond-kübik Si'nin en yakın komşu sayısı değildir.",en:"Six is not the nearest-neighbor coordination number of diamond-cubic Si."}
        ],topic:1
      },
      {
        q:{tr:"Konvansiyonel diamond-kübik Si birim hücresinde kaç atom bulunur?",en:"How many atoms are in the conventional diamond-cubic silicon unit cell?"},
        options:[{tr:"2",en:"2"},{tr:"4",en:"4"},{tr:"8",en:"8"}],correct:2,reasons:[
          {tr:"İki atom, ilkel hücrenin (primitive cell) atom sayısıdır.",en:"Two is the number of atoms in a primitive cell."},
          {tr:"Dört atom doğru değildir; burada konvansiyonel kübik hücre soruluyor.",en:"Four is not correct for the conventional cubic cell."},
          {tr:"Doğru. Konvansiyonel kübik hücrede 8, ilkel hücrede 2 atom vardır.",en:"Correct. The conventional cubic cell has 8 atoms; a primitive cell has 2."}
        ],topic:2
      },
      {
        q:{tr:"Termal dengede üretim ve rekombinasyon için hangisi doğrudur?",en:"What happens to generation and recombination at thermal equilibrium?"},
        options:[
          {tr:"Her ikisi de tamamen durur.",en:"Both stop completely."},
          {tr:"Mikroskobik süreçler sürer; denge halinde hızlar birbirini dengeler.",en:"Microscopic processes continue and their rates balance."},
          {tr:"Üretim daima rekombinasyondan büyüktür.",en:"Generation is always greater than recombination."}
        ],correct:1,reasons:[
          {tr:"Denge hareketsizlik değildir; termal süreçler devam eder.",en:"Equilibrium is not inactivity: thermal processes continue."},
          {tr:"Doğru. Makroskopik net değişim sıfırdır, fakat mikroskobik üretim ve rekombinasyon sürer.",en:"Correct. There is no net macroscopic change, even though microscopic processes continue."},
          {tr:"Üretim sürekli fazla olursa taşıyıcı yoğunluğu sabit kalmaz.",en:"If generation always exceeds recombination, carrier density will not remain constant."}
        ],topic:3
      },
      {
        q:{tr:"Sabit aydınlatmayla çalışan güneş hücresi hangi durumda olabilir?",en:"Which state can describe a solar cell under constant illumination?"},
        options:[
          {tr:"Kararlı durum ama termal denge değil.",en:"Steady state but not thermal equilibrium."},
          {tr:"Hem mutlaka termal denge hem kararlı durum.",en:"Necessarily both equilibrium and steady state."},
          {tr:"Kararlı duruma asla geçemez.",en:"It can never reach steady state."}
        ],correct:0,reasons:[
          {tr:"Doğru. Dışarıdan enerji akışı varken nicelikler zamanla sabitlenebilir.",en:"Correct. Quantities can become time-independent despite ongoing external energy input."},
          {tr:"Dış aydınlatma, termal denge koşulunu bozar.",en:"External illumination violates the conditions for thermal equilibrium."},
          {tr:"Sürekli aydınlatma altında sistem bir kararlı duruma yaklaşabilir.",en:"Under constant illumination, the system can approach steady state."}
        ],topic:4
      },
      {
        q:{tr:"Fonon en doğru biçimde nasıl tanımlanır?",en:"Which definition of a phonon is most accurate?"},
        options:[
          {tr:"Kristal örgü titreşiminin kuantumlanmış uyarımı.",en:"A quantized excitation of crystal lattice vibrations."},
          {tr:"Pozitif elektrik yüklü serbest atom.",en:"A free, positively charged atom."},
          {tr:"Elektromanyetik alanın tek kuantumu.",en:"A quantum of the electromagnetic field."}
        ],correct:0,reasons:[
          {tr:"Doğru. Fonon, kristal örgüsünün kolektif titreşimlerinin kuantumudur.",en:"Correct. A phonon is a quantum of collective crystal vibrations."},
          {tr:"Fonon, elektrik yüklü serbest atom değildir.",en:"A phonon is not a freely moving charged atom."},
          {tr:"Elektromanyetik alanın kuantumu fotondur.",en:"A photon is a quantum of the electromagnetic field."}
        ],topic:5
      },
      {
        q:{tr:"Öz taşıyıcı yoğunluğu nᵢ genellikle sıcaklık arttıkça neden artar?",en:"Why does intrinsic carrier density nᵢ generally rise with temperature?"},
        options:[
          {tr:"Daha fazla elektron termal olarak bantlar arasında uyarılabilir.",en:"More electrons can be thermally excited across the gap."},
          {tr:"Kristaldeki toplam atom sayısı üstel artar.",en:"The number of atoms in the crystal rises exponentially."},
          {tr:"Her elektron artık aynı kuantum durumunu paylaşır.",en:"Electrons can all share the same quantum state."}
        ],correct:0,reasons:[
          {tr:"Doğru. Termal uyarılma taşıyıcı çiftlerinin dengesel yoğunluğunu yükseltir.",en:"Correct. Thermal excitation increases the equilibrium electron–hole pair density."},
          {tr:"Atomların sayısı bu şekilde sıcaklığa bağlı üstel artış göstermez.",en:"The number of atoms does not increase exponentially with temperature in this way."},
          {tr:"Pauli ilkesi geçerlidir; sıcaklık bu ilkeyi kaldırmaz.",en:"The Pauli exclusion principle still applies at higher temperature."}
        ],topic:5
      }
    ]
  },
  "03": {
    graphs: [
      {
        id: "lifetime-decay",
        title: {tr:"Aşırı taşıyıcıların yaşam süresi",en:"Excess carrier lifetime"},
        description: {tr:"Optik uyarı kapatıldığında aşırı elektron–hol yoğunluğunun zamanla nasıl azaldığını izle. τ büyüdüğünde taşıyıcılar daha yavaş kaybolur.",en:"Observe how excess electron–hole density decays after an optical excitation is switched off. A longer τ yields a slower decay."},
        note:{tr:"Tek üstel model: Δn(t)/Δn(0)=e^(−t/τ). Düşük enjeksiyon ve sabit etkin ömür gibi varsayımlar altında geçerlidir; rekombinasyon her koşulda tek üstel değildir.",en:"Single-exponential model: Δn(t)/Δn(0)=e^(−t/τ). This assumes conditions such as low-level injection and a constant effective lifetime; actual recombination is not always single-exponential."}
      },
      {
        id: "generation-pulse",
        title:{tr:"Aydınlatma darbesine taşıyıcı yanıtı",en:"Carrier response to an illumination pulse"},
        description:{tr:"Sabit süreli bir üretim darbesi uygulandığında aşırı taşıyıcıların yükselip darbe bitince azaldığını incele.",en:"Examine the growth of excess carriers during a finite generation pulse and their decay after the pulse ends."},
        note:{tr:"Parçalı model: 0≤t≤4 µs için Δn=ΔGτ(1−e^(−t/τ)); sonra Δn(4)e^(−(t−4)/τ). Ölçekler göreli olup bir cihaz ölçümünü temsil etmez.",en:"Piecewise model: for 0≤t≤4 µs, Δn=ΔGτ(1−e^(−t/τ)); afterwards Δn(4)e^(−(t−4)/τ). The scales are relative and do not represent a measured device."}
      }
    ],
    simulations: [
      {
        id:"hole-motion",
        title:{tr:"Holün zıt yönde hareketi",en:"Why the hole moves in the opposite direction"},
        description:{tr:"Komşu valans elektronunu boş bağa taşı. Elektron boşluğa ilerlerken holün ters yöne yer değiştirdiğini izle.",en:"Move an adjacent valence electron into an empty bond. The electron moves into the vacancy while the hole moves in the opposite direction."},
        note:{tr:"Bu şema tek boyutlu, ayrık bir bağ benzetmesidir; Si'nin gerçek üç boyutlu bant taşınımı değildir.",en:"This is a one-dimensional discrete bond analogy, not a literal simulation of three-dimensional band transport in silicon."}
      },
      {
        id:"pair-transitions",
        title:{tr:"Elektron–hol çifti üretimi ve birleşmesi",en:"Electron–hole pair generation and recombination"},
        description:{tr:"Foton enerjisini seçip bantlar arasında üretim ve ardından yeniden birleşme olayını uygula.",en:"Choose the photon energy, trigger a band-to-band excitation, then recombine the electron–hole pair."},
        note:{tr:"hν≥Eᵍ, ideal bantlar arası fotonla uyarılma için gerekli enerji koşuludur; Si dolaylı bant aralıklı olduğundan momentum korunumu için fonon katılımı da gerekebilir. Bu şema absorpsiyon olasılığı hesaplamaz.",en:"hν≥Eᵍ is a necessary energy condition for ideal interband photon excitation. Since Si has an indirect gap, phonon involvement may also be required for momentum conservation. This illustration does not compute absorption probability."}
      }
    ],
    questions:[
      {
        q:{tr:"İdeal öz Si'de 0 K için hangi ifade doğrudur?",en:"What is expected for ideal intrinsic Si at 0 K?"},
        options:[{tr:"Termal olarak üretilmiş serbest taşıyıcı bulunmaz.",en:"There are no thermally generated free carriers."},{tr:"Her Si atomu bir serbest elektron verir.",en:"Every Si atom supplies one free electron."},{tr:"Valans bandı tamamen boştur.",en:"The valence band is completely empty."}],
        correct:0,reasons:[{tr:"Doğru. İdeal bant modelinde 0 K'de valans bandı dolu, iletim bandı boştur.",en:"Correct. In the ideal band model at 0 K, the valence band is filled and the conduction band is empty."},{tr:"İdeal öz Si metal gibi bir taşıyıcı/atom oranına sahip değildir.",en:"Ideal intrinsic Si does not have one free carrier per atom as a metal might."},{tr:"Valans bandı 0 K'de doludur.",en:"The valence band is filled at 0 K."}],topic:0
      },
      {
        q:{tr:"Si için Eᵍ≈1,12 eV neyi ifade eder?",en:"What does Eᵍ≈1.12 eV represent for Si?"},
        options:[{tr:"Bir Si–Si kimyasal bağını koparmanın kesin enerjisi.",en:"The exact energy needed to dissociate a chemical Si–Si bond."},{tr:"300 K civarındaki elektronik bant aralığı.",en:"The electronic band gap near 300 K."},{tr:"300 K'deki kT ortalama enerji ölçeği.",en:"The thermal energy scale kT at 300 K."}],
        correct:1,reasons:[{tr:"Kimyasal bağ kopma enerjisi, elektronik bant aralığıyla özdeş değildir.",en:"Chemical bond dissociation energy is not identical to the electronic band gap."},{tr:"Doğru. İletim bandının altı ile valans bandının üstü arasındaki farktır.",en:"Correct. It is the energy difference between the conduction-band minimum and valence-band maximum."},{tr:"300 K civarında kT yaklaşık 0,026 eV'dir.",en:"Near 300 K, kT is approximately 0.026 eV."}],topic:0
      },
      {
        q:{tr:"Valans bandından iletim bandına bir elektron uyarıldığında ne oluşur?",en:"What is formed when an electron is excited from the valence to the conduction band?"},
        options:[{tr:"Bir iletim elektronu ve bir hol.",en:"A conduction electron and a hole."},{tr:"İki iletim elektronu ve hol yok.",en:"Two conduction electrons and no hole."},{tr:"Yalnızca pozitif çekirdek.",en:"Only a positive nucleus."}],
        correct:0,reasons:[{tr:"Doğru. Elektron üst banda geçerken alt bantta bir boş durum bırakır.",en:"Correct. The electron enters the upper band, leaving a vacancy in the lower band."},{tr:"Uyarılma yeni bir elektron yaratmaz; valans bandında hol oluşur.",en:"Excitation does not create a new electron; it leaves a hole in the valence band."},{tr:"Atom çekirdeği bu bantlar arası olayın ürünlerinden biri değildir.",en:"An atomic nucleus is not a product of this interband transition."}],topic:1
      },
      {
        q:{tr:"Hol hareketini en doğru anlatan ifade hangisi?",en:"Which best describes hole motion?"},
        options:[{tr:"Bir proton kristal boyunca gider.",en:"A proton travels through the crystal."},{tr:"Elektronlar boş durumları doldururken boşluk ters yönde ilerler.",en:"As electrons fill vacancies, the vacancy propagates in the opposite direction."},{tr:"Hiçbir elektron hareket etmeden hol yer değiştirir.",en:"A hole moves without any electron motion."}],
        correct:1,reasons:[{tr:"Hol, kristalde ilerleyen serbest bir proton değildir.",en:"A hole is not a free proton traveling through the crystal."},{tr:"Doğru. Valans bandının eksik elektron durumu pozitif taşıyıcı olarak modellenir.",en:"Correct. The missing-electron state in the valence band behaves as a positive carrier."},{tr:"Holün hareketi valans elektronlarının durum değiştirmesini temsil eder.",en:"Hole motion represents changes in the states occupied by valence electrons."}],topic:2
      },
      {
        q:{tr:"Saçılma ile rekombinasyon arasındaki fark nedir?",en:"How does scattering differ from recombination?"},
        options:[{tr:"İkisi de mutlaka bir elektron–hol çiftini yok eder.",en:"Both necessarily annihilate an electron–hole pair."},{tr:"Saçılma momentumu değiştirebilir; rekombinasyon çift sayısını azaltır.",en:"Scattering can change momentum; recombination reduces electron–hole pair count."},{tr:"Rekombinasyonda sadece yön değişir.",en:"Recombination only changes the direction of motion."}],
        correct:1,reasons:[{tr:"Saçılma taşıyıcı sayısını azaltmak zorunda değildir.",en:"Scattering need not reduce the number of carriers."},{tr:"Doğru. Momentum gevşemesi ve taşıyıcı yaşam süresi farklı süreçlerle ilgilidir.",en:"Correct. Momentum relaxation and carrier lifetime concern different processes."},{tr:"Yalnızca yön değişmesi saçılmayı betimler; rekombinasyonda taşıyıcı çifti ortadan kalkar.",en:"A direction change describes scattering; recombination removes a free carrier pair."}],topic:4
      },
      {
        q:{tr:"Tek üstel rekombinasyonda τ iki katına çıkarsa ne olur?",en:"In a single-exponential decay, what happens if τ doubles?"},
        options:[{tr:"Aşırı taşıyıcılar daha yavaş azalır.",en:"Excess carriers decay more slowly."},{tr:"Aşırı taşıyıcılar daha hızlı azalır.",en:"Excess carriers decay faster."},{tr:"Başlangıç yoğunluğu da mutlaka ikiye katlanır.",en:"The initial excess density must also double."}],
        correct:0,reasons:[{tr:"Doğru. e^(−t/τ) içinde τ büyüdükçe aynı t anındaki kalan oran artar.",en:"Correct. In e^(−t/τ), a larger τ leaves a greater fraction at the same time."},{tr:"Daha büyük τ, daha küçük değil daha yavaş bir bozunma hızını gösterir.",en:"A larger τ means slower, not faster, decay."},{tr:"Başlangıç yoğunluğu seçilen uyarım koşuludur; τ ile zorunlu bir orantısı yoktur.",en:"Initial density depends on excitation conditions and does not necessarily scale with τ."}],topic:4
      },
      {
        q:{tr:"Bağ modeli öz taşıyıcı yoğunluğunu neden güvenilir biçimde nicel hesaplayamaz?",en:"Why can the bond model not reliably calculate intrinsic carrier concentration quantitatively?"},
        options:[
          {tr:"Elektron ve hol kavramlarını hiçbir biçimde açıklayamaz.",en:"It cannot explain electrons and holes at all."},
          {tr:"İzinli enerji durumlarını ve onların doluluk olasılıklarını nicel olarak içermez.",en:"It lacks a quantitative description of allowed energy states and their occupation probabilities."},
          {tr:"Bir kristalde sıcaklığın hiçbir etkisi yoktur.",en:"Temperature has no effect on a crystal."}
        ],
        correct:1,reasons:[
          {tr:"Bağ modeli elektron–hol oluşumunu nitel olarak açıklar; eksikliği nicel taşıyıcı hesabındadır.",en:"The bond model qualitatively explains electron–hole generation; its limitation is quantitative carrier counting."},
          {tr:"Doğru. Nicel nᵢ için bant durum yoğunluğu N(E) ve Fermi–Dirac doluluğu f(E,T) gerekir.",en:"Correct. Quantitative nᵢ calculations require band density of states N(E) and Fermi–Dirac occupancy f(E,T)."},
          {tr:"Sıcaklık termal uyarılmayı etkiler; bağ modeli bu etkiyi nitel olarak anlatabilir.",en:"Temperature influences thermal excitation, and the bond model can describe the trend qualitatively."}
        ],topic:5
      },
      {
        q:{tr:"Termal dengede üretim ve rekombinasyon hakkında hangisi doğrudur?",en:"Which statement is correct about generation and recombination at equilibrium?"},
        options:[{tr:"Eşit hızlarda sürebilir; taşıyıcı nüfusu sabit kalır.",en:"They can continue at equal rates while the carrier population stays constant."},{tr:"Rekombinasyon kesinlikle sıfırdır.",en:"Recombination is necessarily zero."},{tr:"Her üretilen elektron aynı anda yeniden birleşir.",en:"Every newly generated electron recombines immediately."}],
        correct:0,reasons:[{tr:"Doğru. Denge makroskopik sabitliktir; tekil taşıyıcıların yaşam süresi sıfır değildir.",en:"Correct. Equilibrium is macroscopic stationarity; individual carriers need not have zero lifetime."},{tr:"Üretim–rekombinasyon olayları dengede devam edebilir.",en:"Generation and recombination can continue in equilibrium."},{tr:"Hızların dengelenmesi, tekil olayların eşzamanlı gerçekleşmesini gerektirmez.",en:"Balanced rates do not imply that individual events occur simultaneously."}],topic:3
      }
    ]
  }
};
