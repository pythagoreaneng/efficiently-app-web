import React from "react";

import { Container } from "../../pages/styles";

import Search from "../Header/Search";
import Header from "../Header/Header";

import Content from "../Content/Content";

import HamburgerMenu from "../Header/HamburgerMenu";
import TaskSiderBar from "../TaskContent/TaskSiderBar";

import { SideBar } from "..";
import Body from "../Body/Body";
import { TaskContent } from "../TaskContent";

const TaskLayout = () => {
  return (
    <Container>
      <Header>
        <HamburgerMenu />
        <Search />
      </Header>
      <Body>
        <SideBar>
          <TaskSiderBar />
        </SideBar>
        <Content>
          <TaskContent />
        </Content>
      </Body>
    </Container>
  );
};

export default TaskLayout;
