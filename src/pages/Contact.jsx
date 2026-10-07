import { useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import PropertyImage from '../components/PropertyImage';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | MK Temple Inn';
  }, []);

  return (
    <div>
      <section className="relative h-[42vh] min-h-[300px]">
        <PropertyImage label="Get in Touch" alt="Contact MK Temple Inn" />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/55 flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-10 w-full">
            <h1 className="font-display text-4xl md:text-5xl text-white">Get in Touch</h1>
            <p className="mt-3 text-[var(--color-beige-soft)]">Have a question about your stay? We're happy to help.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <MapPin size={22} className="text-[var(--color-gold)] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <h3 className="font-display text-lg text-[var(--color-brown)]">Address</h3>
              <p className="mt-1 text-sm text-[var(--color-ink)]/70">
                Tiruvannamalai, Tamil Nadu — full address to be confirmed.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone size={22} className="text-[var(--color-gold)] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <h3 className="font-display text-lg text-[var(--color-brown)]">Phone</h3>
              <p className="mt-1 text-sm text-[var(--color-ink)]/70">To be confirmed</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail size={22} className="text-[var(--color-gold)] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <h3 className="font-display text-lg text-[var(--color-brown)]">Email</h3>
              <p className="mt-1 text-sm text-[var(--color-ink)]/70">To be confirmed</p>
            </div>
          </div>

          <div className="aspect-[16/10] border border-[var(--color-beige)]">
            <iframe
              src="https://www.google.com/maps?q=Tiruvannamalai,%20Tamil%20Nadu&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MK Temple Inn Location - Tiruvannamalai"
            />
          </div>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}