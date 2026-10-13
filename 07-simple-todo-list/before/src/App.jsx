import "./styles.css"
import { useState } from "react"
import { TodoItem } from "./TodoItem"
function App() {

  const [newTodoName, setNewTodo] = useState("")
  const [todos, setTodos] = useState([])

  function addNewTodo() {
   if (newTodoName.trim() === "") return

    setTodos(currentTodos => [...currentTodos, { name: newTodoName, completed: false, id: crypto.randomUUID() }])
    setNewTodo("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, completed: completed } : todo
      )
    )
  }

  function deleteTodo(id) {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <ul id="list">

        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              name={todo.name}
              completed={todo.completed}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            /> 
          )
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input type="text" id="todo-input" value={newTodoName} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  )
}

export default App
