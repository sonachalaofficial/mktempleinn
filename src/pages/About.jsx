import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PropertyImage from '../components/PropertyImage';
import ArchDivider from '../components/ArchDivider';
import CTASection from '../components/CTASection';
import aboutProperty from '../assets/about-property.jpg';
import facilitiesImage from '../assets/facilities.jpg';

const facts = [
  { value: '4,000 sq.ft.', label: 'Property Size' },
  { value: '16', label: 'Rooms' },
  { value: '2', label: 'Homestay Accommodations' },
  { value: '3', label: 'Room Categories' },
];

const whyChoose = [
  'Comfortable, well-arranged rooms suited to different stay needs',
  'Essential modern amenities across every room category',
  'Warm, attentive hospitality throughout your stay',
  'A convenient location for travellers visiting Tiruvannamalai',
];

export default function About() {
  useEffect(() => {
    document.title = 'About | MK Temple Inn';
  }, []);

  return (
    <div>
      <section className="relative h-[46vh] min-h-[320px]">
        <PropertyImage label="MK Temple Inn" alt="MK Temple Inn property" />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/55 flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-10 w-full">
            <h1 className="font-display text-4xl md:text-5xl text-white">About MK Temple Inn</h1>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-gold)] font-semibold">Our Property</p>
          <h2 className="mt-4 font-display text-3xl text-[var(--color-brown)] leading-tight">
            Comfortable Accommodation, Thoughtfully Arranged
          </h2>
          <p className="mt-5 text-[var(--color-ink)]/75 leading-relaxed">
            MK Temple Inn spans a 4,000 sq.ft. property offering a comfortable and welcoming
            accommodation experience for travellers looking for a peaceful and convenient place to
            stay. Our property features 16 rooms across three room categories, along with 2 homestay
            accommodations for guests who prefer a more home-like setting.
          </p>
          <p className="mt-4 text-[var(--color-ink)]/75 leading-relaxed">
            Every room is equipped with the essential facilities needed for a relaxing stay, and our
            team is on hand to make sure your time with us feels easy and comfortable from arrival to
            departure.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="aspect-[4/3]">
          <PropertyImage src={aboutProperty} label="Our Property" alt="MK Temple Inn property detail" />
        </motion.div>
      </section>

      <section className="bg-[var(--color-cream)] py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {facts.map((f) => (
            <div key={f.label}>
              <p className="font-display text-2xl md:text-3xl text-[var(--color-brown)]">{f.value}</p>
              <p className="mt-2 text-xs tracking-[0.08em] uppercase text-[var(--color-ink)]/60">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] md:order-1">
          <PropertyImage src={facilitiesImage} label="Our Facilities" alt="MK Temple Inn facilities" />
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-gold)] font-semibold">Our Facilities</p>
          <h2 className="mt-4 font-display text-3xl text-[var(--color-brown)] leading-tight">Why Choose MK Temple Inn</h2>
          <ul className="mt-6 space-y-4">
            {whyChoose.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[var(--color-ink)]/75">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="flex justify-center pb-4"><ArchDivider /></div>
      <CTASection />
    </div>
  );
}