import React from 'react';

/**
 * Loading Animation Component
 */
export const LoadingAnimation = () => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-slate-300 border-t-sky-500 rounded-full animate-spin"></div>
      <p className="text-white text-lg font-semibold animate-pulse">Loading...</p>
    </div>
  </div>
);

/**
 * Scroll Progress Bar Component
 */
export const ScrollProgressBar = ({ progress }) => (
  <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 z-50 transition-all duration-300"
    style={{ width: `${progress}%` }}
  />
);

/**
 * Back to Top Button Component
 */
export const BackToTopButton = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 bg-sky-500 hover:bg-sky-600 text-white rounded-full shadow-lg shadow-sky-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
      aria-label="Back to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

/**
 * Section Heading Component
 */
export const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

/**
 * Tech Badge Component
 */
export const TechBadge = ({ tech }) => (
  <span className="inline-block px-3 py-1 bg-sky-500/20 border border-sky-500/50 rounded-full text-sky-300 text-sm hover:bg-sky-500/30 transition-all cursor-pointer">
    {tech}
  </span>
);

/**
 * Animated Counter Component
 */
export const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let current = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}{suffix}</>;
};

/**
 * Typing Effect Component
 */
export const TypingEffect = ({ words }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [wordIndex, setWordIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentWord = words[wordIndex];
    const timer = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      } else {
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <span className="text-sky-400 font-semibold">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

/**
 * Glassmorphism Card Component
 */
export const GlassCard = ({ children, className = '', variant = 'light' }) => {
  const glassClass = variant === 'dark' ? 'glass-dark' : 'glass';
  return (
    <div className={`${glassClass} ${className}`}>
      {children}
    </div>
  );
};

/**
 * Gradient Button Component
 */
export const GradientButton = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseClasses = 'px-6 py-3 font-semibold rounded-lg transition-all duration-300 text-white';
  const variants = {
    primary: 'bg-gradient-to-r from-sky-500 to-purple-600 hover:shadow-lg hover:shadow-sky-500/50',
    secondary: 'border-2 border-sky-500 hover:bg-sky-500/10',
    ghost: 'hover:bg-white/10',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
