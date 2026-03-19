// ==================== CONFIGURATION ====================
const API_URL = 'http://localhost:5000/api';

const projects = [
    {
        id: 1,
        title: 'Online Multi-Language Compiler',
        category: 'fullstack',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        description: 'A full-stack IDE allowing users to write, compile, and execute code in multiple languages.',
        features: ['🔴 Multi-language execution', '🔒 Secure code execution', '⚡ Real-time editor', '👥 User authentication'],
        github: 'https://github.com/Shaan098/multi-language-compiler',
        live: 'https://compiler-client-9wha.vercel.app/',
        image: '🖥️',
    },
    {
        id: 2,
        title: 'AR Educational Content Viewer',
        category: 'fullstack',
        tech: ['React', 'Node.js', 'MongoDB', '3D Models', 'AR'],
        description: 'Interactive AR platform for visualizing educational content with 3D model integration.',
        features: ['🎯 3D model rendering', '📍 AR placement', '🎮 Interactive control', '📱 Responsive UI'],
        github: 'https://github.com/Shaan098/ar-viewer',
        image: '🔍',
    },
    {
        id: 3,
        title: 'Appointment Scheduling System',
        category: 'fullstack',
        tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Express'],
        description: 'Complete appointment management system with role-based access control.',
        features: ['🔐 JWT authentication', '👨‍💼 Role-based access', '📅 Scheduling dashboard', '🔔 Notifications'],
        github: 'https://github.com/Shaan098/appointment-system',
        image: '📅',
    },
];

const chatbotReplies = [
    { text: 'Tell me about yourself', response: "I'm a B.Tech CSE student at LPU, passionate about full-stack development. I love building scalable applications and solving problems with code!" },
    { text: 'Your tech stack?', response: 'I work with React, Node.js, Express, MongoDB, and AWS. I\'m proficient in C++, JavaScript, and continuously learning new technologies!' },
    { text: 'Recent projects?', response: 'I\'ve built an Online Multi-Language Compiler, AR Educational Viewer, and Appointment System. All using the MERN stack!' },
    { text: 'Contact info?', response: 'You can reach me at shaansaurav633@gmail.com or +91 6204566381. Connect with me on GitHub and LinkedIn too!' },
];

// ==================== STATE ====================
let isDarkMode = true;
let currentFilter = 'all';
let chatMessages = [
    { type: 'bot', text: '👋 Hi! I\'m Shaan\'s AI assistant. How can I help you today?' }
];

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initScrollProgress();
    initTypingAnimation();
    initProjectFiltering();
    initGitHubStats();
    initChatbot();
    initBackToTop();
    initContactForm();
});

// ==================== THEME TOGGLE ====================
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    isDarkMode = savedTheme === 'dark';
    applyTheme(isDarkMode);
    
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        applyTheme(isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
}

function applyTheme(dark) {
    if (dark) {
        document.body.classList.remove('light-mode');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.add('light-mode');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// ==================== NAVBAR ====================
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    });
}

// ==================== SCROLL PROGRESS ====================
function initScrollProgress() {
    window.addEventListener('scroll', () => {
        const scrollProgress = document.getElementById('scrollProgress');
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

// ==================== TYPING ANIMATION ====================
function initTypingAnimation() {
    const typingElement = document.getElementById('typingText');
    const texts = ['Full Stack Developer', 'Problem Solver', 'CSE Student'];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (!isDeleting && charIndex < currentText.length) {
            typingElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(type, 50);
        } else if (isDeleting && charIndex > 0) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, 30);
        } else if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
        }
    }
    
    type();
}

// ==================== PROJECT FILTERING ====================
function initProjectFiltering() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectsGrid = document.getElementById('projectsGrid');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentFilter = btn.getAttribute('data-filter');
            renderProjects();
        });
    });
    
    renderProjects();
}

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    const filtered = currentFilter === 'all' 
        ? projects 
        : projects.filter(p => p.category === currentFilter);
    
    filtered.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">${project.image}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <ul class="project-features">
                ${project.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <div class="project-tech">
                ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> Code
                </a>
                ${project.live ? `<a href="${project.live}" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i> Live
                </a>` : ''}
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// ==================== GITHUB STATS ====================
async function initGitHubStats() {
    try {
        const response = await fetch('https://api.github.com/users/Shaan098');
        const data = await response.json();
        
        document.getElementById('followers').textContent = data.followers;
        document.getElementById('following').textContent = data.following;
        document.getElementById('repositories').textContent = data.public_repos;
        document.getElementById('contributions').textContent = (data.public_repos * 5) + '+';
        document.getElementById('githubAvatar').src = data.avatar_url;
    } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
    }
}

// ==================== CONTACT FORM ====================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;
        
        try {
            const response = await fetch(`${API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                showFormMessage('Message sent successfully!', 'success');
                form.reset();
            } else {
                showFormMessage('Error sending message. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            showFormMessage('Network error. Please try again later.', 'error');
        }
    });
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 3000);
}

// ==================== CHATBOT ====================
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotInput = document.getElementById('chatbotInput');
    
    // Toggle window
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.toggle('open');
        if (chatbotWindow.classList.contains('open')) {
            renderChatbotMessages();
            renderQuickReplies();
        }
    });
    
    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.remove('open');
    });
    
    // Send message
    chatbotSend.addEventListener('click', sendChatMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
}

function sendChatMessage() {
    const chatbotInput = document.getElementById('chatbotInput');
    const message = chatbotInput.value.trim();
    
    if (!message) return;
    
    // Add user message
    chatMessages.push({ type: 'user', text: message });
    renderChatbotMessages();
    
    // Find bot response
    const reply = chatbotReplies.find(r => 
        r.text.toLowerCase() === message.toLowerCase()
    );
    
    // Add bot response
    setTimeout(() => {
        chatMessages.push({
            type: 'bot',
            text: reply ? reply.response : "That's interesting! Feel free to ask me anything about my skills and projects."
        });
        renderChatbotMessages();
    }, 500);
    
    chatbotInput.value = '';
}

function renderChatbotMessages() {
    const messagesContainer = document.getElementById('chatbotMessages');
    messagesContainer.innerHTML = '';
    
    chatMessages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${msg.type}`;
        messageDiv.innerHTML = `<div class="message-content">${msg.text}</div>`;
        messagesContainer.appendChild(messageDiv);
    });
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function renderQuickReplies() {
    const quickRepliesContainer = document.getElementById('quickReplies');
    
    if (chatMessages.length > 1) {
        quickRepliesContainer.innerHTML = '';
        return;
    }
    
    quickRepliesContainer.innerHTML = '';
    chatbotReplies.forEach(reply => {
        const btn = document.createElement('button');
        btn.className = 'quick-reply';
        btn.textContent = reply.text;
        btn.addEventListener('click', () => {
            document.getElementById('chatbotInput').value = reply.text;
            sendChatMessage();
        });
        quickRepliesContainer.appendChild(btn);
    });
}

// ==================== BACK TO TOP ====================
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== RESUME DOWNLOAD ====================
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadResumeBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = '/myfinalcv.pdf';
            link.download = 'Shaan_Saurav_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});

// ==================== SMOOTH SCROLL FOR HASH LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
