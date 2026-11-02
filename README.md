# Yarıiletken Fiziği

Ders 02–06 için Türkçe, responsive, bağımlılıksız bir **tek sayfalık öğrenme arayüzü**.

## Özellikler (ilk aşama)

- Navbar üzerinden dersler arasında **yalnızca ders adlarıyla** geçiş; mobilde açılır liste.
- Sağ üstte **TR / EN** dil anahtarı: arayüz, 37 konu anlatımı, 48 kazanım, formül açıklamaları ve planlanan etkinlikler iki dilde. Varsayılan Türkçe; seçim tarayıcıda saklanır.
- İçerik sekmelerinde yatay kaydırma mobilde kullanılabilir, ancak scrollbar gösterilmez.
- Her ders için altta **Konu Anlatımı, Grafikler, Simülasyonlar, Sorular, Oyunlar** sekmeleri.
- Beş ders için **37 açıklamalı konu başlığı** ve **48 ölçülebilir öğrenme kazanımı**.
- Konu içi hızlı gezinme, ana bağıntılar ve kısa “ana fikir” kutuları.
- Kazanım işaretleme ve tamamlanma göstergesi (yalnızca tarayıcıda `localStorage`).
- Açık/koyu tema, telefon/tablet/masaüstü uyumu, erişilebilir klavye sekmeleri.
- URL hash ile doğrudan ders/sekme bağlantısı (ör. `#ders-05/anlatim`).
- Harici kütüphane, derleme, API veya izleme gerektirmez.

**Güncel durum:** Grafikler, simülasyonlar ve açıklamalı sorular 02–03 bölümlerinde çalışır. 04–06 için bu etkinlikler plan aşamasındadır; Oyunlar henüz uygulanmamıştır. Bu sekmelerde, seçili derse özel bir sonraki aşama planı görünür. Çalışmayan görseller, sahte grafikler veya sözde sınav sonuçları gösterilmez. Kazanım işaretlemeleri kişisel öz değerlendirmedir; sınav başarısı sayılmaz.

## Ders haritası

| Ders | Konu | Başlık | Kazanım |
|---|---|---:|---:|
| 02 | Yarıiletken malzemeler, kristal yapısı, termal denge | 6 | 10 |
| 03 | Elektron, hol, fonon/foton, üretim/rekombinasyon, etkin kütle ve nᵢ | 9 | 13 |
| 04 | Kuantum durumları, bant teorisi ve etkin kütleye giriş | 7 | 7 |
| 05 | Durum yoğunluğu, Fermi–Dirac, Boltzmann, nᵢ ve kütle etkisi | 7 | 8 |
| 06 | Donör/akseptör, yük nötrlüğü, kompanzasyon ve sıcaklık rejimleri | 8 | 10 |

İçerik, ders 02–06 PDF notlarındaki kavramlar temel alınarak **ön koşul sırasına göre yeniden düzenlenmiştir**. Metinler doğrudan ders notlarının tam kopyası değildir. İlgili yaklaşımların geçerlilik sınırları gerektiğinde açıklanır.

## Yerel çalışma

Depoyu klonladıktan sonra doğrudan `index.html` dosyasını açabilir veya yerel HTTP sunucusuyla çalıştırabilirsiniz:

```bash
python3 -m http.server 8000
```

Tarayıcıda `http://localhost:8000` açın. Paket yüklemek veya derlemek gerekmez.

## GitHub Pages

1. PR'ı `main` dalına birleştirin.
2. GitHub deposunda **Settings → Pages** bölümüne gidin.
3. **Build and deployment → Deploy from a branch** seçin.
4. Dalı `main`, dizini `/(root)` olarak ayarlayıp kaydedin.
5. Yayın etkinleşince site `https://alorak.github.io/yariiletken/` adresinden açılabilir.

GitHub Pages yapılandırmasının daha önce etkin olup olmadığı bu kod tarafından değiştirilmez.

## Proje yapısı

