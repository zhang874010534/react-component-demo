import classNames from "classnames";
import React, {createContext, useState} from "react";
import {MenuItemProps} from "./menuItem";
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
  onSelect?: SelectCallback,
  mode?: MenuMode
}
export const MenuContext = createContext<IMenuContext>({
  index: 0
})
const Menu: React.FC<MenuProps> = (props) => {
  const {className, mode, style, children, defaultIndex , onSelect} = props
  const [currentActive, setCurrentActive] = useState(defaultIndex)
  const classes = classNames('ce-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal' : mode !== 'vertical'
  })
  const handleClick = (index: number) => {
    setCurrentActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive: 0,
    onSelect: handleClick,
    mode: mode
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      console.log(child)
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const {name} = childElement.type
      if(name === 'MenuItem' || name === 'SubMenu') {
        return React.cloneElement(childElement, {
          index
        })
      }else {
        console.error('请检查传入的组件')
      }
    })
  }
  return <ul className={classes}>
    <MenuContext.Provider value={passedContext}>
      {renderChildren()}
    </MenuContext.Provider>
  </ul>
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
}

export default Menu
