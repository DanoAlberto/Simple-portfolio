import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '25+' },
    { label: 'Years Experience', value: '3+' },
    { label: 'Happy Clients', value: '15+' },
    { label: 'Technologies', value: '20+' }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-dark to-darker py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12 text-center gradient-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-base md:text-lg text-gray-300 space-y-6"
          >
            <p>
              Hello! I'm a passionate Full Stack Developer with a love for creating beautiful, 
              functional web applications. I specialize in building interactive experiences using 
              modern technologies like React and Node.js.
            </p>

            <p>
              With over 3+ years of experience in web development, I've worked on various projects 
              ranging from startup MVPs to large-scale applications. I'm constantly learning and 
              staying updated with the latest industry trends.
            </p>

            <p>
              When I'm not coding, you'll find me contributing to open-source projects, 
              writing technical blogs, or exploring new technologies. I believe in writing clean, 
              maintainable code and creating amazing user experiences.
            </p>

            <div className="pt-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-secondary text-dark font-bold rounded-lg hover:shadow-lg transition"
              >
                Let's Connect
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-8 rounded-lg text-center hover-lift"
          >
            <div className="text-7xl md:text-8xl mb-6">👨‍💻</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">DanoAlberto</h3>
            <p className="text-primary text-lg font-semibold mb-4">Full Stack Developer</p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Poland / Remote</p>
              <p>💻 React • Node.js • Full Stack</p>
              <p>🎓 Self-taught & Certified Developer</p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 rounded-lg text-center hover-lift"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
