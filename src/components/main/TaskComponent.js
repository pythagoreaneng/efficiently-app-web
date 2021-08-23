import React from "react";

import {
  Container,
  BodyContainer,
  SideBarContainer,
  TaskInputContainer,
  TitleContainer,
  SearchContainer,
} from "../../pages/styles";

import { TaskListContainer } from "../../pages/styles";
import TaskList from "../Body/TaskList";
import TaskInput from "../Body/TaskInput";
import TaskListContextProvider from "../../contexts/TaskListContext";
import Search from "../Header/Search";
import { BiMenu } from "react-icons/bi";
import Header from "../Header/Header";
import SideBar from "../Body/SideBar";
import Content from "../Body/Content";
import Body from "../Body/Body";

const TaskComponent = () => {
  return (
    <Container>
      <Header>
        <TitleContainer>
          <BiMenu size={30} />
        </TitleContainer>

        <SearchContainer>
          <Search />
        </SearchContainer>
      </Header>
      <Body>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>

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
