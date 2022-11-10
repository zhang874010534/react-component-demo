import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button, {ButtonSize, ButtonType} from './components/Button/button'
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
const theme = {
  light: {
    color: 'red'
  }
}

export const ThemeContext = React.createContext(theme.light)
function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0} onSelect={(index) => {alert(index)}}>
        <MenuItem index={0}>
          cool link
        </MenuItem>
        <MenuItem index={1}>
          cool link2
        </MenuItem>
        <MenuItem index={2}>
          cool link3
        </MenuItem>
      </Menu>
      <Button disabled={true} size={ButtonSize.Large} btnType={ButtonType.Link}>按钮</Button>
      <Button autoFocus size={ButtonSize.Large} btnType={ButtonType.Link}>按钮</Button>
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
