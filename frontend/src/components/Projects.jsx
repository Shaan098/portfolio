import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Online Multi-Language Compiler',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      description: 'A full-stack IDE allowing users to write, compile, and execute code in multiple languages with real-time output.',
      features: [
        '🔴 Multi-language execution (C, C++, Java, JavaScript)',
        '🔒 Secure code execution environment',
        '⚡ Real-time editor with syntax highlighting',
        '👥 User authentication & code sharing',
      ],
      github: 'https://github.com/Shaan098/multi-language-compiler',
      live: 'https://compiler-client-9wha.vercel.app/',
      image: '🖥️',
    },
    {
      id: 2,
      title: 'AR Educational Content Viewer',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'MongoDB', '3D Models', 'AR'],
      description: 'Interactive AR platform for visualizing educational content with 3D model integration and interactive controls.',
      features: [
        '🎯 3D model rendering and visualization',
        '📍 AR placement technology',
        '🎮 Interactive control system',
        '📱 Fully responsive UI',
      ],
      github: 'https://github.com/Shaan098/ar-viewer',
      image: '🔍',
    },
    {
      id: 3,
      title: 'Appointment Scheduling System',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Express'],
      description: 'Complete appointment management system with role-based access control and intelligent scheduling.',
      features: [
        '🔐 JWT authentication & authorization',
        '👨‍💼 Role-based access control',
        '📅 Intelligent scheduling dashboard',
        '🔔 Real-time notifications',
      ],
      github: 'https://github.com/Shaan098/appointment-system',
      image: '📅',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text text-center">
            Projects & Portfolio
          </h2>
          <p className="text-center text-gray-400 mb-10">Check out the projects I've built</p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['all', 'fullstack', 'frontend', 'backend'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 capitalize font-semibold ${
                  filter === cat
                    ? 'glass bg-blue-500 text-white'
                    : 'glass hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-lg hover:scale-105 transition-transform duration-300 flex flex-col"
              >
                {/* Header */}
                <div className="text-5xl mb-4">{project.image}</div>

                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

                {/* Features */}
                <div className="mb-6 space-y-2">
                  {project.features.map((feature, fidx) => (
                    <p key={fidx} className="text-sm text-gray-400">
                      {feature}
                    </p>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((t, tidx) => (
                    <span
                      key={tidx}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 py-2 px-4 rounded-lg glass hover:bg-blue-500 transition-colors ${
                      project.live ? 'flex-1' : 'w-full'
                    }`}
                  >
                    <FiGithub size={18} />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg glass hover:bg-green-500 transition-colors"
                    >
                      <FiExternalLink size={18} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
