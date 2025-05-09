import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './views/Home';
import DriverSelection from './views/DriverSelection';
import Profile from './views/Profile';
import Payment from './views/Payment';

function App() {
  return (
    <div className="min-h-screen bg-primary-light">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drivers" element={<DriverSelection />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;