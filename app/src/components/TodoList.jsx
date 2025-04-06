import TodoItem from "./TodoItem";

export default function TodoList({ todos, removeTodo, toggleTodoComplete }) {
  return (
    <ul>
      {todos.map((todo) => <TodoItem  key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodoComplete={toggleTodoComplete}/>)}
    </ul>
  );
}
