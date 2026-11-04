/* Lecture 07: 20 formative questions, two per topic; the existing
 * CourseActivity quiz renders one numbered step per question with feedback.
 */
(() => {
"use strict";
const src=window.COURSE_ACTIVITIES;
if(!src)throw Error("07 quiz needs activities.js");
const q=(topic,correct,title,options,reasons)=>({
 topic,correct,q:{tr:title[0],en:title[1]},
 options:options.map(o=>({tr:o[0],en:o[1]})),
 reasons:reasons.map(o=>({tr:o[0],en:o[1]}))
});
const questions=[
 q(0,1,["Katkılama sonrası hangisi değişmez?","What stays unchanged after doping?"],
 [["Her malzemede E_F tam orta banttadır.","E_F is always midgap."],["İzinli bant durumları × doluluk ilkesinin kullanılması.","Using available states times occupancy."],["Tüm katkı seviyeleri iletim bandına girer.","All impurities enter the conduction band."]],
 [["E_F katkıyla kayar.","E_F moves with doping."],["Doğru. DOS ve Fermi istatistiği temel olmaya devam eder.","Correct. DOS and Fermi statistics remain the basis."],["Sığ seviyeler genellikle bant aralığındadır.","Shallow impurity levels generally lie in the gap."]]),
 q(0,2,["Boltzmann bant formülleri için hangi kontrol gerekir?","What is the check for Boltzmann band formulas?"],
 [["Yalnız E_c−E_F≥kT.","Only E_c−E_F≥kT."],["E_F iki banttan birinin içindedir.","E_F lies inside one band."],["E_c−E_F ve E_F−E_v her ikisi de yaklaşık ≥3kT.","Both E_c−E_F and E_F−E_v about ≥3kT."]],
 [["Holler için valans kenarı da kontrol edilir.","The valence edge matters for holes too."],["Bant içine girişte yaklaşım geçersizleşir.","Entering a band invalidates the approximation."],["Doğru; iki taşıyıcı hesabının sınırı farklı bant kenarlarından gelir.","Correct; both carrier populations have a band-edge validity limit."]]),
 q(1,0,["Si:P sığ donör E_D nerededir?","Where is the Si:P shallow donor level E_D?"],
 [["E_c'den yaklaşık 0,045 eV aşağıda.","About 0.045 eV below E_c."],["Valans bandının 1,12 eV altında.","1.12 eV below the valence band."],["E_c üzerinde 0,54 eV.","0.54 eV above E_c."]],
 [["Doğru. Donör elektronunu iletime salmak için küçük enerji gerekir.","Correct. Releasing the donor electron requires little energy."],["Bu enerji konumu yanlıştır.","That is the wrong energy location."],["0,54 eV derin seviyelere ilişkin bir mertebedir.","0.54 eV is a deep-level energy scale."]]),
 q(1,2,["N_D δ(E−E_D) ifadesindeki delta çizgisinin alanı nedir?","What is the area under N_D δ(E−E_D)?"],
 [["Sonsuz taşıyıcı yoğunluğu.","Infinite carrier density."],["N_D eV.","N_D eV."],["N_D (cm⁻³).","N_D (cm⁻³)."]],
 [["Delta, ideal enerji konumudur; fiziksel sonsuz taşıyıcı yoktur.","The delta is an ideal level, not infinite carriers."],["Enerji integrali N_D yoğunluğunu verir.","Integration over energy yields N_D concentration."],["Doğru. N(E) enerji ve hacim başına, entegre alan hacim başınadır.","Correct. DOS is per volume and energy; integrated area is per volume."]]),
 q(2,1,["g=1 seçimi ne ifade eder?","What does choosing g=1 mean?"],
 [["Hiç elektron spini yoktur.","Electron spin does not exist."],["Mikro-durum çokluluğu düzeltmesini öğretici amaçla ihmal ederiz.","We neglect the microscopic multiplicity correction for teaching."],["Donör kesin %100 iyonlaşır.","Donors must be 100% ionized."]],
 [["Spin vardır; yalnız sayım kolaylaştırılır.","Spin exists; only the statistical counting is simplified."],["Doğru. Temel yük aktarımı ve E_F bağıntısı değişmez.","Correct. Basic charge transfer and E_F dependence are unchanged."],["g=1 tam iyonlaşma koşulu değildir.","g=1 is not complete ionization."]]),
 q(2,0,["g=1, x=(E_D−E_F)/kT=3 için N_D⁺/N_D yaklaşık kaçtır?","At g=1 and x=(E_D−E_F)/kT=3, what is N_D⁺/N_D?"],
 [["%95,3","95.3%"],["%50","50%"],["%4,7","4.7%"]],
 [["Doğru: 1/(1+e⁻³)≈0,953.","Correct: 1/(1+e⁻³)≈0.953."],["%50 x=0 için geçerlidir.","50% occurs at x=0."],["%4,7 iyonlaşmamış kesirdir.","4.7% is the neutral fraction."]]),
 q(3,2,["Yalnız donörlü örnekte dört bilinmeyen hangileridir?","Which are the four unknowns in donor-only equilibrium?"],
 [["n, p, E_g, k.","n, p, E_g, k."],["N_D, N_A, E_g, m₀.","N_D, N_A, E_g, m₀."],["n₀, p₀, N_D⁺, E_F.","n₀, p₀, N_D⁺, E_F."]],
 [["E_g ve k model parametreleridir.","E_g and k are model parameters."],["Toplam katkılar girdilerdir, bilinmeyen değildir.","Total dopants are inputs, not the unknowns here."],["Doğru. Üç doluluk/taşıyıcı bağıntısı ve bir yük dengesi yeterlidir.","Correct. Three occupancy/carrier formulas and one neutrality equation determine them."]]),
 q(3,1,["Yük nötrlüğü grafiğinin kesişiminde ne sağlanır?","What is true at the charge-balance intersection?"],
 [["n₀=0.","n₀=0."],["n₀+N_A⁻=p₀+N_D⁺.","n₀+N_A⁻=p₀+N_D⁺."],["N_D=N_A mutlaka.","N_D=N_A necessarily."]],
 [["Elektronlar çoğunluk taşıyıcı olabilir.","Electrons can be majority carriers."],["Doğru. Pozitif ve negatif yük eşitlenir.","Correct. Positive and negative charges balance."],["Toplam katkı sayıları eşit olmak zorunda değildir.","Total dopants need not be equal."]]),
 q(4,0,["Denge ve Boltzmann durumunda n₀p₀ nedir?","What is n₀p₀ at equilibrium in Boltzmann statistics?"],
 [["nᵢ²","nᵢ²"],["N_D−N_A","N_D−N_A"],["nᵢ","nᵢ"]],
 [["Doğru, E_F çarpımda sadeleşir.","Correct: E_F cancels in the product."],["Net katkı yoğunluğu çarpımla aynı birim taşımaz.","Net doping has different units from the product."],["Birim olarak cm⁻⁶ gerekir.","The product has units cm⁻⁶."]]),
 q(4,2,["Farklı nᵢ referanslarıyla hesap yaparken ne yapılmalı?","How should differing n_i references be handled?"],
 [["En büyük sonucu seç.","Choose the largest result."],["İki referansı rastgele karıştır.","Mix references freely."],["Başta bir tutarlı parametre seti seç, sonucu belirt.","Choose one consistent parameter set and state it."]],
 [["Büyük olmak doğruluk ölçütü değildir.","Larger does not necessarily mean more accurate."],["Farklı değerler azınlık yoğunluğunu kareli olarak etkiler.","The reference affects minority concentration quadratically."],["Doğru. Slayttaki klasik ve güncel ölçüm referansları ayrı tutulur.","Correct. Keep the classical and newer measured references distinct."]]),
 q(5,1,["E_F'yi iletim kenarından hangi bağıntı verir?","Which equation finds E_F from the conduction edge?"],
 [["E_c−E_F=E_g/kT","E_c−E_F=E_g/kT"],["E_c−E_F=kT ln(N_c/n₀)","E_c−E_F=kT ln(N_c/n₀)"],["E_F=0 her örnekte","E_F=0 always"]],
 [["Birimleri enerji değildir.","These units do not give energy."],["Doğru. İletim bandı elektron yoğunluğu formülünün logaritmasıdır.","Correct. Take the logarithm of the conduction electron-density formula."],["E_F doping ve sıcaklığa bağlıdır.","E_F depends on doping and temperature."]]),
 q(5,0,["300 K'de donör katkısı 10× artınca E_F yaklaşık ne kadar yükselir?","At 300 K, how far does E_F rise for 10× donor doping?"],
 [["60 meV, ancak non-degenerate ve tam iyonlaşmada.","60 meV, if nondegenerate and fully ionized."],["1,12 eV her zaman.","Always 1.12 eV."],["0 meV.","0 meV."]],
 [["Doğru: kT ln 10≈0,0595 eV.","Correct: kT ln 10≈0.0595 eV."],["Bu Si bant aralığıdır.","That is silicon's band gap."],["Katkı elektron yoğunluğunu ve Fermi seviyesini değiştirir.","Doping changes electron density and the Fermi level."]]),
 q(6,2,["Freeze-out neden n≈N_D ile hesaplanamaz?","Why does n≈N_D fail in freeze-out?"],
 [["N_D değişkenin birimi eV'dur.","N_D has units eV."],["Tüm donörler zaten iyonlaşır.","All donors are fully ionized."],["N_D⁺/N_D<1 olabilir, bağlı elektronlar kalır.","N_D⁺/N_D can be below one; bound electrons remain."]],
 [["N_D katkı yoğunluğudur, cm⁻³.","N_D is a dopant concentration in cm⁻³."],["Soğukta tam iyonlaşma genellikle geçerli değildir.","Complete ionization often fails in the cold regime."],["Doğru. Fermi seviyesi ve donor doluluğu birlikte bulunur.","Correct. Solve Fermi level and donor occupancy together."]]),
 q(6,0,["Si:P, N_D=10¹⁵ cm⁻³, 77 K için g=1 sonucu yaklaşık nedir?","For Si:P at 10¹⁵ cm⁻³ and 77 K, what is the g=1 fraction?"],
 [["%83","83%"],["%100 kesin","Exactly 100%"],["%5","5%"]],
 [["Doğru. g=2 ile yaklaşık %74'e düşer; düşük T'de g nicel olarak önemlidir.","Correct. g=2 gives about 74%; g matters numerically at low T."],["77 K'de iyonlaşma tamamlanmış kabul edilemez.","Ionization is not complete at 77 K."],["Bu koşulda çoğunluk iyonlaşmıştır.","Most donors are ionized under these conditions."]]),
 q(7,1,["nᵢ(Tᵢ)=N_D noktasında, tam iyonlaşmış donörlü Si'de n/N_D yaklaşık kaçtır?","When n_i(T_i)=N_D with fully ionized donors, what is n/N_D?"],
 [["1,000","1.000"],["1,618","1.618"],["0","0"]],
 [["Azınlık/termal çiftler n'yi plato üstüne çıkarır.","Thermally generated pairs add electrons beyond the plateau."],["Doğru. (1+√5)/2≈1,618 pozitif köktür.","Correct. (1+√5)/2≈1.618 is the positive root."],["Crossover noktasında taşıyıcı sayısı sıfır değildir.","Carrier count is not zero at crossover."]]),
 q(7,2,["Freeze-out Arrhenius eğiminin baskın aktivasyon enerjisi hangisidir?","What sets the dominant freeze-out Arrhenius slope?"],
 [["E_g/k","E_g/k"],["E_ion/k","E_ion/k"],["E_ion/(2k) (yaklaşık)","E_ion/(2k), approximately"]],
 [["Bu daha çok yüksek T öz rejimiyle ilgilidir ve orada da 1/2 vardır.","That corresponds to intrinsic behavior and also carries a 1/2."],["Karekök freeze-out bağıntısı 1/2 çarpanı üretir.","The square-root freeze-out expression produces a factor of 1/2."],["Doğru. ln n ~ −E_ion/(2kT), T çarpanı düzeltilir.","Correct. ln n ~ −E_ion/(2kT), with a temperature-prefactor correction."]]),
 q(8,0,["Tam iyonlaşmış telafili Si'de taşıyıcıları ne belirler?","What sets carriers in fully ionized compensated Si?"],
 [["Net fark N_D−N_A (öz çiftler de dikkate alınır).","Net N_D−N_A plus intrinsic pairs."],["Yalnız toplam N_D+N_A.","Only total N_D+N_A."],["g değerinin sıfır olması.","g must be zero."]],
 [["Doğru. Net fark çoğunluk yönünü, toplam iyonlar saçılmayı etkiler.","Correct. Net difference sets polarity; total charged ions affect scattering."],["Toplam saçılma merkezlerini belirtir, doğrudan net taşıyıcıyı değil.","Total counts scatterers, not net carriers."],["g=0 fiziksel bir istatistiksel seçimi temsil etmez.","g=0 is not a physical degeneracy factor."]]),
 q(8,1,["n-tipine tam kompanzasyonda N_D=N_A ise ne olur?","What happens under perfect compensation N_D=N_A?"],
 [["Hiç yüklü katkı iyonu kalmaz.","No charged dopant ions remain."],["n=p≈nᵢ iken yine çok sayıda iyon olabilir.","n=p≈n_i despite many ionized impurities."],["Her zaman metalik olur.","It always becomes metallic."]],
 [["Yüklü donör ve akseptörler karşılıklı dengelenebilir.","Ionized donors and acceptors can balance each other."],["Doğru. Düşük serbest taşıyıcı, iyonların yok olduğu anlamına gelmez.","Correct. Few free carriers do not imply absence of charged dopants."],["Bu sonuç kompanzasyondan zorunlu çıkmaz.","Metallicity does not follow from compensation."]]),
 q(9,2,["Derin seviyeler neden önemlidir?","Why do deep impurity levels matter?"],
 [["Yalnız sığ katkı gibi serbest taşıyıcı üretirler.","They only act like shallow donors."],["Mutlaka bütün elektronları yok ederler.","They annihilate all electrons."],["Taşıyıcı tuzakları/rekombinasyon ve E_F pinning etkileri olabilir.","They can trap/recombine carriers and pin E_F."]],
 [["Derin seviyeler taşıyıcı yaşam süresini önemli ölçüde etkileyebilir.","Deep levels can strongly affect carrier lifetime."],["Rekombinasyon, tüm elektronların yok edilmesi demek değildir.","Recombination does not eliminate every electron."],["Doğru. Yüksek dirençli GaAs altlıklarında bile kullanılırlar.","Correct. Deep levels can support high-resistivity GaAs substrates."]]),
 q(9,0,["Amfoterik katkı ne demektir?","What is an amphoteric dopant?"],
 [["Yerine veya yük durumuna göre donör ya da akseptör davranabilir.","May be donor or acceptor depending on site or charge state."],["Daima g=1 olan katkıdır.","A dopant that always has g=1."],["Hiç seviye oluşturmayan katkıdır.","A dopant that forms no levels."]],
 [["Doğru. GaAs içinde Si'nin Ga veya As yerine geçmesi rolünü değiştirebilir.","Correct. In GaAs, Si on Ga versus As sites can change its role."],["g istatistiksel ağırlıktır, amfoteriklik tanımı değildir.","g is statistical weight, not amphoteric behavior."],["Amfoterik katkılar yerel seviyeler oluşturur.","Amphoteric dopants do form local levels."]])
];
src["07"]={graphs:[],simulations:[],questions};
})();