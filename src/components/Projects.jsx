import { title } from 'framer-motion/client';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Flipkart Clone (MyShop)",
      description: "Built a responsive e-commerce platform using Javascript and REST APIs. Features include cart, wishlist, search, and user authentication using Local Storage.",
      technologies: ["HTML", "CSS", "JavaScript", "DOM API"],
      github: "https://github.com/Arpita-023p",
      demo: "#",
      image: "/images/project/myshop.jpg"
    },
    {
      title: "ReactJS Frontend Web Application",
      description: "Modular SPA with React Router and Jest testing.",
      technologies: ["React.js", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Arpita-023p",
      demo: "#",
      image: "/images/project/e-commerce.jpg"
    },
    {
      title: "Password Generator (SecurePass)",
      description: "Built a responsive password generator using JavaScript that creates strong, customizable passwords with features like length adjustment and character type selection.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Arpita-023p",
      demo: "#",
      image: "/images/project/password-genertor.jpg"
    },
    {
      title: "Weather App",
      description: "Developed a responsive weather application that fetches real-time weather data from an API with location-based search and dynamic display of weather conditions.",
      technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
      github: "https://github.com/Arpita-023p",
      demo: "#",
      image: "/images/project/weather.jpg"
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "Fully interactive Tic-Tac-Toe game featuring player turn tracking, win/draw detection, and a reset button for quick replayability.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Arpita-023p/Tik-tak-toe",
      demo: "#",
      image: "/images/project/tic-tac-toe.jpg"
    },
    {
     title:"Windows clone",
    description:"Includes a taskbar, start menu, and draggable windows,Mimics the look and feel of a real desktop environment inside the browser.Great practice project for frontend design and DOM manipulation.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Arpita-023p/Microsoft-windows-clone",
    demo: "#",
    image: "/images/project/windows-clone.jpg"
    }
    
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-purple-500 pb-2">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-600">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-purple-100 text-purple-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
                  >
                    <FiGithub />
                    <span>Code</span>
                  </a>
                  {project.demo !== "#" && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
                    >
                      <FiExternalLink />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;