import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Rooms from '../pages/Rooms';
import RoomDetails from '../pages/RoomDetails';
import Amenities from '../pages/Amenities';
import Gallery from '../pages/Gallery';
import Policies from '../pages/Policies';
import Booking from '../pages/Booking';
import Contact from '../pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/rooms/:slug" element={<RoomDetails />} />
      <Route path="/amenities" element={<Amenities />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
