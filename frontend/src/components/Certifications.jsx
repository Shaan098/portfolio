import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: 'NPTEL Cloud Computing',
      issuer: 'IIT Kharagpur',
      date: '2024',
      icon: '☁️',
    },
    {
      title: 'Oracle Cloud Infrastructure',
      issuer: 'Oracle Developer Professional',
      date: '2024',
      icon: '🌐',
    },
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 gradient-text text-center">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-400 font-semibold mb-2">{cert.issuer}</p>
                <p className="text-gray-400">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
