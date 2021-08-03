import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks, todayDate, search } = useContext(TaskContext);

  const inboxTasks = tasks.filter((task) => !task.completed);
  const archiveTasks = tasks.filter((task) => task.completed);
  const upcomingTasks = tasks.filter((task) => task.scheduleDate > todayDate);
  const starTasks = tasks.filter((task) => task.star);
  const todayTasks = tasks.filter((task) => task.dueDate === todayDate);
  const searchedTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  let renderingTasks = tasks; // type of tasks to be rendered

  switch (window.location.pathname) {
    case "/":
      renderingTasks = inboxTasks;
      break;
    case "/today":
      renderingTasks = todayTasks;
      break;
    case "/star":
      renderingTasks = starTasks;
      break;
    case "/upcoming":
      renderingTasks = upcomingTasks;
      break;
    case "/archive":
      renderingTasks = archiveTasks;
      break;
    default:
      // anything else including seach
      console.log(window.location.pathname);
      renderingTasks = searchedTasks;
      break;
  }

  // renders renderingTasks
  return renderingTasks.map((task) => {
    return <Task key={task.id} task={task} />;
  });
};

export default TaskList;
