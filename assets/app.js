const DATA_URL = "data/episodes.json";

async function loadEpisodes() {
  const response = await fetch(DATA_URL);
  if (!response.ok) throw new Error(`Impossible de charger ${DATA_URL}`);
  const episodes = await response.json();
  return episodes.sort((a, b) => {
    const ay = a.year_start ?? Number.MAX_SAFE_INTEGER;
    const by = b.year_start ?? Number.MAX_SAFE_INTEGER;
    return ay - by || a.title.localeCompare(b.title, "fr");
  });
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function names(episode) {
  return (episode.mathematicians || []).map(person => person.name).join(", ");
}

function episodeUrl(episode) {
  return `episode.html?slug=${encodeURIComponent(episode.slug)}`;
}

function card(episode) {
  return `
    <article class="episode-card">
      <p class="date">${escapeHtml(episode.date_display)}</p>
      <h3><a href="${episodeUrl(episode)}">${escapeHtml(episode.title)}</a></h3>
      <p class="summary">${escapeHtml(episode.summary)}</p>
      <footer class="card-footer">
        <p class="meta-line">
          ${escapeHtml(names(episode))} · ${escapeHtml(episode.domain_primary)} · ${escapeHtml(episode.level)}
        </p>
      </footer>
    </article>`;
}

function renderHome(episodes) {
  const featured = document.querySelector("#featured-episodes");
  featured.innerHTML = episodes.slice(0, 3).map(card).join("");

  const people = new Set(
    episodes.flatMap(episode => (episode.mathematicians || []).map(person => person.id))
  );
  const knownYears = episodes
    .flatMap(episode => [episode.year_start, episode.year_end])
    .filter(year => Number.isInteger(year));
  const period = knownYears.length
    ? `${Math.min(...knownYears)}–${Math.max(...knownYears)}`
    : "—";

  const stats = document.querySelector("#site-stats");
  stats.innerHTML = `
    <div><dt>Épisodes</dt><dd>${episodes.length}</dd></div>
    <div><dt>Mathématiciens</dt><dd>${people.size}</dd></div>
    <div><dt>Période</dt><dd>${period}</dd></div>`;
}

function timelineItem(episode) {
  return `
    <article class="timeline-item">
      <div class="timeline-date">${escapeHtml(episode.date_display)}</div>
      <div class="timeline-content">
        <h2><a href="${episodeUrl(episode)}">${escapeHtml(episode.title)}</a></h2>
        <p class="summary">${escapeHtml(episode.summary)}</p>
        <p class="meta-line">
          ${escapeHtml(names(episode))} · ${escapeHtml(episode.domain_primary)} · ${escapeHtml(episode.level)}
        </p>
      </div>
    </article>`;
}

function renderTimeline(episodes) {
  const domainSelect = document.querySelector("#domain-filter");
  const levelSelect = document.querySelector("#level-filter");
  const searchInput = document.querySelector("#search-input");
  const list = document.querySelector("#timeline-list");
  const count = document.querySelector("#result-count");

  [...new Set(episodes.map(e => e.domain_primary).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "fr"))
    .forEach(domain => {
      domainSelect.insertAdjacentHTML(
        "beforeend",
        `<option value="${escapeHtml(domain)}">${escapeHtml(domain)}</option>`
      );
    });

  [...new Set(episodes.map(e => e.level).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "fr"))
    .forEach(level => {
      levelSelect.insertAdjacentHTML(
        "beforeend",
        `<option value="${escapeHtml(level)}">${escapeHtml(level)}</option>`
      );
    });

  const update = () => {
    const query = searchInput.value.trim().toLocaleLowerCase("fr");
    const domain = domainSelect.value;
    const level = levelSelect.value;

    const filtered = episodes.filter(episode => {
      const haystack = [
        episode.title,
        episode.summary,
        names(episode),
        episode.domain_primary,
        episode.domain_secondary,
        ...(episode.theme_tags || [])
      ].filter(Boolean).join(" ").toLocaleLowerCase("fr");

      return (!query || haystack.includes(query))
        && (!domain || episode.domain_primary === domain)
        && (!level || episode.level === level);
    });

    count.textContent = `${filtered.length} épisode${filtered.length > 1 ? "s" : ""}`;
    list.innerHTML = filtered.length
      ? filtered.map(timelineItem).join("")
      : `<div class="empty-state">Aucun épisode ne correspond à ces filtres.</div>`;
  };

  [searchInput, domainSelect, levelSelect].forEach(element => {
    element.addEventListener("input", update);
    element.addEventListener("change", update);
  });

  update();
}

function buildToc(body) {
  const headings = [...body.querySelectorAll("h2")];
  headings.forEach((heading, index) => {
    if (!heading.id) heading.id = `section-${index + 1}`;
  });
  return headings.map(heading =>
    `<li><a href="#${escapeHtml(heading.id)}">${escapeHtml(heading.textContent)}</a></li>`
  ).join("");
}

function relationList(ids, byId) {
  if (!ids || ids.length === 0) return "<p>Aucune relation renseignée.</p>";
  return `<ul>${ids.map(id => {
    const episode = byId.get(id);
    if (!episode) return `<li><code>${escapeHtml(id)}</code></li>`;
    return `<li><a href="${episodeUrl(episode)}">${escapeHtml(episode.title)}</a></li>`;
  }).join("")}</ul>`;
}

function renderEpisode(episodes) {
  const root = document.querySelector("#episode-root");
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const episode = episodes.find(item => item.slug === slug);

  if (!episode) {
    root.innerHTML = `
      <div class="shell page">
        <div class="error-state">
          <h1>Épisode introuvable</h1>
          <p>Vérifie l’adresse ou retourne à la chronologie.</p>
          <p><a href="timeline.html">Ouvrir la chronologie</a></p>
        </div>
      </div>`;
    return;
  }

  document.title = `${episode.title} — Épisodes mathématiques`;
  const byId = new Map(episodes.map(item => [item.id, item]));
  const index = episodes.findIndex(item => item.id === episode.id);
  const previous = index > 0 ? episodes[index - 1] : null;
  const next = index < episodes.length - 1 ? episodes[index + 1] : null;

  root.innerHTML = `
    <article>
      <header class="episode-header">
        <div class="shell episode-header-inner">
          <p class="breadcrumbs"><a href="timeline.html">Chronologie</a> / ${escapeHtml(episode.date_display)}</p>
          <p class="episode-kicker">${escapeHtml(names(episode))}</p>
          <h1>${escapeHtml(episode.title)}</h1>
          <p class="episode-deck">${escapeHtml(episode.summary)}</p>
          <div class="meta-chips">
            <span class="chip">${escapeHtml(episode.date_display)}</span>
            <span class="chip">${escapeHtml(episode.domain_primary)}</span>
            ${episode.domain_secondary ? `<span class="chip">${escapeHtml(episode.domain_secondary)}</span>` : ""}
            <span class="chip">${escapeHtml(episode.level)}</span>
          </div>
        </div>
      </header>

      <div class="shell episode-layout">
        <div class="episode-body" id="episode-body">${episode.body_html}</div>
        <aside class="episode-sidebar" aria-label="Sommaire">
          <h2>Dans cet épisode</h2>
          <ul id="episode-toc"></ul>
        </aside>
      </div>

      <section class="relations">
        <div class="shell">
          <p class="eyebrow">Réseau conceptuel</p>
          <h2>Relations avec les autres épisodes</h2>
          <div class="relation-grid">
            <div class="relation-box"><h3>Dépend de</h3>${relationList(episode.dependencies, byId)}</div>
            <div class="relation-box"><h3>Prépare</h3>${relationList(episode.descendants, byId)}</div>
            <div class="relation-box"><h3>Épisodes liés</h3>${relationList(episode.related_episodes, byId)}</div>
          </div>

          <nav class="episode-nav" aria-label="Épisodes précédent et suivant">
            ${previous ? `<a href="${episodeUrl(previous)}"><small>Épisode précédent</small>${escapeHtml(previous.title)}</a>` : "<span></span>"}
            ${next ? `<a href="${episodeUrl(next)}"><small>Épisode suivant</small>${escapeHtml(next.title)}</a>` : "<span></span>"}
          </nav>
        </div>
      </section>
    </article>`;

  const body = document.querySelector("#episode-body");
  document.querySelector("#episode-toc").innerHTML = buildToc(body);

  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise([body]).catch(console.error);
  }
}

async function main() {
  try {
    const episodes = await loadEpisodes();
    const page = document.body.dataset.page;

    if (page === "home") renderHome(episodes);
    if (page === "timeline") renderTimeline(episodes);
    if (page === "episode") renderEpisode(episodes);
  } catch (error) {
    console.error(error);
    document.querySelectorAll(".loading").forEach(node => {
      node.textContent = "Le contenu n’a pas pu être chargé. Lance le site avec un serveur local.";
    });
  }
}

document.addEventListener("DOMContentLoaded", main);
