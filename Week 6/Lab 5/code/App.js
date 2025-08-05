import React from 'react';
import './App.css';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <CohortDetails name="React Bootcamp" duration="6 weeks" status="ongoing" />
      <CohortDetails name="Java Basics" duration="4 weeks" status="completed" />
      <CohortDetails name="Advanced SQL" duration="1 week" status="completed" />
      <CohortDetails name="Web API" duration="2 weeks" status="completed" />
      <CohortDetails name="Nunit and Moq" duration="2 weeks" status="completed" />
      <CohortDetails name="Cloud Fundamentals" duration="3 weeks" status="ongoing" />
    </div>
  );
}
export default App;