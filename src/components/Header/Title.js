import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo.svg";

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem;
`;

const NameWrapper = styled.div`
  margin: 0.5rem;
  font-weight: 600;
  font-size: 1.3em;
`;

const Title = () => {
  return (
    <NavLink exact to="/inbox">
      <TitleWrapper>
        <img src={Logo} alt="Logo" />
        <NameWrapper>Efficiently</NameWrapper>
      </TitleWrapper>
    </NavLink>
  );
};

export default Title;
