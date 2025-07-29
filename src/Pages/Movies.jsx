// Movies.jsx
import React from 'react';
import MovieCard from '../Components/MovieCard';
import './Movies.css';

import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';
import img9 from '../assets/img9.jpeg';
import img10 from '../assets/img10.jpeg';
import img11 from '../assets/img11.jpeg';
import img12 from '../assets/img12.jpeg';
import img13 from '../assets/img13.jpeg';
import img14 from '../assets/img14.jpeg';
import img15 from '../assets/img15.jpeg';

const movies = [
  {
    title: 'Avengers: Endgame',
    genre: 'Action',
    rating: '4.9',
    image: img1,
  },
  {
    title: 'Black Panther: Wakanda Forever',
    genre: 'Action/Adventure',
    rating: '4.7',
    image: img2,
  },
  {
    title: 'John Wick 4',
    genre: 'Action/Thriller',
    rating: '4.8',
    image: img3,
  },
  {
    title: 'The Batman',
    genre: 'Action/Crime',
    rating: '4.6',
    image: img4,
  },
  {
    title: 'Iron Man',
    genre: 'Sci-Fi',
    rating: '4.7',
    image: img5,
  },
  {
    title: 'Doctor Strange',
    genre: 'Fantasy',
    rating: '4.5',
    image: img6,
  },
  {
    title: 'Spider-Man: No Way Home',
    genre: 'Action',
    rating: '4.9',
    image: img7,
  },
  {
    title: 'Guardians of the Galaxy Vol. 2',
    genre: 'Sci-Fi/Comedy',
    rating: '4.8',
    image: img8,
  },
  {
    title: 'Captain America: Civil War',
    genre: 'Action',
    rating: '4.7',
    image: img9,
  },
  {
    title: 'Invalid Image Movie',
    genre: 'Mystery',
    rating: '3.5',
    image: img10,
  },
  {
    title: 'Thor: Ragnarok',
    genre: 'Action/Comedy',
    rating: '4.6',
    image: img11,
  },
  {
    title: 'Shang-Chi',
    genre: 'Fantasy/Martial Arts',
    rating: '4.5',
    image: img12,
  },
  {
    title: 'Deadpool',
    genre: 'Action/Comedy',
    rating: '4.4',
    image: img13,
  },
  {
    title: 'Avengers: Infinity War',
    genre: 'Action',
    rating: '4.8',
    image: img14,
  },
  {
    title: 'Captain Marvel',
    genre: 'Action/Fantasy',
    rating: '4.2',
    image: img15,
  },
];

const Movies = () => {
  return (
    <div className="movie-container">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          genre={movie.genre}
          rating={movie.rating}
          image={movie.image}
        />
      ))}
    </div>
  );
};

export default Movies;
