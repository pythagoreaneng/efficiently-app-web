import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Task from "./Task";

// TaskList displays a filtered list of tasks depending on a folder props passed into it
// Embeded insided TaskScreen

const TaskList = ({}) => {
  const {
    tasks,
    setTasks,
    folder,
    todayDate,
    completeTask,
    filteredTasks,
    pathName,
  } = useContext(TaskContext);

  const inboxTasks = tasks.filter((task) => !task.completed);
  const archiveTasks = tasks.filter((task) => task.completed);
  const upcomingTasks = tasks.filter((task) => task.scheduleDate > todayDate);
  const starTasks = tasks.filter((task) => task.star);
  const todayTasks = tasks.filter((task) => task.dueDate === todayDate);

  console.log(window.location.pathname);

  if (window.location.pathname === "/inbox") {
    // diplays inbox, which is task.completed = false
    return inboxTasks.map((task) => {
      return <Task key={task.id} task={task} />;
    });
  } else if (window.location.pathname === "/archive") {
    return archiveTasks.map((task) => {
      return <Task key={task.id} task={task} />;
    });
  } else if (window.location.pathname === "/upcoming") {
    return upcomingTasks.map((task) => {
      return <Task key={task.id} task={task} />;
    });
  } else if (window.location.pathname === "/star") {
    return starTasks.map((task) => {
      return <Task key={task.id} task={task} />;
    });
  } else if (window.location.pathname === "/today") {
    return todayTasks.map((task) => {
      return <Task key={task.id} task={task} />;
    });
  } else if (window.location.pathname === "/search") {
    // no filtering
    return filteredTasks.map((task) => {
      return <Task key={task.id} task={task} />;
    });
  } else {
    // any other cases displays inbox
    return filteredTasks
      .filter((task) => !task.completed)
      .map((task) => {
        return <Task key={task.id} task={task} />;
      });
  }
};

export default TaskList;
