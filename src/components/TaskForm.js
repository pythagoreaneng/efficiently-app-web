import React, { useState } from "react";

const TaskForm = ({ addTask, onSubmit }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      key: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="input"
          placeholder="#DoEfficiently"
          onChange={handleChange}
          value={input}
        />
        <button onClick={handleSubmit}>+</button>
      </form>
    </>
  );
};

export default TaskForm;
