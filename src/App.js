import React from 'react';

function App() {
  // ✅ Object for one office
  const office = {
    name: 'Skyline Business Tower',
    rent: 55000,
    address: 'Block A, MG Road, Bangalore',
    image: 'https://via.placeholder.com/300x200.png?text=Office+Image' // replace with a real URL if you have one
  };

  // ✅ List of office objects
  const officeList = [
    {
      name: 'Skyline Business Tower',
      rent: 55000,
      address: 'Block A, MG Road, Bangalore',
    },
    {
      name: 'GreenTech Plaza',
      rent: 72000,
      address: 'Sector 44, Noida',
    },
    {
      name: 'Urban Hive',
      rent: 64000,
      address: 'Koramangala, Bangalore',
    },
    {
      name: 'Startup Hub',
      rent: 48000,
      address: 'Hitech City, Hyderabad',
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* ✅ JSX Heading */}
      <h1>🏢 Office Space Rental App</h1>

      {/* ✅ JSX Attribute for image */}
      <img src={office.image} alt="Office Space" style={{ width: '300px', height: '200px', marginBottom: '20px' }} />

      {/* ✅ Single Office JSX Object Rendering */}
      <h2>{office.name}</h2>
      <p>Rent: ₹{office.rent}</p>
      <p>Address: {office.address}</p>

      <hr />

      {/* ✅ Looping through the list with conditional inline CSS */}
      <h2>Available Offices:</h2>
      {officeList.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{item.name}</h3>
          <p style={{ color: item.rent > 60000 ? 'green' : 'red' }}>
            Rent: ₹{item.rent}
          </p>
          <p>Address: {item.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
