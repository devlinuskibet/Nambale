import './style.css';

// Import Pages
import renderHome from './pages/Home.js';
import renderAcademics from './pages/Academics.js';
import renderAdmissionFees from './pages/AdmissionFees.js';
import renderParticipate from './pages/Participate.js';

const appContent = document.getElementById('app-content');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinksContainer = document.getElementById('nav-links');

const routes = {
  'home': renderHome,
  'academics': renderAcademics,
  'admission_fees': renderAdmissionFees,
  'participate': renderParticipate,
};

let heroSliderInterval;

function initHeroSlider() {
  const heroSection = document.querySelector('.hero');
  if (!heroSection) return;

  const images = [
    '/images/home/background-change.webp',
    '/images/home/background-change (2).webp',
    '/images/home/background-change (3).webp',
    '/images/home/background-change (4).webp',
    '/images/home/background-change (5).webp',
    '/images/home/background-change (6).webp'
  ];
  
  heroSection.style.transition = 'background-image 1s ease-in-out';
  heroSection.style.backgroundImage = `linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('${images[0]}')`;
  let currentIndex = 0;
  if (heroSliderInterval) clearInterval(heroSliderInterval);

  heroSliderInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroSection.style.backgroundImage = `linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('${images[currentIndex]}')`;
  }, 4000);
}

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (counters.length === 0) return;

  const animateCounter = (counter, duration) => {
    return new Promise(resolve => {
      counter.innerText = '0';
      const target = +counter.getAttribute('data-target');
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        const easeOutQuad = t => t * (2 - t);
        
        const currentVal = Math.floor(target * easeOutQuad(progress));
        counter.innerText = currentVal;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
          resolve();
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  const runSequence = async () => {
    for (let i = 0; i < counters.length; i++) {
      await animateCounter(counters[i], 600); 
    }
  };

  runSequence();
}

function handleRoute() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const renderFn = routes[hash] || routes['home'];

  if (heroSliderInterval) {
    clearInterval(heroSliderInterval);
    heroSliderInterval = null;
  }

  // Add fade-out effect
  appContent.classList.add('fade-out');

  setTimeout(() => {
    // Update active nav link
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.dataset.path === hash || (hash === '' && link.dataset.path === 'home')) {
        link.classList.add('active');
      }
    });

    // Render new content
    appContent.innerHTML = renderFn();

    // Init counters if on home page
    if (hash === 'home' || hash === '') {
      initCounters();
      initHeroSlider();
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Remove fade-out effect for fade-in
    appContent.classList.remove('fade-out');
  }, 300);
}

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
  navLinksContainer.classList.toggle('show');
});

// Close mobile menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('show');
  });
});

// Listen to hash changes
window.addEventListener('hashchange', handleRoute);

// Initial route handling
window.addEventListener('load', handleRoute);
