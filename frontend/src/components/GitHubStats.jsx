import React, { useState, useEffect } from 'react';
import { FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Shaan098');
        const data = await response.json();
        setStats({
          followers: data.followers,
          following: data.following,
          repositories: data.public_repos,
          contributions: data.public_repos * 5, // Placeholder
          avatarUrl: data.avatar_url,
        });
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <section className="section-padding">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          Loading GitHub stats...
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="section-padding bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 gradient-text text-center">
            GitHub Activity
          </h2>

          <div className="glass p-8 rounded-lg">
            <div className="flex items-center gap-6 mb-12">
              {stats?.avatarUrl && (
                <img
                  src={stats.avatarUrl}
                  alt="GitHub Avatar"
                  className="w-24 h-24 rounded-full border-2 border-blue-400"
                />
              )}
              <div className="flex items-center gap-4">
                <FiGithub size={40} className="text-gray-300" />
                <div>
                  <h3 className="text-2xl font-bold text-white">GitHub Stats</h3>
                  <p className="text-gray-400">github.com/Shaan098</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 rounded-lg text-center hover:bg-white/10 transition-colors"
              >
                <p className="text-gray-400 text-sm mb-2">Followers</p>
                <p className="text-4xl font-bold text-blue-400">{stats?.followers}</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 rounded-lg text-center hover:bg-white/10 transition-colors"
              >
                <p className="text-gray-400 text-sm mb-2">Following</p>
                <p className="text-4xl font-bold text-purple-400">{stats?.following}</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 rounded-lg text-center hover:bg-white/10 transition-colors"
              >
                <p className="text-gray-400 text-sm mb-2">Repositories</p>
                <p className="text-4xl font-bold text-green-400">{stats?.repositories}</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 rounded-lg text-center hover:bg-white/10 transition-colors"
              >
                <p className="text-gray-400 text-sm mb-2">Contributions</p>
                <p className="text-4xl font-bold text-orange-400">{stats?.contributions}+</p>
              </motion.div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://github.com/Shaan098"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white hover:shadow-lg transition-all"
              >
                <FiGithub size={20} />
                Visit GitHub Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
