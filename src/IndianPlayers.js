import React from 'react';

const IndianPlayers = () => {
  const oddPlayers = ['Virat', 'Rahul', 'Pant', 'Jadeja', 'Bumrah'];
  const evenPlayers = ['Rohit', 'Shreyas', 'Ashwin', 'Shami', 'Siraj'];

 
  const [odd1, odd2, ...restOdd] = oddPlayers;
  const [even1, even2, ...restEven] = evenPlayers;

  const T20players = ['Rohit', 'Virat', 'Gill'];
  const RanjiTrophy = ['Rahul', 'Pant', 'Jadeja'];

 
  const allPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players:</h2>
      <ul>
        {oddPlayers.map((name, i) => <li key={i}>{name}</li>)}
      </ul>

      <h2>Even Team Players:</h2>
      <ul>
        {evenPlayers.map((name, i) => <li key={i}>{name}</li>)}
      </ul>

      <h2>First Two Odd Players (using Destructuring):</h2>
      <p>{odd1}, {odd2}</p>

      <h2>First Two Even Players (using Destructuring):</h2>
      <p>{even1}, {even2}</p>

      <h2>Merged T20 and Ranji Trophy Players:</h2>
      <ul>
        {allPlayers.map((name, i) => <li key={i}>{name}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
