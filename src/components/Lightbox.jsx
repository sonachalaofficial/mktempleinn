import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PropertyImage from './PropertyImage';

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + items.length) % items.length);
    },
    [index, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  if (!item) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-[var(--color-charcoal)]/95 flex items-center justify-center px-4"
        role="dialog"
        aria-modal="true"
        aria-label={`Image viewer: ${item.label}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery viewer"
          className="absolute top-5 right-5 text-white/80 hover:text-white p-2"
        >
          <X size={28} />
        </button>

        <button
          type="button"
          onClick={() => onNavigate((index - 1 + items.length) % items.length)}
          aria-label="Previous image"
          className="absolute left-2 md:left-6 text-white/70 hover:text-white p-2"
        >
          <ChevronLeft size={32} />
        </button>

        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-3xl aspect-[4/3]"
        >
          <PropertyImage src={item.src} alt={item.alt} label={item.label} />
        </motion.div>

        <button
          type="button"
          onClick={() => onNavigate((index + 1) % items.length)}
          aria-label="Next image"
          className="absolute right-2 md:right-6 text-white/70 hover:text-white p-2"
        >
          <ChevronRight size={32} />
        </button>

        <div className="absolute bottom-6 left-0 right-0 text-center text-white/70 text-xs tracking-[0.14em] uppercase">
          {item.label} · {index + 1} / {items.length}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
