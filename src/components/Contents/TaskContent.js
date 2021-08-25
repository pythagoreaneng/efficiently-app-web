import React from "react";
import { TaskList, TaskInput } from "../TaskList";
import { TaskListContextProvider } from "../../contexts/TaskListContext";
import styled from "styled-components";

const TaskListContainer = styled.div`
  height: 85%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskInputContainer = styled.form`
  width: 100%;
  height: 20%
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  padding: 1rem 2rem;
`;

const TaskContent = () => {
  return (
    <>
      <TaskListContextProvider>
        <TaskListContainer>
          <TaskList />
        </TaskListContainer>
      </TaskListContextProvider>

      <TaskInputContainer>
        <TaskInput />
      </TaskInputContainer>
    </>
  );
};

export default TaskContent;
