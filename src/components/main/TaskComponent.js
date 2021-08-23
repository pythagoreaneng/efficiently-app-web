import React from "react";

import {
  Container,
  BodyContainer,
  SideBarContainer,
  TaskInputContainer,
  SearchContainer,
} from "../../pages/styles";

import { TaskListContainer } from "../../pages/styles";
import TaskList from "../Body/TaskList";
import TaskInput from "../Body/TaskInput";
import TaskListContextProvider from "../../contexts/TaskListContext";
import Search from "../Header/Search";
import Header from "../Header/Header";
import SideBar from "../Body/SideBar";
import Content from "../Body/Content";
import Body from "../Body/Body";
import HamburgerMenu from "../Header/HamburgerMenu";
import { HeaderCenterContainer, HeaderLeftContainer } from "../Header/styles";

const TaskComponent = () => {
  return (
    <Container>
      <Header>
        <HamburgerMenu />
        <Search />
      </Header>

      <Body>
        <SideBar />
        <Content>
          <TaskListContainer>
            <TaskListContextProvider>
              <TaskList />
            </TaskListContextProvider>
          </TaskListContainer>
          <TaskInputContainer>
            <TaskInput />
          </TaskInputContainer>
        </Content>
      </Body>
    </Container>
  );
};

export default TaskComponent;
