import React, { useRef } from 'react'

const UseRef_dom = ({data, setData}) => {
  const use1=useRef(null)
  const func1=()=>{
    setData(use1.current.style.backgroundColor = "red")
  }
  return (
    <div>
      <button ref={use1}>Button1</button>
      <br/> <br/>
      <button onClick={func1}>Button2</button>
    </div>
  )
}

export default UseRef_dom
