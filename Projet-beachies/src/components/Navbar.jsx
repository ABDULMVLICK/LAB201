// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import papierDechire from '../images/papierDechire.png';
import logo from '../images/logo.png';

const Navbar = ({ onMenuOpenChange }) => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  // Notifie le parent à chaque changement d'ouverture
  React.useEffect(() => {
    if (onMenuOpenChange) onMenuOpenChange(open);
  }, [open, onMenuOpenChange]);

  // Animation d'apparition au chargement
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full  text-black z-40 transition-all duration-700 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
      {/* Navbar desktop */}
      <div
        className="hidden md:flex w-full h-45  items-center space-x-90  justify-center px-10 relative animate-paper-wave"
        style={{
          backgroundImage: `url(${papierDechire})`,
          backgroundSize: 'auto 230%',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <ul className="flex flex-1 justify-end space-x-32 font-bold h-full mb-10 items-center pr-10 font-oswald">
          <li><Link to="/actualites">Actualités</Link></li>
          <li><Link to="/tournees">Tournées</Link></li>
        </ul>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 flex items-center justify-center">
          <Link to="/the-beaches" className="flex mb-10 items-center h-full">
            <img src={logo} alt="Logo The Beaches" className="h-24  w-auto object-contain" />
          </Link>
        </div>
        <ul className="flex flex-1 justify-start space-x-32 font-bold h-full mb-10 items-center pl-10 font-oswald">
          <li><Link to="/musique">Musique</Link></li>
          <li><Link to="/boutiques">Boutiques</Link></li>
        </ul>
      </div>
      {/* Navbar mobile : burger */}
      <div className="md:hidden flex items-center justify-between w-full h-40 px-4 relative">
        <Link to="/the-beaches" className="flex items-center h-full">
          <img src={logo} alt="Logo The Beaches" className="h-16 w-auto object-contain" />
        </Link>
        {!open && (
          <button
            className="z-50 focus:outline-none ml-auto"
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir le menu"
          >
            <div className="space-y-2">
              <span className="block w-10 h-1.5 bg-gray-700 rounded"></span>
              <span className="block w-10 h-1.5 bg-gray-700 rounded"></span>
              <span className="block w-10 h-1.5 bg-gray-700 rounded"></span>
            </div>
          </button>
        )}
        {/* Menu latéral mobile */}
        {open && (
          <div
            className="fixed top-0 right-0 w-4/5 h-[70vh] z-40 mt-100 pt-20  flex flex-col items-center  overflow-y-auto"
            style={{
              backgroundImage: `url(${papierDechire})`,
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'white',
              borderTopLeftRadius: '1rem',
              borderBottomLeftRadius: '1rem',
              boxShadow: '-5px 0 15px rgba(0,0,0,0.2)',
              position: 'relative',
            }}
          >
            <button
              className="absolute top-4 right-4 text-3xl font-bold text-gray-700 z-50"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
            >
              ×
            </button>
            <ul className="flex flex-col items-center  justify-center w-full gap-10 font-extrabold text-3xl px-4 text-black font-oswald">
            <li><Link to="/the-beaches" onClick={() => setOpen(false)}>THE BEACHES</Link></li>
              <li><Link to="/actualites" onClick={() => setOpen(false)}>ACTUALITÉS</Link></li>
              <li><Link to="/tournees" onClick={() => setOpen(false)}>TOURNÉES</Link></li>
              <li><Link to="/musique" onClick={() => setOpen(false)}>MUSIQUE</Link></li>
              <li><Link to="/boutiques" onClick={() => setOpen(false)}>BOUTIQUE</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
