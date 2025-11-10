import React from 'react';

const ErrorPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">403 Error</h1>
        <div className="text-4xl text-bitso-green mb-8 font-mono">
          ¯\_(ツ)_/¯
        </div>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Sorry, you don't have permission to access this page.
        </p>
        <button className="btn-primary">
          Go back home
        </button>
      </div>
    </main>
  );
};

export default ErrorPage;