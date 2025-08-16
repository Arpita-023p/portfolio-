import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Hero = ({ darkMode }) => {
  const handleDownload = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className={`min-h-screen flex items-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className={`bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
              Arpita Panda
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-8">
            Aspiring <span className={`${darkMode ? 'text-purple-300' : 'text-purple-500'} hover:text-pink-400 transition-colors`}>
              Software Developer
            </span>
          </h2>
          
          <p className={`text-lg mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Passionate about building modern web applications. Fresh Computer Science graduate with expertise in JavaScript, React, and full-stack development.
          </p>
          
          {/* Buttons */}
          <div className="flex gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className={`px-8 py-4 rounded-full font-medium shadow-lg transition-all ${
                darkMode 
                  ? 'bg-purple-600 hover:bg-purple-700 shadow-purple-900/50' 
                  : 'bg-purple-500 hover:bg-purple-600 shadow-purple-400/30'
              } text-white`}
            >
              Contact Me
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className={`px-8 py-4 rounded-full font-medium flex items-center gap-3 border-2 transition-all ${
                darkMode 
                  ? 'border-purple-400 text-white hover:bg-gray-800/50 hover:shadow-purple-400/20' 
                  : 'border-purple-500 text-gray-800 hover:bg-purple-50 hover:shadow-purple-500/20'
              } shadow-md`}
            >
              <FiDownload className="text-xl" />
              Resume
            </motion.button>
          </div>
        </motion.div>
        
        {/* Profile Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
            darkMode ? 'border-purple-400/30' : 'border-purple-500/30'
          } group`}>
            <motion.img 
              src="/images/profile.jpg" 
              alt="Arpita Panda" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              whileHover={{ scale: 1.05 }}
            />
            <div className={`absolute inset-0 rounded-full ${
              darkMode ? 'bg-purple-900/20' : 'bg-purple-100/20'
            } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;