import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const inputElement =useRef();

  const dispatch = useDispatch();
  
  const handleIncrement =()=>{
    dispatch({type: "INCREMENT"});
  }

  const handleDecrement =()=>{
    dispatch({type: "DECREMENT"});
  }

  const handleAdd =()=>{
    dispatch({type: "ADD", payload: {num: inputElement.current.value,} ,});
    inputElement.current.value="";
  };


  const handleSub =()=>{
    dispatch({type: "SUB", payload: {num: inputElement.current.value,} ,});
    inputElement.current.value="";
  };

  const handlePrivacyToggle =()=>{
    dispatch({type: "PRIVACY_TOGGLE"});
  };

  return (
    <div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary" onClick={handleIncrement}>
          +1
        </button>
        <button type="button" className="btn btn-success" onClick={handleDecrement}>
          -1
        </button>
        <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle}>Privacy Toggle</button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type="text" placeholder="Enter number" className="number-input" ref={inputElement}/>
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          ADD
        </button>
        <button type="button" className="btn btn-danger" onClick={handleSub}>
          SUB
        </button>
      </div>

    </div>
  );
};
export const counterActions = counterSlice.actions;
export default Controls;
