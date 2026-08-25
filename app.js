let currentLang = localStorage.getItem("lang") || "en";
let currentModalId = null;

const LABELS = {
  en: {
    created: "📅 Created", stack: "📋 Stack", status: "⚙️ Status", url: "🔗 URL",
    date: "📅 Date", venue: "🏛 Venue", authors: "🧑🏻‍💻 Authors", affiliation: "🏫 Affiliation",
    role: "🤚🏻 Role", doi: "🔗 DOI",
    topic: "💡 Topic", summary: "📝 Summary", keyFunction: "⭐️ Key Function", techStack: "🛠 Tech Stack",
    team: "🧑🏻‍💻 Team", part: "🤚🏻 My Role", learned: "🤔 Learned", screenshots: "📷 Screenshots",
    abstract: "📝 Abstract", contributions: "⭐️ Contributions", method: "🔧 Method", findings: "📊 Findings",
    keywords: "🏷 Keywords", figures: "📷 Figures", links: "🔗 Links",
    private: "Private", appLinkPrefix: "🔗 "
  },
  ko: {
    created: "📅 제작일", stack: "📋 스택", status: "⚙️ 상태", url: "🔗 URL",
    date: "📅 날짜", venue: "🏛 발표 학회", authors: "🧑🏻‍💻 저자", affiliation: "🏫 소속",
    role: "🤚🏻 역할", doi: "🔗 DOI",
    topic: "💡 주제", summary: "📝 요약", keyFunction: "⭐️ 주요 기능", techStack: "🛠 기술 스택",
    team: "🧑🏻‍💻 팀 구성", part: "🤚🏻 담당 역할", learned: "🤔 배운 점", screenshots: "📷 스크린샷",
    abstract: "📝 초록", contributions: "⭐️ 기여", method: "🔧 방법", findings: "📊 결과",
    keywords: "🏷 키워드", figures: "📷 그림", links: "🔗 링크",
    private: "비공개", appLinkPrefix: "🔗 "
  }
};

