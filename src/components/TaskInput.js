import React, { useState, useEffect, useRef } from "react";
import { RiAddCircleFill } from "react-icons/ri";
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
  width: 3rem;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskInput = ({ onSubmit }) => {
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

  useEffect(() => {
    inputRef.current.focus();
  });

  const inputRef = useRef(null);
  const submitRef = useRef(null);

  return (
    <>
      <AddTaskContainer onSubmit={handleSubmit}>
        <WriteTaskContainer
          id="input"
          placeholder="#DoEfficiently"
          onChange={handleChange}
          value={input}
          ref={inputRef}
        />
        <TaskButtonContainer onClick={handleSubmit} ref={submitRef}>
          <RiAddCircleFill size={35} color={"#44BCFF"} />
        </TaskButtonContainer>
      </AddTaskContainer>
    </>
  );
};

export default TaskInput;
