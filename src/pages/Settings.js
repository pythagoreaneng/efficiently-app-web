import React from "react";
import Title from "../components/Header/Title";
import { useAuth } from "../contexts/AuthContext";
import { HeaderContainer, BodyContainer, ContentContainer } from "./styles";

const Settings = () => {
  const { currentUser } = useAuth();
  return (
    <Container>
      <HeaderContainer>
        <Title />
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
                  to="/costomize"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Costomize
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

            <Link to="/profile"> Welcome, @{currentUser.displayName}</Link>
          </SideSectionContainer>
        </SideBarContainer> */}
        <ContentContainer></ContentContainer>
      </BodyContainer>
    </Container>
  );
};

export default Settings;
