import React from "react";
import TodoItem from "./TodoItem";
import TODO from "./types";

interface TodoListProps {
  todos: TODO[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
