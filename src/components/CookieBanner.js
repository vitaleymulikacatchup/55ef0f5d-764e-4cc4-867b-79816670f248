import React from 'react';

const CookieBanner = ({ onAccept }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
        <p className="text-sm text-gray-700 mb-4">
          We use cookies to ensure you get the best experience on our website.{' '}
          <a href="#" className="text-bitso-green hover:underline">
            Learn more →
          </a>
        </p>
        <button 
          onClick={onAccept}
          className="btn-primary text-sm w-full md:w-auto"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;