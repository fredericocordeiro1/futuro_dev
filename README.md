<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Futuro Dev</title>

<style>
:root {
  --bg: #0b0f17;
  --card: #111827;
  --text: #e5e7eb;
  --muted: #9ca3af;
  --accent: #38bdf8;
  --border: rgba(255,255,255,0.06);
}

.light {
  --bg: #f8fafc;
  --card: #ffffff;
  --text: #0f172a;
  --muted: #475569;
  --accent: #0284c7;
  --border: rgba(0,0,0,0.08);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial;
  background: var(--bg);
  color: var(--text);
  transition: 0.3s ease;
}

/* TOP BAR */
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
}

.logo {
  font-weight: 700;
  letter-spacing: -0.5px;
}

.actions button {
  background: var(--card);
  border: 1px solid var(--border);
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
  color: var(--text);
}

/* HERO */
.hero {
  text-align: center;
  padding: 80px 20px 40px;
}

.hero h1 {
  font-size: 3rem;
  letter-spacing: -1px;
}

.hero p {
  margin-top: 10px;
  color: var(--muted);
}

/* CTA */
.cta {
  margin-top: 20px;
}

.cta a {
  display: inline-block;
  padding: 10px 14px;
  border-radius: 10px;
  background: var(--accent);
  color: white;
  text-decoration: none;
  font-weight: 600;
}

/* CONTAINER */
.container {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

/* SECTIONS */
section {
  margin: 70px 0;
  opacity: 0;
  transform: translateY(12px);
  transition: 0.6s ease;
}

.show {
  opacity: 1;
  transform: translateY(0);
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--muted);
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* CARDS */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 15px;
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  padding: 18px;
  border-radius: 14px;
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-3px);
}

/* PROJECT CARD */
.project-title {
  font-weight: 600;
  margin-bottom: 6px;
}

.project-desc {
  color: var(--muted);
  font-size: 0.9rem;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 40px;
  color: var(--muted);
  font-size: 0.9rem;
}

/* MOBILE */
@media (max-width: 600px) {
  .hero h1 {
    font-size: 2.2rem;
  }

  .topbar {
    padding: 15px;
  }
}
</style>
</head>

<body>

<!-- TOP -->
<div class="topbar">
  <div class="logo">Futuro Dev</div>
  <div class="actions">
    <button onclick="toggleTheme()">theme</button>
  </div>
</div>

<!-- HERO -->
<div class="hero">
  <h1>construindo consistência.</h1>
  <p>um ambiente de evolução contínua em desenvolvimento de software</p>

  <div class="cta">
    <a href="https://github.com/fredericocordeiro1/futuro_dev" target="_blank">
      ver repositório
    </a>
  </div>
</div>

<div class="container">

  <!-- ABOUT -->
  <section>
    <h2>sobre</h2>
    <div class="card">
      não é um projeto final. é um sistema em construção contínua de habilidades, lógica e execução.
    </div>
  </section>

  <!-- STACK -->
  <section>
    <h2>stack</h2>
    <div class="grid">
      <div class="card">JavaScript</div>
      <div class="card">Node.js</div>
      <div class="card">HTML / CSS</div>
      <div class="card">Git</div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section>
    <h2>projetos</h2>
    <div class="grid">

      <div class="card">
        <div class="project-title">futuro dev core</div>
        <div class="project-desc">estrutura base do ecossistema de estudos.</div>
      </div>

      <div class="card">
        <div class="project-title">experimentos ui</div>
        <div class="project-desc">testes de interface, interação e animação.</div>
      </div>

      <div class="card">
        <div class="project-title">builds rápidos</div>
        <div class="project-desc">protótipos e ideias em validação.</div>
      </div>

    </div>
  </section>

</div>

<footer>
  feito por Frederico Cordeiro • futuro dev
</footer>

<script>

// THEME
function toggleTheme() {
  document.body.classList.toggle("light");
}

// SIMPLE REVEAL (safe version)
const sections = document.querySelectorAll("section");

function reveal() {
  const trigger = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) {
      sec.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

</script>

</body>
</html>