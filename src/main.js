import './style.css';

// Import Pages
import renderHome from './pages/Home.js';
import renderAcademics from './pages/Academics.js';
import renderAdmissionFees from './pages/AdmissionFees.js';
import renderParticipate from './pages/Participate.js';
import renderContact from './pages/Contact.js';
import renderGallery from './pages/Gallery.js';

const appContent = document.getElementById('app-content');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinksContainer = document.getElementById('nav-links');

const routes = {
  'home': renderHome,
  'academics': renderAcademics,
  'admission_fees': renderAdmissionFees,
  'participate': renderParticipate,
  'contact': renderContact,
  'gallery': renderGallery,
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

let academicsHeroInterval;
let academicsLifeInterval;
let academicsFacilitiesInterval;

function initAcademicsSliders() {
  const academicsHero = document.getElementById('academics-hero');
  const lifeSlider = document.getElementById('life-learning-slider');
  const facilitiesSlider = document.getElementById('facilities-slider');

  if (!academicsHero) return;

  const heroImages = [
    '/images/academics/Academics & Co-Corricular activities1.webp',
    '/images/academics/Academics & Co-Corricular activities2.webp',
    '/images/academics/Academics & Co-Corricular activities3.webp',
    '/images/academics/Academics & Co-Corricular activities4.webp',
    '/images/academics/Academics & Co-Corricular activities5.webp',
    '/images/academics/Academics & Co-Corricular activities6.webp',
    '/images/academics/Academics & Co-Corricular activities8.webp',
    '/images/academics/Academics & Co-Corricular activities9.webp'
  ];

  const lifeImages = [
    '/images/academics/Life & Learning1.webp',
    '/images/academics/Life & Learning2.webp',
    '/images/academics/Life & Learning3.webp'
  ];

  const facilityImages = [
    '/images/academics/Current Facilities.webp',
    '/images/academics/Current Facilities1.webp',
    '/images/academics/Current Facilities3.webp',
    '/images/academics/Current Facilities4.webp',
    '/images/academics/Current Facilities5.webp',
    '/images/academics/Current Facilities6.webp',
    '/images/academics/Current Facilities7.webp'
  ];

  if (academicsHeroInterval) clearInterval(academicsHeroInterval);
  if (academicsLifeInterval) clearInterval(academicsLifeInterval);
  if (academicsFacilitiesInterval) clearInterval(academicsFacilitiesInterval);

  let heroIdx = 0, lifeIdx = 0, facIdx = 0;

  academicsHeroInterval = setInterval(() => {
    heroIdx = (heroIdx + 1) % heroImages.length;
    academicsHero.style.backgroundImage = `linear-gradient(135deg, rgba(92,6,18,0.7), rgba(45,49,52,0.8)), url('${heroImages[heroIdx]}')`;
  }, 4500);

  academicsLifeInterval = setInterval(() => {
    lifeIdx = (lifeIdx + 1) % lifeImages.length;
    lifeSlider.style.backgroundImage = `url('${lifeImages[lifeIdx]}')`;
  }, 3500);

  academicsFacilitiesInterval = setInterval(() => {
    facIdx = (facIdx + 1) % facilityImages.length;
    facilitiesSlider.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${facilityImages[facIdx]}')`;
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
  if (academicsHeroInterval) clearInterval(academicsHeroInterval);
  if (academicsLifeInterval) clearInterval(academicsLifeInterval);
  if (academicsFacilitiesInterval) clearInterval(academicsFacilitiesInterval);

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
    
    // Init academics sliders
    if (hash === 'academics') {
      initAcademicsSliders();
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

// Close mobile menu on ANY link click inside nav container
const allNavLinks = document.querySelectorAll('#nav-links a');
allNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('show');
  });
});

// Listen to hash changes
window.addEventListener('hashchange', handleRoute);

// Initial route handling
window.addEventListener('load', handleRoute);
