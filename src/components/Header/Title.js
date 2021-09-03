import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import { TaskContext } from "../../contexts/TaskContext";

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NameWrapper = styled.div`
  padding: 0.5rem;
  font-weight: 600;
  font-size: 1.3em;
`;

const Title = () => {
  const { navOpen, setNavOpen } = useContext(TaskContext);
  const backToTasksMobile = () => {
    if (window.innerWidth <= 845 && navOpen) {
      setNavOpen(!navOpen);
    }
  };
  return (
    <NavLink exact to="/inbox" onClick={backToTasksMobile}>
      <TitleWrapper>
        <img src={Logo} alt="Logo" />
        <NameWrapper>Efficiently</NameWrapper>
      </TitleWrapper>
    </NavLink>
  );
};

export default Title;
