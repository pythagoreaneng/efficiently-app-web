import React from "react";
import { Header, SideBar, Body } from "../components";
import {
  Container,
  HeaderContainer,
  ContentContainer,
  SideBarContainer,
  BodyContainer,
} from "../pages/styles";

const TaskComponent = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ContentContainer>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <BodyContainer>
          <Body />
        </BodyContainer>
      </ContentContainer>
    </Container>
  );
};

export default TaskComponent;
