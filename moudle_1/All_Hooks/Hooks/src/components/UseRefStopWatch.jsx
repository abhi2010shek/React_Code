import React, { useReducer, useRef, useState } from 'react'

const UseRefStopWatch = () => {
  const[t, sett]= useState(0)
  const tim = useRef(null);
  let setTimer=()=>{
    tim.current=setInterval(()=>{
      sett(t=>t+1)
    },1000);
  };

  let stopTimer1=()=>{
    clearInterval(tim.current);
    tim.current=null;
  }
  let reset=()=>{
    stopTimer1();
    sett(0);
  }
  return (
    <div>
      <p>Timer is:{t} </p>
      <button onClick={setTimer}>Start</button>
      <br/> <br/>
      <button onClick={stopTimer1}>Stop</button>
      <br/> <br/>
      <button onClick={reset}>Restart</button>
    </div>
  )
}

export default UseRefStopWatch
