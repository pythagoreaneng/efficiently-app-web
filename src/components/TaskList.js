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
      .map((task) => <div>{task.title}</div>);
  } else if (taskType === "upcoming") {
    return tasks
      .filter((task) => task.upcoming)
      .map((task) => <div>{task.title}</div>);
  } else if (taskType === "star") {
    return tasks
      .filter((task) => task.star)
      .map((task) => <div>{task.title}</div>);
  } else {
    return tasks
      .filter((task) => !task.completed)
      .map((task) => <div>{task.title}</div>);
  }
};

export default TaskList;
