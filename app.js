(() => {
  "use strict";

  const lessons = Array.isArray(window.COURSE_LESSONS) ? window.COURSE_LESSONS : [];
  const lessonIds = new Set(lessons.map(lesson => lesson.id));
  const tabs = [
    { id: "anlatim", label: "Konu Anlatımı", icon: "book" },
    { id: "grafikler", label: "Grafikler", icon: "chart" },
    { id: "simulasyonlar", label: "Simülasyonlar", icon: "sliders" },
    { id: "sorular", label: "Sorular", icon: "help" },
    { id: "oyunlar", label: "Oyunlar", icon: "game" }
  ];
  const tabIds = new Set(tabs.map(tab => tab.id));
  const progressKey = "yariiletken-progress-v1";
  const themeKey = "yariiletken-theme-v1";
  const $ = selector => document.querySelector(selector);

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
    try { localStorage.setItem(key, value); } catch { /* private mode: session still works */ }
  }
  function loadProgress() {
    try {
      const value = JSON.parse(readStorage(progressKey, "{}"));
      return value && typeof value === "object" && !Array.isArray(value) ? value : {};
    } catch { return {}; }
  }
  const progress = loadProgress();
  let pendingScroll = null;

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
    pendingScroll = selectedRoute().lessonId !== lessonId ? ".page-intro" : "#content-tabs";
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
      return '<button type="button" class="lesson-button" role="tab" id="lesson-choice-' + lesson.id +
        '" aria-controls="hero" aria-selected="' + selected + '" tabindex="' + (selected ? "0" : "-1") +
        '" data-lesson="' + lesson.id + '"><small>DERS ' + lesson.id +
        '</small><strong>' + lesson.navTitle + '</strong></button>';
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
  }

  function renderHero(lesson) {
    $("#hero").innerHTML =
      '<div class="hero-copy"><div class="hero-kicker">Bölüm ' + lesson.id + ' &nbsp; / &nbsp; ' +
      lesson.kicker + '</div><h1 id="lesson-title">' + lesson.title +
      '</h1><p>' + lesson.description +
      '</p><div class="hero-meta"><span>' + lesson.topics.length +
      ' konu başlığı</span><span>' + lesson.outcomes.length +
      ' öğrenme kazanımı</span><span>' + lesson.focus + '</span></div></div>' +
      '<div class="orbit-illustration" aria-hidden="true"><i class="orbit orbit-one"></i>' +
      '<i class="orbit orbit-two"></i><i class="orbit orbit-three"></i>' +
      '<i class="orbit-dot dot-one"></i><i class="orbit-dot dot-two"></i>' +
      '<i class="orbit-dot dot-three"></i><div class="orbit-core">Si</div>' +
      '<span class="orbit-label">SEMICONDUCTOR PHYSICS</span></div>';
  }

  function renderTabs(lessonId, currentTab) {
    const element = $("#content-tabs");
    element.innerHTML = tabs.map(tab => {
      const selected = tab.id === currentTab;
      return '<button class="content-tab" type="button" role="tab" id="tab-' + tab.id +
        '" aria-controls="content-panel" aria-selected="' + selected +
        '" tabindex="' + (selected ? "0" : "-1") + '" data-tab="' + tab.id + '">' +
        svg(tab.icon) + tab.label + '</button>';
    }).join("");
    element.querySelectorAll("[data-tab]").forEach(button => {
      button.addEventListener("click", () => navigate(lessonId, button.dataset.tab));
      button.addEventListener("keydown", event => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const index = tabs.findIndex(tab => tab.id === button.dataset.tab);
        const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1
          : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
        navigate(lessonId, tabs[next].id);
        requestAnimationFrame(() => document.getElementById("tab-" + tabs[next].id)?.focus());
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
    const checked = new Set(getChecked(lesson));
    // HTML formatting is authored in lessons.js (trusted local course content).
    const topics = lesson.topics.map((topic, index) =>
      '<article class="topic-card" id="konu-' + lesson.id + '-' + (index + 1) + '">' +
      '<div class="topic-heading"><span class="topic-number">' + String(index + 1).padStart(2, "0") +
      '</span><h3>' + topic.title + '</h3></div>' +
      topic.paragraphs.map(paragraph => '<p>' + paragraph + '</p>').join("") +
      (topic.equation ? '<div class="math-line" role="note" aria-label="Temel bağıntı">' + topic.equation + '</div>' : "") +
      '<div class="key-point">' + topic.key + '</div></article>'
    ).join("");
    const outcomes = lesson.outcomes.map((item, index) =>
      '<li><label><input type="checkbox" data-outcome="' + index + '" ' +
      (checked.has(index) ? "checked " : "") +
      '><span>' + item + '</span></label></li>'
    ).join("");
    $("#content-panel").innerHTML =
      '<div class="learning-layout"><div class="topics-column">' +
      '<div class="section-intro"><span class="eyebrow">KONU ANLATIMI</span>' +
      '<h2>Temelden ileriye, adım adım</h2><p>Başlıklar birbirinin ön koşuludur. Önce kavramı oku, sonra karşıdaki kazanımlardan öğrendiklerini işaretle.</p>' +
      '<div class="topic-index">' + lesson.topics.map((_, index) =>
        '<button class="topic-jump" type="button" data-topic="' + (index + 1) + '">' +
        String(index + 1).padStart(2, "0") + '. konu</button>'
      ).join("") + '</div></div>' + topics + '</div>' +
      '<aside class="outcomes-card" aria-labelledby="outcomes-title">' +
      '<div class="outcomes-header"><div><span class="eyebrow">HEDEFLER</span><h2 id="outcomes-title">Kazanımlar</h2></div>' +
      '<span class="outcome-counter" id="outcome-counter"></span></div>' +
      '<p class="outcomes-caption">Bu dersi bitirdiğinde neleri açıklayabildiğini işaretle.</p>' +
      '<div class="progress-track" role="progressbar" aria-label="İşaretlenen kazanımlar" aria-valuemin="0"><div class="progress-fill" id="progress-fill"></div></div>' +
      '<ul class="outcomes-list">' + outcomes + '</ul>' +
      '<p class="outcomes-note">İşaretlemeler bir sınav sonucu değildir; ilerlemen yalnızca bu tarayıcıda saklanır.</p>' +
      '</aside></div>';
    $("#content-panel").querySelectorAll("[data-topic]").forEach(button => {
      button.addEventListener("click", () => {
        document.getElementById("konu-" + lesson.id + "-" + button.dataset.topic)?.scrollIntoView({ behavior: "smooth", block: "start" });
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
    const tab = tabs.find(item => item.id === tabId);
    const descriptions = {
      grafikler: "Bu bölümde veriye dayalı eğriler ve bilimsel diyagramlar adım adım eklenecek. İlk aşamada ders anlatımı ile kazanımlar tamamlandı.",
      simulasyonlar: "Kontrol edilebilir fiziksel modeller sonraki geliştirmede burada çalışacak. Henüz çalışır bir simülasyon bulunduğu iddia edilmez.",
      sorular: "Kazanımlarla eşleştirilmiş kavrama ve hesaplama soruları; doğru/yanlış yanıt açıklamalarıyla sonraki aşamada eklenecek.",
      oyunlar: "Kavramları pekiştiren kısa öğrenme oyunları ve geri bildirimli etkinlikler daha sonraki aşamada geliştirilecek."
    };
    const proposed = Array.isArray(lesson.future[tabId]) ? lesson.future[tabId] : [];
    $("#content-panel").innerHTML =
      '<div class="placeholder"><div class="placeholder-top"><span class="placeholder-icon">' +
      svg(tab.icon) + '</span><span class="eyebrow">SONRAKİ GELİŞTİRME AŞAMASI</span></div>' +
      '<h2>' + tab.label + '</h2><p>' + descriptions[tabId] + '</p>' +
      '<div class="planned-grid">' + proposed.map((item, index) =>
        '<div class="planned-item"><small>PLANLANAN ' + String(index + 1).padStart(2, "0") +
        '</small><h3>' + item + '</h3><p>Bu etkinlik için arayüz alanı ayrıldı; henüz etkin değildir.</p></div>'
      ).join("") + '</div><button class="back-button" type="button" id="back-to-narration">Konu anlatımına dön</button></div>';
    $("#back-to-narration").addEventListener("click", () => navigate(lesson.id, "anlatim"));
  }

  function render() {
    const { lessonId, tabId } = selectedRoute();
    const lesson = lessons.find(item => item.id === lessonId);
    if (!lesson) return;
    document.title = lesson.navTitle + " | Yarıiletken Fiziği";
    renderLessonNav(lesson);
    renderHero(lesson);
    renderTabs(lesson.id, tabId);
    $("#lesson-count").textContent = lesson.topics.length + " konu · " + lesson.outcomes.length + " kazanım";
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
    const updateLabel = () => button.setAttribute("aria-label", document.documentElement.dataset.theme === "dark"
      ? "Açık temaya geç" : "Koyu temaya geç");
    updateLabel();
    button.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      writeStorage(themeKey, next);
      updateLabel();
    });
  }

  if (lessons.length === 0) return;
  setupTheme();
  window.addEventListener("hashchange", render);
  if (!/^#ders-\d{2}\/[a-z]+$/.test(location.hash)) {
    history.replaceState(null, "", location.pathname + location.search + "#ders-02/anlatim");
  }
  render();
})();
