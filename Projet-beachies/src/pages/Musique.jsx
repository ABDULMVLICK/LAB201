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
          <h1 className="text-4xl text-black font-bold text-center md:text-left">ALBUMS</h1>
            <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-30 md:space-y-0 md:items-start" >

              <div className="flex flex-col md:relative md:w-[300px] md:h-[300px] md:flex-shrink-0 md:group items-center">
                <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex-shrink-0 group">
                  <img src={lateshow} alt="album1" className="w-full h-full object-cover select-none pointer-events-none" />
                  <div className="hidden md:block absolute inset-0 bg-white/1 backdrop-blur-sm opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
                  <h2 className="hidden md:block absolute bottom-[20px] right-[-70px] text-white font-extrabold text-5xl text-right drop-shadow-lg uppercase pointer-events-none z-20 break-words">
                    LATE <br /> SHOW
                  </h2>
                </div>
                <h2 className="block md:hidden mt-2 text-black font-extrabold text-2xl text-center uppercase pointer-events-none break-words">
                  LATE SHOW
                </h2>
              </div>

              <div className="flex flex-col md:relative md:w-[300px] md:h-[300px] md:flex-shrink-0 md:group items-center">
                <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex-shrink-0 group">
                  <img src={lateshow} alt="album2" className="w-full h-full object-cover select-none pointer-events-none" />
                  <div className="hidden md:block absolute inset-0 bg-white/1 backdrop-blur-sm opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
                  <h2 className="hidden md:block absolute bottom-[20px] right-[-70px] text-white font-extrabold text-5xl text-right drop-shadow-lg uppercase pointer-events-none z-20 break-words">
                    BLAME <br /> MY EX
                  </h2>
                </div>
                <h2 className="block md:hidden mt-2 text-black font-extrabold text-2xl text-center uppercase pointer-events-none break-words">
                  BLAME MY EX
                </h2>
              </div>

              <div className="flex flex-col md:relative md:w-[300px] md:h-[300px] md:flex-shrink-0 md:group items-center">
                <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex-shrink-0 group">
                  <img src={lateshow} alt="album3" className="w-full h-full object-cover select-none pointer-events-none" />
                  <div className="hidden md:block absolute inset-0 bg-white/1 backdrop-blur-sm opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
                  <h2 className="hidden md:block absolute bottom-[20px] right-[-70px] text-white font-extrabold text-5xl text-right drop-shadow-lg uppercase pointer-events-none z-20 break-words">
                    NO HARD <br /> FEELINGS
                  </h2>
                </div>
                <h2 className="block md:hidden mt-2 text-black font-extrabold text-2xl text-center uppercase pointer-events-none break-words">
                  NO HARD FEELINGS
                </h2>
              </div>

            </div>


        </div>



        <div class="flex flex-col space-y-15 ">
          <h1 className="text-4xl text-black font-bold text-center md:text-left">EP'S</h1>
            <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-30 md:space-y-0 md:items-start" >

              <div className="flex flex-col md:relative md:w-[300px] md:h-[300px] md:flex-shrink-0 md:group items-center">
                <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex-shrink-0 group">
                  <img src={lateshow} alt="ep1" className="w-full h-full object-cover select-none pointer-events-none" />
                  <div className="hidden md:block absolute inset-0 bg-white/1 backdrop-blur-sm opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
                  <h2 className="hidden md:block absolute bottom-[20px] right-[-70px] text-white font-extrabold text-5xl text-right drop-shadow-lg uppercase pointer-events-none z-20 break-words">
                    LATE <br /> SHOW
                  </h2>
                </div>
                <h2 className="block md:hidden mt-2 text-black font-extrabold text-2xl text-center uppercase pointer-events-none break-words">
                  LATE SHOW
                </h2>
              </div>

              <div className="flex flex-col md:relative md:w-[300px] md:h-[300px] md:flex-shrink-0 md:group items-center">
                <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex-shrink-0 group">
                  <img src={lateshow} alt="ep2" className="w-full h-full object-cover select-none pointer-events-none" />
                  <div className="hidden md:block absolute inset-0 bg-white/1 backdrop-blur-sm opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
                  <h2 className="hidden md:block absolute bottom-[20px] right-[-70px] text-white font-extrabold text-5xl text-right drop-shadow-lg uppercase pointer-events-none z-20 break-words">
                    LATE <br /> SHOW
                  </h2>
                </div>
                <h2 className="block md:hidden mt-2 text-black font-extrabold text-2xl text-center uppercase pointer-events-none break-words">
                  LATE SHOW
                </h2>
              </div>

              <div className="flex flex-col md:relative md:w-[300px] md:h-[300px] md:flex-shrink-0 md:group items-center">
                <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex-shrink-0 group">
                  <img src={lateshow} alt="ep3" className="w-full h-full object-cover select-none pointer-events-none" />
                  <div className="hidden md:block absolute inset-0 bg-white/1 backdrop-blur-sm opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
                  <h2 className="hidden md:block absolute bottom-[20px] right-[-70px] text-white font-extrabold text-5xl text-right drop-shadow-lg uppercase pointer-events-none z-20 break-words">
                    LATE <br /> SHOW
                  </h2>
                </div>
                <h2 className="block md:hidden mt-2 text-black font-extrabold text-2xl text-center uppercase pointer-events-none break-words">
                  LATE SHOW
                </h2>
              </div>

            </div>
        </div>



      </div>



    </section>
  );
};

export default Musique;
