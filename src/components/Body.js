import React from "react";
import { SectionTasksContainer, TaskInputContainer } from "../pages/styles";
import SectionTasks from "./SectionTasks";
import TaskInput from "./TaskInput";

const Body = () => {
  return (
    <div>
      <SectionTasksContainer>
        <SectionTasks />
      </SectionTasksContainer>
      <TaskInputContainer>
        <TaskInput />
      </TaskInputContainer>
    </div>
  );
};

export default Body;
