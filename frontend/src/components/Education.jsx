import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 gradient-text text-center">
            Education
          </h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-lg"
          >
            <div className="flex justify-between items-start flex-col md:flex-row mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  B.Tech Computer Science Engineering
                </h3>
                <p className="text-2xl text-blue-400 font-semibold">
                  Lovely Professional University (LPU)
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-8 text-lg">
              Currently pursuing Bachelor of Technology in Computer Science Engineering with focus on software development and full-stack web applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-lg">
                <p className="text-gray-400 mb-2">Focus Areas</p>
                <div className="space-y-2">
                  <p className="text-white">✓ Full Stack Development</p>
                  <p className="text-white">✓ System Design</p>
                  <p className="text-white">✓ Cloud Technologies</p>
                </div>
              </div>

              <div className="glass p-6 rounded-lg">
                <p className="text-gray-400 mb-2">Coursework</p>
                <div className="space-y-2">
                  <p className="text-white">✓ Data Structures</p>
                  <p className="text-white">✓ Database Systems</p>
                  <p className="text-white">✓ Web Development</p>
                </div>
              </div>

              <div className="glass p-6 rounded-lg">
                <p className="text-gray-400 mb-2">Activities</p>
                <div className="space-y-2">
                  <p className="text-white">✓ Competitive Coding</p>
                  <p className="text-white">✓ Project Development</p>
                  <p className="text-white">✓ Tech Communities</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
