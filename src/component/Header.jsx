import "./Header.css";
import miniLogo from "../mini-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";


function Header({addNewTodo}) {

  const [task, setTask]= useState('')

const addTask= (e)=>{
   e.preventDefault();
   addNewTodo(task)
   setTask('')
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={miniLogo} alt="img logo" />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/edit_del"> Edit/Del </Link>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0" onSubmit={addTask}>
          <input type="text" id="task" className="form-control" value={task} onChange={(e) => setTask(e.target.value)} />
            <input type="submit" value="Add" className="btn btn-outline-success my-2 my-sm-0" />
          </form>


        </div>
      </nav>
    </div>
  );
}

export default Header;
