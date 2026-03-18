import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      icon: '🏆',
      title: '150+ LeetCode Problems',
      description: 'Successfully solved over 150 coding problems on LeetCode across various difficulty levels.',
    },
    {
      icon: '⭐',
      title: '77%+ Acceptance Rate',
      description: 'Maintained an acceptance rate above 77% on competitive programming platforms.',
    },
    {
      icon: '🎖️',
      title: 'HackerRank Badges',
      description: 'Earned multiple badges across various programming languages and problem categories.',
    },
    {
      icon: '🚀',
      title: 'Full Stack Applications',
      description: 'Developed and deployed multiple full-stack applications using MERN stack.',
    },
  ];

  return (
    <section id="achievements" className="section-padding bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 gradient-text text-center">
            Achievements
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="glass p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
