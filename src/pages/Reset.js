import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import EntryContextProvider, { EntryContext } from "../contexts/EntryContext";
import EntryScreen from "../screens/EntryScreen";

const LoginBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`;

const LoginColumnContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  position: relative;
  align-items: center;
  height: 25%;
  width: 100%;
  min-height: 25rem;
  min-width: 19rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 0.1rem -2px black;
  border-radius: 0.5rem;
  text-align: center;
`;

const LoginTitleContainer = styled.div`
  height: 30%;
  font-size: 1.7em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginBodyContainer = styled.div`
  height: 70%;
  width: 60%;
  font-size: 1em;
`;

const LoginForm = styled.form`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginInputContainer = styled.div`
  height: 50%;
  width: 100%;
  white-space: no-wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginButtonContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginInput = styled.input`
  text-align: center;
  padding: 0.7rem 1rem;
  margin: 0.7rem 0;
  font-size: 0.8em;
  border-bottom: 0.01rem groove;
  color: #111;
  &:focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
  padding: 0.6rem 2rem;
  font-size: 0.8em;
  border-radius: 0.5rem;
  background-color: #000;
  color: #fff;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;

const BottomContainer = styled.div`
  text-align: center;
  opacity: 0.5;
  font-size: 0.8em;
  margin-top: 0.7rem;
`;

const BottomLink = styled(Link)`
  text-decoration: underline;
  &:hover {
    color: #fff;
  }
`;

const ErrorMessage = styled.div`
  position: absolute;
  top: 0.5rem;
  font-size: 0.8em;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
  background-color: #ffcccb;
`;
const SuccessMessage = styled.div`
  position: absolute;
  top: 0.5rem;
  font-size: 0.8em;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
  background-color: #90ee90;
`;

const Reset = () => {
  const { resetPassword, history } = useAuth();
  const {
    emailRef,
    successMessage,
    setSuccessMessage,
    error,
    setError,
    loading,
    setLoading,
  } = useContext(EntryContext);

  const handleSubmitReset = async (e) => {
    e.preventDefault();

    try {
      setSuccessMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setSuccessMessage("Reset link has been sent to your email");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  return (
    <>
      <EntryScreen>
        <LoginPanelContainer>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
          <LoginTitleContainer>Reset Password</LoginTitleContainer>

          <LoginBodyContainer>
            <LoginForm onSubmit={handleSubmitReset}>
              <LoginInputContainer>
                <LoginInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  spellcheck="false"
                  ref={emailRef}
                />
              </LoginInputContainer>
              <LoginButtonContainer>
                <LoginButton disabled={loading} type="submit">
                  Reset
                </LoginButton>
              </LoginButtonContainer>
            </LoginForm>
          </LoginBodyContainer>
        </LoginPanelContainer>
        <BottomContainer>
          Remember your password? <BottomLink to="/login">Login</BottomLink>
        </BottomContainer>
      </EntryScreen>
    </>
  );
};

export default Reset;
