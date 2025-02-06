import { useRef, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let val =useRef(0);
  let btnRef = useRef();
  function handleIncrement(){
    val.current = val.current+1;
    console.log("Value of Val: ", val.current);
    setCount(count+1);
  }
  function changeColor(){
     btnRef.current.style.backgroundColor="red";
  }
  return (
    <div>
      <button ref={btnRef} onClick={handleIncrement}>Button</button>
      <br/>
      <button onClick={changeColor}>Change of 1st Button</button>
      <br/>
      <div>
        Count is: {count}
      </div>
    </div>
  )
}

export default App
