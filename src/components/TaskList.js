import React, { useState } from "react";
import styled from "styled-components";
import TaskForm from "./TaskForm";
import FilteredTasks from "./FilteredTasks";
import Task from "./Task";

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

const TaskTitleContainer = styled.div``;

const TaskList = ({ tasks, mainScreenName }) => {
  const inboxTasks = tasks.filter((task) => !task.completed);
  const archiveTasks = tasks.filter((task) => task.completed);
  const starTasks = tasks.filter((task) => task.star);
  const upcomingTasks = tasks.filter((task) => task.upcoming);

  const completeTask = () => {
    alert("Completing Task");
  };

  console.log(inboxTasks.map);
  if (mainScreenName === "inbox") {
    inboxTasks.map((task) => {
      return <div>Hey</div>;
    });
  } else if (mainScreenName === "star") {
    // starTasks.map((task) => {
    //   return (
    //     <TaskContainer>
    //       <Checkbox type="checkbox" onClick={() => completeTask()} />
    //       {task.title}
    //     </TaskContainer>
    //   );
    // });
    return <div>star</div>;
  } else {
    // return <TaskList tasks={tasks} inbox={true} />
    return <div>Else</div>;
  }

  // return (
  //   <>
  //     <TasksContainer>
  //       {inbox &&
  //         inboxTasks.map((task) => {
  //           return (
  //             <TaskContainer>
  //               <Checkbox type="checkbox" onClick={() => completeTask()} />
  //               {task.title}
  //             </TaskContainer>
  //           );
  //         })}
  //       {archive &&
  //         archiveTasks.map((task) => {
  //           return (
  //             <TaskContainer>
  //               <Checkbox type="checkbox" onClick={() => completeTask()} />
  //               {task.title}
  //             </TaskContainer>
  //           );
  //         })}

  //       {star &&
  //         starTasks.map((task) => {
  //           return (
  //             <TaskContainer>
  //               <Checkbox type="checkbox" onClick={() => completeTask()} />
  //               {task.title}
  //             </TaskContainer>
  //           );
  //         })}
  //       {upcoming &&
  //         upcomingTasks.map((task) => {
  //           return (
  //             <TaskContainer>
  //               <Checkbox type="checkbox" onClick={() => completeTask()} />
  //               {task.title}
  //             </TaskContainer>
  //           );
  //         })}
  //     </TasksContainer>
  //   </>
  // );
};

export default TaskList;
