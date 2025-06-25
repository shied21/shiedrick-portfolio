import React, { useState, useEffect } from 'react';
import { FaRegFileLines } from "react-icons/fa6";
import shiedow from '../assets/images/shiedoww.png';
import shiedssg from '../assets/images/shied-ssg.png';
import shiedmyt from '../assets/images/shied-myt.png';

const About = () => {
  const images = [shiedssg, shiedow, shiedmyt];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate images in one direction
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getImageStyle = (index, isMd = false) => {
    const position = (index - currentIndex + images.length) % images.length;
    const spacing = isMd ? 30 : 20;
    
    if (position === images.length - 1) {
      return {
        transform: `translateX(-${60 + spacing}%) rotate(-6deg)`,
        height: '90%',
        zIndex: 10,
        opacity: 1
      };
    }
    else if (position === 0) {
      return {
        transform: 'translateX(-50%) rotate(0deg)',
        height: '100%',
        zIndex: 20,
        opacity: 1
      };
    }
    else if (position === 1) {
      return {
        transform: `translateX(-${40 - spacing}%) rotate(6deg)`,
        height: '90%',
        zIndex: 10,
        opacity: 1
      };
    }
    return { opacity: 0 };
  };

  // Mobile view
  const renderMobileView = () => (
    <div className="md:hidden relative h-96 w-full flex justify-center items-center mt-8">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-500 flex justify-center items-center ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="h-full w-auto rounded-2xl aspect-[3/4]">
            <img 
              src={img} 
              alt="Work showcase"
              className="h-full w-full object-cover border-4 border-white rounded-2xl shadow-md"
            />
          </div>
        </div>
      ))}
    </div>
  );

  // Medium view
  const renderMdView = () => (
    <div className="hidden md:flex lg:hidden relative h-96 w-full justify-center items-center mt-8">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent z-15 rounded-2xl"></div>
      {images.map((img, index) => {
        const style = getImageStyle(index, true);
        return (
          <div
            key={index}
            className="absolute top-1/2 left-1/2 transition-all duration-500"
            style={{
              ...style,
              width: 'auto',
              aspectRatio: '3/4',
              transform: `${style.transform} translateY(-50%)`,
            }}
          >
            <div className="h-full w-full rounded-2xl shadow-md">
              <img 
                src={img} 
                alt="Work showcase"
                className="h-full w-full object-cover border-4 border-white rounded-2xl"
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  // Large view
  const renderLgView = () => (
    <div className="hidden lg:flex relative h-96 w-full justify-center items-center">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent z-15 rounded-2xl"></div>
      {images.map((img, index) => {
        const style = getImageStyle(index);
        return (
          <div
            key={index}
            className="absolute top-1/2 left-1/2 transition-all duration-500"
            style={{
              ...style,
              width: 'auto',
              aspectRatio: '3/4',
              transform: `${style.transform} translateY(-50%)`,
            }}
          >
            <div className="h-full w-full rounded-2xl shadow-md">
              <img 
                src={img} 
                alt="Work showcase"
                className="h-full w-full object-cover border-4 border-white rounded-2xl"
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section id="about" className="py-10 relative" style={{scrollMarginTop: "-4rem"}}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-9 md:w-12 lg:w-14 h-px bg-[#0D47A1]"></div>
            <span className="text-[#7EB1FF] text-md lg:text-lg font-medium">about</span>
            <div className="w-9 md:w-12 lg:w-14 h-px bg-[#0D47A1]"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-b from-[#1565C0] to-[#0A2F5A] bg-clip-text text-transparent">WHO AM I</h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Centered on all screens */}
          <div className="order-1 lg:order-2 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-full ">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a fresh IT graduate with a keen eye for design and detail. I bring ideas to life 
                through intuitive user interfaces and seamless digital experiences. My journey in web 
                development is driven by creativity, technical expertise, and a commitment to delivering 
                solutions that truly make an impact.
              </p>
              
              <div className="flex justify-center lg:justify-start mt-6">
                <a
                  href="https://drive.google.com/file/d/1-IhF_N8fTZbmPjBNfH9CLfrkKiWlxSje/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex font-medium items-center space-x-2 bg-blue-100 text-blue-600 px-6 py-3 rounded-2xl transition-colors hover:shadow-lg cursor-pointer"
                >
                  <span>View Resume</span>
                  <FaRegFileLines className="size-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Images - Centered on sm/md, left-aligned on lg+ */}
          <div className="order-2 lg:order-1 w-full">
            {renderMobileView()}
            {renderMdView()}
            {renderLgView()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;