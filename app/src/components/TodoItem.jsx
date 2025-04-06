export default function TodoItem({ todo, removeTodo, toggleTodoComplete }) {
  return (
    <li>
      <input
        type="checkbox"
        name=""
        id=""
        checked={todo.completed}
        onChange={() => toggleTodoComplete(todo.id)}
      />
      <span>{todo.text}</span>
      <span className="delete" onClick={() => removeTodo(todo.id)}>
        &times;
      </span>
    </li>
  );
}
