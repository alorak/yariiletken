# Yarıiletken Fiziği

Ders 02–06 için Türkçe, responsive, bağımlılıksız bir **tek sayfalık öğrenme arayüzü**.

## Özellikler (ilk aşama)

- Navbar üzerinden dersler arasında **yalnızca ders adlarıyla** geçiş; mobilde açılır liste.
- Sağ üstte **TR / EN** dil anahtarı: arayüz, 34 konu anlatımı, 36 kazanım, formül açıklamaları ve planlanan etkinlikler iki dilde. Varsayılan Türkçe; seçim tarayıcıda saklanır.
- İçerik sekmelerinde yatay kaydırma mobilde kullanılabilir, ancak scrollbar gösterilmez.
- Her ders için altta **Konu Anlatımı, Grafikler, Simülasyonlar, Sorular, Oyunlar** sekmeleri.
- Beş ders için **34 açıklamalı konu başlığı** ve **36 ölçülebilir öğrenme kazanımı**.
- Konu içi hızlı gezinme, ana bağıntılar ve kısa “ana fikir” kutuları.
- Kazanım işaretleme ve tamamlanma göstergesi (yalnızca tarayıcıda `localStorage`).
- Açık/koyu tema, telefon/tablet/masaüstü uyumu, erişilebilir klavye sekmeleri.
- URL hash ile doğrudan ders/sekme bağlantısı (ör. `#ders-05/anlatim`).
- Harici kütüphane, derleme, API veya izleme gerektirmez.

**Önemli:** Grafikler, simülasyonlar, sorular ve oyunlar henüz **uygulanmış değildir**. Bu sekmelerde, seçili derse özel bir sonraki aşama planı görünür. Çalışmayan görseller, sahte grafikler veya sözde sınav sonuçları gösterilmez. Kazanım işaretlemeleri kişisel öz değerlendirmedir; sınav başarısı sayılmaz.

## Ders haritası

| Ders | Konu | Başlık | Kazanım |
|---|---|---:|---:|
| 02 | Yarıiletken malzemeler, kristal yapısı, termal denge | 6 | 6 |
| 03 | Elektron, hol, üretim/rekombinasyon, bağ modelinin sınırları | 6 | 7 |
| 04 | Kuantum durumları, bant teorisi ve etkin kütleye giriş | 7 | 7 |
| 05 | Durum yoğunluğu, Fermi–Dirac, Boltzmann, nᵢ ve kütle etkisi | 7 | 8 |
| 06 | Donör/akseptör, yük nötrlüğü, kompanzasyon ve sıcaklık rejimleri | 8 | 8 |

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
| **03 · Elektron ve Hol** | Tek ömürlü taşıyıcı sönümü, sonlu üretim darbesi yanıtı | 1B hol-hareketi benzetmesi, elektron–hol çifti üretimi / yeniden birleşme | 8 soruluk açıklamalı test |

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
