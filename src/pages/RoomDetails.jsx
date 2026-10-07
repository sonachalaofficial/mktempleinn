import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Wifi, Snowflake, Fan, Shirt, Table2, ScanFace, Armchair, Plug, GlassWater, Bath, ShowerHead, Flame, Coffee } from 'lucide-react';
import RoomGallery from '../components/RoomGallery';
import BookingBar from '../components/BookingBar';
import ArchDivider from '../components/ArchDivider';
import { getRoomBySlug, rooms } from '../data/rooms';

const amenityIcons = {
  'Wi-Fi': Wifi,
  'Air Conditioning': Snowflake,
  Fan: Fan,
  Wardrobe: Shirt,
  'Dressing Table': Table2,
  Mirror: ScanFace,
  Chair: Armchair,
  'Charging Point': Plug,
  'Water Bottle': GlassWater,
  'Wash Basin': Bath,
  Shower: ShowerHead,
  'Heater / Hot Water': Flame,
  'Tea / Coffee': Coffee,
};

export default function RoomDetails() {
  const { slug } = useParams();
  const room = getRoomBySlug(slug);

  useEffect(() => {
    if (room) document.title = `${room.name} | MK Temple Inn`;
  }, [room]);

  if (!room) {
    return <Navigate to="/rooms" replace />;
  }

  const otherRooms = rooms.filter((r) => r.slug !== room.slug);

  return (
    <div className="pt-28 md:pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="text-xs tracking-[0.1em] uppercase text-[var(--color-ink)]/50 mb-6">
          <Link to="/rooms" className="hover:text-[var(--color-gold)]">Rooms</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-ink)]/80">{room.name}</span>
        </nav>

        <RoomGallery images={room.images} />

        <div className="mt-12 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h1 className="font-display text-3xl md:text-4xl text-[var(--color-brown)]">{room.name}</h1>
            <p className="mt-4 text-[var(--color-ink)]/75 leading-relaxed">{room.longDescription}</p>

            <ArchDivider className="my-9 !mx-0" />

            <h2 className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] font-semibold mb-6">
              Room Amenities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {room.amenities.map((a) => {
                const Icon = amenityIcons[a] || Wifi;
                return (
                  <div key={a} className="flex items-center gap-2.5 text-sm text-[var(--color-ink)]/80">
                    <Icon size={18} strokeWidth={1.5} className="text-[var(--color-gold)] shrink-0" />
                    <span>{a}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-14">
              <h2 className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] font-semibold mb-6">
                Other Rooms
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {otherRooms.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/rooms/${r.slug}`}
                    className="block p-5 border border-[var(--color-beige-soft)] hover:border-[var(--color-gold)] transition-colors"
                  >
                    <span className="font-display text-lg text-[var(--color-brown)]">{r.name}</span>
                    <p className="mt-1.5 text-sm text-[var(--color-ink)]/65 leading-relaxed">{r.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-28 bg-[var(--color-cream)] border border-[var(--color-beige)] p-6">
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] font-semibold">
                Reserve Your Stay
              </p>
              <h3 className="mt-2 font-display text-xl text-[var(--color-brown)]">{room.name}</h3>
              <p className="mt-4 text-sm text-[var(--color-ink)]/70 leading-relaxed">
                Select your dates below or head straight to the booking form — this room will be
                selected automatically.
              </p>
              <Link
                to={`/booking?room=${room.slug}`}
                className="mt-6 block text-center w-full py-3 bg-[var(--color-brown)] text-white text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[var(--color-charcoal)] transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 hidden md:block">
        <BookingBar variant="inline" />
      </div>
    </div>
  );
}