- `index.html` — tek sayfa iskeleti ve semantik navigasyon
- `styles.css` — tasarım, responsive düzen, temalar
- `lessons.js` — Türkçe ders başlıkları, anlatımlar, bağıntılar, kazanımlar ve gelecek etkinlik planları
- `lessons.en.js` — aynı derslerin eksiksiz İngilizce karşılıkları; konu ve kazanım sıraları korunur
- `app.js` — ders/sekme geçişi, URL rotası, kazanım ilerlemesi ve tema

Yeni içerik eklerken `lessons.js` ve `lessons.en.js` birlikte güncellenmelidir; dil seçimi yeni bir URL rotası açmaz. Yeni etkinlik kodları ayrı modüller halinde eklenebilir.

## Sonraki geliştirme sırası

1. **Grafikler:** 04 bant diyagramı, 05 N(E)/f(E,T), 06 n–1000/T; eksen, birim, varsayım ve kaynak belirtimi.
2. **Simülasyonlar:** kontrollerin fiziksel modele bağlanması; sınır değerler ve doğrulama.
3. **Sorular:** her kazanıma bağlı soru bankası; doğru/yanlış yanıt için kısa gerekçe.
4. **Oyunlar:** seviyeli etkinlikler, kavram yanılgılarına geri bildirim ve erişilebilir etkileşimler.

Her yeni aşamada kullanılan formüller ve veri kaynakları açıkça belirtilmeli; arayüzde çalışan model ile yalnızca kavramsal şema ayırt edilmelidir.

## Etkileşimli grafikler, simülasyonlar ve sorular: Ders 02–03

İlk iki dersin üç etkinlik sekmesi çalışır durumdadır (TR/EN).

| Ders | Grafikler | Simülasyonlar | Sorular |
|---|---|---|---|
| **02 · Kristal ve Denge** | nᵢ–T (Si/Ge/GaAs), Eᵍ–nᵢ duyarlılığı | 3B tetrahedral Si bağlarının izdüşümü, termal denge / dış uyarımlı kararlı durum | 8 soruluk açıklamalı test |
| **03 · Elektron ve Hol** | Tek ömürlü taşıyıcı sönümü, sonlu üretim darbesi yanıtı | 1B hol-hareketi benzetmesi, elektron–hol çifti üretimi / yeniden birleşme | 15 soruluk açıklamalı test |

### Bilimsel kapsam ve sınırlamalar

- Grafik 02-1, 300 K'deki yaklaşık referans nᵢ değerlerinden ölçeklenir ve **Eᵍ değerini sıcaklık boyunca sabit** tutar. Bu bir eğitim yaklaşımıdır, geniş T aralığı için doğrulanmış tam malzeme modeli değildir.
- Grafik 02-2, bant aralığının etkisini ayırmak için diğer malzeme parametrelerini sabit tutar; Si, Ge ve GaAs arasındaki tüm farkları yalnızca Eᵍ'ye indirgemez.
- Denge/kararlı durum modelinde dış üretim açık olduğunda, net üretim sıfıra yaklaşsa bile örnek **termal dengeye dönüşmüş sayılmaz**.
- 03 grafiklerinde sabit etkin ömürlü tek üstel sönüm ve sabit süreli üretim darbesi yaklaşımları kullanılır.
- Hol hareketi simülasyonu **bir boyutlu bağ benzetmesidir**; atomistik taşıyıcı hareketi çözücüsü değildir.
- Elektron–hol görseli, **hν≥Eᵍ gerekli enerji koşulunu** test eder. Si dolaylı bant aralıklı olduğundan foton soğurulması için momentum/olası fonon koşulları ayrıca önemlidir. Görsel soğurulma olasılığı iddia etmez.
- Sorularda doğru **ve yanlış** her seçenek için TR/EN gerekçe bulunur. Yanıtlar `yariiletken-quiz-v1` anahtarında yerel tarayıcıya kaydedilir; dil değişiminde korunur.

Ders **04–06** için Grafikler, Simülasyonlar ve Sorular sekmeleri henüz plan görünümündedir. Oyunlar sekmesi bu aşamada geliştirilmemiştir.

### Tests

```bash
node --test tests/activity-model.test.mjs
```

