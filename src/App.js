import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { useState } from 'react';
import Todos from './component/Todos';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import EditDel from './component/EditDel';
import EditTodo from './component/EditTodo';

function App() {
  const [todos, setTodo] = useState([
    {id:1, task:"prvi task", date:"2023.01.01" },
    {id:2, task:"drugi task", date:"2023.01.02" }
  ])

  const addNewTodo = (text) => {
    const id = todos.length + 1 + Math.random();
    setTodo([...todos, { id: id, task: text, date: new Date().toLocaleDateString('bs-BA', { day: 'numeric', month: 'numeric', year: 'numeric' }) }])
  }

  const delItem = (id) => {
    const copyItem = [...todos];
    const newCopyItem = copyItem.filter(todos=> todos.id !== id);
    setTodo(newCopyItem)
  }

  const editTodo = (editTask)=>{
    //pravim kopiju podataka
     const copy = [...todos]
     //pravim poziciju podataka
     let todoPosition = copy.map(todo => todo.id).indexOf(editTask.id)
     //toj poziciji postavljam izmjene
     copy[todoPosition] = editTask
     //spremam te podatke state-a
     setTodo(copy)
     
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Header addNewTodo={addNewTodo} />
        <Routes>
          <Route path='/' element={<Todos todos={todos} />} />
          <Route path='/edit_del' element={<EditDel todos={todos} delItem={delItem} />} />
          <Route path='/edit/:id' element={<EditTodo todos={todos} editTodo= {editTodo} />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
