import React from "react";
import { TitleWrapper, LogoWrapper } from "../pages/styles";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Title = () => {
  return (
    <>
      <NavLink exact to="/">
        <TitleWrapper>
          <LogoWrapper>
            <img src={Logo} alt="Logo" />
          </LogoWrapper>

          <div>Efficiently App</div>
        </TitleWrapper>
      </NavLink>
    </>
  );
};

export default Title;
