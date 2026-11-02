(() => {
  "use strict";

  const lessonsTr = Array.isArray(window.COURSE_LESSONS) ? window.COURSE_LESSONS : [];
  const lessonsEn = Array.isArray(window.COURSE_LESSONS_EN) ? window.COURSE_LESSONS_EN : [];
  const lessonIds = new Set(lessonsTr.map(lesson => lesson.id));
  const tabDefinitions = [
    { id: "anlatim", tr: "Konu Anlatımı", en: "Lessons", icon: "book" },
    { id: "grafikler", tr: "Grafikler", en: "Graphs", icon: "chart" },
    { id: "simulasyonlar", tr: "Simülasyonlar", en: "Simulations", icon: "sliders" },
    { id: "sorular", tr: "Sorular", en: "Questions", icon: "help" },
    { id: "oyunlar", tr: "Oyunlar", en: "Games", icon: "game" }
  ];
  const tabIds = new Set(tabDefinitions.map(tab => tab.id));
  const progressKey = "yariiletken-progress-v1";
  const themeKey = "yariiletken-theme-v1";
  const languageKey = "yariiletken-language-v1";
  const $ = selector => document.querySelector(selector);

  const ui = {
    tr: {
      site: "Yarıiletken Fiziği",
      chooseLesson: "Ders seç",
      lessonsNav: "Ders bölümleri",
      tabNav: "İçerik türü",
      panel: "Seçili ders içeriği",
      darkTheme: "Koyu temaya geç",
      lightTheme: "Açık temaya geç",
      heading: "KONU ANLATIMI",
      overview: "Temelden ileriye, adım adım",
      intro: "Başlıklar birbirinin ön koşuludur. Önce kavramı oku, sonra karşıdaki kazanımlardan öğrendiklerini işaretle.",
      topic: "konu",
      formula: "Temel bağıntı",
      objectives: "HEDEFLER",
      outcomes: "Kazanımlar",
      progress: "İşaretlenen kazanımlar",
      planned: "SONRAKİ GELİŞTİRME AŞAMASI",
      proposed: "PLANLANAN",
      proposedNote: "Bu etkinlik için arayüz alanı ayrıldı; henüz etkin değildir.",
      back: "Konu anlatımına dön",
      footerLeft: "Yarıiletken Fiziği · Ders 02–06",
      footerRight: "Her kazanım, grafik ve uygulama adım adım geliştiriliyor.",
      descriptions: {
        grafikler: "Bu bölümde veriye dayalı eğriler ve bilimsel diyagramlar adım adım eklenecek. İlk aşamada ders anlatımı ile kazanımlar tamamlandı.",
        simulasyonlar: "Kontrol edilebilir fiziksel modeller sonraki geliştirmede burada çalışacak. Henüz çalışır bir simülasyon bulunduğu iddia edilmez.",
        sorular: "Kazanımlarla eşleştirilmiş kavrama ve hesaplama soruları; doğru/yanlış yanıt açıklamalarıyla sonraki aşamada eklenecek.",
        oyunlar: "Kavramları pekiştiren kısa öğrenme oyunları ve geri bildirimli etkinlikler daha sonraki aşamada geliştirilecek."
      }
    },
    en: {
      site: "Semiconductor Physics",
      chooseLesson: "Choose a lesson",
      lessonsNav: "Lesson navigation",
      tabNav: "Content type",
      panel: "Selected lesson content",
      darkTheme: "Switch to dark theme",
      lightTheme: "Switch to light theme",
      heading: "LESSON CONTENT",
      overview: "From fundamentals to applications",
      intro: "Each topic builds on the previous one. Read the explanations, then check the learning outcomes you can demonstrate.",
      topic: "topic",
      formula: "Key equation",
      objectives: "GOALS",
      outcomes: "Learning Outcomes",
      progress: "Completed learning outcomes",
      planned: "NEXT DEVELOPMENT PHASE",
      proposed: "PLANNED",
      proposedNote: "Space has been reserved for this activity; it is not yet interactive.",
      back: "Return to lessons",
      footerLeft: "Semiconductor Physics · Lessons 02–06",
      footerRight: "Learning outcomes, graphs and activities are being developed step by step.",
      descriptions: {
        grafikler: "Scientific curves and diagrams will be added progressively. The first phase covers lesson explanations and learning outcomes.",
        simulasyonlar: "Controllable physical models will be added here in a later phase. No working simulation is currently claimed.",
        sorular: "Conceptual and numerical questions linked to learning outcomes, with explanations for correct and incorrect responses, will be added later.",
        oyunlar: "Short educational games with feedback will be developed to reinforce the concepts in a later phase."
      }
    }
  };

  const icons = {
    book: '<path d="M12 6.5c-3-2-6-2-9-1.5v13c3-.5 6-.5 9 1.5m0-13c3-2 6-2 9-1.5v13c-3-.5-6-.5-9 1.5m0-13v13"/>',
    chart: '<path d="M3 3v18h18M6 16l5-5 4 3 5-7"/>',
    sliders: '<path d="M4 7h16M4 17h16M9 4v6M16 14v6"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.7 2.7 0 0 1 5.1 1.2c0 2-2.6 2.1-2.6 4.2M12 17.5h.01"/>',
    game: '<rect x="3" y="7" width="18" height="12" rx="5"/><path d="M7 13h6m-3-3v6M17 12h.01M19 14h.01"/>'
  };
  const svg = name => '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">' + icons[name] + "</svg>";

  function readStorage(key, fallback) {
    try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
  }
  function writeStorage(key, value) {
    try { localStorage.setItem(key, value); } catch { /* Browsers may block localStorage. */ }
  }
  function loadProgress() {
    try {
      const value = JSON.parse(readStorage(progressKey, "{}"));
      return value && typeof value === "object" && !Array.isArray(value) ? value : {};
    } catch { return {}; }
  }

  const progress = loadProgress();
  let language = readStorage(languageKey, "tr") === "en" ? "en" : "tr";
  let lessons = language === "en" && lessonsEn.length === lessonsTr.length ? lessonsEn : lessonsTr;
  let pendingScroll = null;
  const t = () => ui[language];

  function selectedRoute() {
    const match = location.hash.match(/^#ders-(\d{2})\/([a-z]+)$/);
    return {
      lessonId: match && lessonIds.has(match[1]) ? match[1] : "02",
      tabId: match && tabIds.has(match[2]) ? match[2] : "anlatim"
    };
  }

  function navigate(lessonId, tabId = "anlatim") {
    if (!lessonIds.has(lessonId) || !tabIds.has(tabId)) return;
    const target = "#ders-" + lessonId + "/" + tabId;
    pendingScroll = "#content-panel";
    if (location.hash === target) render();
    else location.hash = target;
  }

  function getChecked(lesson) {
    const existing = Array.isArray(progress[lesson.id]) ? progress[lesson.id] : [];
    return existing.filter(index => Number.isInteger(index) && index >= 0 && index < lesson.outcomes.length);
  }

  function renderLessonNav(current) {
    const element = $("#lesson-navigation");
    element.innerHTML = lessons.map(lesson => {
      const selected = lesson.id === current.id;
      return '<button type="button" class="lesson-button" id="lesson-choice-' + lesson.id +
        '" data-lesson="' + lesson.id + '"' + (selected ? ' aria-current="page"' : '') +
        '><span class="lesson-name">' + lesson.navTitle + '</span></button>';
    }).join("");

    element.querySelectorAll("[data-lesson]").forEach(button => {
      button.addEventListener("click", () => navigate(button.dataset.lesson));
      button.addEventListener("keydown", event => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const index = lessons.findIndex(lesson => lesson.id === button.dataset.lesson);
        const next = event.key === "Home" ? 0 : event.key === "End" ? lessons.length - 1
          : (index + (event.key === "ArrowRight" ? 1 : -1) + lessons.length) % lessons.length;
        navigate(lessons[next].id);
        requestAnimationFrame(() => document.getElementById("lesson-choice-" + lessons[next].id)?.focus());
      });
    });

    const mobileSelect = $("#lesson-mobile-select");
    mobileSelect.innerHTML = lessons.map(lesson =>
      '<option value="' + lesson.id + '">' + lesson.navTitle + '</option>'
    ).join("");
    mobileSelect.value = current.id;
    mobileSelect.onchange = () => navigate(mobileSelect.value);
  }

  function renderHero(lesson) {
    // Keep only the lesson title in the pinned region; place the summary in the content.
    $("#hero").innerHTML = '<div class="hero-copy"><h1 id="lesson-title">' + lesson.title + '</h1></div>';
  }

  function renderTabs(lessonId, currentTab) {
    const element = $("#content-tabs");
    element.innerHTML = tabDefinitions.map(tab => {
      const selected = tab.id === currentTab;
      return '<button class="content-tab" type="button" role="tab" id="tab-' + tab.id +
        '" aria-controls="content-panel" aria-selected="' + selected +
        '" tabindex="' + (selected ? "0" : "-1") + '" data-tab="' + tab.id + '">' +
        svg(tab.icon) + tab[language] + '</button>';
    }).join("");

    element.querySelectorAll("[data-tab]").forEach(button => {
      button.addEventListener("click", () => navigate(lessonId, button.dataset.tab));
      button.addEventListener("keydown", event => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const index = tabDefinitions.findIndex(tab => tab.id === button.dataset.tab);
        const next = event.key === "Home" ? 0 : event.key === "End" ? tabDefinitions.length - 1
          : (index + (event.key === "ArrowRight" ? 1 : -1) + tabDefinitions.length) % tabDefinitions.length;
        navigate(lessonId, tabDefinitions[next].id);
        requestAnimationFrame(() => document.getElementById("tab-" + tabDefinitions[next].id)?.focus());
      });
    });
    $("#content-panel").setAttribute("aria-labelledby", "tab-" + currentTab);
  }

  function updateProgressCounter(lesson) {
    const done = getChecked(lesson).length;
    const total = lesson.outcomes.length;
    const counter = $("#outcome-counter");
    const fill = $("#progress-fill");
    if (counter) counter.textContent = done + " / " + total;
    if (fill) {
      fill.style.width = (total ? (done / total) * 100 : 0) + "%";
      fill.parentElement.setAttribute("aria-valuenow", String(done));
      fill.parentElement.setAttribute("aria-valuemax", String(total));
    }
  }

  function renderNarration(lesson) {
    const strings = t();
    const checked = new Set(getChecked(lesson));
    // Formatting is supplied by the trusted, locally maintained lesson data.
    const topics = lesson.topics.map((topic, index) =>
      '<article class="topic-card" id="konu-' + lesson.id + '-' + (index + 1) + '">' +
      '<div class="topic-heading"><span class="topic-number">' + String(index + 1).padStart(2, "0") +
      '</span><h3>' + topic.title + '</h3></div>' +
      topic.paragraphs.map(paragraph => '<p>' + paragraph + '</p>').join("") +
      (topic.equation ? '<div class="math-line" role="note" aria-label="' + strings.formula + '">' + topic.equation + '</div>' : "") +
      '<div class="key-point">' + topic.key + '</div></article>'
    ).join("");

    const outcomes = lesson.outcomes.map((item, index) =>
      '<li><label><input type="checkbox" data-outcome="' + index + '" ' +
      (checked.has(index) ? "checked " : "") +
      '><span>' + item + '</span></label></li>'
    ).join("");

    $("#content-panel").innerHTML =
      '<div class="learning-layout"><div class="topics-column">' +
      '<div class="section-intro"><span class="eyebrow">' + strings.heading + '</span>' +
      '<h2>' + strings.overview + '</h2><p>' + lesson.description + '</p>' +
      '<div class="topic-index">' + lesson.topics.map((_, index) =>
        '<button class="topic-jump" type="button" data-topic="' + (index + 1) + '">' +
        String(index + 1).padStart(2, "0") + '. ' + strings.topic + '</button>'
      ).join("") + '</div></div>' + topics + '</div>' +
      '<aside class="outcomes-card" aria-labelledby="outcomes-title">' +
      '<div class="outcomes-header"><div><span class="eyebrow">' + strings.objectives + '</span><h2 id="outcomes-title">' + strings.outcomes + '</h2></div>' +
      '<span class="outcome-counter" id="outcome-counter"></span></div>' +
      '<div class="progress-track" role="progressbar" aria-label="' + strings.progress + '" aria-valuemin="0"><div class="progress-fill" id="progress-fill"></div></div>' +
      '<ul class="outcomes-list">' + outcomes + '</ul>' +
      '</aside></div>';

    $("#content-panel").querySelectorAll("[data-topic]").forEach(button => {
      button.addEventListener("click", () => {
        document.getElementById("konu-" + lesson.id + "-" + button.dataset.topic)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
    $("#content-panel").querySelectorAll("[data-outcome]").forEach(checkbox => {
      checkbox.addEventListener("change", () => {
        const current = new Set(getChecked(lesson));
        const index = Number(checkbox.dataset.outcome);
        if (checkbox.checked) current.add(index); else current.delete(index);
        progress[lesson.id] = [...current].sort((a, b) => a - b);
        writeStorage(progressKey, JSON.stringify(progress));
        updateProgressCounter(lesson);
      });
    });
    updateProgressCounter(lesson);
  }

  function renderPlanned(lesson, tabId) {
    if (window.CourseActivity?.render({ lessonId: lesson.id, tabId, language, container: $("#content-panel") })) return;
    const strings = t();
    const tab = tabDefinitions.find(item => item.id === tabId);
    const proposed = Array.isArray(lesson.future[tabId]) ? lesson.future[tabId] : [];
    $("#content-panel").innerHTML =
      '<div class="placeholder"><div class="placeholder-top"><span class="placeholder-icon">' +
      svg(tab.icon) + '</span><span class="eyebrow">' + strings.planned + '</span></div>' +
      '<h2>' + tab[language] + '</h2><p>' + strings.descriptions[tabId] + '</p>' +
      '<div class="planned-grid">' + proposed.map((item, index) =>
        '<div class="planned-item"><small>' + strings.proposed + ' ' + String(index + 1).padStart(2, "0") +
        '</small><h3>' + item + '</h3><p>' + strings.proposedNote + '</p></div>'
      ).join("") + '</div><button class="back-button" type="button" id="back-to-narration">' + strings.back + '</button></div>';
    $("#back-to-narration").addEventListener("click", () => navigate(lesson.id, "anlatim"));
  }

  function updateThemeLabel() {
    const isDark = document.documentElement.dataset.theme === "dark";
    $("#theme-toggle").setAttribute("aria-label", isDark ? t().lightTheme : t().darkTheme);
    $("#theme-toggle").title = isDark ? t().lightTheme : t().darkTheme;
  }

  function render() {
    const { lessonId, tabId } = selectedRoute();
    const lesson = lessons.find(item => item.id === lessonId);
    if (!lesson) return;
    document.documentElement.lang = language;
    document.title = lesson.navTitle + " | " + t().site;
    $("#site-brand-title").textContent = t().site;
    $(".brand").setAttribute("aria-label", t().site);
    $("#lessons-nav").setAttribute("aria-label", t().lessonsNav);
    $("#lesson-navigation").setAttribute("aria-label", t().chooseLesson);
    $("#lesson-mobile-label").textContent = t().chooseLesson;
    $("#lesson-mobile-select").setAttribute("aria-label", t().chooseLesson);
    $("#content-tabs").setAttribute("aria-label", t().tabNav);
    $("#content-panel").setAttribute("aria-label", t().panel);
    $("#footer-left").textContent = t().footerLeft;
    $("#footer-right").textContent = t().footerRight;
    updateThemeLabel();
    renderLessonNav(lesson);
    renderHero(lesson);
    renderTabs(lesson.id, tabId);
    if (tabId === "anlatim") renderNarration(lesson);
    else renderPlanned(lesson, tabId);
    if (pendingScroll) {
      document.querySelector(pendingScroll)?.scrollIntoView({ behavior: "smooth", block: "start" });
      pendingScroll = null;
    }
  }

  function setupTheme() {
    const saved = readStorage(themeKey, "");
    const systemDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme =
      saved === "dark" || (!saved && systemDark) ? "dark" : "light";
    const button = $("#theme-toggle");
    button.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      writeStorage(themeKey, next);
      updateThemeLabel();
    });
  }

  function setupLanguage() {
    const buttons = document.querySelectorAll("[data-lang]");
    function updateButtons() {
      buttons.forEach(button => {
        button.setAttribute("aria-pressed", String(button.dataset.lang === language));
      });
    }
    buttons.forEach(button => button.addEventListener("click", () => {
      if (button.dataset.lang === language) return;
      language = button.dataset.lang;
      lessons = language === "en" ? lessonsEn : lessonsTr;
      writeStorage(languageKey, language);
      updateButtons();
      // Stay on the same lesson, tab, and reading position.
      render();
    }));
    updateButtons();
  }

  function setupStickyOffsets() {
    const header = $(".site-header");
    const stickyCourse = $("#lesson-sticky");
    const refresh = () => {
      document.documentElement.style.setProperty("--site-header-height",
        Math.ceil(header.getBoundingClientRect().height) + "px");
      document.documentElement.style.setProperty("--lesson-sticky-height",
        Math.ceil(stickyCourse.getBoundingClientRect().height) + "px");
    };
    refresh();
    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(refresh);
      observer.observe(header);
      observer.observe(stickyCourse);
    }
    window.addEventListener("resize", refresh);
  }

  if (lessonsTr.length === 0 || lessonsEn.length !== lessonsTr.length) return;
  setupTheme();
  setupLanguage();
  window.addEventListener("hashchange", render);
  if (!/^#ders-\d{2}\/[a-z]+$/.test(location.hash)) {
    history.replaceState(null, "", location.pathname + location.search + "#ders-02/anlatim");
  }
  render();
  setupStickyOffsets();
})();