import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore Name="Srilekha" School="ABC High School" Total={450} Goal={5} />
    </div>
  );
}

export default App;
