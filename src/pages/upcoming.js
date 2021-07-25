import React from "react";
import TaskList from "../components/TaskList";

const upcoming = () => {
  return (
    <>
      <TaskList upcoming={upcoming} />
    </>
  );
};

export default upcoming;
