import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div className="App container">
      <header className="App-header">
        <h1>Random Sublist Generator</h1>
      </header>
      <main>
        <div className="input-section">
          <textarea
            className="form-control"
            onChange={(e) => setNames(e.target.value.split('\n'))}
            placeholder="Enter names, one per line"
          />
          <input
            className="form-control"
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
          <div className="my-3">
            <input
              className="form-range"
              type="range"
              min="1"
              max={names.length}
              value={sublistSize}
              onChange={(e) => setSublistSize(Number(e.target.value))}
            />
            <span>{sublistSize}</span>
          </div>
          <button className="btn btn-primary me-2" onClick={handleRandomize}>Generate Random Sublist</button>
          <button className="btn btn-secondary" onClick={handleRefresh}>Refresh</button>
        </div>
        <div className="output-section">
          <h2>Random Sublist</h2>
          <ul className="list-group">
            {randomSublist.map((name, index) => (
              <li className="list-group-item" key={index}>{name}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
