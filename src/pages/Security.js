import React from "react";
import styled from "styled-components";
import SettingComponent from "../components/main/SettingComponent";

const SettingBodyContainer = styled.div`
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

const SettingContentContainer = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Security = () => {
  return (
    <SettingComponent>
      <SettingBodyContainer>
        <SettingTitleContainer>Security settings</SettingTitleContainer>
        <SettingContentContainer>Coming Soon</SettingContentContainer>
      </SettingBodyContainer>
    </SettingComponent>
  );
};

export default Security;
