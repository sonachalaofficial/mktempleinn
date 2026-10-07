import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import PropertyImage from '../components/PropertyImage';
import BookingForm from '../components/BookingForm';
import ArchDivider from '../components/ArchDivider';
import { rooms, getRoomBySlug } from '../data/rooms';

export default function Booking() {
  const [searchParams, setSearchParams] = useSearchParams();
  const roomSlug = searchParams.get('room');
  const [selectedSlug, setSelectedSlug] = useState(roomSlug || '');

  useEffect(() => {
    document.title = 'Book Your Stay | MK Temple Inn';
  }, []);

  useEffect(() => {
    if (roomSlug) setSelectedSlug(roomSlug);
  }, [roomSlug]);

  const selectedRoom = useMemo(() => getRoomBySlug(selectedSlug), [selectedSlug]);

  const initialValues = useMemo(
    () => ({
      checkIn: searchParams.get('checkIn') || '',
      checkOut: searchParams.get('checkOut') || '',
      guests: searchParams.get('guests') || 1,
      rooms: searchParams.get('rooms') || 1,
    }),
    [searchParams]
  );

  const handleRoomChange = (slug) => {
    setSelectedSlug(slug);
    const params = new URLSearchParams(searchParams);
    params.set('room', slug);
    setSearchParams(params, { replace: true });
  };

  return (
    <div className="pt-28 md:pt-32 pb-20 bg-[var(--color-cream)] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <ArchDivider />
          <h1 className="mt-5 font-display text-3xl md:text-4xl text-[var(--color-brown)]">Book Your Stay</h1>
        </div>

        {selectedRoom ? (
          <div className="bg-white border border-[var(--color-beige-soft)] flex flex-col sm:flex-row overflow-hidden mb-8">
            <div className="sm:w-56 aspect-[4/3] sm:aspect-auto shrink-0">
              <PropertyImage
                src={selectedRoom.images?.[0]?.src}
                alt={selectedRoom.images?.[0]?.alt}
                label={selectedRoom.heroLabel}
              />
            </div>
            <div className="p-6">
              <p className="text-xs tracking-[0.16em] uppercase text-[var(--color-gold)] font-semibold">
                Selected Room
              </p>
              <h2 className="mt-1.5 font-display text-2xl text-[var(--color-brown)]">{selectedRoom.name}</h2>
              <p className="mt-2 text-sm text-[var(--color-ink)]/70 leading-relaxed">
                {selectedRoom.shortDescription}
              </p>
              <Link
                to="/rooms"
                className="mt-3 inline-block text-xs tracking-[0.1em] uppercase text-[var(--color-gold)] underline underline-offset-4"
              >
                Change room
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-[var(--color-beige-soft)] p-6 mb-8">
            <p className="text-xs tracking-[0.16em] uppercase text-[var(--color-gold)] font-semibold mb-4">
              Select a Room
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {rooms.map((room) => (
                <button
                  key={room.slug}
                  type="button"
                  onClick={() => handleRoomChange(room.slug)}
                  className="text-left p-4 border border-[var(--color-beige)] hover:border-[var(--color-gold)] transition-colors"
                >
                  <span className="font-display text-base text-[var(--color-brown)]">{room.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <BookingForm selectedRoom={selectedRoom} initialValues={initialValues} />
      </div>
    </div>
  );
}
