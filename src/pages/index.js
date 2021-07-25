import React, { useState } from "react";
import styled from "styled-components";
import inbox from "./inbox";
import star from "./star";
import upcoming from "./upcoming";
import archive from "./archive";
import {
  RiCalendarCheckFill,
  RiInboxFill,
  RiStarSFill,
  RiCalendarTodoFill,
  RiArchiveFill,
} from "react-icons/ri";

const Container = styled.div`
  height: 100vh;
  width: auto;
`;

const TopNavContainer = styled.div`
  height: 10%;
  width: 100wh;
  background-color: #46bcff;
  display: flex;

  align-items: center;
`;

const TopLogoContainer = styled.div`
  width: 5%;
  display: flex;
  justify-content: center;
  alitgn-items: cetner;
`;

const TopTitleContainer = styled.div`
  width: 25%;
  display: flex-start;
  justify-content: center;
  alitgn-items: cetner;
  font-size: 1.5em;
`;
const TopSearchContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  alitgn-items: cetner;
`;

const TopSearchForm = styled.form`
  width 90%;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
`;

const TopSearchInput = styled.input`
  width: 100%;
  border-radius: 1rem;
  height: 2.5rem;
  text-align: center;
`;

const ScreenContainer = styled.div`
  display: flex;
  height: 90%;
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

const SideSectionWrapper = styled.button`
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
  padding: 1rem 2rem;
`;

const Home = ({ screenTitle }) => {
  const [mainScreen, setMainScreen] = useState(inbox);
  const [sideScreen, setSideScreen] = useState(true);

  const showSideScreen = () => {
    setSideScreen(!sideScreen);
  };

  const [sideScreenName, setSideScreenName] = useState("");
  const [mainScreenName, setMainScreenName] = useState("INBOX");

  const handleMainScreen = (e) => {
    setMainScreen(e);
    setMainScreenName(e.name.toUpperCase());
  };

  return (
    <>
      <Container>
        <TopNavContainer>
          <TopLogoContainer>
            <RiCalendarCheckFill className="h-8 w-8" />
          </TopLogoContainer>
          <TopTitleContainer>Efficiently App</TopTitleContainer>
          <TopSearchContainer>
            <TopSearchForm>
              <TopSearchInput type="search" placeholder="Search Efficiently" />
            </TopSearchForm>
          </TopSearchContainer>
        </TopNavContainer>
        <ScreenContainer>
          <SideScreenContainer>
            {sideScreenName}
            <SideSectionWrapper onClick={() => handleMainScreen(inbox)}>
              <SectionIcon>
                <RiInboxFill />
              </SectionIcon>
              <SectionName>Inbox</SectionName>
            </SideSectionWrapper>
            <SideSectionWrapper onClick={() => handleMainScreen(star)}>
              <SectionIcon>
                <RiStarSFill />
              </SectionIcon>
              <SectionName>Star</SectionName>
            </SideSectionWrapper>
            <SideSectionWrapper onClick={() => handleMainScreen(upcoming)}>
              <SectionIcon>
                <RiCalendarTodoFill />
              </SectionIcon>
              <SectionName>Upcoming</SectionName>
            </SideSectionWrapper>
            <SideSectionWrapper onClick={() => handleMainScreen(archive)}>
              <SectionIcon>
                <RiArchiveFill />
              </SectionIcon>
              <SectionName>Archive</SectionName>
            </SideSectionWrapper>
          </SideScreenContainer>
          <MainScreenContainer>
            <MainTitleContainer>{mainScreenName}</MainTitleContainer>
            <MainBodyContainer>{mainScreen}</MainBodyContainer>
          </MainScreenContainer>
        </ScreenContainer>
      </Container>
    </>
  );
};

export default Home;
