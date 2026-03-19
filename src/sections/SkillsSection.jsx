import React, { useState } from 'react';
import { SectionHeading, TechBadge, GlassCard } from '../components/common';
import {
  FaReact, FaNode, FaDatabase, FaCode,
  FaTools, FaAward, FaJsSquare, FaPython
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiBootstrap, SiMysql } from 'react-icons/si';

/**
 * Skills Section Component
 */
const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = {
    languages: {
      label: 'Languages',
      icon: <FaCode className="w-5 h-5" />,
      skills: [
        { name: 'C++', icon: <FaCode />, level: 90 },
        { name: 'JavaScript', icon: <FaJsSquare />, level: 85 },
        { name: 'C', icon: <FaCode />, level: 85 },
        { name: 'PHP', icon: <FaCode />, level: 70 },
        { name: 'Python', icon: <FaPython />, level: 75 },
      ],
    },
    frameworks: {
      label: 'Frameworks & Libraries',
      icon: <FaReact className="w-5 h-5" />,
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'Node.js', icon: <FaNode />, level: 85 },
        { name: 'Express.js', icon: <SiExpress />, level: 85 },
        { name: 'Bootstrap', icon: <SiBootstrap />, level: 80 },
        { name: 'Tailwind CSS', icon: <FaTools />, level: 90 },
        { name: 'HTML/CSS', icon: <FaCode />, level: 95 },
      ],
    },
    tools: {
      label: 'Tools & Databases',
      icon: <FaTools className="w-5 h-5" />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'MySQL', icon: <SiMysql />, level: 80 },
        { name: 'VS Code', icon: <FaTools />, level: 95 },
        { name: 'Thunder Client', icon: <FaTools />, level: 85 },
        { name: 'Git & GitHub', icon: <FaTools />, level: 88 },
        { name: 'AWS', icon: <FaTools />, level: 75 },
      ],
    },
    soft: {
      label: 'Soft Skills',
      icon: <FaAward className="w-5 h-5" />,
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Team Player', level: 90 },
        { name: 'Adaptability', level: 88 },
        { name: 'Communication', level: 85 },
        { name: 'Leadership', level: 80 },
        { name: 'Creative Thinking', level: 85 },
      ],
    },
  };

  const getVisibleSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skillCategories).flatMap((cat) => cat.skills);
    }
    return skillCategories[activeCategory]?.skills || [];
  };

  const categories = Object.entries(skillCategories).map(([key, cat]) => ({
    key,
    ...cat,
  }));

  return (
    <section id="skills" className="relative py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with to create amazing solutions"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/50'
                : 'glass text-slate-300 hover:text-white'
            }`}
          >
            All Skills
          </button>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                activeCategory === cat.key
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/50'
                  : 'glass text-slate-300 hover:text-white'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {getVisibleSkills().map((skill, index) => (
            <GlassCard key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {skill.icon && <div className="text-sky-400 text-2xl">{skill.icon}</div>}
                  <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                </div>
              </div>
              {skill.level && (
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-sky-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{
                      width: `${skill.level}%`,
                      animation: `width 1s ease-in-out`,
                    }}
                  />
                </div>
              )}
              {skill.level && <p className="text-sky-400 text-sm mt-2 font-semibold">{skill.level}%</p>}
            </GlassCard>
          ))}
        </div>

        {/* Proficiency Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="p-8 border-l-4 border-sky-500">
            <h3 className="text-2xl font-bold text-sky-400 mb-4">Frontend</h3>
            <div className="space-y-2">
              {['React', 'Tailwind CSS', 'Bootstrap', 'HTML/CSS/JavaScript', 'Responsive Design'].map((skill) => (
                <p key={skill} className="text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  {skill}
                </p>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Backend</h3>
            <div className="space-y-2">
              {['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Database Design'].map((skill) => (
                <p key={skill} className="text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  {skill}
                </p>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 border-l-4 border-pink-500">
            <h3 className="text-2xl font-bold text-pink-400 mb-4">Databases</h3>
            <div className="space-y-2">
              {['MongoDB', 'MySQL', 'Data Modeling', 'Query Optimization', 'Cloud Databases'].map((skill) => (
                <p key={skill} className="text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  {skill}
                </p>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Tools & Platforms</h3>
            <div className="space-y-2">
              {['Git & GitHub', 'VS Code', 'AWS Services', 'Postman', 'Figma'].map((skill) => (
                <p key={skill} className="text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  {skill}
                </p>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
