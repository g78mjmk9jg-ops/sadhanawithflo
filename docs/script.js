const pages = document.querySelectorAll('.page');

function showPage(name) {
  let found = false;
  pages.forEach(function (p) {
    const match = p.dataset.page === name;
    p.classList.toggle('active', match);
    if (match) found = true;
  });
  if (!found) {
    pages.forEach(function (p) { p.classList.toggle('active', p.dataset.page === 'home'); });
  }
  window.scrollTo(0, 0);
}

function currentHashPage() {
  const hash = location.hash.replace('#', '');
  return hash === '' ? 'home' : hash;
}

window.addEventListener('hashchange', function () {
  showPage(currentHashPage());
});

document.addEventListener('click', function (e) {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const targetHash = link.getAttribute('href').replace('#', '');
  const targetName = targetHash === '' ? 'home' : targetHash;
  if (targetName === currentHashPage()) {
    // same page as current hash: hashchange won't fire, so scroll manually
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

showPage(currentHashPage());

// Carousel functionality
const carouselImg = document.getElementById('carouselImg');
if (carouselImg) {
  const carouselImages = [
    'assets/images/carousel/3b01bf5a-569a-485d-9b3e-bba7e4fe6c7d.jpg',
    'assets/images/carousel/AFC9F46E-C1DE-4226-A801-618EED5170B0_1_105_c.jpeg',
    'assets/images/carousel/IMG_8164.jpeg',
    'assets/images/carousel/WhatsApp Image 2026-08-12 at 15.03.06 (1).jpeg',
    'assets/images/carousel/WhatsApp Image 2026-08-12 at 15.03.06 (2).jpeg',
    'assets/images/carousel/WhatsApp Image 2026-08-12 at 15.03.06 (3).jpeg',
    'assets/images/carousel/WhatsApp Image 2026-08-12 at 15.03.06 (4).jpeg',
    'assets/images/carousel/WhatsApp Image 2026-08-12 at 15.03.06.jpeg'
  ];
  let currentImageIndex = 0;

  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    carouselImg.src = carouselImages[currentImageIndex];
  }, 3000);
}
