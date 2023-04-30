function Todos(todos) {
  return (
    <div className="row justify-content-center" style={{marginTop:"30px"}}>
      <div className="col-sm-8 text-center">
        <div style={{ width: "100%" }}>
          <table className="table table-striped border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Task</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            {todos.todos.map((todo) => {
              return (
                <tbody key={todo.id}>
                  <tr>
                    <th scope="row">{todo.id}</th>
                    <td>{todo.task}</td>
                    <td>{todo.date}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Todos;
