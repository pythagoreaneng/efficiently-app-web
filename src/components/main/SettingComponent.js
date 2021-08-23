import React from "react";
import {
  RiDoorLockFill,
  RiFlashlightFill,
  RiPaletteFill,
  RiUserFill,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Title from "../Header/Title";
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
} from "../../pages/styles";

export const SettingComponent = ({ children }) => {
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
                <NavLink
                  exact
                  to="/profile"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Profile
                </NavLink>
              </SectionName>
            </SideSectionWrapper>

            <SideSectionWrapper>
              <SectionIcon>
                <RiPaletteFill />
              </SectionIcon>
              <SectionName>
                <NavLink
                  exact
                  to="/themes"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Themes
                </NavLink>
              </SectionName>
            </SideSectionWrapper>

            <SideSectionWrapper>
              <SectionIcon>
                <RiDoorLockFill />
              </SectionIcon>
              <SectionName>
                <NavLink
                  exact
                  to="/security"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Security
                </NavLink>
              </SectionName>
            </SideSectionWrapper>

            <SideSectionWrapper>
              <SectionIcon>
                <RiFlashlightFill />
              </SectionIcon>
              <SectionName>
                <NavLink
                  exact
                  to="/upgrade"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Efficiently +
                </NavLink>
              </SectionName>
            </SideSectionWrapper>
          </SideSectionContainer>
        </SideBarContainer>
        <BodyContainer>{children}</BodyContainer>
      </ContentContainer>
    </Container>
  );
};

export default SettingComponent;
