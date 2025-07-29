import React, { useState } from 'react';
import API from '../Api'; 

const BookTicket = () => {
  const [ticket, setTicket] = useState({
    movieTitle: 'Inception',
    user: 'Logesh',
    seats: ['A1', 'A2'],
    date: '2025-07-20',
    time: '7:00 PM'
  });

  const handleBooking = async () => {
    try {
      const res = await API.post('/bookings', ticket);
      console.log('✅ Booking success:', res.data);
      alert("Ticket booked successfully!");
    } catch (err) {
      console.error('❌ Booking failed:', err.response?.data || err.message);
      alert("Booking failed!");
    }
  };

  return (
    <div>
      <h2>Book Ticket</h2>
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default BookTicket;
