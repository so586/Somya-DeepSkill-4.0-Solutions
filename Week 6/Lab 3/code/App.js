import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <h1>Student Score Calculator</h1>
      <CalculateScore
        name="Somya Singh"
        school="KIIT University"
        total={470}
        goal={6}
      />
    </div>
  );
}
export default App;