Testler dört fizik grafiğinin tutarlılığını, iki dildeki soru açıklamalarını, ders/kazanım kapsamını ve referans değerlerini kontrol eder. Etkileşimli görsel testleri ayrıca gerçek tarayıcıda yapılmalıdır.

## Sabit ders başlığı, sekmeler ve kazanımlar

- Navbar üstte sabit kalır. Ders başlığı ve beş içerik sekmesi, altında tek bir **sticky** alan olarak içerik kaydırılırken görünür.
- Başlığın üzerindeki turkuaz bölüm etiketi kaldırıldı. Ders özeti kaybolmaz; Konu Anlatımı sekmesindeki giriş kartına taşındı.
- **Kazanımlar** paneli masaüstünde içerik yanında sabit kalır. Liste ekrana sığmazsa kendi içinde kaydırılır. Dar ekranlarda metni kaplamaması için panelin görünür yüksekliği sınırlandırılır.
- Paneldeki iki açıklama cümlesi kaldırıldı; kazanım işaretleme ve ilerleme göstergesi değişmedi.
- Sabit alanların yükseklikleri `ResizeObserver` ile ölçülüp CSS değişkenlerine yazılır. Bu nedenle TR/EN dil değişimi, mobil navbar veya uzun ders başlığı sonrasında sekmeler ve kazanımlar üst üste binmemelidir.
- İlgili yapı testleri: `node --test tests/sticky-layout.test.mjs`. Fizik modeli testleriyle birlikte `node --test tests/*.test.mjs` çalıştırılabilir.

## Ders 02: Slaytlarla içerik eşleştirmesi

Semiconductor Physics *lec02.pdf* sunumunun 5–8, 12 ve 15–16. slaytlarına göre Konu Anlatımı güncellendi:

- **Pure · Intrinsic · Extrinsic (s. 8):** saflık (kusur/safsızlık), öz denge taşıyıcı rejimi (n₀=p₀=nᵢ) ve katkılamanın üç ayrı sınıflandırma sorusu olduğu üçlü görünüm. Aydınlatılmış saf örneğin denge dışında olabileceği notu.
- **Bond model / Two-dimensional representation (s. 15–16):** kare örgü çiziminin 2B öğretim şeması olduğu, kesişim=atom ve çizgi=bağ gösterimi; karşısında gerçek tetrahedral komşuluk. a≈5,43 Å, 8 atomluk geleneksel hücre ve iki fcc alt örgü bilgisi anlatımda korunur.
- **Steady state vs equilibrium (s. 12):** `equilibrium ⊂ steady state` ifadesini ve süreklilik/denge farkını gösteren iç içe görünüm.
- **Majority carriers vs temperature (s. 5–6):** ders 02'de n-tipi/p-tipi taşıyıcıların kısa tanıtımı ve *freeze-out → extrinsic plateau → intrinsic* üçlüsü. Nicel katkı iyonlaşması ve yük nötrlüğü **Ders 06** için bırakılmıştır.

**Bilimsel açıklık:** Sunumun 16. slaytında 1,12 eV ifadesi Si–Si bağ kırılmasıyla bir tutulmuş olsa da uygulama bunu Si'nin *elektronik bant aralığı* olarak ayırır. 2B kare ağın gerçek diamond-kübik kristal açısını temsil etmediği açıkça belirtilir.

Ek görseller `lesson-figures.js` içinde TR/EN olarak tutulur; `app.js` sadece Ders 02'de ilgili konularla birlikte render eder. Konu ve kazanım sayıları değişmediğinden mevcut soru–konu eşleştirmeleri korunur. Regresyon testi: `node --test tests/lesson02-alignment.test.mjs`.

## Ders başlıkları, denge örnekleri, Si birim hücresi ve katkı yoğunluğu

