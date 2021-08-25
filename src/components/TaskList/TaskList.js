import React, { useContext } from "react";
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

  const inboxTasks = tasks.filter((task) => !task.completed);
  setInboxCount(inboxTasks.length);

  const todayTasks = tasks.filter((task) => task.dueDate === todayDate);
  setTodayCount(todayTasks.length);

  const starTasks = tasks.filter((task) => task.star);
  setStarCount(starTasks.length);

  const upcomingTasks = tasks.filter((task) => task.scheduleDate > todayDate);

  const archiveTasks = tasks.filter((task) => task.completed);
  setArchiveCount(archiveTasks.length);

  const searchedTasks = tasks.filter((task) =>
    task.title.includes(search.toLowerCase())
  );

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
      // anything else including seach

      renderingTasks = searchedTasks;
      break;
  }

  // renders renderingTasks
  return renderingTasks.map((task) => {
    return <Task key={task.id} task={task} />;
  });
};

export default TaskList;
