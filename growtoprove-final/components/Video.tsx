
'use client';
import { motion } from 'framer-motion';

export function Video({src}:{src:string}){
 return (
  <motion.div 
   whileHover={{scale:1.03}}
   className='relative pb-[56.25%] rounded-xl shadow-neon overflow-hidden'
  >
    <iframe 
      src={src.replace("youtu.be/","www.youtube.com/embed/")}
      className='absolute inset-0 w-full h-full'
      allowFullScreen
    />
  </motion.div>
 );
}
