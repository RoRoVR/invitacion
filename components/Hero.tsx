'use client';

import { motion } from 'framer-motion';
import jumbotronSeparator from '@/public/img/jumbotron-separator.webp';
import countdownBg from '@/public/img/countdown-bg.png';
import separatorLine from '@/public/img/separator-line.svg';
import img1 from '@/public/photos/port.jpeg';
import Image from 'next/image';

import Countdown from './Countdown';

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Image src={img1} alt='img-1' loading='eager' className="absolute inset-0 h-full w-full object-cover"/>
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4 text-sm uppercase tracking-[0.5rem]"
        >
          Nos Casamos
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-6xl md:text-8xl font-great-vibes"
        >
          Marcos y Cintia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg tracking-[0.3rem]"
        >
          15 · AGOSTO · 2026
        </motion.p>
      </div>

      <div className='w-full h-auto flex items-center justify-center absolute top-[93vh] sm:top-[88vh] 2xl:top-[75vh]'>
        <Image src={jumbotronSeparator} alt='separator' className='w-full h-auto' loading='eager'/>
      </div>
      <div className='w-full flex justify-center absolute -bottom-45 sm:-bottom-50 z-10'>
        <Image src={countdownBg} alt='countdownBg'/>
      </div>
      <div className='w-full flex justify-center absolute  -bottom-32 z-10'>
        <div className='w-75 sm:w-80 h-75 sm:h-80 flex flex-col justify-center items-center rounded-full bg-white'>
          <p className='font-cormorant text-4xl font-bold text-[#575756]'>Faltan</p>
          <div className='w-[50%]'>
            <Image src={separatorLine} alt='separatorLine' />
          </div>

          <Countdown/>

        </div>
      </div>
    </section>
  );
}