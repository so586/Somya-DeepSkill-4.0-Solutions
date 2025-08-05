import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const average = props.total / props.goal;
  return (
    <div className="score-box">
      <h2>{props.name}</h2>
      <p>School: {props.school}</p>
      <p>Total Score: {props.total}</p>
      <p>Goal: {props.goal}</p>
      <p>Average Score: {average.toFixed(2)}</p>
    </div>
  );
}
export default CalculateScore;