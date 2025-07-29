import React, { useState } from 'react';
import './SeatBooking.css';
import { Link, useLocation } from 'react-router-dom';

const SeatBooking = () => {
  const seatLayout = [
    { sectionName: 'Balcony', rows: 6, cols: 12, occupied: ['0-3', '0-10'] },
    { sectionName: 'Premium', rows: 4, cols: 10, occupied: ['1-5'] },
  ];

  const location = useLocation();
  const selectedMovie = location.state?.movie || 'Avengers: Endgame';

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [step, setStep] = useState('quantity');
  const [maxSeats, setMaxSeats] = useState(0);

  const toggleSeat = (id) => {
    if (selectedSeats.includes(id)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== id));
    } else {
      if (selectedSeats.length < maxSeats) {
        setSelectedSeats([...selectedSeats, id]);
      }
    }
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([
      `Ticket Confirmation\n\nSeats: ${selectedSeats.join(', ')}\nTotal: ₹${selectedSeats.length * 120}`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'ticket.txt';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="seat-booking-container">
      <div className="booking-header">
        <h2>Seat Booking - {selectedMovie}</h2>
      </div>

      {step === 'quantity' && (
        <div className="quantity-popup">
          <h3>Select Number of Seats</h3>
          <div className="seat-options">
            {[1, 2, 4, 6, 10].map((n) => (
              <button key={n} onClick={() => {
                setMaxSeats(n);
                setStep('selectSeats');
              }}>{n}</button>
            ))}
          </div>

          <button
            className="select-all-btn"
            onClick={() => {
              const allAvailable = [];
              seatLayout.forEach((section, secIndex) => {
                const totalSeats = section.rows * section.cols;
                for (let i = 0; i < totalSeats; i++) {
                  const id = `${secIndex}-${i}`;
                  if (!section.occupied.includes(id)) {
                    allAvailable.push(id);
                  }
                }
              });
              setMaxSeats(allAvailable.length);
              setSelectedSeats(allAvailable);
              setStep('selectSeats');
            }}
          >
            🎯 Select All Available Seats
          </button>
        </div>
      )}

      {step === 'selectSeats' && (
        <>
          <div className="legend">
            <span><span className="legend-box available" /> Available</span>
            <span><span className="legend-box selected" /> Selected</span>
            <span><span className="legend-box occupied" /> Occupied</span>
          </div>

          <div className="screen-label">SCREEN THIS WAY</div>

          <div className="seat-layout scrollable">
            {seatLayout.map((section, secIndex) => (
              <div className="section-block" key={secIndex}>
                <h4>{section.sectionName}</h4>
                {[...Array(section.rows)].map((_, row) => (
                  <div className="seat-row" key={row}>
                    {[...Array(section.cols)].map((_, col) => {
                      const seatId = `${secIndex}-${row * section.cols + col}`;
                      const isOccupied = section.occupied.includes(seatId);
                      const isSelected = selectedSeats.includes(seatId);
                      return (
                        <div
                          key={col}
                          className={`seat ${isOccupied ? 'occupied' : isSelected ? 'selected' : ''}`}
                          onClick={() => !isOccupied && toggleSeat(seatId)}
                        >
                          {String.fromCharCode(65 + row)}{col + 1}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="addons-section">
            <h4>Add-ons</h4>
            <label><input type="checkbox" /> Popcorn Combo - ₹150</label>
            <label><input type="checkbox" /> 3D Glasses - ₹50</label>
          </div>

          <div className="summary">
            <p><strong>Seats:</strong> {selectedSeats.join(', ')}</p>
            <p><strong>Total:</strong> ₹{selectedSeats.length * 120}</p>

            <Link
              to="/favorites"
              state={{
                movie: selectedMovie,
                theater: 'PVR Cinemas',
                seats: selectedSeats,
                date: '2025-07-29',
                time: '7:30 PM',
                user: 'logesh@gmail.com',
                amount: selectedSeats.length * 120
              }}
              className="pay-btn"
            >
              Pay Now
            </Link>

            <button
              className="pay-btn"
              style={{ backgroundColor: '#2980b9', marginLeft: '1rem' }}
              onClick={handleDownload}
            >
              Download Ticket
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SeatBooking;
