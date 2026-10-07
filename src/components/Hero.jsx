import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSlider from './HeroSlider';
import BookingBar from './BookingBar';

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[560px] w-full">
      {/* Background layer: only this part clips, so the booking bar
          overlay below is free to overflow the section without being cut. */}
      <div className="absolute inset-0 overflow-hidden">
        <HeroSlider alt="MK Temple Inn property exterior" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)]/55 via-[var(--color-charcoal)]/35 to-[var(--color-charcoal)]/75" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[var(--color-beige-soft)] text-xs tracking-[0.3em] uppercase mb-5"
        >
          Tiruvannamalai, Tamil Nadu
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.15] max-w-3xl"
        >
          Your Comfortable Stay, Away From Home
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-[var(--color-beige-soft)] max-w-xl leading-relaxed"
        >
          Experience a peaceful and comfortable stay at MK Temple Inn with thoughtfully designed rooms,
          essential modern amenities, and warm hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/rooms"
            className="px-8 py-3.5 bg-[var(--color-gold)] text-[var(--color-charcoal)] text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[var(--color-gold-soft)] transition-colors"
          >
            Explore Rooms
          </Link>
          <Link
            to="/booking"
            className="px-8 py-3.5 border border-white text-white text-xs tracking-[0.15em] uppercase font-semibold hover:bg-white hover:text-[var(--color-brown)] transition-colors"
          >
            Book Your Stay
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="hidden md:block absolute left-0 right-0 bottom-0 translate-y-1/2 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <BookingBar variant="hero" />
        </div>
      </motion.div>
    </section>
  );
}