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
          "Near room temperature the lattice constant is approximately <strong>5.43 Å</strong>, with eight Si atoms in the conventional cubic unit cell. The atomic concentration is roughly 5 × 10²² cm⁻³.",
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
        "I can interpret diamond-cubic geometry and the lattice constant.",
        "I can distinguish equilibrium from steady state using temperature gradients, illumination and applied-bias examples.",
        "I can match photons, phonons and electrons to their wave–particle properties."
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
          "In the simple bond model, an ideal intrinsic semiconductor has no thermally excited free carriers at 0 K. At higher temperatures, lattice atoms vibrate about their equilibrium positions; phonons describe the quantized lattice vibrations.",
          "Thermal energy can contribute to electronic transitions into conduction states. The band model describes this more accurately: about 1.12 eV is silicon's <strong>electronic band gap</strong> near 300 K, not an energy identical to breaking a chemical Si–Si bond.",
          "Temperature influences the occupancy of electronic states and the creation of thermal carriers."
        ],
        [
          "How is an electron–hole pair created?",
          "When an electron is excited from the valence band into the conduction band, a mobile conduction electron and an empty valence-band state remain. The empty state is called a <strong>hole</strong>.",
          "In an intrinsic material, this excitation creates electrons and holes together. Under equilibrium and without dominant doping, electron and hole concentrations are equal.",
          "Thermal interband generation creates an electron and a hole as a pair."
        ],
        [
          "Does a hole really move?",
          "When a valence electron moves into a neighboring empty quantum state, that vacancy appears to move in the opposite direction. Treating the collective motion of many valence electrons as a <strong>mobile positively charged hole</strong> makes calculations simpler.",
          "A hole is a physical quasiparticle description; it does not mean a positive atomic nucleus travels through the crystal. Hole motion produces measurable electrical effects.",
          "A hole represents the motion of a missing valence electron as a positive carrier."
        ],
        [
          "Generation and recombination",
          "<strong>Generation</strong> creates new electron–hole pairs. <strong>Recombination</strong> occurs when a conduction electron fills a valence-band vacancy, eliminating a free electron–hole pair.",
          "Thermal, optical and energetic-carrier mechanisms involve different processes. Since silicon has an indirect band gap, radiative recombination is often weak; defect-assisted recombination can be important.",
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
          "The bond model qualitatively explains why electrons and holes are created together and why carrier concentrations can rise with temperature. The probability analogy in the lecture notes, involving contributions from many small-energy vibrations, is also <strong>qualitative</strong>.",
          "For quantitative calculations we need to know which electronic energies are available and their occupancy probabilities. This leads to energy bands, density of states and Fermi–Dirac statistics.",
          "A useful model must be understood both through what it explains and what it cannot calculate."
        ]
      ],
      outcomes: [
        "I can explain thermal generation of an electron–hole pair in an intrinsic crystal.",
        "I can relate hole motion to the motion of valence electrons.",
        "I can explain why nᵢ = pᵢ in an intrinsic material.",
        "I can compare generation, recombination and scattering.",
        "I can explain why generation and recombination can continue at equilibrium.",
        "I can distinguish carrier lifetime from momentum relaxation.",
        "I can explain the limitations of the bond model for quantitative carrier calculations."
      ],
      future: {
        grafikler: ["Generation and recombination rates over time", "Qualitative temperature dependence of intrinsic carrier density"],
        simulasyonlar: ["Electron–hole generation and recombination animation", "Hole motion across neighboring bonds"],
        sorular: ["Electron–hole pairs and charge conservation", "Scattering or recombination?"],
        oyunlar: ["Match carrier motion", "Classify physical processes"]
      }
    },
    "04": {
      navTitle: "Band Theory",
      title: "Quantum States and Energy Band Theory",
      kicker: "From atoms to solids",
      description: "Go from the discrete energy levels of an isolated silicon atom to valence and conduction bands in a crystal. Learn the quantum concepts behind reading band diagrams.",
      focus: "Draw band diagrams",
      topics: [
        [
          "Allowed quantum states and the Pauli principle",
          "Electrons in an isolated atom occupy allowed quantum states rather than arbitrary energies. The Pauli exclusion principle states that two identical electrons cannot occupy <strong>the same quantum state</strong>; different states may share the same energy.",
          "An <strong>energy level</strong> is therefore not identical to a <strong>quantum state</strong>. Many states can share a level, which matters for counting carriers in band theory.",
          "Pauli exclusion forbids sharing the same quantum state, not merely the same energy."
        ],
        [
          "From one silicon atom to N atoms",
          "A silicon atom has the valence configuration 3s²3p². With many widely separated Si atoms, each atom has similar energy levels, while the total number of electrons and states scales with N.",
          "When the atoms approach, electronic states interact. The originally discrete energies split into many closely spaced energies; in a macroscopic crystal they appear as <strong>bands</strong>.",
          "Bands arise from quantum-mechanical interactions among atoms."
        ],
        [
          "Why do energy levels split?",
          "As interatomic interactions grow, states originating at the same initial energy spread across different energies. The normal modes of coupled oscillators offer a useful mechanical analogy.",
          "With more atoms, the levels become more closely spaced. Bandwidth is not determined by atom count alone: the nature of interatomic coupling and the crystal structure also matter.",
          "Band broadening and closer spacing of individual levels are distinct effects."
        ],
        [
          "Valence band, conduction band and forbidden gap",
          "The simplified band picture of ideal silicon at 0 K has a filled <strong>valence band</strong> and an empty <strong>conduction band</strong>. The interval containing no allowed band states is called the <strong>forbidden energy gap</strong> or band gap.",
          "Metals may have partially filled bands or overlapping bands. The band-gap size and the availability of thermally excited carriers help distinguish semiconductors from insulators.",
          "The band gap is the energy difference between the conduction-band minimum and valence-band maximum."
        ],
        [
          "Energy labels in a band diagram",
          "<strong>E<sub>c</sub></strong> denotes the conduction-band edge, <strong>E<sub>v</sub></strong> the valence-band edge, and <strong>E<sub>0</sub></strong> the vacuum level. <strong>Electron affinity (χ)</strong> is the energy difference between the vacuum level and the conduction-band edge.",
          "Near 300 K silicon has E<sub>g</sub> ≈ 1.12 eV and χ ≈ 4.05 eV. These are distinct quantities and should not be confused on an energy diagram.",
          "The vacuum level and the two band edges define different physically meaningful energy differences."
        ],
        [
          "Representing bond-model events with bands",
          "An electron excited from the valence band to the conduction band leaves behind a hole in the lower band. Upon recombination, an electron returns to a lower-energy state and fills the hole.",
          "The bond-model picture from Lesson 03 can therefore be reinterpreted in terms of energy transitions. This should not equate the chemical bond dissociation energy with the electronic band gap.",
          "The same electron–hole event is described as local motion in the bond model and as a transition between quantum states in the band model."
        ],
        [
          "Introduction to band curvature and effective mass",
          "The response of an electron to an applied force inside a crystal differs from that of a free electron in vacuum. <strong>Effective mass</strong> captures the influence of the band structure on this response.",
          "Near a simple band extremum, effective mass is related to the curvature of the E(k) dispersion. Conductivity and density-of-states effective masses serve different purposes, which are developed in Lesson 05.",
          "Effective mass is a property of the crystal dispersion, not the literal mass of an atom."
        ]
      ],
      outcomes: [
        "I can distinguish energy levels from individual quantum states.",
        "I can apply Pauli exclusion when describing electronic-state occupancy.",
        "I can explain how the interaction of N atoms produces energy bands.",
        "I can locate valence, conduction and forbidden-gap regions on a band diagram.",
        "I can correctly identify E₀, Eᶜ, Eᵛ, Eᵍ and χ.",
        "I can represent electron–hole generation and recombination on a band diagram.",
        "I can qualitatively relate band curvature to effective mass."
      ],
      future: {
        grafikler: ["Evolution from atomic levels to bands", "Silicon band diagram with realistic energy scale"],
        simulasyonlar: ["Interatomic separation and energy-level splitting", "Valence-to-conduction excitation animation"],
        sorular: ["Pauli exclusion and state counting", "Band-diagram questions using Eᶜ, Eᵛ, Eᵍ and χ"],
        oyunlar: ["Complete the band diagram", "Compare metals, semiconductors and insulators"]
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
        "I can distinguish majority from minority carriers.",
        "I can use Nᴅ, Nᴀ, Nᴅ⁺ and Nᴀ⁻ to construct charge-neutrality equations.",
        "I can calculate compensation under the full-ionization approximation.",
        "I can recognize freeze-out, extrinsic and intrinsic regimes on a temperature plot.",
        "I can explain why the bond model cannot calculate partial ionization by itself."
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