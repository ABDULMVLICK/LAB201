import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Actualites from "./pages/Actualites";
import Tournees from "./pages/Tournees";
import TheBeaches from "./pages/TheBeaches";
import Musique from "./pages/Musique";
import Boutiques from "./pages/Boutiques";
import Page404 from "./pages/Page404";

const App = () => {
  const [blur, setBlur] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowContent(false);
    const timeout = setTimeout(() => setShowContent(true), 30); // court délai pour relancer l'animation
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="font-sans scroll-smooth relative">
      <Navbar onMenuOpenChange={setBlur} />
      {/* Overlay de flou sur tout sauf la navbar */}
      {blur && (
        <div className="fixed top-0 left-0 h-full z-30 pointer-events-none md:hidden" style={{width: '100vw'}}>
          <div className="w-full h-full backdrop-blur-sm transition-all duration-300" />
        </div>
      )}
      <div className={`transition-all duration-700 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<TheBeaches />} />
          <Route path="/musique" element={<Musique />} />
          <Route path="/tournees" element={<Tournees />} />
          <Route path="/the-beaches" element={<TheBeaches />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/boutiques" element={<Boutiques />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
