import React, { useContext } from "react";
import styled from "styled-components";
import Dot from "../components/Common/Dot";
import { Container } from "../components/Common/styles";
import { SettingLayout } from "../components/Layouts";
import { TaskContext } from "../contexts/TaskContext";
import ToggleButton from "react-toggle-button";

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const DotsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

const Customize = () => {
  const { handleTheme } = useContext(TaskContext);
  return (
    <Container>
      <SettingLayout
        title={"Customize"}
        description={
          "Personalize to make planning easy and manage time for people who mean most to you."
        }
      >
        <OptionsContainer>
          <DotsContainer>
            <Dot color={"#44BCFF"} onClick={() => handleTheme("#44BCFF")} />
            <Dot color={"#BBF4D5"} onClick={() => handleTheme("#BBF4D5")} />
            <Dot color={"#C0C0C0"} onClick={() => handleTheme("#C0C0C0")} />
            <Dot color={"#BFE5FD"} onClick={() => handleTheme("#BFE5FD")} />
            <Dot color={"#FBF688"} onClick={() => handleTheme("#FBF688")} />
            <Dot color={"#FFD7D7"} onClick={() => handleTheme("#FFD7D7")} />
            <Dot color={"#D5D4F4"} onClick={() => handleTheme("#D5D4F4")} />
          </DotsContainer>
        </OptionsContainer>
      </SettingLayout>
    </Container>
  );
};

export default Customize;
