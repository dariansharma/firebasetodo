import React from "react";
import { db } from "./firebase";

export const Todo = ({ todo_prop }) => {
  const removeTodo = (event) => {
    db.collection("todos").doc(todo_prop.id).delete();
  };

  return (
    <React.Fragment>
      <li>
        <p>{todo_prop.todo}</p>
        <button onClick={removeTodo}>Complete</button>
      </li>
    </React.Fragment>
  );
};
