import React, { useEffect, useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { Task } from "../TaskList";

const TaskList = () => {
  const {
    tasks,
    todayDate,
    search,
    setInboxCount,
    setTodayCount,
    setStarCount,
    setArchiveCount,
  } = useContext(TaskContext);

  let inboxTasks = tasks.filter((task) => !task.completed);
  let todayTasks = tasks.filter((task) => task.dueDate === todayDate);
  let starTasks = tasks.filter((task) => task.star);
  let upcomingTasks = tasks.filter((task) => task.scheduleDate > todayDate);
  let archiveTasks = tasks.filter((task) => task.completed);
  let searchedTasks = tasks.filter((task) =>
    task.title.includes(search.toLowerCase())
  );

  // update counts
  useEffect(() => {
    setInboxCount(inboxTasks.length);
    setTodayCount(todayTasks.length);
    setStarCount(starTasks.length);
    setArchiveCount(archiveTasks.length);
  }, [
    inboxTasks,
    todayTasks,
    starTasks,
    archiveTasks,
    setInboxCount,
    setTodayCount,
    setStarCount,
    setArchiveCount,
  ]);

  let renderingTasks; // type of tasks to be rendered

  switch (window.location.pathname) {
    case "/inbox":
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
      renderingTasks = searchedTasks;
      break;
  }

  // renders renderingTasks
  return renderingTasks.map((task) => {
    return <Task key={task.id} task={task} />;
  });
};

export default TaskList;
