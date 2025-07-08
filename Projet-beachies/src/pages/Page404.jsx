import React from "react";
import fondgrain from "../images/Fond_grains.jpg"

const Page404 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-40"
    
    style={{
      backgroundImage: `url(${fondgrain})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat'
    }}

    >
      <h1 className="text-4xl text-white font-bold">404 - Page not found</h1>
    </section>
  );
};

export default Page404; 