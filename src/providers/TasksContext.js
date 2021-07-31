import React, { createContext, useContext } from "react";

const TaskContext = React.createContext(null);

const TasksContextProvider = ({ children }) => {
  const msg = "Hi";
  return <TaskContext.Provider>{children}</TaskContext.Provider>;
};

export default TasksContextProvider;
