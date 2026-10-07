import { useEffect } from 'react';
import { Baby, Users, Wine, CigaretteOff, PawPrint } from 'lucide-react';
import PropertyImage from '../components/PropertyImage';
import PolicyCard from '../components/PolicyCard';

const policies = [
  { icon: Baby, title: 'Child Policy', description: 'Children below 10 years are allowed free of charge, subject to applicable property terms.' },
  { icon: Users, title: 'Couple Policy', description: 'Unmarried couples are allowed with valid identification.' },
  { icon: Wine, title: 'Drinking Policy', description: 'Drinking is allowed according to property rules and applicable laws.' },
  { icon: CigaretteOff, title: 'Smoking Policy', description: 'Smoking is not allowed on the property.' },
  { icon: PawPrint, title: 'Pet Policy', description: 'Pets are not allowed.' },
];

export default function Policies() {
  useEffect(() => {
    document.title = 'Policies | MK Temple Inn';
  }, []);

  return (
    <div>
      <section className="relative h-[42vh] min-h-[300px]">
        <PropertyImage label="Hotel Policies" alt="MK Temple Inn policies" />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/55 flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-10 w-full">
            <h1 className="font-display text-4xl md:text-5xl text-white">Hotel Policies</h1>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="grid sm:grid-cols-2 gap-6">
          {policies.map((p, i) => (
            <PolicyCard key={p.title} icon={p.icon} title={p.title} description={p.description} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
