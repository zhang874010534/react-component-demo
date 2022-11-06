import classNames from "classnames";
import {createContext, useState} from "react";
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: number) => void;
export interface MenuProps extends React.PropsWithChildren {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback
}

interface IMenuContext {
  index: number,
  onSelect?: SelectCallback
}
export const MenuContext = createContext<IMenuContext>({
  index: 0
})
const Menu: React.FC<MenuProps> = (props) => {
  const {className, mode, style, children, defaultIndex , onSelect} = props
  const [currentActive, setCurrentActive] = useState(defaultIndex)
  const classes = classNames('ce-menu', className, {
    'menu-vertical': mode === 'horizontal'
  })
  const handleClick = (index: number) => {
    setCurrentActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive: 0,
    onSelect: handleClick
  }
  return <ul className={classes}>
    <MenuContext.Provider value={passedContext}>
      {children}
    </MenuContext.Provider>
  </ul>
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
}

export default Menu
