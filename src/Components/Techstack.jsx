import React from 'react';
import react1 from '../assets/images/React.png';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import javascript from '../assets/images/JavaScript.png';
import typescript from '../assets/images/Typescript.png';
import tailwindcss from '../assets/images/Tailwindcss.png';
import bootstrap from '../assets/images/Bootstrap.png';
import vite from '../assets/images/Vite.png';
import figma from '../assets/images/Figma.png';
import photoshop from '../assets/images/Photoshop.png';
import canva from '../assets/images/canva.png';
import office from '../assets/images/Microsoft-Office.png';
import github from '../assets/images/github.png';
import php from '../assets/images/php.png';
import mysql from '../assets/images/Mysql.png';
import git from '../assets/images/git.png';
import nodejs from '../assets/images/node-js.png';
import xampp from '../assets/images/xampp.png';
import npm from '../assets/images/Npm.png';
import vsCode from '../assets/images/vs-code.png';
import capcut from '../assets/images/CapCut.png';
import aspnet from '../assets/images/asp-net.png';
import trello from '../assets/images/trello.png';
import visualStudio from '../assets/images/visual-studio.png';

const Techstack = () => {
  // Group the icons into two categories
  const frontendIcons = [
    { src: react1, alt: 'React' },
    { src: html, alt: 'HTML' },
    { src: css, alt: 'CSS' },
    { src: javascript, alt: 'JavaScript' },
    { src: vite, alt: 'Vite' },
    { src: typescript, alt: 'TypeScript' },
    { src: bootstrap, alt: 'Bootstrap' },
    { src: tailwindcss, alt: 'Tailwind CSS' },
    { src: figma, alt: 'Figma' },
    { src: canva, alt: 'Canva' },
    { src: photoshop, alt: 'Adobe Photoshop' },
    { src: office, alt: 'Microsoft Office' },
  ];

  const toolsIcons = [
    { src: github, alt: 'GitHub' },
    { src: nodejs, alt: 'Node.js' },
    { src: php, alt: 'PHP' },
    { src: mysql, alt: 'MySQL' },
    { src: xampp, alt: 'XAMPP' },
    { src: npm, alt: 'npm' },
    { src: git, alt: 'Git' },
    { src: vsCode, alt: 'VS Code' },
    { src: capcut, alt: 'CapCut' },
    { src: aspnet, alt: 'ASP.NET' },
    { src: trello, alt: 'Trello' },
    { src: visualStudio, alt: 'Visual Studio' },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Frontend Technologies */}
        <div className="mb-12 relative">
          <div className="relative overflow-hidden">
            {/* Fade effect on left */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-gray-50 to-transparent dark:from-white"></div>
            {/* Fade effect on right */}
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-gray-50 to-transparent dark:from-white"></div>
            
            <div className="flex items-center">
              <div className="animate-slide flex">
                {[...frontendIcons, ...frontendIcons].map((icon, index) => (
                  <div key={index} className="flex-shrink-0 mx-4 group">
                    <img 
                      src={icon.src} 
                      alt={icon.alt} 
                      className="w-10 h-10 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
                      title={icon.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider with Tools I USE text */}
        <div className="flex items-center justify-center my-12">
          <div className="flex items-center">
            <div className="h-9 w-0.5 bg-blue-500 mx-2"></div>
            <span className="text-lg lg:text-xl font-semibold bg-gradient-to-b from-[#1565C0] to-[#0A2F5A] bg-clip-text text-transparent">TOOLS I USE</span>
          </div>
        </div>
        
        {/* Tools Section */}
        <div className="relative">
          <div className="relative overflow-hidden">
            {/* Fade effect on left */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-gray-50 to-transparent dark:from-white"></div>
            {/* Fade effect on right */}
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-gray-50 to-transparent dark:from-white"></div>
            
            <div className="flex items-center">
              <div className="animate-slide-reverse flex">
                {[...toolsIcons, ...toolsIcons].map((icon, index) => (
                  <div key={index} className="flex-shrink-0 mx-4 group">
                    <img 
                      src={icon.src} 
                      alt={icon.alt} 
                      className="w-10 h-10 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
                      title={icon.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-slide {
          display: flex;
          animation: slide 30s linear infinite;
          will-change: transform;
        }

        .animate-slide-reverse {
          display: flex;
          animation: slideReverse 30s linear infinite;
          will-change: transform;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slideReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .animate-slide, .animate-slide-reverse {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default Techstack;