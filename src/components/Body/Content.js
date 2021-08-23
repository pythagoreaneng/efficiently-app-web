import React from "react";
import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
`;

const Content = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default Content;
