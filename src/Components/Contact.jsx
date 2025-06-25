import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shiedContact from '../assets/images/shiedContact.png'

const SERVICE_ID = 'service_elu4r77';
const TEMPLATE_ID = 'template_o9ij9ro';
const USER_ID = 'le489WB-WlTRIqaSE';

const Contact = () => {
    const formRef = useRef(null);

    const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      });
  };
  
  return (
    <section id="contact" className="py-10" style={{ scrollMarginTop: "-4rem" }}>
        {/* Toast Notifications */}
        <ToastContainer
            position="top-right" 
            autoClose={3000}
            hideProgressBar
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
        />
        <div className="container mx-auto px-4 sm:px-6">
            {/* Heading */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-2">
                  <div className="w-7 md:w-9 lg:w-11 h-px bg-[#0D47A1]"></div>
                  <span className="text-[#7EB1FF] text-md lg:text-lg font-medium">contact me</span>
                   <div className="w-7 md:w-9 lg:w-11 h-px bg-[#0D47A1]"></div>
              </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-b from-[#1565C0] to-[#0A2F5A] bg-clip-text text-transparent">
                LET'S TALK
                </h2>
            </div>

            {/* Image and Form inside shared bg */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 md:p-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Left Image - hidden on md and below */}
                    <div className="hidden lg:flex w-full lg:w-1/2 justify-center">
                    <img
                        src={shiedContact}
                        alt="Contact Visual"
                        className="w-[320px] h-auto object-contain"
                    />
                    </div>

                    {/* Right Form - takes full width on small screens */}
                    <div className="w-full lg:w-1/2">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your Name"
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            </div>
                            <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            </div>
                            <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                rows="5"
                                name="message"
                                required
                                placeholder="Your message..."
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            </div>
                            <button
                            type="submit"
                            className="w-full font-medium bg-[#0D47A1] text-white py-2 px-6 rounded-md hover:bg-[#1565C0] transition duration-200 cursor-pointer hover:shadow-lg hover:shadow-blue-100"
                            >
                            Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact