import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Movies from './Pages/Movies';
import MoviesDetails from './Pages/MovieDetails';
import SeatLayout from './Pages/SeatLayout';
import BookTicket from './Pages/BookTicket';
import Favorite from './Pages/Favorite';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer';
import Theaters from './Pages/Theaters'
import SeatBooking from './Pages/SeatBooking';
import Success from './Pages/Success';
import Admin from './Pages/Admin';
import BookingForm from './Pages/BookingForm'


const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin');

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/mybookings" element={<BookTicket />} />
        <Route path="/favorites" element={<Favorite />} />
         <Route path="/theaters" element={<Theaters />} />
          <Route path="/seatbooking" element={< SeatBooking/>} />
          <Route path="/success" element={<Success />} />
          <Route path="/bookingform" element={<BookingForm />} />
           <Route path="/admin" element={<Admin />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
