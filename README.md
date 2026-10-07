# MK Temple Inn — Website

Premium, responsive hotel website built with React + Vite + Tailwind CSS v4 +
Framer Motion + React Router + Lucide icons. Frontend-only, ready for future
backend integration.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Adding real MK Temple Inn photos

Every image on the site currently renders a branded placeholder (dark
gradient + "Photo coming soon" label) via `src/components/PropertyImage.jsx`.
To swap in real photography:

1. Drop image files into `public/images/...` (create subfolders as you like,
   e.g. `public/images/rooms/top-suite/1.jpg`, `public/images/gallery/property/1.jpg`).
2. Open `src/data/rooms.js` and `src/data/gallery.js`.
3. Replace `src: null` with the path, e.g. `src: '/images/rooms/top-suite/1.jpg'`.

That's it — `PropertyImage` automatically renders the real photo once `src`
is set, everywhere that image is used (room cards, room detail galleries,
homepage preview, gallery grid, lightbox).

## Project structure

```
src/
├── components/   Reusable UI (Navbar, Footer, RoomCard, BookingForm, etc.)
├── pages/        One file per route
├── data/         rooms.js and gallery.js — single source of truth
├── routes/       AppRoutes.jsx — all route definitions
├── services/     bookingService.js — mock booking/contact submission,
│                 isolated so it's a drop-in swap for a real API later
└── App.jsx / main.jsx
```

## Notes

- Property facts (4,000 sq.ft., 16 rooms, 2 homestay units, 3 room
  categories, amenities, policies) come from the confirmed brief. Address,
  phone, email, prices, check-in/out times, and room sizes are intentionally
  left as "to be confirmed" placeholders — search for these in
  `src/pages/Contact.jsx` and update once you have the real details.
- Booking and contact submissions are stored in the browser's `localStorage`
  (`mkti_bookings`, `mkti_messages`) via `src/services/bookingService.js`.
  Swap the two functions in that file for real API calls when a backend is
  ready — no other file needs to change.
