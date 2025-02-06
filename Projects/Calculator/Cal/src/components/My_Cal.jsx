import React from 'react'
import css from "./My_Cal.module.css";
import { useState } from 'react';
const My_Cal = () => {
  const [data, setData]= useState("");
  const getValue = (event)=>{
    setData(data.concat(event.target.value));
  }
  const getSol=()=>{
    setData(eval(data).toString());
  }
  const getBac=()=>{
    setData(data.slice(0,-1));
  }
  const getAc=()=>{
    setData("");
  }
  return (
    <>
      <div className={css.container}>
        <div>
          <input placeholder='0' value={data}/>
        </div>
        <br></br>
        <div>
          <button className='button_container' onClick={getValue} value="(">(</button>
          <button className='button_container' onClick={getValue} value=")">)</button>
          <button className='button_container' onClick={getValue} value="%">%</button>
          <button className='button_container' onClick={getAc} value="AC">AC</button>

          <button className='button_container' onClick={getValue} value="7">7</button>
          <button className='button_container' onClick={getValue} value="8">8</button>
          <button className='button_container' onClick={getValue} value="9">9</button>
          <button className='button_container' onClick={getValue} value="*">*</button>

          <button className='button_container' onClick={getValue} value="4">4</button>
          <button className='button_container' onClick={getValue} value="5">5</button>
          <button className='button_container' onClick={getValue} value="6">6</button>
          <button className='button_container' onClick={getValue} value="-">-</button>

          <button className='button_container' onClick={getValue} value="1">1</button>
          <button onClick={getValue} value="2">2</button>
          <button className='button_container' onClick={getValue} value="3">3</button>
          <button className='button_container' onClick={getValue} value="+">+</button>

          <button className='button_container' onClick={getValue} value="0">0</button>
          <button className='button_container' onClick={getBac} value="Back">Back</button>
          <button className='button_container' onClick={getSol} value="=">=</button>
          <button className='button_container' onClick={getValue} value="/">/</button>
        </div>
      </div>
    </>
  )
}

export default My_Cal
