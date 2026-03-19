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
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 1500);

  initTheme();
  initNavbar();
  initScrollEffects();
  initTypewriter();
  initMobileMenu();
  initScrollToLinks();
  initBackToTop();
  initContactForm();
  initAnimationOnScroll();
});

// ==================== THEME TOGGLE ====================
function initTheme() {
  if (!isDarkMode) {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '🌙';
  } else {
    themeToggle.textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
  });
}

// ==================== NAVBAR SCROLL EFFECT ====================
function initNavbar() {
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
  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
  });
}

// ==================== TYPEWRITER EFFECT ====================
const typewriterTexts = [
  'Full Stack Developer',
  'Problem Solver',
  'CSE Student',
  'Tech Enthusiast'
];

let textIndex = 0;
let charIndex = 0;

function type() {
  const text = typewriterTexts[textIndex];
  typewriter.textContent = text.substring(0, charIndex) + '|';
  charIndex++;

  if (charIndex > text.length) {
    setTimeout(() => {
      charIndex = 0;
      textIndex = (textIndex + 1) % typewriterTexts.length;
      typewriter.textContent = '';
      type();
    }, 2000);
  } else {
    setTimeout(type, 50);
  }
}

function initTypewriter() {
  typewriter.textContent = typewriterTexts[0] + '|';
  charIndex = typewriterTexts[0].length;
  setTimeout(() => {
    charIndex = 0;
    textIndex = 1;
    typewriter.textContent = '';
    type();
  }, 2000);
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
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
  formMessage.textContent = msg;
  formMessage.className = 'form-message ' + type;
  
  setTimeout(() => {
    formMessage.className = 'form-message';
  }, 5000);
}

// ==================== ANIMATION ON SCROLL ====================
function initAnimationOnScroll() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = entry.target.dataset.animation || 'fadeInUp 0.6s ease both';
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-animation]').forEach(el => {
    observer.observe(el);
  });
}
