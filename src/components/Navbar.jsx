import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/rooms', label: 'Rooms' },
  { to: '/amenities', label: 'Amenities' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/policies', label: 'Policies' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        solid ? 'bg-[var(--color-ivory)]/95 backdrop-blur shadow-[0_2px_18px_rgba(33,28,25,0.08)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 h-20">
        <Link to="/" className="flex items-baseline gap-2 shrink-0" aria-label="MK Temple Inn home">
          <span
            className={`font-display text-xl md:text-2xl tracking-[0.08em] transition-colors ${
              solid ? 'text-[var(--color-brown)]' : 'text-white'
            }`}
          >
            MK TEMPLE INN
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-[13px] tracking-[0.12em] uppercase font-medium pb-1 border-b transition-colors ${
                    isActive
                      ? solid
                        ? 'text-[var(--color-gold)] border-[var(--color-gold)]'
                        : 'text-white border-white'
                      : solid
                      ? 'text-[var(--color-ink)]/80 border-transparent hover:text-[var(--color-gold)]'
                      : 'text-white/85 border-transparent hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/booking"
          className={`hidden lg:inline-flex items-center px-6 py-2.5 text-[12px] tracking-[0.15em] uppercase font-semibold transition-colors ${
            solid
              ? 'bg-[var(--color-brown)] text-[var(--color-ivory)] hover:bg-[var(--color-charcoal)]'
              : 'bg-white text-[var(--color-brown)] hover:bg-[var(--color-cream)]'
          }`}
        >
          Book Now
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`lg:hidden p-2 ${solid ? 'text-[var(--color-brown)]' : 'text-white'}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[var(--color-ivory)] border-t border-[var(--color-beige)] overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.to} className="border-b border-[var(--color-beige-soft)] last:border-none">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block py-4 text-base tracking-wide uppercase font-medium ${
                        isActive ? 'text-[var(--color-gold)]' : 'text-[var(--color-ink)]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="px-6 pb-6">
              <Link
                to="/booking"
                className="block text-center w-full py-3.5 bg-[var(--color-brown)] text-[var(--color-ivory)] text-sm tracking-[0.15em] uppercase font-semibold"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
