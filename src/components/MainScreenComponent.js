import React from "react";
import TaskList from "./TaskList";

const MainScreenComponent = ({ tasks, mainScreenName }) => {
  if (mainScreenName === "inbox") {
    return <TaskList tasks={tasks} inbox={true} />;
  } else if (mainScreenName === "star") {
    return <TaskList tasks={tasks} star={true} />;
  } else if (mainScreenName === "upcoming") {
    return <TaskList tasks={tasks} upcoming={true} />;
  } else if (mainScreenName === "archive") {
    return <TaskList tasks={tasks} archive={true} />;
  }
  // default = inbox
  else {
    return <TaskList tasks={tasks} inbox={true} />;
  }
};

export default MainScreenComponent;
