import React, { useState } from "react";
import "./App.scss";
import TodoList from "./Components/TodoList";
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import uuid from "uuid";
import TODO from "./Components/types";
import ImagePreview from "./Components/ImagePreview";
import { AppContext } from "./Components/Global/AppContext";

const App: React.FC = () => {
  const [todos, setTodos] = useState([] as TODO[]);

  const markComplete = (id: string) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const delTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = (title: string) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <div className="Container">
        <AppContext.Provider
          value={{
            addTodo: addTodo,
            markComplete: markComplete,
            delTodo: delTodo
          }}
        >
          <Header />
          <ImagePreview />
          <AddTodo />
          <TodoList
            todos={todos}
          />
        </AppContext.Provider>
      </div>
    </div>
  );
};

export default App;
