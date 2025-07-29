
// MovieCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ title, genre, rating, image }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/SeatBooking');
  };

  return (
    <div className="movie-card">
      <img src={image} alt={title} className="poster" />
      <div className="movie-details">
        <h3 className="title">{title}</h3>
        <p className="genre">{genre}</p>
        <p className="rating">⭐ {rating}</p>
        <div className="book-btn-wrapper">
          <button className="book-btn" onClick={handleBooking}>
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
