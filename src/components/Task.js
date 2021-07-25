import React from "react";
import styled from "styled-components";

const Task = ({ tasks }) => {
  const TaskContainer = styled.div`
    width: 100%;
    margin: 2rem;
    display: flex;
  `;

  const CompletedContainer = styled.div`
    width: 10%;
    padding-left: 1rem;
    background-color: red;
  `;
  const TaskTitleContainer = styled.div`
    width: 90%;
    background-color: red;
  `;

  const CompletedButton = styled.button``;

  return(<div>{tasks}</div>)
};

export default Task;
