import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-xl font-bold text-blue-600">FD Assignment</a>
        </div>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/workers" className="text-gray-700 hover:text-blue-600">Workers</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
        </div>
        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="/" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Home</a>
          <a href="/workers" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Workers</a>
          <a href="/about" className="block px-4 py-2 text-gray-700 hover:text-blue-600">About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
