import React from 'react';
import { SectionHeading, GlassCard } from '../components/common';
import { FaBriefcase, FaTrophy, FaCertificate, FaGraduationCap } from 'react-icons/fa';

/**
 * Experience Section Component
 */
const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Electronic Arts',
      role: 'Virtual Experience Fellow',
      platform: 'Forage',
      duration: '2024',
      description: 'Completed EA Internship virtual experience program focusing on system design and OOP concepts.',
      highlights: [
        'System design architecture principles',
        'Object-oriented programming patterns',
        'Performance optimization techniques',
        'Code quality and best practices'
      ],
      icon: '🎮'
    },
    {
      company: 'Amazon Web Services',
      role: 'Solutions Architecture Fellow',
      platform: 'AWS APAC Forage',
      duration: '2024',
      description: 'AWS virtual experience focused on cloud architecture and infrastructure design.',
      highlights: [
        'AWS services and architecture',
        'Cloud application design',
        'Scalability and reliability',
        'Cost optimization strategies'
      ],
      icon: '☁️'
    },
  ];

  return (
    <section id="experience" className="relative py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Virtual experiences and professional development"
        />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <GlassCard key={index} className="p-8 border-l-4 border-sky-500 hover:border-purple-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-5xl">{exp.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sky-400 font-semibold">{exp.duration}</span>
                  </div>
                  <p className="text-lg text-slate-300 mb-2">
                    {exp.company} <span className="text-slate-500">• {exp.platform}</span>
                  </p>
                  <p className="text-slate-400 mb-4">{exp.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight, idx) => (
                      <p key={idx} className="text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span>
                        {highlight}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
