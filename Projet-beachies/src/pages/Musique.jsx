import React from "react";
import fondgrain from "../images/Fond_grains.jpg"
import lateshow from "../images/lateShow.jpg"
const Musique = () => {
  return (
    <section className="min-h-screen flex pt-50 pl-30 pb-50 "
    
    style={{
      backgroundImage: `url(${fondgrain})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat'
    }}
    
    >
      


      <div class="flex flex-col space-y-30 " >

        <div class="flex flex-col space-y-15"  >
          <h1 className="text-4xl text-black font-bold">ALBUMS</h1>
            <div className="flex flex-row space-x-30" >

              <div className="relative w-[300px] h-[300px] flex-shrink-0 group">
                <img src={lateshow} alt="album1" className="w-full h-full object-cover select-none pointer-events-none" />
                <div className="absolute inset-0 bg-white/1 backdrop-blur-sm opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
                <h2 className="absolute bottom-[20px] right-[-70px] text-white font-extrabold text-5xl text-right drop-shadow-lg uppercase pointer-events-none z-20">
                  LATE <br /> SHOW
                </h2>
              </div>

              <div className="relative w-[300px] h-[300px] flex-shrink-0 group">
                <img src={lateshow} alt="album2" className="w-full h-full object-cover select-none pointer-events-none" />
                <div className="absolute inset-0 bg-white/1 backdrop-blur-sm opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
                <h2 className="absolute bottom-[20px] right-[-70px] text-white font-extrabold text-5xl text-right drop-shadow-lg uppercase pointer-events-none z-20">
                  BLAME <br /> MY EX
                </h2>
              </div>

              <div className="relative w-[300px] h-[300px] flex-shrink-0 group">
                <img src={lateshow} alt="album3" className="w-full h-full object-cover select-none pointer-events-none" />
                <div className="absolute inset-0 bg-white/1 backdrop-blur-sm opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
                <h2 className="absolute bottom-[20px] right-[-70px] text-white font-extrabold text-5xl text-right drop-shadow-lg uppercase pointer-events-none z-20">
                  NO HARD <br /> FEELINGS
                </h2>
              </div>

            </div>


        </div>



        <div class="flex flex-col space-y-15 ">
          <h1 className="text-4xl text-black font-bold ">EP'S</h1>
            <div className="flex flex-row space-x-30" >

              <div className="relative w-[300px] h-[300px] flex-shrink-0 group">
                <img src={lateshow} alt="ep1" className="w-full h-full object-cover select-none pointer-events-none" />
                <div className="absolute inset-0 bg-white/1 backdrop-blur-sm opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
                <h2 className="absolute bottom-[20px] right-[-70px] text-white font-extrabold text-5xl text-right drop-shadow-lg uppercase pointer-events-none z-20">
                  LATE <br /> SHOW
                </h2>
              </div>

              <div className="relative w-[300px] h-[300px] flex-shrink-0 group">
                <img src={lateshow} alt="ep2" className="w-full h-full object-cover select-none pointer-events-none" />
                <div className="absolute inset-0 bg-white/1 backdrop-blur-sm opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
                <h2 className="absolute bottom-[20px] right-[-70px] text-white font-extrabold text-5xl text-right drop-shadow-lg uppercase pointer-events-none z-20">
                  LATE <br /> SHOW
                </h2>
              </div>

              <div className="relative w-[300px] h-[300px] flex-shrink-0 group">
                <img src={lateshow} alt="ep3" className="w-full h-full object-cover select-none pointer-events-none" />
                <div className="absolute inset-0 bg-white/1 backdrop-blur-sm opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
                <h2 className="absolute bottom-[20px] right-[-70px] text-white font-extrabold text-5xl text-right drop-shadow-lg uppercase pointer-events-none z-20">
                  LATE <br /> SHOW
                </h2>
              </div>

            </div>
        </div>



      </div>



    </section>
  );
};

export default Musique;
