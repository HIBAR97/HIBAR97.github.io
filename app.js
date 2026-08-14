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
  return PROJECTS.team.find(p => p.id === id) || PROJECTS.personal.find(p => p.id === id);
}

function section(title, contentHtml) {
  if (!contentHtml) return "";
  return `<div class="modal-section"><h3>${title}</h3>${contentHtml}</div>`;
}

function list(items) {
  if (!items || !items.length) return "";
  return `<ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>`;
}

function openModal(id) {
  const p = findProject(id);
  if (!p) return;

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

  const html = `
    <div class="modal-cover" style="${p.cover ? `background-image:url('${p.cover}')` : ""}"></div>
    <div class="modal-body">
      <h2>${p.name}</h2>
      <div class="meta-block">${metaRows.join("")}</div>
      ${appBlurb}
      ${section("💡 Topic", list(p.topic))}
      ${section("📝 Summary", p.summary ? `<p>${p.summary}</p>` : "")}
      ${section("⭐️ Key Function", list(p.keyFunction))}
      ${section("🛠 Tech Stack", p.techStack ? `<p>${p.techStack}</p>` : "")}
      ${section("🧑🏻‍💻 Team", list(p.team))}
      ${section("🤚🏻 My Role", list(p.part))}
      ${section("🤔 Learned", list(p.learned))}
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

renderCards(PROJECTS.team, "team-projects");
renderCards(PROJECTS.personal, "personal-projects");
