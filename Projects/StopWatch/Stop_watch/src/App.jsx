import { useState } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  const [time, setTime] = useState(0);
  let timerRef = useRef(null);
  function startTime(){
    timerRef.current=setInterval(()=>{
      setTime(time=>time+1)
    }, 1000

  );
  }
  function stopTime(){
    clearInterval(timerRef.current);
    timerRef.current=null;
  }
  function resetTime(){
    stopTime();
    setTime(0);
  }
  return (
    <div>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTime}>Start</button>
      <br/><br/>
      <button onClick={stopTime}>Stop</button>
      <br/><br/>
      <button onClick={resetTime}>Reset</button>
    </div>
  )
}

export default App