- **Ders 02–06 başlığında tek satır özet:** Kaldırılmış olan bölüm açıklaması sabit ders başlığı altında yeniden görünür; uzun açıklama `text-overflow: ellipsis` ile tek satıra sığar. İçerikte tekrarlanmaması için konu girişindeki genel öğrenme yönergesi geri getirildi.
- **Ders 02 — Termal denge:** `lec02.pdf` 10. slayttaki sıcaklık farkı, aydınlatma ve dış kutuplama örnekleri ayrı görsel kartlarda anlatılır. 11. slayttaki p–n ekleminde dengedeki sürüklenme/difüzyon akımlarının eşit ve zıt olması örneği ve dış kutuplamayla dengenin bozulması gösterilir. `+1000/-1000→0` ve `+1010/-1000→+10` sayıları yalnızca aritmetiği gösteren **temsili** büyüklüklerdir; kaynak slayttaki çelişkili net-akım örneği kopyalanmadı.
- **Ders 02 — Diamond-kübik Si:** `lec02.pdf` 15. slayttaki düzene yakın özgün SVG: solda atomların 3B koordinatlarından çizilen geleneksel kübik hücre ve dört tetrahedral komşunun bağları, sağda [001] yönünde yükseklikleri `z/a = 0, 1/4, 1/2, 3/4` olarak etiketlenmiş izdüşüm. Sağda `a≈5,43 Å`, `8 atom/hücre`, `5×10²² atom/cm³` değer kartları. Bu çizim gerçek kristal koordinatlarını kullanan şematik bilimsel SVG'dir; bir kristalografik hesaplama motoru değildir. Öğretici 2B kare-ağ modeli ayrıca korunur.
- **Ders 06 — Çoğunluk taşıyıcıları ve sıcaklık:** Ders 02'deki `temperature-preview` görseli, Ders 06'nın üç sıcaklık rejimi konusuna taşındı. 300 K, `nᵢ≈10¹⁰ cm⁻³` örneği için `Nᴅ = 10¹⁵/10¹⁶/10¹⁷ cm⁻³`, çoğunluk elektronları `n₀≈Nᴅ` ve azınlık holleri `p₀=nᵢ²/n₀ = 10⁵/10⁴/10³ cm⁻³` tablosu eklendi. `10¹⁵ cm⁻³` katkının yaklaşık `20 ppb` atom oranına karşılık geldiği açıklanıyor. Formüller yalnızca tam iyonlaşmış, kompanze edilmemiş, dejenere olmayan ekstrinsik Si örneği için geçerlidir; freeze-out ve öz rejime genellenmez.
- Tüm yeni anlatım ve şekiller **Türkçe/İngilizce**. Mevcut ders/konu/kazanım sayısı ve 02–03 soru indeksleri değiştirilmedi.

Şekiller `lesson-extras.js` içinde bağımsızdır; `app.js` bunları yalnızca ders içeriğindeki `extraVisual` anahtarlarına göre gösterir. Regresyon için `node --test tests/*.test.mjs` komutunu kullanın.

## Doğrusal öz taşıyıcı grafiği ve güncel kazanımlar

- **02 · Öz taşıyıcı yoğunluğu – sıcaklık:** Y ekseni artık doğrudan `nᵢ (cm⁻³)` gösterir; `log₁₀` dönüşümü uygulanmaz. Si/Ge/GaAs malzeme seçicisi her malzemenin eğrisini **kendi doğrusal ölçeğinde** gösterir. Sıcaklık kontrolü seçilen noktanın çevresinde yaklaşık ±50 K aralığına odaklanır; sağa/sola sınırda 200–500 K aralığına kırpılır. Eksen değerleri bilimsel gösterimde (örn. 2×10¹¹) yazılabilir; bu bir logaritmik eksen değildir.
- Sıcaklığa bağlı nᵢ hesaplarında 300 K referansları ve sabit bant aralığı yaklaşımı değişmedi. Ayrı **bant aralığı duyarlılığı** grafiğinin `log₁₀` gösterimi bu PR kapsamında değiştirilmedi.
- Önceki aşamada 02 ve 06 kazanımları genişletildi; bu PR ile 03'ün yeni anlatımı da eklendi. Güncel toplam **37 konu, 48 kazanım**. Önceki işaretlemelerin indeksleri korunur.
- 02'de Si atom yoğunluğu ile yaklaşık öz taşıyıcı yoğunluğunun fiziksel mertebe farkı da konu anlatımına eklendi. Varsayımlara uygun yaklaşık hesaplar kullanılır; bunlar tam malzeme ölçümü değildir.

