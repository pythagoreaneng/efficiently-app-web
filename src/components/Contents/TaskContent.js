import React from "react";
import { TaskList, TaskInput } from "../TaskList";

import styled from "styled-components";

const TaskListContainer = styled.div`
  height: 90%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskInputContainer = styled.form`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskContent = () => {
  return (
    <>
      <TaskListContainer>
        <TaskList />
      </TaskListContainer>
      <TaskInputContainer>
        <TaskInput />
      </TaskInputContainer>
    </>
  );
};

export default TaskContent;
