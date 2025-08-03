import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Element variable for buttons
  let button;
  let pageContent;

  if (isLoggedIn) {
    button = <button onClick={() => setIsLoggedIn(false)}>Logout</button>;
    pageContent = <UserPage />;
  } else {
    button = <button onClick={() => setIsLoggedIn(true)}>Login</button>;
    pageContent = <GuestPage />;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎫 Flight Ticket Booking App</h1>
      {button}
      <hr />
      {pageContent}
    </div>
  );
}


function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest</h2>
      <p>Here are some flight listings:</p>
      <ul>
        <li>IndiGo - ₹4500 - Bangalore to Mumbai</li>
        <li>Air India - ₹6700 - Delhi to Chennai</li>
        <li>SpiceJet - ₹5300 - Pune to Hyderabad</li>
      </ul>
      <p><strong>Note:</strong> Please login to book tickets.</p>
    </div>
  );
}


function UserPage() {
  return (
    <div>
      <h2>Welcome Back, User!</h2>
      <p>You can now book your flight:</p>
      <form>
        <label>From: <input type="text" placeholder="Bangalore" /></label><br /><br />
        <label>To: <input type="text" placeholder="Delhi" /></label><br /><br />
        <label>Date: <input type="date" /></label><br /><br />
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

export default App;
