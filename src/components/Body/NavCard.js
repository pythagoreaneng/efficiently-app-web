import React from "react";
import styled from "styled-components";

export const SideSectionWrapper = styled.div`
  height: 2rem;
  width: auto;
  margin: 1rem;
  display: flex;
  align-items: center;
`;

export const SectionIcon = styled.div`
  width: 10%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;

export const SectionName = styled.div`
  display: flex;
  width: 90%;
  padding: 1rem;
`;

const NavCard = ({ icon, link }) => {
  return (
    <SideSectionWrapper>
      <SectionIcon>{icon}</SectionIcon>
      <SectionName>{link}</SectionName>
    </SideSectionWrapper>
  );
};

export default NavCard;
