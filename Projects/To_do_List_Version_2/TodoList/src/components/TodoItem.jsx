function TodoItem1_1({todoName, todoDate}){
  return <div>
    <div class="container">
    <div class="row Ak-row">
          <div class="col-6">
             {todoName}
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
export default TodoItem1_1;