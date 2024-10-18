import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      {/* Container for hero content */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-col md:flex-row items-start gap-5`}>
        
        {/* Left side content */}
        <div className='flex flex-col justify-center items-center md:items-center'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Right side content */}
        <div className='flex flex-col justify-center items-center md:items-start p-5 md:p-10'>
          <h1 className={`${styles.heroHeadText} text-white text-center md:text-left`}>
            Hi, I'm <span className='text-[#915eff]'>Muhammed Ajmal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-center md:text-left`}>
            I am a MERN Stack Developer
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <ComputersCanvas />
    </section>
  )
}

export default Hero
