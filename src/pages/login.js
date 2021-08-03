import React from "react";
import styled from "styled-components";

const LoginBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`;

const LoginPanel = styled.div`
  min-height: 550px;
  min-width: 320px;
  border-radius: 0.5rem;
  position: absolute;
  left: 50%;
  top: 8%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(13px);
  box-shadow: 0 0 20px -2px black;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px 0;
  color: #fff;
`;

const LoginTitleWrapper = styled.div`
  text-align: center;
  padding: 10px 0;
  font-size: 1.8em;
  color: #111;
`;

const UsernameWrapper = styled.div`
  text-align: center;
  padding: 10px 0;
  font-size: 1em;
  width: 100%;
  white-space: no-wrap;
`;
const LoginInput = styled.input`
  text-align: center;
  padding: 0.5rem 1rem;
  font-size: 1em;
  background-color: transparent;
  border-bottom: 0.05rem groove;
  color: #111;
  &:focus {
    outline: none;
  }
`;
const PasswordWrapper = styled.div`
  text-align: center;
  padding: 10px 0;
  font-size: 1em;
`;
const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 5.7rem;
`;
const LoginButton = styled.button`
  text-align: center;
  padding: 0.7rem 2rem;
  margin: 0 5rem;
  font-size: 0.8em;
  border-radius: 0.5rem;
  background-color: #000;
  color: #fff
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;
const SignUpButton = styled.button`
  text-align: center;
  padding: 0.7rem 2rem;
  margin: 0 5rem;
  font-size: 0.8em;
  border-radius: 0.5rem;
  background-color: #000;
  background-color: #44bcff;
  border-radius: 0.5rem;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;

const LoginFormContainer = styled.form``;

const login = () => {
  return (
    <>
      <LoginBackground>
        <LoginPanel>
          <LoginTitleWrapper>Efficiently Login</LoginTitleWrapper>
          <LoginFormContainer>
            <UsernameWrapper>
              <LoginInput
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                spellcheck="false"
              />
            </UsernameWrapper>
            <PasswordWrapper>
              <LoginInput
                type="password"
                id="pwd"
                name="pwd"
                placeholder="Password"
              />
            </PasswordWrapper>
          </LoginFormContainer>

          <LoginButtonContainer>
            <LoginButton>Login</LoginButton>
            <SignUpButton>Try it free</SignUpButton>
          </LoginButtonContainer>
        </LoginPanel>
      </LoginBackground>
    </>
  );
};

export default login;
