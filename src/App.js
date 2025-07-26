import React from 'react';
import './App.css';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div className="App">
      <h2>My Academy Dashboard</h2>
      <CohortDetails name="React Bootcamp" trainer="John Doe" status="ongoing" />
      <CohortDetails name="Java Spring" trainer="Jane Smith" status="completed" />
    </div>
  );
}

export default App;
