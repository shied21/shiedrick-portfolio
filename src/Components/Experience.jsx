import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaUsers } from "react-icons/fa6";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("profession");

  const profession = [
    {
      title: "Software Developer Intern",
      company: "MYT SoftDev Solutions Inc.",
      duration: "February 2025 - May 2025",
      description: [
        "Built responsive React features, collaborated via Figma, performed QA testing and optimized API integration.",
      ],
      icon: <FaBriefcase />,
    },
    {
      title: "Multimedia Director",
      company: "Supreme Student Government (CTU-DB)",
      duration: "A.Y. 2024 - 2025",
      description: [
        "Led creative production for event documentation and promotional assets."
      ],
      icon: <FaUsers />,
    },
    {
      title: "Layout Artist",
      company: "Supreme Student Government (CTU-DB)",
      duration: "A.Y. 2023 - 2024 ",
      description: [
        "Designed layouts and visual materials for student publications and events.",
      ],
      icon: <FaUsers />,
    }
  ];

  const education = [
    {
      title: "BS Information Technology",
      company: "Cebu Technological University – Daanbantayan Campus",
      duration: "July 02, 2025",
      description: ["Consistent Dean’s Lister"],
      icon: <FaGraduationCap />,
    },
    {
      title: "Senior High School - STEM",
      company: "Daanbantayan National High School",
      duration: "S.Y. 2021 - 2025",
      description: ["With High Honor"],
      icon: <FaGraduationCap />,
    },
    {
      title: "Elementary School",
      company: "Agujo Elementary School, Cebu",
      duration: "S.Y. 2009 - 2015",
      description: ["2nd Honorable Mentioned"],
      icon: <FaGraduationCap />,
    }
  ];

  const experiences = activeTab === "profession" ? profession : education;

  return (
    <section id="experience" className="py-10" style={{ scrollMarginTop: "-4rem" }}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2">
                  <div className="w-14 sm:w-17 md:w-20 lg:w-23 h-px bg-[#0D47A1]"></div>
                  <span className="text-[#7EB1FF] text-md lg:text-lg font-medium">experience</span>
                   <div className="w-14 sm:w-17 md:w-20 lg:w-23 h-px bg-[#0D47A1]"></div>
              </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-b from-[#1565C0] to-[#0A2F5A] bg-clip-text text-transparent">WHAT I'VE DONE</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2 sm:gap-4 px-2">
          <button
            className={`text-sm sm:text-base px-4 sm:px-6 py-2 rounded-full font-semibold transition whitespace-nowrap ${
              activeTab === "profession"
                ? "bg-[#0D47A1] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("profession")}
          >
            Profession
          </button>
          <button
            className={`text-sm sm:text-base px-4 sm:px-6 py-2 rounded-full font-semibold transition whitespace-nowrap ${
              activeTab === "education"
                ? "bg-[#0D47A1] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>


        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 flex flex-col sm:flex-row items-start ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8'}`}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-[#0D47A1] font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-500 mb-2">{exp.duration}</p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Center Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 sm:translate-y-0 -top-5 sm:top-1/2 sm:-translate-y-1/2 bg-white z-10 rounded-full border-4 border-[#0D47A1] shadow-lg w-10 h-10 flex items-center justify-center text-[#0D47A1] text-xl">
                {exp.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
