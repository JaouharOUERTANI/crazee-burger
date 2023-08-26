import React from 'react'; // N'oubliez pas d'importer React
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" /> {/* Utilisez reactLogo */}
        <p>SALUT JOUJOU</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Lien vers React
        </a>
      </header>
    </div>
  );
}

export default App;
