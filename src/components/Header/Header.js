import React from "react";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 10%;
  width: 100wh;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const Header = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
