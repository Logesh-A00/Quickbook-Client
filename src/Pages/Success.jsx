import React from 'react';
import './Success.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const Success = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    movie = 'N/A',
    seats = [],
    time = 'N/A',
    date = 'N/A',
    theater = 'N/A',
    amount = 'N/A'
  } = state || {};

  return (
    <div className="success-container">
      <div className="success-box">
        <FaCheckCircle className="success-icon" />
        <h2>Payment Successful!</h2>
        <p>Your booking is confirmed. See details below:</p>

        <div className="ticket-details">
          <p>🎬 <strong>Movie:</strong> {movie}</p>
          <p>🏢 <strong>Theater:</strong> {theater}</p>
          <p>🕒 <strong>Time:</strong> {time}</p>
          <p>📅 <strong>Date:</strong> {date}</p>
          <p>🎟 <strong>Seats:</strong> {seats.join(', ')}</p>
          <p>💰 <strong>Amount Paid:</strong> ₹{amount}</p>
        </div>

        <button className="home-btn" onClick={() => navigate('/')}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
