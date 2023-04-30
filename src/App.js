import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { useState } from 'react';
import Todos from './component/Todos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditDel from './component/EditDel';

function App() {
  const [todos, setTodo] = useState([])

  const addNewTodo = (text) => {
    const id = todos.length + 1 + Math.random();
    setTodo([...todos, { id: id, task: text, date: new Date().toLocaleDateString('bs-BA', { day: 'numeric', month: 'numeric', year: 'numeric' }) }])
  }

  const delItem = (id) => {
    const copyItem = [...todos];
    const newCopyItem = copyItem.filter(todos=> todos.id !== id);
    setTodo(newCopyItem)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header addNewTodo={addNewTodo} />
        <Routes>
          <Route path='/' element={<Todos todos={todos} />} />
          <Route path='/edit_del' element={<EditDel todos={todos} delItem={delItem} />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
