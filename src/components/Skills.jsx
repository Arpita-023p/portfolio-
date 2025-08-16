import { motion } from 'framer-motion';

const Skills = ({ darkMode }) => {
  const skills = [
    { name: "JavaScript", level: 90, icon: "JS" },
    { name: "React", level: 85, icon: "⚛️" },
    { name: "HTML/CSS", level: 95, icon: "</>" },
    { name: "Node.js", level: 80, icon: "🟢" },
    { name: "Python", level: 75, icon: "🐍" },
    { name: "MongoDB", level: 70, icon: "🍃" }
  ];

  const categories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML/CSS", "Tailwind"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "MongoDB"]
    },
    {
      title: "Tools",
      skills: ["Git", "VS Code", "Figma", "Postman"]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-purple-50'}`}>
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className={`border-b-4 ${darkMode ? 'border-purple-400' : 'border-purple-500'} pb-2`}>
            My Skills
          </span>
        </motion.h2>

        {/* Skill Bars Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md transition-all`}
            >
              <div className="flex items-center gap-4 mb-3">
                <motion.span 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`text-2xl p-2 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-purple-100'}`}
                >
                  {skill.icon}
                </motion.span>
                <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {skill.name}
                </h3>
              </div>
              <div className={`w-full h-3 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, type: 'spring' }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-right mt-1 text-sm text-purple-500 font-medium"
              >
                {skill.level}%
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-purple-100'} shadow-lg transition-all`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-500'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'} transition-colors`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;