Kontrol komutu: `node --test tests/*.test.mjs`.


## Ders 03 — Konu anlatımı, şekiller ve kazanımların tamamlanması

`lec03.pdf` sunumunun şu temaları, konu anlatımına doğrudan yerleştirildi:

- **Generation and recombination.** Valans/iletim bantları arasında üretim ve geri birleşme yönlerini gösteren iki ayrı bant diyagramı.
- **Recombination is not scattering.** Saçılma olayında momentumun değişmesi, yeniden birleşmede elektron–hol çiftinin kaybolması yan yana şemalarla anlatılıyor.
- **The bond model.** Dolu kovalent bağ ve boş bağ/hol temsili, neler açıkladığı ve hesaplayamadıkları.
- **Effective mass.** Örnek Si iletkenlik kütleleri 0.26 m₀ elektron, yaklaşık 0.35–0.37 m₀ hol; parabolik E(k) eğriliği ve DOS kütlesi farkı.
- **How large is nᵢ?** 300 K'de nᵢ ≈ 10¹⁰ cm⁻³ ve atom yoğunluğu ≈ 5×10²² cm⁻³; ≈ 5×10¹² oranı.
- **The model as an equation.** Slaytın nᵢ=N·p^(E/kT) **nitel** modeli ve ln(nᵢ/N)–1/T doğrusu; nicel bant modeli nᵢ=√(NᶜNᵛ)exp(−Eᵍ/2kT) ile açık karşılaştırma.

**Bilimsel sınırlama:** Slaytın “42 parçacık aynı bağda buluşur” anlatısı nicel fizik mekanizması olarak aktarılmaz; `E/kT≈42` yalnızca sezgisel oran olarak açıklanır. 1,1–1,12 eV değeri doğrudan kimyasal Si–Si bağ kopma enerjisiyle özdeşleştirilmez.

Teknik olarak: `lesson03-figures.js` (TR/EN açıklamalı SVG, bağımsız), `lesson03-questions.js` (mevcut 8 soruya eklenen 7 TR/EN soru) ve `tests/lesson03-content.test.mjs` eklendi. 03 için **9 konu, 13 kazanım ve 15 soru** vardır; 02, 04, 05 ve 06 konuları değiştirilmedi. Var olan kazanım ve soru indeksleri korunur. Böylece depoda toplam **37 konu, 48 kazanım** bulunur.

Test komutu: `node --test tests/*.test.mjs`. Canlı tarayıcıda mobil/masaüstü görsel test ayrıca yapılmalıdır.


## Sabit numaralı konu gezgini ve kompakt kazanım başlığı

- **Konu Anlatımı** sekmesinde tüm derslerin üstündeki eski “Temelden ileriye, adım adım” metin kartı kaldırıldı. Yerine dersin **gerçek konu sayısına göre** otomatik oluşturulan, aynı renk ailesindeki **1, 2, 3…** kutulardan oluşan yatay bir gezgin eklendi.
- Gezgin, ders başlığı ve beş sekmenin hemen altında **sticky** kalır. Numara tıklanınca ilgili konuya düzgün ofsetle kaydırılır; ok tuşları, Home/End ve Enter/Space ile klavye üzerinden de kullanılabilir. Okuma sırasında etkin bölüm `aria-current="step"` ve tek renkli vurgu ile belirtilir.
- Küçük ekranlarda satır kırılmaz, yatay kaydırılabilir; scrollbar görünmez. `ResizeObserver` ile yüksekliği ölçülür, sabit kazanımlar paneli ve `scrollIntoView` ofsetleri buna göre ayarlanır.
- Kazanımlar panelinde büyük “HEDEFLER / Kazanımlar” başlığı **tek küçük “KAZANIMLAR”** başlığına dönüştürüldü. İlerleme çizgisi kaldırıldı; **0 / N** sayacı ve kazanım checkbox'ları aynen korunur. Mobilde kazanımların yüksekliği sınırlandırılır.
- Konu verisi, mevcut 02–06 içerikleri, TR/EN, light/dark tema, grafik/simülasyonlar ve ilerleme kaydı değiştirilmedi.

