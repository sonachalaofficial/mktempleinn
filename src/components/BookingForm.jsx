import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { submitBooking } from '../services/bookingService';
import ArchDivider from './ArchDivider';

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  checkIn: '',
  checkOut: '',
  guests: 1,
  rooms: 1,
  specialRequest: '',
};

function validate(form) {
  const errors = {};
  if (!form.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) {
    errors.phone = 'Enter a valid phone number.';
  }
  if (!form.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.checkIn) errors.checkIn = 'Check-in date is required.';
  if (!form.checkOut) errors.checkOut = 'Check-out date is required.';
  if (form.checkIn && form.checkOut && new Date(form.checkOut) <= new Date(form.checkIn)) {
    errors.checkOut = 'Check-out must be after check-in.';
  }
  if (!form.guests || Number(form.guests) < 1) errors.guests = 'At least 1 guest is required.';
  if (!form.rooms || Number(form.rooms) < 1) errors.rooms = 'At least 1 room is required.';
  return errors;
}

export default function BookingForm({ selectedRoom, initialValues = {} }) {
  const [form, setForm] = useState({ ...initialForm, ...initialValues });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    await submitBooking({
      room: selectedRoom ? selectedRoom.name : 'Not specified',
      roomSlug: selectedRoom ? selectedRoom.slug : null,
      ...form,
    });
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-[var(--color-beige-soft)] p-10 md:p-14 text-center"
      >
        <CheckCircle2 size={44} className="mx-auto text-[var(--color-gold)]" strokeWidth={1.4} />
        <ArchDivider className="mt-5" />
        <h2 className="font-display text-2xl md:text-3xl text-[var(--color-brown)] mt-5">
          Booking Request Submitted
        </h2>
        <p className="mt-4 text-[var(--color-ink)]/75 max-w-md mx-auto leading-relaxed">
          Thank you for choosing MK Temple Inn. Your booking request has been received successfully.
          Our team will contact you shortly to confirm your reservation.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-7 py-3 border border-[var(--color-brown)] text-[var(--color-brown)] text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[var(--color-brown)] hover:text-white transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/rooms"
            className="px-7 py-3 bg-[var(--color-brown)] text-white text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[var(--color-charcoal)] transition-colors"
          >
            Explore Rooms
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white border border-[var(--color-beige-soft)] p-6 md:p-10 space-y-10">
      <fieldset>
        <legend className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] font-semibold mb-5">
          Guest Information
        </legend>
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Full Name" error={errors.fullName}>
            <input
              type="text"
              value={form.fullName}
              onChange={update('fullName')}
              className={inputClass(errors.fullName)}
              autoComplete="name"
            />
          </Field>
          <Field label="Phone Number" error={errors.phone}>
            <input
              type="tel"
              value={form.phone}
              onChange={update('phone')}
              className={inputClass(errors.phone)}
              autoComplete="tel"
            />
          </Field>
          <Field label="Email Address" error={errors.email} full>
            <input
              type="email"
              value={form.email}
              onChange={update('email')}
              className={inputClass(errors.email)}
              autoComplete="email"
            />
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] font-semibold mb-5">
          Stay Information
        </legend>
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Check-in Date" error={errors.checkIn}>
            <input type="date" value={form.checkIn} onChange={update('checkIn')} className={inputClass(errors.checkIn)} />
          </Field>
          <Field label="Check-out Date" error={errors.checkOut}>
            <input type="date" value={form.checkOut} onChange={update('checkOut')} className={inputClass(errors.checkOut)} />
          </Field>
          <Field label="Number of Guests" error={errors.guests}>
            <input type="number" min={1} value={form.guests} onChange={update('guests')} className={inputClass(errors.guests)} />
          </Field>
          <Field label="Number of Rooms" error={errors.rooms}>
            <input type="number" min={1} value={form.rooms} onChange={update('rooms')} className={inputClass(errors.rooms)} />
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] font-semibold mb-5">
          Special Request
        </legend>
        <textarea
          value={form.specialRequest}
          onChange={update('specialRequest')}
          rows={4}
          placeholder="Tell us about any special requirements"
          className="w-full border border-[var(--color-beige)] px-4 py-3 text-sm bg-[var(--color-ivory)] focus:border-[var(--color-gold)] outline-none resize-none"
        />
      </fieldset>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full md:w-auto px-10 py-3.5 bg-[var(--color-brown)] text-white text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[var(--color-charcoal)] transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit Booking Request'}
      </button>
    </form>
  );
}

function Field({ label, error, children, full }) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? 'md:col-span-2' : ''}`}>
      <span className="text-[11px] tracking-[0.1em] uppercase text-[var(--color-ink)]/70 font-medium">{label}</span>
      {children}
      {error && <span className="text-xs text-[#a3402f] mt-0.5">{error}</span>}
    </label>
  );
}

function inputClass(hasError) {
  return `border px-4 py-2.5 text-sm bg-[var(--color-ivory)] focus:border-[var(--color-gold)] outline-none ${
    hasError ? 'border-[#a3402f]' : 'border-[var(--color-beige)]'
  }`;
}
