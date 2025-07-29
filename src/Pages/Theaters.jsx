import React, { useEffect, useState } from "react";
import './Theaters.css';
import frozenPoster from "../assets/frozen2.jpeg";
import endgamePoster from "../assets/endgame.jpeg";
import batmanPoster from "../assets/batman.jpeg";
import avatarPoster from "../assets/avatar2.jpeg";
import SeatBooking from './SeatBooking'; // Import the component

const Theaters = () => {
  const defaultMovies = [/* SAME movie + theater data as you already have */];

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(0);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("movieData");
    if (stored) {
      setMovies(JSON.parse(stored));
    } else {
      localStorage.setItem("movieData", JSON.stringify(defaultMovies));
      setMovies(defaultMovies);
    }
  }, []);

  const handleBook = (theaterName) => {
    console.log(`Booking ticket for ${theaterName}`);
    setShowBooking(true); // Show seat selection
  };

  const movie = movies[selectedMovie];

  return (
    <div className="theaters-container">
      {showBooking ? (
        <SeatBooking />
      ) : (
        <>
          {/* Movie Tabs */}
          <div className="movie-tabs">
            {movies.map((m, idx) => (
              <button
                key={m.id}
                className={idx === selectedMovie ? "active" : ""}
                onClick={() => setSelectedMovie(idx)}
              >
                {m.title}
              </button>
            ))}
          </div>

          {/* Movie Info */}
          {movie && (
            <>
              <div className="movie-info">
                <img src={movie.poster} alt={movie.title} className="poster" />
                <div className="movie-details">
                  <h2>{movie.title}</h2>
                  <p>{movie.genre}</p>
                </div>
              </div>

              {/* Theater List */}
              <div className="tabs">
                <span className="active">Today</span>
                <span>Tomorrow</span>
              </div>

              {movie.theaters.map((theater, index) => (
                <div key={index} className="theater-card">
                  <div className="theater-header">
                    <h3>{theater.name}</h3>
                    <button className="like-btn">♡</button>
                  </div>
                  <p className="address">{theater.address}</p>
                  <div className="theater-meta">
                    <span className="distance">{theater.distance}</span>
                    <a
                      href={theater.mapLink}
                      className="directions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📍 Directions
                    </a>
                  </div>
                  <div className="showtimes">
                    {theater.timings.map((time, i) => (
                      <span key={i} className="time">{time}</span>
                    ))}
                  </div>
                  <div className="book-btn-container">
                    <button
                      className="book-btn"
                      onClick={() => handleBook(theater.name)}
                    >
                      Book Ticket
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Theaters;
