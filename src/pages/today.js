import React from "react";
import TaskList from "../components/TaskList";

const today = () => {
  return (
    <>
      <TaskList today={today} />
    </>
  );
};

export default today;
