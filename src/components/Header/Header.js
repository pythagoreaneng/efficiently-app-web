import React from "react";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 10%;
  width: 100wh;
  background-color: #efefef;
  display: flex;
  align-items: center;
`;

const Header = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