const KO_STATIC = {
  "name-h1": "김정현 (Andy)",
  "role-line": "iOS &amp; XR 개발자 · 햅틱스 연구자",
  "lede": "👋🏻 안녕하세요, 김정현(Andy)입니다. iOS와 XR 개발자로 시작해 햅틱스 연구자가 되었고, 보기만 하는 게 아니라 직접 느낄 수 있는 인터페이스를 만들고 있습니다.",
  "intro-p1": "iOS와 XR 앱을 만드는 개발자로 시작해 Apple Developer Academy를 비롯한 여러 경험을 통해 앱을 출시해왔습니다. 보고 들을 수는 있지만 느낄 수는 없는 공간 앱을 만들면서 햅틱스 연구에 빠지게 되었고, 지금은 웨어러블 센서와 햅틱 피드백 시스템을 직접 만들고 그 소프트웨어까지 직접 개발하고 있습니다.",
  "more-summary": "여기까지 오게 된 이야기 더 보기",
  "story-p1": "CBL(Challenge Based Learning) 과정을 통해 하나의 문제를 기능 목록으로 바로 옮기기보다 다양한 방향에서 바라보는 법을 배웠습니다. 디자이너, 기획자, 엔지니어처럼 같은 문제를 다르게 보는 사람들과 함께 논의하는 과정은 혼자 해결할 때보다 항상 더 효율적인 해결책으로 이어졌고, 이런 방식으로 여러 앱을 App Store에 출시했습니다.",
  "story-p2": "이후 XR로 방향을 넓혀갔습니다. visionOS와 ARKit 프로젝트를 만들며 사물을 공간에 배치하고 손에 반응하게 만들었습니다. 하지만 공간 앱을 만들수록 하나의 빈틈이 계속 눈에 띄었습니다. 제가 만든 모든 것은 보이고 들렸지만, 거의 아무것도 <em>느껴지지</em> 않았습니다. 손으로 잡을 수는 있지만 느낄 수 없는 가상 객체는 여전히 그림에 불과합니다. 그 빈틈이 저를 HCI로 이끌었습니다. 사람들과 진짜로 연결되는 인터페이스를 만들려면, 기기가 어떻게 렌더링하는지뿐 아니라 사람이 어떻게 지각하는지를 이해해야 했기 때문입니다.",
  "story-p3": "그래서 이를 제대로 공부하기 위해 대학원에 진학했습니다. 제 연구는 신체 착용형 햅틱 인터페이스에 관한 것으로, 센서를 설계하고 실제 물리 단위로 보정하며, 신호를 수집하고 분석하고, 실시간으로 분류한 뒤 그 결과를 다시 촉각으로 렌더링하는 과정을 다룹니다. 최근에는 IMU 데이터를 이용해 기기가 신체의 어느 부위에 착용되었는지를 파악해 피드백을 그에 맞게 조정하는 연구와, 가상 물체의 무게감을 조절할 수 있는 웨어러블 액추에이터를 만드는 작업을 진행했습니다.",
  "story-p4": "저는 이 두 방향을 동시에 다루는 것을 좋아합니다. 연구는 어떤 상호작용이 실제로 사람에게 통하는지 정직하게 검증하게 해주고, 개발은 도면에서 멈추지 않고 장치를 직접 만들고 출시하고 측정할 수 있게 해줍니다. 제 강점은 맞지 않는 보정 곡선이나 다시 만들어야 하는 프로토타입 앞에서도 문제가 해결될 때까지 끈질기게 붙잡고 있는 것입니다.",

  "kw-research-h": "연구 관심사",
  "kwr-1": "햅틱스",
  "kwr-2": "신체 착용형 햅틱 인터페이스",
  "kwr-3": "웨어러블 햅틱 디바이스",
  "kwr-4": "촉각 지각",
  "kwr-5": "가상 및 확장 현실",
  "kwr-6": "다중 감각 상호작용",
  "kwr-7": "인간-컴퓨터 상호작용(HCI)",
  "kw-expertise-h": "전문 분야",
  "kwe-1": "햅틱 하드웨어 제작",
  "kwe-2": "액추에이터 제어 (ERM, LRA, SMA, 공압)",
  "kwe-3": "실리콘 몰딩 및 캐스팅",
  "kwe-4": "햅틱 렌더링",
  "kwe-5": "센서 설계 및 보정",
  "kwe-6": "다중 센서 데이터 수집 및 DAQ",
  "kwe-7": "실시간 신호 분류",
  "kwe-8": "임베디드 프로토타이핑 (Arduino, Teensy)",
  "kwe-9": "온디바이스 머신러닝",
  "kwe-10": "iOS 앱 개발",
  "kwe-11": "AR/VR/XR 개발 (Unity)",
  "kwe-12": "빠른 프로토타이핑 및 3D 프린팅",

  "news-h": "소식",
  "news-1": "<strong>제4회 한국 햅틱스 학술대회 구두 발표</strong> “적응형 신체 착용 햅틱 피드백을 위한 IMU 기반 실시간 신체 부위 분류”를 제1저자로 발표. 대한민국 서울",
  "news-2": "<strong>특허 출원</strong> CAVE 기반 다중 프로젝션 XR 환경에서의 방탈출 콘텐츠 제공 방법 (출원번호 10-2026-0024399)",
  "news-3": "<strong>IEEE World Haptics Conference 2025 학생 혁신 챌린지 3위</strong> “Haptic Latch: 차량 도어 메커니즘의 햅틱 피드백을 통한 탑승자 안전성 향상”",
  "news-4": "<strong>경희대학교 XR-AI 융합학과 석사 과정 입학</strong> 전석희 교수님 연구실(Haptics and VR Lab) 합류",
  "news-5": "<strong>Apple Developer Academy 수료</strong> 9개월간의 Challenge Based Learning 프로그램; 여러 앱을 App Store에 출시",

  "edu-h": "✏️ 학력",
  "edu-1": "경희대학교, XR-AI 융합학과 석사",
  "edu-2": "Apple Developer Academy, 수료",
  "edu-3": "성결대학교, 컴퓨터공학과 학사",
  "edu-4": "서울강서고등학교, 졸업",

  "awards-h": "🏆 수상",
  "awd-1": "IEEE World Haptics Conference 2025 학생 혁신 챌린지 3위, “Haptic Latch: 차량 도어 메커니즘의 햅틱 피드백을 통한 탑승자 안전성 향상”",
  "awd-2": "사내(JAVA) 경진대회 대상, Health Keeper",

  "research-h2": "🔬 연구: 햅틱스 및 촉각 인터페이스",
  "research-lead": "제 대학원 연구는 신체 착용형 햅틱 인터페이스에 관한 것으로, 하드웨어를 만들고 신호를 수집하며 그 의미를 분석한 뒤 결과를 촉각으로 렌더링하는 과정을 다룹니다.",
  "stk-sensing-h": "센싱 하드웨어 및 프로토타이핑",
  "stk-sensing-p": "Arduino Uno와 Teensy 4.1 기반 센싱 프로토타입: FSR, IMU, 정전·광학식 근접 센서를 다루며, 아날로그 프론트엔드와 부품 선정은 스펙 시트 수치가 아니라 제조사 애플리케이션 노트를 기준으로 진행합니다.",
  "stk-actuator-h": "햅틱 하드웨어 제작 및 액추에이터 제어",
  "stk-actuator-p": "구동 소프트웨어뿐 아니라 햅틱 하드웨어 자체를 직접 제작합니다. 진동 모터(ERM, LRA 등), 형상기억합금(SMA) 액추에이터, 공압 구동, 직접 몰드를 뜨는 실리콘 캐스팅 등 다양한 액추에이터와 재료를 다뤄봤으며, 각각에 필요한 구동 회로와 제어 로직도 함께 설계합니다.",
  "stk-data-h": "데이터 수집 및 분석",
  "stk-data-p": "센서를 설계하고 원시 신호를 로깅한 뒤, 벤더의 예제 코드를 그대로 믿기보다 실제 물리 단위로 보정하는 엔드투엔드 측정 파이프라인을 구축합니다. 가속도계, IMU, 압력·FSR 센서 등 다양한 센서로부터 데이터를 수집하며, 샘플링 레이트와 채널 수에 따라 마이크로컨트롤러와 전용 DAQ 장비를 함께 활용합니다. FSR의 저항-힘 곡선을 로그-로그 회귀로 도출하고 세 가지 부하 저항으로 교차 검증한 경험이 있습니다.",
  "stk-algo-h": "알고리즘 및 모델링",
  "stk-algo-p": "센서 스트림의 실시간 분류, 최근에는 신체 착용형 기기가 착용 위치에 맞게 피드백을 조정할 수 있도록 IMU 기반 신체 부위 분류를 수행했습니다. 제4회 한국 햅틱스 학술대회(2026) 제1저자 구두 발표.",
  "stk-render-h": "햅틱 렌더링 및 구현",
  "stk-render-p": "Core Haptics 기반 햅틱 파형과 이벤트 트레인, 절차적 표면 텍스처, 그리고 실시간 입력으로 강도와 날카로움이 사용자를 따라가는 액추에이터 구동을 다루며, 페어링된 기기 간 왕복 지연시간도 직접 측정합니다.",
  "stk-fab-h": "제작",
  "stk-fab-p": "인클로저, 센서 마운트, 실제로 착용 가능할 만큼 작고 가벼운 웨어러블 폼팩터를 위한 3D 프린팅 및 프로토타입 제작.",
  "stk-xr-h": "XR",
  "stk-xr-p": "다중 프로젝션 XR 환경과 공간 상호작용, 룸 스케일 CAVE 환경을 위한 LiDAR 및 트래커 기반 센서 퓨전을 포함합니다. 출원된 특허의 대상이기도 합니다.",

  "dev-h2": "💻 개발",
  "dev-lead": "소프트웨어 쪽을 직접 출시합니다: App Store 앱, 온디바이스 ML, 그리고 그 주변 도구들까지.",
  "dev-ios-h": "iOS (SwiftUI, UIKit)",
  "dev-ios-p": "제 주력 플랫폼입니다. Swift Concurrency와 Alamofire로 실서비스 App Store 앱을 출시하고 유지보수했으며, 하드웨어 연동 기능을 위해 Core Haptics, Core Bluetooth, Core Motion, WatchKit도 함께 다룹니다.",
  "dev-ml-h": "온디바이스 머신러닝",
  "dev-ml-p": "완전한 온디바이스 추론을 위한 Core ML과 Vision. Core ML Tools로 PyTorch 모델을 Core ML로 변환하며, 최종 모델을 정하기 전 여러 아키텍처 후보를 비교합니다.",
  "dev-arvr-h": "AR / VR / XR (RealityKit, ARKit, visionOS, Unity)",
  "dev-arvr-p": "공간 앱과 상호작용: 공간에 배치된 오브젝트, 앵커, 핸드 트래킹, Reality Composer Pro를 다루며, 카메라와 LiDAR 스캐너로 온디바이스 AR 기능을 테스트합니다. Unity로도 개발하며, 사양에 맞는 컴포넌트 제작, 공간 매핑, 씬 내 객체 인식을 수행합니다.",
  "dev-python-h": "Python",
  "dev-python-p": "센서 데이터 처리, 회귀 및 보정, PyTorch, 모델 변환 파이프라인.",
  "dev-android-h": "Android (Kotlin, Java)",
  "dev-android-p": "iOS로 넘어오기 전 MySQL과 Firebase 기반 앱을 출시한 경험이 있습니다.",
  "dev-c-h": "C / C++",
  "dev-c-p": "마이크로컨트롤러용 임베디드 펌웨어와 하드웨어에 밀접한 알고리즘 작업, 더 반응성 있는 실시간 제어를 위해 마이크로컨트롤러 지연을 줄이는 기법을 포함합니다.",
  "dev-web-h": "웹",
  "dev-web-p": "HTML, CSS, JavaScript: 소속 연구실 웹사이트와 브라우저에서 페이지 이미지를 분석하는 Safari 웹 익스텐션을 만들었습니다.",

  "patents-h": "📜 특허",
  "pat-1": "CAVE 기반 다중 프로젝션 XR 환경에서의 방탈출 콘텐츠 제공 방법 및 장치",
  "pat-1-sub": "특허출원번호 10-2026-0024399",

  "lang-h": "🌐 언어",
  "lang-1": "한국어: 모국어",
  "lang-2": "영어: 업무 능숙",
  "lang-3": "일본어: 기초 업무 가능",

  "vol-h": "🤝 봉사 활동",
  "vol-1": "코딩 멘토, SW 창의캠프 대학생 봉사단, CJ UNIT 6기 (CJ올리브네트웍스)",
  "vol-2": "코딩 멘토, “Be a Coding Hero”, Microsoft",
  "vol-3": "박물관 봉사, “구글 뮤지엄 온 더 고”, Google &amp; 국립중앙박물관",

  "pubs-h": "논문 및 발표",
  "pubs-hint": "카드를 클릭하면 자세히 볼 수 있습니다.",
  "team-h": "팀 프로젝트",
  "team-hint": "카드를 클릭하면 자세히 볼 수 있습니다.",
  "personal-h": "개인 프로젝트",
  "personal-hint": "카드를 클릭하면 자세히 볼 수 있습니다.",

  "resume-label": "이력서"
};

