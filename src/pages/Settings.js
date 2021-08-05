import React from "react";
import {
  RiFlashlightFill,
  RiInboxFill,
  RiPaletteFill,
  RiUserFill,
} from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { Header, SideBar, Body, Title } from "../components";
import { useAuth } from "../contexts/AuthContext";
import {
  Container,
  HeaderContainer,
  ContentContainer,
  SideBarContainer,
  BodyContainer,
  TitleContainer,
  SectionIcon,
  SectionName,
  SideSectionContainer,
  SideSectionWrapper,
} from "./styles";

const Settings = () => {
  const { currentUser } = useAuth();
  return (
    <Container>
      <HeaderContainer>
        <TitleContainer>
          <Title />
        </TitleContainer>
      </HeaderContainer>
      <ContentContainer>
        <SideBarContainer>
          <SideSectionContainer>
            <SideSectionWrapper>
              <SectionIcon>
                <RiUserFill />
              </SectionIcon>
              <SectionName>
                <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
                  Profile
                </NavLink>
              </SectionName>
            </SideSectionWrapper>

            <SideSectionWrapper>
              <SectionIcon>
                <RiPaletteFill />
              </SectionIcon>
              <SectionName>
                <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
                  Themes
                </NavLink>
              </SectionName>
            </SideSectionWrapper>

            <SideSectionWrapper>
              <SectionIcon>
                <RiPaletteFill />
              </SectionIcon>
              <SectionName>
                <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
                  Themes
                </NavLink>
              </SectionName>
            </SideSectionWrapper>

            <SideSectionWrapper>
              <SectionIcon>
                <RiFlashlightFill />
              </SectionIcon>
              <SectionName>
                <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
                  Efficiently +
                </NavLink>
              </SectionName>
            </SideSectionWrapper>

            <Link to="/profile"> Welcome, @{currentUser.displayName}</Link>
          </SideSectionContainer>
        </SideBarContainer>
        <BodyContainer></BodyContainer>
      </ContentContainer>
    </Container>
  );
};

export default Settings;
