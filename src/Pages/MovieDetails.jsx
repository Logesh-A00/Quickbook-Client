import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dummyShowsData } from '../assets/assets';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = dummyShowsData.find((item) => item._id === id);
    setMovie(selectedMovie);
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail-container">
      <div className="poster-wrapper">
        <img src={movie.poster_path} alt={movie.title} className="movie-poster" />
      </div>

      <div className="movie-info">
        <span className="movie-language">ENGLISH</span>
        <h1 className="movie-title">
          {movie.title.split(" ").slice(0, 2).join(" ")}<br />
          {movie.title.split(" ").slice(2).join(" ")}
        </h1>

        <div className="movie-rating">
          <span className="rating-star">★</span>
          <span className="rating-text">{movie.vote_average} IMDb Rating</span>
        </div>

        <p className="movie-description">
          A thrilling {movie.genres.map(g => g.name).join(', ')} film releasing on {movie.release_date}.
          Runtime: {movie.runtime} minutes.
        </p>

        <p className="meta">
          {movie.runtime}m • {movie.genres.map(g => g.name).join(" | ")} • {movie.release_date}
        </p>

        <div className="movie-buttons">
          <button className="btn trailer">▶ Watch Trailer</button>
          <button className="btn tickets">🎟 Buy Tickets</button>
          <button className="btn favorite">♡</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
