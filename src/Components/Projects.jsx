import React, { useState, useEffect, useRef } from 'react'
import header from '../assets/images/proj-header.svg'
import footer from '../assets/images/proj-footer.svg'
import ppt from '../assets/images/precisionpoint.png'
import chinatown from '../assets/images/chinatown.png'
import reservease from '../assets/images/reservease.png'
import portfolio from '../assets/images/simple-portfolio.png'
import graphicDesign from '../assets/images/graphicDesign-bg.png'
import { FaArrowLeftLong, FaArrowRightLong, FaGithub, FaShareFromSquare } from "react-icons/fa6";

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('Web Design');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [projectsPerPage, setProjectsPerPage] = useState(3);
    const [transitioning, setTransitioning] = useState(false);
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);
    const [tappedCardIndex, setTappedCardIndex] = useState(null);
    const cardsRef = useRef(null);
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMobile &&
                cardsRef.current &&
                !cardsRef.current.contains(event.target)
            ) {
                setTappedCardIndex(null);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isMobile]);


    const projects = [
        {
            title: "Precision Point Inc.",
            category: "Web Design",
            description: "A responsive, cleanly designed corporate site for a Cebu-based contractor specializing in waterproofing and piping systems.",            
            image: ppt,
            techStack: ["React", "Tailwind CSS", "Javascript", "Vite"],
            githubLink: "https://github.com/shied21/PrecisionPointPH",
            projectLink: "https://precisionpoint.ph"
        },
        {
            title: "Chinatown East Gate",
            category: "Web Design",
            description: "A landing page for a modern retail hub in Ormoc with clean UI, responsive design, and smooth user experience.",
            image: chinatown,
            techStack: ["HTML", "CSS", "Bootstrap", "Javascript"],
            githubLink: "https://github.com/shied21/Chinatown-website",
            projectLink: "https://chinatowneastgate.com/"
        },
        {
            title: "ReservEASE",
            category: "Web Design",
            description: "A reservation system for faculty, staff, and students with real-time availability and a user-friendly interface.",
            image: reservease,
            techStack: ["PHP", "MySQL", "FullCalendar", "HTML", "CSS", "Bootstrap", "Javascript"],
            githubLink: "https://github.com/shied21/ReservEASE"
        },
        {
            title: "Simple Portfolio",
            category: "Web Design",
            description: "A clean and simple portfolio highlighting my background, education, and contact info from my second-year project.",
            image: portfolio,
            techStack: ["HTML", "CSS", "Javascript"],
            githubLink: "https://github.com/shied21/simple-portfolio"
        }
    ];

    const filteredProjects = projects.filter(project => project.category === activeCategory);

    useEffect(() => {
        const updateProjectsPerPage = () => {
            const width = window.innerWidth;
            if (width >= 1024) setProjectsPerPage(3);
            else if (width >= 768) setProjectsPerPage(2);
            else setProjectsPerPage(1);
        };

        updateProjectsPerPage();
        window.addEventListener('resize', updateProjectsPerPage);
        return () => window.removeEventListener('resize', updateProjectsPerPage);
    }, []);

    const totalSlides = Math.ceil(filteredProjects.length / projectsPerPage);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const swipeDistance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
        // Swiped left
        nextSlide();
    } else if (swipeDistance < -minSwipeDistance) {
        // Swiped right
        prevSlide();
    }

    setTouchStartX(null);
    setTouchEndX(null);
    };


    return (
        <section id="projects" className="relative py-10" style={{ scrollMarginTop: "-4rem" }}>
            <div className="absolute top-0 left-0 right-0 -z-10">
                <img src={header} alt="Header background" className="w-full" />
            </div>

            <div className="container mx-auto px-6 relative">
                {/* Heading */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-9 md:w-12 lg:w-14 h-px bg-[#0D47A1]"></div>
                        <span className="text-[#7EB1FF] text-md lg:text-lg font-medium">projects</span>
                        <div className="w-9 md:w-12 lg:w-14 h-px bg-[#0D47A1]"></div>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-b from-[#1565C0] to-[#0A2F5A] bg-clip-text text-transparent">MY WORKS</h2>
                </div>

                {/* Category Switch */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 px-2">
                    <button
                        onClick={() => {
                        if (activeCategory !== 'Web Design') {
                            setTransitioning(true);
                            setTimeout(() => {
                            setActiveCategory('Web Design');
                            setCurrentSlide(0);
                            setTransitioning(false);
                            }, 300);
                        }
                        }}
                        className={`text-sm sm:text-base px-4 sm:px-6 py-2 rounded-full font-semibold transition whitespace-nowrap ${
                        activeCategory === 'Web Design'
                            ? 'bg-[#0D47A1] text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        Web Design
                    </button>

                    <button
                        onClick={() => {
                        if (activeCategory !== 'Graphic Design') {
                            setTransitioning(true);
                            setTimeout(() => {
                            setActiveCategory('Graphic Design');
                            setCurrentSlide(0);
                            setTransitioning(false);
                            }, 300);
                        }
                        }}
                        className={`text-sm sm:text-base px-4 sm:px-6 py-2 rounded-full font-semibold transition whitespace-nowrap ${
                        activeCategory === 'Graphic Design'
                            ? 'bg-[#0D47A1] text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        Graphic Design
                    </button>
                </div>


                {/* Content Display */}
                {activeCategory === 'Web Design' ? (
                    <div className="relative overflow-visible mb-12">
                        <div ref={cardsRef}>
                            <div className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * (100 / projectsPerPage)}%)` }}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}>
                                {filteredProjects.map((project, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex-shrink-0 px-4"
                                        style={{ width: `${100 / projectsPerPage}%` }}
                                    >
                                        <div className="relative h-[360px] md:h-[380px] lg:h-[400px] rounded-3xl overflow-hidden group transition-all duration-300 shadow-xl">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 scale-102 group-hover:scale-105"
                                            />
                                            <div
                                                className={`absolute inset-0 z-10 transition-colors duration-500 ${
                                                    isMobile
                                                    ? tappedCardIndex === index
                                                        ? 'bg-black/65 backdrop-blur-xs'
                                                        : 'bg-black/0'
                                                    : 'bg-black/0 group-hover:bg-black/65 group-hover:backdrop-blur-xs'
                                                }`}
                                                onClick={() => {
                                                    if (isMobile) {
                                                    setTappedCardIndex(tappedCardIndex === index ? null : index);
                                                    }
                                                }}
                                                ></div>

                                                <div
                                                className={`absolute inset-0 z-20 px-4 flex items-center justify-center text-center transition-opacity duration-500 ${
                                                    isMobile
                                                    ? tappedCardIndex === index
                                                        ? 'opacity-100'
                                                        : 'opacity-0 pointer-events-none'
                                                    : 'opacity-0 group-hover:opacity-100'
                                                }`}
                                                onClick={(e) => e.stopPropagation()}
                                                >
                                                <div className="text-white space-y-3">
                                                    <p className="text-sm md:text-base">{project.description}</p>
                                                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                                                    {project.techStack.map((tech, idx) => (
                                                        <span
                                                        key={idx}
                                                        className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-md"
                                                        >
                                                        {tech}
                                                        </span>
                                                    ))}
                                                    </div>
                                                </div>
                                                </div>

                                            <div className="absolute top-4 left-4 flex items-center space-x-2 z-30">
                                                <div className="w-1 h-5 bg-gradient-to-b from-[#90caf9] to-[#1565C0] rounded-xs"></div>
                                                <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                                                    isMobile && tappedCardIndex === index
                                                    ? 'text-white'
                                                    : 'text-[#051A3B] group-hover:text-white'
                                                }`}>
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
                                                <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg px-3 py-1 flex space-x-4 shadow-md">
                                                    <a
                                                        href={project.githubLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        title="Open in GitHub"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className={`text-xl transition ${
                                                            isMobile && tappedCardIndex === index
                                                            ? 'text-white'
                                                            : 'text-[#051A3B] group-hover:text-white'
                                                        }`}
                                                        >
                                                        <FaGithub />
                                                    </a>
                                                    {project.title !== "ReservEASE" && project.title !== "Simple Portfolio" && (
                                                        <a
                                                            href={project.projectLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            title="Open Link"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className={`text-xl transition ${
                                                                isMobile && tappedCardIndex === index
                                                                ? 'text-white'
                                                                : 'text-[#051A3B] group-hover:text-white'
                                                            }`}
                                                            >
                                                            <FaShareFromSquare />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="relative w-full h-[360px] md:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-12">
                        <img
                            src={graphicDesign}
                            alt="Graphic Design"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 z-10"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white px-4 text-center backdrop-blur-[1.5px]">
                            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-shadow-md">Graphic Design Works</h3>
                            <p className="max-w-xl text-sm md:text-base mb-6 text-shadow-md">A curated collection of logos, posters, and branding designs.</p>
                            <a
                                href="https://drive.google.com/drive/folders/1A1UCag7lxlrcResAQAR0NTK03iLxNQP-?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-white text-[#0D47A1] px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-[#0D47A1] hover:text-white transition">
                                    View All
                                </button>
                            </a>
                        </div>
                    </div>
                )}

                {/* Navigation arrows only for Web Design */}
                {activeCategory === 'Web Design' && filteredProjects.length > projectsPerPage && (
                    <div className="flex justify-between space-x-4">
                        <button
                            onClick={prevSlide}
                            className="p-2 bg-[#0D47A1] rounded-[50px] shadow-lg hover:shadow-xl transition-shadow flex items-center"
                        >
                            <FaArrowLeftLong className="w-5 h-5 text-white" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-2 bg-[#0D47A1] rounded-[50px] shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
                        >
                            <FaArrowRightLong className="w-5 h-5 text-white" />
                        </button>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 -z-10">
                <img src={footer} alt="Footer background" className="w-full" />
            </div>
        </section>
    )
}

export default Projects;
