import React, {useContext, FunctionComponentElement, useState} from 'react'
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

  const [menuOpen, setOpen] = useState(false)
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  let time:any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(time)
    e.preventDefault()
    time = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => {
      handleMouse(e, true)
    },
    onMouseLeave: (e: React.MouseEvent) => {
      handleMouse(e, false)
    }
  } : {}
  const renderChild = () => {
    const subMenuClasses = classNames('ce-submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if(childElement.type.name === 'MenuItem') {
        return childElement
      }else {
        console.error('warning')
      }
    })
    return (
      <ul className={subMenuClasses}>
        {childrenComponent}
      </ul>
    )
  }
  return <li key={index} className={classes}  {...hoverEvents}>
    <div className='submenu-title' {...clickEvents}>
      {title}
    </div>
    {renderChild()}
  </li>
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
