import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isAdmin = user?.primaryEmailAddress?.emailAddress === 'admin@example.com';

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">
          <span className="q">Q</span>uickShow
        </h2>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/movies" onClick={closeMenu}>Movies</Link>
        <Link to="/theaters" onClick={closeMenu}>Theaters</Link>
        <Link to="/seatbooking" onClick={closeMenu}>SeatBooking</Link>
        <Link to="/favorites" onClick={closeMenu}>Pay Now</Link>

        {/* Admin link styled like normal links */}
       
          <Link to="/admin" onClick={closeMenu}>Admin</Link>
        
      </div>

      <div className="navbar-right">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />

        {!user ? (
          <button className="login-btn" onClick={openSignIn}>
            Login
          </button>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}

        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="menu-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
