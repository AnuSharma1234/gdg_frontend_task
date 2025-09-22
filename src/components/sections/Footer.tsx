'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start max-w-7xl mx-auto gap-8 lg:gap-16">
          {/* Left Section - Google Developer Groups */}
          <div className="flex flex-col items-start space-y-3 w-full lg:w-auto lg:max-w-md">
            {/* Google Logo with text */}
            <div className="items-center space-y-3 ">
              <Image
                src="/images/GoogleLogo.png"
                alt="Google Developer Groups Logo"
                width={240}
                height={240}
                className="object-contain"
              />
              <div>
                <p className="text-blue-500 text-sm font-medium">
                  On Campus • Ramdeobaba University
                </p>
              </div>
            </div>
          </div>

          {/* Vertical divider - hidden on mobile */}
          <div className="hidden lg:block w-1 h-48 bg-gray-300"></div>

          {/* Right Section - Contact Info */}
          <div className="flex flex-col space-y-6 w-full lg:w-auto lg:max-w-md">
            {/* Address Section */}
            <div className="flex items-start space-x-3">
              <div className="mt-1 flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="font-medium">
                  Shri Ramdeobaba College of Engineering and Management,
                </p>
                <p>Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur- 440013</p>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-center space-x-3">
              <svg
                className="w-5 h-5 text-gray-700 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a
                href="mailto:dsc.rknec@gmail.com"
                className="text-sm text-blue-600 underline hover:text-blue-800 transition-colors"
              >
                dsc.rknec@gmail.com
              </a>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col space-y-3">
              <span className="text-sm font-medium text-gray-800">
                Follow Us:
              </span>
              <div className="flex space-x-4">
                {/* Instagram */}
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shapes strip at the bottom */}
      <div className="w-full">
        <Image
          src="/images/shapes_strip.png"
          alt="Google shapes decorative strip"
          width={1920}
          height={150}
          className="w-full h-auto"
          priority={false}
        />
      </div>
    </div>
  );
};

export default Footer;
