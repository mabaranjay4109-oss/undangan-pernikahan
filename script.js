// Semua elemen dengan class fade-up
const fadeElements = document.querySelectorAll('.fade-up');

function handleFade() {
  const triggerBottom = window.innerHeight / 5 * 4;

  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if(top < triggerBottom) {
      el.classList.add('active');
      el.classList.remove('fade-out');
    } else {
      el.classList.remove('active');
      el.classList.add('fade-out');
    }
  });
}

// Event scroll & load
window.addEventListener('scroll', handleFade);
window.addEventListener('load', handleFade);

// Animasi cover saat buka undangan
function openInvitation() {
  const cover = document.querySelector('.cover');
  cover.classList.add('fade-out');
  cover.classList.remove('active');

  // Delay sebelum benar-benar disembunyikan agar animasi terlihat
  setTimeout(() => {
    cover.style.display = 'none';
  }, 2000); // sama dengan duration fade
}