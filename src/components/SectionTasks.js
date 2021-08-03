import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Task from "./Task";

// SectionTasks displays a filtered list of tasks depending on a sectionType props passed into it
// Embeded insided TaskScreen

const SectionTasks = ({}) => {
  const {
    setTasks,
    sectionType,
    todayDate,
    completeTask,
    filteredTasks,
    editTask,
    switchStar,
    removeTask,
  } = useContext(TaskContext);

  if (sectionType === "inbox") {
    // diplays inbox, which is task.completed = false
    return filteredTasks
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
            todayDate={todayDate}
          />
        );
      });
  } else if (sectionType === "archive") {
    return filteredTasks
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
            todayDate={todayDate}
          />
        );
      });
  } else if (sectionType === "upcoming") {
    return filteredTasks
      .filter((task) => task.scheduleDate > todayDate)
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
            todayDate={todayDate}
          />
        );
      });
  } else if (sectionType === "star") {
    return filteredTasks
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
            todayDate={todayDate}
          />
        );
      });
  } else if (sectionType === "today") {
    return filteredTasks
      .filter((task) => task.dueDate === todayDate)
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
            todayDate={todayDate}
            todayDate={todayDate}
          />
        );
      });
  } else if (sectionType === "search") {
    // no filtering
    return filteredTasks.map((task) => {
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
          todayDate={todayDate}
        />
      );
    });
  } else {
    // any other cases displays inbox
    return filteredTasks
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
            todayDate={todayDate}
          />
        );
      });
  }
};

export default SectionTasks;
