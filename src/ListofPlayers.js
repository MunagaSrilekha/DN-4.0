
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 85 },
    { name: 'Rohit', score: 90 },
    { name: 'Rahul', score: 60 },
    { name: 'Pant', score: 72 },
    { name: 'Shreyas', score: 50 },
    { name: 'Jadeja', score: 95 },
    { name: 'Ashwin', score: 40 },
    { name: 'Bumrah', score: 55 },
    { name: 'Shami', score: 68 },
    { name: 'Siraj', score: 30 },
    { name: 'Gill', score: 100 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70:</h3>
      <ul>
        {lowScorers.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
