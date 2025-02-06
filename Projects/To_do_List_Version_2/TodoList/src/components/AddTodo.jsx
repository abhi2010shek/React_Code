import { useState } from "react";

function AddTodo({onNewItem}){
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const handleNameChange = (event)=>{
    setTodoName(event.target.value);
  };
  const handleDateChange= (event)=>{
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = ()=>{
    onNewItem(todoName,dueDate);
    setDueDate("");
    setTodoName("");
  };
  return <div>
    <div class="container text-center">
        <div class="row">
          <div class="col-6">
             <input type="text" placeholder="Enter ToDo here" value={todoName} onChange={handleNameChange} />
          </div>
          <div class="col-4">
            <input type="date" value={dueDate} onChange={handleDateChange}/>
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-success Ak-button" onClick={handleAddButtonClicked}>Add</button>
          </div>
        </div>
  </div>
  </div>
}
export default AddTodo;