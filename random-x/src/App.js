import React, { useState } from 'react';
import './App.css';

function App() {
  const [names, setNames] = useState([]);
  const [sublistSize, setSublistSize] = useState(1);
  const [randomSublist, setRandomSublist] = useState([]);

  const handleRandomize = () => {
    const shuffled = [...names].sort(() => 0.5 - Math.random());
    setRandomSublist(shuffled.slice(0, sublistSize));
  };

  const handleRefresh = () => {
    handleRandomize();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Sublist Generator</h1>
      </header>
      <main>
        <div className="input-section">
          <textarea
            onChange={(e) => setNames(e.target.value.split('\n'))}
            placeholder="Enter names, one per line"
          />
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onload = (event) => {
                setNames(event.target.result.split('\n'));
              };
              reader.readAsText(file);
            }}
          />
          <div>
            <input
              type="range"
              min="1"
              max={names.length}
              value={sublistSize}
              onChange={(e) => setSublistSize(Number(e.target.value))}
            />
            <span>{sublistSize}</span>
          </div>
          <button onClick={handleRandomize}>Generate Random Sublist</button>
          <button onClick={handleRefresh}>Refresh</button>
        </div>
        <div className="output-section">
          <h2>Random Sublist</h2>
          <ul>
            {randomSublist.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
