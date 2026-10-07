import { useEffect } from 'react';
import { Wifi, Snowflake, Fan, Shirt, Table2, ScanFace, Armchair, Plug, GlassWater, Coffee, Bath, ShowerHead, Flame, Car } from 'lucide-react';
import PropertyImage from '../components/PropertyImage';
import AmenityCard from '../components/AmenityCard';
import ArchDivider from '../components/ArchDivider';

const roomAmenities = [
  { icon: Wifi, label: 'Wi-Fi' },
  { icon: Snowflake, label: 'Air Conditioning' },
  { icon: Fan, label: 'Fan' },
  { icon: Shirt, label: 'Wardrobe' },
  { icon: Table2, label: 'Dressing Table' },
  { icon: ScanFace, label: 'Mirror' },
  { icon: Armchair, label: 'Chair' },
  { icon: Plug, label: 'Charging Point' },
  { icon: GlassWater, label: 'Water Bottle' },
  { icon: Coffee, label: 'Tea / Coffee' },
];

const bathroomFacilities = [
  { icon: Bath, label: 'Wash Basin' },
  { icon: ShowerHead, label: 'Shower' },
  { icon: Flame, label: 'Heater / Hot Water' },
];

const propertyFacilities = [{ icon: Car, label: 'Car Parking' }];

export default function Amenities() {
  useEffect(() => {
    document.title = 'Amenities | MK Temple Inn';
  }, []);

  return (
    <div>
      <section className="relative h-[42vh] min-h-[300px]">
        <PropertyImage label="Amenities" alt="MK Temple Inn amenities" />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/55 flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-10 w-full">
            <h1 className="font-display text-3xl md:text-5xl text-white max-w-2xl">
              Everything You Need for a Comfortable Stay
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-16">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <ArchDivider className="!mx-0" />
            <h2 className="font-display text-2xl text-[var(--color-brown)]">Room Amenities</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {roomAmenities.map((a, i) => (
              <AmenityCard key={a.label} icon={a.icon} label={a.label} index={i} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <ArchDivider className="!mx-0" />
            <h2 className="font-display text-2xl text-[var(--color-brown)]">Bathroom Facilities</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {bathroomFacilities.map((a, i) => (
              <AmenityCard key={a.label} icon={a.icon} label={a.label} index={i} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <ArchDivider className="!mx-0" />
            <h2 className="font-display text-2xl text-[var(--color-brown)]">Property Facilities</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {propertyFacilities.map((a, i) => (
              <AmenityCard key={a.label} icon={a.icon} label={a.label} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
