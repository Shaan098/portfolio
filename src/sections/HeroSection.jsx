import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { TypingEffect, GradientButton } from '../components/common';

/**
 * Hero Section Component
 */
const HeroSection = () => {
  const typingWords = [
    'Full Stack Developer',
    'Problem Solver',
    'Web Developer',
    'Tech Enthusiast',
  ];

  const handleDownloadResume = () => {
    // Create a download link for the resume
    const resumeLink = document.createElement('a');
    resumeLink.href = '/my final cv.pdf'; // Points to public folder
    resumeLink.download = 'Shaan_Saurav_Resume.pdf'; // Downloaded filename
    document.body.appendChild(resumeLink);
    resumeLink.click();
    document.body.removeChild(resumeLink);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-950/20 via-transparent to-slate-900">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image Animation */}
        <div className="mb-8 animate-float">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-sky-400 to-purple-600 p-1 shadow-2xl shadow-sky-500/50">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold text-gradient">
              SS
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
          Shaan Saurav
        </h1>

        {/* Title with Typing Effect */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6 h-12 flex items-center justify-center">
          <TypingEffect words={typingWords} />
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          Building scalable web applications and solving real-world problems with code. Passionate about full-stack development and always learning new technologies.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-md mx-auto">
          <div className="glass p-4 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-sky-400">150+</div>
            <div className="text-xs md:text-sm text-slate-400">LeetCode Problems</div>
          </div>
          <div className="glass p-4 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-purple-400">77%+</div>
            <div className="text-xs md:text-sm text-slate-400">Success Rate</div>
          </div>
          <div className="glass p-4 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-pink-400">10+</div>
            <div className="text-xs md:text-sm text-slate-400">Projects</div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <GradientButton variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Projects
          </GradientButton>
          <GradientButton variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </GradientButton>
          <GradientButton variant="ghost" onClick={handleDownloadResume}>
            Download Resume
          </GradientButton>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Shaan098"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 hover:border-sky-500/50 transition-all group"
          >
            <FaGithub className="w-6 h-6 text-sky-400 group-hover:text-sky-300" />
          </a>
          <a
            href="https://linkedin.com/in/shaan-saurav"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 hover:border-sky-500/50 transition-all group"
          >
            <FaLinkedin className="w-6 h-6 text-sky-400 group-hover:text-sky-300" />
          </a>
          <a
            href="mailto:shaansaurav633@gmail.com"
            className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 hover:border-sky-500/50 transition-all group"
          >
            <FaEnvelope className="w-6 h-6 text-sky-400 group-hover:text-sky-300" />
          </a>
          <a
            href="tel:+916204566381"
            className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 hover:border-sky-500/50 transition-all group"
          >
            <FaPhone className="w-6 h-6 text-sky-400 group-hover:text-sky-300" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-sky-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
