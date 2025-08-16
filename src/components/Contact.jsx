import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-purple-50'}`}>
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className={`border-b-4 ${darkMode ? 'border-purple-400' : 'border-purple-500'} pb-2`}>
            Get In Touch
          </span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-8"
          >
            <motion.h3 
              whileHover={{ x: 5 }}
              className={`text-2xl font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-500'}`}
            >
              Contact Information
            </motion.h3>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-purple-100'} transition-all shadow-md`}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  className={`p-3 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-purple-200'} text-purple-500`}
                >
                  <FiMail className="text-xl" />
                </motion.div>
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</h4>
                  <a 
                    href="mailto:arpitapanda027@gmail.com" 
                    className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                  >
                    arpitapanda027@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-purple-100'} transition-all shadow-md`}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  className={`p-3 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-purple-200'} text-purple-500`}
                >
                  <FiMapPin className="text-xl" />
                </motion.div>
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Location</h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Kalmpur,kalahandhi, Odisha, India
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-purple-100'} transition-all shadow-md`}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  className={`p-3 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-purple-200'} text-purple-500`}
                >
                  <FiPhone className="text-xl" />
                </motion.div>
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                  >
                    +91 89260 60494
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <motion.form 
              whileHover={{ scale: 1.01 }}
              className={`p-8 rounded-xl shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} transition-all`}
            >
              <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-purple-300' : 'text-purple-500'}`}>
                Send Me a Message
              </h3>
              
              <div className="space-y-6">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label 
                    htmlFor="name" 
                    className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                    placeholder="Your name"
                  />
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label 
                    htmlFor="email" 
                    className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                    placeholder="Your email"
                  />
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label 
                    htmlFor="message" 
                    className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                    placeholder="Your message"
                  ></textarea>
                </motion.div>
                
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className={`w-full py-4 rounded-lg font-medium ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white transition-all`}
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;