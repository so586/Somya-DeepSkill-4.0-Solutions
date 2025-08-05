import React, { useState } from 'react';
import './App.css';
import officeImage from './office.jpg';

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState('');

  const handleClick = () => alert('I was clicked');
  const sayWelcome = () => alert('Welcome');
  const handleSubmit = (e) => {
    e.preventDefault();
    setConverted('€' + (parseFloat(amount) / 90).toFixed(2));
  };

  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "WeWork", Rent: 75000, Address: "Bangalore" },
    { Name: "Smartworks", Rent: 40000, Address: "Pune" },
    { Name: "Regus", Rent: 62000, Address: "Delhi" }
  ];

  return (
    <div className="App">
      <h1 className="blue-heading">Office Space, at Affordable Range</h1>
      <img src={officeImage} width="25%" height="25%" alt="Office" className="image" />

      <div className="counter">
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={sayWelcome}>Say welcome</button>
        <button onClick={handleClick}>Click on me</button>
      </div>

      <h2 className="green-heading">Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div>
          <label>Currency: </label>
          <textarea value={converted} readOnly></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      {officeList.map((item, index) => {
        const rentColor = item.Rent <= 60000 ? 'textRed' : 'textGreen';

        return (
          <div key={index} className="office-block">
            <h2 className="textBlue">Name: {item.Name}</h2>
            <h3 className={rentColor}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
