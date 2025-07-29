import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [form, setForm] = useState({
    movie: '',
    theater: '',
    seats: '',
    user: '',
    date: '',
    time: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const booking = { ...form, seats: form.seats.split(',') };
    try {
      await axios.post('http://localhost:5000/api/bookings', booking);
      alert('Booking Successful!');
      setForm({ movie: '', theater: '', seats: '', user: '', date: '', time: '' });
    } catch (err) {
      alert('Booking Failed!');
    }
  };

  return (
    <div className="form-container">
      <h2>🎟️ Book Your Movie</h2>
      <form onSubmit={handleSubmit}>
        <input name="movie" placeholder="Movie Name" value={form.movie} onChange={handleChange} required />
        <input name="theater" placeholder="Theater Name" value={form.theater} onChange={handleChange} required />
        <input name="seats" placeholder="Seats (e.g. A1,A2)" value={form.seats} onChange={handleChange} required />
        <input name="user" placeholder="Your Email" value={form.user} onChange={handleChange} required />
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <input name="time" type="time" value={form.time} onChange={handleChange} required />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
