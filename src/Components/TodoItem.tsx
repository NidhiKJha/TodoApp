import React, { useContext } from "react";
import TODO from "./types";
import { AppContext } from "./Global/AppContext";

interface TodoItemProps {
  todo: TODO;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo: { completed, id, title }
}) => {
  const { markComplete, delTodo } = useContext(AppContext);

  return (
    <div>
      <p>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => markComplete(id)}
        />
        {""}
        {title}
        <button onClick={() => delTodo(id)}>x</button>
      </p>
    </div>
  );
};

export default TodoItem;
