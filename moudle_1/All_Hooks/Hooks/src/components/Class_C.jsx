import { useContext } from "react"
import { userCon } from "../App";
//import React from 'react'
const Class_C = () => {
  const n = useContext(userCon);
  return (
    <div>
      <div>{n.data}</div>
    </div>
  )
}

export default Class_C
