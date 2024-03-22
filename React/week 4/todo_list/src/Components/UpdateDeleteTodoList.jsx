import "../App.css"

const UpdateDelete = (props) => {

  const { todos, setTodos } = props

  const handleDeleteTodo = (index) => {
    const filteredArray = todos.filter((todo, i) => {
      return i !== index
    })
    setTodos(filteredArray)
  }
  const handleTodoList = (e, index) => {
    const updatedTodos = todos.map((todo, idx) => {
      if (index === idx) {
        todo.complete = !todo.complete
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  return (
    <>
      {
        todos.map((list, index) => (
          <ul key={index}>
            <li>
              <label style={{ textDecoration: list.complete ? "line-through" : "" }}>
                {list.text}
                <input type="checkbox"
                  onChange={(e) => handleTodoList(e, index)}
                  checked={list.complete} />
              </label>

              <button onClick={(e) => handleDeleteTodo(index)}
                id="delete-button"> Delete </button>
            </li>
          </ul>
        ))
      }
    </>
  )
}

export default UpdateDelete;