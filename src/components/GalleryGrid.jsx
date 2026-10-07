import { useState } from 'react';
import PropertyImage from './PropertyImage';
import Lightbox from './Lightbox';

export default function GalleryGrid({ items }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className="aspect-square focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
            aria-label={`View larger image: ${item.label}`}
          >
            <PropertyImage src={item.src} alt={item.alt} label={item.label} />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}