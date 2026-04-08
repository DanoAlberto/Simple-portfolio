import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-effect border-t border-primary border-opacity-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-bold gradient-text mb-2">DanoAlberto</div>
            <p className="text-gray-400">Full Stack Developer & Creative Coder</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-primary transition block"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {[
                { icon: FiGithub, url: 'https://github.com', label: 'GitHub' },
                { icon: FiLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: FiMail, url: 'mailto:your.email@example.com', label: 'Email' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="p-2 text-primary hover:text-secondary transition"
                    title={social.label}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-primary border-opacity-20 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} DanoAlberto. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 glass-effect rounded-full hover-lift"
            title="Back to Top"
          >
            <FiArrowUp className="text-primary text-xl" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
