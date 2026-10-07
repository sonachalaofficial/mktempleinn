import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import PropertyImage from '../components/PropertyImage';
import GalleryGrid from '../components/GalleryGrid';
import { allGalleryItems, galleryCategories } from '../data/gallery';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    document.title = 'Gallery | MK Temple Inn';
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return allGalleryItems;
    return allGalleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <section className="relative h-[42vh] min-h-[300px]">
        <PropertyImage label="Our Gallery" alt="MK Temple Inn gallery" />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/55 flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-10 w-full">
            <h1 className="font-display text-4xl md:text-5xl text-white">Our Gallery</h1>
            <p className="mt-3 text-[var(--color-beige-soft)]">Take a closer look at MK Temple Inn.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-2.5 text-xs tracking-[0.14em] uppercase font-semibold border transition-colors ${
                activeCategory === cat.value
                  ? 'bg-[var(--color-brown)] text-white border-[var(--color-brown)]'
                  : 'bg-transparent text-[var(--color-brown)] border-[var(--color-brown)]/40 hover:border-[var(--color-brown)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <GalleryGrid items={filteredItems} />
        </motion.div>
      </section>
    </div>
  );
}