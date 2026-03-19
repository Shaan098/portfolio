import React, { useState } from 'react';
import { SectionHeading, TechBadge, GlassCard } from '../components/common';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

/**
 * Projects Section with Filtering
 */
const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Online Multi-Language Compiler',
      category: 'full-stack',
      image: '🖥️',
      description: 'A powerful online compiler that supports multiple programming languages with secure code execution and real-time editing.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      features: [
        'Multi-language support (C, C++, Java, JavaScript)',
        'Secure code execution with sandboxing',
        'Real-time collaborative editor',
        'Authentication & authorization',
        'Execution history tracking'
      ],
      github: 'https://github.com/Shaan098/online-compiler',
      live: 'https://compiler-client-9wha.vercel.app/',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'AR Educational Content Viewer',
      category: 'full-stack',
      image: '🎨',
      description: 'Interactive AR application for visualizing 3D educational models with intuitive controls and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Three.js', 'AR.js'],
      features: [
        '3D model rendering and manipulation',
        'AR placement in real world',
        'Interactive controls and animations',
        'Responsive UI for mobile & desktop',
        'Educational content management'
      ],
      github: 'https://github.com/Shaan098/ar-viewer',
      live: '',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Appointment System',
      category: 'full-stack',
      image: '📅',
      description: 'Complete appointment booking system with JWT authentication, role-based access control, and dynamic scheduling.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      features: [
        'JWT authentication and authorization',
        'Role-based access control (Admin/User)',
        'Dynamic appointment scheduling',
        'Dashboard with analytics',
        'Email notifications',
        'Real-time updates'
      ],
      github: 'https://github.com/Shaan098/appointment-system',
      live: '',
      color: 'from-green-500 to-teal-500'
    },
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'full-stack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Showcasing my best work and technical expertise"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filter === cat.key
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/50'
                  : 'glass text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <GlassCard key={project.id} className="overflow-hidden flex flex-col hover:border-sky-500/50 border border-slate-700/50">
              {/* Project Header */}
              <div className={`h-40 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center text-7xl`}>
                {project.image}
              </div>

              {/* Project Content */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-1">{project.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-sky-400 mb-2">Key Features:</h4>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-sky-400 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/50 rounded-lg text-sky-400 hover:bg-sky-500/20 transition-all"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/50 rounded-lg text-purple-400 hover:bg-purple-500/20 transition-all"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
