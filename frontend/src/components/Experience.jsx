import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Virtual Software Engineer',
      company: 'Electronic Arts (Forage)',
      period: '2024',
      description: 'Completed a virtual software engineering experience with focus on game development.',
      highlights: [
        '⚙️ System design and architecture principles',
        '🎮 Game development fundamentals',
        '📊 Performance optimization techniques',
        '🔧 OOP concepts and design patterns',
      ],
    },
    {
      title: 'AWS APAC Solutions Architect',
      company: 'Amazon Web Services (Forage)',
      period: '2024',
      description: 'Completed AWS Solutions Architecture virtual experience focusing on cloud infrastructure.',
      highlights: [
        '☁️ AWS services and architecture design',
        '🏗️ Cloud infrastructure planning',
        '📈 Scalability and performance optimization',
        '🔒 Security best practices',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 gradient-text text-center">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-lg relative pl-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 -translate-x-2 md:-translate-x-6"></div>

                <div className="flex justify-between items-start mb-4 flex-col md:flex-row">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm md:text-right">{exp.period}</span>
                </div>

                <p className="text-gray-300 mb-6">{exp.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, hidx) => (
                    <div key={hidx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
