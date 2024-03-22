import React, { useState } from 'react'
import "../App.css"

const TodoList = (props) => {

  const [newTodo, setNewTodo] = useState("")
  const { todos } = props

  const todoItem = {
    text: newTodo,
    complete: false
  }

  const addTodo = (e) => {
    e.preventDefault()

    if (newTodo.length === 0) {
      return;
    }
    
    props.setTodos([...todos, todoItem])
    setNewTodo("")
  }

  return (
    <form onSubmit={(e) => addTodo(e)}>
      <input type="text"
        className="todo-input-box"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo} />
      <div>
        <button id="add-button"> ADD </button>
      </div>
    </form>
  )
}

export default TodoList;