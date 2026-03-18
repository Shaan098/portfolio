import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email via backend
      await axios.post('http://localhost:5000/api/contact', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }

    setLoading(false);
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'shaansaurav633@gmail.com', link: 'mailto:shaansaurav633@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+91 6204566381', link: 'tel:+916204566381' },
    { icon: FiMapPin, label: 'Location', value: 'Punjab, India', link: '#' },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text text-center">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 mb-16">
            Have a question or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.link}
                    className="glass p-6 rounded-lg hover:scale-105 transition-transform duration-300 flex items-start space-x-4 group"
                  >
                    <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </a>
                );
              })}

              {/* Social Links */}
              <div className="pt-6">
                <p className="text-gray-400 mb-4">Follow me on</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Shaan098"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass rounded-lg hover:bg-blue-500/30 transition-colors"
                  >
                    <FiGithub size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/shaan-saurav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass rounded-lg hover:bg-blue-500/30 transition-colors"
                  >
                    <FiLinkedin size={24} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 glass p-8 rounded-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <FiSend size={20} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center"
                  >
                    ✓ Message sent successfully!
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
