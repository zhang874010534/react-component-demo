import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button, {ButtonSize, ButtonType} from './components/Button/button'
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
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
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem>
          cool link2
        </MenuItem>
        <SubMenu title='dropdown'>
          <MenuItem>
            dropdown1
          </MenuItem>
          <MenuItem>
            dropdown2
          </MenuItem>
        </SubMenu>
        <MenuItem>
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
