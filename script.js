// Este proyecto no necesita librerías ni conexión a un servidor especial.
// Edita los textos en index.html y las fotos dentro de la carpeta assets/.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const openButton = document.getElementById('openBook');
const coverBook = document.getElementById('coverBook');
const firstChapter = document.getElementById('capitulo-uno');
const letterButton = document.getElementById('letterToggle');
const hiddenLetter = document.getElementById('hiddenLetter');
const envelopeLabel = document.getElementById('envelopeLabel');
const nextButton = document.getElementById('nextChapter');
const nextAnswer = document.getElementById('nextAnswer');
const backgroundMusic = document.getElementById('backgroundMusic');
const musicWidget = document.getElementById('musicWidget');
const musicToggle = document.getElementById('musicToggle');
const musicStatus = document.getElementById('musicStatus');
const musicAction = document.getElementById('musicAction');
const memoryVideo = document.querySelector('.video-shell video');
let resumeMusicAfterVideo = false;

// El navegador sí permite iniciar el audio desde una acción real de la visitante.
// Por eso la canción comienza con el botón «Abrir nuestro libro».
backgroundMusic.volume = 0.32;

function updateMusicControl() {
  const playing = !backgroundMusic.paused;
  musicWidget.classList.toggle('is-playing', playing);
  musicToggle.setAttribute('aria-pressed', String(playing));
  musicToggle.setAttribute('aria-label', playing ? 'Pausar nuestra canción' : 'Reproducir nuestra canción');
  musicStatus.textContent = playing ? 'Sonando para nosotros ♡' : 'Toca para escuchar';
  musicAction.textContent = playing ? 'Ⅱ' : '▶';
}

function playOurSong() {
  const attempt = backgroundMusic.play();
  if (attempt && typeof attempt.catch === 'function') {
    attempt.then(updateMusicControl).catch(updateMusicControl);
  }
  updateMusicControl();
}

backgroundMusic.addEventListener('play', updateMusicControl);
backgroundMusic.addEventListener('pause', updateMusicControl);
backgroundMusic.addEventListener('error', updateMusicControl);

musicToggle.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    if (memoryVideo && !memoryVideo.paused) memoryVideo.pause();
    resumeMusicAfterVideo = false;
    playOurSong();
  } else {
    resumeMusicAfterVideo = false;
    backgroundMusic.pause();
  }
});

memoryVideo?.addEventListener('play', () => {
  resumeMusicAfterVideo = !backgroundMusic.paused;
  if (resumeMusicAfterVideo) backgroundMusic.pause();
});

function resumeSoundtrack() {
  if (!resumeMusicAfterVideo) return;
  resumeMusicAfterVideo = false;
  playOurSong();
}

memoryVideo?.addEventListener('pause', resumeSoundtrack);
memoryVideo?.addEventListener('ended', resumeSoundtrack);

openButton?.addEventListener('click', () => {
  playOurSong();
  coverBook?.classList.add('is-open');
  window.setTimeout(() => {
    firstChapter?.scrollIntoView({ behavior: reduceMotion.matches ? 'instant' : 'smooth' });
  }, reduceMotion.matches ? 0 : 450);
});

letterButton?.addEventListener('click', () => {
  const isOpen = letterButton.getAttribute('aria-expanded') === 'true';
  letterButton.setAttribute('aria-expanded', String(!isOpen));
  hiddenLetter.hidden = isOpen;
  envelopeLabel.textContent = isOpen
    ? 'Toca el sobre para abrir tu carta ↗'
    : 'Tu carta está abierta, mi amor ♡';
  letterButton.setAttribute('aria-label', isOpen ? 'Abrir carta de amor' : 'Cerrar carta de amor');

  if (!isOpen) {
    window.setTimeout(() => {
      hiddenLetter.scrollIntoView({ behavior: reduceMotion.matches ? 'instant' : 'smooth', block: 'start' });
      hiddenLetter.focus({ preventScroll: true });
    }, 180);
  }
});

nextButton?.addEventListener('click', () => {
  const isOpen = nextButton.getAttribute('aria-expanded') === 'true';
  nextButton.setAttribute('aria-expanded', String(!isOpen));
  nextAnswer.hidden = isOpen;
  if (!isOpen) celebrate();
});

if ('IntersectionObserver' in window && !reduceMotion.matches) {
  document.documentElement.classList.add('js');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 25px 0px' });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function celebrate() {
  if (reduceMotion.matches) return;
  const layer = document.getElementById('confettiLayer');
  if (!layer) return;
  const tokens = ['♥', '♡', '✦', '✧', '♥'];
  const colors = ['#e9b2aa', '#f9d49d', '#dba2b9', '#d8c49f', '#a9ced0'];
  for (let i = 0; i < 28; i++) {
    const heart = document.createElement('span');
    heart.className = 'flying-heart';
    heart.textContent = tokens[i % tokens.length];
    heart.style.left = `${Math.random() * 98}%`;
    heart.style.bottom = `${-25 + Math.random() * 65}px`;
    heart.style.color = colors[i % colors.length];
    heart.style.animationDelay = `${Math.random() * .5}s`;
    heart.style.animationDuration = `${2.2 + Math.random() * 1.4}s`;
    layer.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove(), { once: true });
  }
}
