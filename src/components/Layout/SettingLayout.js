import React from "react";
import Title from "../Header/Title";
import {
  HeaderContainer,
  BodyContainer,
  ContentContainer,
} from "../../pages/styles";
import { Container } from "../Common/styles";
import { HeaderLeftContainer } from "../Header/styles";

export const SettingLayout = ({ children }) => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderLeftContainer>
          <Title />
        </HeaderLeftContainer>
      </HeaderContainer>
      <BodyContainer>
        {/* <SideBarContainer>
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
        </SideBarContainer> */}
        <ContentContainer>{children}</ContentContainer>
      </BodyContainer>
    </Container>
  );
};

export default SettingLayout;
