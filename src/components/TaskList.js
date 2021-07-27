import React, { useState } from "react";
import styled from "styled-components";

// const TaskContainer = styled.div`
//   height: auto;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   border: 0.1rem solid #f1f1f1;
//   margin: 1rem;
//   border-radius: 0.5rem;
//   background-color: #efefef;
// `;

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
  const inboxTasks = tasks.filter((task) => !task.completed);
  const archiveTasks = tasks.filter((task) => task.completed);
  const starTasks = tasks.filter((task) => task.star);
  const upcomingTasks = tasks.filter((task) => task.upcoming);

  const completeTask = () => {
    alert("Completing Task");
  };

  if (mainScreenName === "inbox") {
    return inboxTasks.map((task) => <div>{task.title}</div>);
  } else if (mainScreenName === "star") {
    return starTasks.map((task) => <div>{task.title}</div>);
  } else if (mainScreenName === "upcoming") {
    return upcomingTasks.map((task) => <div>{task.title}</div>);
  } else if (mainScreenName === "archive") {
    return archiveTasks.map((task) => <div>{task.title}</div>);
  } else {
    return inboxTasks.map((task) => <div>{task.title}</div>);
  }
};

export default TaskList;
