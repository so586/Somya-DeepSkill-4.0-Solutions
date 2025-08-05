import React, { useState } from 'react';

function FlightBookingApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState('');
  const [passengerName, setPassengerName] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setBookingConfirmed(false);
    setSelectedFlight('');
    setPassengerName('');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setBookingConfirmed(false);
    setSelectedFlight('');
    setPassengerName('');
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (selectedFlight && passengerName) {
      setBookingConfirmed(true);
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Flight Ticket Booking App</h1>

      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      <hr />

      {isLoggedIn ? (
        <div>
          <h2>Welcome User!</h2>
          <p>You are now logged in and can book tickets.</p>

          {!bookingConfirmed ? (
            <form onSubmit={handleBookingSubmit}>
              <div>
                <label>
                  Name:&nbsp;
                  <input
                    type="text"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                  />
                </label>
              </div>

              <div style={{ marginTop: '10px' }}>
                <label>
                  Select Flight:&nbsp;
                  <select
                    value={selectedFlight}
                    onChange={(e) => setSelectedFlight(e.target.value)}
                  >
                    <option value="">--Choose Flight--</option>
                    <option value="AI101">AI101 - Delhi to Mumbai</option>
                    <option value="AI102">AI102 - Mumbai to Bengaluru</option>
                    <option value="AI103">AI103 - Hyderabad to Chennai</option>
                  </select>
                </label>
              </div>

              <button type="submit" style={{ marginTop: '10px' }}>
                Confirm Booking
              </button>
            </form>
          ) : (
            <div style={{ marginTop: '15px' }}>
              <h4>Booking Confirmed!</h4>
              <p>
                {passengerName}, your ticket for flight <strong>{selectedFlight}</strong> is booked.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2>Welcome Guest!</h2>
          <p>Browse available flight details below:</p>
          <ul>
            <li>Flight AI101 - Delhi to Mumbai</li>
            <li>Flight AI102 - Mumbai to Bengaluru</li>
            <li>Flight AI103 - Hyderabad to Chennai</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default FlightBookingApp;
