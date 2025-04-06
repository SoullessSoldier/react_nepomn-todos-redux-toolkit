import { useState } from "react";
import "./App.css";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <TodoForm text={text} handleInput={setText} handleSubmit={addTodo} />
      <TodoList
      todos={todos}
        removeTodo={removeTodo}
        toggleTodoComplete={toggleTodoComplete}
      />
    </div>
  );
}

export default App;