Regresyon kontrolü: `node --test tests/sticky-layout.test.mjs tests/topic-stepper.test.mjs`.


## Ders 03 — Uyarılma koşulları, hol simülasyonu, üretim ve rekombinasyon yolları

- Sıcaklık bölümünden **slayt atfı / dalga girişimi paragrafı** ve **salınan dipol** anlatımı ile görünür görselleri kaldırıldı. Fononların örgü titreşimlerini ifade ettiği kısa ve doğru fiziksel açıklama korundu.
- **E₉(Si, 300 K) ≈ 1,12 eV**, valans bandı üst sınırı ile iletim bandı alt sınırının elektronik enerji farkı olarak açıklanır; kimyasal Si–Si bağını ayırma enerjisi değildir. Işıkla bir elektron–hol çifti oluşturmak için uygun foton enerjisi/izinli geçiş ve dolaylı Si'de momentum koşulları gerekir. 300 K'de eşik foton dalga boyu yaklaşık 1107 nm'dir; yalnız enerji eşiği absorpsiyon garantisi değildir.
- **Elektron–hol çifti nasıl oluşur?** başlığında ışıkla üretim, ısıl üretim, impact ionization ve güçlü alanlarda bantlar arası tünelleme anlatılır. Yeni bant geçişi diyagramı bu koşulları gösterir.
- **Hol gerçekten hareket eder mi?** içine çalışır bir **adım adım/otomatik ilerletilebilir** simülasyon eklendi: sağ/sol komşu elektron hareketi, holün ters yer değiştirmesi, duraklatma ve sıfırlama, TR/EN ve erişilebilir durum metni. Simülasyon 1B kavramsal bir modeldir, gerçek Si Bloch dalga taşınımı değildir; 03 Simülasyonlar sekmesindeki eski simülasyon da korunur.
- **Üretim ve yeniden birleşme** altında üç üretim örneği (fotogeneration, impact ionization, thermal generation) ve üç yeniden birleşme örneği (radiative, SRH, Auger) ayrı açıklamalı kartlarda gösterilir. Enerji nereye gidiyor ve hangi cihazda görülüyor soruları cevaplanır. Bant diyagramında **elektron (−)** ve **hol (+)** işaretlerinin başlangıç/son konumları düzeltildi.
- İlgisiz iki soru ve iki kazanım, elektronik bant aralığı/uyarılma konularıyla değiştirildi; bu iki eski işaretleme ve soru yanıtı, kullanıcıda yanlış öğrenme ilerlemesi gösterilmemesi için bir kereliğine temizlenir. Diğer ilerleme, soru ve kazanım kayıtları korunur.

**Doğrulama**: `node --test tests/*.test.mjs`. 03 konularının sırası ve 15 soru / 13 kazanım sayısı değişmez.

Bilimsel kaynaklar:
- <https://doi.org/10.1063/1.4923379> — kristal Si'de dolaylı bantlar arası optik soğurulmada fonon katılımı.
- <https://optics.ansys.com/hc/en-us/articles/360034919113-Semiconductor-Material-Model-Properties> — termal/ışınımsal/SRH/Auger/impact modelleri.
- <https://www.cambridge.org/core/books/abs/physics-of-semiconductors/generation-and-recombination-processes-in-semiconductors/1C347FC5BB8D656BDF285415C55C8B18> — mekanizmaların fiziksel sınıflandırması.


## Konu gezgini: sol sütuna sabitleme ve kaydırmada örtüşmeyi önleme

Konu Anlatımı üstündeki 1–N kutuları artık `learning-layout > .topics-column > .topic-guide` yapısındadır; sağdaki Kazanımlar paneli ile aynı üst satırı kaplamaz. Konu gezgini sol sütunda kaydırılırken görünür kalır; konular, numaraya tıklanınca sabit navbar, ders başlığı, sekmeler ve konu gezgininin **altında** başlayacak şekilde konumlanır.

