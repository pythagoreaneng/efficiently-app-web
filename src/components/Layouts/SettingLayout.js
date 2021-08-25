import React, { useContext } from "react";
import { Container } from "../Common/styles";
import { Header } from "../Header";
import { Body, Content, SideBar } from "../Body";
import { SettingSideBar } from "../Contents";
import { Title } from "../Header";
import { TaskContext } from "../../contexts/TaskContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SettingTitleContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 3em;
`;
const SettingDescriptionContainer = styled.div`
  width: 100%;
  height: 10%;
  padding: 0.5rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
`;
const SettingChildrenContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
`;
const SettingBottomContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpgradeButton = styled.button`
  height: 2rem;
  background-color: #44bcff;
  border-radius: 0.8rem;
  padding: 0.5rem 0.8rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SettingLayout = ({ title, description, children }) => {
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
          <SettingDescriptionContainer>
            {description}
          </SettingDescriptionContainer>
          <SettingChildrenContainer>{children}</SettingChildrenContainer>
          <SettingBottomContainer>
            {/* <UpgradeButton>
              <Link to="/upgrade">Upgrade</Link>
            </UpgradeButton> */}
          </SettingBottomContainer>
        </Content>
      </Body>
    </Container>
  );
};

export default SettingLayout;
