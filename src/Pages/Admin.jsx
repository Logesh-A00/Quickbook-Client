// src/pages/Admin.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({
    movie: '',
    theater: '',
    seats: '',
    date: '',
    time: '',
    user: '',
  });
  const [editingId, setEditingId] = useState(null);

  const fetchBookings = () => {
    axios.get('http://localhost:5000/api/bookings')
      .then(res => setBookings(res.data))
      .catch(err => console.error('Fetch error:', err));
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      seats: form.seats.split(',').map(s => s.trim()),
    };
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/bookings/${editingId}`, payload);
      } else {
        await axios.post('http://localhost:5000/api/bookings', payload);
      }
      setForm({ movie: '', theater: '', seats: '', date: '', time: '', user: '' });
      setEditingId(null);
      fetchBookings();
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`);
      fetchBookings();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleEdit = (b) => {
    setForm({
      movie: b.movie,
      theater: b.theater,
      seats: b.seats.join(', '),
      date: b.date,
      time: b.time,
      user: b.user,
    });
    setEditingId(b._id);
  };

  return (
    <div className="admin-panel">
      <h2>🎟️ Admin Booking Panel</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input name="movie" value={form.movie} onChange={handleChange} placeholder="Movie" required />
        <input name="theater" value={form.theater} onChange={handleChange} placeholder="Theater" required />
        <input name="seats" value={form.seats} onChange={handleChange} placeholder="Seats (comma separated)" required />
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <input type="time" name="time" value={form.time} onChange={handleChange} required />
        <input name="user" value={form.user} onChange={handleChange} placeholder="User Email/ID" required />
        <button type="submit">{editingId ? 'Update' : 'Add'} Booking</button>
      </form>

      <div className="bookings-list">
        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          bookings.map(b => (
            <div className="booking-card" key={b._id}>
              <h3>{b.movie}</h3>
              <p><strong>Theater:</strong> {b.theater}</p>
              <p><strong>Seats:</strong> {b.seats.join(', ')}</p>
              <p><strong>Date:</strong> {b.date} | <strong>Time:</strong> {b.time}</p>
              <p><strong>User:</strong> {b.user}</p>
              <div className="buttons">
                <button className="edit" onClick={() => handleEdit(b)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(b._id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
