'use client';

import Link from 'next/link';
import ToggleButton from '../common/Toggle';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} px-4 sm:px-6 py-3 md:py-4 fixed top-0 w-full shadow-md z-50`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="GDG RCOEM Logo"
            width={32}
            height={32}
            className="object-contain sm:w-10 sm:h-10"
          />
          <h1 className="ml-2 sm:ml-4 text-gray-500 font-bold text-sm sm:text-base">
            GDG RCOEM
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm lg:text-base"
          >
            Home
          </Link>
          <Link
            href="/events"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm lg:text-base"
          >
            Events
          </Link>
          <Link
            href="/team"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm lg:text-base"
          >
            Team
          </Link>
          <Link
            href="/alumni"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm lg:text-base"
          >
            Alumni
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm lg:text-base"
          >
            Contact
          </Link>
          <div className="flex items-center">
            <ToggleButton />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ToggleButton />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/events"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/team"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/alumni"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Alumni
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
