import { faCodeBranch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

import '../index.css';
import { projects } from "/constants";
const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white" data-aos="fade-down">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group perspective-1000 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)] min-h-[535px] mb-8 hover:z-10 " data-aos="fade-up">
              <div className="relative w-full h-full preserve-3d transition-all duration-700 group-hover:rotate-y-180 ">
                {/* Front Side */}
                <div className="absolute w-full h-full  bg-gray-900 rounded-2xl p-6 shadow-xl backface-hidden transform transition-transform duration-300 group-hover:scale-105">
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='p-3 bg-accent-purple/10 rounded-lg'>
                    <img src={project.logo} alt={project.title} className="w-15 h-15 object-cover rounded-xl bg-none"/>

                    </div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4 text-card-light">{project.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-accent-purple/20 text-accent-purple rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                      ))}
                  </div>
                  <ul className="space-y-2">
                    {project.description.map((point, i) => (
                      <li 
                        key={i}
                        className="text-gray-300  duration-500 "
                      >
                        • {point}
                      </li>
                    ))}
                  </ul>
                      <div className="text-center mt-4">
                      <span className="text-gray-400 text-sm ">Hover to explore Project</span>
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full bg-gray-750 rounded-2xl p-6 shadow-xl backface-hidden transform rotate-y-180 scale-95 group-hover:scale-100">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-4">Project Links</h3>
                      <div className="space-y-4">
                        <a
                          href={project.demo}
                          className="flex items-center text-gray-200 hover:text-cyan-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                          Live Demo
                        </a>
                        <a
                          href={project.code}
                          className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faCodeBranch} className="mr-2" />
                          View Code
                        </a>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="text-gray-400 text-sm">Hover to flip back</span>
                    </div>
                  </div>
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