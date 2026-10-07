import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import heroSection1 from '../assets/herosection1.jpeg';
import heroSection2 from '../assets/herosection2.jpeg';
import room20 from '../assets/room20.jpeg';

const slides = [heroSection1, heroSection2, room20];

export default function HeroSlider({ alt }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds ku oru image maarum
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={index}
        src={slides[index]}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    </AnimatePresence>
  );
}