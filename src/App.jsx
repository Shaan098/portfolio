import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import AchievementsSection from './sections/AchievementsSection';
import CertificationsSection from './sections/CertificationsSection';
import EducationSection from './sections/EducationSection';
import ContactSection from './sections/ContactSection';
import ChatBot from './components/ChatBot';
import { ScrollProgressBar, BackToTopButton, LoadingAnimation } from './components/common';
import { useDarkMode, useScrollProgress } from './hooks/useCustomHooks';
import './styles/index.css';

/**
 * Main App Component
 */
function App() {
  const [isDark, toggleDarkMode] = useDarkMode();
  const scrollProgress = useScrollProgress();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
      {isLoading && <LoadingAnimation />}
      <div className="relative bg-white dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
        {/* Scroll Progress Bar */}
        <ScrollProgressBar progress={scrollProgress} />

        {/* Navigation */}
        <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />

        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <AchievementsSection />
          <CertificationsSection />
          <EducationSection />
          <ContactSection />
        </main>

        {/* Back to Top Button */}
        <BackToTopButton isVisible={showBackToTop} />

        {/* ChatBot */}
        <ChatBot />

        {/* Footer */}
        <footer className="py-8 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
            <p>© 2024 Shaan Saurav. All rights reserved.</p>
            <p className="text-sm mt-2">Crafted with ❤️ and React</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
