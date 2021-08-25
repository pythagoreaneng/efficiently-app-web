import React, { useContext } from "react";
import { Search, Header, HamburgerMenu } from "../Header";
import { Body } from "../Body";
import { TaskSideBar } from "../Contents";
import { TaskContext } from "../../contexts/TaskContext";
import { TaskList, TaskInput } from "../TaskList";
import styled from "styled-components";

// Filter by component example: takes {children}(ie Today) here

const TaskListContainer = styled.div`
  height: 90%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskInputContainer = styled.form`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskLayout = () => {
  const { theme, dark } = useContext(TaskContext);
  return (
    <>
      <Header
        left={<HamburgerMenu />}
        center={<Search />}
        right={<></>}
        theme={theme}
        dark={dark}
      />
      <Body
        dark={dark}
        sidebar={<TaskSideBar />}
        content={
          <>
            <TaskListContainer>
              <TaskList />
            </TaskListContainer>
            <TaskInputContainer>
              <TaskInput />
            </TaskInputContainer>
          </>
        }
      />
    </>
  );
};

export default TaskLayout;
