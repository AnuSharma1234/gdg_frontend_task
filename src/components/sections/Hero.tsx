'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const { theme } = useTheme();

  const isDarkMode = theme === 'dark' ? true : false;

  const scrollToMission = () => {
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 py-8 md:px-8 lg:px-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} mt-12 md:mt-16`}
    >
      <div className="max-w-4xl w-full text-center">
        {/* Header */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-4 font-bold">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
            <span className="text-black ml-2 md:ml-4">Developer Groups</span>
          </h1>
          <p className="text-gray-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            RBU Chapter
          </p>
        </div>

        {/* Main Content Area - Hero Image */}
        <div className="relative mb-8 md:mb-12 flex justify-center">
          <Image
            src="/images/hero.png"
            alt="Google Developer Groups Hero"
            width={600}
            height={400}
            className="rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
          />
        </div>

        {/* Description Text */}
        <div className="mb-8 md:mb-12">
          <p className="text-gray-600 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-3xl mx-auto font-normal px-4">
            Google Developer Groups are community groups for college and
            university students interested in Google developer technologies.
          </p>
        </div>

        {/* Join Button */}
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToMission}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base md:text-xl px-4 md:px-8 py-2 md:py-3 rounded-lg shadow-lg transition-colors duration-200 max-w-xs sm:max-w-sm"
          >
            JOIN US
          </button>
          {/* Chevron Arrows */}
          <div className="flex flex-col items-center mt-6 md:mt-8 space-y-0">
            <ChevronDown className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-400" />
            <ChevronDown className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-500" />
            <ChevronDown className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-600" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 md:mt-6 text-gray-600">
              Get to Know Us!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
