import styled from "styled-components";

export const SearchInputContainer = styled.input`
  width: 80%;
  height: 2.5rem;
  border: 0.1rem solid #efefef;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.9rem;
  margin: 0 1rem 0 1rem;
  text-align: center;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2rem #94d9ff;
  }
`;

export const LogoutButton = styled.button`
  height: 5%;
  widgth: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  &: hover {
    opacity: 1;
  }
`;
