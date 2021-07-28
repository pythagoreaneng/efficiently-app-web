import React from "react";
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
const Task = ({ completed, title, completeTask, key }) => {
  console.log(key);
  console.log(title);
  return (
    <TaskContainer key={key}>
      <Checkbox type="Checkbox" onClick={(key) => completeTask(key)} />
      {title}
    </TaskContainer>
  );
};

export default Task;
