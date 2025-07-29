import React from 'react'
import './Footer.css'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';



const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
<footer className="footer">
  <div className="footer-container">
    <div className="footer-left">
      <h2><span id='red'>Q</span>uickBook</h2>
      <p>Stream your favorite movies anytime, anywhere.</p>
    </div>

    <div className="footer-links">
      <div>
        <h4>Explore</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">My List</a></li>
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <div className="footer-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} QuickBook. All rights reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default Footer
