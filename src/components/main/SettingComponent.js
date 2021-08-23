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
  BodyContainer,
  SideBarContainer,
  ContentContainer,
  HeaderLeftContainer,
  SectionIcon,
  SectionName,
  SideSectionContainer,
  SideSectionWrapper,
} from "../../pages/styles";

export const SettingComponent = ({ children }) => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderLeftContainer>
          <Title />
        </HeaderLeftContainer>
      </HeaderContainer>
      <BodyContainer>
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
        <ContentContainer>{children}</ContentContainer>
      </BodyContainer>
    </Container>
  );
};

export default SettingComponent;
