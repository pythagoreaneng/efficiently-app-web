import React, { createContext, useContext, useState } from "react";
import test_tasks_2 from "../pages/data/test_tasks_2";

export const TasksContext = React.createContext(null);

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(test_tasks_2);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
