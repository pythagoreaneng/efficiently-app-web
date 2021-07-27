import React, { useState } from "react";
import styled from "styled-components";

const AddTaskContainer = styled.form`
  width: 100%;
  height: auto;
  display: flex;
`;

const WriteTaskContainer = styled.input`
  width: 100%;
  height: 3rem;
  border: 0.1rem solid #efefef;
`;

const TaskButtonContainer = styled.button`
  height: auto;
  width: 2rem;
  margin-left: 1rem;
  border: 0.1rem solid #efefef;
`;

const TaskForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      key: Math.floor(Math.random() * 10000),
      title: input,
    });
    setInput("");
  };

  return (
    <>
      <AddTaskContainer onSubmit={handleSubmit}>
        <WriteTaskContainer
          id="input"
          placeholder="#DoEfficiently"
          onChange={handleChange}
          value={input}
        />
        <TaskButtonContainer onClick={handleSubmit}>+</TaskButtonContainer>
      </AddTaskContainer>
    </>
  );
};

export default TaskForm;
