// Frontend-only mock booking service.
// Keeps booking + contact logic isolated so it is easy to swap for a real
// backend (Node/Express, Django, Firebase, REST API) later without touching
// any page or component code.

const BOOKINGS_KEY = 'mkti_bookings';
const MESSAGES_KEY = 'mkti_messages';

function readList(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeList(key, list) {
  try {
    localStorage.setItem(key, JSON.stringify(list));
  } catch {
    // localStorage unavailable — fail silently, mock service still resolves
  }
}

export function submitBooking(bookingData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const record = {
        id: `BK-${Date.now()}`,
        ...bookingData,
        submittedAt: new Date().toISOString(),
      };
      const list = readList(BOOKINGS_KEY);
      list.push(record);
      writeList(BOOKINGS_KEY, list);
      resolve({ success: true, booking: record });
    }, 600);
  });
}

export function submitContactMessage(messageData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const record = {
        id: `MSG-${Date.now()}`,
        ...messageData,
        submittedAt: new Date().toISOString(),
      };
      const list = readList(MESSAGES_KEY);
      list.push(record);
      writeList(MESSAGES_KEY, list);
      resolve({ success: true, message: record });
    }, 500);
  });
}
