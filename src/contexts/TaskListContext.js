import React, { useState, useEffect, useRef } from "react";

export const TaskListContext = React.createContext(null);

export const TaskListContextProvider = ({ children }) => {
  return (
    <TaskListContext.Provider value={{}}>{children}</TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
