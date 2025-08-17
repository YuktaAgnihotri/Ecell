import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="bg-navy-blue text-white min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            <span className="text-golden-yellow">E-Cell RGPV</span>: Igniting Entrepreneurial Spirits
          </h1>
          <p className="text-lg sm:text-xl font-light mb-8 max-w-2xl mx-auto lg:mx-0">
            Join the Entrepreneurship Cell of Rajiv Gandhi Proudyogiki Vishwavidyalaya and turn your ideas into reality. We empower students to innovate, build, and lead.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="bg-golden-yellow text-navy-blue font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-white hover:text-navy-blue transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Started <FaArrowRight className="ml-2" />
            </a>
            <a
              href="#"
              className="border-2 border-golden-yellow text-golden-yellow font-semibold px-6 py-3 rounded-full hover:bg-golden-yellow hover:text-navy-blue transition duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side: Image/Visual Element */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl aspect-w-16 aspect-h-9">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-golden-yellow/50">
              <img
                src="https://via.placeholder.com/800x600.png?text=E-Cell+RGPV+Hero+Image"
                alt="E-Cell RGPV Entrepreneurship"
                className="w-full h-full object-cover animate-pulse-slow"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-bold">Innovate. Build. Lead.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

