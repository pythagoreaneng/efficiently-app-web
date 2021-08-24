import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SectionContainer = styled.div`
  height: 2rem;
  width: 100%;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconWrapper = styled.div`
  margin-right: 0.5rem;
`;

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  width: 100%;
  margin: 0.7rem 3rem;
`;

const NavCard = ({ icon, type }) => {
  return (
    <SectionContainer>
      <NavLink
        to={"/" + type}
        activeStyle={{
          background: "#ffffff",
          borderRadius: ".5rem",
          opacity: 0.8,
        }}
      >
        <SectionWrapper>
          <IconWrapper>{icon}</IconWrapper>

          {type.charAt(0).toUpperCase() + type.slice(1)}
        </SectionWrapper>
      </NavLink>
    </SectionContainer>
  );
};

export default NavCard;
