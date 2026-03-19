import React from 'react';
import { SectionHeading, AnimatedCounter, GlassCard } from '../components/common';
import { FaStar, FaFire, FaTrophy } from 'react-icons/fa';

/**
 * Achievements Section Component
 */
const AchievementsSection = () => {
  const achievements = [
    {
      icon: <FaStar className="w-8 h-8" />,
      title: 'LeetCode Master',
      stat: '150+',
      description: 'Problems solved with consistent practice',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <FaFire className="w-8 h-8" />,
      title: 'Acceptance Rate',
      stat: '77%+',
      description: 'High success rate in competitive programming',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: 'Achievements',
      stat: '15+',
      description: 'HackerRank badges and certificates earned',
      color: 'from-purple-500 to-indigo-500'
    },
  ];

  const badges = [
    '⭐ 5-Star C++ Coder',
    '⭐ 5-Star JavaScript',
    '🥇 Problem Solving',
    '🏆 Golden Badge',
    '✨ SQL Expert',
    '🎯 Database Design',
  ];

  return (
    <section id="achievements" className="relative py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievements"
          subtitle="Recognition and milestones in my coding journey"
        />

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <GlassCard key={index} className={`p-8 text-center border-t-4 border-sky-500 hover-lift`}>
              <div className="flex justify-center mb-4 text-sky-400">
                {achievement.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
              <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={parseInt(achievement.stat)} duration={2} />
              </div>
              <p className="text-slate-400 text-sm">{achievement.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* HackerRank Badges */}
        <GlassCard className="p-8 border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-white mb-6">HackerRank Badges</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg text-center hover:border-purple-500/60 transition-all"
              >
                <p className="text-slate-200 font-semibold">{badge}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default AchievementsSection;
