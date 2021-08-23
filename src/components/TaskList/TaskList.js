import React, { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { Task } from "../Task";

const TaskList = () => {
  const { tasks, todayDate, search } = useContext(TaskContext);

  let renderingTasks; // type of tasks to be rendered

  switch (window.location.pathname) {
    case "/":
      const inboxTasks = tasks.filter((task) => !task.completed);
      renderingTasks = inboxTasks;
      break;
    case "/today":
      const todayTasks = tasks.filter((task) => task.dueDate === todayDate);
      renderingTasks = todayTasks;
      break;
    case "/star":
      const starTasks = tasks.filter((task) => task.star);
      renderingTasks = starTasks;
      break;
    case "/upcoming":
      const upcomingTasks = tasks.filter(
        (task) => task.scheduleDate > todayDate
      );
      renderingTasks = upcomingTasks;
      break;
    case "/archive":
      const archiveTasks = tasks.filter((task) => task.completed);
      renderingTasks = archiveTasks;
      break;
    default:
      // anything else including seach
      console.log(window.location.pathname);
      const searchedTasks = tasks.filter((task) =>
        task.title.includes(search.toLowerCase())
      );
      renderingTasks = searchedTasks;
      break;
  }

  // renders renderingTasks
  return renderingTasks.map((task) => {
    return <Task key={task.id} task={task} />;
  });
};

export default TaskList;
