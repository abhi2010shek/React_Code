import {  createContext } from 'react'
import './App.css'
import Class_A from './components/UseContext/Class_A';

const userCon = createContext();

function App() {
  const data = "Abhishek"
  return (
    <>
    <userCon.Provider value={data}><Class_A/></userCon.Provider>
    </>
  )
}

export default App
export {userCon};