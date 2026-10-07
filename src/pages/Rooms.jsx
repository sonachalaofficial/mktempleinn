import { useEffect } from 'react';
import PropertyImage from '../components/PropertyImage';
import ArchDivider from '../components/ArchDivider';
import RoomCard from '../components/RoomCard';
import { rooms } from '../data/rooms';

export default function Rooms() {
  useEffect(() => {
    document.title = 'Rooms | MK Temple Inn';
  }, []);

  return (
    <div>
      <section className="relative h-[42vh] min-h-[300px]">
        <PropertyImage label="Our Rooms" alt="MK Temple Inn rooms" />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/55 flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-10 w-full">
            <h1 className="font-display text-4xl md:text-5xl text-white">Stay Your Way</h1>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-xl mx-auto">
          <ArchDivider />
          <p className="mt-5 text-[var(--color-ink)]/70">
            Choose the room that matches your comfort and stay requirements.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <RoomCard room={room} index={i} key={room.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
