// src/pages/TheBeaches.jsx
import React from "react";
import papierDechire from "../images/papierDechire.png"
import nhf from "../images/nhf.png";
import tour from "../images/tour.png";
import fond from "../images/fond-n.png";
import photogrp from "../images/photo-groupe.png"
const TheBeaches = () => {
  return (
    <>
    <section className=" relative z-10 min-h-screen  flex items-center justify-center pt-10  "
    style={{
        backgroundImage: `url(${fond})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat'
      }} >
      <div className="justify-center w-150 ml-85 mt-30 " ><img src={nhf} alt="no-hard-feelings" /></div>
      <div className="justify-center w-120 mt-50  " ><img src={tour} alt="tour2025" /></div>
      
    </section>

  <section className=" relative z-11 h-170 bg-transparent">
    <div className=" flex left-0 w-full ">
       <img
          src={papierDechire}
          alt="Effet papier déchiré"
          className=" absolute w-[1000vh] h-[1000px] object-cover -mt-32  select-none pointer-events-none z-0"
        />

      <div className="relative z-10 flex gap-20 mt-25 items-center m-30 " >



          <p className="" >

            <h1 className="font-bold pb-15" > NO HARD FEELING - ENFIN DISPONIBLE </h1>
            
            On ne va pas mentir : cet album, c’est un peu tout ce qu’on <br /> avait sur le cœur.
            Des hauts, des bas, des nuits sans fin, des textos qu’on <br /> n’aurait pas dû envoyer.
            C’est brut, vrai, sans filtre. Comme une conversation entre <br /> potes à 2h du mat.

            On l’a fait pour nous. Mais aussi pour vous. <br />
            Pour ceux qui ressentent fort, qui tombent, qui se relèvent, <br /> et qui mettent la musique à fond pour tenir debout. <br />

            Alors vas-y. Appuie sur play. Écoute-le fort. Et surtout, <br /> ressens-le à ta façon.
          
          </p>


      <img src={photogrp} 
      alt="photo de groupe" 
      className="w-[60vh] h-[60vh]"
      
      />

      </div>

    </div>
</section>

  
      
 

   
    </>
  );
};

export default TheBeaches;
