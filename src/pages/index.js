import { red } from "chalk";
import React, { useState } from "react";
import styled from "styled-components";
import inbox from "./inbox";
import today from "./today";
import upcoming from "./upcoming";

const Home = () => {
  const [mainScreen, setMainScreen] = useState(inbox);
  const handleScreen = (e) => {
    setMainScreen(e);
  };
  const Container = styled.div`
    height: 100vh;
    width: auto;
  `;
  const TopNavContainer = styled.div`
    height: 4rem;
    width: 100wh;
    background: #46bcff;
    font-size: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ScreenContainer = styled.div`
    display: flex;
    height: 100%;
  `;

  const SideScreenContainer = styled.div`
    height: 100%;
    width: 30%;
    background-color: #fafafa;
  `;

  const MainScreenContainer = styled.div`
    height: 100%;
    width: 70%;
  `;

  const SideSectionContainer = styled.button`
    height: 2rem;
    width: 80%;
    background-color: #fefefe;
    margin: 2rem;
    display: flex;
    align-items: center;
  `;

  const SectionIcon = styled.div`
    width: 10%;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;
  const SectionName = styled.div`
    display: flex;

    width: 90%;
  `;

  const MainTitleContainer = styled.div`
    height: 5%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 2rem;
  `;

  const MainBodyContainer = styled.div`
    height: 95%;
  `;

  return (
    <>
      <Container>
        <TopNavContainer>Efficiently App</TopNavContainer>
        <ScreenContainer>
          <SideScreenContainer>
            Side Nav
            <SideSectionContainer onClick={() => setMainScreen(inbox)}>
              <SectionIcon>X</SectionIcon>
              <SectionName>Inbox</SectionName>
            </SideSectionContainer>
            <SideSectionContainer onClick={() => setMainScreen(today)}>
              <SectionIcon>X</SectionIcon>
              <SectionName>Today</SectionName>
            </SideSectionContainer>
            <SideSectionContainer onClick={() => setMainScreen(upcoming)}>
              <SectionIcon>X</SectionIcon>
              <SectionName>Upcoming</SectionName>
            </SideSectionContainer>
          </SideScreenContainer>
          <MainScreenContainer>
            <MainTitleContainer>Main</MainTitleContainer>
            <MainBodyContainer>{mainScreen}</MainBodyContainer>
          </MainScreenContainer>
        </ScreenContainer>
      </Container>
    </>
  );
};

export default Home;
