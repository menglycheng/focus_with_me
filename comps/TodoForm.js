import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

//   <TodoForm setInputText={setInputText} />
const TodoForm = ({ setInputText, todos, setTodos, inputText }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: uuidv4() }]);

    setInputText("");
  };

  return (
    <div>
      <form>
        <input
          name="task"
          value={inputText}
          type="text"
          onChange={handleTaskInputChange}
        />
        <button onClick={handleSubmit} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