function tf(obj, field) {
  if (currentLang === "ko" && obj.ko && obj.ko[field] !== undefined) return obj.ko[field];
  return obj[field];
}

function tUrlLabel(p) {
  if (currentLang === "ko" && p.ko && p.ko.url && p.ko.url.label !== undefined) return p.ko.url.label;
  return p.url.label;
}

function tAppBlurb(p) {
  if (currentLang === "ko" && p.ko && p.ko.appBlurb) return p.ko.appBlurb;
  return p.appBlurb;
}

function L(key) {
  return LABELS[currentLang][key];
}

function applyStaticLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    if (el.dataset.enHtml === undefined) el.dataset.enHtml = el.innerHTML;
    const key = el.dataset.i18n;
    el.innerHTML = (currentLang === "ko" && KO_STATIC[key] !== undefined) ? KO_STATIC[key] : el.dataset.enHtml;
  });
  document.documentElement.lang = currentLang;
  const checkbox = document.getElementById("lang-toggle");
  if (checkbox) checkbox.checked = currentLang === "ko";
  const word = document.getElementById("lang-switch-word");
  if (word) word.textContent = currentLang === "en" ? "EN" : "KO";

  const storyContainer = document.getElementById("more-story");
  if (storyContainer && storyContainer.classList.contains("open")) {
    const panel = document.getElementById("more-story-panel");
    panel.style.height = panel.querySelector(".more-story-body").scrollHeight + "px";
  }
}

