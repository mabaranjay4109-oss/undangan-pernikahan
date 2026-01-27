// === ANIMASI SCROLL FADE-UP ===
const fadeElements = document.querySelectorAll('.fade-up');

function handleFade() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleFade);
window.addEventListener('load', handleFade);


// === ANIMASI BUKA UNDANGAN ===
function openInvitation() {
  const cover = document.querySelector('.cover');
  const opening = document.getElementById('opening');

  cover.classList.add('fade-out');

  setTimeout(() => {
    cover.style.display = 'none';

    opening.scrollIntoView({ behavior: 'smooth' });
    opening.classList.add('active');
  }, 1800);
}