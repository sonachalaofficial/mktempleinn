import { useState } from 'react';
import PropertyImage from './PropertyImage';
import Lightbox from './Lightbox';

export default function RoomGallery({ images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const main = images[0];
  const rest = images.slice(1);

  return (
    <div>
      <button
        type="button"
        onClick={() => setLightboxIndex(0)}
        className="block w-full aspect-[16/10] mb-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
        aria-label={`View larger image: ${main.label}`}
      >
        <PropertyImage src={main.src} alt={main.alt} label={main.label} />
      </button>

      <div className="grid grid-cols-4 gap-3">
        {rest.map((img, i) => (
          <button
            key={img.label}
            type="button"
            onClick={() => setLightboxIndex(i + 1)}
            className="aspect-square focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
            aria-label={`View larger image: ${img.label}`}
          >
            <PropertyImage src={img.src} alt={img.alt} label={img.label} />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
