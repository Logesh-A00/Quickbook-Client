

import './Home.css';
import logo from '../assets/marvelLogo.svg';
import { FaStar } from 'react-icons/fa';
import Movies from './Movies';
import { Link } from 'react-router-dom';



import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';

import ironheart from '../assets/ironheart.mp4'; // uploaded
import disneyLogo from '../assets/disneyplus.jpeg'; // optional logo

const movies = [
  {
    title: 'Mission: Impossible - The Final ...',
    image: img1,
    genre: '2025 · Action | Adventure · 2h 50m',
    rating: '7.2',
  },
  {
    title: 'How to Train Your Dragon',
    image: img2,
    genre: '2025 · Action | Family · 2h 5m',
    rating: '7.6',
  },
  {
    title: 'K.O.',
    image: img3,
    genre: '2025 · Action | Drama · 1h 24m',
    rating: '7.4',
  },
  {
    title: 'STRAW',
    image: img4,
    genre: '2025 · Thriller | Drama · 1h 45m',
    rating: '8.3',
  },
  {
    title: 'Spiderman',
    image: img5,
    genre: '2025 · Thriller | Drama · 1h 45m',
    rating: '8.3',
  },
];

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <img src={logo} alt="Marvel Studios" className="logo" />
          <h1>Guardians<br />of the Galaxy</h1>
          <div className="tags">
            <span>Action</span> | <span>Adventure</span> | <span>Sci-Fi</span>
            <span> 📅 2018</span>
            <span> ⏱️ 2h 8m</span>
          </div>
          <p>
            In a post-apocalyptic world where cities ride on wheels and consume each other to survive,
            two people meet in London and try to stop a conspiracy.
          </p>
            <Link to="/movies" className="btn">Explore Movies →</Link>
        </div>
      </div>

      {/* Now Showing Section */}
      <section className="now-showing">
        <div className="header">
          <h2>Now Showing</h2>
       <Link to="/movies" className="view-all">View All →</Link>
        </div>

        <div className="movie-grid">
          {movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.image} alt={movie.title} className="poster" />
              <h3>{movie.title}</h3>
              <p className="genre">{movie.genre}</p>
              <div className="card-footer">
                <button className="ticket-btn">Buy Tickets</button>
                <div className="rating">
                  <FaStar className="star" />
                  <span>{movie.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="show-more-container">
        <Link to="/movies" className="show-more-btn">Show more</Link>
        </div>
      </section>

      {/* Trailer Section (At the Bottom) */}
      <section className="trailer-section">
        <div className="main-trailer">
          <video className="trailer-bg" autoPlay loop muted playsInline>
            <source src={ironheart} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="overlay">
            <img src={disneyLogo} alt="Disney+" className="disney-logo" />
            <div className="trailer-info">
              <p className="marvel-label">MARVEL TELEVISION</p>
              <h1>COOLIE</h1>
              <p className="official-text">OFFICIAL TRAILER</p>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-btn"
              >
                ▶ Watch on QuickBook
              </a>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;