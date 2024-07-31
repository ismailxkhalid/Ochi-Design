import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

function FeaturedProjects() {
  const [hover, setHover] = useState(false);
  const cards = [useAnimation(), useAnimation()];
  const handelHoverStart = (index) => {
    cards[index].start({
      y: "0",
    });
  };
  const handelHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    });
  };

  return (
    <div className="w-[ 100vw]">
      <div className=" w-[99vw] pt-20 rounded-t-2xl border-t-[1px]">
        <div className=" px-4 lg:px-10 border-b-[1px] lg:border-zinc-300 border-black pb-10">
          <h1 className="text-3xl lg:text-5xl font-['Neue_Montreal'] tracking-tight">
            Featured Projects
          </h1>
        </div>
        <div className="px-3 lg:px-10">
          <div className="cards w-full lg:flex lg:gap-3 space-y-10 lg:space-y-0 mt-20">
            <div className="lg:hidden px-3 flex items-center gap-2">
              <div className=" p-[6px] rounded-full bg-black"></div>
              <h1 className="text-xl font-light">FYDE</h1>
            </div>
            <motion.div
              onHoverStart={() => handelHoverStart(0)}
              onHoverEnd={() => handelHoverEnd(0)}
              className="card-container  lg:w-[65%] lg:h-[70vh] relative "
            >
              <h1 className="card1 absolute flex left-full  -translate-x-1/2 top-1/2 overflow-hidden -translate-y-1/2 text-7xl font-oswald z-[9] text-[#CEEA67] ">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                    }}
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full   rounded-lg relative overflow-hidden bg-cover bg-no-repeat flex items-center justify-center transform transition-transform hover:scale-95 duration-1000">
                <img
                  className="w-full h-full bg-cover object-cover transition duration-1000 ease-in-out hover:scale-110"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                  alt=""
                />
              </div>
            </motion.div>
            <div className="lg:hidden px-3 flex items-center gap-2">
              <div className=" p-[6px] rounded-full bg-black"></div>
              <h1 className="text-xl font-light">VISE</h1>
            </div>
            <motion.div
              onHoverStart={() => handelHoverStart(1)}
              onHoverEnd={() => handelHoverEnd(1)}
              className="card-container lg:w-[65%] lg:h-[70vh] relative "
            >
              <h1 className="card2 absolute right-full flex overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl font-oswald z-[9] text-[#CEEA67] ">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                    }}
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full   rounded-lg relative overflow-hidden bg-cover bg-no-repeat flex items-center justify-center transform transition-transform hover:scale-95 duration-1000">
                <img
                  className="w-full h-full bg-cover object-cover transition duration-1000 ease-in-out hover:scale-110"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-28 mb-36">
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className=" bg-black py-3 lg:py-4 px-4 ml-2 mb-8 text-white w-[38vw] lg:w-[13vw] rounded-full flex items-center gap-8"
          >
            <h1 className="uppercase font-extralight ">Read More</h1>
            <div
              className={`
              p-1 bg-white rounded-full w-2  ${
                hover
                  ? "transform transition-transform scale-[500%] duration-500 "
                  : "transform transition-transform scale-100 duration-500"
              }`}
            ></div>
          </div>
        </div>
        <div className="w-full px-10 border-b-[1px] border-zinc-300 pb-10">
          <h1 className="text-5xl font-['Neue_Montreal'] tracking-tight">
            Client’s reviews
          </h1>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
