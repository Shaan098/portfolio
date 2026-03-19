// ==================== DOM ELEMENTS ====================
const loadingScreen = document.getElementById('loadingScreen');
const navbar = document.querySelector('.navbar');
const scrollProgress = document.getElementById('scrollProgress');
const navLinks = document.getElementById('navLinks');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const typewriter = document.getElementById('typewriter');

// ==================== STATE ====================
let isDarkMode = localStorage.getItem('theme') !== 'light';

// ==================== INITIALIZATION ====================
// Immediately hide loading screen
document.addEventListener('readystatechange', () => {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.pointerEvents = 'none';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 300);
    }
    initAll();
  }
});

// Also hide on load as backup
window.addEventListener('load', () => {
  setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.pointerEvents = 'none';
      loadingScreen.style.display = 'none';
    }
  }, 100);
});

function initAll() {
  try {
    initTheme();
  } catch (e) { console.log('Theme init error:', e); }
  
  try {
    initNavbar();
  } catch (e) { console.log('Navbar init error:', e); }
  
  try {
    initScrollEffects();
  } catch (e) { console.log('Scroll init error:', e); }
  
  try {
    initTypewriter();
  } catch (e) { console.log('Typewriter init error:', e); }
  
  try {
    initMobileMenu();
  } catch (e) { console.log('Mobile menu init error:', e); }
  
  try {
    initScrollToLinks();
  } catch (e) { console.log('Scroll to links init error:', e); }
  
  try {
    initBackToTop();
  } catch (e) { console.log('Back to top init error:', e); }
  
  try {
    if (contactForm) initContactForm();
  } catch (e) { console.log('Contact form init error:', e); }
}

// ==================== THEME TOGGLE ====================
function initTheme() {
  if (!themeToggle) return;
  
  if (!isDarkMode) {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '🌙 Dark';
  } else {
    themeToggle.textContent = '☀️ Light';
  }

  themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    themeToggle.textContent = isDarkMode ? '☀️ Light' : '🌙 Dark';
  });
}

// ==================== NAVBAR SCROLL EFFECT ====================
function initNavbar() {
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ==================== SCROLL PROGRESS ====================
function initScrollEffects() {
  if (!scrollProgress) return;
  
  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
  });
}

// ==================== TYPEWRITER EFFECT ====================
function initTypewriter() {
  // Typewriter text already displayed in HTML, no animation needed
  if (!typewriter) return;
  if (!typewriter.textContent) {
    typewriter.textContent = 'Full Stack Developer | Problem Solver | CSE Student';
  }
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
  if (!mobileMenuBtn || !navLinks) return;
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// ==================== SCROLL TO LINKS ====================
function initScrollToLinks() {
  document.querySelectorAll('a[href^=\"#\"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ==================== BACK TO TOP ====================
function initBackToTop() {
  if (!backToTop) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==================== CONTACT FORM ====================
function initContactForm() {
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
      const mailtoLink = \mailto:shaansaurav633@gmail.com?subject=Message from \&body=\\nFrom: \\;
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        showFormMessage('Message sent! Check your email client.', 'success');
        contactForm.reset();
      }, 500);
    } else {
      showFormMessage('Please fill in all fields.', 'error');
    }
  });
}

function showFormMessage(msg, type) {
  const formMessage = document.getElementById('formMessage');
  if (!formMessage) return;
  
  formMessage.textContent = msg;
  formMessage.className = 'form-message ' + type;
  
  setTimeout(() => {
    formMessage.className = 'form-message';
  }, 5000);
}
