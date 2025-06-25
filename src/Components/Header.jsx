import React, {useState, useEffect} from 'react';
import { HiMenu, HiX, HiOutlinePhone } from 'react-icons/hi';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const navLinks = [
    {href: "#home", label: "Home"},
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // adjust as needed

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveLink(navLinks[i].href);
            return;
          }
        }
      }

      // Check contact section separately
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        const top = contactSection.offsetTop;
        const height = contactSection.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveLink("#contact");
          return;
        }
      }

      // Default to home if none matched
      // setActiveLink("#home");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Remove hash from URL without reloading the page
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md border-b border-blue-100">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 h-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => {
            setActiveLink('#home');
            const section = document.querySelector('#home');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex font-bold text-[30px] leading-6 capitalize bg-gradient-radial from-[#1565C0] via-[#1565C0] to-[#0A2F5A] bg-clip-text text-transparent select-none gap-2 cursor-pointer"
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, #1565C0 50.48%, #0A2F5A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          SB
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {
            navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`mx-2 text-sm font-medium relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5
                  after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all
                  ${activeLink === link.href ? "text-[#0D47A1] font-semibold after:w-full" : "text-gray-600 hover:text-gray-700"}`}
              >
                {link.label}
              </a>
            ))   
          }
        </nav>

        {/* Contact Me Button     */}
        <button className="hidden md:block bg-[#0D47A1] text-white rounded-full px-6 py-2 font-semibold hover:bg-blue-700 text-sm transition-all hover:shadow-lg hover:shadow-blue-100 cursor-pointer"
        onClick={() => setActiveLink('#contact')}>
          <a href="#contact" className="flex items-center justify-center">
            Contact Me
            <HiOutlinePhone className="ml-2" />
          </a>
        </button>
          
        {/* Hamburger for mobile */}
        <button className='md:hidden p-2' onClick={() => setMenuOpen(!isMenuOpen)}>
          {
            isMenuOpen ? <HiX className="size-6 text-[#0D47A1]" /> : <HiMenu className="size-6 text-[#0D47A1]" />
          }
        </button>

      </div>

      {/* Mobile Menu items */}
       {
        isMenuOpen && (
          <div className='md:hidden bg-white/40 backdrop-blur-md border-b border-blue-100 py-4'>
            <div className='container mx-auto px-2 space-y-3'>
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  onClick={() => {
                    setActiveLink(link.href);
                    setMenuOpen(false);
                  }}
                  className={`block px-4 py-2 text-sm font-medium ${activeLink === link.href ? "text-blue-600 font-semibold" : "text-gray-500 hover:text-gray-700"}`}
                  href={link.href}>{link.label}
                </a>
              ))}

              {/* Contact Me Button */}    
              <button className=" w-full bg-[#0D47A1] text-white rounded-full px-6 py-2 font-semibold hover:bg-blue-700 text-sm transition-all hover:shadow-lg hover:shadow-blue-100 cursor-pointer"
              onClick={() => {
              setActiveLink('#contact');
              setMenuOpen(false);}}>
                <a href="#contact">Contact Me</a>
              </button>
            </div>
          </div>
        )
       }   

    </header>
  )
}

export default Header;