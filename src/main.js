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

function handleRoute() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const renderFn = routes[hash] || routes['home'];

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
