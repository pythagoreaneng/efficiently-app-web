import React from "react";

export const TaskListContext = React.createContext(null);

// not in use
export const TaskListContextProvider = ({ children }) => {
  return (
    <TaskListContext.Provider value={{}}>{children}</TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
