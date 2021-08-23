import React from "react";
import styled from "styled-components";
import { SettingLayout } from "../components/Layouts";

const SettingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SettingHeaderLeftContainer = styled.div`
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

const Upgrade = () => {
  return (
    <SettingLayout>
      <SettingContentContainer>
        <SettingHeaderLeftContainer>
          Upgrade Your Efficiency with Efficiently+
        </SettingHeaderLeftContainer>
        <SettingBodyContainer>Coming Soon</SettingBodyContainer>
      </SettingContentContainer>
    </SettingLayout>
  );
};

export default Upgrade;
