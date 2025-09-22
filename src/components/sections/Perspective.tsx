'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Perspective() {
  const { theme } = useTheme();

  const isDarkMode = theme === 'dark' ? true : false;

  return (
    <div
      className={`py-8 md:py-12 lg:py-16 px-4 sm:px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-600 mb-3 md:mb-4">
            Our Perspective
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20">
          {/* Text Side */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative">
              {/* Green accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-green-500 rounded-l-full"></div>

              {/* Perspective Text */}
              <div className="pl-4 sm:pl-6 md:pl-8">
                <p className="text-gray-600 text-left text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                  We are a community-driven initiative aiming to bridge the gap
                  between research and practice , develop evolutionary thinking
                  and network throughout the process. We believe in connecting
                  fellow developers , spreading stimulative ideas and working
                  for a solution driven team.
                </p>
              </div>
            </div>
          </div>

          {/* Illustration Side - Perspective Image */}
          <div className="flex-1 relative flex justify-center order-1 lg:order-2">
            <Image
              src="/images/Perspective.png"
              alt="Our Perspective Illustration"
              width={500}
              height={400}
              className="rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
