import { experiences } from "/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import '../index.css';

const Experience = () => {
  

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-600 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white" data-aos="fade-down">
          <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
         Intern Journey
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-1 h-full bg-purple-500 transform -translate-x-1/2"></div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative group ${index % 2 === 0 ? 'pr-20' : 'pl-20'}`}
                data-aos="zoom-in"
              >
                {/* Experience Card */}
                <div className="relative hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)] bg-gray-900 p-8 rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-105 hover:z-20 hover:shadow-2xl hover:bg-gray-750">
                  <div className={`absolute top-1/2 ${index % 2 === 0 ? '-right-20' : '-left-20'} transform -translate-y-1/2`}>
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className={`text-3xl text-purple-500 ${index % 2 === 0 ? '' : 'rotate-180'}`} 
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{exp.Role}</h3>
                  <p className="text-gray-300 text-lg mb-2">{exp.company}</p>
                  <p className="text-gray-300 text-lg mb-2">{exp.work}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                  
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li 
                        key={i}
                        className="text-gray-300  duration-500 "
                      >
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector Line */}
                {exp.connector && (
                  <div className={`absolute top-1/2 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-20 h-1 bg-purple-500 transform -translate-y-1/2`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
