import React from 'react';
import Image from 'next/image';

const CircularRing = ({
  ringImage,
  size = 128,
  children,
  className = '',
  alt = 'Progress ring',
}: {
  ringImage: string;
  size?: number;
  children: React.ReactNode;
  className?: string;
  alt?: string;
}) => {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <Image 
      src={ringImage}
      alt={alt} 
      className="w-full h-full object-contain"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default CircularRing;