- Konu gezgininin sticky üst sınırı, ders sekmelerinin gerçek alt sınırına bağlandı. Aradaki 12 piksel boşluk kaldırıldı; opak arka plan ve üst kenar maskelemesi sayesinde kayan anlatım metni üst bölümde görünmez.
- Sağ kazanımlar kutusunun sticky ofseti artık konu gezgininin yüksekliğine bağlı değildir; masaüstünde bağımsız sağ sütundadır.
- 960 piksel ve altı tek sütun yerleşiminde önce anlatım (sol gezgin dahil), ardından kazanımlar gösterilir; üst üste binen iki sticky panel kullanılmaz.
- Mevcut TR/EN, dark/light, ilerleme işaretleri ve numaralı gezinme davranışları korunur.

Test: `node --test tests/*.test.mjs` (özellikle `topic-stepper` ve `sticky-layout`).


## Ders 03 — Öz taşıyıcı yoğunluğu (nᵢ) matematik, grafikler ve hesaplama laboratuvarı

**Tanım:** Öz yarıiletkenin **termal dengede** birim hacimdeki serbest elektron ve hol yoğunluklarının ortak değeri: `n₀ = p₀ = nᵢ` (cm⁻³). Bu, birim zamanda üretilen çift sayısı veya toplam atom sayısı değildir. İdeal dejenere olmayan denge modelinde katkılanmış malzemede `n₀p₀=nᵢ²` geçerlidir; gerçek nonequilibrium elektron ve hol yoğunlukları `nᵢ`'den farklı olabilir.

03'ün son iki konu anlatımı **tanım, sıcaklık, bant aralığı, Nᶜ/Nᵛ ve model sınırları** ile iki dilde genişletildi. Mevcut 9 konu/13 kazanım sırası korundu. **Grafikler** sekmesinin başına iki bilimsel model grafiği eklendi:

1. **Doğrusal `nᵢ(T)` ekseni (cm⁻³)**: Seçili sıcaklığın ±65 K çevresinde gerçek yoğunluklar; kullanıcı T, E₉(300), Nᶜ(300), Nᵛ(300) ve sabit/Varshni bant aralığı seçeneğini değiştirir. Grafik gerçek yoğunluğu gösterir, `log₁₀(nᵢ)` değil.
2. **Ters sıcaklık analizi**: `ln[nᵢ/√(NᶜNᵛ)] = −E₉(T)/(2kT)` ifadesi `1000/T`'ye karşı gösterilir. Buradaki logaritma **boyutsuz oran üzerinde** alınır; sabit E₉'de tam doğru, Varshni E₉(T)'de eğimli/bozulmuş doğrudur. Bu, ilk grafiğin doğrusal ekseniyle karıştırılmamalıdır.

**Simülasyonlar** sekmesinin başına adım adım hesaplayıcı eklendi:
- `Nᶜ(T)=Nᶜ(300)(T/300)^(3/2)`, `Nᵛ(T)=Nᵛ(300)(T/300)^(3/2)` (parabolik bant ve yaklaşık sabit etkin kütle)
- `nᵢ=√(NᶜNᵛ)exp[−E₉(T)/(2kT)]`, `k=8.617333262145×10⁻⁵ eV/K`.
- Sıcaklık (+20 K), bant aralığı (+0,10 eV), iletim veya valans durum yoğunluğu (×2) karşılaştırma kartları: yeni/başlangıç nᵢ oranları hesaplanır.
- Varsayılan 300 K Si-benzeri parametreler: `Nᶜ=2,8×10¹⁹`, `Nᵛ=1,04×10¹⁹ cm⁻³`, `E₉=1,12 eV` → **yaklaşık `6,68×10⁹ cm⁻³`**. Ders slaytındaki `~10¹⁰ cm⁻³` yuvarlatılmış mertebe değeridir; referans ile birebir çakışma zorlanmadı.
- İsteğe bağlı Si-benzeri Varshni düzeltmesi: `E₉(T)=E₉(300)+α[300²/(300+β) − T²/(T+β)]` (`α=4,73×10⁻⁴ eV/K`, `β=636 K`). E₉ veya DOS kaydırıcılarını değiştirmek **fiziksel olarak kalibre edilmiş farklı gerçek malzeme modeli oluşturmaz**.
- Her iki sekmede yeni iki dilli, responsive, kütüphane gerektirmeyen `intrinsic-density-lab.js` kullanılır. Eski grafikler, simülasyonlar ve kayıtlı sorular korunur.
- 03 **Sorular** sekmesine mevcut soruların **sonuna dört sayısal/pedagojik soru** eklenir (toplam 19). Her doğru/yanlış seçeneğinde açıklama vardır ve önceki yanıt indeksleri değişmez.

