import React, { useState } from "react";
import Task from "./Task";
import styled from "styled-components";
import TaskForm from "./TaskForm";

const test = 
  [{
      "key": 1,
      "title" : "sample title 1",
      "completed": true,
      "star": true,
      "created-date":  "07-11-2021",
      "due-date": "07-11-2021"
  },
  {
      "key": 2,
      "title" : "sample title 2",
      "completed": false,
      "star": true,
      "created-date":  "07-11-2021",
      "due-date": "07-11-2021"
  },
  {
      "key": 3,
      "title" : "sample title 3",
      "completed": false,
      "star": true,
      "created-date":  "07-11-2021",
      "due-date": "07-11-2021",
  },
  {
      "key": 4,
      "title" : "sample title 4",
      "completed": false,
      "star": true,
      "created-date":  "07-11-2021",
      "due-date": "07-11-2021"
  },
  {
      "key": 5,
      "title" : "sample title 5D",
      "completed": true,
      "star": true,
      "created-date":  "07-24-2021",
      "due-date": "07-24-2021" 
  }     
  ]

const TaskList = () => {
  const TasksContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const [tasks, setTasks] = useState(test);

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
