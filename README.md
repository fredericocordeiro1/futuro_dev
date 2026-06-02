<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Futuro Dev</title>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: #e5e7eb;
}

/* LIGHT MODE */
.light {
  background: #f8fafc;
  color: #0f172a;
}

header {
  text-align: center;
  padding: 40px 20px;
  background: #111827;
}

.light header {
  background: #e2e8f0;
}

h1 {
  margin: 0;
  font-size: 2.2rem;
}

p {
  color: #94a3b8;
}

/* BUTTON */
button {
  margin-top: 15px;
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #38bdf8;
  color: #0f172a;
  font-weight: bold;
}

/* CONTAINER */
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

section {
  margin: 30px 0;
}

.card {
  background: #1e293b;
  padding: 15px;
  border-radius: 10px;
  margin-top: 10px;
}

.light .card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 20px;
  color: #64748b;
}
</style>
</head>

<body>

<header>
  <h1>🚀 Futuro Dev</h1>
  <p>Projeto de aprendizado em desenvolvimento</p>

  <button onclick="toggleTheme()">Alternar tema</button>
</header>

<div class="container">

  <section>
    <h2>Sobre</h2>
    <div class="card">
      Repositório dedicado a estudos, prática de programação e evolução contínua como desenvolvedor.
    </div>
  </section>

  <section>
    <h2>Tecnologias</h2>
    <div class="card">
      HTML, CSS, JavaScript e GitHub
    </div>
  </section>

  <section>
    <h2>Objetivo</h2>
    <div class="card">
      Construir consistência e evolução prática no desenvolvimento de software.
    </div>
  </section>

</div>

<footer>
  Feito por Frederico Cordeiro
</footer>

<script>
function toggleTheme() {
  document.body.classList.toggle("light");
}
</script>

</body>
</html>