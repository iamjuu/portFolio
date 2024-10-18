import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText}
     text-white`}
          >
            hi, I'm <span className="text-[#915eff]">Ajmal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            A MERN stack developer builds full-stack web applications using
            MongoDB, Express.js, React.js, and Node.js. They handle both
            front-end and back-end development, <br  className="sm:block hidden"/> using JavaScript across the
            entire stack. MERN developers create scalable, dynamic web
            applications with efficient data handling and user interfaces.
          </p>
        </div>
      </div>
     < ComputersCanvas/>
     <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
     <a href="#about">
<div className="w-[35px] h-[64px]  rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
  <motion.dev
  
  animate={{
    y:[0,24,0]
  }}
  transition={{
    duration:1.5,
    repeat:Infinity,
    repeatType:'loop'
  
  }}
  className="w-2 h-3 rounded-full bg-secondary mb1"
  />
    

</div>

     </a>
     </div>
    </section>
  );
};

export default Hero;
