import { motion } from 'framer-motion';

export default function AmenityCard({ icon: Icon, label, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="flex flex-col items-center text-center gap-3 p-6 bg-white border border-[var(--color-beige-soft)] hover:border-[var(--color-gold)] transition-colors"
    >
      <Icon size={26} strokeWidth={1.5} className="text-[var(--color-gold)]" />
      <span className="text-sm text-[var(--color-ink)] font-medium">{label}</span>
    </motion.div>
  );
}
