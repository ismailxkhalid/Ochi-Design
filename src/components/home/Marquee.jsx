import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div>
      <div
        data-scroll
        data-scroll-speed="-0.2"
        className="w-full py-14 lg:py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
      >
        <div className="flex border-t border-b border-slate-400 overflow-hidden whitespace-nowrap uppercase ">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
            className="text-white font-oswald text-[6rem]  lg:text-[15rem] leading-none font-bold pr-12"
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
            className="text-white font-oswald text-[6rem]  lg:text-[15rem] leading-none font-bold pr-12"
          >
            we are ochi
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
