import React, {useEffect, useRef, useState} from "react";

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const likeRef = useRef(0)
  useEffect(() => {
    document.title = `点击了${like}次`
  }, [like])

  function handleClick() {
    setTimeout(() => {
      console.log(likeRef.current)
    }, 3000)
  }

  return (
    <div>
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