function toggleMoreStory() {
  const container = document.getElementById("more-story");
  const panel = document.getElementById("more-story-panel");
  const body = panel.querySelector(".more-story-body");
  const opening = !container.classList.contains("open");
  container.classList.toggle("open", opening);
  container.querySelector(".more-story-toggle").setAttribute("aria-expanded", String(opening));
  panel.style.height = opening ? body.scrollHeight + "px" : "0px";
}

function toggleLang() {
  currentLang = currentLang === "en" ? "ko" : "en";
  localStorage.setItem("lang", currentLang);
  applyStaticLang();
  renderCards(PROJECTS.publications || [], "publications");
  renderCards(PROJECTS.team, "team-projects");
  renderCards(PROJECTS.personal, "personal-projects");
  if (currentModalId) openModal(currentModalId);
}

function renderCards(list, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = list.map(p => `
    <div class="project-card" data-id="${p.id}">
      <div class="project-cover" style="${p.cover ? `background-image:url('${p.cover}')` : ""}">
        ${p.cover ? "" : `<span class="cover-fallback">📄</span>`}
      </div>
      <div class="project-name">${p.name}</div>
    </div>
  `).join("");

  container.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });
}

function findProject(id) {
  return (PROJECTS.publications || []).find(p => p.id === id)
    || PROJECTS.team.find(p => p.id === id)
    || PROJECTS.personal.find(p => p.id === id);
}

