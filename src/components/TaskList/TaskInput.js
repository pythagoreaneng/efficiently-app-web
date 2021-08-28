import React, { useEffect, useRef, useContext } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { TaskContext } from "../../contexts/TaskContext";

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
  margin: 0 1rem 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

// input component to add tasks
const TaskInput = ({ onSubmit }) => {
  const { handleSubmit, input, setInput, theme } = useContext(TaskContext);
  const { history } = useAuth();
  const inputRef = useRef();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleTaskInputClick = () => {
    history.push("/inbox");
  };

  const inInputKeyDown = (e) => {
    console.log(e);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []); // eslint-disable-line

  return (
    <>
      <AddTaskContainer onSubmit={handleSubmit}>
        <WriteTaskInput
          placeholder="Start from here"
          value={input}
          onKeyDown={inInputKeyDown}
          onChange={handleChange}
          onClick={handleTaskInputClick}
          ref={inputRef}
        />
        <AddTaskButton onClick={handleSubmit}>
          <RiAddCircleFill size={50} color={theme} />
        </AddTaskButton>
      </AddTaskContainer>
    </>
  );
};

export default TaskInput;
