import React, { useContext } from "react";
import styled from "styled-components";
import Dot from "../components/Common/Dot";
import { SettingLayout } from "../components/Layouts";
import { TaskContext } from "../contexts/TaskContext";

const DotsContainer = styled.div`
  width: 60%;
  height: 50%;
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

const Customize = () => {
  const { handleTheme } = useContext(TaskContext);
  return (
    <SettingLayout title={"Customize"}>
      <DotsContainer>
        <Dot color={"#FFFFFF"} onClick={() => handleTheme("#FFFFFF")}></Dot>
        <Dot color={"#44BCFF"} onClick={() => handleTheme("#44BCFF")}></Dot>
        <Dot color={"#BBF4D5"} onClick={() => handleTheme("#BBF4D5")}></Dot>
        <Dot color={"#C0C0C0"} onClick={() => handleTheme("#C0C0C0")}></Dot>
        <Dot color={"#BFE5FD"} onClick={() => handleTheme("#BFE5FD")}></Dot>
        <Dot color={"#FBF688"} onClick={() => handleTheme("#FBF688")}></Dot>
        <Dot color={"#FFD7D7"} onClick={() => handleTheme("#FFD7D7")}></Dot>
        <Dot color={"#D5D4F4"} onClick={() => handleTheme("#D5D4F4")}></Dot>
      </DotsContainer>
    </SettingLayout>
  );
};

export default Customize;