Kaynaklar / yaklaşık parametre referansları:
- [University of Michigan — Semiconductor Reference Equations](https://eecs311.eecs.umich.edu/exam1/prep/summary.html)
- [METU — Silicon material parameters table (300 K)](https://etd.lib.metu.edu.tr/upload/1258383/index.pdf)
- [Silicon Varshni parameterization — Si material model](https://www.oghma-nano.com/manual/material-scripts/Inorganic/Si/Si.html)

**Doğrulama**: `node --test tests/*.test.mjs` ve özellikle `tests/intrinsic-density-lab.test.mjs`. Simülasyon 200–500 K ve belirtilen dejenere olmayan yaklaşık bant modeli kapsamında eğitim amaçlıdır; bir deneysel cihaz/tüm yarıiletken malzemeler için tam doğruluk iddiası değildir.


## Navbar'da konu arama ve konu gezgini senkronizasyonu

- Üst menüde tema ve dil seçicilerinin yanında tek renkli **büyüteç düğmesi** yer alır. Düğmeye basınca aşağı açılan erişilebilir metin arama kutusu görünür. `Ctrl+K` / `⌘K` ile açılır, `Esc` ile kapanır. Sonuçlarda klavyeyle yukarı/aşağı gezinme ve Enter ile seçme desteklenir.
- Arama **yalnızca cihazda**, mevcut `lessons.js` / `lessons.en.js` verilerinden yapılır. 02–06 derslerindeki 37 konu başlığı, açıklama paragrafı, temel denklem ve ana fikir taranır. İnternet API'si, sunucuya gönderilen sorgu veya bağımsız arama veritabanı kullanılmaz.
- Türkçe karakterler / aksanlar normalize edilir; örneğin `oz tasiyici` ile `öz taşıyıcı`, `n_i` ile `nᵢ` aranabilir. Dil değişince indeks ve sonuçlar o dile güncellenir; boş aramalarda açıklama, eşleşmeyenlerde sonuç yok mesajı görünür.
- Her sonuçta **ders adı, konu numarası, başlık ve bağlam metni** yer alır. Sonuca basıldığında ilgili `#ders-XX/anlatim` sayfasına gidilir, metindeki eşleşme `<mark>` ile vurgulanır ve doğrudan aranan noktaya kaydırılır.
- Önceden konu numarasına tıklanınca sonraki konu başlığının olması gerekenden aşağıda kalması ve önceki konu numarasının aktif görünmesi, `scrollIntoView` için `scroll-margin` ile `scroll-padding` boşluklarının iki kez hesaplanmasından kaynaklanıyordu. Yeni `scrollToCourseTopic`, gerçek sabit header + ders başlığı/sekmeler + sol konu gezgininin yüksekliklerini ölçer ve **tek bir kaydırma ofseti** kullanır. Son sayfa sınırında son konu numarası seçilir. Gezinme mevcut sağ kazanımlar panelinden bağımsızdır.
- UI varsayılan TR, EN, açık/koyu tema ve mobil yatay konu gezginiyle uyumludur. Arama açıkken dışarı tıklamak paneli kapatır; arama girdisi kullanıcıya aittir ve HTML olarak çalıştırılmaz.

Testler: `node --test tests/course-search.test.mjs tests/topic-stepper.test.mjs tests/sticky-layout.test.mjs`; tam regresyon: `node --test tests/*.test.mjs`.
