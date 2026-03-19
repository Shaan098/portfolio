import React from 'react';
import { SectionHeading, GlassCard } from '../components/common';
import { FaCertificate } from 'react-icons/fa';

/**
 * Certifications Section Component
 */
const CertificationsSection = () => {
  const certifications = [
    {
      title: 'NPTEL Cloud Computing',
      issuer: 'IIT Kharagpur',
      date: '2023-2024',
      description: 'Comprehensive course on cloud computing fundamentals and technologies',
      icon: '☁️'
    },
    {
      title: 'Oracle Cloud Infrastructure Developer Professional',
      issuer: 'Oracle',
      date: '2024',
      description: 'OCI platform expertise and cloud application development',
      icon: '🔷'
    },
  ];

  return (
    <section id="certifications" className="relative py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and verified credentials"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <GlassCard key={index} className="p-6 border-l-4 border-green-500 hover:border-emerald-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{cert.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-green-400 font-semibold mb-1">{cert.issuer}</p>
                  <p className="text-slate-400 text-sm mb-3">{cert.date}</p>
                  <p className="text-slate-300">{cert.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
