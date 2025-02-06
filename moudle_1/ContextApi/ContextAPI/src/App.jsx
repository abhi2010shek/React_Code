import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

 // Step1: Create COntext
 //const UserContext = createContext();
 // Step2: wrap all the child inside a provider
 // Step3: pass value
 // Step3: access all data from all consumers
 const ThemeContext = createContext();
function App() {
  //const [user, setUser] = useState({name:"Abhishek"})
  const [theme, setTheme] = useState('light');
  return (
    /*<>
      <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider>
    *///</> 
    <>
      <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor: theme==='light'?"beige":"black"}}><ChildA/></div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
//export {UserContext};
export {ThemeContext};
