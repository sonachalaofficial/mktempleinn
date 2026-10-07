import { motion } from 'framer-motion';

export default function PolicyCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="p-7 bg-white border border-[var(--color-beige-soft)]"
    >
      <Icon size={24} strokeWidth={1.5} className="text-[var(--color-gold)] mb-4" />
      <h3 className="font-display text-lg text-[var(--color-brown)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--color-ink)]/75 leading-relaxed">{description}</p>
    </motion.div>
  );
}
