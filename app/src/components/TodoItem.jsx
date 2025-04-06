import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "@/store/todoSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const {id, text, completed} = todo;

  return (
    <li>
      <input
        type="checkbox"
        name=""
        id=""
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
      <span>{text}</span>
      <span
        className="delete"
        onClick={() => dispatch(removeTodo({ id }))}
      >
        &times;
      </span>
    </li>
  );
}
