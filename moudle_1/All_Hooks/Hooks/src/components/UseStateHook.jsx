import React from 'react'

const UseStateHook = ({data, setData}) => {
  const handle=()=>{
    setData(data+1);
  }
  return (
    <div>
      <p>Count is: {data}</p>
      <button onClick={handle}>Click</button>
    </div>
  )
}

export default UseStateHook
