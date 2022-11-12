import React, {useContext, FunctionComponentElement} from 'react'
import classNames from "classnames";
import {MenuContext} from "./menu";
import {MenuItemProps} from "./menuItem";

export interface SubMenuProps extends React.PropsWithChildren{
  index?: number;
  title?: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props ) => {
  const {className, index, title,  children} = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
  })

  const renderChild = () => {
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if(childElement.type.name === 'MenuItem') {
        return childElement
      }else {
        console.error('warning')
      }
    })
    return (
      <ul className='ce-subMenu'>
        {childrenComponent}
      </ul>
    )
  }
  return <li key={index} className={classes}>
    <div className='submenu-title'>
      {title}
    </div>
    {renderChild()}
  </li>
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
