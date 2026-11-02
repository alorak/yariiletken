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
          "<strong>Saf (pure)</strong> ifadesi safsızlık ve kusurlarla; <strong>öz (intrinsic)</strong> ifadesi ise katkı atomlarının baskın olmadığı öz taşıyıcı davranışıyla ilgilidir. <strong>Katkılı (extrinsic)</strong> malzemede donör veya akseptörler taşıyıcı dengesini değiştirir. Bu kavramlar aynı ölçütü anlatmaz."
        ],
        key: "Malzemenin kimyasal türü, saflığı ve taşıyıcı davranışı farklı sınıflandırma eksenleridir."
      },
      {
        title: "Silisyum atomu ve dört değerlik elektronu",
        paragraphs: [
          "Silisyumun atom numarası 14'tür. Elektron dizilimi 1s² 2s² 2p⁶ 3s² 3p² biçimindedir. Dış kabuğundaki dört değerlik elektronu, komşu atomlarla bağ yaparken belirleyicidir.",
          "Kristalde her Si atomu dört komşusuyla <strong>kovalent bağ</strong> kurar. İki boyutlu bağ çizimleri bu ilişkiyi öğretmek için yararlıdır; gerçek kristalin uzaydaki geometrisini birebir göstermez."
        ],
        equation: "Si: 1s² 2s² 2p⁶ 3s² 3p²",
        key: "Dört değerlik elektronu, silisyumun tetrahedral bağ düzeninin başlangıç noktasıdır."
      },
      {
        title: "Diamond kristal yapısı",
        paragraphs: [
          "Silisyum, elmas-kübik (<em>diamond cubic</em>) yapıda kristalleşir. Bu düzen, birbirine göre kaydırılmış iki yüzey merkezli kübik (fcc) alt örgü üzerinden açıklanabilir. Her atomun dört en yakın komşusu tetrahedral yönlerde bulunur.",
          "Oda sıcaklığı civarında örgü sabiti yaklaşık <strong>5,43 Å</strong>; geleneksel kübik birim hücrede sekiz Si atomu vardır. Atom yoğunluğu yaklaşık 5 × 10²² cm⁻³'tür."
        ],
        equation: "a ≈ 5,43 Å   ·   N<sub>Si</sub> ≈ 5 × 10²² cm⁻³",
        key: "Kristal geometriyi bilmek, elektronların tek atom yerine periyodik bir ortamda bulunduğunu görmeyi sağlar."
      },
      {
        title: "Termal denge ve ayrıntılı denge ilkesi",
        paragraphs: [
          "<strong>Termal denge</strong>, dış uyarıların bulunmadığı ve makroskopik net akışların oluşmadığı başvuru durumudur. Denge, mikroskobik olayların durması demek değildir: termal üretim ve rekombinasyon sürebilir.",
          "<strong>Ayrıntılı denge (detailed balance)</strong> ilkesinde, dengedeki bir süreç karşıt süreciyle uygun şekilde dengelenir. Elektron–hol üretimi ve yeniden birleşmesi bunun yarıiletkenlerdeki temel örneğidir."
        ],
        key: "Denge, hareketsizlik değil; mikroskobik süreçlerin birbirini dengelemesidir."
      },
      {
        title: "Kararlı durum (steady state) neden denge değildir?",
        paragraphs: [
          "Bir sistemin taşıyıcı yoğunlukları zamana göre değişmiyorsa <strong>kararlı durumdadır</strong>. Ancak sürekli aydınlatılan bir güneş hücresinde ya da sabit gerilim uygulanan bir diyotta akım veya üretim sürebilir; bunlar genel olarak termal denge değildir.",
          "Bu nedenle termal denge, kararlı durumun özel bir örneğidir. Sonraki derslerde hesaplanan denge taşıyıcı yoğunluklarını kullanırken bu ayrımı korumak gerekir."
        ],
        equation: "Termal denge ⊂ Kararlı durum",
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
      "Elmas-kübik yapının temel geometrisini ve örgü sabitini yorumlarım.",
      "Termal denge ile kararlı durumu fiziksel örneklerde ayırt ederim.",
      "Foton, fonon ve elektronun temel dalga-parçacık özelliklerini eşleştiririm."
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
          "İdeal öz yarıiletkenin basit bağ modelinde 0 K'de termal olarak uyarılmış serbest taşıyıcı yoktur. Sıcaklık arttığında örgü atomları denge konumları çevresinde titreşir; örgü titreşimleri fononlarla tanımlanır.",
          "Termal enerji, elektronları bağlı durumlarından iletim durumlarına uyarmaya katkı verebilir. Bu süreç bant modeliyle daha doğru anlatılır; yaklaşık 1,12 eV değeri silisyumun 300 K civarındaki <strong>elektronik bant aralığıdır</strong>, kimyasal bir Si–Si bağının kopma enerjisiyle özdeş değildir."
        ],
        equation: "E<sub>g,Si</sub> ≈ 1,12 eV (300 K civarı)",
        key: "Sıcaklık, enerji durumlarının doluluğunu ve termal taşıyıcı oluşumunu etkiler."
      },
      {
        title: "Elektron–hol çifti nasıl oluşur?",
        paragraphs: [
          "Bir elektron valans bandından iletim bandına uyarıldığında iletimde hareket edebilen bir elektron ve valans bandında boş kalan bir durum oluşur. Bu boş durumu <strong>hol (delik)</strong> olarak adlandırırız.",
          "Öz malzemede bu tür bir üretim olayı elektron ile holü birlikte oluşturur. Denge ve belirgin katkılama olmaması koşullarında elektron ve hol yoğunlukları eşittir."
        ],
        equation: "n<sub>i</sub> = p<sub>i</sub>",
        key: "Termal bantlar arası üretimde elektron ve hol bir çift olarak ortaya çıkar."
      },
      {
        title: "Hol gerçekten hareket eder mi?",
        paragraphs: [
          "Bir valans elektronu komşu boş kuantum durumuna geçtiğinde boşluk ters yönde yer değiştirmiş gibi görünür. Çok sayıdaki valans elektronunun ortak davranışını, <strong>pozitif yüklü ve hareketli bir hol</strong> ile hesaplamak daha kolaydır.",
          "Bu bir fiziksel kuaziparçacık tanımıdır; pozitif bir atom çekirdeğinin kristal boyunca yürüdüğü anlamına gelmez. Hol hareketi elektriksel ölçümlerde gerçek sonuç üretir."
        ],
        key: "Hol, valans bandındaki eksik elektronun hareketini pozitif taşıyıcı olarak temsil eder."
      },
      {
        title: "Üretim ve yeniden birleşme",
        paragraphs: [
          "<strong>Üretim (generation)</strong> yeni elektron–hol çiftleri oluşturur. <strong>Yeniden birleşme (recombination)</strong> ise iletim elektronunun valans bandındaki boşluğu doldurmasıyla serbest bir elektron–hol çiftini ortadan kaldırır.",
          "Isıl, optik ve yüksek enerjili taşıyıcılarla ilişkili süreçler farklı mekanizmalara sahiptir. Silisyum dolaylı bant aralıklı olduğundan ışınımsal birleşme birçok koşulda zayıftır; kusur aracılı birleşme önemli olabilir."
        ],
        key: "Dengede toplam üretim ve yeniden birleşme hızları eşit olabilir; süreçler yine de sürer."
      },
      {
        title: "Saçılma, yeniden birleşme ve yaşam süresi",
        paragraphs: [
          "<strong>Saçılma</strong> bir taşıyıcının momentumunu veya enerji durumunu değiştirebilir, fakat taşıyıcı sayısını zorunlu olarak azaltmaz. <strong>Yeniden birleşmede</strong> bir elektron–hol çifti ortadan kalkar. Bu iki olay birbirine karıştırılmamalıdır.",
          "Taşıyıcının yeniden birleşmeden önce geçirdiği karakteristik zaman, uygun koşullarda <strong>taşıyıcı yaşam süresi</strong> ile ifade edilir. Momentum gevşemesi ve yeniden birleşme farklı zaman ölçekleridir."
        ],
        key: "Mobiliteyi sınırlayan saçılma ile taşıyıcı ömrünü belirleyen rekombinasyon farklı mekanizmalardır."
      },
      {
        title: "Bağ modeli neden tek başına yeterli değil?",
        paragraphs: [
          "Bağ modeli, elektron ve hollerin neden birlikte ortaya çıktığını ve taşıyıcı yoğunluğunun sıcaklıkla neden artabildiğini sezgisel olarak açıklar. Ders notlarındaki çok sayıda düşük enerjili titreşimin katkısını gösteren olasılık benzetmesi de <strong>nitel</strong> bir yaklaşımdır.",
          "Ancak taşıyıcıların hangi enerjilerde bulunabileceğini ve bu durumların doluluk olasılığını nicel olarak hesaplamak için enerji bantlarına, durum yoğunluğuna ve Fermi–Dirac istatistiğine ihtiyaç duyarız."
        ],
        key: "Bir modelin başarılı olması, hem açıklayabildiğini hem de hesaplayamadığını bilmeyi gerektirir."
      }
    ],
    outcomes: [
      "Öz kristalde termal uyarılma ile elektron–hol çifti oluşumunu açıklarım.",
      "Hol hareketini valans elektronlarının hareketiyle ilişkilendiririm.",
      "Öz malzemede nᵢ = pᵢ koşulunun nedenini açıklarım.",
      "Generation, recombination ve scattering süreçlerini karşılaştırırım.",
      "Denge durumunda üretim–rekombinasyonun sürebileceğini açıklarım.",
      "Taşıyıcı yaşam süresi ile momentum saçılmasını ayırırım.",
      "Bağ modelinin nicel taşıyıcı hesabında neden sınırlı olduğunu belirtirim."
    ],
    future: {
      grafikler: ["Üretim ve yeniden birleşme hızlarının zaman grafiği", "Öz taşıyıcı yoğunluğunun sıcaklıkla nitel değişimi"],
      simulasyonlar: ["Elektron–hol üretim ve birleşme animasyonu", "Holün komşu bağlarda ilerlemesi"],
      sorular: ["Elektron–hol çifti ve yük korunumu", "Saçılma mı, rekombinasyon mu?"],
      oyunlar: ["Taşıyıcı hareketini eşleştir", "Süreç sınıflandırma oyunu"]
    }
  },
  {
    id: "04",
    navTitle: "Bant Teorisi",
    title: "Kuantum Durumları ve Enerji Bant Teorisi",
    kicker: "Atomdan katıya",
    description: "Tek bir Si atomunun ayrık enerji seviyelerinden, kristaldeki valans ve iletim bantlarına geç. Bant diyagramını doğru okuyabilmek için gerekli kuantum dilini oluştur.",
    focus: "Bantları çiz",
    topics: [
      {
        title: "İzinli kuantum durumları ve Pauli ilkesi",
        paragraphs: [
          "Yalıtılmış atomdaki elektronlar rastgele enerjiye değil, izinli kuantum durumlarına yerleşir. Pauli dışarlama ilkesi iki özdeş elektronun <strong>aynı kuantum durumunda</strong> olamayacağını söyler; aynı enerjiye sahip fakat farklı kuantum durumları bulunabilir.",
          "Bu yüzden <strong>enerji seviyesi</strong> ile <strong>kuantum durumu</strong> aynı şey değildir. Bir seviyenin çok sayıda durumu barındırabilmesi, bant teorisinde taşıyıcı sayımı için kritiktir."
        ],
        key: "Pauli ilkesi aynı enerjiyi değil, aynı kuantum durumunu paylaşmayı yasaklar."
      },
      {
        title: "Tek Si atomundan N atoma",
        paragraphs: [
          "Bir Si atomunun değerlik elektronları 3s²3p² konfigürasyonundadır. Çok sayıda birbirinden uzak Si atomu düşünülürse her atomda benzer enerji seviyeleri vardır; toplam durum ve elektron sayısı N ile ölçeklenir.",
          "Atomlar birbirine yaklaşınca elektronik durumlar etkileşir. Başlangıçtaki ayrık enerjiler birbirine çok yakın pek çok enerjiye ayrılır; makroskopik kristalde bu sık seviyeler <strong>bant</strong> olarak görünür."
        ],
        equation: "N atom → çok sayıda yakın enerji durumu → bant",
        key: "Bant oluşumu, atomların birbirleriyle kuantum mekaniksel etkileşiminden kaynaklanır."
      },
      {
        title: "Bantlar neden ayrışır?",
        paragraphs: [
          "Atomlar arası etkileşim arttığında aynı başlangıç enerjisinden gelen durumlar farklı enerjilere yayılır. Bağlı osilatörlerin normal modlara ayrılması, bu olayı anlamak için yararlı bir mekanik analojidir.",
          "Atom sayısı arttıkça seviyeler daha sıklaşır; bant genişliğini yalnızca atom sayısı değil, atomlar arası etkileşimin niteliği ve kristal yapısı belirler."
        ],
        key: "Bant genişliği ile tekil enerji seviyelerinin sıklaşması aynı etki değildir."
      },
      {
        title: "Valans bandı, iletim bandı ve yasak aralık",
        paragraphs: [
          "Silisyumda 0 K için ideal basit bant resmi, dolu bir <strong>valans bandı</strong> ve boş bir <strong>iletim bandı</strong> gösterir. Aralarında izinli bant durumlarının bulunmadığı enerji aralığına <strong>yasak enerji aralığı</strong> veya bant aralığı denir.",
          "Metalde kısmen dolu bantlar veya bant örtüşmeleri bulunabilir. Yarıiletken ve yalıtkan ayrımında bant aralığının büyüklüğü ve termal olarak uyarılabilen taşıyıcılar önemlidir."
        ],
        equation: "E<sub>g</sub> = E<sub>c</sub> − E<sub>v</sub>",
        key: "Bant aralığı, iletim bandı alt kenarı ile valans bandı üst kenarı arasındaki enerji farkıdır."
      },
      {
        title: "Bant diyagramındaki enerji işaretleri",
        paragraphs: [
          "<strong>E<sub>c</sub></strong> iletim bandı altını, <strong>E<sub>v</sub></strong> valans bandı üstünü, <strong>E<sub>0</sub></strong> vakum seviyesini temsil eder. <strong>Elektron ilgisi (χ)</strong>, vakum seviyesi ile iletim bandı kenarı arasındaki enerji farkıdır.",
          "Silisyum için 300 K civarında E<sub>g</sub> yaklaşık 1,12 eV ve χ yaklaşık 4,05 eV alınabilir. E<sub>g</sub> ile χ farklı fiziksel niceliklerdir; enerji ekseninde yerlerini karıştırmamak gerekir."
        ],
        equation: "E<sub>g</sub> = E<sub>c</sub> − E<sub>v</sub> &nbsp;·&nbsp; χ = E<sub>0</sub> − E<sub>c</sub>",
        key: "Vakum seviyesi, iletim bandı ve valans bandı arasındaki farkların her birinin ayrı anlamı vardır."
      },
      {
        title: "Bağ modeli olaylarını bantlarda gösterme",
        paragraphs: [
          "Bir elektron valans bandından iletim bandına uyarıldığında üst bantta elektron, alt bantta hol oluşur. Yeniden birleşmede elektron daha düşük enerjiye döner ve holü doldurur.",
          "Böylece 03. dersteki bağ modeli, bant diyagramında enerji değişimi olarak yeniden okunabilir. Bu anlatım kimyasal bağ kırılmasını doğrudan bant aralığıyla özdeşleştirmeden yapılmalıdır."
        ],
        key: "Aynı elektron–hol olayı, bağ modelinde yerel hareket; bant modelinde kuantum durumları arası geçiştir."
      },
      {
        title: "Bant eğriliği ve etkin kütleye giriş",
        paragraphs: [
          "Elektronun kristal içindeki dış kuvvete verdiği tepki, boşluktaki serbest elektronla aynı değildir. <strong>Etkin kütle</strong>, bant yapısının bu tepkiye etkisini pratik biçimde ifade eder.",
          "Basit bir bant ekstremumu yakınında etkin kütle, E(k) eğriliğiyle bağlantılıdır. İletkenlik etkin kütlesi ile durum yoğunluğu etkin kütlesi aynı amaçla kullanılmaz; sayısal hesaplarda bu ayrım 05. derste açılır."
        ],
        equation: "m* ≈ ℏ² / (d²E/dk²)  (tek boyutlu, parabolik bant)",
        key: "Etkin kütle atomun gerçek kütlesi değil, kristaldeki enerji-momentum ilişkisine ait bir parametredir."
      }
    ],
    outcomes: [
      "Enerji seviyesi ile kuantum durumunun farkını açıklarım.",
      "Pauli ilkesini enerji durumlarının doluluğuna uygularım.",
      "N atomun etkileşmesiyle bant oluşumunu açıklarım.",
      "Valans, iletim ve yasak bant aralığını diyagramda gösteririm.",
      "E₀, Eᶜ, Eᵛ, Eᵍ ve χ terimlerini doğru eşleştiririm.",
      "Elektron–hol üretimi ve birleşmesini bant diyagramında açıklarım.",
      "Bant eğriliği ile etkin kütle arasındaki ilişkiyi nitel olarak yorumlarım."
    ],
    future: {
      grafikler: ["Atomik seviyelerden bant oluşumuna geçiş", "Gerçek ölçekle Si enerji bant diyagramı"],
      simulasyonlar: ["Atomlar arası mesafe ve bant ayrışması", "Valans–iletim bandı uyarılma animasyonu"],
      sorular: ["Pauli ilkesi ve durum sayımı", "Eᶜ, Eᵛ, Eᵍ, χ diyagram soruları"],
      oyunlar: ["Bant diyagramını tamamla", "Metal–yarıiletken–yalıtkan karşılaştırması"]
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
        paragraphs: [
          "<strong>I — Freeze-out:</strong> düşük sıcaklıkta katkıların önemli bölümü iyonlaşmamıştır; taşıyıcı yoğunluğu sıcaklıkla artar. <strong>II — Extrinsic:</strong> iyonlaşma büyük ölçüde tamamlanmış ve öz taşıyıcılar daha az etkilidir; örneğin kompanzasyonsuz n-tipi Si'de n₀≈N<sub>D</sub> olabilir.",
          "<strong>III — Intrinsic:</strong> yüksek sıcaklıkta termal olarak üretilen elektron–hol çiftleri katkıdan baskın hale gelir; hem elektron hem hol yoğunluğu n<sub>i</sub> mertebesine yaklaşır. Rejim sınırları katkı seviyesine ve kullanılan fiziksel modele bağlıdır."
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
      "Çoğunluk ve azınlık taşıyıcılarını ayırt ederim.",
      "Nᴅ, Nᴀ, Nᴅ⁺ ve Nᴀ⁻ terimlerini doğru kullanarak yük nötrlüğü kurarım.",
      "Tam iyonlaşma varsayımında kompanzasyon hesabı yaparım.",
      "Freeze-out, extrinsic ve intrinsic rejimlerini sıcaklık grafiğinde tanırım.",
      "Bağ modelinin kısmi iyonlaşmayı neden tek başına hesaplayamadığını açıklarım."
    ],
    future: {
      grafikler: ["Üç katkı yoğunluğu için n – 1000/T", "Donör ve akseptör enerji seviyelerinin bant diyagramı"],
      simulasyonlar: ["Nᴅ / Nᴀ / T ile yük nötrlüğü hesabı", "İyonlaşma oranı ve Fermi seviyesi incelemesi"],
      sorular: ["n-tipi / p-tipi taşıyıcı yoğunluğu", "Kompanzasyon ve sıcaklık rejimi problemleri"],
      oyunlar: ["Donör mü akseptör mü?", "Üç rejimi doğru sırala"]
    }
  }
];
