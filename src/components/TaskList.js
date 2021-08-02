import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks, todayDate, filteredTasks } = useContext(TaskContext);

  const inboxTasks = tasks.filter((task) => !task.completed);
  const archiveTasks = tasks.filter((task) => task.completed);
  const upcomingTasks = tasks.filter((task) => task.scheduleDate > todayDate);
  const starTasks = tasks.filter((task) => task.star);
  const todayTasks = tasks.filter((task) => task.dueDate === todayDate);

  var renderingTasks = tasks; // type of tasks to be rendered

  if (window.location.pathname === "/archive") {
    renderingTasks = archiveTasks;
  } else if (window.location.pathname === "/upcoming") {
    renderingTasks = upcomingTasks;
  } else if (window.location.pathname === "/star") {
    renderingTasks = starTasks;
  } else if (window.location.pathname === "/today") {
    renderingTasks = todayTasks;
  } else if (window.location.pathname === "/search") {
    renderingTasks = filteredTasks;
  } else {
    // render inbox for any other cases
    renderingTasks = inboxTasks;
  }
  return renderingTasks.map((task) => {
    return <Task key={task.id} task={task} />;
  });
};

export default TaskList;
