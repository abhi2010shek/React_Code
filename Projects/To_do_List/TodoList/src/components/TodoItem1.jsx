function TodoItem(){
  let todoname='Buy Milk';
  let todoDate='4/10/2023';
  return <div>
    <div class="container">
    <div class="row Ak-row">
          <div class="col-6">
             {todoname}
          </div>
          <div class="col-4">
            {todoDate}
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger Ak-button">Delete</button>
          </div>
        </div>
    </div>
  </div>
}
export default TodoItem;