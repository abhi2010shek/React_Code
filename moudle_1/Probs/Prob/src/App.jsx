import Button from "./Button"
import Card from "./components/Card"
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return (
      <div>
        {/*<Card name="AKR">
        <h1>HI</h1>
        <p>abhinjvdzkgbjklxnbdfjlnx</p>
        <p>nvndjx;nvjxlnjxkbnjc</p>
        </Card>
        <Card children="Kumar">
          <h1>Abhishek</h1>
        </Card>*/}
      <Button incrementCount={handleClick} text="Click Me">
        <h1>{count}</h1>
      </Button>
      </div>
  
  )
}

export default App
