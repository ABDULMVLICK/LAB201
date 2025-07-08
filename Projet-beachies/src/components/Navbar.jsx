// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import papierDechire from '../images/papierDechire.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full text-black z-40  h-40 overflow-hidden"
      style={{
        backgroundImage: `url(${papierDechire})`,
        backgroundSize: 'auto 230%',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <ul className="flex justify-center space-x-35 p-10 font-bold">
        <li><Link to="/actualites">Actualités</Link></li>
        <li><Link to="/tournees">Tournées</Link></li>
        <li><Link to="/the-beaches">THE BEACHES</Link></li>
        <li><Link to="/musique">Musique</Link></li>
        <li><Link to="/boutiques">Boutiques</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
