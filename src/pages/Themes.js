import React from "react";
import styled from "styled-components";
import SettingComponent from "../components/main/SettingComponent";

const SettingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SettingTitleContainer = styled.div`
  display: flex;
  height: 15%;
  font-size: 2em;
  justify-content: center;
  align-items: center;
`;

const SettingBodyContainer = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Themes = () => {
  return (
    <SettingComponent>
      <SettingContentContainer>
        <SettingTitleContainer>Theme settings</SettingTitleContainer>
        <SettingBodyContainer>Coming Soon</SettingBodyContainer>
      </SettingContentContainer>
    </SettingComponent>
  );
};

export default Themes;
