import React from "react";
import { TaskListContainer, TaskInputContainer } from "../pages/styles";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import TaskListContextProvider from "../contexts/TaskListContext";

const Body = () => {
  return (
    <>
      <TaskListContainer>
        <TaskListContextProvider>
          <TaskList />
        </TaskListContextProvider>
      </TaskListContainer>
      <TaskInputContainer>
        <TaskInput />
      </TaskInputContainer>
    </>
  );
};

export default Body;
