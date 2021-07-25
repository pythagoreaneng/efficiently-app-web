import React, { useState } from "react";
import Task from "./Task";
import styled from "styled-components";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const TasksContainer = styled.div`
    diplay: flex;
    flex-direction: column;
  `;

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTasks = [task, ...tasks];

    setTasks(newTasks);
    console.log(tasks);
  };
  return (
    <>
      TaskList
      <TasksContainer>
        <TaskForm onSubmit={addTask} />
        <Task tasks={tasks} />
      </TasksContainer>
    </>
  );
};

export default TaskList;
