import React from "react";
import styled from "styled-components";

const BodyContainer = styled.div`
  display: flex;
  height: 90%;
`;

const Body = ({ children }) => {
  return <BodyContainer>{children}</BodyContainer>;
};

export default Body;
