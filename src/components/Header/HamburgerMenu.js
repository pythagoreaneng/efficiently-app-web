import React, { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { HeaderLeftContainer } from "./styles";
import { TaskContext } from "../../contexts/TaskContext";

const HamburgerMenu = () => {
  const { navOpen, setNavOpen } = useContext(TaskContext);
  return (
    <HeaderLeftContainer>
      <BiMenu size={30} onClick={() => setNavOpen(!navOpen)} />
    </HeaderLeftContainer>
  );
};

export default HamburgerMenu;
