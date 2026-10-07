import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BedDouble, Home as HomeIcon, LayoutGrid, Wifi, Car, HeartHandshake } from 'lucide-react';
import Hero from '../components/Hero';
import BookingBar from '../components/BookingBar';
import RoomCard from '../components/RoomCard';
import CTASection from '../components/CTASection';
import PropertyImage from '../components/PropertyImage';
import ArchDivider from '../components/ArchDivider';
import { rooms } from '../data/rooms';
import { homePreviewItems } from '../data/gallery';
import aboutHome from '../assets/about-home.jpg';

const highlights = [
  { value: '4,000+', label: 'Sq.Ft. Property' },
  { value: '16', label: 'Guest Rooms' },
  { value: '2', label: 'Homestay Accommodations' },
  { value: '3', label: 'Room Categories' },
];

const whyChooseUs = [
  { icon: BedDouble, title: 'Comfortable Rooms', description: 'Thoughtfully arranged rooms designed for a relaxing stay.' },
  { icon: Wifi, title: 'Essential Amenities', description: 'Enjoy Wi-Fi, AC, hot water, charging facilities, and more.' },
  { icon: Car, title: 'Convenient Parking', description: 'Car parking facility available for guests.' },
  { icon: HeartHandshake, title: 'Warm Hospitality', description: 'A welcoming environment designed around guest comfort.' },
];

export default function Home() {
  useEffect(() => {
    document.title = 'MK Temple Inn | Comfortable Stay';
  }, []);

  return (
    <div>
      <Hero />

      {/* Mobile booking bar (hero bar is desktop-only overlay) */}
      <div className="md:hidden px-5 -mt-6 relative z-10">
        <BookingBar variant="hero" />
      </div>

      {/* Property Highlights */}
      <section className="max-w-6xl mx-auto px-6 pt-24 md:pt-36 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="font-display text-3xl md:text-4xl text-[var(--color-brown)]">{h.value}</p>
              <p className="mt-2 text-xs md:text-sm tracking-[0.08em] uppercase text-[var(--color-ink)]/60">
                {h.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-[4/3] order-2 md:order-1"
        >
          <PropertyImage src={aboutHome} label="MK Temple Inn" alt="MK Temple Inn property view" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-gold)] font-semibold">
            Welcome to MK Temple Inn
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--color-brown)] leading-tight">
            A Comfortable Stay Designed Around You
          </h2>
          <p className="mt-5 text-[var(--color-ink)]/75 leading-relaxed">
            MK Temple Inn offers a comfortable and welcoming accommodation experience for travellers
            looking for a peaceful and convenient place to stay. Our property features 16 rooms along
            with 2 homestay accommodations, thoughtfully equipped with essential facilities for a
            relaxing stay.
          </p>
          <Link
            to="/about"
            className="mt-7 inline-flex items-center px-7 py-3 border border-[var(--color-brown)] text-[var(--color-brown)] text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[var(--color-brown)] hover:text-white transition-colors"
          >
            Discover More
          </Link>
        </motion.div>
      </section>

      {/* Rooms Section */}
      <section className="bg-[var(--color-cream)] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto">
            <ArchDivider />
            <h2 className="mt-5 font-display text-3xl md:text-4xl text-[var(--color-brown)]">Stay Your Way</h2>
            <p className="mt-4 text-[var(--color-ink)]/70">
              Choose the room that matches your comfort and stay requirements.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <RoomCard room={room} index={i} key={room.id} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-xl mx-auto">
          <ArchDivider />
          <h2 className="mt-5 font-display text-3xl md:text-4xl text-[var(--color-brown)]">
            A Glimpse of MK Temple Inn
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {homePreviewItems.map((item) => (
            <div key={item.id} className="aspect-square">
              <PropertyImage src={item.src} alt={item.alt} label={item.label} />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-3 bg-[var(--color-brown)] text-white text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[var(--color-charcoal)] transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[var(--color-charcoal)] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto">
            <ArchDivider tone="light" />
            <h2 className="mt-5 font-display text-3xl md:text-4xl text-white">Why Choose Us</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {whyChooseUs.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center p-6 border border-white/10"
              >
                <f.icon size={26} strokeWidth={1.5} className="mx-auto text-[var(--color-gold)]" />
                <h3 className="mt-4 font-display text-lg text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-beige)]/70 leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}