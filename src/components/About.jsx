import { faCertificate, faCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import '../App.css';
import '../index.css';
import { certificates, education, skills } from "/constants";

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-800 via-indigo-500 to-teal-400 shadow-lg  py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-white" data-aos="fade-down">About ME</h2>
      
        {/* Tab Navigation */}
        <div className="grid grid-cols-3 gap-4 mb-12" data-aos="fade-down">

        <button
            onClick={() => setActiveTab('skills')}
            className={`p-4 rounded-xl hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)] flex flex-col items-center transition-all ${
              activeTab === 'skills' 
              ? 'bg-cyan-500 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <FontAwesomeIcon icon={faCode} className="text-2xl mb-2" />
            Skills
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`p-4 rounded-xl hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)] flex flex-col items-center transition-all ${
              activeTab === 'education' 
              ? 'bg-cyan-500 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <FontAwesomeIcon icon={faGraduationCap} className="text-2xl mb-2" />
            Education
          </button>
          
       
          
          <button
            onClick={() => setActiveTab('certificates')}
            className={`p-4 rounded-xl hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)] flex flex-col items-center transition-all ${
              activeTab === 'certificates' 
              ? 'bg-cyan-500 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <FontAwesomeIcon icon={faCertificate} className="text-2xl mb-2" />
            Certificates
          </button>
        </div>

        {/* Education Tab Content */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="zoom-in">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-900 transition-colors hover:scale-110">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-purple-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                </div>
                <h4 className="text-xl font-bold text-white">{edu.Stream}</h4>
                <p className="text-gray-300">{edu.university}</p>
                <div className="mt-4 flex justify-between text-gray-400">
                  <span>{edu.year}</span>
                  <span>{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills Tab Content */}
        {activeTab === 'skills' && (
          <div className="space-y-8 text-center" data-aos="fade-up">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={category} data-aos="fade-right" data-aos-delay={index * 100}>
                <h3 className="text-2xl font-bold text-white mb-6 capitalize hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]">
                  {items.map((skill, i) => (
                    <div 
                      key={i}
                      className=" p-4 rounded-xl hover:bg-gray-750 transition-all duration-300 group "
                    >
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="w-16 h-16 mx-auto mb-2 object-contain hover:animate-pulse hover:scale-110 transition-all duration-300 "
                      />
                      <span className="text-center text-white group-hover:text-black">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certificates Tab Content */}
        {activeTab === 'certificates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="zoom-in">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-800 hover:bg-black rounded-xl overflow-hidden hover:shadow-xl transition-all hover:scale-110"
              >
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white  mb-2">{cert.title}</h3>
                    <div className="flex justify-between text-gray-200 text-sm">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl max-w-2xl w-full p-6">
            <img 
              src={selectedCertificate.image} 
              alt="Certificate" 
              className="w-full h-auto mb-4"
            />
            <button
              onClick={() => setSelectedCertificate(null)}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;