// Favorite.jsx (updated to use dynamic booking data from SeatBooking.jsx)

import React, { useState } from 'react';
import './Favorite.css';
import { FaArrowLeft, FaGooglePay, FaCreditCard, FaWallet } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import paytmLogo from '../assets/paytm.png';

const Favorite = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [selectedMethod, setSelectedMethod] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [upiPin, setUpiPin] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', cvv: '' });
  const [error, setError] = useState('');

  const ticketData = {
    movie: state?.movie || 'N/A',
    theater: state?.theater || 'N/A',
    seats: state?.seats || [],
    time: state?.time || 'N/A',
    date: state?.date || 'N/A',
    user: state?.user || 'N/A',
    amount: state?.amount || 0
  };

  const paymentMethods = [
    {
      id: 'paytm',
      label: 'Pay Via PayTM',
      icon: <img src={paytmLogo} alt="PayTM" className="icon-img" />
    },
    {
      id: 'gpay',
      label: 'Pay Via Google Pay',
      icon: <FaGooglePay className="icon react-icon" />
    },
    {
      id: 'card',
      label: 'Pay Via Debit/Credit Card',
      icon: <FaCreditCard className="icon react-icon" />
    },
    {
      id: 'other',
      label: 'Other Payment Method',
      icon: <FaWallet className="icon react-icon" />
    }
  ];

  const handlePayNow = () => {
    setError('');
    setShowModal(true);
  };

  const handleConfirmPayment = async () => {
    const { movie, theater, seats, time, date, user, amount } = ticketData;

    const isValid =
      (selectedMethod === 'paytm' && upiPin === '1234') ||
      (selectedMethod === 'gpay' && upiPin === '4321') ||
      (selectedMethod === 'card' && cardDetails.number === '4111111111111111' && cardDetails.cvv === '123');

    if (!isValid) {
      setError('❌ Invalid payment credentials.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/bookings', {
        movie,
        theater,
        seats,
        date,
        time,
        user
      });

      navigate('/success', { state: ticketData });
    } catch (err) {
      setError('❌ Failed to store booking.');
    }
  };

  return (
    <div className="payment-container">
      <div className="header">
        <FaArrowLeft className="back-arrow" onClick={() => navigate('/seatbooking')} />
        <h2>Payment</h2>
      </div>

      <p className="subtitle">Choose a payment method</p>

      <div className="payment-options">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`payment-card ${selectedMethod === method.id ? 'selected' : ''}`}
            onClick={() => setSelectedMethod(method.id)}
          >
            <input
              type="radio"
              name="payment"
              checked={selectedMethod === method.id}
              onChange={() => setSelectedMethod(method.id)}
            />
            <div className="icon-wrapper">{method.icon}</div>
            <span>{method.label}</span>
          </div>
        ))}
      </div>

      <button className="pay-now-btn" disabled={!selectedMethod} onClick={handlePayNow}>
        Pay Now
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Enter Payment Details</h3>

            {(selectedMethod === 'paytm' || selectedMethod === 'gpay') && (
              <input
                type="password"
                placeholder="Enter UPI PIN"
                value={upiPin}
                onChange={(e) => setUpiPin(e.target.value)}
              />
            )}

            {selectedMethod === 'card' && (
              <>
                <input
                  type="text"
                  placeholder="Card Number"
                  maxLength="16"
                  value={cardDetails.number}
                  onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="CVV"
                  maxLength="3"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                />
              </>
            )}

            {error && <p className="error">{error}</p>}

            <div className="modal-buttons">
              <button onClick={handleConfirmPayment}>Confirm</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorite;