import React, { useState } from 'react';
import { SectionHeading, GradientButton, GlassCard } from '../components/common';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

/**
 * Contact Section Component
 */
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:shaansaurav633@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      label: 'Email',
      value: 'shaansaurav633@gmail.com',
      link: 'mailto:shaansaurav633@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 6204566381',
      link: 'tel:+916204566381',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      label: 'Location',
      value: 'India',
      link: '',
      color: 'from-blue-500 to-cyan-500'
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      label: 'GitHub',
      url: 'https://github.com/Shaan098',
      color: 'hover:text-slate-400'
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/shaan-saurav',
      color: 'hover:text-blue-400'
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's connect and explore opportunities together"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500 transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <GradientButton variant="primary" className="w-full">
                  Send Message
                </GradientButton>
              </form>
            </GlassCard>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Cards */}
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.link || '#'}
                className="block"
              >
                <GlassCard className="p-6 hover-lift cursor-pointer border-l-4 border-sky-500 hover:border-purple-500 transition-all">
                  <div className="flex items-start gap-4">
                    <div className={`text-sky-400 flex-shrink-0 mt-1`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{info.label}</h4>
                      <p className="text-slate-300">{info.value}</p>
                    </div>
                  </div>
                </GlassCard>
              </a>
            ))}

            {/* Social Links */}
            <GlassCard className="p-8">
              <h4 className="text-lg font-bold text-white mb-6">Follow me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 text-sky-400 hover:bg-sky-500/20 border border-slate-700 transition-all ${social.color}`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </GlassCard>

            {/* Quick Response */}
            <GlassCard className="p-6 bg-gradient-to-r from-sky-500/10 to-purple-500/10 border border-sky-500/30">
              <p className="text-slate-300 text-sm">
                💡 <span className="font-semibold">Pro Tip:</span> I typically respond to emails within 24 hours. Feel free to reach out anytime!
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
