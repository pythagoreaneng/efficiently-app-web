import { red } from "chalk";
import React from "react";
import styled from "styled-components";

const Home = () => {
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

  const SideSectionContainer = styled.div`
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

  return (
    <>
      <Container>
        <TopNavContainer>Efficiently App</TopNavContainer>
        <ScreenContainer>
          <SideScreenContainer>
            Side Nav
            <SideSectionContainer>
              <SectionIcon>X</SectionIcon>
              <SectionName>Inbox</SectionName>
            </SideSectionContainer>
            <SideSectionContainer>
              <SectionIcon>X</SectionIcon>
              <SectionName>Today</SectionName>
            </SideSectionContainer>
            <SideSectionContainer>
              <SectionIcon>X</SectionIcon>
              <SectionName>Upcoming</SectionName>
            </SideSectionContainer>
          </SideScreenContainer>
          <MainScreenContainer>Main</MainScreenContainer>
        </ScreenContainer>
      </Container>
    </>
  );
};

export default Home;
