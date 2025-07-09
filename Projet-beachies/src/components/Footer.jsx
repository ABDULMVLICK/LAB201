import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email inscrit:', email);
    // Logique d'inscription à la newsletter
  };

  const handleUnsubscribe = () => {
    console.log('Désabonnement');
    // Logique de désabonnement
  };

  return (
    <div  className="bg-[#4F7688] py-16 font-oswald">
      <footer className="bg-[#4F7688]  relative  pt-20 pb-10 max-w-6xl mx-auto ">
        
       

        <div className="max-w-4xl mx-auto px-1">
          {/* Liens du footer */}
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-23 gap-6 mb-8 md:mb-20 text-center md:text-left">
            <a 
              href="#" 
              className="text-gray-800 text-sm font-bold tracking-wider uppercase hover:text-gray-600 transition-colors duration-300"
            >
              BESOIN D'AIDE ?
            </a>
            <a 
              href="#" 
              className="text-gray-800 text-sm font-bold tracking-wider uppercase hover:text-gray-600 transition-colors duration-300"
            >
              MENTIONS LÉGALES
            </a>
            <a 
              href="#" 
              className="text-gray-800 text-sm font-bold tracking-wider uppercase hover:text-gray-600 transition-colors duration-300"
            >
              POLITIQUE DE CONFIDENTIALITÉ
            </a>
            <a 
              href="#" 
              className="text-gray-800 text-sm font-bold tracking-wider uppercase hover:text-gray-600 transition-colors duration-300"
            >
              CONTACT
            </a>
          </div>

          {/* Section réseaux sociaux */}
          <div className="text-center mb-10 md:mb-12 flex flex-col items-center">
            <h3 className="text-gray-800 text-base font-bold mb-5 tracking-wide uppercase">
              NOS RÉSEAUX
            </h3>
            <div className="flex flex-row justify-center gap-7 md:gap-5 mb-4 items-center">
              {/* TikTok */}
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                title="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              
              {/* Twitter/X */}
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                title="Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                title="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* Spotify */}
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                title="Spotify"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.301.421-1.02.599-1.56.3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Section newsletter */}
          <div className="border-t border-gray-200 pt-10 md:pt-15 ml-0 md:ml-2 max-w-2xl mx-auto flex flex-col md:block items-center md:items-start">
            <h4 className="text-base font-bold text-gray-800 mb-4 uppercase tracking-wide text-center md:text-left">
              NEWSLETTER
            </h4>
            <p className="text-xs text-gray-600 mb-5 leading-relaxed text-center md:text-justify md:text-left">
            En cochant cette case, j'accepte de recevoir ponctuellement par e-mail les actualités de 
            The Beaches : nouveautés, événements à venir et contenus exclusifs. Mes données resteront confidentielles et ne seront jamais partagées en dehors de The Beaches.
            </p>
            <form className="w-full flex flex-col md:flex-row gap-3 items-center md:items-end" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="w-full md:w-auto px-4 py-3 border border-gray-300 rounded bg-gray-50 text-sm focus:outline-none focus:border-gray-800 focus:bg-white transition-colors"
                required
              />
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto items-center justify-center md:justify-start mt-2 md:mt-0">
                <label className="flex items-center text-xs">
                  <input type="checkbox" className="mr-2" required />
                J'accepte
                </label>
              <button
                  type="submit"
                  className="bg-blue-200 text-blue-900 px-4 py-2 rounded text-xs font-medium uppercase tracking-wide hover:bg-blue-300 transition-colors duration-300"
              >
                  S'inscrire
              </button>
            </div>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;