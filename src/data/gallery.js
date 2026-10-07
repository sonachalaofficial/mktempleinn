// Gallery data - all photos in a single flat list, with category tags.

import room1 from '../assets/room1.jpeg';
import room2 from '../assets/room2.jpeg';
import room3 from '../assets/room3.jpeg';
import room4 from '../assets/room4.jpeg';
import room5 from '../assets/room5.jpeg';
import room6 from '../assets/room6.jpeg';
import room7 from '../assets/room7.jpeg';
import room8 from '../assets/room8.jpeg';
import room9 from '../assets/room9.jpeg';
import room10 from '../assets/room10.jpeg';
import room11 from '../assets/room11.jpeg';
import room12 from '../assets/room12.jpeg';
import room13 from '../assets/room13.jpeg';
import room14 from '../assets/room14.jpeg';
import room15 from '../assets/room15.jpeg';
import room16 from '../assets/room16.jpeg';
import room17 from '../assets/room17.jpeg';
import room18 from '../assets/room18.jpeg';
import room19 from '../assets/room19.jpeg';
import room20 from '../assets/room20.jpeg';

// Categories: 'room' | 'mountain' | 'facility' | 'corridor' | 'bathroom'
export const allGalleryItems = [
  { id: 'g1',  src: room1,  category: 'room',     label: 'MK Temple Inn Photo 1',  alt: 'MK Temple Inn photo 1' },
  { id: 'g2',  src: room2,  category: 'room',     label: 'MK Temple Inn Photo 2',  alt: 'MK Temple Inn photo 2' },
  { id: 'g3',  src: room3,  category: 'facility', label: 'MK Temple Inn Photo 3',  alt: 'MK Temple Inn photo 3' },
  { id: 'g4',  src: room4,  category: 'facility', label: 'MK Temple Inn Photo 4',  alt: 'MK Temple Inn photo 4' },
  { id: 'g5',  src: room5,  category: 'room',     label: 'MK Temple Inn Photo 5',  alt: 'MK Temple Inn photo 5' },
  { id: 'g6',  src: room6,  category: 'room',     label: 'MK Temple Inn Photo 6',  alt: 'MK Temple Inn photo 6' },
  { id: 'g7',  src: room7,  category: 'bathroom', label: 'MK Temple Inn Photo 7',  alt: 'MK Temple Inn photo 7' },
  { id: 'g8',  src: room8,  category: 'room',     label: 'MK Temple Inn Photo 8',  alt: 'MK Temple Inn photo 8' },
  { id: 'g9',  src: room9,  category: 'facility', label: 'MK Temple Inn Photo 9',  alt: 'MK Temple Inn photo 9' },
  { id: 'g10', src: room10, category: 'room',     label: 'MK Temple Inn Photo 10', alt: 'MK Temple Inn photo 10' },
  { id: 'g11', src: room11, category: 'mountain', label: 'MK Temple Inn Photo 11', alt: 'MK Temple Inn photo 11' },
  { id: 'g12', src: room12, category: 'corridor', label: 'MK Temple Inn Photo 12', alt: 'MK Temple Inn photo 12' },
  { id: 'g13', src: room13, category: 'corridor', label: 'MK Temple Inn Photo 13', alt: 'MK Temple Inn photo 13' },
  { id: 'g14', src: room14, category: 'facility', label: 'MK Temple Inn Photo 14', alt: 'MK Temple Inn photo 14' },
  { id: 'g15', src: room15, category: 'room',     label: 'MK Temple Inn Photo 15', alt: 'MK Temple Inn photo 15' },
  { id: 'g16', src: room16, category: 'bathroom', label: 'MK Temple Inn Photo 16', alt: 'MK Temple Inn photo 16' },
  { id: 'g17', src: room17, category: 'bathroom', label: 'MK Temple Inn Photo 17', alt: 'MK Temple Inn photo 17' },
  { id: 'g18', src: room18, category: 'bathroom', label: 'MK Temple Inn Photo 18', alt: 'MK Temple Inn photo 18' },
  { id: 'g19', src: room19, category: 'bathroom', label: 'MK Temple Inn Photo 19', alt: 'MK Temple Inn photo 19' },
  { id: 'g20', src: room20, category: 'mountain', label: 'MK Temple Inn Photo 20', alt: 'MK Temple Inn photo 20' },
];

export const galleryCategories = [
  { value: 'all', label: 'All' },
  { value: 'room', label: 'Rooms' },
  { value: 'mountain', label: 'Mountain View' },
  { value: 'facility', label: 'Facility' },
  { value: 'corridor', label: 'Corridor' },
  { value: 'bathroom', label: 'Bathroom' },
];

export const homePreviewItems = allGalleryItems.slice(0, 8);