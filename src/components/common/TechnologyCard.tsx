import React from 'react';
import Image from 'next/image';

const TechnologyCard = ({
  iconSrc,
  iconAlt,
  title,
  accentColor = 'bg-red-500',
  bgColor = 'bg-white',
}: {
  iconSrc: string;
  iconAlt: string;
  title: string;
  accentColor: string;
  bgColor: string;
}) => {
  return (
    <div className="relative group flex flex-col items-center">
      {/* Accent line on top */}
      <div className={`h-2 w-48 ${accentColor} rounded mb-1`}></div>

      {/* Card container */}
      <div
        className={`${bgColor} rounded-2xl p-8 shadow-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:-translate-y-1 min-h-[200px] w-xs flex flex-col items-center justify-center`}
      >
        {/* Icon */}
        <div className="mb-6 flex items-center justify-center">
          <Image
            src={iconSrc}
            alt={iconAlt}
            width="102"
            height="102"
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          {title}
        </h3>

        {/* Arrow indicator */}
        <div className="mt-auto">
          <svg
            className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
