import React from 'react'
import { FaFacebook, FaSquareInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import linkedin from '../assets/images/linkedin.svg'
import github from '../assets/images/github.svg'

const Footer = () => {
  return (
    <footer className="bg-[#0E4DA4] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 lg:py-12 flex flex-col md:flex-row items-start gap-4 lg:gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Fueled by passion,<br />
            <span className="text-[#B4C9F5] font-semibold">driven by results.</span>
          </h2>

          <div className="flex gap-2 lg:gap-4 mt-4 lg:mt-6">
            <a
              href="https://www.facebook.com/shiedrick.bacolod"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-left transition-all transform-gpu will-change-transform"
            >
              <FaFacebook
                title="Facebook"
                className="w-6 h-6 lg:w-8 lg:h-8 text-white transition-transform duration-200 hover:scale-110"
              />
            </a>
            <a
              href="https://www.instagram.com/sshiedrck_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-left transition-all transform-gpu will-change-transform"
            >
              <FaSquareInstagram
                title="Instagram"
                className="w-6 h-6 lg:w-8 lg:h-8 text-white transition-all hover:scale-110"
              />
            </a>
            <a
              href="https://linkedin.com/in/shiedrick-bacolod-095b75208/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-left transition-all transform-gpu will-change-transform"
            >
              <FaLinkedin
                title="LinkedIn"
                className="w-6 h-6 lg:w-8 lg:h-8 text-white transition-all hover:scale-110"
              />
            </a>
            <a
              href="https://github.com/shied21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-left transition-all transform-gpu will-change-transform"              
            >
              <FaGithub
                title="GitHub"
                className="w-6 h-6 lg:w-8 lg:h-8 text-white transition-all hover:scale-110"
              />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-sm space-y-6 lg:mt-8 md:ml-30 lg:ml-50">
          <div>
            <p className="font-semibold text-base">Email</p>
          <a
            href="mailto:shiedrickbacolod@21.gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p >shiedrickbacolod21@gmail.com</p>
          </a>            
          </div>
          <div>
            <p className="font-semibold text-base">Phone</p>
          <a
            href="tel:09913720701"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>+63991 372 0701</p>
          </a>            
          </div>
          <div>
            <p className="font-semibold text-base">Address</p>
            <p>Cebu City, Philippines 6000</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#063D87] text-center py-4 text-sm text-white">
        © Shiedrick Bacolod | All Rights Reserved 2025.
      </div>
    </footer>
  )
}

export default Footer