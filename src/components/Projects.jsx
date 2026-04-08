import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'Real-time weather application with geolocation and 7-day forecast',
      image: '🌦️',
      tags: ['React', 'API', 'Tailwind CSS'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 3,
      title: 'Blog Platform',
      description: 'CMS-style blog with user authentication and markdown support',
      image: '📝',
      tags: ['Next.js', 'PostgreSQL', 'NextAuth'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 4,
      title: 'Task Manager',
      description: 'Collaborative task management application with real-time updates',
      image: '✓',
      tags: ['React', 'Firebase', 'Real-time'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 5,
      title: 'API Gateway',
      description: 'RESTful API with JWT authentication and role-based access control',
      image: '⚙️',
      tags: ['Node.js', 'Express', 'JWT', 'MongoDB'],
      category: 'backend',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 6,
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with interactive charts and reports',
      image: '📊',
      tags: ['React', 'Chart.js', 'D3.js'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-darker to-dark py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4 text-center gradient-text"
        >
          Featured Projects
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map(cat => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-dark'
                  : 'glass-effect text-primary hover:border-primary'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-lg hover-lift group overflow-hidden"
              >
                <div className="text-5xl md:text-6xl mb-4">{project.image}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-primary bg-opacity-20 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 px-4 py-2 bg-primary bg-opacity-20 text-primary rounded-lg hover:bg-opacity-30 transition text-center font-semibold text-sm"
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-dark rounded-lg hover:shadow-lg transition text-center font-semibold text-sm"
                  >
                    Live
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
