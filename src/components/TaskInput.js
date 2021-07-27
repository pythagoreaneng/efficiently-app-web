import React, { useState, useEffect, useRef } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import styled from "styled-components";

const AddTaskContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border-radius: 1rem;
`;

const WriteTaskInput = styled.input`
  width: 100%;
  height: 3rem;
  border: 0.1rem solid #efefef;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  margin: 0 1rem 0 1rem;
  text-align: center;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0.5rem #46bcff;
  }
`;

const AddTaskButton = styled.button`
  height: auto;
  width: 3rem;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

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
      completed: false,
      star: false,
      created_date: today,
      due_date: "",
    });
    setInput("");
  };

  // focus refs
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
        <WriteTaskInput
          id="input"
          placeholder="Start from here"
          onChange={handleChange}
          value={input}
          ref={inputRef}
          onKeyDown={searchKeyDown}
        />
        <AddTaskButton onClick={handleSubmit} ref={submitRef}>
          <RiAddCircleFill size={50} color={"#44BCFF"} />
        </AddTaskButton>
      </AddTaskContainer>
    </>
  );
};

export default TaskInput;
