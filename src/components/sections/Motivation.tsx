'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Motivation() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark' ? true : false;

  return (
    <div
      className={`py-8 md:py-12 lg:py-16 px-4 sm:px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className={`max-w-6xl mx-auto`}>
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-600 mb-3 md:mb-4">
            What Keep Us Going?
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-amber-400 mx-auto rounded-full"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20">
          {/* Illustration Side - Motivation Image */}
          <div className="flex-1 relative flex justify-center order-1 lg:order-1">
            <Image
              src="/images/Motivation.png"
              alt="What Keep Us Going Illustration"
              width={500}
              height={400}
              className="rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
            />
          </div>
          {/* Text Side */}
          <div className="flex-1 order-2 lg:order-2">
            <div className="relative">
              {/* Amber accent bar */}
              <div className="absolute right-0 top-0 bottom-0 w-2 md:w-3 bg-amber-400 rounded-r-full"></div>
              {/* Motivation Text */}
              <div className="p-4 sm:p-6 md:p-8">
                <p
                  className={`text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed font-medium text-right`}
                >
                  Our club helps students to connect, learn, empower and grow.
                  Teamwork, innovative thinking, communication, and leading with
                  solutions is what helps us achieve new heights. The entire
                  team works in coordination, to inspire and motivate the
                  upcoming coding community to evolve their skills and broaden
                  their horizons of knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
