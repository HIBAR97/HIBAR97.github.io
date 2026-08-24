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
  if (p.date) metaRows.push(`<div class="meta-row"><span class="meta-label">📅 Date</span><span>${p.date}</span></div>`);
  if (p.venueLine) metaRows.push(`<div class="meta-row"><span class="meta-label">🏛 Venue</span><span>${p.venueLine}</span></div>`);
  if (p.status) metaRows.push(`<div class="meta-row"><span class="meta-label">⚙️ Status</span><span class="status-pill">${p.status}</span></div>`);
  if (p.authors && p.authors.length) metaRows.push(`<div class="meta-row"><span class="meta-label">🧑🏻‍💻 Authors</span><span>${p.authors.join(", ")}</span></div>`);
  if (p.affiliation) metaRows.push(`<div class="meta-row"><span class="meta-label">🏫 Affiliation</span><span>${p.affiliation}</span></div>`);
  if (p.role) metaRows.push(`<div class="meta-row"><span class="meta-label">🤚🏻 Role</span><span>${p.role}</span></div>`);
  if (p.doi) metaRows.push(`<div class="meta-row"><span class="meta-label">🔗 DOI</span><span>${p.doi.href ? `<a href="${p.doi.href}" target="_blank" rel="noopener">${p.doi.label}</a>` : p.doi.label}</span></div>`);

  const impact = p.impact ? `<div class="impact-badge">✅ ${p.impact}</div>` : "";

  const html = `
    <div class="modal-cover" style="${p.cover ? `background-image:url('${p.cover}')` : ""}"></div>
    <div class="modal-body">
      <h2>${p.name}</h2>
      ${impact}
      <div class="meta-block">${metaRows.join("")}</div>
      ${section("📝 Abstract", p.abstract ? `<p>${p.abstract}</p>` : "")}
      ${section("⭐️ Contributions", list(p.keyPoints))}
      ${section("🔧 Method", p.method ? `<p>${p.method}</p>` : "")}
      ${section("📊 Findings", list(p.findings))}
      ${section("🤔 Learned", list(p.learned))}
      ${section("🏷 Keywords", p.keywords && p.keywords.length ? `<p>${p.keywords.join(" · ")}</p>` : "")}
      ${section("📷 Figures", screenshots(p.screenshotFiles))}
      ${section("🔗 Links", pubLinks(p.links))}
      ${p.note ? `<div class="pub-note">ℹ️ ${p.note}</div>` : ""}
    </div>
  `;

  document.getElementById("modal-inner").innerHTML = html;
  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function openModal(id) {
  const p = findProject(id);
  if (!p) return;

  if (p.kind === "publication") {
    openPublicationModal(p);
    return;
  }

  const metaRows = [];
  if (p.created) metaRows.push(`<div class="meta-row"><span class="meta-label">📅 Created</span><span>${p.created}</span></div>`);
  if (p.tags && p.tags.length) metaRows.push(`<div class="meta-row"><span class="meta-label">📋 Stack</span><span class="tag-list">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</span></div>`);
  if (p.status) metaRows.push(`<div class="meta-row"><span class="meta-label">⚙️ Status</span><span class="status-pill">${p.status}</span></div>`);
  if (p.url) metaRows.push(`<div class="meta-row"><span class="meta-label">🔗 URL</span><span>${p.url.href ? `<a href="${p.url.href}" target="_blank" rel="noopener">${p.url.label}</a>` : (p.url.label || "Private")}</span></div>`);

  const appBlurb = p.appBlurb ? `
    <div class="app-blurb">
      <div class="app-blurb-title">🔗 ${p.appBlurb.title}</div>
      <div class="app-blurb-body">${p.appBlurb.body}</div>
    </div>` : "";

  const impact = p.impact ? `<div class="impact-badge">✅ ${p.impact}</div>` : "";

  const html = `
    <div class="modal-cover" style="${p.cover ? `background-image:url('${p.cover}')` : ""}"></div>
    <div class="modal-body">
      <h2>${p.name}</h2>
      ${impact}
      <div class="meta-block">${metaRows.join("")}</div>
      ${appBlurb}
      ${section("💡 Topic", list(p.topic))}
      ${section("📝 Summary", p.summary ? `<p>${p.summary}</p>` : "")}
      ${section("⭐️ Key Function", list(p.keyFunction))}
      ${section("🛠 Tech Stack", p.techStack ? `<p>${p.techStack}</p>` : "")}
      ${section("🧑🏻‍💻 Team", list(p.team))}
      ${section("🤚🏻 My Role", list(p.part))}
      ${section("🤔 Learned", list(p.learned))}
      ${section("📷 Screenshots", screenshots(p.screenshotFiles))}
    </div>
  `;

  document.getElementById("modal-inner").innerHTML = html;
  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modal-overlay").addEventListener("click", (e) => {
  if (e.target.id === "modal-overlay") closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

renderCards(PROJECTS.publications || [], "publications");
renderCards(PROJECTS.team, "team-projects");
renderCards(PROJECTS.personal, "personal-projects");
