/* ============================================
   FUTURO DEV — Lógica JavaScript
   ============================================ */

/* ---------- Dados ---------- */
const motivationalPhrases = [
  "O código de hoje é a liberdade de amanhã.",
  "Cada bug resolvido é uma versão melhor de você.",
  "Programar é traduzir ideias em realidade digital.",
  "O futuro pertence a quem aprende todos os dias.",
  "Não desista. Compile mais uma vez.",
  "Erros são commits da sua evolução.",
  "Disciplina vence talento quando o talento não estuda.",
  "Você está a uma linha de código de mudar tudo.",
  "Aprender é o melhor framework da vida.",
  "Seja o desenvolvedor que o seu eu do passado precisava."
];

const dailyGoals = [
  "Estudar 1 hora de algoritmos hoje.",
  "Resolver 3 desafios de lógica.",
  "Refatorar um código antigo seu.",
  "Aprender um novo conceito de JavaScript.",
  "Ler a documentação de uma tecnologia nova.",
  "Construir um mini projeto do zero.",
  "Compartilhar conhecimento com alguém.",
  "Praticar CSS criando um layout novo."
];

const famousQuotes = [
  { text: "A melhor maneira de prever o futuro é inventá-lo.", author: "Alan Kay" },
  { text: "Qualquer tecnologia suficientemente avançada é indistinguível de magia.", author: "Arthur C. Clarke" },
  { text: "Primeiro resolva o problema. Depois escreva o código.", author: "John Johnson" },
  { text: "A simplicidade é o último grau de sofisticação.", author: "Leonardo da Vinci" },
  { text: "Programar é a arte de dizer a um computador o que fazer.", author: "Donald Knuth" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "A inovação distingue um líder de um seguidor.", author: "Steve Jobs" }
];

/* ---------- Loader inicial ---------- */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 900);
  initParticles();
  animateProgressBars();
  animateCounters();
  revealOnScroll();
});

/* ---------- Data e hora ---------- */
function updateDateTime() {
  const now = new Date();
  const dateOpts = { day: '2-digit', month: 'long', year: 'numeric' };
  const weekday = now.toLocaleDateString('pt-BR', { weekday: 'long' });
  document.getElementById('current-date').textContent =
    now.toLocaleDateString('pt-BR', dateOpts);
  document.getElementById('weekday').textContent =
    weekday.charAt(0).toUpperCase() + weekday.slice(1);
  document.getElementById('current-time').textContent =
    now.toLocaleTimeString('pt-BR');
}
setInterval(updateDateTime, 1000);
updateDateTime();

/* Ano atual no footer */
document.getElementById('current-year').textContent = new Date().getFullYear();

/* ---------- Frases motivacionais ---------- */
const phraseEl = document.getElementById('motivational-phrase');
function setRandomPhrase() {
  const next = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
  phraseEl.classList.add('fade');
  setTimeout(() => {
    phraseEl.textContent = next;
    phraseEl.classList.remove('fade');
  }, 380);
}
document.getElementById('new-phrase-btn').addEventListener('click', setRandomPhrase);
document.getElementById('motivate-btn').addEventListener('click', () => {
  setRandomPhrase();
  document.getElementById('frases').scrollIntoView({ behavior: 'smooth' });
});
setRandomPhrase();
/* Rotação automática */
setInterval(setRandomPhrase, 9000);

/* ---------- Meta do dia ---------- */
function setDailyGoal() {
  const goal = dailyGoals[Math.floor(Math.random() * dailyGoals.length)];
  document.getElementById('daily-goal').textContent = goal;
}
setDailyGoal();

/* ---------- Citação inspiradora ---------- */
const quoteEl = document.getElementById('famous-quote');
function rotateFamousQuote() {
  const q = famousQuotes[Math.floor(Math.random() * famousQuotes.length)];
  quoteEl.innerHTML = `
    <p class="quote-text">"${q.text}"</p>
    <footer>— <cite>${q.author}</cite></footer>`;
}
rotateFamousQuote();
setInterval(rotateFamousQuote, 11000);

/* ---------- Contador de visitas (localStorage) ---------- */
(function visitCounter() {
  let count = parseInt(localStorage.getItem('futuroDevVisits') || '0', 10);
  count++;
  localStorage.setItem('futuroDevVisits', count);
  document.getElementById('visit-counter').textContent = count;
  document.getElementById('visit-counter').dataset.count = count;
})();

/* ---------- Barras de progresso animadas ---------- */
function animateProgressBars() {
  document.querySelectorAll('.bar-fill').forEach(bar => {
    const target = bar.dataset.progress;
    setTimeout(() => { bar.style.width = target + '%'; }, 400);
  });
}

/* ---------- Contadores animados ---------- */
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.count || el.textContent, 10);
    if (isNaN(target)) return;
    let cur = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const tick = () => {
      cur += step;
      if (cur >= target) { el.textContent = target; return; }
      el.textContent = cur;
      requestAnimationFrame(tick);
    };
    tick();
  });
}

/* ---------- Reveal on scroll ---------- */
function revealOnScroll() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ---------- Botão voltar ao topo ---------- */
const backTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 400);
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------- Tema claro/escuro ---------- */
const themeBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('futuroDevTheme');
if (savedTheme === 'light') {
  document.body.classList.replace('dark-theme', 'light-theme');
  themeBtn.querySelector('i').className = 'fa-solid fa-sun';
}
themeBtn.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme', !isLight);
  themeBtn.querySelector('i').className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  localStorage.setItem('futuroDevTheme', isLight ? 'light' : 'dark');
});

/* ---------- Música ambiente ---------- */
const audio = document.getElementById('ambient-audio');
const audioBtn = document.getElementById('audio-toggle');

audio.volume = 0.12;
audioBtn.addEventListener('click', async () => {
  try {
    if (audio.paused) {
      audio.volume = 0.12;
      await audio.play();
      audioBtn.querySelector('i').className = 'fa-solid fa-volume-high';
    } else {
      audio.pause();
      audioBtn.querySelector('i').className = 'fa-solid fa-volume-xmark';
    }
  } catch (err) {
    console.error('Erro ao reproduzir áudio:', err);
  }
});

/* ---------- Partículas animadas (canvas) ---------- */
function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let w, h, particles;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const colors = ['#00ffff', '#00b3ff', '#b400ff', '#ff00d4'];
  particles = Array.from({ length: 70 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2 + 1,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    c: colors[Math.floor(Math.random() * colors.length)]
  }));

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.shadowColor = p.c;
      ctx.shadowBlur = 12;
      ctx.fill();
    });
    // Linhas de conexão
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,255,255,${1 - dist/120})`;
          ctx.lineWidth = 0.4;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}
