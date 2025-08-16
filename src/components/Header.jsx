import { FaMoon, FaSun, FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          <span className={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Arpita</span> Panda
        </a>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-purple-500 transition">About</a>
            <a href="#skills" className="hover:text-purple-500 transition">Skills</a>
            <a href="#projects" className="hover:text-purple-500 transition">Projects</a>
            <a href="#contact" className="hover:text-purple-500 transition">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Arpita-023p" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/arpita-panda-039662275/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
            >
              <FaLinkedin className="text-xl text-blue-500" />
            </a>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
            >
              {darkMode ? <FaSun className="text-xl text-yellow-300" /> : <FaMoon className="text-xl" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;