function section(title, contentHtml) {
  if (!contentHtml) return "";
  return `<div class="modal-section"><h3>${title}</h3>${contentHtml}</div>`;
}

function list(items) {
  if (!items || !items.length) return "";
  return `<ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>`;
}

function pubLinks(links) {
  if (!links || !links.length) return "";
  return `<div class="pub-links">${links
    .filter(l => l && l.label && l.href)
    .map(l => `<a class="pub-link" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`)
    .join("")}</div>`;
}

function screenshots(files) {
  if (!files || !files.length) return "";
  return `<div class="shot-row">${files.map(f => `<img class="shot" src="${f}" alt="App screenshot" loading="lazy">`).join("")}</div>`;
}

function openPublicationModal(p) {
  const metaRows = [];
  if (p.date) metaRows.push(`<div class="meta-row"><span class="meta-label">${L("date")}</span><span>${tf(p, "date")}</span></div>`);
  if (p.venueLine) metaRows.push(`<div class="meta-row"><span class="meta-label">${L("venue")}</span><span>${tf(p, "venueLine")}</span></div>`);
  if (p.status) metaRows.push(`<div class="meta-row"><span class="meta-label">${L("status")}</span><span class="status-pill">${tf(p, "status")}</span></div>`);
  if (p.authors && p.authors.length) metaRows.push(`<div class="meta-row"><span class="meta-label">${L("authors")}</span><span>${p.authors.join(", ")}</span></div>`);
  if (p.affiliation) metaRows.push(`<div class="meta-row"><span class="meta-label">${L("affiliation")}</span><span>${tf(p, "affiliation")}</span></div>`);
  if (p.role) metaRows.push(`<div class="meta-row"><span class="meta-label">${L("role")}</span><span>${tf(p, "role")}</span></div>`);
  if (p.doi) metaRows.push(`<div class="meta-row"><span class="meta-label">${L("doi")}</span><span>${p.doi.href ? `<a href="${p.doi.href}" target="_blank" rel="noopener">${p.doi.label}</a>` : p.doi.label}</span></div>`);

  const impact = p.impact ? `<div class="impact-badge">✅ ${tf(p, "impact")}</div>` : "";

  const html = `
    <div class="modal-cover" style="${p.cover ? `background-image:url('${p.cover}')` : ""}"></div>
    <div class="modal-body">
      <h2>${p.name}</h2>
      ${impact}
      <div class="meta-block">${metaRows.join("")}</div>
      ${section(L("abstract"), p.abstract ? `<p>${tf(p, "abstract")}</p>` : "")}
      ${section(L("contributions"), list(tf(p, "keyPoints")))}
      ${section(L("method"), p.method ? `<p>${tf(p, "method")}</p>` : "")}
      ${section(L("findings"), list(tf(p, "findings")))}
      ${section(L("learned"), list(tf(p, "learned")))}
      ${section(L("keywords"), p.keywords && p.keywords.length ? `<p>${p.keywords.join(" · ")}</p>` : "")}
      ${section(L("figures"), screenshots(p.screenshotFiles))}
      ${section(L("links"), pubLinks(p.links))}
      ${p.note ? `<div class="pub-note">ℹ️ ${tf(p, "note")}</div>` : ""}
    </div>
  `;

  document.getElementById("modal-inner").innerHTML = html;
  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function openModal(id) {
  const p = findProject(id);
  if (!p) return;
  currentModalId = id;

  if (p.kind === "publication") {
    openPublicationModal(p);
    return;
  }

  const metaRows = [];
  if (p.created) metaRows.push(`<div class="meta-row"><span class="meta-label">${L("created")}</span><span>${p.created}</span></div>`);
  if (p.tags && p.tags.length) metaRows.push(`<div class="meta-row"><span class="meta-label">${L("stack")}</span><span class="tag-list">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</span></div>`);
  if (p.status) metaRows.push(`<div class="meta-row"><span class="meta-label">${L("status")}</span><span class="status-pill">${tf(p, "status")}</span></div>`);
  if (p.url) metaRows.push(`<div class="meta-row"><span class="meta-label">${L("url")}</span><span>${p.url.href ? `<a href="${p.url.href}" target="_blank" rel="noopener">${tUrlLabel(p)}</a>` : (tUrlLabel(p) || L("private"))}</span></div>`);

  const blurb = tAppBlurb(p);
  const appBlurbHtml = blurb ? `
    <div class="app-blurb">
      <div class="app-blurb-title">${L("appLinkPrefix")}${blurb.title}</div>
      <div class="app-blurb-body">${blurb.body}</div>
    </div>` : "";

  const impact = p.impact ? `<div class="impact-badge">✅ ${tf(p, "impact")}</div>` : "";

  const html = `
    <div class="modal-cover" style="${p.cover ? `background-image:url('${p.cover}')` : ""}"></div>
    <div class="modal-body">
      <h2>${p.name}</h2>
      ${impact}
      <div class="meta-block">${metaRows.join("")}</div>
      ${appBlurbHtml}
      ${section(L("topic"), list(tf(p, "topic")))}
      ${section(L("summary"), p.summary ? `<p>${tf(p, "summary")}</p>` : "")}
      ${section(L("keyFunction"), list(tf(p, "keyFunction")))}
      ${section(L("techStack"), p.techStack ? `<p>${p.techStack}</p>` : "")}
      ${section(L("team"), list(tf(p, "team")))}
      ${section(L("part"), list(tf(p, "part")))}
      ${section(L("learned"), list(tf(p, "learned")))}
      ${section(L("screenshots"), screenshots(p.screenshotFiles))}
    </div>
  `;

  document.getElementById("modal-inner").innerHTML = html;
  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
  currentModalId = null;
}

document.getElementById("modal-overlay").addEventListener("click", (e) => {
  if (e.target.id === "modal-overlay") closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

applyStaticLang();
renderCards(PROJECTS.publications || [], "publications");
renderCards(PROJECTS.team, "team-projects");
renderCards(PROJECTS.personal, "personal-projects");
