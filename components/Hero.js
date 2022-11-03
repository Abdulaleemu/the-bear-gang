import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" ">
      <section className=" h-screen w-screen flex flex-col ">
        <img src="/img/bgpn.png" className=" z-20  relative inset-0 " />
        {/* gangtext */}
        <img
          src="/img/gangtxt.png"
          className="  mx-auto  z-30 absolute 
          lg:top-[314px] lg:left-[255px] lg:w-[1290px] lg:h-[573px]
          md:top-[145px] md:left-[129px] md:w-[690px] md:h-[299px] 
          "
        />
        <motion.img
          initial={{
            y: +500,
            opacity: 1,
          }}
          transition={{
            duration: 5,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          src="/img/gang.png"
          className="z-40 mt-0 absolute top-[60px] "
        />
        <div className="absolute z-20   w-full  lg:top-[51px] md:top-[25px] sm:top-[25px] ">
          <nav className="flex flex-row justify-between w-[95%] mx-auto  ">
            <img
              src="/img/homeicon.png"
              className="w-[23px] h-[23px] md:w-[38px] md:h-[29px] lg:w-[43px] lg:h-[45px]
              lg:ml-[234px] md:ml-[45px]"
            />
            <img
              src="/img/herologo.png"
              className="w-[90px] h-[26px] md:h[52px] md:w-[180px] lg:w-[210px] lg:h-[60px]"
            />
            <img
              src="/img/menu.png"
              className="w-[23px] h-[18px] md:h[29px] md:w-[38px] lg:w-[41px] lg:h-[31px] 
             lg:mr-[234px] md:mr-[45px] "
            />
          </nav>

          <h1 className=" text-center text-white text-[38px] font-medium leading-[75px] mt-[20px] ">
            WELCOME TO
          </h1>

          <img src="/img/mouse.png" className="mx-auto animate-bounce z-50" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
