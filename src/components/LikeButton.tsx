import React, {useContext, useEffect, useRef, useState} from "react";
import {ThemeContext} from "../App";

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const domRef = useRef<HTMLInputElement>(null)
  const theme = useContext(ThemeContext)
  console.log(theme)
  useEffect(() => {
    document.title = `点击了${like}次`
  }, [like])

  function handleClick() {
    setTimeout(() => {
      console.log(likeRef.current)
    }, 3000)
  }
  useEffect(() => {
    if(didMountRef.current) {
      console.log('update')
    }else {
      didMountRef.current = true
    }
  })
  useEffect(() => {
    if( domRef.current) {
      domRef.current.focus()
    }
  })
  return (
    <div>
      <input type="text" ref={domRef}/>
      <button onClick={() => {
        setLike(like + 1);
        likeRef.current = like + 1
      }}>like</button>
      {like}
      <button onClick={handleClick}>alert</button>
    </div>
  )
}
export default LikeButton
