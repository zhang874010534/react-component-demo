import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Mousetracker from "./components/Mousetracker";
import LikeButton from "./components/LikeButton";

const theme = {
  light: {
    color: 'red'
  }
}

export const ThemeContext = React.createContext(theme.light)
function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={theme.light}>
        <LikeButton></LikeButton>
        {/*<Mousetracker></Mousetracker>*/}
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
