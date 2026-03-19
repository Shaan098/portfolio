import React from 'react';
import { FiDownload, FiFileText } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ResumeDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/myfinalcv.pdf';
    link.download = 'frontend/src/components/myfinalcv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 gradient-text text-center">
            Download Resume
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Resume Preview */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <FiFileText size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Resume & CV</h3>
                  <p className="text-gray-400">Up-to-date professional document</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white font-semibold">Comprehensive Profile</p>
                    <p className="text-gray-400 text-sm">All skills, experience, and achievements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white font-semibold">ATS Optimized</p>
                    <p className="text-gray-400 text-sm">Formatted for Applicant Tracking Systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white font-semibold">Recruiter Ready</p>
                    <p className="text-gray-400 text-sm">Professional layout and formatting</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 font-bold text-white flex items-center justify-center gap-2 hover:shadow-2xl transition-all"
              >
                <FiDownload size={20} />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Education</h4>
                  <p className="text-gray-400">BTech CSE with CGPA details and relevant coursework</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Experience</h4>
                  <p className="text-gray-400">Professional work history with key achievements and metrics</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Skills</h4>
                  <p className="text-gray-400">Technical proficiencies across multiple domains</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-amber-400 mb-2">Projects</h4>
                  <p className="text-gray-400">Highlighted portfolio projects with impact and technologies</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Certifications</h4>
                  <p className="text-gray-400">Professional credentials and continuous learning</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400 text-sm font-semibold">💡 Tip</p>
                <p className="text-gray-400 text-sm mt-1">
                  Customize the resume before sharing with recruiters. Update with latest projects and achievements!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeDownload;
