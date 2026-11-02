/* Extended quiz: intrinsic n_i meaning, energy gap, DOS and temperature.
   Loaded after lesson03-questions.js, before activity-engine.js. */
(() => {
  "use strict";
  const course=window.COURSE_ACTIVITIES?.["03"];
  if(!course)throw Error("Lesson 03 question data missing");
  const mk=(topic,correct,q,opts,why)=>({
    topic,correct,q:{tr:q[0],en:q[1]},
    options:opts.map(([tr,en])=>({tr,en})),
    reasons:why.map(([tr,en])=>({tr,en}))
  });
  course.questions.push(
    mk(7,1,["Öz Si'de termal dengede nᵢ = 10¹⁰ cm⁻³ ise n₀ ve p₀ kaçtır?",
            "If nᵢ = 10¹⁰ cm⁻³ in intrinsic Si at equilibrium, what are n₀ and p₀?"],
      [["n₀=10¹⁰, p₀=0 cm⁻³","n₀=10¹⁰, p₀=0 cm⁻³"],
       ["n₀=p₀=10¹⁰ cm⁻³","n₀=p₀=10¹⁰ cm⁻³"],
       ["n₀=p₀=5×10⁹ cm⁻³","n₀=p₀=5×10⁹ cm⁻³"]],
      [["Öz malzemede her üretilen çift elektron ve hol içerir; p₀ sıfır değildir.","Each generated pair contains an electron and a hole; p₀ is not zero."],
       ["Doğru. nᵢ hem serbest elektronun hem de holün ayrı ayrı birim hacimdeki yoğunluğudur.","Correct. nᵢ is the density of electrons and separately of holes per unit volume."],
       ["nᵢ toplamı ikiye bölmek değildir; her iki yoğunluk da nᵢ'ye eşittir.","Do not divide nᵢ by two; each individual density equals nᵢ."]]),
    mk(8,1,["E₉=1,12 eV, T=300 K sabitken E₉ 0,10 eV artırılırsa nᵢ yaklaşık nasıl değişir?",
            "At fixed T=300 K, if E₉ increases from 1.12 eV by 0.10 eV, how does nᵢ change?"],
      [["nᵢ yaklaşık 7 kat artar.","nᵢ increases by about a factor of 7."],
       ["nᵢ yaklaşık 0,145 katına düşer (yaklaşık 7 kat azalır).","nᵢ decreases to about 0.145 of its value (~7-fold lower)."],
       ["nᵢ hiç değişmez.","nᵢ does not change."]],
      [["Büyük bant aralığı termal elektron–hol uyarılmasını zorlaştırır; artırmaz.","A larger gap suppresses thermal excitations; it does not increase them."],
       ["Doğru. Oran exp[−0,10/(2×8,617×10⁻⁵×300)]≈0,145 olur.","Correct. The ratio is exp[−0.10/(2×8.617×10⁻⁵×300)]≈0.145."],
       ["Üstel faktör E₉'ye güçlü biçimde bağlıdır.","The exponential factor depends strongly on the gap."]]),
    mk(8,1,["Nᶜ iki katına, Nᵛ sabit kalırsa nᵢ nasıl değişir?",
            "If Nᶜ doubles while Nᵛ is fixed, what happens to nᵢ?"],
      [["2 kat olur.","It doubles."],
       ["√2 ≈ 1,414 kat olur.","It grows by √2 ≈ 1.414."],
       ["Yarıya düşer.","It falls by half."]],
      [["nᵢ, Nᶜ ile doğrusal değil √Nᶜ ile orantılıdır.","nᵢ depends on √Nᶜ, not linearly on Nᶜ."],
       ["Doğru. √(2 Nᶜ Nᵛ) = √2 √(Nᶜ Nᵛ).","Correct. √(2 Nᶜ Nᵛ) = √2 √(Nᶜ Nᵛ)."],
       ["Durum yoğunluğunun artması, diğerleri sabitse nᵢ'yi azaltmaz.","Increasing the density of states cannot lower nᵢ when all else is fixed."]]),
    mk(7,1,["Katkılama yapılmış yarıiletkende nᵢ ve denge taşıyıcıları için hangisi doğrudur?",
            "Which statement about nᵢ and equilibrium carriers in a doped semiconductor is correct?"],
      [["Katkılama nᵢ'yi her zaman n₀'ya eşitler.","Doping always makes nᵢ equal n₀."],
       ["İdeal dengede n₀p₀=nᵢ²; nᵢ esasen malzeme ve sıcaklık parametresidir.","At ideal equilibrium n₀p₀=nᵢ²; nᵢ mainly depends on material and temperature."],
       ["nᵢ dış ışıkla her zaman iki katına çıkar.","External illumination always doubles nᵢ."]],
      [["Katkılandığında çoğunluk taşıyıcısı nᵢ'den çok farklı olabilir.","In doped material, the majority density can differ greatly from nᵢ."],
       ["Doğru. Kütle etkisi yasası denge ve dejenere olmayan yaklaşımın sınırlarında geçerlidir.","Correct. The mass-action law holds within its equilibrium, nondegenerate assumptions."],
       ["Aydınlatma n,p'yi değiştirebilir; nᵢ, denge malzeme parametresidir.","Illumination changes actual n and p; nᵢ denotes the equilibrium material parameter."]])
  );
})();