import React from "react";
import { RiCloseFill } from "react-icons/ri";
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
  position: relative;
`;

const RemoveContainer = styled.button`
  position: absolute;
  right: 1rem;
`;

// single task card component
const Task = ({ completed, title, completeTask, id, removeTask }) => {
  return (
    <TaskContainer key={id}>
      <Checkbox type="Checkbox" onClick={() => completeTask(id)} />
      {title}
      <RemoveContainer onClick={() => removeTask(id)}>
        <RiCloseFill />
      </RemoveContainer>
    </TaskContainer>
  );
};

export default Task;
