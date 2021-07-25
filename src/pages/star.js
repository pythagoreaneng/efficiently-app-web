import React from "react";
import TaskList from "../components/TaskList";

const star = () => {
  return (
    <>
      <TaskList star={star} />
    </>
  );
};

export default star;
