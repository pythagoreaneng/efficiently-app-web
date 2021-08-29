import React, { useContext } from "react";
import { Header, Title, HamburgerMenu } from "../Header";
import { Body } from "../Body";
import { SettingSideBar } from "../Contents";
import styled from "styled-components";
import { TaskContext } from "../../contexts/TaskContext";

const SettingTitleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 2em;
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
  height: 70%;
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
const ContentOverlay = styled.form`
  height: 100%;
  width: 100%;
  @media (max-width: 768px) {
    height: 90%;
    position: fixed;
    filter: ${(props) => props.navOpen && "blur(10px)"};
  }
`;

const SettingLayout = ({ title, description, children }) => {
  const { navOpen, setNavOpen } = useContext(TaskContext);
  return (
    <>
      <Header left={<HamburgerMenu />} center={<></>} right={<Title />} />
      <Body
        sidebar={<SettingSideBar />}
        content={
          <>
            <ContentOverlay navOpen={navOpen}>
              <SettingTitleContainer>{title}</SettingTitleContainer>
              <SettingDescriptionContainer>
                {description}
              </SettingDescriptionContainer>
              <SettingChildrenContainer>{children}</SettingChildrenContainer>
              <SettingBottomContainer></SettingBottomContainer>
            </ContentOverlay>
          </>
        }
      />
    </>
  );
};

export default SettingLayout;
