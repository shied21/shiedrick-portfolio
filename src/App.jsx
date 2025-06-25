import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Header from './Components/Header.jsx'
import Hero from './Components/Hero.jsx'
import Services from './Components/Services.jsx'
import About from './Components/About.jsx'
import Techstack from './Components/Techstack.jsx'
import Projects from './Components/Projects.jsx'
import Experience from './Components/Experience.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import ScrollTop from './Components/ScrollTop.jsx'

function App() {

  return (
    <main className='min-h-screen overflow-x-hidden'>
      <div className='overflow-hidden'>
        <Header />
        <Hero />
        <Services />
        <About />
        <Techstack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />

        <ScrollTop />
      </div>
    </main>
  )
}

export default App
