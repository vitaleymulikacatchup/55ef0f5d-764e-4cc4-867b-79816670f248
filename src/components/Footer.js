import React from 'react';
import { Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Latest Blog */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              FIRST BLOG
            </h3>
          </div>

          {/* Knowledge Center */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              KNOWLEDGE CENTER
            </h3>
            <div className="mb-6">
              <h4 className="font-medium mb-2">How do I buy bitcoins in Mexico?</h4>
              <p className="text-gray-400 text-sm mb-4">
                Buying bitcoins through Dota is very simple. Firstly, make an account with us. It's free, quick and easy...
              </p>
              <button className="btn-outline text-sm">
                READ MORE
              </button>
            </div>
          </div>

          {/* We Are Hiring */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              WE ARE HIRING
            </h3>
            <div className="mb-6">
              <h4 className="font-medium mb-2">Come join Dota!</h4>
              <p className="text-gray-400 text-sm mb-4">
                We are looking for talented people to join our team.
              </p>
              <button className="btn-outline text-sm">
                OPEN POSITIONS
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Notices */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              NOTICES
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Legal Information</a></li>
              <li><a href="#" className="hover:text-white">Fees</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              SUPPORT
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">API Information</a></li>
            </ul>
          </div>

          {/* Language */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              LANGUAGE
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Español</a></li>
              <li><a href="#" className="hover:text-white">English</a></li>
              <li><a href="#" className="hover:text-white">Português</a></li>
            </ul>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <img src="/images/app-store.png" alt="Download on App Store" className="h-10" />
            <img src="/images/google-play.png" alt="Get it on Google Play" className="h-10" />
          </div>
          
          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-bitso-green rounded-full"></div>
              <span>All Systems Operational</span>
            </div>
            <div className="flex space-x-3">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>2023 © Dota. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;