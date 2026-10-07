import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RoomImageSlider from './RoomImageSlider';

export default function RoomCard({ room, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="group bg-white border border-[var(--color-beige-soft)] flex flex-col"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
          <RoomImageSlider images={room.images} fallbackAlt={room.heroLabel} />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-2xl text-[var(--color-brown)]">{room.name}</h3>
        <p className="mt-3 text-sm text-[var(--color-ink)]/75 leading-relaxed flex-1">
          {room.shortDescription}
        </p>

        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
          {room.cardAmenities.map((a) => (
            <li key={a} className="text-[11px] tracking-[0.08em] uppercase text-[var(--color-gold)] font-medium">
              {a}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-4">
          <Link
            to={`/rooms/${room.slug}`}
            className="flex-1 text-center py-2.5 border border-[var(--color-brown)] text-[var(--color-brown)] text-[11px] tracking-[0.14em] uppercase font-semibold hover:bg-[var(--color-brown)] hover:text-white transition-colors"
          >
            View Details
          </Link>
          <Link
            to={`/booking?room=${room.slug}`}
            className="flex-1 text-center py-2.5 bg-[var(--color-brown)] text-white text-[11px] tracking-[0.14em] uppercase font-semibold hover:bg-[var(--color-charcoal)] transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.article>
  );
}