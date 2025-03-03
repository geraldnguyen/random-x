import React, { useState, useEffect } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';

function App() {
  const [names, setNames] = useState('');
  const [sublistSize, setSublistSize] = useState(1);
  const [output, setOutput] = useState([]);
  const [errors, setErrors] = useState({ names: '', sublistSize: '' });

  const handleFileUpload = (fileContent) => {
    if (names) {
      if (window.confirm('Existing names will be replaced. Do you want to continue?')) {
        setNames(fileContent);
      }
    } else {
      setNames(fileContent);
    }
  };

  const handleClear = () => {
    setNames('');
    setSublistSize(1);
    setOutput([]);
    setErrors({ names: '', sublistSize: '' });
  };

  const validateNames = (names) => {
    const nameList = names.split('\n').filter(Boolean);
    const uniqueNames = new Set(nameList);
    if (nameList.length === 0) {
      return 'Names cannot be empty.';
    }
    if (nameList.length !== uniqueNames.size) {
      return 'Names must be unique.';
    }
    return '';
  };

  const validateSublistSize = (size, names) => {
    const nameList = names.split('\n').filter(Boolean);
    if (size < 1 || size > nameList.length) {
      return `Sublist size must be between 1 and ${nameList.length}.`;
    }
    return '';
  };

  const generateRandomSublist = (names, size) => {
    const nameList = names.split('\n').filter(Boolean);
    const shuffled = nameList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
  };

  useEffect(() => {
    const nameError = validateNames(names);
    const sizeError = validateSublistSize(sublistSize, names);
    setErrors({ names: nameError, sublistSize: sizeError });

    if (!nameError && !sizeError) {
      const randomSublist = generateRandomSublist(names, sublistSize);
      setOutput(randomSublist);
    }
  }, [names, sublistSize]);

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
            className={errors.names ? 'error' : ''}
          />
          {errors.names && <div className="error-message">{errors.names}</div>}
          <FileUpload onFileUpload={handleFileUpload} />
          <input
            type="range"
            min="1"
            max={names.split('\n').filter(Boolean).length}
            value={sublistSize}
            onChange={(e) => setSublistSize(e.target.value)}
            className={errors.sublistSize ? 'error' : ''}
          />
          {errors.sublistSize && <div className="error-message">{errors.sublistSize}</div>}
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
