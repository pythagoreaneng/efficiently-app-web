import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EntryContext } from "./contexts/EntryContext";
import styled from "styled-components";
import headerLogo from "../src/assets/headerLogo.png";

const EntryBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

export const EntryPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  min-height: 30rem;
  min-width: 25rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 0.1rem 0.1px gray;
  border-radius: 0.5rem;
`;
export const EntryLogo = styled.div`
  margin-bottom: 1rem;
`;
export const EntryHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const EntryContentContainer = styled.div``;

export const EntryFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const EntryInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EntryButtonContainer = styled.div`
  display: flex;
  margin-top: 5rem;
`;

export const EntryInput = styled.input`
  padding: 0.7rem 0em;
  margin: 0.7rem 0;
  font-size: 0.8em;
  border-bottom: 0.01rem groove;
  color: #111;
  &:focus {
    outline: none;
  }
`;

export const LoginConfirmButton = styled.button`
  padding: 0.6rem 2rem;
  margin-top: 3rem;
  font-size: 0.8em;
  font-weight: 600;
  border-radius: 0.25rem;
  background-color: #44bcff;
  color: #ffff;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;

export const EntryBottomContainer = styled.div`
  text-align: center;
  opacity: 0.5;
  font-size: 0.8em;
  margin-top: 0.7rem;
`;

export const EntryBottomLink = styled(Link)`
  color: #7e7e7e;
  margin-top: 1rem;
  font-size: 0.75rem;
  &:hover {
    opacity: 0.5;
  }
`;

export const EntryErrorMessage = styled.div`
  position: absolute;
  top: 2rem;
  font-size: 0.8em;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
  background-color: #ffcccb;
`;

export const SuccessMessage = styled.div`
  position: absolute;
  top: 0.5rem;
  font-size: 0.8em;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
  background-color: #90ee90;
`;
// interface for login, signup, reset pages
// i.e. title: "Sign up", form={SignupForm}, bottomMessage={LoginMessage}
const EntryComponent = ({ title, form, bottomMessage }) => {
  // import error and success messages from Entry Context
  const { error, successMessage } = useContext(EntryContext);
  return (
    <EntryBackground>
      <EntryContainer>
        <EntryPanel>
          <EntryLogo>
            <a href="https://efficiently.app/">
              <img src={headerLogo} alt="Efficiently" width="150px" />
            </a>
          </EntryLogo>
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
          {error && <EntryErrorMessage>{error}</EntryErrorMessage>}
          <EntryHeader>{title}</EntryHeader>
          <EntryFormContainer>{form}</EntryFormContainer>
        </EntryPanel>
        <EntryBottomContainer>{bottomMessage}</EntryBottomContainer>
      </EntryContainer>
    </EntryBackground>
  );
};

export default EntryComponent;
