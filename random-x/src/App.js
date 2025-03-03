import React, { useState } from 'react';
import './App.css';

function App() {
  const [names, setNames] = useState('');
  const [sublistSize, setSublistSize] = useState(1);
  const [output, setOutput] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setNames(e.target.result);
    };
    reader.readAsText(file);
  };

  const handleClear = () => {
    setNames('');
    setSublistSize(1);
    setOutput([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Sublist Generator</h1>
      </header>
      <main>
        <div className="input-section">
          <textarea
            value={names}
            onChange={(e) => setNames(e.target.value)}
            placeholder="Enter names, one per line"
          />
          <input type="file" onChange={handleFileUpload} />
          <input
            type="range"
            min="1"
            max={names.split('\n').filter(Boolean).length}
            value={sublistSize}
            onChange={(e) => setSublistSize(e.target.value)}
          />
          <button onClick={handleClear}>Clear</button>
        </div>
        <div className="output-section">
          <h2>Random Sublist</h2>
          <pre>{output.join('\n')}</pre>
        </div>
      </main>
    </div>
  );
}

export default App;
