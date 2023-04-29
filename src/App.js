import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { useState } from 'react';
import Todos from './component/Todos';

function App() {
  const [todos, setTodo] = useState([

  ])
  
  const addNewTodo = (text)=>{ 
    const id = todos.length +1;
    setTodo([...todos, {id: id, task:text, date: new Date().toLocaleDateString('bs-BA', { day: 'numeric', month: 'numeric', year: 'numeric' })}])
  }

  return (
    <div className="App">
      <Header addNewTodo={addNewTodo}/>
      <Todos todos={todos}/>
      <Footer/>
    </div>
  );
}

export default App;
