import React from "react";
import { Container } from "../Common/styles";

import { Search, Header, HamburgerMenu } from "../Header";
import { Content } from "../Content";

import { TaskSiderBar, TaskContent } from "../TaskContent";

import { SideBar } from "../SideBar";
import { Body } from "../Body";

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
