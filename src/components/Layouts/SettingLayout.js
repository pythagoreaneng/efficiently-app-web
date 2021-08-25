import React from "react";
import { Header, Title } from "../Header";
import { Body } from "../Body";
import { SettingSideBar } from "../Contents";
import styled from "styled-components";

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

const SettingLayout = ({ title, description, children }) => {
  return (
    <>
      <Header left={<Title />} center={<></>} right={<></>} />
      <Body
        sidebar={<SettingSideBar />}
        content={
          <>
            <SettingTitleContainer>{title}</SettingTitleContainer>
            <SettingDescriptionContainer>
              {description}
            </SettingDescriptionContainer>
            <SettingChildrenContainer>{children}</SettingChildrenContainer>
            <SettingBottomContainer></SettingBottomContainer>
          </>
        }
      />
    </>
  );
};

export default SettingLayout;
