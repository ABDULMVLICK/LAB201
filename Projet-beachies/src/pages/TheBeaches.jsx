// src/pages/TheBeaches.jsx
import React from "react";
import papierDechire from "../images/papierDechire.png"
import nhf from "../images/nhf.png";
import tour from "../images/tour.png";
import fond from "../images/fond-n.png";
import photogrp from "../images/photo-groupe.png"
import mobilefond from "../images/mobilefond.png";

const TheBeaches = () => {
  return (
    <>
    <section
      className="relative z-10 min-h-screen flex items-center justify-center pt-10 flex-col md:flex-row md:items-center md:justify-center"
      style={{
        backgroundImage: `url(${fond})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Version mobile : fond mobile, pas d'images nhf/tour */}
      <div className="absolute inset-0 w-full h-full md:hidden" style={{
        backgroundImage: `url(${mobilefond})`,
        backgroundSize: 'auto 95%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1
      }} />
      {/* Images nhf et tour seulement sur desktop */}
      <div className="hidden md:flex justify-center w-150 ml-85 mt-30 flex-col items-center md:block z-10">
        <img src={nhf} alt="no-hard-feelings" className="w-40 sm:w-60 md:w-150" />
      </div>
      <div className="hidden md:flex justify-center w-120 mt-50 flex-col items-center md:block z-10">
        <img src={tour} alt="tour2025" className="w-32 sm:w-48 md:w-120" />
      </div>
    </section>

    <section className="relative z-11 h-auto bg-transparent flex flex-col md:flex-row items-center md:items-start">
      <div className="flex left-0 w-full flex-col md:flex-row items-center md:items-start">
        <img
          src={papierDechire}
          alt="Effet papier déchiré"
          className="absolute w-full md:w-[1000vh] h-250 sm:h-90 md:h-[1050px] object-cover -mt-30 md:-mt-32 select-none pointer-events-none z-0 animate-paper-wave"
        />
        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-20 mt-10 md:mt-25 items-center md:items-start m-4 md:m-30 w-full">
          <div className="flex flex-col items-center md:block w-full md:w-auto order-2 md:order-1">
            <h1 className="font-bold pb-4 md:pb-15 text-center md:text-left text-lg md:text-2xl animate-fadein font-oswald"> NO HARD FEELING - ENFIN DISPONIBLE </h1>
            <p className="text-sm leading-relaxed px-3 py-2 text-center md:text-left max-w-xs sm:max-w-sm mx-auto md:max-w-none md:mx-0 animate-fadein md:px-0 md:py-0 md:text-base">
              On ne va pas mentir : cet album, c'est un peu tout ce qu'on <br /> avait sur le cœur.
              Des hauts, des bas, des nuits sans fin, des textos qu'on <br /> n'aurait pas dû envoyer.
              C'est brut, vrai, sans filtre. Comme une conversation entre <br /> potes à 2h du mat.
              <br />
              On l'a fait pour nous. Mais aussi pour vous. <br />
              Pour ceux qui ressentent fort, qui tombent, qui se relèvent, <br /> et qui mettent la musique à fond pour tenir debout. <br />
              <br />
              Alors vas-y. Appuie sur play. Écoute-le fort. Et surtout, <br /> ressens-le à ta façon.
            </p>
          </div>
          <img src={photogrp} 
            alt="photo de groupe" 
            className="w-50 sm:w-60 md:w-[60vh] h-auto rounded-lg shadow-lg mt-4 md:mt-0 order-1 md:order-2 animate-fadein" 
          />
        </div>
      </div>
    </section>

  
      
 

   
    </>
  );
};

export default TheBeaches;
