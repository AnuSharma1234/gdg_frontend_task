'use client';

import CircularRing from '../common/Ring';
import { useTheme } from 'next-themes';

const StatItem = ({
  value,
  label,
  ringImage,
}: {
  value: string;
  label: string;
  ringImage: string;
}) => {
  return (
    <div className="flex flex-col items-center space-y-3 md:space-y-4">
      <CircularRing
        ringImage={ringImage}
        size={160}
        className="sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
      >
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600">
          {value}
        </span>
      </CircularRing>

      <div className="text-center">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-regular text-gray-700 whitespace-pre-line">
          {label}
        </p>
      </div>
    </div>
  );
};

const Stats = () => {
  const ringImageUrl = '/images/ring.png';

  const { theme } = useTheme();
  const isDarkMode = theme === 'dark' ? true : false;

  const statsData = [
    { value: '03+', label: 'Years' },
    { value: '10+', label: 'Events' },
    { value: '1K+', label: 'Community\nMembers' },
    { value: '200+', label: 'Attendees' },
  ];

  return (
    <div
      className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-16 md:py-24 lg:py-32 px-4 sm:px-6`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              ringImage={ringImageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
