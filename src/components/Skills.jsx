import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiGitBranch, FiZap } from 'react-icons/fi';
import { SiReact, SiNodeDotJs, SiPython, SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: FiCode,
      skills: [
        { name: 'React', icon: SiReact, proficiency: 95 },
        { name: 'TypeScript', icon: SiTypescript, proficiency: 85 },
        { name: 'Tailwind CSS', icon: null, proficiency: 90 }
      ]
    },
    {
      name: 'Backend',
      icon: FiDatabase,
      skills: [
        { name: 'Node.js', icon: SiNodeDotJs, proficiency: 90 },
        { name: 'Python', icon: SiPython, proficiency: 80 },
        { name: 'Express.js', icon: null, proficiency: 88 }
      ]
    },
    {
      name: 'Databases',
      icon: FiDatabase,
      skills: [
        { name: 'MongoDB', icon: SiMongodb, proficiency: 85 },
        { name: 'PostgreSQL', icon: SiPostgresql, proficiency: 82 },
        { name: 'Firebase', icon: null, proficiency: 80 }
      ]
    },
    {
      name: 'Tools',
      icon: FiGitBranch,
      skills: [
        { name: 'Git', icon: FiGitBranch, proficiency: 92 },
        { name: 'Docker', icon: null, proficiency: 75 },
        { name: 'CI/CD', icon: FiZap, proficiency: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-b from-dark to-darker py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16 text-center gradient-text"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass-effect p-6 rounded-lg hover-lift"
              >
                <div className="flex items-center mb-6">
                  <CategoryIcon className="text-primary text-3xl mr-3" />
                  <h3 className="text-lg md:text-xl font-bold">{category.name}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {SkillIcon && <SkillIcon className="text-secondary text-lg" />}
                            <span className="font-semibold text-sm md:text-base">{skill.name}</span>
                          </div>
                          <span className="text-xs md:text-sm text-primary">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-gray-700 bg-opacity-30 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className="h-full bg-gradient-to-r from-primary to-secondary"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-effect p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-4">
            {['JavaScript', 'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Python', 'Docker', 'AWS', 'Git', 'Webpack', 'GraphQL', 'REST API'].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-primary to-secondary bg-opacity-20 border border-primary rounded-full text-sm font-semibold cursor-pointer hover:bg-opacity-30 transition"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
