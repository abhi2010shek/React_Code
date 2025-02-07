import { useRef, useState } from 'react'
import class_A from './components/class_A';
import './App.css'
import UseStateHook from './components/UseStateHook';
import UseRefHook from './components/UseRefHook';
import UseRef_dom from './components/UseRef_dom';
import UseRefStopWatch from './components/UseRefStopWatch';

function App() {
  const [data, setData]=useState(true);
  return (
    <>
    <UseRefStopWatch data={data} setData={setData}/>
    </>
  )
}

export default App
