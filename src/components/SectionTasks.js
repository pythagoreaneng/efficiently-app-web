import React from "react";
import Task from "./Task";

// SectionTasks displays a filtered list of tasks depending on a sectionType props passed into it
// Embeded insided TaskScreen
const SectionTasks = ({
  tasks,
  sectionType,
  completeTask,
  today,
  todayDate,
  removeTask,
}) => {
  if (sectionType === "inbox") {
    // diplays inbox, which is task.completed = false
    return tasks
      .filter((task) => !task.completed)
      .map((task) => {
        return (
          <Task
            tempKey={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
            completeTask={completeTask}
            removeTask={removeTask}
            key={Math.random()}
          />
        );
      });
  } else if (sectionType === "archive") {
    return tasks
      .filter((task) => task.completed)
      .map((task) => {
        return (
          <Task
            tempKey={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
            completeTask={completeTask}
            removeTask={removeTask}
            key={Math.random()}
          />
        );
      });
  } else if (sectionType === "upcoming") {
    return tasks
      .filter((task) => task.schedule_date > todayDate)
      .map((task) => {
        return (
          <Task
            tempKey={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
            completeTask={completeTask}
            removeTask={removeTask}
            key={Math.random()}
          />
        );
      });
  } else if (sectionType === "star") {
    return tasks
      .filter((task) => task.star)
      .map((task) => {
        return (
          <Task
            tempKey={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
            completeTask={completeTask}
            removeTask={removeTask}
            key={Math.random()}
          />
        );
      });
  } else if (sectionType === "today") {
    return tasks
      .filter((task) => task.due_date === todayDate)
      .map((task) => {
        return (
          <Task
            tempKey={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
            completeTask={completeTask}
            removeTask={removeTask}
            key={Math.random()}
          />
        );
      });
  } else {
    // any other cases displays inbox
    return tasks
      .filter((task) => !task.completed)
      .map((task) => {
        return (
          <Task
            tempKey={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
            completeTask={completeTask}
            removeTask={removeTask}
            key={Math.random()}
          />
        );
      });
  }
};

export default SectionTasks;
