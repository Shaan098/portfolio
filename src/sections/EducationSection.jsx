import React from 'react';
import { SectionHeading, GlassCard } from '../components/common';

/**
 * Education Section Component
 */
const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'Lovely Professional University',
      duration: '2022 - 2026',
      status: 'Currently Pursuing',
      details: [
        'CGPA: 8.2+',
        'Core Subjects: Data Structures, Algorithms, DBMS, OS, Networks',
        'Specialization: Full Stack Web Development',
        'Active participant in coding competitions and hackathons'
      ],
      icon: '🎓'
    }
  ];

  return (
    <section id="education" className="relative py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="Academic background and qualifications"
        />

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <GlassCard key={index} className="p-8 border-l-4 border-blue-500">
              <div className="flex items-start gap-6">
                <div className="text-5xl">{edu.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <span className="text-blue-400 font-semibold text-sm md:text-base">{edu.duration}</span>
                  </div>
                  
                  <p className="text-lg text-sky-400 font-semibold mb-1">{edu.field}</p>
                  <p className="text-slate-300 mb-1">{edu.institution}</p>
                  <p className="text-green-400 text-sm font-semibold mb-4">{edu.status}</p>

                  <div className="space-y-2">
                    {edu.details.map((detail, idx) => (
                      <p key={idx} className="text-slate-300 flex items-center gap-3">
                        <span className="w-2 h-2 bg-sky-400 rounded-full flex-shrink-0"></span>
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Skills learned timeline */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Year 1\nFundamentals', 'Year 2\nCore Concepts', 'Year 3\nFull Stack Dev', 'Year 4\nAdvanced Topics'].map((year, idx) => (
            <GlassCard key={idx} className="p-6 text-center hover-lift">
              <p className="text-white font-semibold whitespace-pre-line">{year}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
