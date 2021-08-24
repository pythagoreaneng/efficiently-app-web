import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SectionContainer = styled.div`
  height: 2rem;
  width: 100%;
  margin: 1rem;
  display: flex;
  align-items: center;
`;
export const IconWrapper = styled.div`
  margin-right: 0.5rem;
`;

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  width: 100%;
`;

const NavCard = ({ icon, type }) => {
  return (
    <SectionContainer>
      <NavLink
        to={"/" + type}
        activeStyle={{
          background: "#ffffff",
          borderRadius: ".5rem",
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
