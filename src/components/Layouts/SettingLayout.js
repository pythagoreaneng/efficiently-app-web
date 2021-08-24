import React from "react";
import { Container } from "../Common/styles";
import { Header } from "../Header";
import { Body, Content, SideBar } from "../Body";
import { TaskSiderBar, TaskContent } from "../Contents";
import { SettingSideBar } from "../Contents";
import { Title } from "../Header/";

const SettingLayout = ({ children }) => {
  return (
    <Container>
      <Header>
        <Title />
      </Header>
      <Body>
        <SideBar>
          <SettingSideBar />
        </SideBar>
        <Content>{children}</Content>
      </Body>
    </Container>
  );
};

export default SettingLayout;
