import { useEffect, useState } from "react";
import '../App.css';
import '../index.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toogleMobileMenu=()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const [activeNav, setActiveNav] = useState('#home');
    useEffect(() => {
        const handleScroll=()=>{
        const sections=document.querySelectorAll("section")
        const scrollPosition=window.scrollY + 100

        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight=section.clientHeight
            if(scrollPosition >=sectionTop && scrollPosition < sectionTop + sectionHeight){
                setActiveNav(`#${section.id}`)
            }
        })
    }
    window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);


    
  return (
      <nav className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 shadow-lg fixed w-full top-0 z-50">
        <div className="max-w h-15 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center ">
                {/* for Naming*/}
                <div className="flex-shrink-0">
                    <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400  to-cyan-400 hover:from-pink-400 hover:to-yellow-400 transition-all duration-500">
                        Mohammad Ashraf
                    </a>
                </div>
 {/* for elements in navbar*/}
                <div className="hidden md:flex  justify-end flex-grow space-x-8">
                    <a href="#home" className={`${activeNav==="#home" ? "animate-bounce text-white border-b-2 border-indigo-600" :"text-gray-200 hover:text-indigo-900 "} px-3 py-2 transition-all duration-300 `}>
                       Home
                    </a>

                    <a href="#projects" className={`${activeNav==="#projects" ? "animate-bounce text-white border-b-2 border-indigo-600" :"text-gray-200 hover:text-indigo-900"} px-3 py-2 transition-all duration-300`}>
                       Projects
                    </a>

                    <a href="#experience" className={`${activeNav==="#experience" ? "animate-bounce text-white border-b-2 border-indigo-600" :"text-gray-200 hover:text-indigo-900"} px-3 py-2 transition-all duration-300`}>
                       Experience
                    </a>

                    <a href="#contact" className={`${activeNav==="#contact" ? "animate-bounce text-white border-b-2 border-indigo-600" :"text-gray-200 hover:text-indigo-900"} px-3 py-2 transition-all duration-300`}>
                       Contact
                       </a>

                       <a href="#about" className={`${activeNav==="#about" ? "animate-bounce text-white border-b-2 border-indigo-600" :"text-gray-200 hover:text-indigo-900"} px-3 py-2 transition-all duration-300`}>
                       About
                       </a>
                </div>

 {/* for mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-purple-700 focus:outline-none transition-all duration-300"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    onClick={toogleMobileMenu}
                    >
                        <span className="sr-only">Open Main Menu</span>

 {/* for hamburger menu*/}
                    <svg className="h-6 w-6"
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">

                    <path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6H16M4 12H16M4 18H16"/>
                    </svg>
                    </button>
                </div>
            </div>
        </div>

 {/* for mobile menu*/}
 {isMobileMenuOpen &&(
        <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#home" className={`${activeNav==="#home" ? "text-white border-purple-700" :"text-gray-200 hover:bg-purple-700"} block px-3 py-2 rounded-md text-sm font-medium`}>
                    Hom
                </a>

                <a href="#projects" className={`${activeNav==="#projects" ? "text-white border-purple-700" :"text-gray-200 hover:bg-purple-700"} block px-3 py-2 rounded-md text-sm font-medium`}>
                    Projects
                </a>

                <a href="#experience" className={`${activeNav==="#experience" ? "text-white border-purple-700" :"text-gray-200 hover:bg-purple-700"} block px-3 py-2 rounded-md text-sm font-medium`}>
                    Experience
                </a>

                <a href="#contact" className={`${activeNav==="#contact" ? "text-white border-purple-700" :"text-gray-200 hover:bg-purple-700"} block px-3 py-2 rounded-md text-sm font-medium`}>
                    Contact
                </a>

                <a href="#about" className={`${activeNav==="#about" ? "text-white border-purple-700" :"text-gray-200 hover:bg-purple-700"} block px-3 py-2 rounded-md text-sm font-medium`}>
                    About
                </a>

            </div>
        </div>
        )}
      </nav>
  )
}

export default Navbar
