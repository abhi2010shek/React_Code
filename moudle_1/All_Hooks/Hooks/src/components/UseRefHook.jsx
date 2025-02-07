import React, { useRef } from 'react'

const UseRefHook = ({data, setData}) => {
  const tim = useRef(0);
  const fun=()=>{
    setData(tim.current);
    tim.current=tim.current+1;
  }
  return (
    <div>
      <p>Count is:{data}</p>
      <button onClick={fun}>Clicked</button>
    </div>
  )
}

export default UseRefHook
