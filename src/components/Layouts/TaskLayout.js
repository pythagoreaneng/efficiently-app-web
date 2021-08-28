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

const ContentOverlay = styled.form`
  height: 100%;
  width: 100%;
  @media (max-width: 768px) {
    height: 90%;
    position: fixed;
    filter: ${(props) => props.navOpen && "blur(2px)"};
  }
`;

const TaskLayout = () => {
  const { theme, dark, navOpen } = useContext(TaskContext);
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
            <ContentOverlay navOpen={navOpen}>
              <TaskListContainer>
                <TaskList />
              </TaskListContainer>
              <TaskInputContainer>
                <TaskInput />
              </TaskInputContainer>
            </ContentOverlay>
          </>
        }
      />
    </>
  );
};

export default TaskLayout;
