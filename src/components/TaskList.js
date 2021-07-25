import React, { useState } from "react";
import styled from "styled-components";
import TaskForm from "./TaskForm";
import FilteredTasks from "./FilteredTasks";

const test = [
  {
    key: 1,
    title: "sample title 1",
    completed: true,
    star: true,
    "created-date": "07-11-2021",
    "due-date": "07-11-2021",
  },
  {
    key: 2,
    title: "sample title 2",
    completed: false,
    star: true,
    "created-date": "07-11-2021",
    "due-date": "07-11-2021",
  },
  {
    key: 3,
    title: "sample title 3",
    completed: false,
    star: true,
    "created-date": "07-11-2021",
    "due-date": "07-11-2021",
  },
  {
    key: 4,
    title: "sample title 4",
    completed: false,
    star: true,
    "created-date": "07-11-2021",
    "due-date": "07-11-2021",
  },
  {
    key: 5,
    title: "sample title 5",
    completed: true,
    star: true,
    "created-date": "07-24-2021",
    "due-date": "07-24-2021",
  },
];

const TaskFormContainer = styled.div`
  width: 100%;
  padding 1rem;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

const TaskContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  border: 0.1rem solid #f1f1f1;
  margin: 1rem;
  border-radius: 0.5rem;
  background-color: #efefef;
`;

const Checkbox = styled.input`
  margin: 1rem;
`;

const TasksContainer = styled.div`
  height: 100%;
  position: relative;
`;

const TaskList = ({ inbox, today, upcoming }) => {
  const [tasks, setTasks] = useState(test);
  const addTask = (task) => {
    const newTasks = [task, ...tasks];

    setTasks(newTasks);
    console.log(tasks);
  };

  const TaskTitleContainer = styled.div``;

  return (
    <>
      <TasksContainer>
        {inbox && <FilteredTasks tasks={tasks} completed={false} />}
        {today &&
          tasks.map((task) => {
            return <div>{task.title}</div>;
          })}
        {upcoming &&
          tasks.map((task) => {
            return <div>{task.title}</div>;
          })}
        <TaskFormContainer>
          <TaskForm onSubmit={addTask} />
        </TaskFormContainer>
      </TasksContainer>
    </>
  );
};

export default TaskList;
