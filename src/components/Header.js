import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Dota</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span>Products</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900">Developers</a>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span>EN</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-primary">
              Open account
            </button>
            <button className="btn-secondary">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer px-3 py-2">
              <span>Products</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Developers</a>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer px-3 py-2">
              <span>EN</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="px-3 py-2 space-y-2">
              <button className="btn-primary w-full">
                Open account
              </button>
              <button className="btn-secondary w-full">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;