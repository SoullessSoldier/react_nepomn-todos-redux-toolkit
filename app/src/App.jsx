import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/todoSlice";
import "./App.css";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    dispatch(addTodo({text}))
    setText("")
  }

  return (
    <div className="App">
      <TodoForm text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
