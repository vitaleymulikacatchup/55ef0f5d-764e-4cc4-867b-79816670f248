import React, { useState } from 'react';
import Header from './components/Header';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const handleCookieAccept = () => {
    setShowCookieBanner(false);
  };

  return (
    <div className="App min-h-screen bg-white">
      <Header />
      <ErrorPage />
      <Footer />
      {showCookieBanner && <CookieBanner onAccept={handleCookieAccept} />}
    </div>
  );
}

export default App;