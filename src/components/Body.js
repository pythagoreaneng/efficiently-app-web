import React from "react";
import { SectionTasksContainer, TaskInputContainer } from "../pages/styles";
import SectionTasks from "./SectionTasks";
import TaskInput from "./TaskInput";

const Body = () => {
  return (
    <>
      <SectionTasksContainer>
        <SectionTasks />
      </SectionTasksContainer>
      <TaskInputContainer>
        <TaskInput />
      </TaskInputContainer>
    </>
  );
};

export default Body;
