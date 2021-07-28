import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import styled from "styled-components";

const Checkbox = styled.input`
  margin: 1rem;
`;

const TaskContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0.1rem solid #f1f1f1;
  border-radius: 0.5rem;
  background-color: #efefef;
  margin: 1.5rem 3rem;
  padding: 0.1rem;
`;

// single task card component
const Task = ({ completed, title, completeTask, tempKey, removeTask }) => {
  return (
    <TaskContainer key={tempKey}>
      <Checkbox
        key={Math.random()}
        type="Checkbox"
        onClick={() => completeTask(tempKey)}
      />
      {title}
      <button key={Math.random()} onClick={() => removeTask(tempKey)}>
        <RiDeleteBin2Fill key={Math.random()} />
      </button>
    </TaskContainer>
  );
};

export default Task;
