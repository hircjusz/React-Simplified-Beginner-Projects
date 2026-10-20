import { useState, useEffect, useReducer } from "react"
import "./styles.css"
import { TodoItem } from "./TodoItem"


const LOCAL_STORAGE_KEY = "todos"
const ACTIONS = {
  ADD: "add",
  UPDATE: "update",
  TOGGLE: "toggle",
  DELETE: "delete",
}

function reducer(todos, {type, payload}) {
  switch (type) {
    case ACTIONS.ADD:
      return [...todos, payload]
    case ACTIONS.TOGGLE:
      return todos.map(todo =>
        todo.id === payload.id ? { ...todo, completed: payload.completed } : todo
      )
    case ACTIONS.DELETE:
      return todos.filter(todo => todo.id !== payload.id)
    case ACTIONS.UPDATE:
      return todos.map(todo =>
        todo.id === payload.id ? { ...todo, ...payload } : todo
      )
    default:
      return todos
  }
}

function App() {
  const [newTodoName, setNewTodoName] = useState("")
  
  
  const [todos, setTodos] = useReducer(reducer, [],   () => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
    return storedTodos ? JSON.parse(storedTodos) : []
  })


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  function addNewTodo() {
    if (newTodoName === "") return

    setTodos({ type: ACTIONS.ADD, payload: { name: newTodoName, completed: false, id: crypto.randomUUID() } })
    setNewTodoName("")
  }

  function toggleTodo(todoId, completed) {
    setTodos({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } })
  }

  function deleteTodo(todoId) {
    setTodos({ type: ACTIONS.DELETE, payload: { id: todoId } })
  }

  return (
    <>
      <ul id="list">
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={e => setNewTodoName(e.target.value)}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  )
}

export default App
