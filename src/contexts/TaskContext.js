import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { auth, firestore } from "../firebase";

export const TaskContext = React.createContext(null);

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const tasksRef = firestore.collection(
    `users/${auth.currentUser.uid / tasks}`
  );

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

  const searchBarRef = useRef(null);
  const inboxRef = useRef(null);
  const starRef = useRef(null);
  const archiveRef = useRef(null);
  const upcomingRef = useRef(null);
  const todayRef = useRef(null);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const editRef = useRef(null);

  // search related
  const [search, setSearch] = useState("");
  console.log("seach is:", search);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  var todayDate = moment().format("YYYY-MM-D");

  const completeTask = (id) => {
    let newTasks = tasks.map((task) => {
      console.log("Running completeTask");
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(newTasks);
  };

  const removeTask = (id) => {
    let newTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const editTask = (taskId, taskTitle) => {
    // map through tasks
    let newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.title = taskTitle; // update title
      }
      return task;
    });
    setTasks(newTasks); // update tasks
  };

  const toggleStar = (id) => {
    let newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.star = !task.star;
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        searchBarRef,
        inboxRef,
        starRef,
        archiveRef,
        upcomingRef,
        todayRef,
        searchRef,
        inputRef,
        editRef,
        search,
        setSearch,
        handleSearch,
        todayDate,
        completeTask,
        removeTask,
        editTask,
        toggleStar,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
