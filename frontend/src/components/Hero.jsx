import React, { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Full Stack Developer | Problem Solver | CSE Student';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto rounded-full glass p-1 mb-6 shadow-lg">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center text-4xl font-bold">
                SS
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-7xl font-bold mb-6 gradient-text animate-glow"
          >
            Shaan Saurav
          </motion.h1>

          {/* Typing Animation */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl text-blue-400 mb-6 h-12"
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            🚀 Building scalable web applications and solving real-world problems with code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg glass font-semibold text-white hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              📂 View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              📧 Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/Shaan098"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-blue-500 transition-all duration-300"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/shaan-saurav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-blue-500 transition-all duration-300"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:shaansaurav633@gmail.com"
              className="p-3 glass rounded-full hover:bg-blue-500 transition-all duration-300"
            >
              <FiMail size={24} />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16"
          >
            <p className="text-gray-400 mb-2">Scroll to explore</p>
            <div className="w-6 h-10 rounded-full glass mx-auto flex justify-center p-2">
              <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
