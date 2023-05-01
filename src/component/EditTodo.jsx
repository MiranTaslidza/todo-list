import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditTodo({ todos, editTodo }) {
  const [taskID, setTaskID] = useState({
    id: "",
    task: "",
    date: "",
  });

  const { id } = useParams();
  const actionEdit = todos.find((acc) => acc.id == id);

  useEffect(() => {
    setTaskID({
      id: actionEdit.id,
      task: actionEdit.task,
      date: actionEdit.date,
    });
  }, [actionEdit]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setTaskID((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleEdit = () => {
    editTodo(taskID)
  };

  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <div className="row">
        <div className="col-10 offset-1">
          <h2 className="display-4 m-4">Edit ToDo</h2>
          <div className="row">
            <div className="col-10 offset-1">
              <input
                type="text"
                id="id"
                className="form-control"
                value={taskID.id}
                onChange={handleInputChange}
              />
              <br />
              <input
                type="text"
                id="task"
                className="form-control"
                value={taskID.task}
                onChange={handleInputChange}
              />
              <br />
              <input
                type="text"
                id="date"
                className="form-control"
                value={taskID.date}
                onChange={handleInputChange}
              />
              <br />
              <button
                className="form-control btn btn-info"
                onClick={handleEdit}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTodo;
