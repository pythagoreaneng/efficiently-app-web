import React, { useContext } from "react";
import styled from "styled-components";
import { SettingLayout } from "../components/Layouts";
import { TaskContext } from "../contexts/TaskContext";

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

const Themes = () => {
  const { handleTheme } = useContext(TaskContext);
  return (
    <SettingLayout>
      <SettingContentContainer>
        <SettingHeaderLeftContainer>Theme settings</SettingHeaderLeftContainer>
        <SettingBodyContainer>
          <button onClick={() => handleTheme("#FFFFFF")}>Click me</button>
          <button onClick={() => handleTheme("#44BCFF")}>Click me</button>
          <button onClick={() => handleTheme("#BBF4D5")}>Click me</button>
          <button onClick={() => handleTheme("#BFE5FD")}>Click me</button>
          <button onClick={() => handleTheme("#FBF688")}>Click me</button>
          <button onClick={() => handleTheme("#FFD7D7")}>Click me</button>
          <button onClick={() => handleTheme("#D5D4F4")}>Click me</button>
        </SettingBodyContainer>
      </SettingContentContainer>
    </SettingLayout>
  );
};

export default Themes;
