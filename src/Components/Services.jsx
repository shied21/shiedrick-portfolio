import React from 'react';
import { FaLaptopCode, FaPalette, FaSearch } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Crafting modern, responsive websites with clean and efficient code.",
      icon: <FaLaptopCode />,
      iconColor: "#EFAC06",
      circleColor: "rgba(255, 231, 109, 0.5)",
    //   borderColor: "rgb(255, 231, 109)"
    },
    {
      title: "UI/UX Design",
      description: "Designing user-friendly interfaces and experiences for digital platforms.",
      icon: <FaPalette />,
      iconColor: "#7209B7",
      circleColor: "rgba(205, 130, 255, 0.5)",
    //   borderColor: "rgba(205, 130, 255)"
    },
    {
      title: "Quality Assurance",
      description: "Ensuring high standards through meticulous testing and debugging for seamless functionality.",
      icon: <FaSearch />,
      iconColor: "#CE0404",
      circleColor: "rgba(255, 136, 136, 0.5)",
    //   borderColor: "rgba(255, 136, 136)"
    }
  ];

  return (
    <section className="container mx-auto flex flex-col items-center justify-center pt-10 md:pt-13 lg:pt-15 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-6">
        <div className="text-center grid lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all hover:border-[#1565c0] hover:border-[2px]"
                // style={{
                //   borderColor: service.borderColor,
                // }}
            >
              <div className="flex justify-center mb-4">
                <div
                  className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full"
                  style={{ backgroundColor: service.circleColor }}
                >
                  <div className="text-lg md:text-xl lg:text-2xl" style={{ color: service.iconColor }}>
                    {service.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-[#0D47A1] text-lg lg:text-xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-md lg:text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;