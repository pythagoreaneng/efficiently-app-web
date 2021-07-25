import React, { useState } from "react";
import Task from "./Task";
import styled from "styled-components";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const TasksContainer = styled.div`
    diplay: flex;
    flex-direction: column;
  `;

  const [tasks, setTasks] = useState(["sample"]);

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
        {tasks.map((task) => {
          return <div>{task.title}</div>;
        })}
      </TasksContainer>
    </>
  );
};

export default TaskList;
