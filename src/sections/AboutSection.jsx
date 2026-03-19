import React from 'react';
import { SectionHeading, GlassCard } from '../components/common';
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';

/**
 * About Section Component
 */
const AboutSection = () => {
  const highlights = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: 'Full Stack Development',
      desc: 'Experienced in building robust applications with React, Node.js, and MongoDB',
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: 'Performance Driven',
      desc: 'Focused on creating scalable and efficient solutions for real-world problems',
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: 'Problem Solver',
      desc: 'Strong algorithmic thinking with 150+ LeetCode problems solved',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my journey and passion for tech"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a <span className="text-sky-400 font-semibold">B.Tech CSE student at Lovely Professional University</span> with a passion for full-stack development and problem-solving. My journey in tech started with curiosity about how things work, which has evolved into a comprehensive understanding of modern web technologies.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              I specialize in building <span className="text-purple-400 font-semibold">scalable and efficient applications</span> using React for frontend, Node.js and Express for backend, and MongoDB for database management. I'm also experienced with cloud technologies including AWS and Azure.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              Beyond coding, I'm driven by continuous learning and staying updated with the latest industry trends. I've actively participated in virtual experiences from EA and AWS, where I deepened my understanding of system design and cloud architecture.
            </p>

            {/* Key Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass p-4 rounded-lg">
                <div className="text-sky-400 font-bold">University</div>
                <div className="text-slate-300 text-sm">Lovely Personal University</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-purple-400 font-bold">Current Role</div>
                <div className="text-slate-300 text-sm">Learning & Building</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-pink-400 font-bold">Focus Area</div>
                <div className="text-slate-300 text-sm">Full Stack Dev</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-green-400 font-bold">Location</div>
                <div className="text-slate-300 text-sm">India</div>
              </div>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <GlassCard key={index} className="p-6 border-l-4 border-sky-500 hover:border-purple-500 transition-colors">
                <div className="flex gap-4">
                  <div className="text-sky-400 flex-shrink-0 mt-1">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {highlight.desc}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}

            {/* Interests */}
            <div className="glass p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Cloud Computing', 'System Design', 'Open Source', 'Tech Blogging', 'Competitive Programming'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-sky-500/20 border border-sky-500/50 rounded-full text-sky-300 text-sm hover:bg-sky-500/30 transition-all cursor-pointer"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
