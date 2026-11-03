/*
 * English translations for Semiconductor Physics lessons 02–06.
 * Topics correspond by ordinal position to lessons.js; scientific equations are
 * shared unless a language-specific label needs translation.
 * Keep the Turkish source authoritative and the learning objectives aligned.
 */
(() => {
  "use strict";
  const en = {
    "02": {
      navTitle: "Crystal & Equilibrium",
      title: "Semiconductor Materials, Crystal Structure and Thermal Equilibrium",
      kicker: "Physical foundations",
      description: "Start with atoms to understand semiconductors. Build a foundation for later calculations through silicon's crystal structure, covalent bonds and thermal equilibrium.",
      focus: "Explore the material",
      topics: [
        [
          "How do we classify semiconductors?",
          "Semiconductors may be <strong>elemental</strong> (Si, Ge) or <strong>compound</strong> (GaAs, InP), depending on the elements making up the crystal. The electronic properties of the material's interior (<em>bulk</em>) and its <em>interface</em> need not be identical.",
          "<strong>Pure</strong> is a structural criterion: in the ideal case the crystal contains no foreign atoms or defects. In the <strong>intrinsic</strong> carrier regime at thermal equilibrium, n₀ = p₀ = nᵢ; material purity and carrier balance answer different questions. An <strong>extrinsic</strong> semiconductor contains donors or acceptors, so one carrier type usually dominates. At sufficiently high temperature even a doped crystal may approach the intrinsic regime. A pure crystal under illumination can remain pure without remaining in thermal equilibrium.",
          "Composition, purity and carrier behavior are distinct ways to classify a material."
        ],
        [
          "The silicon atom and its four valence electrons",
          "Silicon has atomic number 14 and electron configuration 1s² 2s² 2p⁶ 3s² 3p². Its four outer-shell valence electrons determine how it bonds with neighboring atoms.",
          "In the crystal, each Si atom forms <strong>covalent bonds</strong> with four nearest neighbors. The lecture's <em>Two-dimensional representation</em> shows atoms at intersections and bonds as line segments. Four neighbors in a flat drawing do not mean actual silicon bonds meet at 90° in one plane: the real geometry is tetrahedral (about 109.47°).",
          "Four valence electrons are the starting point for silicon's tetrahedral bonding."
        ],
        [
          "Diamond-cubic crystal structure",
          "Silicon crystallizes in the <em>diamond cubic</em> structure. Think of two face-centered cubic sublattices with an offset (a/4, a/4, a/4) along the [111] direction. Each atom has four nearest neighbors in tetrahedral directions. The lecture's unit-cell drawing and height-annotated projection are distinct from the flat bond-model cartoon.",
          "Near room temperature the lattice constant is approximately <strong>5.43 Å</strong>, with eight Si atoms in the conventional cubic unit cell. The atomic concentration is roughly 5 × 10²² cm⁻³. In intrinsic Si near 300 K, nᵢ is of order 10¹⁰ cm⁻³: the free-electron density is about 5 × 10¹² times smaller than the atomic density. Not every atom supplies a free carrier.",
          "Crystal geometry shows why electrons occupy a periodic environment instead of isolated atoms."
        ],
        [
          "Thermal equilibrium and detailed balance",
          "<strong>Thermal equilibrium</strong> is the reference state without external driving forces or macroscopic net flows. Equilibrium does not mean that microscopic activity stops: thermal generation and recombination may continue. A temperature difference across a sample, sustained illumination, or a current driven by an applied voltage can take the sample out of equilibrium.",
          "Under <strong>detailed balance</strong>, a process is balanced by its reverse process at equilibrium. Electron–hole generation and recombination provide an important semiconductor example. In an equilibrium p–n junction, the opposing drift and diffusion current components cancel. A small applied bias breaks that balance and produces diode current.",
          "Equilibrium means balanced microscopic processes, not the absence of motion."
        ],
        [
          "Why is steady state not necessarily equilibrium?",
          "A system is in <strong>steady state</strong> when its observable carrier populations do not change with time. Yet a continuously illuminated solar cell or a diode under constant bias can sustain current and generation without being in thermal equilibrium.",
          "Therefore <strong>every thermal equilibrium state is a steady state, but not every steady state is in thermal equilibrium</strong>: equilibrium ⊂ steady state. A diode under constant bias or a steadily illuminated solar cell may show time-independent readings while external driving and net flows persist.",
          "Time independence does not imply zero net flow."
        ],
        [
          "Introduction to waves, photons and phonons",
          "A photon is a quantum of the electromagnetic field; a phonon is a quantized excitation of crystal vibrations. Electrons also have de Broglie wave properties. Depending on the problem, wave or particle descriptions may be more useful.",
          "Photon energy follows E = hν, and the momentum–wavelength relation is p = h/λ. Phonons help us understand temperature and lattice vibrations; detailed carrier interactions follow in Lesson 03.",
          "Photons, phonons and electrons represent different physical entities or excitations."
        ]
      ],
      outcomes: [
        "I can classify Si, Ge and GaAs as elemental or compound semiconductors.",
        "I can distinguish pure, intrinsic and extrinsic semiconductor concepts.",
        "I can explain silicon's four valence electrons and covalent-bond arrangement.",
        "I can interpret a ≈ 5.43 Å, eight atoms per conventional cell and tetrahedral coordination in 3D Si.",
        "I can distinguish thermal equilibrium from steady state and interpret temperature-gradient, illumination and applied-bias examples.",
        "I can match photons, phonons and electrons to their wave–particle properties.",
        "I can distinguish a 2D bonding cartoon from real tetrahedral Si and interpret atomic heights in a [001] projection.",
        "I can compare silicon's atomic density (≈ 5 × 10²² cm⁻³) with nᵢ ≈ 10¹⁰ cm⁻³ by calculating their ratio.",
        "I can explain why opposing drift and diffusion currents cancel in an equilibrium p–n junction.",
        "I can read the actual nᵢ values (cm⁻³) and temperature dependence from a linear nᵢ–T graph."
      ],
      future: {
        grafikler: ["3D schematic of the silicon crystal lattice", "Thermal equilibrium versus steady state"],
        simulasyonlar: ["Interactive tetrahedral Si bonding", "Generation–recombination rate balance"],
        sorular: ["Material classification and concept distinctions", "Equilibrium versus steady-state scenarios"],
        oyunlar: ["Complete the crystal structure", "Match the correct concept"]
      }
    },
    "03": {
      navTitle: "Electrons & Holes",
      title: "Electrons, Holes and Carrier Dynamics",
      kicker: "Microscopic physics",
      description: "Understand how thermal energy creates carriers in a crystal, why holes behave like positive charges, and how generation and recombination are explained by the bond model.",
      focus: "Explain carriers",
      topics: [
        [
          "What changes in a crystal as temperature rises?",
          "In the ideal intrinsic band picture there are no thermally generated electron–hole pairs at 0 K. Raising temperature increases the thermal excitation of lattice vibrations (phonons) and the probability of exciting electronic states. Energy is not shared equally among individual electrons; carrier concentrations depend on allowed states and statistical occupations.",
          "Near 300 K, <strong>E<sub>g</sub> ≈ 1.12 eV</strong> is the <strong>energy separation</strong> between the highest valence-band states and the lowest conduction-band states in silicon. An appropriate electronic excitation across that gap can produce a conduction electron and valence hole. The chemical energy associated with breaking an atomic Si–Si covalent bond is a different quantity: removing an atomic bond and exciting an electronic carrier are not the same physical event.",
          "Temperature influences the occupancy of electronic states and the creation of thermal carriers."
        ],
        [
          "How is an electron–hole pair created?",
          "When an electron is excited from the valence band into the conduction band, a mobile conduction electron and an empty valence-band state remain. The empty state is called a <strong>hole</strong>.",
          "<strong>Under what conditions can the transition occur?</strong> (1) <strong>Absorbed light</strong> can promote a valence electron if photon energy is approximately hν ≥ E<sub>g</sub>; indirect-gap Si also needs crystal momentum conservation, often involving a phonon. (2) <strong>Thermal generation</strong> is possible because the finite-temperature energy distribution allows interband excitations. (3) In a <strong>high electric field</strong>, an energetic carrier can generate another pair by impact ionization. (4) Very strong fields may also cause band-to-band tunneling. These are distinct mechanisms; hν ≥ E<sub>g</sub> alone never guarantees absorption.",
          "At 300 K, E<sub>g</sub> ≈ 1.12 eV corresponds to a photon threshold wavelength of about <strong>λ ≈ 1107 nm</strong> (E = hc/λ). Shorter wavelengths have higher photon energy, but actual absorption depends on wavelength, material and thickness. Pair generation creates one electron and one hole; at intrinsic thermal equilibrium n<sub>0</sub> = p<sub>0</sub> = n<sub>i</sub>.",
          "Thermal interband generation creates an electron and a hole as a pair."
        ],
        [
          "Does a hole really move?",
          "When a valence electron moves into a neighboring empty quantum state, that vacancy appears to move in the opposite direction. Treating the collective motion of many valence electrons as a <strong>mobile positively charged hole</strong> makes calculations simpler.",
          "A hole is a measurable quasiparticle description, not a positively charged nucleus moving through the crystal. In the <strong>bubble analogy</strong>, liquid moves one way while the bubble appears to move the other: only electrons actually change their states, while tracking the few holes simplifies the calculation. Hall measurements reveal their electrical response.",
          "A hole represents the motion of a missing valence electron as a positive carrier."
        ],
        [
          "Generation and recombination",
          "<strong>Generation</strong> creates new electron–hole pairs. <strong>Recombination</strong> occurs when a conduction electron fills a valence-band vacancy, eliminating a free electron–hole pair.",
          "<strong>Generation examples:</strong> <strong>photogeneration</strong> in solar cells or photodiodes when light is absorbed, <strong>impact ionization</strong> when energetic carriers create additional pairs in avalanche photodiodes, and <strong>thermal generation</strong> due to temperature. <strong>Recombination examples:</strong> in an LED energy may leave as a photon (<strong>radiative</strong>); defects supply intermediate states (<strong>SRH</strong>); in an <strong>Auger</strong> event energy is transferred to a third electron or hole. Silicon's indirect gap often makes radiative recombination weak.",
          "At thermal equilibrium the total generation and recombination rates balance (<strong>G = R</strong>), while both processes remain active. A time-independent illuminated steady state is not necessarily thermal equilibrium. Mechanism rates depend on material, temperature, defects and carrier concentrations.",
          "At equilibrium, overall generation and recombination rates can be equal even though both processes continue."
        ],
        [
          "Scattering, recombination and carrier lifetime",
          "<strong>Scattering</strong> can change a carrier's momentum or energy state without necessarily reducing the carrier population. <strong>Recombination</strong>, by contrast, removes an electron–hole pair. The two processes should not be confused.",
          "The characteristic time before a carrier recombines can, under suitable conditions, be represented by a <strong>carrier lifetime</strong>. Momentum relaxation and recombination have different time scales.",
          "Mobility-limiting scattering and lifetime-limiting recombination are different mechanisms."
        ],
        [
          "Why is the bond model insufficient on its own?",
          "<strong>What is the bond model?</strong> Silicon has four valence electrons and forms covalent bonds with four nearest neighbors. In a flat teaching cartoon, filled bonds represent the ideal low-temperature valence states. When an electron is excited to a conduction state, an empty valence state (hole) remains. Neighboring bound electrons can refill the vacancy, so the hole appears to propagate in the opposite direction.",
          "<strong>What can it explain?</strong> Pair generation, nᵢ=pᵢ at intrinsic equilibrium, low carrier density, and a steep rise with temperature. <strong>Why is it insufficient?</strong> The picture of many small contributions converging on one bond is a qualitative analogy, not a literal universal mechanism. To compute density of states, occupation probabilities, effective mass and accurate nᵢ, we require band theory and Fermi–Dirac statistics.",
          "A useful model must be understood both through what it explains and what it cannot calculate."
        ],
        [
          "What does effective mass describe?",
          "Electrons and holes inside a crystal can respond to an applied force differently from a free electron in vacuum. <strong>Effective mass m*</strong> summarizes the influence of the band structure on the force–acceleration relation. For a simple 1D parabolic band, larger E(k) curvature means smaller m*. The carrier's literal rest mass has not changed.",
          "The lecture gives approximate Si conductivity effective masses of <strong>0.26 m₀</strong> for electrons and <strong>0.35–0.37 m₀</strong> for holes. These are illustrative and depend on the approximation: Si electron valleys are anisotropic and hole bands are multiband. Density-of-states effective mass is a distinct quantity; Lessons 04–05 expand on it.",
          "Effective mass describes how the crystal's band structure changes the carrier's response to an external force.",
          "m* ≈ ℏ² / (d²E/dk²) &nbsp;·&nbsp; (parabolic band, 1D)"
        ],
        [
          "What is intrinsic carrier density nᵢ and how large is it?",
          "The <strong>intrinsic carrier concentration n<sub>i</sub></strong> is the shared number density of <strong>conduction electrons</strong> and <strong>holes</strong> per unit volume in an undoped semiconductor at <strong>thermal equilibrium</strong>: <strong>n<sub>0</sub> = p<sub>0</sub> = n<sub>i</sub></strong>. It has units cm⁻³: it is not a generation rate, an atomic concentration or an excitation probability. For example, n<sub>i</sub>=10¹⁰ cm⁻³ means about 10¹⁰ free electrons and separately 10¹⁰ holes in one cubic centimeter. Charge neutrality holds; the existence of carriers alone does not imply a net electric current.",
          "Silicon near 300 K has about <strong>5 × 10²² atoms/cm³</strong> and <strong>n<sub>i</sub> ≈ 10¹⁰ cm⁻³</strong> as an order-of-magnitude reference: 5×10²²/10¹⁰ ≈ <strong>5×10¹² atoms per conduction electron</strong>. This is not a literal probability of chemical bond dissociation. n<sub>i</sub> depends mainly on <strong>temperature T</strong>, <strong>electronic band gap E<sub>g</sub></strong>, and the <strong>effective densities of states N<sub>c</sub>, N<sub>v</sub></strong>. Under illumination, nonequilibrium n and p need not equal n<sub>i</sub>. In the ideal nondegenerate equilibrium model, doped samples still satisfy n<sub>0</sub>p<sub>0</sub>=n<sub>i</sub>². At 300 K, the thermal energy scale is <strong>kT ≈ 0.0259 eV</strong> and the Si electronic band gap is about <strong>1.12 eV</strong>. E<sub>g</sub>/kT ≈ 43 is a ratio of two energy scales, not a requirement that exactly 43 phonons converge on one bond. A quantitative approximation is <strong>n<sub>i</sub> = √(N<sub>c</sub>N<sub>v</sub>)exp[−E<sub>g</sub>/(2kT)]</strong>. Choosing N<sub>c</sub>(300 K)=2.8×10¹⁹, N<sub>v</sub>(300 K)=1.04×10¹⁹ cm⁻³ and E<sub>g</sub>=1.12 eV gives <strong>≈6.7×10⁹ cm⁻³</strong>; ≈10¹⁰ cm⁻³ is the rounded order-of-magnitude lecture reference. The exact number depends on chosen parameters and models.",
          "Intrinsic concentration means n₀=p₀=nᵢ at equilibrium; its quantitative value depends on T, E₉, Nᶜ and Nᵛ.",
          "nᵢ(300 K) ≈ 10¹⁰ cm⁻³ &nbsp;·&nbsp; N<sub>Si</sub>/nᵢ ≈ 5 × 10¹²"
        ],
        [
          "The bond model as an equation: temperature and nᵢ",
          "The lecture's <em>The model as an equation</em> assumes a probability factor p<1 for each small energy contribution, giving the qualitative model <strong>nᵢ = N · p^(E/kT)</strong>. Taking a logarithm yields <strong>ln(nᵢ/N) = (E ln p/k)·(1/T)</strong>; with fixed p, plotting ln(nᵢ/N) against 1/T gives a straight line. The toy model cannot calculate p from first principles.",
          "For approximately parabolic bands and nondegenerate Boltzmann occupations, <strong>n<sub>i</sub>=√(N<sub>c</sub>N<sub>v</sub>)exp[−E<sub>g</sub>/(2kT)]</strong>. <strong>N<sub>c</sub>(T) and N<sub>v</sub>(T) scale roughly as T<sup>3/2</sup></strong>, while E<sub>g</sub>(T) may vary. The linear n<sub>i</sub>–T plot in Graphs shows the actual number density. A second plot shows <strong>ln[n<sub>i</sub>/√(N<sub>c</sub>N<sub>v</sub>)] = −E<sub>g</sub>/(2kT)</strong> versus 1000/T: a straight line for constant E<sub>g</sub>, with curvature when E<sub>g</sub> changes with T. In Simulations, vary T, E<sub>g</sub>, N<sub>c</sub> and N<sub>v</sub> and see the calculation step by step. See Lesson 05 for the deeper statistical model.",
          "The bond model explains the temperature trend; reliable carrier concentrations require band theory and statistics.",
          "nᵢ = N · p<sup>E/(kT)</sup> (qualitative) &nbsp;·&nbsp; nᵢ = √(N<sub>c</sub>N<sub>v</sub>)e<sup>−E<sub>g</sub>/(2kT)</sup> (band model)"
        ],
      ],
      outcomes: [
        "I can explain thermal generation of an electron–hole pair in an intrinsic crystal.",
        "I can relate hole motion to the motion of valence electrons.",
        "I can explain why nᵢ = pᵢ in an intrinsic material.",
        "I can compare generation, recombination and scattering.",
        "I can explain why generation and recombination can continue at equilibrium.",
        "I can distinguish carrier lifetime from momentum relaxation.",
        "I can explain the limitations of the bond model for quantitative carrier calculations.",
        "I can distinguish the electronic band gap from chemical bond dissociation and explain the meaning of 1.12 eV.",
        "I can distinguish photon absorption, thermal generation and impact ionization as different ways of creating electron–hole pairs.",
        "I can interpret band transition diagrams and compare photogeneration, impact ionization, radiative, SRH and Auger processes.",
        "I can explain electron and hole effective masses and distinguish conductivity from DOS effective mass.",
        "I can define intrinsic concentration as n₀=p₀=nᵢ and explain its atomic-scale ratio and dependence on T, E₉, Nᶜ and Nᵛ.",
        "I can derive the ln(nᵢ/N) vs 1/T trend from the toy model nᵢ=N·p^(E/kT) and contrast it with the band model."
      ],
      future: {
        grafikler: ["Generation and recombination rates over time", "Qualitative temperature dependence of intrinsic carrier density"],
        simulasyonlar: ["Electron–hole generation and recombination animation", "Hole motion across neighboring bonds"],
        sorular: ["Electron–hole pairs and charge conservation", "Scattering or recombination?"],
        oyunlar: ["Match carrier motion", "Classify physical processes"]
      }
    },
    "04": {
      "navTitle": "Band Theory",
      "title": "Quantum States and Energy Band Theory",
      "kicker": "From atoms to solids",
      "description": "Move from the bond model to bands: count states in one Si atom, track N-atom level splitting, and read scaled silicon band-edge energies.",
      "focus": "Read bands",
      "topics": [
        [
          "Why leave the bond model?",
          "The bond picture shows local covalent bonds, electron–hole pair creation and vacancy-like hole motion, but it does not determine <strong>which electron energies are allowed, how many states exist per unit volume, or how likely they are to be occupied</strong>.",
          "It therefore cannot predict quantitative minority carrier populations, the Fermi level, intrinsic carrier concentrations or temperature dependence on its own. Bands describe extended crystal quantum states and their occupations, rather than individual Si–Si chemical bonds.",
          "Band-gap energy E<sub>g</sub> must not be identified with the dissociation energy of a single Si–Si chemical bond. The two models are complementary.",
          "The lecture's bond model succeeds at qualitative trends: two carriers, intrinsic concentration far smaller than atomic density, and a steep thermal rise. It cannot compute the <strong>numeric excitation probability</strong> or precise nᵢ without the energy distribution and occupation model.",
          "The bond picture gives intuition; band theory provides the quantitative state-energy and occupancy framework."
        ],
        [
          "Three principles of the band model",
          "<strong>1 — Allowed quantum states (quantum mechanics):</strong> The crystal Hamiltonian permits certain states. Pauli exclusion belongs here: two electrons cannot occupy the same <em>complete quantum state</em>, but distinct degenerate spin/orbital states can have <strong>the same energy</strong>. 'Lowest states first' refers to the <strong>0 K ground state</strong>.",
          "<strong>2 — Distribution of states over energy N(E) or g(E) (quantum mechanics):</strong> How many spin-resolved states are there between E and E+dE? Volume-normalized DOS has units cm⁻³ eV⁻¹. The lecture's N(E) is not the number N of atoms.",
          "<strong>3 — Equilibrium occupied fraction f(E,T) (statistical mechanics):</strong> Fermi–Dirac statistics gives the probability a state is occupied. At T&gt;0 K the 0-K step picture no longer suffices. Conduction electrons are counted with ∫gᶜ(E)f(E,T)dE and valence holes with ∫gᵛ(E)[1−f(E,T)]dE.",
          "Three principles: allowed states including Pauli; distribution N(E); equilibrium occupied fraction f(E,T)."
        ],
        [
          "One isolated silicon atom: electronic energy states",
          "Silicon has Z=14 and ground-state configuration <strong>1s² 2s² 2p⁶ 3s² 3p²</strong>; four 3s/3p electrons are valence electrons.",
          "The diagram counts spin states, each circle representing one: 1s 2/2, 2s 2/2, 2p 6/6, 3s 2/2 and 3p 2/6. Hund's rule favors two 3p electrons in distinct spatial p orbitals. The diagram simplifies their spin arrangement.",
          "Vertical level spacing is schematic, not to scale; isolated atom levels are not yet crystal bands.",
          "Two of six 3p spin states are occupied, and the total occupied state count is 14."
        ],
        [
          "Bring N silicon atoms together",
          "For N widely separated Si atoms the 3s subshell provides <strong>2N spin states / 2N electrons</strong>, while 3p provides <strong>6N states / 2N electrons</strong>; the valence total is 8N states and 4N electrons.",
          "Approaching atoms cause orbital overlap and quantum coupling. Initially identical levels split into closely spaced energies; valence-derived bands broaden and mix. At equilibrium spacing bonding and antibonding branches become distinct.",
          "Core 1s, 2s and 2p levels remain relatively narrow in this schematic. The actual electronic structure depends on the periodic potential and wave vector k.",
          "While N atoms are <strong>still far apart</strong>, the state/electron counts are 1s: 2N/2N, 2s: 2N/2N, 2p: 6N/6N, 3s: 2N/2N, 3p: <strong>6N/2N</strong>. Partial isolated-atom 3p occupancy alone does not prove a semiconductor gap; band formation depends on coupling.",
          "<strong>Coupled oscillators:</strong> A single k–m oscillator has ω₀=√(k/m). Three masses coupled to nearest neighbors by k<sub>c</sub> have <strong>ω₀=√(k/m)</strong>, <strong>ω₁=√((k+k<sub>c</sub>)/m)</strong>, and <strong>ω₂=√((k+3k<sub>c</sub>)/m)</strong>. A level splitting into many modes is the analogy; mechanical modes are not electron band energies.",
          "<strong>Coupling controls width, N controls density:</strong> Raising k<sub>c</sub>/k spreads frequencies apart. N=20 versus N=3 at fixed coupling adds more closely spaced modes, not a 20-times wider band. In crystals, atomic coupling/interatomic separation mainly control bandwidth, while N controls the number of discrete levels.",
          "State count scales with N, while bandwidth depends on the coupling between atoms."
        ],
        [
          "4N full valence and 4N empty conduction states",
          "In the simplified silicon band model, 3s/3p-derived <strong>8N spin states</strong> separate into a lower group of 4N valence states and an upper group of 4N conduction states.",
          "Four valence electrons per atom give <strong>4N electrons</strong>, filling the 4N lower states at ideal 0 K; the upper 4N states are empty. The forbidden gap separates the allowed bands.",
          "The 4N count refers to this simplified valence-derived band grouping, not all higher bands. Defects may produce localized states inside a real gap.",
          "A <strong>metal</strong> can have a partly occupied band or overlapping bands. A filled band separated from an empty band by a gap gives semiconductor or insulating behavior depending on the gap and conditions. Temperature, impurities and defects also matter.",
          "At ideal 0 K the lower 4N states are full and the upper 4N states are empty."
        ],
        [
          "Band diagram: E₀, Eᶜ, Eᵛ, χ and Eᵍ",
          "A conventional edge diagram displays the vacuum level E<sub>0</sub>, conduction minimum E<sub>c</sub> and valence maximum E<sub>v</sub>. In an ideal bulk crystal the gap between E<sub>c</sub> and E<sub>v</sub> has no allowed extended band states.",
          "<strong>E<sub>g</sub>=E<sub>c</sub>−E<sub>v</sub></strong>, whereas <strong>χ=E<sub>0</sub>−E<sub>c</sub></strong>. Thus E<sub>0</sub>−E<sub>v</sub>=χ+E<sub>g</sub>. Electron affinity is surface-dependent in practice.",
          "This is an energy-axis edge diagram, not a dispersion E(k) plot; silicon's indirect gap cannot be inferred from these horizontal lines.",
          "The horizontal axis in this simple band-edge schematic <strong>has no physical meaning</strong>. Later, spatial band diagrams use position x and dispersion plots use crystal wavevector k. The slide's 'bond strength' analogy for E₉ is not the chemical dissociation energy of one Si–Si bond.",
          "Do not confuse the gap between bands with electron affinity to vacuum."
        ],
        [
          "Silicon at 300 K, drawn to scale",
          "Using common 300 K reference values <strong>E<sub>g</sub>≈1.12 eV</strong> and <strong>χ≈4.05 eV</strong>, and setting E<sub>0</sub>=0, one obtains <strong>E<sub>c</sub>=−4.05 eV</strong> and <strong>E<sub>v</sub>=−5.17 eV</strong>.",
          "The figure makes the <strong>4.05 eV vacuum-to-conduction</strong> and <strong>1.12 eV conduction-to-valence</strong> distances proportional in height. Therefore E<sub>0</sub>−E<sub>v</sub>=5.17 eV. This difference is not the energy of separating an individual Si–Si bond.",
          "The gap varies with temperature. Real electron affinity changes with surface orientation, termination and dipoles. Only the displayed reference edge separations, not the full band widths, are drawn to scale.",
          "The source's scaled Si figure also shows a <strong>valence-band width ≈12 eV</strong>: with E<sub>v</sub>=−5.17 eV its bottom is approximately <strong>E<sub>B</sub>=−17.17 eV</strong>. From valence top to vacuum the separation is <strong>χ+E₉=5.17 eV</strong>. Valence bandwidth (≈12 eV), electronic gap (1.12 eV), and electron affinity (4.05 eV) are distinct approximate quantities.",
          "With E₀=0, the reference edges are Eᶜ=−4.05 eV and Eᵛ=−5.17 eV."
        ],
        [
          "Bond model ↔ band model: complementary pictures",
          "The bond model shows localized covalent bonds: exciting an electron leaves an empty valence bond, and neighboring electron transfers offer a useful picture of hole motion.",
          "In the band model the same pair creation corresponds to an electron occupying a conduction state and a missing electron (hole) in a valence state. Recombination fills that vacancy, without necessarily breaking or restoring a particular isolated chemical bond.",
          "Band theory and statistical occupations are required to calculate n, p, temperature effects, Fermi levels and effective masses; the local bond drawing alone cannot.",
          "Four band events from the lecture: <strong>(a) generation</strong> excites a valence electron into conduction, <strong>(b) recombination</strong> fills the valence vacancy, <strong>(c) kinetic energy</strong> sends a conduction electron upward on the electron-energy axis while a hole gains energy <strong>downward</strong> within the valence band, and <strong>(d) escape</strong> to vacuum needs χ from the conduction edge or <strong>χ+E₉</strong> from the valence top. These are energy differences, not full transition-rate predictions.",
          "Local electron/vacancy pictures correspond to occupied/empty quantum states in the band description."
        ],
        [
          "Band curvature, k and effective mass",
          "An energy-edge diagram gives the positions of band edges, but the full dispersion is <strong>E(k)</strong>. Silicon's conduction minimum and valence maximum occur at different crystal wave vectors, making it an indirect-gap semiconductor.",
          "Near a parabolic one-dimensional band extremum, <strong>m*=ℏ²/(d²E/dk²)</strong> describes the effect of band curvature on the carrier response to force, not a change to the electron's rest mass.",
          "Density-of-states and conductivity effective masses represent distinct concepts; these are developed in Lesson 05.",
          "Transition to the next lesson's <strong>density of states N(E)</strong>: Si's atomic density ≈5×10²² cm⁻³ means <strong>4×5×10²² = 2×10²³ spin-resolved valence states/cm³</strong>. Their distribution across the ≈12 eV width is not uniform; <strong>∫ from E<sub>B</sub> to E<sub>v</sub> N(E)dE≈2×10²³ cm⁻³</strong>. The slide denotes valence bottom E<sub>B</sub> and the illustrated upper conduction boundary E<sub>T</sub>; Fermi–Dirac f(E,T) determines occupancy.",
          "Scaled edge diagrams cannot replace the k-dependent dispersion or describe effective mass by themselves."
        ]
      ],
      "outcomes": [
        "I can explain why the bond model cannot calculate allowed states, minority populations or a Fermi level.",
        "I can explain allowed quantum states, Pauli exclusion and occupation as three band-model principles.",
        "I can count occupied and available spin states for one Si atom with 1s²2s²2p⁶3s²3p².",
        "I can derive 2N/6N states and 2N/2N electrons for 3s and 3p of N Si atoms.",
        "I can describe level splitting, spreading, mixing and the formation of crystal bands.",
        "I can explain the 4N occupied valence and 4N empty conduction states at ideal 0 K.",
        "I can label E₀, Eᶜ, Eᵛ, χ and Eᵍ on a band diagram.",
        "I can calculate 4.05+1.12=5.17 eV and interpret an appropriately scaled Si edge diagram.",
        "I can connect electron–hole creation, hole motion and recombination in bond and band models.",
        "I can distinguish the electronic gap from chemical Si–Si bond dissociation.",
        "I can explain why E(k) and band curvature matter for effective mass.",
        "I can calculate the coupled-oscillator modes and distinguish coupling-controlled bandwidth from N-controlled level density.",
        "I can compare electron and hole energy directions for generation, recombination, kinetic excitation and escape to vacuum.",
        "I can relate the ≈12 eV Si valence-band width and ≈2×10²³ cm⁻³ state count to an integral over N(E)."
      ],
      "future": {
        "grafikler": [
          "Evolution of isolated atomic states into bands",
          "Silicon band edges at realistic energy scale"
        ],
        "simulasyonlar": [
          "Separation-dependent orbital overlap and splitting",
          "Valence-to-conduction electronic excitation"
        ],
        "sorular": [
          "Pauli exclusion, spin state and 4N state counting",
          "Band-edge equations E₀, Eᶜ, Eᵛ, χ and Eᵍ"
        ],
        "oyunlar": [
          "Complete the band diagram",
          "Compare the bond picture with the band picture"
        ]
      }
    },
        "05": {
      navTitle: "Fermi & DOS",
      title: "Density of States, Fermi Statistics and Carrier Calculations",
      kicker: "Quantitative physics",
      description: "Combine the number of available states with their occupancy probabilities. Use this framework to calculate intrinsic carrier concentration and interpret temperature dependence.",
      focus: "Calculate concentrations",
      topics: [
        [
          "What is the density of states N(E)?",
          "The <strong>density of states</strong> gives the number of allowed quantum states per unit volume and per unit energy. The product N(E)dE counts states per unit volume between E and E+dE.",
          "For three-dimensional parabolic band edges, the conduction-band density of states scales as √(E−E<sub>c</sub>), with a corresponding √(E<sub>v</sub>−E) expression for the valence band. Few states occur close to the edges.",
          "N(E) tells us how many states exist, not whether any particular state is occupied."
        ],
        [
          "Fermi–Dirac distribution and the Fermi level",
          "<strong>f(E,T)</strong> is the equilibrium probability that an allowed electron state of energy E is occupied. The Fermi level E<sub>F</sub> is the energy at which f=1/2.",
          "At 0 K, the occupancy approaches a sharp step; with rising temperature, the transition becomes smoother. f(E,T) does not specify whether a state actually exists at E: that is determined by N(E).",
          "The number of available states and their occupancy are separate questions."
        ],
        [
          "Boltzmann approximation and the 3kT rule",
          "If an energy lies sufficiently above E<sub>F</sub>, f(E,T) is small and the Fermi–Dirac expression can be approximated by an exponential. This simplifies calculations for <strong>non-degenerate</strong> semiconductors.",
          "A practical guideline is E−E<sub>F</sub> ≳ 3kT; at 300 K, 3kT is about 0.078 eV. For greater precision or heavy doping, the full Fermi–Dirac description may be necessary.",
          "The validity conditions of an approximation matter just as much as its numerical result."
        ],
        [
          "Number of states × occupancy = carrier density",
          "The volume concentration of conduction electrons is calculated by multiplying the density of available states by their occupation probability and integrating across the conduction band.",
          "For holes, the probability of a valence-band state being <strong>empty</strong> is 1−f. Parabolic-band and Boltzmann approximations reduce the integrals to expressions involving effective densities of states.",
          "Carrier density is the integral of the density of available states times the occupation probability."
        ],
        [
          "Effective densities of states and effective mass",
          "<strong>N<sub>c</sub></strong> and <strong>N<sub>v</sub></strong> are the effective densities of states for the conduction and valence bands, measured in cm⁻³. Unlike N(E), they are not per-energy densities. Under the parabolic-band approximation, they scale approximately as T<sup>3/2</sup>.",
          "Conductivity effective mass describes the response to an applied force, while <strong>density-of-states effective mass</strong> is used when counting available states. Use the DOS mass in N<sub>c</sub> and N<sub>v</sub> calculations.",
          "There is no single universal m*: the relevant value depends on the property being calculated."
        ],
        [
          "Electrons, holes and the mass-action law",
          "For a non-degenerate semiconductor at equilibrium, electron and hole densities depend on the Fermi level's distance from the band edges. Multiplying their expressions eliminates E<sub>F</sub>.",
          "This produces the <strong>mass-action law</strong>, n₀p₀=n<sub>i</sub>². It should be applied under equilibrium and Boltzmann-approximation conditions, not as an unrestricted nonequilibrium rule.",
          "Under these assumptions the equilibrium carrier-density product is set by temperature and band parameters, not directly by the doping level."
        ],
        [
          "Intrinsic carrier concentration and intrinsic Fermi level",
          "For an intrinsic semiconductor, n₀=p₀=n<sub>i</sub>, yielding n<sub>i</sub>=√(N<sub>c</sub>N<sub>v</sub>)exp(−E<sub>g</sub>/2kT). Around 300 K, silicon's n<sub>i</sub> is of order 10¹⁰ cm⁻³, with small differences among parameter sets and reference measurements.",
          "The intrinsic Fermi level E<sub>i</sub> lies near midgap but is not exactly at the center if the effective densities of states differ. The slope of ln(n<sub>i</sub>) versus 1/T provides information about the band gap, with a T<sup>3/2</sup> correction.",
          "Temperature has a strong exponential influence on intrinsic carrier concentration."
        ]
      ],
      outcomes: [
        "I can interpret N(E) and its physical units.",
        "I can calculate occupation probabilities with the Fermi–Dirac function.",
        "I can assess the Boltzmann approximation using the 3kT criterion.",
        "I can explain the integral of the density of states times occupancy.",
        "I can distinguish conductivity and density-of-states effective mass.",
        "I can apply Nᶜ, Nᵛ, n₀ and p₀ formulas under suitable assumptions.",
        "I can explain and qualify the n₀p₀ = nᵢ² relation.",
        "I can interpret nᵢ(T), the intrinsic Fermi level and the effect of the band gap."
      ],
      future: {
        grafikler: ["N(E), f(E,T) and N(E)f(E,T) on shared axes", "nᵢ versus 1000/T and band-gap slope comparison"],
        simulasyonlar: ["Change temperature and Eᶠ on the Fermi–Dirac curve", "n₀ / p₀ calculator using Nᶜ and Nᵛ"],
        sorular: ["3kT and Boltzmann validity questions", "Mass-action law and numerical nᵢ exercises"],
        oyunlar: ["Fill the energy states", "Choose the valid approximation"]
      }
    },
    "06": {
      navTitle: "Doping",
      title: "Doped Semiconductors, Ionization and Charge Neutrality",
      kicker: "Real materials",
      description: "Use donors and acceptors to understand net doping, charge neutrality and temperature-dependent carrier regimes. Start with the bond model and identify its limitations.",
      focus: "Interpret doping",
      topics: [
        [
          "Dopant distribution and the dilute approximation",
          "Dopant atoms occupy crystal sites statistically. On sufficiently large scales, random placement has a stable average, allowing a <strong>uniform doping</strong> approximation. It does not imply that individual dopants form a regular lattice.",
          "At low to moderate doping levels, treating impurity atoms as isolated can be useful. At high doping, interactions and modifications of the bands may invalidate this dilute approximation.",
          "Uniform doping means statistical homogeneity even though individual impurities occupy random positions."
        ],
        [
          "How do donors and acceptors work?",
          "A group-V dopant such as <strong>phosphorus (P)</strong> forms four bonds in Si and provides an additional weakly bound electron. When this electron reaches the conduction band, it leaves behind a positively charged ionized donor.",
          "A group-III dopant such as <strong>boron (B)</strong> can accept an electron and create a valence-band hole; the ionized acceptor is negatively charged. Donor ionization does not directly produce a hole, nor does acceptor ionization directly create a conduction electron.",
          "Donors and acceptors determine both the majority-carrier type and the charge of the ionized dopant."
        ],
        [
          "Dopant ionization energy",
          "Donor and acceptor levels commonly lie close to their respective band edges. The donor ionization energy for Si:P is approximately <strong>0.045 eV</strong>; Si:B acceptors have a similar energy scale.",
          "These are much smaller than silicon's band gap of approximately 1.12 eV near 300 K. A hydrogen-like approximate model qualitatively explains weaker binding through dielectric screening and effective mass.",
          "Ionizing an impurity is not the same physical process as creating a new interband electron–hole pair."
        ],
        [
          "Majority and minority carriers",
          "Electrons are majority carriers in n-type material; holes are majority carriers in p-type material. The other type is the <strong>minority carrier</strong>. Dopant ionization and thermally generated electron–hole pairs are distinct carrier sources.",
          "At equilibrium under the Boltzmann approximation, n₀p₀=n<sub>i</sub>². In n-type material, for example, the minority hole density follows p₀=n<sub>i</sub>²/n₀ if the majority electron density is known.",
          "Doping sets the majority-carrier type; equilibrium statistics also determine the minority population."
        ],
        [
          "Constructing the charge-neutrality equation",
          "In a macroscopically neutral homogeneous semiconductor region, negative charges (electrons and ionized acceptors) balance positive charges (holes and ionized donors).",
          "The density of ionized donors is N<sub>D</sub><sup>+</sup>, and the density of ionized acceptors is N<sub>A</sub><sup>−</sup>. <strong>N<sub>D</sub> does not always equal N<sub>D</sub><sup>+</sup></strong>: partial ionization makes them different.",
          "Charge neutrality must count ionized impurity charges, not simply the total number of dopant atoms."
        ],
        [
          "Compensated doping",
          "Donors and acceptors may both be present. Assuming full ionization and majority-carrier dominance, net n-type doping is approximately N<sub>D</sub>−N<sub>A</sub>.",
          "For example, N<sub>D</sub>=10¹⁶ and N<sub>A</sub>=4×10¹⁵ cm⁻³ yield a net doping of 6×10¹⁵ cm⁻³. Scattering from ionized impurities, however, depends also on the total impurity population rather than only the net difference.",
          "Net doping helps determine carrier dominance; total ionized impurity content also influences scattering."
        ],
        [
          "Three temperature regimes",
          "<strong>I — Freeze-out:</strong> at low temperatures many dopants remain unionized, and the carrier density increases with temperature. <strong>II — Extrinsic:</strong> dopants are largely ionized and intrinsic carriers remain less important; for uncompensated n-type Si, n₀≈N<sub>D</sub> may hold.",
          "<strong>III — Intrinsic:</strong> at high temperature, thermally generated electron–hole pairs overwhelm the effect of doping; electron and hole concentrations approach the n<sub>i</sub> scale. Regime boundaries depend on dopant concentration and the physical model. For example at 300 K, with n<sub>i</sub> ≈ 10¹⁰ cm⁻³ and fully ionized, uncompensated n-type Si doped to N<sub>D</sub> = 10¹⁵ cm⁻³, n₀ ≈ 10¹⁵ and p₀ ≈ 10⁵ cm⁻³. These are approximate example values for the appropriate extrinsic regime.",
          "Using n≈Nᴅ at every temperature is incorrect."
        ],
        [
          "From the bond model to the doped band model",
          "The bond model shows why donors contribute electrons and acceptors contribute holes. But quantitative partial-ionization calculations require impurity energy levels, the Fermi level and the relevant occupancy statistics.",
          "A later development can examine N<sub>D</sub><sup>+</sup>/N<sub>D</sub>, N<sub>A</sub><sup>−</sup>/N<sub>A</sub> and how the Fermi level varies with temperature and doping in the band model.",
          "A realistic doped-semiconductor calculation must solve charge neutrality and state occupancy together."
        ]
      ],
      outcomes: [
        "I can explain uniform doping and the dilute-impurity approximation.",
        "I can identify the carrier and ion charges involved in donor/acceptor ionization.",
        "I can compare dopant ionization energies with the band gap.",
        "I can distinguish majority/minority carriers in n- and p-type material and interpret n₀p₀ = nᵢ² at equilibrium.",
        "I can use Nᴅ, Nᴀ, Nᴅ⁺ and Nᴀ⁻ to construct charge-neutrality equations.",
        "I can calculate compensation under the full-ionization approximation.",
        "I can interpret freeze-out, extrinsic and intrinsic temperature regimes and the limits of the n₀ ≈ Nᴅ approximation.",
        "I can explain why the bond model cannot calculate partial ionization by itself.",
        "At 300 K, I can estimate majority electron and minority hole densities from Nᴅ using nᵢ ≈ 10¹⁰ cm⁻³ under full ionization.",
        "I can calculate an atomic dopant fraction of about 20 ppb from Nᴅ = 10¹⁵ cm⁻³ and a Si atomic density of ≈ 5 × 10²² cm⁻³."
      ],
      future: {
        grafikler: ["n versus 1000/T for three dopant concentrations", "Band diagram with donor and acceptor levels"],
        simulasyonlar: ["Charge-neutrality calculation with Nᴅ, Nᴀ and T", "Ionization fraction and Fermi-level exploration"],
        sorular: ["n-type and p-type carrier concentrations", "Compensation and temperature-regime problems"],
        oyunlar: ["Donor or acceptor?", "Order the three regimes"]
      }
    }
  };

  window.COURSE_LESSONS_EN = window.COURSE_LESSONS.map(source => {
    const translation = en[source.id];
    if (!translation || translation.topics.length !== source.topics.length ||
        translation.outcomes.length !== source.outcomes.length) {
      throw new Error("Translation coverage mismatch: lesson " + source.id);
    }
    return {
      ...source,
      navTitle: translation.navTitle,
      title: translation.title,
      kicker: translation.kicker,
      description: translation.description,
      focus: translation.focus,
      topics: source.topics.map((original, index) => {
        if (source.id === "04") {
          const [title, ...parts] = translation.topics[index];
          const key = parts.pop();
          const equation04 = {
            3: "3s: 2N states / 2N electrons · 3p: 6N states / 2N electrons",
            4: "8N states = 4N valence + 4N conduction · 4N electrons (0 K)",
            5: "E<sub>g</sub> = E<sub>c</sub> − E<sub>v</sub> · χ = E<sub>0</sub> − E<sub>c</sub>",
            6: "E<sub>0</sub>−E<sub>v</sub> = χ + E<sub>g</sub> = 4.05 + 1.12 = 5.17 eV",
            8: "m* ≈ ℏ²/(d²E/dk²) (1D, parabolic approximation)"
          };
          return { ...original, title, paragraphs: parts, key,
            ...(Object.hasOwn(equation04, index) ? { equation: equation04[index] } : {}) };
        }
        const [title, first, second, key, equation] = translation.topics[index];
        // Equations are shared verbatim except for language-specific annotations.
        const translatedEquations = {
          "02-4": "Thermal equilibrium ⊂ Steady state",
          "06-1": "Donor: D⁰ → D⁺ + e⁻ &nbsp;·&nbsp; Acceptor: A⁰ → A⁻ + h⁺",
          "06-3": "p₀ = n<sub>i</sub>² / n₀  (n-type, equilibrium, non-degenerate)"
        };
        const eqKey = source.id + "-" + index;
        return {
          ...original,
          title,
          paragraphs: [first, second],
          key,
          ...(equation === undefined ? {} : { equation }),
          ...(Object.hasOwn(translatedEquations, eqKey) ? { equation: translatedEquations[eqKey] } : {})
        };
      }),
      outcomes: translation.outcomes,
      future: translation.future
    };
  });
})();