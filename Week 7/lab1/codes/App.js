import React from 'react';
import './App.css';
import officeImage from './office.jpg'; 

function App() {
  const element = "Office Space";

  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "WeWork", Rent: 75000, Address: "Bangalore" },
    { Name: "Smartworks", Rent: 40000, Address: "Pune" },
    { Name: "Regus", Rent: 62000, Address: "Delhi" }
  ];

  return (
    <div className="App">
      <h1 style={{ color: '#0e4d92', fontFamily: 'Segoe UI' }}>{element}, at Affordable Range</h1>
      <img src={officeImage} width="25%" height="25%" alt="Office Space" style={{ borderRadius: '10px', marginBottom: '20px' }} />

      {officeList.map((item, index) => {
        const rentColor = item.Rent <= 60000 ? 'textRed' : 'textGreen';

        return (
          <div key={index} className="office-block">
            <h2>Name: {item.Name}</h2>
            <h3 className={rentColor}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
