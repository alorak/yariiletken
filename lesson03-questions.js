/* Seven bilingual concept checks for the extended Part 3 lecture.
 * Appended after activities.js, before the activity engine initializes. */
(() => {
  "use strict";
  const d=window.COURSE_ACTIVITIES?.["03"];
  if(!d)throw new Error("Lesson 03 activity data must load before lesson03-questions.js");
  const mk=(topic,correct,qTr,qEn,options,reasons)=>({
    topic,correct,q:{tr:qTr,en:qEn},
    options:options.map(([tr,en])=>({tr,en})),
    reasons:reasons.map(([tr,en])=>({tr,en}))
  });
  d.questions.push(
    mk(1,1,
      "Si'de 300 K'de E₉≈1,12 eV neyi ifade eder?",
      "In Si near 300 K, what does E₉≈1.12 eV represent?",
      [["Bir Si–Si kimyasal bağını koparmanın kesin enerjisidir.","It is the exact energy needed to break a Si–Si chemical bond."],
       ["Valans bandı üstü ile iletim bandı altı arasındaki elektronik enerji farkıdır.","It is the electronic energy separation between valence and conduction band edges."],
       ["Her foton Si'de mutlaka soğurulur.","Every photon is necessarily absorbed in silicon."]],
      [["Bağ koparma enerjisi ve elektronik bant aralığı farklı fiziksel niceliklerdir.","Bond dissociation energy and the electronic band gap are different quantities."],
       ["Doğru. Bu bant aralığı uygun uyarılmada elektron–hol çifti oluşturmak için gereken elektronik enerji ölçeğidir.","Correct. This is the electronic energy scale for an allowed excitation creating an electron–hole pair."],
       ["Fotonun soğurulması olası geçişlere ve özellikle Si'de momentum koşullarına bağlıdır.","Photon absorption depends on allowed transitions and momentum conditions, particularly in Si."]]),
    mk(1,1,
      "Si'de ışıkla elektron–hol çifti üretmek için hangisi gereklidir?",
      "What is required for photon-driven electron–hole pair generation in silicon?",
      [["hν<E₉ olması tek başına yeterlidir.","A photon energy hν<E₉ alone suffices."],
       ["Fotonun uygun enerjide soğurulması ve Si'nin dolaylı geçişinde momentumun korunması gerekir.","An allowed photon absorption with sufficient energy and momentum conservation for indirect-gap Si is needed."],
       ["Elektrik alan uygulanırsa bütün fotonlar otomatik soğurulur.","An electric field makes all photons absorb automatically."]],
      [["Bantlar arası tek-foton geçişinde enerji koşulu yaklaşık hν≳E₉'dir.","A one-photon interband transition generally needs photon energy hν≳E₉."],
       ["Doğru. E₉ yaklaşık 1,12 eV (≈1107 nm), fakat Si dolaylı bantlıdır ve fonon yardımı önemli olabilir.","Correct. E₉≈1.12 eV (≈1107 nm), and Si has an indirect gap where phonon assistance can be important."],
       ["Soğurulma seçilim kurallarına, malzemeye ve foton enerjisine bağlıdır.","Absorption depends on selection rules, material and photon energy."]]),
    mk(3,0,
      "Rekombinasyon bant diyagramında neyi ifade eder?",
      "What does recombination represent on a band diagram?",
      [["İletim elektronu valans holünü doldurur, serbest çift azalır.","A conduction electron fills a valence hole, removing a free pair."],
       ["Elektron yalnızca saçılıp yön değiştirir.","An electron merely changes direction due to scattering."],
       ["Sadece elektron üretilir, hol oluşmaz.","Only an electron is created, with no hole."]],
      [["Doğru. Elektron–hol çifti yok olur, enerji başka kanala aktarılır.","Correct. The electron–hole pair is removed and energy transfers to another channel."],
       ["Yalnızca yön değişimi saçılmadır; rekombinasyonda çift azalır.","A change in direction is scattering; recombination removes a pair."],
       ["Elektron ve holün birlikte oluşması üretimdir.","Creating an electron and a hole together is generation."]]),
    mk(5,1,
      "Bağ modelinde hol neden elektrona ters yönde ilerliyor görünür?",
      "Why does a hole appear to move opposite to the electron in the bond model?",
      [["Pozitif bir Si çekirdeği yer değiştirir.","A positive Si nucleus moves to another site."],
       ["Elektronlar boş valans durumlarını doldururken eksiklik ters yönde ilerler.","Electrons fill empty valence states while the vacancy propagates oppositely."],
       ["Kristalde bütün bağlar aynı anda kırılır.","Every bond in the crystal breaks simultaneously."]],
      [["Hol yürüyen bir çekirdek değil eksik elektron durumudur.","A hole is a missing electron state, not a moving nucleus."],
       ["Doğru. Kabarcık benzetmesinde hareket eden elektronlar, izlenen ise boşluktur.","Correct. As in the bubble analogy, electrons move while we track the vacancy."],
       ["Holün taşınımı tüm bağların birlikte kırılmasını gerektirmez.","Hole motion does not require all bonds to break together."]]),
    mk(6,1,
      "Etkin kütle m* neyi temsil eder?",
      "What does effective mass m* represent?",
      [["Elektronun gerçek durgun kütlesi kristalde değişir.","The electron's literal rest mass changes in the crystal."],
       ["Bant eğriliği taşıyıcının kuvvete verdiği tepkiyi etkiler.","Band curvature affects how the carrier responds to force."],
       ["İletkenlik ve durum yoğunluğu kütlesi zorunlu olarak aynıdır.","Conductivity and DOS effective masses must be identical."]],
      [["Etkin kütle malzemenin bant yanıtını modeller; durgun kütleyi değiştirmez.","Effective mass models band response; it does not change rest mass."],
       ["Doğru. Basit parabolik 1B bantta m*=ℏ²/(d²E/dk²).","Correct. For a simple 1D parabolic band, m*=ℏ²/(d²E/dk²)."],
       ["DOS ve iletkenlik kütleleri farklı nicelikler için tanımlanır.","DOS and conductivity masses serve different purposes."]]),
    mk(7,0,
      "300 K'de 5×10²² atom/cm³ ve nᵢ≈10¹⁰ cm⁻³ için oran nedir?",
      "At 300 K, what ratio follows from 5×10²² atoms/cm³ and nᵢ≈10¹⁰ cm⁻³?",
      [["5×10¹² atom başına bir öz iletim elektronu.","One intrinsic conduction electron per 5×10¹² atoms."],
       ["5×10⁻¹² atom başına bir öz elektron.","One intrinsic electron per 5×10⁻¹² atoms."],
       ["Her atom bir serbest elektron verir.","Every atom supplies one free electron."]],
      [["Doğru. 5×10²²/10¹⁰=5×10¹²; hol yoğunluğu da nᵢ'dir.","Correct. 5×10²²/10¹⁰=5×10¹²; hole density also equals nᵢ."],
       ["Bu ters orandır; istenen atom/taşıyıcı oranıdır.","That is the inverse; the question asks atoms per carrier."],
       ["Öz Si'deki taşıyıcı yoğunluğu atom yoğunluğundan çok daha küçüktür.","Intrinsic Si carrier density is far below atomic density."]]),
    mk(8,0,
      "nᵢ=N·p^(E/kT) nitel modeli hangi grafik ilişkisini verir?",
      "What graph relation follows from the qualitative model nᵢ=N·p^(E/kT)?",
      [["p sabitse ln(nᵢ/N) ve 1/T doğrusal ilişki gösterebilir.","With fixed p, ln(nᵢ/N) is linear in 1/T."],
       ["nᵢ sıcaklıktan bağımsız olur.","nᵢ becomes independent of temperature."],
       ["Model p değerini ilk ilkelerden tam hesaplar.","The model derives p exactly from first principles."]],
      [["Doğru. ln(nᵢ/N)=(E ln p/k)·(1/T); p yine de modelden çıkmaz.","Correct. ln(nᵢ/N)=(E ln p/k)·(1/T); p is not derived."],
       ["E/kT sıcaklığa bağlıdır, bu yüzden nᵢ değişir.","E/kT depends on temperature, so nᵢ changes."],
       ["Modelin sınırlaması p'yi hesaplayamamasıdır.","The model cannot calculate p from first principles."]])
  );
  // Reset only answers to the two replaced concept questions (indices 8 and 9).
  try {
    const migrationKey="yariiletken-lesson03-questions-v2";
    if(!localStorage.getItem(migrationKey)){
      const state=JSON.parse(localStorage.getItem("yariiletken-quiz-v1")||"{}");
      if(state&&typeof state==="object"&&state["03"]){
        delete state["03"]["8"];delete state["03"]["9"];
        localStorage.setItem("yariiletken-quiz-v1",JSON.stringify(state));
      }
      localStorage.setItem(migrationKey,"1");
    }
  } catch { /* localStorage can be disabled */ }
})();