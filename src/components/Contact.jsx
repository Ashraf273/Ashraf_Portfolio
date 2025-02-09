import emailjs from '@emailjs/browser';
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck, faCircleXmark, faEnvelope, faMapMarkerAlt, faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import '../App.css';
import '../index.css';


const Contact = () => {



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      setFormData({ name: '', email: '', phone:'',message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      setIsSuccess(false);
    } finally {
      setShowPopup(true);
      setIsSending(false);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  const handleChange =(e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-700 to-cyan-700 py-16 relative">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-white" data-aos="fade-down">Get in Touch</h2>


            <div className="grid md:grid-cols-2 gap-12" data-aos="fade-up">
                    <div className="bg-gray-800 p-8 rounded lg shadow-lg hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]">
                        <form  onSubmit={handleSubmit} className="space-y-6"> 
                            <div>
                                <label className="block text gray-300 mb-2">Name</label>
                                <input 
                                type="text" 
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-400 focus:border-transparent" 
                                placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label className="block text gray-300 mb-2">Email</label>
                                <input 
                                type="email" 
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-400 focus:border-transparent" 
                                placeholder="Your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text gray-300 mb-2">Phone Number</label>
                                <input 
                                type="numbers"
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-400 focus:border-transparent" 
                                placeholder="+91"
                                />
                            </div>

                            <div>
                            <label className="block text gray-300 mb-2">Message</label>
                            <textarea 
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                            placeholder="Your Message"
                            >
                            </textarea>
                            </div>

                            <button type="submit" disabled={isSending} className="w-full bg-cyan-400  text-white hover:bg-white hover:text-black px-3 py-3 rounded-md transition-all duration-300 disabled:opacity-50"> 
                                { isSending ? 'sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>


{/* contact info */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]">
       <div className="p-0.5 border-b border-gray-700"> 
        <h3 className="text-4xl font-bold text-center mb-3 text-white" data-aos="fade-down">Contact Information</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-12" data-aos="fade-up">                
          <div className="space-y-6">
            <div className="flex items-center text-gray-300 hover:text-white transition-colors hover:scale-110">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 mr-4" />
              <p>Bapatla, Andhra Pradesh</p>
            </div>
            <div className="flex items-center text-gray-300 hover:text-white transition-colors hover:scale-110">
              <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-4" />
              <p>+91 9652630274</p>
            </div>
            <div className="flex items-center text-gray-300 hover:text-white transition-colors hover:scale-110">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mr-4" />
              <p>mohammadahraf2746@gamil.com</p>
            </div>
          </div>
          </div>        

                    {/* social links */}
                    <div className="pt-6 border-t border-gray-700">
                        <h3 className="text-xl font-bold text-purple-400 mb-4">Find Me On</h3>
                        <div className="flx space-x-6">
  
                          <div className="flex justify-center md:justify-start space-x-6" data-aos="fade-up" data-aos-delay="400">
                                          <a
                                            href="https://github.com/Ashraf273"
                                            className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                                          >
                                            <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
                                          </a>
                                          <a
                                            href="https://www.linkedin.com/in/mohammadashraf275/"
                                            className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
                                          >
                                            <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
                                          </a>
                                          <a
                                            href="tel:9652630274"
                                            className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
                                          >
                                            <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8" />
                                          </a>
                                          <a
                                            href="https://www.instagram.com/its27_ashraf/"
                                            className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
                                            >
                                            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
                                          </a>
                                          <a
                                            href="https://x.com/MohammadAs16398"
                                            className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
                                          >
                                            <FontAwesomeIcon icon={faX} className="w-8 h-8" />
                                          </a>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
             {/* Success/Error Popup */}
        {showPopup && (
          <div className="fixed bottom-8 right-8 bg-gray-800 p-6 rounded-xl shadow-xl flex items-center space-x-4 animate-slideIn">
            <FontAwesomeIcon 
              icon={isSuccess ? faCircleCheck : faCircleXmark} 
              className={`text-3xl ${isSuccess ? 'text-green-400' : 'text-red-400'}`}
            />
            <div>
              <p className="text-white font-medium">
                {isSuccess 
                  ? "Message sent successfully!" 
                  : "Failed to send message. Please try again."}
              </p>
              <p className="text-gray-400 text-sm mt-1">
                {isSuccess && "I'll respond within 24 hours."}
              </p>
            </div>
          </div>
        )}
        </div>
    </section>
  )
}

export default Contact
