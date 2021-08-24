import React from "react";
import { Container } from "../Common/styles";
import { Search, Header, HamburgerMenu } from "../Header";
import { Body, Content, SideBar } from "../Body";
import { TaskSiderBar, TaskContent } from "../TaskContent";

// Filter by component example: takes {children}(ie Today) here

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
