import React, { useState, useEffect } from 'react';
import { HiChevronRight } from "react-icons/hi";
import ShiedHero from '../assets/images/shiedsticker-hero.svg';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";
// import mail from '../assets/images/mail.png';
// import linkedin from '../assets/images/linkedin1.svg';
// import github from '../assets/images/github.svg';
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Creative.", "Detail-Oriented.", "Reliable."];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1300); // Change word every 1.3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative container mx-auto flex flex-col md:flex-row justify-between items-center pt-26 md:pt-28 lg:pt-30 pb-6 px-4 sm:px-6 lg:px-8 min-h-[500px] md:min-h-[600px]"
    >
      {/* Background Gradient Circles */}
      <div className="absolute -z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#90CAF9] opacity-50 blur-[120px] md:blur-[250px] top-[-20%] right-[-40%] md:top-[-25%] md:right-[-50%] lg:top-[-40%] lg:right-[-25%]"></div>
      <div className="absolute -z-10 w-[200px] h-[200px] md:w-[379px] md:h-[371px] bg-[#0A4991] opacity-50 blur-[90px] md:blur-[200px] bottom-[-20%] left-[-40%] md:left-[-50%] md:bottom-[-40%] lg:left-[-30%] lg:bottom-[-60%]"></div>

        {/* Left col */}
        <div className='w-full md:w-1/2 space-y-8'>
            <div className="text-left">
            <p className="text-gray-600 text-lg mb-4">Hello! 
              <span className="wave-hand text-2xl md:text-3xl lg:text-4xl">👋🏻</span>
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              I'm Shiedrick Bacolod
            </h1>
            <div className="h-12 md:h-14 lg:h-16 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.1 }}
                  className="text-xl lg:text-2xl font-semibold mb-4 bg-gradient-to-b from-[#90caf9] to-[#1E88E5] bg-clip-text text-transparent"
                >
                  {words[currentWordIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <p className="text-gray-600 text-lg md:text-xl max-w-xl mb-6">
              I am passionate about web development, specializing in UI/UX and front-end design to deliver impactful, high-quality solutions.
            </p>
            <button className=" w-30 bg-[#0D47A1] text-white rounded-full px-6 py-2 font-semibold hover:bg-blue-700 text-sm transition-all hover:shadow-lg hover:shadow-blue-100 cursor-pointer">
                <a href="#about" className="flex items-center justify-center">Dive in
                    <HiChevronRight className="size-4 ml-2" />
                </a>
            </button>
          </div>
        </div>


        {/* Right col */}
        <div className='w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center mt-8 md:mt-0'>
        {/* Hero Image */}
        <div className="flex-shrink-0">
          <img src={ShiedHero} alt="Shiedrick Bacolod" className="w-[260px] h-[238px] lg:w-[371.69px] lg:h-[340px]" />
        </div>
        {/* Social Icons */}
        <div className="flex md:flex-col flex-row md:ml-6 ml-0 mt-4 md:mt-0 gap-4 ">
          <a
            href="mailto:shiedrickbacolod@21.gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center transition-all transform-gpu will-change-transform"
          >
            <FaEnvelope title="Gmail" className="w-4 h-4 lg:w-5.5 lg:h-6 text-[#0D47A1] transition-transform duration-200 hover:scale-110" />
          </a>
          <a
            href="https://linkedin.com/in/shiedrick-bacolod-095b75208/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center transition-all transform-gpu will-change-transform"
          >
            <FaLinkedin title="LinkedIn" className="w-4 h-4 lg:w-6 lg:h-6 text-[#0D47A1] transition-transform duration-200 hover:scale-110" />
          </a>
          <a
            href="https://github.com/shied21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center transition-all transform-gpu will-change-transform"
          >
            <FaGithub title="GitHub" className="w-4 h-4 lg:w-6 lg:h-6 text-[#0D47A1] transition-transform duration-200 hover:scale-110" />
          </a>
        </div>
      </div>

      {/* Add this style tag for the wave animation */}
      <style jsx>{`
        .wave-hand {
          display: inline-block;
          margin-left: 8px;
          animation: wave 1.5s ease-in-out infinite;
          transform-origin: 70% 70%;
        }
        
        @keyframes wave {
          0% { transform: rotate(0deg) scale(1); }
          15% { transform: rotate(-14deg) scale(1.1); }
          30% { transform: rotate(15deg) scale(1.1); }
          45% { transform: rotate(-10deg) scale(1.1); }
          60% { transform: rotate(10deg) scale(1.1); }
          75% { transform: rotate(-5deg) scale(1.1); }
          100% { transform: rotate(0deg) scale(1); }
        }
      `}</style>
    </section>
  )
}

export default Hero;