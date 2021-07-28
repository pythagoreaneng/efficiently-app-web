import React from "react";
import Task from "./Task";

// SectionTasks displays a filtered list of tasks depending on a sectionType props passed into it
// Embeded insided TaskScreen
const SectionTasks = ({
  tasks,
  sectionType,
  completeTask,
  todayDate,
  removeTask,
  editTask,
  switchStar,
  createdDate,
  dueDate,
}) => {
  if (sectionType === "inbox") {
    // diplays inbox, which is task.completed = false
    return tasks
      .filter((task) => !task.completed)
      .map((task) => {
        return (
          <Task
            id={task.key}
            key={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
            completeTask={completeTask}
            removeTask={removeTask}
            editTask={editTask}
            switchStar={switchStar}
            createdDate={task.createdDate}
            dueDate={task.dueDate}
            scheduleDate={task.scheduleDate}
          />
        );
      });
  } else if (sectionType === "archive") {
    return tasks
      .filter((task) => task.completed)
      .map((task) => {
        return (
          <Task
            id={task.key}
            key={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
            completeTask={completeTask}
            removeTask={removeTask}
            editTask={editTask}
            switchStar={switchStar}
            createdDate={task.createdDate}
            dueDate={task.dueDate}
            scheduleDate={task.scheduleDate}
          />
        );
      });
  } else if (sectionType === "upcoming") {
    return tasks
      .filter((task) => task.schedule_date > todayDate)
      .map((task) => {
        return (
          <Task
            id={task.key}
            key={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
            completeTask={completeTask}
            removeTask={removeTask}
            editTask={editTask}
            switchStar={switchStar}
            createdDate={task.createdDate}
            dueDate={task.dueDate}
            scheduleDate={task.scheduleDate}
          />
        );
      });
  } else if (sectionType === "star") {
    return tasks
      .filter((task) => task.star)
      .map((task) => {
        return (
          <Task
            id={task.key}
            key={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
            completeTask={completeTask}
            removeTask={removeTask}
            editTask={editTask}
            switchStar={switchStar}
            createdDate={task.createdDate}
            dueDate={task.dueDate}
            scheduleDate={task.scheduleDate}
          />
        );
      });
  } else if (sectionType === "today") {
    return tasks
      .filter((task) => task.due_date === todayDate)
      .map((task) => {
        return (
          <Task
            id={task.key}
            key={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
            completeTask={completeTask}
            removeTask={removeTask}
            editTask={editTask}
            switchStar={switchStar}
            createdDate={task.createdDate}
            dueDate={task.dueDate}
            scheduleDate={task.scheduleDate}
          />
        );
      });
  } else if (sectionType === "search") {
    // no filtering
    return tasks.map((task) => {
      return (
        <Task
          id={task.key}
          key={task.key}
          completed={task.completed}
          title={task.title}
          star={task.star}
          completeTask={completeTask}
          removeTask={removeTask}
          switchStar={switchStar}
          editTask={editTask}
          switchStar={switchStar}
          createdDate={task.createdDate}
          dueDate={task.dueDate}
          scheduleDate={task.scheduleDate}
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
            id={task.key}
            key={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
            completeTask={completeTask}
            removeTask={removeTask}
            editTask={editTask}
            star={task.star}
            switchStar={switchStar}
            createdDate={task.createdDate}
            dueDate={task.dueDate}
            scheduleDate={task.scheduleDate}
          />
        );
      });
  }
};

export default SectionTasks;
