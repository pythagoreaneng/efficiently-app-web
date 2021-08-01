import React, { createContext, useContext, useState, useEffect } from "react";
import test_tasks_2 from "../pages/data/test_tasks_2";

export const TaskContext = React.createContext(null);

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  // screen name hook,
  const [sideScreenName, setSideScreenName] = useState("");

  // list type (inbox, star, ...) hook, required for filtering tasks in SectionTasks
  const [sectionType, setSectionType] = useState("inbox");

  // save tasks locally
  const saveTasksLocally = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("ran saveTaskLocally()");
  };

  const getTasksLocally = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify());
      console.log("GetTasksLocally run");
    } else {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    }
  };

  // intial loading of locally saved tasks
  useEffect(() => {
    getTasksLocally();
  }, []);

  // on task change re-save locally
  useEffect(() => {
    saveTasksLocally();
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        sideScreenName,
        setSideScreenName,
        sectionType,
        setSectionType,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
