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
    'assets/images/carousel/1.jpeg',
    'assets/images/carousel/2.jpeg',
    'assets/images/carousel/3.jpeg',
    'assets/images/carousel/4.jpeg',
    'assets/images/carousel/5.jpg'
  ];
  let currentImageIndex = 0;

  setInterval(() => {
    carouselImg.style.opacity = '0';
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
      carouselImg.src = carouselImages[currentImageIndex];
      carouselImg.style.opacity = '1';
    }, 500);
  }, 5000);
}
