import React, { useState, useEffect } from "react";
import { FaListUl } from "react-icons/fa";
import styles from "../styles/Todo.module.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const DisplayTodo = () => {
  const [active, setActive] = useState(false);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className={styles.todo_list__container}>
      {active && (
        <div className={styles.todo_list}>
          <TodoList setTodos={setTodos} todos={todos} />
          <TodoForm
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
          />
        </div>
      )}

      <div className={styles.todo_icon}>
        <button onClick={() => setActive(!active)}>
          <FaListUl className={styles.list_icon} />
        </button>
      </div>
    </div>
  );
};

export default DisplayTodo;
