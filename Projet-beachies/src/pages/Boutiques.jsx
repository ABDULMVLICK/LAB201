import React from "react";
import fondgrain from "../images/Fond_grains.jpg"

const Boutiques = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-40"
    
    style={{
      backgroundImage: `url(${fondgrain})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat'
    }}

    >
      <h1 className="text-4xl text-white font-bold animate-fadein">Boutiques</h1>
    </section>
  );
};

export default Boutiques;
