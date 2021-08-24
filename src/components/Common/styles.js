import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: auto;
  background-color: ${(props) => props.theme || "#fff"}; ;
`;
