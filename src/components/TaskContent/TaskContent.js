import React from "react";
import { TaskInputContainer } from "../../pages/styles";
import { TaskListContainer } from "../../pages/styles";
import { TaskList } from "../TaskList";
import { TaskInput } from "../TaskInput";
import TaskListContextProvider from "../../contexts/TaskListContext";

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
