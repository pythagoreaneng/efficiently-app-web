import React from "react";
import { TaskInputContainer } from "../../pages/styles";
import { TaskListContainer } from "../../pages/styles";
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
