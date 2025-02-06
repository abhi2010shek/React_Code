import Item from "./Item";
const FoodItems = () =>{
  let foodItems = ["Dal", "Green Vegitables", "Roti", "Salad", "Milk"];
  return (
    <ul class="list-group">
        {foodItems.map(item=> <Item key={item} foodItem={item}></Item>)}
      </ul>
  )
};
export default FoodItems;