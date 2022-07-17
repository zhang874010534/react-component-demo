import React from 'react'
interface IHelloProps {
  message?: string
}
const Hello:React.FC<IHelloProps> = (props) => {
  return (
    <div>
      <div>123</div>
      <div>{props.message}</div>
    </div>
  )
}
Hello.defaultProps = {
  message: 'qqq'
}
export default Hello
