import { Link } from 'react-router-dom';
import ArchDivider from './ArchDivider';
import { rooms } from '../data/rooms';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-beige-soft)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div>
            <span className="font-display text-xl tracking-[0.08em] text-white">MK TEMPLE INN</span>
            <p className="mt-3 text-sm text-[var(--color-beige)]/80 leading-relaxed">
              Your Comfortable Stay Starts Here.
            </p>
            <ArchDivider tone="light" className="mt-6 !mx-0" />
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold-soft)] mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/rooms" className="hover:text-white transition-colors">Rooms</Link></li>
              <li><Link to="/amenities" className="hover:text-white transition-colors">Amenities</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/policies" className="hover:text-white transition-colors">Policies</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold-soft)] mb-4">Rooms</h3>
            <ul className="space-y-2.5 text-sm">
              {rooms.map((room) => (
                <li key={room.slug}>
                  <Link to={`/rooms/${room.slug}`} className="hover:text-white transition-colors">
                    {room.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold-soft)] mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm text-[var(--color-beige)]/80">
              <li>Address on request — Tiruvannamalai, Tamil Nadu</li>
              <li>Phone: to be confirmed</li>
              <li>Email: to be confirmed</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg text-white">Ready for a comfortable stay?</p>
          </div>
          <Link
            to="/booking"
            className="inline-flex items-center px-7 py-3 bg-[var(--color-gold)] text-[var(--color-charcoal)] text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[var(--color-gold-soft)] transition-colors"
          >
            Book Now
          </Link>
        </div>

        <p className="mt-10 text-center text-xs text-[var(--color-beige)]/50 tracking-wide">
          © 2026 MK Temple Inn. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
