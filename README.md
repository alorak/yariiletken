# Yarıiletken Fiziği

Ders 02–06 için Türkçe, responsive, bağımlılıksız bir **tek sayfalık öğrenme arayüzü**.

## Özellikler (ilk aşama)

- Üstten **02 / 03 / 04 / 05 / 06** dersleri arasında geçiş.
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
- `lessons.js` — ders başlıkları, anlatımlar, bağıntılar, kazanımlar ve gelecek etkinlik planları
- `app.js` — ders/sekme geçişi, URL rotası, kazanım ilerlemesi ve tema

Yeni içerik için genellikle yalnızca `lessons.js` düzenlenir. Yeni etkinlik kodları ayrı modüller halinde eklenebilir.

## Sonraki geliştirme sırası

1. **Grafikler:** 04 bant diyagramı, 05 N(E)/f(E,T), 06 n–1000/T; eksen, birim, varsayım ve kaynak belirtimi.
2. **Simülasyonlar:** kontrollerin fiziksel modele bağlanması; sınır değerler ve doğrulama.
3. **Sorular:** her kazanıma bağlı soru bankası; doğru/yanlış yanıt için kısa gerekçe.
4. **Oyunlar:** seviyeli etkinlikler, kavram yanılgılarına geri bildirim ve erişilebilir etkileşimler.

Her yeni aşamada kullanılan formüller ve veri kaynakları açıkça belirtilmeli; arayüzde çalışan model ile yalnızca kavramsal şema ayırt edilmelidir.
