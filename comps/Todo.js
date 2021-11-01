import React, { useState, useEffect } from "react";
import styles from "../styles/Todo.module.css";
import { MdDone, MdDeleteForever } from "react-icons/md";

const Todo = ({ todo, id, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className={styles.list}>
      <div
        className={`${styles.list_item} ${
          todo.completed ? styles.completed : ""
        }`}
      >
        {todo.text}
      </div>
      <button className={styles.btn} onClick={completedHandler}>
        <MdDone />
      </button>
      <button onClick={deleteHandler}>
        <MdDeleteForever />
      </button>
    </div>
  );
};

export default Todo;
