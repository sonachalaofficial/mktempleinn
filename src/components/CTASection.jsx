import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropertyImage from './PropertyImage';
import ctaBackground from '../assets/cta-background.jpg';

export default function CTASection() {
  return (
    <section className="relative h-[420px] md:h-[480px] overflow-hidden">
      <div className="absolute inset-0">
        <PropertyImage src={ctaBackground} label="MK Temple Inn" alt="MK Temple Inn property" />
      </div>
      <div className="absolute inset-0 bg-[var(--color-charcoal)]/60" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl text-white tracking-wide"
        >
          Planning Your Next Stay?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-[var(--color-beige-soft)] max-w-xl"
        >
          Make your stay comfortable and memorable at MK Temple Inn.
        </motion.p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/rooms"
            className="px-8 py-3.5 border border-white text-white text-xs tracking-[0.15em] uppercase font-semibold hover:bg-white hover:text-[var(--color-brown)] transition-colors"
          >
            Explore Rooms
          </Link>
          <Link
            to="/booking"
            className="px-8 py-3.5 bg-[var(--color-gold)] text-[var(--color-charcoal)] text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[var(--color-gold-soft)] transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}