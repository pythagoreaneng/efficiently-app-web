import React from "react";
import { TaskListContainer, TaskInputContainer } from "../pages/styles";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

const Body = () => {
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

export default Body;
