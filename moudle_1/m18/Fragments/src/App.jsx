import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  let foodItems = ["Dal", "Green Vegitables", "Roti", "Salad", "Milk"];
  /* this is if else*/
  /*if (foodItems.length===0){
    return <h3>Hungry</h3>
  }*/
  return (
    <>
      <h1>Fragments</h1>
      {/* this is turnary Operator*/}
      <ErrorMessage/>
      <FoodItems></FoodItems>
    </>
  );
}

export default App;
