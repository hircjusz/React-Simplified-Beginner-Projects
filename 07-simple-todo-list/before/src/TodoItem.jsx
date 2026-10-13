export function TodoItem({ id, name, completed, toggleTodo, deleteTodo }) {
  return (
    <li class="list-item" key={id}>
      <label class="list-item-label">
        <input type="checkbox" data-list-item-checkbox checked={completed} onChange={(e) => toggleTodo(id, e.target.checked)} />
        <span data-list-item-text>{name}</span>
      </label>
      <button data-button-delete onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  )
}