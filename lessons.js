/* Kaynak temeli: Kullanıcının paylaştığı Semiconductor Physics ders 02–06 PDF'leri.
   Bu veri dosyası tasarımdan bağımsızdır; sonraki fazlarda içerik genişletilebilir. */
window.COURSE_LESSONS = [
  {
    id: "02",
    navTitle: "Kristal ve Denge",
    title: "Yarıiletken Malzemeler, Kristal Yapısı ve Termal Denge",
    kicker: "Fiziksel temeller",
    description: "Yarıiletkenin ne olduğunu atomlardan başlayarak öğren. Silisyumun kristal yapısını, kovalent bağlarını ve termal denge kavramını sonraki hesaplamalar için sağlam bir temele oturt.",
    focus: "Malzemeyi tanı",
    topics: [
      {
        title: "Yarıiletkenleri nasıl sınıflandırırız?",
        paragraphs: [
          "Yarıiletkenler <strong>elementel</strong> (Si, Ge) veya <strong>bileşik</strong> (GaAs, InP) olabilir. Bu ayrım, kristali oluşturan atom türlerine dayanır. Ayrıca bir malzemenin iç hacmi (<em>bulk</em>) ile arayüzünün (<em>interface</em>) elektronik özellikleri aynı olmak zorunda değildir.",
          "<strong>Saf (pure)</strong> yapısal bir ölçüttür: ideal durumda yabancı atom ve kusur bulunmamasını anlatır. <strong>Öz (intrinsic)</strong> taşıyıcı rejiminde termal dengede n₀ = p₀ = nᵢ olur; saflık ve taşıyıcı dengesi aynı soru değildir. <strong>Katkılı (extrinsic)</strong> malzemede donör veya akseptörler vardır ve genellikle bir taşıyıcı türü baskındır. Ancak yüksek sıcaklıkta katkılı bir malzeme de öz taşıyıcı rejimine yaklaşabilir. Aydınlatılmış saf bir örnek ise saflığını koruduğu halde termal dengede olmayabilir."
        ],
        visual: ["classification"],
        key: "Malzemenin kimyasal türü, saflığı ve taşıyıcı davranışı farklı sınıflandırma eksenleridir."
      },
      {
        title: "Silisyum atomu ve dört değerlik elektronu",
        paragraphs: [
          "Silisyumun atom numarası 14'tür. Elektron dizilimi 1s² 2s² 2p⁶ 3s² 3p² biçimindedir. Dış kabuğundaki dört değerlik elektronu, komşu atomlarla bağ yaparken belirleyicidir.",
          "Kristalde her Si atomu dört en yakın komşusuyla <strong>kovalent bağ</strong> kurar. Ders 02'deki <em>Two-dimensional representation</em>, kesişimleri atom, çizgi parçalarını bağ olarak gösteren öğretici bir şemadır. Bu düzlemde dört komşu çizilmesi, gerçek Si kristalinde bağların 90°'lik düzlemsel açılar yaptığı anlamına gelmez; gerçek düzen tetrahedraldir (yaklaşık 109,47°)."
        ],
        equation: "Si: 1s² 2s² 2p⁶ 3s² 3p²",
        visual: ["bond2d"],
        key: "Dört değerlik elektronu, silisyumun tetrahedral bağ düzeninin başlangıç noktasıdır."
      },
      {
        title: "Diamond kristal yapısı",
        extraVisual: ["silicon-cell"],
        paragraphs: [
          "Silisyum, elmas-kübik (<em>diamond cubic</em>) yapıda kristalleşir. Düzen, birbiri boyunca [111] doğrultusunda (a/4, a/4, a/4) kadar ötelenmiş iki yüzey merkezli kübik (fcc) alt örgü olarak düşünülebilir. Her atomun dört en yakın komşusu tetrahedral yönlerde bulunur. Slayttaki birim hücre çizimi ve yükseklik belirtilmiş izdüşüm, düzlemsel bağ şemasından farklı gösterimlerdir.",
          "Oda sıcaklığı civarında örgü sabiti yaklaşık <strong>5,43 Å</strong>; geleneksel kübik birim hücrede sekiz Si atomu vardır. Atom yoğunluğu yaklaşık 5 × 10²² cm⁻³'tür. Öz Si'de 300 K civarında nᵢ ≈ 10¹⁰ cm⁻³ mertebesindedir: serbest elektron yoğunluğu, atom yoğunluğundan yaklaşık 5 × 10¹² kat küçüktür. Bu, her atomun serbest taşıyıcı oluşturmadığını gösterir."
        ],
        equation: "a ≈ 5,43 Å   ·   N<sub>Si</sub> ≈ 5 × 10²² cm⁻³",
        key: "Kristal geometriyi bilmek, elektronların tek atom yerine periyodik bir ortamda bulunduğunu görmeyi sağlar."
      },
      {
        title: "Termal denge ve ayrıntılı denge ilkesi",
        extraVisual: ["non-equilibrium", "equilibrium-value"],
        paragraphs: [
          "<strong>Termal denge</strong>, dış uyarıların bulunmadığı ve makroskopik net akışların oluşmadığı başvuru durumudur. Denge, mikroskobik olayların durması demek değildir: termal üretim ve rekombinasyon sürebilir. Örneğin iki uç arasında sıcaklık farkı, sürekli ışıkla taşıyıcı üretimi veya akım taşıyan dış kutuplama termal dengeden sapmaya yol açar.",
          "<strong>Ayrıntılı denge (detailed balance)</strong> ilkesinde, dengedeki bir süreç karşıt süreciyle uygun şekilde dengelenir. Elektron–hol üretimi ve yeniden birleşmesi bunun yarıiletkenlerdeki temel örneğidir. Dengede p–n eklemindeki birbirine zıt sürüklenme ve difüzyon akımları net sıfırdır; küçük bir dış kutuplama bu eşitliği değiştirir ve diyot akımı doğar."
        ],
        key: "Denge, hareketsizlik değil; mikroskobik süreçlerin birbirini dengelemesidir."
      },
      {
        title: "Kararlı durum (steady state) neden denge değildir?",
        paragraphs: [
          "Bir sistemin taşıyıcı yoğunlukları zamana göre değişmiyorsa <strong>kararlı durumdadır</strong>. Ancak sürekli aydınlatılan bir güneş hücresinde ya da sabit gerilim uygulanan bir diyotta akım veya üretim sürebilir; bunlar genel olarak termal denge değildir.",
          "Bu nedenle <strong>her termal denge durumu bir kararlı durumdur, fakat her kararlı durum termal denge değildir.</strong> Kümeler açısından <em>equilibrium ⊂ steady state</em>. Örneğin sabit gerilimli diyotta veya sürekli aydınlatılmış güneş hücresinde ölçümler zamanla değişmeyebilir; yine de sistemde dış sürücü ve net akış bulunur."
        ],
        equation: "Termal denge ⊂ Kararlı durum",
        visual: ["steady-subset"],
        key: "Zamanda sabit olmak, net akışın sıfır olduğu anlamına gelmez."
      },
      {
        title: "Dalgalar, fotonlar ve fononlara giriş",
        paragraphs: [
          "Foton elektromanyetik alanın kuantumu, fonon ise kristal titreşimlerinin kuantumlanmış uyarımıdır. Elektronlar da de Broglie dalga davranışı gösterir. Aynı fiziksel olay farklı durumlarda dalga veya parçacık diliyle anlatılabilir.",
          "Foton enerjisi E = hν, momentumun dalga boyuyla ilişkisi p = h/λ biçimindedir. Fononların varlığı, sıcaklık ve örgü titreşimlerini anlamak için önemlidir; ayrıntılı taşıyıcı etkileşimleri 03. derste ele alınır."
        ],
        equation: "E = hν   ·   p = h/λ",
        key: "Foton, fonon ve elektron farklı fiziksel taşıyıcıları veya uyarımları temsil eder."
      }
    ],
    outcomes: [
      "Si, Ge ve GaAs örneklerini elementel/bileşik olarak sınıflandırırım.",
      "Saf, öz ve katkılı yarıiletken kavramlarını birbirinden ayırırım.",
      "Si atomunun dört değerlik elektronunu ve kovalent bağ düzenini açıklarım.",
      "Elmas-kübik Si'de a ≈ 5,43 Å, sekiz atom/hücre ve 3B tetrahedral komşuluğu yorumlarım.",
      "Termal dengeyi kararlı durumdan ayırır, sıcaklık gradyanı, aydınlatma ve dış kutuplama örneklerini yorumlarım.",
      "Foton, fonon ve elektronun temel dalga-parçacık özelliklerini eşleştiririm.",
      "İki boyutlu bağ çizimini gerçek tetrahedral Si yapısından ayırır, [001] izdüşümünde atom yüksekliklerini yorumlarım.",
      "Si atom yoğunluğu (≈ 5 × 10²² cm⁻³) ile öz taşıyıcı yoğunluğunu (nᵢ ≈ 10¹⁰ cm⁻³) oranlayabilirim.",
      "Ayrıntılı dengede p–n eklemindeki sürüklenme ve difüzyon akımlarının neden birbirini dengelediğini açıklarım.",
      "nᵢ–T grafiğinde cm⁻³ birimindeki gerçek taşıyıcı yoğunluğunu ve sıcaklığa bağlı artışı yorumlarım."
    ],
    future: {
      grafikler: ["Silisyum kristalinin 3B örgü şeması", "Termal denge ve kararlı durum karşılaştırması"],
      simulasyonlar: ["Tetrahedral Si bağlarının etkileşimli modeli", "Üretim–rekombinasyon süreç dengesinin gösterimi"],
      sorular: ["Malzeme sınıflandırma ve kavram ayırt etme", "Denge / kararlı durum senaryoları"],
      oyunlar: ["Kristal yapıyı tamamla", "Doğru kavramı eşleştir"]
    }
  },
  {
    id: "03",
    navTitle: "Elektron ve Hol",
    title: "Elektronlar, Holler ve Taşıyıcı Dinamiği",
    kicker: "Mikroskobik fizik",
    description: "Termal enerjinin kristalde nasıl taşıyıcı oluşturduğunu, bir holün neden pozitif gibi davrandığını ve üretim–rekombinasyon süreçlerini bağ modeliyle kavra.",
    focus: "Taşıyıcıyı açıkla",
    topics: [
      {
        title: "Sıcaklık kristalde neyi değiştirir?",
        paragraphs: [
          "Öz yarıiletkenin ideal bant modelinde 0 K'de termal olarak üretilmiş elektron–hol çiftleri bulunmaz. Sıcaklık yükseldiğinde örgü titreşimlerinin (fononların) ve elektronların termal uyarılma olasılığı artar. Termal enerji tek tek elektronlara eşit biçimde dağıtılmaz; taşıyıcı yoğunluğu izinli enerji durumları ve istatistiksel dolulukla belirlenir.",
          "Silisyumda yaklaşık 300 K'de <strong>E<sub>g</sub> ≈ 1,12 eV</strong>, valans bandının en yüksek dolu durumları ile iletim bandının en düşük boş durumları arasındaki <strong>enerji farkıdır</strong>. Bu aralığı aşan uygun elektronik uyarılma, iletimde elektron ve valansta hol oluşturabilir. Kristalde atomları birbirine bağlayan Si–Si kovalent bağının kimyasal kopma enerjisi ise farklı bir fiziksel niceliktir: tek bir bağın ayrılması, elektriksel taşıyıcı oluşturma geçişiyle aynı olay değildir."
        ],
        equation: "E<sub>g,Si</sub> ≈ 1,12 eV (300 K civarı)",
        visual03: [],
        key: "Sıcaklık, enerji durumlarının doluluğunu ve termal taşıyıcı oluşumunu etkiler."
      },
      {
        title: "Elektron–hol çifti nasıl oluşur?",
        paragraphs: [
          "Bir elektron valans bandından iletim bandına uyarıldığında iletimde hareket edebilen bir elektron ve valans bandında boş kalan bir durum oluşur. Bu boş durumu <strong>hol (delik)</strong> olarak adlandırırız.",
          "<strong>Bu geçiş hangi koşullarda olur?</strong> (1) <strong>Işık soğurulursa</strong>, foton enerjisinin yaklaşık hν ≥ E<sub>g</sub> olması gerekir; Si dolaylı bant aralıklı olduğundan enerjiye ek olarak kristal momentumunun korunmasında fonon katılımı önemli olabilir. (2) <strong>Isıl üretimde</strong> sonlu sıcaklıktaki enerji dağılımı bantlar arası uyarılmaları mümkün kılar. (3) <strong>Yüksek elektrik alanında</strong> hızlanan bir taşıyıcı çarpışma iyonlaşmasıyla ek elektron–hol çifti oluşturabilir. (4) Çok güçlü alanlarda bantlar arası tünelleme de mümkündür. Bunlar farklı fiziksel mekanizmalardır; yalnızca hν ≥ E<sub>g</sub> olması her fotonun mutlaka soğurulacağı anlamına gelmez.",
          "300 K'de E<sub>g</sub> ≈ 1,12 eV, foton için yaklaşık <strong>λ ≈ 1107 nm</strong> eşik dalga boyuna karşılık gelir (E = hc/λ). Daha kısa dalga boyu daha yüksek enerji taşır; ancak absorpsiyon olasılığı dalga boyuna, malzemeye ve kalınlığa bağlıdır. Öz malzemede çift üretimi elektron ve holü birlikte oluşturur; termal dengede n<sub>0</sub> = p<sub>0</sub> = n<sub>i</sub> olur."
        ],
        equation: "n<sub>i</sub> = p<sub>i</sub>",
        visual03: ["excitation"],
        key: "Foton soğurulması, termal uyarılma veya yüksek enerjili taşıyıcı çarpışması uygun koşullarda bir elektron–hol çifti oluşturabilir."
      },
      {
        title: "Hol gerçekten hareket eder mi?",
        paragraphs: [
          "Bir valans elektronu komşu boş kuantum durumuna geçtiğinde boşluk ters yönde yer değiştirmiş gibi görünür. Çok sayıdaki valans elektronunun ortak davranışını, <strong>pozitif yüklü ve hareketli bir hol</strong> ile hesaplamak daha kolaydır.",
          "Bu bir fiziksel kuaziparçacık tanımıdır; pozitif bir çekirdeğin yürüdüğü anlamına gelmez. <strong>Kabarcık benzetmesinde</strong> sıvı bir yöne akarken kabarcık diğer yönde hareket eder: gerçekte hareket eden elektronlardır; hol az sayıdaki boş durumu izleyerek hesabı sadeleştirir. Hall ölçümleri hol taşıyıcısının elektriksel etkisini ortaya koyar."
        ],
        key: "Hol, valans bandındaki eksik elektronun hareketini pozitif taşıyıcı olarak temsil eder."
      },
      {
        title: "Üretim ve yeniden birleşme",
        paragraphs: [
          "<strong>Üretim (generation)</strong> yeni elektron–hol çiftleri oluşturur. <strong>Yeniden birleşme (recombination)</strong> ise iletim elektronunun valans bandındaki boşluğu doldurmasıyla serbest bir elektron–hol çiftini ortadan kaldırır.",
          "<strong>Üretim örnekleri:</strong> Güneş hücresi/fotodiyotta soğurulan ışığın oluşturduğu <strong>fotogeneration</strong>; yüksek alanlı çığ fotodiyotunda hızlanmış taşıyıcının yeni çiftler oluşturduğu <strong>impact ionization</strong>; sıcaklığın oluşturduğu <strong>termal üretim</strong>. <strong>Yeniden birleşme örnekleri:</strong> LED'de enerji foton olarak çıkabilir (<strong>radiative</strong>); kusur seviyeleri ara durak olur (<strong>SRH</strong>); <strong>Auger</strong> olayında enerji üçüncü bir elektrona veya hole aktarılır. Si dolaylı bant aralıklı olduğundan ışınımsal yeniden birleşme birçok koşulda zayıftır.",
          "Termal dengede toplam üretim ve yeniden birleşme hızları eşittir (<strong>G = R</strong>); süreçler yine de sürer. Sabit aydınlatmada zamanla değişmeyen bir kararlı duruma ulaşılması, termal dengeye dönüldüğü anlamına gelmez. Her mekanizmanın hızı malzemeye, sıcaklığa, kusurlara ve taşıyıcı yoğunluğuna bağlıdır."
        ],
        visual03: ["generation", "mechanisms"],
        key: "Dengede toplam üretim ve yeniden birleşme hızları eşit olabilir; süreçler yine de sürer."
      },
      {
        title: "Saçılma, yeniden birleşme ve yaşam süresi",
        paragraphs: [
          "<strong>Saçılma</strong> bir taşıyıcının momentumunu veya enerji durumunu değiştirebilir, fakat taşıyıcı sayısını zorunlu olarak azaltmaz. <strong>Yeniden birleşmede</strong> bir elektron–hol çifti ortadan kalkar. Bu iki olay birbirine karıştırılmamalıdır.",
          "Taşıyıcının yeniden birleşmeden önce geçirdiği karakteristik zaman, uygun koşullarda <strong>taşıyıcı yaşam süresi</strong> ile ifade edilir. Momentum gevşemesi ve yeniden birleşme farklı zaman ölçekleridir."
        ],
        visual03: ["scattering"],
        key: "Mobiliteyi sınırlayan saçılma ile taşıyıcı ömrünü belirleyen rekombinasyon farklı mekanizmalardır."
      },
      {
        title: "Bağ modeli neden tek başına yeterli değil?",
        paragraphs: [
          "<strong>Bağ modeli nedir?</strong> Si'nin dört değerlik elektronu dört en yakın komşuyla kovalent bağları kurar. İki boyutlu öğretim çiziminde dolu bağlar ideal 0 K valans durumlarını temsil eder. Enerjiyle bir elektron iletim durumuna uyarıldığında bağın gösterdiği yerde boş valans durumu (hol) kalır. Komşu bağlı elektronlar bu boşluğu doldurabilir; hol karşı yönde ilerliyormuş gibi davranır.",
          "<strong>Neyi açıklar?</strong> Elektron ve holün çift halinde üretimini, öz dengede nᵢ=pᵢ olmasını, küçük öz taşıyıcı yoğunluğunu ve sıcaklıkla hızlı artışı nitel olarak anlatır. <strong>Neden yetmez?</strong> Çok sayıda küçük enerjinin tek bağda toplanması benzetmesi nicel bir mikroskobik mekanizma değildir; durum yoğunluğu, doluluk olasılığı, etkin kütle ve doğru nᵢ hesabı için bant teorisi ile Fermi–Dirac istatistiği gerekir."
        ],
        visual03: ["bond"],
        key: "Bir modelin başarılı olması, hem açıklayabildiğini hem de hesaplayamadığını bilmeyi gerektirir."
      },
      {
        title: "Etkin kütle (effective mass) neyi anlatır?",
        paragraphs: [
          "Kristalde hareket eden elektron veya hol, dış kuvvete vakumdaki serbest parçacık gibi yanıt vermeyebilir. <strong>Etkin kütle m*</strong>, bant yapısının kuvvet–ivme ilişkisine etkisini ifade eder. Tek boyutlu parabolik bantta eğrilik büyüdükçe m* küçülür; bu kristal yapısının taşıyıcının gerçek durgun kütlesini değiştirmesi değildir.",
          "Ders slaytındaki Si için yaklaşık iletkenlik etkin kütleleri elektron için <strong>0,26 m₀</strong>, hol için <strong>0,35–0,37 m₀</strong> olarak verilir. Bunlar seçilen yön ve yaklaşıma bağlı örnek değerlerdir: Si elektron vadileri anizotropiktir, hol bantlarında birden fazla dal bulunur. Durum yoğunluğu etkin kütlesi farklı tanımlanır; 04–05. derste ayrıntılandırılır."
        ],
        equation: "m* ≈ ℏ² / (d²E/dk²) &nbsp;·&nbsp; (parabolik bant, 1B)",
        visual03: ["mass"],
        key: "Etkin kütle, kristal bantlarının taşıyıcının dış kuvvete verdiği tepkiyi nasıl değiştirdiğini tanımlar."
      },
      {
        title: "Öz taşıyıcı yoğunluğu nᵢ: tanımı ve büyüklüğü",
        paragraphs: [
          "Öz taşıyıcı yoğunluğu <strong>n<sub>i</sub></strong>, katkısız (intrinsik) bir yarıiletkende <strong>termal dengede</strong> birim hacim başına bulunan <strong>iletim elektronu yoğunluğunun</strong> ve aynı zamanda <strong>hol yoğunluğunun</strong> ortak değeridir: <strong>n<sub>0</sub> = p<sub>0</sub> = n<sub>i</sub></strong>. Birimi cm⁻³'tür; üretim hızı, toplam atom sayısı veya yalnızca elektron–hol çiftlerinin oluşma olasılığı değildir. Örneğin n<sub>i</sub>=10¹⁰ cm⁻³ denildiğinde 1 cm³'te yaklaşık 10¹⁰ serbest elektron ve ayrı ayrı 10¹⁰ hol vardır. Burada elektriksel yük nötrlüğü sağlanır; taşıyıcıların bulunması tek başına net elektrik akımı olduğu anlamına gelmez.",
          "Silisyumda 300 K civarında yaklaşık <strong>5 × 10²² atom/cm³</strong> ve <strong>n<sub>i</sub> ≈ 10¹⁰ cm⁻³</strong> mertebesi alınır: 5×10²² / 10¹⁰ ≈ <strong>5×10¹² atom/elektron</strong>. Bu oran 'her 5 trilyon atomdan biri kimyasal olarak kırılır' anlamına gelmez. n<sub>i</sub> başlıca <strong>sıcaklık T</strong>, <strong>elektronik bant aralığı E<sub>g</sub></strong> ve <strong>etkin durum yoğunluklarına N<sub>c</sub>, N<sub>v</sub></strong> bağlıdır. Denge dışı ışık altında gerçek n, p değerleri n<sub>i</sub>'ye eşit olmak zorunda değildir. İdeal dejenere olmayan denge modelinde katkılanmış malzemede de n<sub>0</sub>p<sub>0</sub>=n<sub>i</sub>² geçerlidir.",
          "Sıcaklığın enerji ölçeği 300 K'de <strong>kT ≈ 0,0259 eV</strong> iken Si bant aralığı yaklaşık <strong>1,12 eV</strong>'tur. E<sub>g</sub>/kT ≈ 43 değeri yalnızca iki enerji ölçeğinin oranıdır; 'tam 43 fononun aynı bağda birleşmesi' şartı değildir. Nicel taşıyıcı yoğunluğu <strong>n<sub>i</sub> = √(N<sub>c</sub>N<sub>v</sub>)exp[−E<sub>g</sub>/(2kT)]</strong> ile yaklaşık hesaplanır. N<sub>c</sub>(300 K)=2,8×10¹⁹, N<sub>v</sub>(300 K)=1,04×10¹⁹ cm⁻³ ve E<sub>g</sub>=1,12 eV alınırsa yaklaşık <strong>6,7×10⁹ cm⁻³</strong> bulunur. 10¹⁰ cm⁻³ ise dersteki yuvarlatılmış referans mertebesidir; parametre/model seçimi sayısal sonucu etkiler."
        ],
        equation: "nᵢ(300 K) ≈ 10¹⁰ cm⁻³ &nbsp;·&nbsp; N<sub>Si</sub>/nᵢ ≈ 5 × 10¹²",
        visual03: ["concentration"],
        key: "Öz taşıyıcı yoğunluğu termal dengede n₀=p₀=nᵢ olarak tanımlanır; T, E₉, Nᶜ ve Nᵛ değerleriyle hesaplanır."
      },
      {
        title: "Bağ modeli bir denklem olarak: sıcaklık ve nᵢ",
        paragraphs: [
          "Sunumun <em>The model as an equation</em> yaklaşımı, her küçük enerji katkısına p<1 olasılık çarpanı atayarak <strong>nᵢ = N · p^(E/kT)</strong> biçiminde nitel bir model kurar. Logaritması alındığında <strong>ln(nᵢ/N) = (E ln p/k)·(1/T)</strong> bulunur; seçilen sabit p için ln(nᵢ/N) – 1/T grafiği yaklaşık bir doğru verir. Ancak model p'yi fiziksel ilkelerden hesaplayamaz.",
          "Nicel yarıiletken hesabında parabolik bantlar ve dejenere olmayan Boltzmann yaklaşımı altında <strong>n<sub>i</sub>=√(N<sub>c</sub>N<sub>v</sub>)exp[−E<sub>g</sub>/(2kT)]</strong> kullanılır. <strong>N<sub>c</sub>(T) ve N<sub>v</sub>(T) yaklaşık T<sup>3/2</sup></strong> ile artar; E<sub>g</sub>(T) sıcaklıkla değişebilir. Grafikler sekmesindeki doğrusal n<sub>i</sub>–T grafiği gerçek yoğunluğu gösterir. Diğer grafikte <strong>ln[n<sub>i</sub>/√(N<sub>c</sub>N<sub>v</sub>)] = −E<sub>g</sub>/(2kT)</strong> ifadesi 1000/T'ye karşı çizilir: E<sub>g</sub> sabitse doğru, sıcaklığa bağlıysa eğrilik beklenir. Simülasyonlar sekmesinde T, E<sub>g</sub>, N<sub>c</sub>, N<sub>v</sub> değiştirilerek adım adım hesap yapılabilir. Ayrıntılı istatistik Ders 05'tedir."
        ],
        equation: "nᵢ = N · p<sup>E/(kT)</sup> (nitel) &nbsp;·&nbsp; nᵢ = √(N<sub>c</sub>N<sub>v</sub>)e<sup>−E<sub>g</sub>/(2kT)</sup> (bant modeli)",
        visual03: ["equation"],
        key: "Basit model sıcaklık eğilimini açıklar; güvenilir taşıyıcı hesabı için bant modeli ve istatistik gerekir."
      },
    ],
    outcomes: [
      "Öz kristalde termal uyarılma ile elektron–hol çifti oluşumunu açıklarım.",
      "Hol hareketini valans elektronlarının hareketiyle ilişkilendiririm.",
      "Öz malzemede nᵢ = pᵢ koşulunun nedenini açıklarım.",
      "Generation, recombination ve scattering süreçlerini karşılaştırırım.",
      "Denge durumunda üretim–rekombinasyonun sürebileceğini açıklarım.",
      "Taşıyıcı yaşam süresi ile momentum saçılmasını ayırırım.",
      "Bağ modelinin nicel taşıyıcı hesabında neden sınırlı olduğunu belirtirim.",
      "Elektronik bant aralığını kimyasal bağ kopma enerjisinden ayırt eder, 1,12 eV değerini açıklarım.",
      "Foton enerjisi, ısıl uyarılma ve çarpışma iyonlaşmasıyla elektron–hol üretim koşullarını ayırt ederim.",
      "Üretim ve yeniden birleşme bant çizimlerini yorumlar; fotogeneration, impact ionization, radiative, SRH ve Auger mekanizmalarını karşılaştırırım.",
      "Elektron ve hol etkin kütlesini, iletkenlik ve durum yoğunluğu kütlesi ayrımıyla açıklarım.",
      "Öz taşıyıcı yoğunluğunu n₀=p₀=nᵢ olarak tanımlar; atom yoğunluğuyla oranını ve T, E₉, Nᶜ, Nᵛ bağımlılıklarını yorumlarım.",
      "nᵢ=N·p^(E/kT) nitel modelinden ln(nᵢ/N) – 1/T ilişkisini türetir, bant modeliyle sınırlarını karşılaştırırım."
    ],
    future: {
      grafikler: ["Üretim ve yeniden birleşme hızlarının zaman grafiği", "Öz taşıyıcı yoğunluğunun sıcaklıkla nitel değişimi"],
      simulasyonlar: ["Elektron–hol üretim ve birleşme animasyonu", "Holün komşu bağlarda ilerlemesi"],
      sorular: ["Elektron–hol çifti ve yük korunumu", "Saçılma mı, rekombinasyon mu?"],
      oyunlar: ["Taşıyıcı hareketini eşleştir", "Süreç sınıflandırma oyunu"]
    }
  },
  {
    "id": "04",
    "navTitle": "Bant Teorisi",
    "title": "Kuantum Durumları ve Enerji Bant Teorisi",
    "kicker": "Atomdan katıya",
    "description": "Bağ modelinden bantlara geç: tek Si atomundaki durumları say, N atomda bantların nasıl oluştuğunu izle ve ölçekli Si bant diyagramını doğru yorumla.",
    "focus": "Bantları çiz",
    "topics": [
      {
        "title": "Bağ modeli neden yeterli değil? — bant modeline geçiş",
        "paragraphs": [
          "Bağ modeli, Si atomlarının dört komşusuyla kovalent bağ kurduğunu, termal uyarılmada elektron–hol çiftinin ortaya çıktığını ve holün bir boşluk gibi ilerleyebildiğini açıklar. Ancak atomlar tek tek çizilerek <strong>izinli enerjiler</strong>, <strong>birim hacimdeki durum sayısı</strong> ve <strong>elektronların bu durumları hangi olasılıkla doldurduğu</strong> hesaplanamaz.",
          "Örneğin niçin Si’de 300 K civarında yaklaşık 10¹⁰ cm⁻³ öz taşıyıcı bulunduğunu, azınlık taşıyıcı yoğunluğunu, Fermi seviyesinin konumunu ve sıcaklıkla nicel değişimi yalnızca kırılan bağ benzetmesiyle belirleyemeyiz. Bağ modeli <strong>yerel kimyasal resmi</strong> verir; bant modeli kristalin <strong>kuantum enerji durumları ve doluluklarını</strong> tanımlar.",
          "İki model rakip değildir: elektronik bant aralığı E<sub>g</sub> tek Si–Si bağını koparma enerjisi değildir. Bir bant geçişi gerçekleştiğinde kristal mutlaka kimyasal olarak parçalanmaz."
        ],
        "key": "Bağ modeli taşıyıcının sezgisini verir; bant modeli ise enerji, durum sayısı ve istatistiksel doluluğu hesaplamanın temelidir.",
        "visual04": [
          "why"
        ]
      },
      {
        "title": "Bant modelinin üç temel ilkesi",
        "paragraphs": [
          "<strong>1 — İzinli enerji durumları:</strong> Elektron kristalde rastgele bir enerjiye değil, Hamiltonyenin izin verdiği kuantum durumlarına yerleşir. Bir enerji değeri farklı spin ve uzaysal durumlara karşılık gelebilir. Yasak aralıkta ideal kristalin hacimsel bant durumları yoktur.",
          "<strong>2 — Pauli dışarlama ilkesi:</strong> İki elektron bütün kuantum sayıları aynı olan bir durumu paylaşamaz; her uzaysal orbital iki zıt spinle dolabilir. Bir 3p alt kabuğu 3 uzaysal orbital × 2 spin = <strong>6 spin durumu</strong> içerir. Bir enerji seviyesinin doluluğu ile tek bir kuantum durumunun doluluğunu ayırmalıyız.",
          "<strong>3 — En düşük enerji ve istatistiksel doluluk:</strong> Temel durumda elektronlar Pauli’ye uyarak erişilebilir en düşük enerji durumlarından başlar. 0 K ideal yarıiletken için valans bandı dolu, iletim bandı boştur. Sonlu sıcaklıkta doluluk <strong>Fermi–Dirac istatistiği</strong> ile belirlenir; fonksiyonun ayrıntısı 05. derstedir."
        ],
        "key": "İzinli kuantum durumları + Pauli + enerjiye göre doluluk birlikte bantların neden dolu/boş göründüğünü açıklar.",
        "visual04": [
          "principles"
        ]
      },
      {
        "title": "Tek bir yalıtılmış Si atomunun enerji durumları",
        "paragraphs": [
          "Silisyum atom numarası <strong>Z=14</strong> olduğundan temel hâlin elektron dizilimi <strong>1s² 2s² 2p⁶ 3s² 3p²</strong> biçimindedir. Dış kabuktaki dört elektron (3s²3p²) değerlik elektronudur; 1s, 2s ve 2p iç kabukları doludur.",
          "Şekilde her daire <strong>bir spin durumunu</strong>, işaretli daire dolu durumu gösterir. 1s=2/2, 2s=2/2, 2p=6/6, 3s=2/2 ve 3p=2/6; toplam 14 elektron. Gerçekte 3p’nin üç uzaysal orbitalindeki iki elektron Hund kuralına uygun biçimde ayrı orbitallerde paralel spinli yerleşir; burada durum çizimi enerji ve doluluğu göstermek içindir.",
          "Çizimde seviyeler arasındaki düşey mesafeler <strong>ölçekli değildir</strong>. Tek atomun 3s ve 3p seviyelerini kristalde doğrudan 'valans ve iletim bandı' diye adlandırmak henüz doğru olmaz."
        ],
        "key": "3p alt kabuğunda 6 spin durumu, yalnız 2 elektron bulunur; atomik düzeyler ile kristal bantları aynı şey değildir.",
        "visual04": [
          "atom"
        ]
      },
      {
        "title": "N Si atomu yaklaşınca: seviyeler nasıl bant oluşturur?",
        "paragraphs": [
          "Birbirinden çok uzakta N Si atomunun 3s kökenli <strong>2N spin durumu ve 2N elektronu</strong>, 3p kökenli <strong>6N spin durumu ve 2N elektronu</strong> vardır. Böylece yalnızca değerlik alt kabukları için toplam <strong>8N izinli spin durumu ve 4N elektron</strong> sayarız.",
          "Atomlar yaklaşınca orbitaller örtüşür ve kuantum etkileşimi başlangıçta eşenerjili seviyeleri çok sayıda yakın enerjiye ayırır. Önce 3s ve 3p kökenli durumlar genişleyebilir, birbirine yaklaşarak karışabilir; denge kristal aralığında bağ yapıcı ve karşı-bağ yapıcı karakterli valans/iletim bantları ortaya çıkar. <strong>Makroskopik N</strong> için birbirine yakın enerji seviyeleri sürekliymiş gibi görünür.",
          "İç kabuk 1s, 2s ve 2p durumları, değerlik durumlarına göre çok daha yerelleşmiştir; çizimde yalnız nitel olarak dar bantlar halinde tutulur. Gerçek bant yapısı kristal potansiyeli ve k-uzayındaki dağılımla belirlenir; çizilen iki bantlı eğriler pedagojik şemadır."
        ],
        "key": "N atomda spin dahil değerlik durum sayısı 8N, değerlik elektron sayısı 4N’dir; bant genişliğini atomik etkileşim belirler.",
        "visual04": [
          "splitting"
        ],
        "equation": "3s: 2N durum / 2N e⁻ &nbsp;·&nbsp; 3p: 6N durum / 2N e⁻"
      },
      {
        "title": "4N dolu valans, 4N boş iletim durumu",
        "paragraphs": [
          "Şematik modelde denge Si kristalinde 3s–3p kökenli toplam <strong>8N spin durumunun</strong> daha düşük enerjili <strong>4N</strong> tanesi valans bandına, üstteki <strong>4N</strong> tanesi iletim bandına karşılık gelir. N atom × 4 değerlik elektronu = <strong>4N elektron</strong> alt bandı 0 K ideal durumda tamamen doldurur.",
          "<strong>Valans bandı:</strong> 4N izinli spin durumu, 4N elektron. <strong>İletim bandı:</strong> 4N izinli spin durumu, 0 elektron (ideal 0 K, uyarılmamış durum). Bunların arasındaki <strong>E<sub>g</sub></strong> yasak aralığında ideal kristalde hacimsel bant durumları bulunmaz; kusurlar gerçek malzemede aralık içine yerelleşmiş durumlar getirebilir.",
          "Buradaki N atom sayımı sonlu bir öğretim modelidir. Gerçek kristalde çok sayıda bant ve k'ya bağlı enerji dağılımları vardır; iletim bandında yalnızca 4N durum varmış gibi tüm yüksek enerjili bant yapısına genellenmemelidir."
        ],
        "key": "Düşük enerjili 4N durum 4N değerlik elektronu tarafından doldurulur; üstte 4N durum 0 K’da boş kalır.",
        "visual04": [
          "bands"
        ],
        "equation": "8N durum = 4N valans + 4N iletim &nbsp;·&nbsp; 4N elektron (0 K)"
      },
      {
        "title": "Standart bant diyagramı: E₀, Eᶜ, Eᵛ, χ ve Eᵍ",
        "paragraphs": [
          "Bir kristal aralığı seçildiğinde enerji eksenine yalnız bantların kritik kenarlarını çizmek çoğu hesabı kolaylaştırır: <strong>E<sub>0</sub></strong> vakum seviyesi, <strong>E<sub>c</sub></strong> iletim bandı minimumu ve <strong>E<sub>v</sub></strong> valans bandı maksimumudur. Kenarlar arasında ideal kristalde yasak bölge vardır.",
          "<strong>E<sub>g</sub> = E<sub>c</sub> − E<sub>v</sub></strong> bant aralığı; <strong>χ = E<sub>0</sub> − E<sub>c</sub></strong> elektron ilgisi olarak tanımlanır. Dolayısıyla E<sub>0</sub> − E<sub>v</sub> = χ + E<sub>g</sub> olur. Vakum seviyesinin fiziksel konumu yüzey koşullarından etkilenebilir; χ ≈ 4,05 eV burada yaygın Si referansıdır.",
          "Bu **E–enerji** diyagramı E(k) dağılımı değildir: Si'nin <strong>dolaylı bant aralığı</strong> olduğunu göstermek için ayrı bir enerji–k grafiği gerekir."
        ],
        "key": "Bant aralığını elektron ilgisiyle karıştırma: Eᵍ iki bant kenarı arasındadır, χ vakum ile iletim kenarı arasındadır.",
        "visual04": [
          "diagram"
        ],
        "equation": "E<sub>g</sub> = E<sub>c</sub> − E<sub>v</sub> &nbsp;·&nbsp; χ = E<sub>0</sub> − E<sub>c</sub>"
      },
      {
        "title": "Silisyum 300 K: ölçekli enerji bant diyagramı",
        "paragraphs": [
          "300 K dolayında ideal hacim Si için yaklaşık <strong>E<sub>g</sub> = 1,12 eV</strong> ve referans elektron ilgisi <strong>χ = 4,05 eV</strong> alınır. Vakum seviyesi sıfır seçilirse <strong>E<sub>c</sub> = −4,05 eV</strong>, <strong>E<sub>v</sub> = −5,17 eV</strong> elde edilir. Aşağıdaki çizimde 4,05 eV ve 1,12 eV aralıkları **düşey uzunluk bakımından aynı ölçekle** gösterilir.",
          "Vakuma göre valans bandı kenarı farkı <strong>E<sub>0</sub>−E<sub>v</sub>=5,17 eV</strong>'tur. Bu değer bir Si–Si kovalent bağının ayrışma enerjisi değildir. Si'nin bant aralığı dolaylıdır; yalnız bu şemadan foton soğurmasının olasılığı veya taşıyıcının Fermi seviyesi okunmaz.",
          "İlgili enerji farkları sabit fizik yasaları değildir: E<sub>g</sub> sıcaklıkla değişir; deneysel yüzeyin elektron ilgisi, yüzey yönelimi/sonlanımı ve dipolüne bağlı olarak referans değerinden sapabilir. Ölçek yalnızca <strong>işaretlenmiş üç enerji kenarının göreli yüksekliğini</strong> gösterir; bütün valans ve iletim bant genişlikleri ölçekli değildir."
        ],
        "key": "300 K Si için yaygın referans: Eᶜ=−4,05 eV, Eᵛ=−5,17 eV (E₀=0); Eᵍ=1,12 eV.",
        "visual04": [
          "scaled"
        ],
        "equation": "E<sub>0</sub>−E<sub>v</sub> = χ + E<sub>g</sub> = 4,05 + 1,12 = 5,17 eV"
      },
      {
        "title": "Bağ modeli ↔ bant modeli: aynı olayın iki görünümü",
        "paragraphs": [
          "<strong>Bağ modelinde:</strong> Elektron kovalent bağda temsil edilir; uyarılınca boş bir valans bağı (hol) görünür. Komşu bağlı elektronların boşlukları doldurması holün hareketini açıklayan pedagojik bir benzetmedir.",
          "<strong>Bant modelinde:</strong> İzinli bir valans durumu boşalır ve iletim bandındaki bir durum dolmuş olur; <strong>elektron (−) + hol (+)</strong> çifti elde edilir. Yeniden birleşmede iletim elektronu valans boşluğunu doldurur. Taşıyıcı hareketi, durum dolulukları ve bant yapısından yorumlanır; bu olay tek bir Si–Si atomik bağının kopmasıyla özdeş değildir.",
          "Bağ modelinin fiziksel sezgisi güçlüdür; fakat <strong>ni, p, etkin kütle, Fermi seviyesi ve sıcaklık bağımlılığının</strong> nicel hesaplanması için bant yapısı ve istatistiksel doluluk gerekir. İki görünüm arasında geçiş yaparken 'yerel bağ resmi' ile 'kristal boyunca yayılmış kuantum durumlarını' birbirine karıştırma."
        ],
        "key": "Bağ modeli elektronu ve boşluğu yerel gösterir; bant modeli bunları dolu/boş kuantum durumlarıyla eşleştirir.",
        "visual04": [
          "bridge"
        ]
      },
      {
        "title": "Bant eğriliği, k ve etkin kütleye giriş",
        "paragraphs": [
          "Şimdiye kadar bant kenarlarını tek E ekseninde gördük. Gerçek bantlarda enerji elektronun kristal dalga vektörüne bağlıdır: <strong>E(k)</strong>. Si dolaylı bant aralıklıdır; iletim bandının minimumu ile valans bandının maksimumu aynı k'da değildir.",
          "Bir ekstremum yakınında bant eğriliği, taşıyıcının dış kuvvete verdiği tepkiyi etkiler: basit 1B parabolik bant için <strong>m*=ℏ²/(d²E/dk²)</strong>. Bu elektronun gerçek durgun kütlesinin değiştiği anlamına gelmez. İletkenlik ve durum yoğunluğu etkin kütleleri farklı amaçlarla tanımlanır; sonraki derste ayrıntılandırılır."
        ],
        "key": "Ölçekli enerji kenarları E(k) grafiğinin yerini tutmaz; etkin kütle bant eğriliğiyle ilişkilidir.",
        "equation": "m* ≈ ℏ² / (d²E/dk²) &nbsp;(1B, parabolik yaklaşım)"
      }
    ],
    "outcomes": [
      "Bağ modelinin niçin enerji durumlarını, azınlık taşıyıcılarını ve Fermi seviyesini nicel hesaplayamadığını açıklarım.",
      "Bant modelinin izinli kuantum durumları, Pauli ve enerjiye göre doluluk ilkelerini örneklerle açıklarım.",
      "Yalıtılmış Si atomu için 1s²2s²2p⁶3s²3p² dizilimini ve orbital başına spin durumu sayımını yaparım.",
      "N atomda 3s/3p kökenli 8N spin durumu ve 4N değerlik elektronunun nereden geldiğini hesaplarım.",
      "Atomlar yaklaştıkça seviyelerin ayrışmasını, yayılmasını ve bant oluşumunu yorumlarım.",
      "0 K'de 4N dolu valans ve 4N boş iletim durumunun fiziksel anlamını açıklarım.",
      "Standart bant diyagramında E₀, Eᶜ, Eᵛ, Eᵍ ve χ terimlerini doğru konumlandırırım.",
      "Si için 300 K'de χ=4,05 eV, Eᵍ=1,12 eV ve E₀−Eᵛ=5,17 eV ilişkisini hesaplarım.",
      "Bağ modeli ve bant modelinde üretim, hol hareketi ve yeniden birleşme olaylarını eşleştiririm.",
      "Eᵍ elektronik bant aralığı ile tek Si–Si kimyasal bağ kopma enerjisini ayırt ederim.",
      "E(k) bant eğriliği ile etkin kütleyi ilişkilendirir, ölçekli enerji diyagramının sınırını açıklarım."
    ],
    "future": {
      "grafikler": [
        "Atomik seviyelerden bant oluşumuna geçiş",
        "Gerçek ölçekle Si enerji bant diyagramı"
      ],
      "simulasyonlar": [
        "Atomlar arası mesafe ve bant ayrışması",
        "Valans–iletim bandı uyarılma animasyonu"
      ],
      "sorular": [
        "Pauli ilkesi ve durum sayımı",
        "Eᶜ, Eᵛ, Eᵍ, χ diyagram soruları"
      ],
      "oyunlar": [
        "Bant diyagramını tamamla",
        "Metal–yarıiletken–yalıtkan karşılaştırması"
      ]
    }
  },
  {
    id: "05",
    navTitle: "Fermi ve DOS",
    title: "Durum Yoğunluğu, Fermi İstatistiği ve Taşıyıcı Hesapları",
    kicker: "Nicel fizik",
    description: "Bantların hangi enerjileri barındırdığını ve elektronların o durumları hangi olasılıkla doldurduğunu birleştir. Öz taşıyıcı yoğunluğunu formüllerle hesaplamaya geç.",
    focus: "Yoğunluğu hesapla",
    topics: [
      {
        title: "Durum yoğunluğu N(E) nedir?",
        paragraphs: [
          "<strong>Durum yoğunluğu</strong>, birim hacim ve birim enerji başına izinli kuantum durumu sayısını ifade eder. N(E)dE çarpımı, E ile E+dE arasındaki durumların hacim başına sayısını verir.",
          "Üç boyutlu parabolik bant kenarı yaklaşımında iletim bandı için N(E) ∝ √(E−E<sub>c</sub>), valans bandı için benzeri ifade √(E<sub>v</sub>−E) biçimindedir. Bant kenarında durum sayısı azdır."
        ],
        equation: "N(E) dE → [cm⁻³] &nbsp;·&nbsp; [N(E)] = cm⁻³ eV⁻¹",
        key: "N(E), bir durumun dolu olup olmadığını değil, o enerjide kaç durum bulunduğunu anlatır."
      },
      {
        title: "Fermi–Dirac dağılımı ve Fermi seviyesi",
        paragraphs: [
          "<strong>f(E,T)</strong>, termal dengede E enerjisindeki izinli bir elektron durumunun dolu olma olasılığıdır. Fermi seviyesi E<sub>F</sub>, f=1/2 koşulunun sağlandığı enerjiyle tanımlanır.",
          "0 K limitinde doluluk keskin bir basamak gösterir; sıcaklık arttığında geçiş bölgesi genişler. f(E,T) tek başına mevcut durum sayısını söylemez: bunu N(E) belirler."
        ],
        equation: "f(E,T) = 1 / [1 + exp((E−E<sub>F</sub>)/kT)]",
        key: "Taşıyıcı hesabında 'kaç durum var?' ile 'hangi oranda dolu?' iki ayrı sorudur."
      },
      {
        title: "Boltzmann yaklaşımı ve 3kT kuralı",
        paragraphs: [
          "Bir enerji durumu E<sub>F</sub>'nin yeterince üstündeyse f(E,T) küçük olur ve Fermi–Dirac dağılımı bir üstel fonksiyonla yaklaşık gösterilir. Bu yaklaşım <strong>non-degenerate</strong> yarıiletken hesaplarını kolaylaştırır.",
          "Pratik bir ölçüt E−E<sub>F</sub> ≳ 3kT'dir; 300 K'de 3kT yaklaşık 0,078 eV'dir. Daha yüksek doğruluk gerektiren hesaplarda veya ağır katkılamada tam Fermi–Dirac istatistiği kullanılmalıdır."
        ],
        equation: "f(E,T) ≈ exp[−(E−E<sub>F</sub>)/kT]",
        key: "Yaklaşımın geçerlilik koşulu, elde edilen sayı kadar önemlidir."
      },
      {
        title: "Durum sayısı × doluluk = taşıyıcı sayısı",
        paragraphs: [
          "İletim bandındaki elektronların hacimsel yoğunluğu, mevcut durum sayısının o durumların doluluk olasılığıyla çarpılıp tüm iletim bandı boyunca toplanmasıyla bulunur. Bu işlem bir integraldir.",
          "Holler için valans bandında <strong>boş kalma olasılığı</strong> 1−f kullanılır. Parabolik bant ve Boltzmann yaklaşımlarıyla integral, etkin durum yoğunluğu biçiminde sadeleşir."
        ],
        equation: "n₀ = ∫<sub>Eᶜ</sub><sup>∞</sup> N<sub>c</sub>(E) f(E,T) dE",
        key: "Elektron sayısı, izinli durum yoğunluğu ile doluluk olasılığının integralidir."
      },
      {
        title: "Etkin durum yoğunlukları ve etkin kütle",
        paragraphs: [
          "<strong>N<sub>c</sub></strong> iletim, <strong>N<sub>v</sub></strong> valans bandı için etkin durum yoğunluğudur; birimleri cm⁻³'tür. Bunlar N(E) gibi enerji başına bir yoğunluk değildir. Parabolik bant yaklaşımında sıcaklıkla yaklaşık T<sup>3/2</sup> ölçeğinde büyür.",
          "İletkenlik etkin kütlesi taşıyıcının dış kuvvete verdiği yanıtla; <strong>durum yoğunluğu etkin kütlesi</strong> ise durum sayımıyla ilgilidir. N<sub>c</sub> ve N<sub>v</sub> hesaplarında uygun DOS etkin kütlesi kullanılmalıdır."
        ],
        equation: "N<sub>c</sub> = 2(2πm*<sub>DOS,e</sub>kT/h²)<sup>3/2</sup> &nbsp;·&nbsp; N<sub>c</sub> ∝ T<sup>3/2</sup>",
        key: "m* için tek bir evrensel sayı yoktur: hangi fiziksel niceliği hesapladığın önemlidir."
      },
      {
        title: "Elektron, hol ve kütle etkisi yasası",
        paragraphs: [
          "Boltzmann yaklaşımının geçerli olduğu dengedeki yarıiletkende elektron ve hol yoğunlukları E<sub>F</sub>'nin bant kenarlarına uzaklığıyla hesaplanır. İki ifadeyi çarptığımızda E<sub>F</sub> terimi sadeleşir.",
          "<strong>Kütle etkisi yasası</strong> olan n₀p₀=nᵢ² böyle elde edilir. Bağıntı denge ve non-degenerate yaklaşım koşulları altında kullanılmalıdır; genel bir denge-dışı kural değildir."
        ],
        equation: "n₀ = N<sub>c</sub> e<sup>−(Eᶜ−Eᶠ)/kT</sup> &nbsp;·&nbsp; p₀ = N<sub>v</sub> e<sup>−(Eᶠ−Eᵛ)/kT</sup><br>n₀p₀ = n<sub>i</sub>²",
        key: "Denge taşıyıcılarının çarpımı, bu yaklaşımda katkı yoğunluğundan değil sıcaklık ve bant parametrelerinden belirlenir."
      },
      {
        title: "Öz taşıyıcı yoğunluğu ve öz Fermi seviyesi",
        paragraphs: [
          "Öz yarıiletkende n₀=p₀=n<sub>i</sub> olduğundan temel formül n<sub>i</sub>=√(N<sub>c</sub>N<sub>v</sub>)exp(−E<sub>g</sub>/2kT) biçimindedir. Silisyum için 300 K civarında n<sub>i</sub> yaklaşık 10¹⁰ cm⁻³ mertebesindedir; kullanılan parametre ve referans veriyle küçük farklılıklar olabilir.",
          "Öz Fermi seviyesi E<sub>i</sub> genellikle bant aralığının orta noktasına yakın, ancak etkin durum yoğunlukları eşit olmadığında tam ortada değildir. ln(n<sub>i</sub>)–1/T eğimi bant aralığı hakkında bilgi verir; T<sup>3/2</sup> düzeltmesi de vardır."
        ],
        equation: "n<sub>i</sub> = √(N<sub>c</sub>N<sub>v</sub>) exp(−E<sub>g</sub>/2kT)",
        key: "Sıcaklık, öz taşıyıcı yoğunluğunu üstel biçimde güçlü etkiler."
      }
    ],
    outcomes: [
      "N(E) eğrisini ve birimlerini doğru yorumlarım.",
      "Fermi–Dirac fonksiyonuyla doluluk olasılığı hesaplarım.",
      "3kT ölçütüyle Boltzmann yaklaşımını değerlendiririm.",
      "Durum yoğunluğu ile doluluk integralini ilişkilendiririm.",
      "İletkenlik ve DOS etkin kütlesini ayırırım.",
      "Nᶜ, Nᵛ, n₀ ve p₀ bağıntılarını uygun koşullarda kullanırım.",
      "n₀p₀ = nᵢ² ilişkisini ve varsayımlarını açıklarım.",
      "nᵢ(T) grafiğini, öz Fermi seviyesini ve bant aralığı etkisini yorumlarım."
    ],
    future: {
      grafikler: ["N(E), f(E,T) ve N(E)f(E,T) aynı eksende", "nᵢ – 1000/T ve bant aralığı eğim karşılaştırması"],
      simulasyonlar: ["Sıcaklık ve Eᶠ ile Fermi–Dirac eğrisini değiştir", "Nᶜ ve Nᵛ üzerinden n₀ / p₀ hesaplayıcı"],
      sorular: ["3kT ve Boltzmann geçerlilik soruları", "Kütle etkisi yasası ve nᵢ sayısal alıştırmaları"],
      oyunlar: ["Enerji durumlarını doldur", "Doğru yaklaşımı seç"]
    }
  },
  {
    id: "06",
    navTitle: "Katkılama",
    title: "Katkılı Yarıiletkenler, İyonlaşma ve Yük Nötrlüğü",
    kicker: "Gerçek malzemeler",
    description: "Donör ve akseptörlerden başlayarak net katkıyı, yük nötrlüğünü ve sıcaklığa göre değişen taşıyıcı rejimlerini açıkla. Önce bağ modelini kullan, sonra sınırlarını tanı.",
    focus: "Katkıyı yorumla",
    topics: [
      {
        title: "Katkı dağılımı ve seyreltik yaklaşım",
        paragraphs: [
          "Katkı atomları kristal konumlarına istatistiksel biçimde yerleşir. Büyük hacimlerde rastgele dağılımın ortalaması yeterince kararlı olduğundan <strong>uniform doping</strong> yaklaşımı kullanılabilir; atomların düzenli bir ızgarada dizildiği anlamına gelmez.",
          "Düşük ve orta katkı seviyelerinde atomları birbirinden bağımsız kabul etmek yararlı olabilir. Yüksek katkıda etkileşimler ve bant değişimleri bu seyreltik yaklaşımı geçersiz kılabilir."
        ],
        key: "Uniform katkılama istatistiksel homojenliktir; tek tek atomlar rastgele konumlanır."
      },
      {
        title: "Donör ve akseptör nasıl çalışır?",
        paragraphs: [
          "Si içine katılan beş değerlik elektronlu <strong>fosfor (P)</strong> gibi bir donör, dört bağına ek olarak zayıf bağlı bir elektron sağlar. Bu elektron iletim bandına geçtiğinde geride pozitif yüklü iyonlaşmış donör kalır.",
          "Üç değerlik elektronlu <strong>bor (B)</strong> gibi bir akseptör, çevreden elektron kabul ederek valans bandında hol oluşturabilir; iyonlaşmış akseptör negatiftir. Donör iyonlaşması doğrudan bir hol, akseptör iyonlaşması doğrudan bir iletim elektronu üretmez."
        ],
        equation: "Donör: D⁰ → D⁺ + e⁻ &nbsp;·&nbsp; Akseptör: A⁰ → A⁻ + h⁺",
        key: "Donör–akseptör ayrımı, hem taşıyıcı türünü hem de iyonlaşmış katkı yükünü belirler."
      },
      {
        title: "Katkı iyonlaşma enerjisi",
        paragraphs: [
          "Donör ve akseptör seviyeleri genellikle ilgili bant kenarına yakındır. Si:P için donör iyonlaşma enerjisi yaklaşık <strong>0,045 eV</strong>'tur; Si:B için akseptör iyonlaşma enerjisi de benzer mertebededir.",
          "Bu değerler Si'nin 300 K civarındaki yaklaşık 1,12 eV bant aralığından çok küçüktür. Hidrojen-benzeri yaklaşık model, ortamın dielektrik özellikleri ve etkin kütle nedeniyle bağlanmanın zayıflamasını nitel olarak açıklar."
        ],
        equation: "E<sub>ion,P</sub> ≈ 0,045 eV &nbsp;≪&nbsp; E<sub>g,Si</sub> ≈ 1,12 eV",
        key: "Katkıyı iyonlaştırmak, bantlar arası yeni bir elektron–hol çifti oluşturmakla aynı süreç değildir."
      },
      {
        title: "Çoğunluk ve azınlık taşıyıcıları",
        paragraphs: [
          "n-tipi malzemede elektronlar, p-tipi malzemede holler çoğunluk taşıyıcılarıdır. Karşı tür <strong>azınlık taşıyıcısıdır</strong>. Katkı iyonlaşması ile termal elektron–hol çifti üretimi iki farklı taşıyıcı kaynağıdır.",
          "Dengede ve Boltzmann yaklaşımı altında n₀p₀=n<sub>i</sub>² bağıntısı geçerlidir. Örneğin n-tipi bir malzemede çoğunluk elektron yoğunluğu biliniyorsa azınlık hol yoğunluğu p₀=n<sub>i</sub>²/n₀ ile bulunur."
        ],
        equation: "p₀ = n<sub>i</sub>² / n₀  (n-tipi, denge ve non-degenerate)",
        key: "Katkı çoğunluk taşıyıcı türünü belirler; azınlık taşıyıcıları denge istatistiğiyle birlikte değerlendirilir."
      },
      {
        title: "Yük nötrlüğü denklemini kurma",
        paragraphs: [
          "Makroskopik olarak yüksüz, homojen bir yarıiletken bölgesinde negatif yükler (elektronlar ve iyonlaşmış akseptörler) ile pozitif yükler (holler ve iyonlaşmış donörler) dengededir.",
          "İyonlaşmış donör yoğunluğu N<sub>D</sub><sup>+</sup>, iyonlaşmış akseptör yoğunluğu N<sub>A</sub><sup>−</sup> ile gösterilir. <strong>N<sub>D</sub> ile N<sub>D</sub><sup>+</sup> birbirine her zaman eşit değildir</strong>; kısmi iyonlaşmada fark oluşur."
        ],
        equation: "n₀ + N<sub>A</sub><sup>−</sup> = p₀ + N<sub>D</sub><sup>+</sup>",
        key: "Yük nötrlüğünde toplam katkı sayısını değil, iyonlaşmış katkı yüklerini saymak gerekir."
      },
      {
        title: "Telafili katkılama (compensation)",
        paragraphs: [
          "Bir malzemede hem donör hem akseptör bulunabilir. Tam iyonlaşma ve çoğunluk taşıyıcılarının baskın olduğu koşullarda net n-tipi katkı kabaca N<sub>D</sub>−N<sub>A</sub> ile belirlenir.",
          "Örneğin N<sub>D</sub>=10¹⁶ ve N<sub>A</sub>=4×10¹⁵ cm⁻³ olduğunda net katkı 6×10¹⁵ cm⁻³'tür. Ancak iyonlaşmış safsızlıklarla saçılma, yalnızca net farktan değil toplam katkı miktarından da etkilenir."
        ],
        equation: "N<sub>net</sub> = N<sub>D</sub> − N<sub>A</sub> = 6 × 10¹⁵ cm⁻³",
        key: "Net katkı taşıyıcı baskınlığını; toplam iyonlaşmış safsızlık miktarı saçılma etkisini belirlemeye yardım eder."
      },
      {
        title: "Sıcaklığa göre üç çalışma rejimi",
        visual: ["temperature-preview"],
        extraVisual: ["majority-numbers"],
        paragraphs: [
          "<strong>I — Freeze-out:</strong> düşük sıcaklıkta katkıların önemli bölümü iyonlaşmamıştır; taşıyıcı yoğunluğu sıcaklıkla artar. <strong>II — Extrinsic:</strong> iyonlaşma büyük ölçüde tamamlanmış ve öz taşıyıcılar daha az etkilidir; örneğin kompanzasyonsuz n-tipi Si'de n₀≈N<sub>D</sub> olabilir.",
          "<strong>III — Intrinsic:</strong> yüksek sıcaklıkta termal olarak üretilen elektron–hol çiftleri katkıdan baskın hale gelir; hem elektron hem hol yoğunluğu n<sub>i</sub> mertebesine yaklaşır. Rejim sınırları katkı seviyesine ve kullanılan fiziksel modele bağlıdır. Örneğin 300 K'de, n<sub>i</sub> ≈ 10¹⁰ cm⁻³ ve tam iyonlaşmış, kompanze edilmemiş n-tipi Si için N<sub>D</sub> = 10¹⁵ cm⁻³ olduğunda n₀ ≈ 10¹⁵, p₀ ≈ 10⁵ cm⁻³ olur. Bu sayılar yalnızca uygun ekstrinsik rejime ait yaklaşık örnektir."
        ],
        equation: "I: n₀ ≈ N<sub>D</sub><sup>+</sup> &nbsp;·&nbsp; II: n₀ ≈ N<sub>D</sub> &nbsp;·&nbsp; III: n₀ ≈ p₀ ≈ n<sub>i</sub>",
        key: "Tek bir n≈Nᴅ formülünü bütün sıcaklıklara uygulamak doğru değildir."
      },
      {
        title: "Bağ modelinden katkılı bant modeline geçiş",
        paragraphs: [
          "Bağ modeli, donörlerin neden elektron ve akseptörlerin neden hol sağladığını gösterir. Ancak kısmi iyonlaşmayı nicel belirlemek için katkı enerji seviyesi, Fermi seviyesi ve ilgili doluluk istatistikleri gereklidir.",
          "Sonraki geliştirme aşamasında N<sub>D</sub><sup>+</sup>/N<sub>D</sub>, N<sub>A</sub><sup>−</sup>/N<sub>A</sub> ve Fermi seviyesinin sıcaklık/katkı ile değişimini enerji bant modeli üzerinde incelemek uygundur."
        ],
        key: "Gerçek bir katkılı yarıiletken hesabı yük nötrlüğü ile enerji durumlarının doluluğunu birlikte çözmeyi gerektirir."
      }
    ],
    outcomes: [
      "Uniform katkılama ve seyreltik katkı yaklaşımını açıklarım.",
      "Donör/akseptör iyonlaşmasında oluşan taşıyıcı ve iyon yükünü belirlerim.",
      "Katkı iyonlaşma enerjisi ile bant aralığını karşılaştırırım.",
      "n/p tipi çoğunluk–azınlık taşıyıcılarını ve dengedeki n₀p₀ = nᵢ² bağıntısını yorumlarım.",
      "Nᴅ, Nᴀ, Nᴅ⁺ ve Nᴀ⁻ terimlerini doğru kullanarak yük nötrlüğü kurarım.",
      "Tam iyonlaşma varsayımında kompanzasyon hesabı yaparım.",
      "Freeze-out, extrinsic ve intrinsic sıcaklık rejimlerini ve n₀ ≈ Nᴅ yaklaşımının sınırlarını yorumlarım.",
      "Bağ modelinin kısmi iyonlaşmayı neden tek başına hesaplayamadığını açıklarım.",
      "300 K'de nᵢ ≈ 10¹⁰ cm⁻³ ve tam iyonlaşma varsayımıyla Nᴅ'den çoğunluk elektronları ve azınlık hol yoğunluğunu hesaplarım.",
      "Nᴅ = 10¹⁵ cm⁻³ katkı ile ≈ 5 × 10²² cm⁻³ Si atom yoğunluğundan yaklaşık 20 ppb atom oranını hesaplarım."
    ],
    future: {
      grafikler: ["Üç katkı yoğunluğu için n – 1000/T", "Donör ve akseptör enerji seviyelerinin bant diyagramı"],
      simulasyonlar: ["Nᴅ / Nᴀ / T ile yük nötrlüğü hesabı", "İyonlaşma oranı ve Fermi seviyesi incelemesi"],
      sorular: ["n-tipi / p-tipi taşıyıcı yoğunluğu", "Kompanzasyon ve sıcaklık rejimi problemleri"],
      oyunlar: ["Donör mü akseptör mü?", "Üç rejimi doğru sırala"]
    }
  }
];
