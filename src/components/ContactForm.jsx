import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { submitContactMessage } from '../services/bookingService';

const initialForm = { fullName: '', phone: '', email: '', message: '' };

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
  if (!form.message.trim()) errors.message = 'Please tell us how we can help.';
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setStatus('submitting');
    await submitContactMessage(form);
    setStatus('success');
    setForm(initialForm);
  };

  if (status === 'success') {
    return (
      <div className="bg-white border border-[var(--color-beige-soft)] p-10 text-center">
        <CheckCircle2 size={38} className="mx-auto text-[var(--color-gold)]" strokeWidth={1.4} />
        <p className="mt-4 text-[var(--color-brown)] font-display text-xl">
          Thank you! Your message has been submitted successfully.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-xs tracking-[0.14em] uppercase text-[var(--color-gold)] underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white border border-[var(--color-beige-soft)] p-6 md:p-8 space-y-5">
      <Field label="Full Name" error={errors.fullName}>
        <input type="text" value={form.fullName} onChange={update('fullName')} className={inputClass(errors.fullName)} />
      </Field>
      <Field label="Phone Number" error={errors.phone}>
        <input type="tel" value={form.phone} onChange={update('phone')} className={inputClass(errors.phone)} />
      </Field>
      <Field label="Email" error={errors.email}>
        <input type="email" value={form.email} onChange={update('email')} className={inputClass(errors.email)} />
      </Field>
      <Field label="Message" error={errors.message}>
        <textarea rows={5} value={form.message} onChange={update('message')} className={`${inputClass(errors.message)} resize-none`} />
      </Field>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full md:w-auto px-9 py-3 bg-[var(--color-brown)] text-white text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[var(--color-charcoal)] transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] tracking-[0.1em] uppercase text-[var(--color-ink)]/70 font-medium">{label}</span>
      {children}
      {error && <span className="text-xs text-[#a3402f] mt-0.5">{error}</span>}
    </label>
  );
}

function inputClass(hasError) {
  return `w-full border px-4 py-2.5 text-sm bg-[var(--color-ivory)] focus:border-[var(--color-gold)] outline-none ${
    hasError ? 'border-[#a3402f]' : 'border-[var(--color-beige)]'
  }`;
}
