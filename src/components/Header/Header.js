import React, { useContext } from "react";
import styled from "styled-components";
import { TaskContext } from "../../contexts/TaskContext";

export const HeaderContainer = styled.div`
  height: 10%;
  width: 100wh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme || "#911"};
`;

const Header = ({ left, center, right }) => {
  const { theme } = useContext(TaskContext);
  return (
    <HeaderContainer theme={theme}>
      {left}
      {center}
      {right}
    </HeaderContainer>
  );
};

export default Header;
