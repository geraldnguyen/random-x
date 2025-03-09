import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [names, setNames] = useState([]);
  const [checkedNames, setCheckedNames] = useState({});
  const [sublistSize, setSublistSize] = useState(1);
  const [randomSublist, setRandomSublist] = useState([]);

  const handleRandomize = () => {
    const filteredNames = names.filter(name => checkedNames[name]);
    const shuffled = [...filteredNames].sort(() => 0.5 - Math.random());
    setRandomSublist(shuffled.slice(0, sublistSize));
  };

  const handleNameChange = (e) => {
    const newNames = e.target.value.split('\n');
    setNames(newNames);
    const newCheckedNames = {};
    newNames.forEach(name => {
      newCheckedNames[name] = true;
    });
    setCheckedNames(newCheckedNames);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;
      const newNames = fileContent.split('\n');
      setNames(newNames);
      const newCheckedNames = {};
      newNames.forEach(name => {
        newCheckedNames[name] = true;
      });
      setCheckedNames(newCheckedNames);
    };
    reader.readAsText(file);
  };

  const handleCheckboxChange = (name) => {
    setCheckedNames(prevState => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  };

  const checkedNamesCount = names.filter(name => checkedNames[name]).length;

  return (
    <div className="App container">
      <header className="App-header">
        <h1>Random Sublist Generator</h1>
      </header>
      <main>
        <div className="input-section">
          <textarea
            className="form-control"
            value={names.join('\n')}
            onChange={handleNameChange}
            placeholder="Enter names, one per line"
          />
          <input
            className="form-control"
            type="file"
            onChange={handleFileChange}
          />
        </div>
        <div className="output-section">
          <h2>Names</h2>
          <ul className="list-group">
            {names.map((name, index) => (
              <li className="list-group-item" key={index}>
                <input
                  type="checkbox"
                  checked={checkedNames[name]}
                  onChange={() => handleCheckboxChange(name)}
                />
                {name}
              </li>
            ))}
          </ul>
          <div className="my-3">
            <input
              className="form-range"
              type="range"
              min="1"
              max={checkedNamesCount}
              value={sublistSize}
              onChange={(e) => setSublistSize(Number(e.target.value))}
            />
            <span>{sublistSize}</span>
          </div>
          <button className="btn btn-primary me-2" onClick={handleRandomize}>Generate Random Sublist</button>
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
