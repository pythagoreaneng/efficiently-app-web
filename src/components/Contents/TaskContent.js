import React from "react";
import { TaskInputContainer, TaskListContainer } from "./styles";
import { TaskList, TaskInput } from "../TaskList";
import { TaskListContextProvider } from "../../contexts/TaskListContext";

const TaskContent = () => {
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

export default TaskContent;
