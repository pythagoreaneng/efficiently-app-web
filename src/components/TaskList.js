import React, { useState } from "react";
import styled from "styled-components";

const Checkbox = styled.input`
  margin: 1rem;
`;

const TaskTitleContainer = styled.div``;

const TasksContainer = styled.div`
  height: 100%;
  position: relative;
`;

const TaskContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0.1rem solid #f1f1f1;
  border-radius: 0.5rem;
  background-color: #efefef;
  margin: 1rem;
  padding: 1rem;
`;

const TaskList = ({ tasks, mainScreenName }) => {
  const completeTask = () => {
    alert("Completing Task");
  };

  if (mainScreenName === "inbox") {
    return tasks
      .filter((task) => !task.completed)
      .map((task) => <div>{task.title}</div>);
  } else if (mainScreenName === "archived") {
    return tasks
      .filter((task) => task.completed)
      .map((task) => <div>{task.title}</div>);
  } else if (mainScreenName === "upcoming") {
    return tasks
      .filter((task) => task.upcoming)
      .map((task) => <div>{task.title}</div>);
  } else if (mainScreenName === "star") {
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
