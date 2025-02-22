import { useCallback, useState } from 'react'
import './App.css'
import ChildCom from './compnents/ChildCom';

function App() {
  const [count, setCount]=useState(0);
  
  let handleClick=useCallback(()=>{
    setCount(count+1);
  },[count]);

  return (
    <>
      <div>
        <div>
          Count: {count}
        </div>
        <div>
          <button onClick={handleClick}>Increment</button>
        </div>
        <div>
          <ChildCom buttonName="Click me"
          handleClick={handleClick}></ChildCom>
        </div>
      </div>
    </>
  )
}

export default App
