import { motion } from 'framer-motion';
import { useCursorContext } from './CursorContext';

const Resume = ({ darkMode }) => {
  const { setHovered } = useCursorContext();
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className={`border-b-4 ${darkMode ? 'border-purple-400' : 'border-purple-600'}`}>
            Resume
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-purple-50'}`}
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-500">Education</h3>
            {/* Add your education details */}
          </motion.div>
          
          {/* Experience */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-purple-50'}`}
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-500">Experience</h3>
            {/* Add your experience */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;