import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
  const educationItems = [
    {
      title: "Bachelor of Science in Computer Science",
      year: "2023",
      institution: "Your University"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 80 }
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className={`border-b-4 ${darkMode ? 'border-purple-400' : 'border-purple-500'} pb-2`}>
            About Me
          </span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className={`text-lg mb-8 p-6 rounded-xl transition-all ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'}`}
            >
              I'm a recent Computer Science graduate with a strong passion for web development. 
              I specialize in creating modern, responsive applications using cutting-edge technologies.
            </motion.p>
            
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className={`text-lg p-6 rounded-xl transition-all ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'}`}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
              or working on personal projects to expand my skillset.
            </motion.p>
          </motion.div>

          {/* Education & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 grid grid-cols-1 gap-6"
          >
            {/* Education Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl shadow-lg transition-all ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'}`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-500'}`}>Education</h3>
              {educationItems.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="mb-4 last:mb-0"
                >
                  <h4 className="font-bold">{item.title}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.institution} • {item.year}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl shadow-lg transition-all ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'}`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-500'}`}>My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{skill.name}</span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{skill.level}%</span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;