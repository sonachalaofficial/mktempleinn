import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, Users, BedDouble } from 'lucide-react';

export default function BookingBar({ variant = 'hero' }) {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [roomsCount, setRoomsCount] = useState(1);

  const handleCheck = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (checkIn) params.set('checkIn', checkIn);
    if (checkOut) params.set('checkOut', checkOut);
    params.set('guests', guests);
    params.set('rooms', roomsCount);
    navigate(`/booking?${params.toString()}`);
  };

  const isHero = variant === 'hero';

  return (
    <form
      onSubmit={handleCheck}
      className={`w-full ${
        isHero
          ? 'bg-white shadow-[0_10px_40px_rgba(33,28,25,0.18)]'
          : 'bg-white border border-[var(--color-beige)]'
      } p-4 md:p-5 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:items-end gap-4`}
    >
      <label className="flex-1 flex flex-col gap-1.5 min-w-0">
        <span className="text-[11px] tracking-[0.14em] uppercase text-[var(--color-brown)] font-medium flex items-center gap-1.5">
          <CalendarDays size={13} /> Check-in
        </span>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full h-11 border-2 border-[var(--color-beige)] rounded-sm px-3 text-sm text-[var(--color-ink)] bg-[var(--color-cream)] focus:border-[var(--color-gold)] focus:bg-white outline-none"
        />
      </label>

      <label className="flex-1 flex flex-col gap-1.5 min-w-0">
        <span className="text-[11px] tracking-[0.14em] uppercase text-[var(--color-brown)] font-medium flex items-center gap-1.5">
          <CalendarDays size={13} /> Check-out
        </span>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full h-11 border-2 border-[var(--color-beige)] rounded-sm px-3 text-sm text-[var(--color-ink)] bg-[var(--color-cream)] focus:border-[var(--color-gold)] focus:bg-white outline-none"
        />
      </label>

      <label className="w-full md:w-24 flex flex-col gap-1.5 shrink-0">
        <span className="text-[11px] tracking-[0.14em] uppercase text-[var(--color-brown)] font-medium flex items-center gap-1.5">
          <Users size={13} /> Guests
        </span>
        <input
          type="number"
          min={1}
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full h-11 border-2 border-[var(--color-beige)] rounded-sm px-3 text-sm text-[var(--color-ink)] bg-[var(--color-cream)] focus:border-[var(--color-gold)] focus:bg-white outline-none"
        />
      </label>

      <label className="w-full md:w-24 flex flex-col gap-1.5 shrink-0">
        <span className="text-[11px] tracking-[0.14em] uppercase text-[var(--color-brown)] font-medium flex items-center gap-1.5">
          <BedDouble size={13} /> Rooms
        </span>
        <input
          type="number"
          min={1}
          value={roomsCount}
          onChange={(e) => setRoomsCount(e.target.value)}
          className="w-full h-11 border-2 border-[var(--color-beige)] rounded-sm px-3 text-sm text-[var(--color-ink)] bg-[var(--color-cream)] focus:border-[var(--color-gold)] focus:bg-white outline-none"
        />
      </label>

      <button
        type="submit"
        className="w-full md:w-auto h-11 px-7 shrink-0 bg-[var(--color-brown)] text-white text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[var(--color-charcoal)] transition-colors"
      >
        Check Availability
      </button>
    </form>
  );
}
