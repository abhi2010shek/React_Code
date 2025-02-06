import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import todoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
function App() {
  const initialtodoItems = [{
    name: 'Buy Milk',
    dueDate: '4/4/4'
  },
{
  name: 'Buy Milk',
  dueDate: '4/4/4'
}];
  const[todoItems, setTodoItems] = useState(initialtodoItems);
  const handleNewItem = (itemName, itemDueDate)=>{
    console.log(`new Added: ${itemName} Date is: ${itemDueDate}`);
    const newTodoItems = [...todoItems, {name:itemName, dueDate: itemDueDate}];
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo onNewItem={handleNewItem} />
      <todoItems todoItems={todoItems}></todoItems>
    </center>
  );
}

export default App;
