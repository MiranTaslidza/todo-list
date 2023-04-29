function Todos(todos) {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Date</th>
            <th scope="col">Edit</th>
            <th scope="col">Del</th>
          </tr>
        </thead>
        {todos.todos.map((todo) => {
          return (
            <tbody key={todo.id}>
              <tr>
                <th scope="row">{todo.id}</th>
                <td>{todo.task}</td>
                <td>{todo.date}</td>
                <td>Edit</td>
                <td>Del</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Todos;
