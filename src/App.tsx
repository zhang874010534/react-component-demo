import React from 'react';
import logo from './logo.svg';
import './App.css';

const theme = {
  light: {
    color: 'red'
  }
}

export const ThemeContext = React.createContext(theme.light)
function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <h2>hello</h2>
      <h3>hello</h3>
      <code>javascript:11</code>
      <ThemeContext.Provider value={theme.light}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
