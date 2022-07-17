import React, {useEffect, useState} from "react";

const Mousetracker: React.FC = () => {
  const [position, setPosition] = useState({
    x: 1,
    y: 2
  })
  useEffect(() => {
    console.log(position)
  },[position, position.x, position.y] )
  return (
    <div onClick={() => {setPosition({
      x: 3,
      y: 4
    })}}>
      {position.x}
      <div></div>
      {position.y}
    </div>
  )
}
export default Mousetracker
