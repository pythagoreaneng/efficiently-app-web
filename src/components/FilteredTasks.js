import React from "react";
import styled from "styled-components";

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

const Checkbox = styled.input`
  margin: 0.5rem;
`;

const FilteredTasks = ({ tasks, completed }) => {
  return (
    <>
      <TasksContainer>
        {tasks.map((task) => {
          return (
            <TaskContainer>
              <Checkbox type="checkbox" />
              {task.title}
            </TaskContainer>
          );
        })}
      </TasksContainer>
    </>
  );
};

export default FilteredTasks;
