import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiMongodb, SiAmazon } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 gradient-text text-center">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  👨‍💻 I'm a <span className="text-blue-400 font-semibold">B.Tech Computer Science Engineering</span> student at <span className="text-purple-400 font-semibold">Lovely Professional University</span>, passionate about building scalable and efficient web applications.
                </p>

                <p className="text-gray-300 leading-relaxed text-lg">
                  🚀 With hands-on experience in the MERN stack (MongoDB, Express, React, Node.js), I specialize in developing full-stack solutions that combine robust backend architecture with intuitive user interfaces. I'm driven by the challenge of solving complex problems and continuously expanding my technical expertise.
                </p>

                <p className="text-gray-300 leading-relaxed text-lg">
                  💡 Beyond coding, I'm deeply interested in system design, cloud technologies, and competitive programming. I believe in writing clean, maintainable code and following best practices in software development.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass p-4 rounded-lg">
                  <h4 className="text-3xl font-bold gradient-text">150+</h4>
                  <p className="text-gray-400">LeetCode Problems</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h4 className="text-3xl font-bold gradient-text">77%+</h4>
                  <p className="text-gray-400">Acceptance Rate</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Tech Stack Icons */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center p-4 glass rounded-lg hover:scale-110 transition-transform">
                  <SiReact size={40} className="mb-2 text-blue-400" />
                  <p className="text-sm font-semibold">React</p>
                </div>
                <div className="flex flex-col items-center p-4 glass rounded-lg hover:scale-110 transition-transform">
                  <SiNodedotjs size={40} className="mb-2 text-green-400" />
                  <p className="text-sm font-semibold">Node.js</p>
                </div>
                <div className="flex flex-col items-center p-4 glass rounded-lg hover:scale-110 transition-transform">
                  <SiMongodb size={40} className="mb-2 text-green-600" />
                  <p className="text-sm font-semibold">MongoDB</p>
                </div>
                <div className="flex flex-col items-center p-4 glass rounded-lg hover:scale-110 transition-transform">
                  <SiAmazon size={40} className="mb-2 text-orange-400" />
                  <p className="text-sm font-semibold">AWS</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
