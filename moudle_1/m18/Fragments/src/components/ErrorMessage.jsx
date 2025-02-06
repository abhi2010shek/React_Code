const ErrorMessage = ()=>{
  let foodItems = ["Dal", "Green Vegitables", "Roti", "Salad", "Milk"];
  return <>
   {foodItems.length===0 ? <h3>Hungry</h3> : null}
   </>
};
export default ErrorMessage;