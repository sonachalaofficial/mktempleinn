// Central room data. Images imported from /src/assets.

import room2 from '../assets/room2.jpeg';
import room3 from '../assets/room3.jpeg';
import room5 from '../assets/room5.jpeg';
import room6 from '../assets/room6.jpeg';
import room8 from '../assets/room8.jpeg';
import room10 from '../assets/room10.jpeg';
import room11 from '../assets/room11.jpeg';
import room13 from '../assets/room13.jpeg';
import room15 from '../assets/room15.jpeg';

export const rooms = [
  {
    id: 'king-size',
    slug: 'king-size',
    name: 'King Size Room',
    shortDescription:
      'A comfortable and spacious room featuring a king-size bed and essential amenities for a relaxing stay.',
    longDescription:
      'Our King Size Room offers a comfortable and spacious accommodation experience for guests who value a restful stay. The room is arranged around a king-size bed and equipped with the essential facilities needed for an easy, relaxing visit.',
    heroLabel: 'King Size Room',
    images: [
      { src: room2, label: 'King Size Room — Main View', alt: 'King Size Room main view at MK Temple Inn' },
      { src: room3, label: 'King Size Room — Interior', alt: 'King Size Room interior at MK Temple Inn' },
      { src: room6, label: 'King Size Room — Bathroom', alt: 'King Size Room attached bathroom at MK Temple Inn' },
    ],
    cardAmenities: ['AC', 'Wi-Fi', 'Hot Water', 'Charging Point'],
    amenities: [
      'Wi-Fi', 'Air Conditioning', 'Fan', 'Wardrobe', 'Charging Point',
      'Water Bottle', 'Wash Basin', 'Shower', 'Heater / Hot Water',
    ],
  },
  {
    id: 'premium',
    slug: 'premium',
    name: 'Premium Room',
    shortDescription:
      'A thoughtfully equipped room offering enhanced comfort and modern facilities for couples, families, and leisure travellers.',
    longDescription:
      'The Premium Room is thoughtfully equipped to offer enhanced comfort for couples, families, and leisure travellers. It combines a relaxing atmosphere with a set of modern conveniences designed around a pleasant, hassle-free stay.',
    heroLabel: 'Premium Room',
    images: [
      { src: room8, label: 'Premium Room — Main View', alt: 'Premium Room main view at MK Temple Inn' },
      { src: room5, label: 'Premium Room — Bed Area', alt: 'Premium Room bed area at MK Temple Inn' },
      { src: room13, label: 'Premium Room — Dressing Area', alt: 'Premium Room dressing area at MK Temple Inn' },
    ],
    cardAmenities: ['AC', 'Wi-Fi', 'Hot Water', 'Dressing Table'],
    amenities: [
      'Wi-Fi', 'Air Conditioning', 'Fan', 'Wardrobe', 'Dressing Table', 'Mirror',
      'Chair', 'Water Bottle', 'Wash Basin', 'Shower', 'Heater / Hot Water', 'Tea / Coffee',
    ],
  },
  {
    id: 'top-suite',
    slug: 'top-suite',
    name: 'Top Suite Room',
    shortDescription:
      'A spacious suite-style accommodation designed for guests seeking a more premium and relaxing stay experience.',
    longDescription:
      'Our Top Suite Room offers a spacious and comfortable accommodation experience for guests looking for enhanced comfort and privacy. The room combines a relaxing atmosphere with essential modern facilities for a pleasant stay.',
    heroLabel: 'Top Suite Room',
    images: [
      { src: room15, label: 'Top Suite Room — Main View', alt: 'Top Suite Room main view at MK Temple Inn' },
      { src: room10, label: 'Top Suite Room — Bed Area', alt: 'Top Suite Room bed area at MK Temple Inn' },
      { src: room11, label: 'Top Suite Room — Interior', alt: 'Top Suite Room interior seating at MK Temple Inn' },
    ],
    cardAmenities: ['AC', 'Wi-Fi', 'Hot Water', 'Charging Point'],
    amenities: [
      'Wi-Fi', 'Air Conditioning', 'Fan', 'Wardrobe', 'Mirror', 'Chair', 'Charging Point',
      'Water Bottle', 'Wash Basin', 'Shower', 'Heater / Hot Water', 'Tea / Coffee',
    ],
  },
];

export const getRoomBySlug = (slug) => rooms.find((room) => room.slug === slug);