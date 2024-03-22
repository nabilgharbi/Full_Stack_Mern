import './App.css';
import { useState } from 'react';
import TodoList from './Components/TodoList';
import UpdateDelete from './Components/UpdateDeleteTodoList';

function App() {

  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <TodoList todos={todos} setTodos={setTodos} />
      <UpdateDelete todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
