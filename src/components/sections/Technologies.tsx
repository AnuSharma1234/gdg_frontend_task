'use client';

import React from 'react';
import TechnologyCard from '@/components/common/TechnologyCard';
import { useTheme } from 'next-themes';

const Technologies = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark' ? true : false;

  const technologies = [
    {
      id: 1,
      title: 'Android',
      iconSrc: '/images/android-icon.png',
      iconAlt: 'Android Logo',
      accentColor: 'bg-red-500',
      bgColor: 'bg-gray-50',
    },
    {
      id: 2,
      title: 'Flutter',
      iconSrc: '/images/flutter-icon.png',
      iconAlt: 'Flutter Logo',
      accentColor: 'bg-blue-500',
      bgColor: 'bg-white',
    },
    {
      id: 3,
      title: 'Cloud',
      iconSrc: '/images/cloud-icon.png',
      iconAlt: 'Cloud Logo',
      accentColor: 'bg-green-500',
      bgColor: 'bg-gray-50',
    },
  ];

  return (
    <div
      className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-16 md:py-24 lg:py-32 px-4 sm:px-6`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <div className="h-1 bg-red-500 w-32 sm:w-48 md:w-64"></div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600">
              Technologies
            </h1>
            <div className="h-1 bg-red-500 w-32 sm:w-48 md:w-64"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mt-4">
            Domains That Excite Us to Collaborate and Teach!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              iconSrc={tech.iconSrc}
              iconAlt={tech.iconAlt}
              title={tech.title}
              accentColor={tech.accentColor}
              bgColor={tech.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
