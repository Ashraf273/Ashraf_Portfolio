import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';
import '../index.css';
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";

const Home = () => {
    return (
      <div   className="bg-gray-900 text-white">
        {/* Hero Section */}
        <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 flex items-center justify-center relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Animated Photo */}
              <div 
                className="flex justify-center md:justify-end animate-spin-slow hover:scale-110"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <img
                  src="images/ash.jpg.png"
                  alt="Ashraf"
                  className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-cyan-400 shadow-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
  
              {/* Content */}
              <div className=" w-full text-center md:text-left space-y-8">
                <h1 
                  className="text-5xl font-bold"
                  data-aos="fade-up"
                >
                  Hi, I&apos;m <span className=" w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"><br/>Mohammad Ashraf</span>
                </h1>
                
                <p 
                  className="text-xl text-gray-300"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Mern Stack Developer & UI/UX Enthusiast
                </p>
  
                {/* Social Links with FontAwesome */}
                <div 
                  className="flex justify-center md:justify-start space-x-6"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <a
                    href="https://github.com/Ashraf273"
                    className="text-gray-300  hover:text-purple-400 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohammadashraf275/"
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
                  </a>
                  <a
                    href="https://x.com/MohammadAs16398"
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faX} className="w-8 h-8" />
                  </a>

                   <a href="tel:9652630274"
                      className="text-gray-300 hover:text-purple-400 transition-all duration-300">
                      <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8" />
                    </a>
                </div>
  
                {/* Action Buttons */}
                <div 
                  className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <a
                    href="https://drive.google.com/file/d/1YeQqIjtDJOzOpuPLCeF4EWiPEbyJ8cLV/view"
                    className="bg-cyan-600 border-2 border-cyan-400 hover:bg-gray-200 hover:text-black hover:animate-bounce hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)] text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <FontAwesomeIcon icon={faFileAlt} />
                    Download Resume
                  </a>
                  <a
                    href="#contact"
                    className="border-2 border-cyan-400 bg-cyan-600 hover:bg-gray-200 hover:text-black hover:animate-bounce hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)] text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects/>
<Experience/>
<Contact/>
<About/>

  
        {/* Rest of the sections */}

        {/* Footer Section */}
        <footer className=" bg-gradient-to-br from-gray-900 via-indigo-600 to-blue-700 py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-200">
                        &copy;{new Date().getFullYear()} Ashraf. All rights reserved
                    </p>
                    <div className="mt-2 flex justify-center space-x-6">
                        <a href="https://github.com/Ashraf273" className="text-gray-200 hover:text-blue-400 transition-all duration-300">Github</a>
                        <a href="https://www.linkedin.com/in/mohammadashraf275/" className="text-gray-200 hover:text-blue-400 transition-all duration-300">LinkedIn</a>
                        <a href="https://x.com/MohammadAs16398" className="text-gray-200 hover:text-blue-400 transition-all duration-300">X</a>
                    </div>
                </div>
            </footer>
      </div>
    );
  };
  




        

export default Home
