import React, { useState } from "react";
import styled from "styled-components";
import Task from "./Task";

const TasksContainer = styled.div`
  height: 100%;
  position: relative;
`;

const TaskList = ({ tasks, taskType }) => {
  const completeTask = () => {
    alert("Completing Task");
  };

  // TaskList shows a filtered list of tasks depending on a props passed

  if (taskType === "inbox") {
    return tasks
      .filter((task) => !task.completed)
      .map((task) => {
        return (
          <Task
            key={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
          />
        );
      });
  } else if (taskType === "archive") {
    return tasks
      .filter((task) => task.completed)
      .map((task) => {
        return (
          <Task
            key={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
          />
        );
      });
  } else if (taskType === "upcoming") {
    return tasks
      .filter((task) => task.upcoming)
      .map((task) => {
        return (
          <Task
            key={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
          />
        );
      });
  } else if (taskType === "star") {
    return tasks
      .filter((task) => task.star)
      .map((task) => {
        return (
          <Task
            key={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
          />
        );
      });
  } else {
    return tasks
      .filter((task) => !task.completed)
      .map((task) => {
        return (
          <Task
            key={task.key}
            completed={task.completed}
            title={task.title}
            star={task.star}
          />
        );
      });
  }
};

export default TaskList;
