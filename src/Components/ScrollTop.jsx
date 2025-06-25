import React, { useEffect, useState } from 'react';
import { FaChevronUp } from "react-icons/fa6";

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full border border-blue-100 bg-white/40 backdrop-blur-md text-[#0D47A1] shadow-md hover:bg-white/60 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <FaChevronUp />
      </button>
    )
  )
}

export default ScrollTop;