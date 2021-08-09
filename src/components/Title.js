import React from "react";
import { TopTitleWrapper } from "../pages/styles";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Title = () => {
  return (
    <>
      <NavLink exact to="/">
        <TopTitleWrapper>
          <img src={Logo} alt="Logo" />
          <div>Efficiently App</div>
        </TopTitleWrapper>
      </NavLink>
    </>
  );
};

export default Title;
