import "./App.css";
import React, { useState, useEffect } from "react";
import { Todo } from "./Todo";
import { db } from "./firebase";
import firebase from "firebase/app";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data().todo));
        setTodos(
          snapshot.docs.map((doc) => {
            return { id: doc.id, todo: doc.data().todo };
          })
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="container">
      <header>
        <h1>Firebase Todos</h1>
      </header>
      <section>
        <article className="todos">
          <ul>
            {todos.map((todo_item) => {
              return <Todo key={todo_item.id} todo_prop={todo_item} />;
            })}
          </ul>
        </article>
        <article className="addTodo">
          <form>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
            ></input>
            <button
              disabled={!input}
              type="submit"
              onClick={(event) => addTodo(event)}
            >
              Add Todo
            </button>
          </form>
        </article>
      </section>
    </div>
  );
}

export default App;
