import React, { useState, FormEvent, ChangeEvent, useContext } from "react";
import { AppContext } from "../AppContext";

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState("");

  const { addTodo } = useContext(AppContext);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(title);
  };

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={onFormSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        style={{ flex: "10", padding: "5px" }}
        placeholder="Add Todo ..."
        value={title}
        onChange={onTitleChange}
        autoComplete="off"
      />
      <input type="submit" value="submit" style={{ flex: "1" }} />
    </form>
  );
};

export default AddTodo;
