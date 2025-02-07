import React from 'react'

const class_A = ({handle_button, handle_function}) => {
  const fun=()=>{
    if(handle_button==0){
      handle_function(handle_button+1);
    }else{
      handle_function(handle_button+1);
    }
  }
  return (
    <div>
      <button onClick={fun}>Click</button>
    </div>
  )
}

export default class_A
