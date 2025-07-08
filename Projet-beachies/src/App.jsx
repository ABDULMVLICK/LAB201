import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Actualites from "./pages/Actualites";
import Tournees from "./pages/Tournees";
import TheBeaches from "./pages/TheBeaches";
import Musique from "./pages/Musique";
import Boutiques from "./pages/Boutiques";

const App = () => {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />

      <Routes>
        <Route path="/" element={<TheBeaches />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/tournees" element={<Tournees />} />
        <Route path="/the-beaches" element={<TheBeaches />} />
        <Route path="/musique" element={<Musique />} />
        <Route path="/boutiques" element={<Boutiques />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
