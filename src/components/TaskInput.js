import React, { useState, useEffect, useRef } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import styled from "styled-components";

const AddTaskContainer = styled.div`
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

// input component to add tasks
const TaskInput = ({ onSubmit, searchRef, inputRef }) => {
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
  }, []);

  const submitRef = useRef(null);

  const searchKeyDown = (e) => {
    console.log(e);
    if (e.key === "Alt") {
      console.log("focus on search");
      searchRef.current.focus();
    }
  };

  return (
    <>
      <AddTaskContainer onSubmit={handleSubmit}>
        <WriteTaskContainer
          id="input"
          placeholder="#DoEfficiently"
          onChange={handleChange}
          value={input}
          ref={inputRef}
          onKeyDown={searchKeyDown}
        />
        <TaskButtonContainer onClick={handleSubmit} ref={submitRef}>
          <RiAddCircleFill size={35} color={"#44BCFF"} />
        </TaskButtonContainer>
      </AddTaskContainer>
    </>
  );
};

export default TaskInput;
