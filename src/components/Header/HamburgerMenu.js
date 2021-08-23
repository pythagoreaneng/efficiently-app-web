import React from "react";
import { BiMenu } from "react-icons/bi";
import { HeaderLeftContainer } from "./styles";

const HamburgerMenu = () => {
  return (
    <HeaderLeftContainer>
      <BiMenu size={30} />
    </HeaderLeftContainer>
  );
};

export default HamburgerMenu;
