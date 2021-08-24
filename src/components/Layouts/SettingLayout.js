import React, { useContext } from "react";
import { Container } from "../Common/styles";
import { Header } from "../Header";
import { Body, Content, SideBar } from "../Body";
import { SettingSideBar } from "../Contents";
import { Title } from "../Header";
import { TaskContext } from "../../contexts/TaskContext";
import styled from "styled-components";

const SettingTitleContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 3em;
`;
const SettingChildrenContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
`;
const SettingLayout = ({ title, children }) => {
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
        <Content>
          <SettingTitleContainer>{title}</SettingTitleContainer>
          <SettingChildrenContainer>{children}</SettingChildrenContainer>
        </Content>
      </Body>
    </Container>
  );
};

export default SettingLayout;
