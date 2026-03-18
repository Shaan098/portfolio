# Component Documentation

## Available Components

### Layout Components

#### Navbar
Responsive navigation bar with theme toggle
- **Location**: `src/components/Navbar.jsx`
- **Props**: `isDark`, `setIsDark`
- **Features**: Mobile menu, smooth scrolling, theme toggle

#### ScrollProgress
Visual scroll progress bar at the top
- **Location**: `src/components/ScrollProgress.jsx`
- **Features**: Smooth animation, gradient background

#### BackToTop
Floating button to scroll to top
- **Location**: `src/components/BackToTop.jsx`
- **Features**: Shows on scroll, smooth animation

#### LoadingScreen
Beautiful loading animation
- **Location**: `src/components/LoadingScreen.jsx`
- **Features**: Animated spinner, gradient background

### Section Components

#### Hero
Main hero section with typing animation
- **Location**: `src/components/Hero.jsx`
- **Features**: 
  - Typing animation
  - CTA buttons
  - Social links
  - Scroll indicator

#### About
Professional about section
- **Location**: `src/components/About.jsx`
- **Features**:
  - Professional summary
  - Tech stack showcase
  - Quick stats

#### Skills
Skills showcase with categories
- **Location**: `src/components/Skills.jsx`
- **Features**:
  - Categorized skills
  - Card layout
  - Hover effects

#### Projects
Filterable project showcase
- **Location**: `src/components/Projects.jsx`
- **Features**:
  - Project filtering
  - Tech stack display
  - GitHub links
  - Hover animations

#### Experience
Timeline-style experience section
- **Location**: `src/components/Experience.jsx`
- **Features**:
  - Timeline layout
  - Company details
  - Highlights

#### Achievements
Achievement showcase
- **Location**: `src/components/Achievements.jsx`
- **Features**:
  - Icon display
  - Staggered animations

#### Certifications
Certification display
- **Location**: `src/components/Certifications.jsx`
- **Features**:
  - Certification cards
  - Issuer information

#### Education
Education background
- **Location**: `src/components/Education.jsx`
- **Features**:
  - Education details
  - Coursework display
  - Activities

#### Contact
Contact form with social links
- **Location**: `src/components/Contact.jsx`
- **Features**:
  - Contact form with validation
  - Email integration
  - Social links
  - Success message

### Interactive Components

#### ChatBot
Floating AI assistant
- **Location**: `src/components/ChatBot.jsx`
- **Features**:
  - Floating button
  - Quick replies
  - Message history
  - Smooth animations

#### GitHubStats
GitHub statistics display
- **Location**: `src/components/GitHubStats.jsx`
- **Features**:
  - Fetch GitHub data
  - Display stats
  - Loading state

#### ResumeDownload
Resume download button
- **Location**: `src/components/ResumeDownload.jsx`
- **Features**:
  - Download button
  - Hover effect
  - Animation

## Using Framer Motion

All animations use Framer Motion library.

### Common Animation Patterns

```jsx
// Fade In
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Content
</motion.div>

// Slide Up
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>

// Scale In
<motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>

// Hover Effect
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

## Configuration Files

### portfolio.config.js
Central configuration for portfolio data
- Personal information
- Skills
- Projects
- Experience
- Achievements
- Certifications

### api.config.js
API configuration
- Base URL
- Endpoints
- Fetch helper

### theme.config.js
Theme configuration
- Colors
- Gradients
- Shadows
- Transitions
- Animations

## Custom Hooks

### useWindowSize
Get current window dimensions

```jsx
const { width, height } = useWindowSize();
```

### useScrollPosition
Get current scroll position

```jsx
const scrollPos = useScrollPosition();
```

### useDarkMode
Theme toggle hook

```jsx
const [isDark, setIsDark] = useDarkMode();
```

## Utility Functions

### scrollToElement
Smooth scroll to element

```jsx
scrollToElement('projects');
```

### downloadFile
Download file from generated content

```jsx
downloadFile('resume.txt', content);
```

### copyToClipboard
Copy text to clipboard

```jsx
copyToClipboard('text to copy');
```

### validateEmail
Email validation

```jsx
const isValid = validateEmail('email@example.com');
```

### debounce
Debounce function calls

```jsx
const debouncedSearch = debounce(handleSearch, 300);
```

### throttle
Throttle function calls

```jsx
const throttledScroll = throttle(handleScroll, 100);
```

## Styling

### Global Styles
Located in `src/styles/global.css`
- Glassmorphism effects
- Gradient text
- Custom scrollbar
- Smooth transitions

### Tailwind Classes

Common Tailwind utilities used:
- `glass` - Glassmorphism effect
- `gradient-text` - Gradient text color
- `transition-smooth` - Smooth transitions
- `blur-bg` - Blurred background
- `section-padding` - Padding for sections

## API Integration

### Contact Endpoint
**POST** `/api/contact`

Request:
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "message": "Your message"
}
```

Response:
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

### Projects Endpoint
**GET** `/api/projects`

Response:
```json
[
  {
    "id": 1,
    "title": "Project Title",
    "description": "Description",
    "tech": ["Tech1", "Tech2"],
    "github": "https://github.com/...",
    "live": "https://..."
  }
]
```

### Skills Endpoint
**GET** `/api/skills`

Response:
```json
{
  "languages": ["C++", "JavaScript"],
  "frontend": ["React", "HTML5"],
  "backend": ["Node.js", "Express"],
  "tools": ["Git", "VS Code"],
  "softSkills": ["Problem Solving"]
}
```

---

For more information, refer to the main README.md
