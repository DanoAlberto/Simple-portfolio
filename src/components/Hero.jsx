import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="text-6xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Hi, I'm DanoAlberto</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl md:text-4xl text-primary font-semibold mb-6">
            Full Stack Developer & Creative Coder
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          <p>
            I craft beautiful, interactive web experiences with modern technologies. 
            Passionate about React, Node.js, and building products that matter.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-dark font-bold rounded-lg hover:shadow-lg transition"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:bg-opacity-10 transition"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
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
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="p-3 glass-effect rounded-full hover-lift"
                title={social.label}
              >
                <Icon className="text-primary text-2xl" />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <FiArrowDown className="text-primary text-3xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
