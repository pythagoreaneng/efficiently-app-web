import React, { useContext } from "react";
import { Container } from "../Common/styles";
import { Header } from "../Header";
import { Body, Content, SideBar } from "../Body";
import { SettingSideBar } from "../Contents";
import { Title } from "../Header";
import { TaskContext } from "../../contexts/TaskContext";
const SettingLayout = ({ children }) => {
  const { theme } = useContext(TaskContext);
  return (
    <Container theme={theme}>
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
