import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";

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

const BottomMessage = styled.div`
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
  font-size: 0.7em;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
  background-color: #ffcccb;
`;
const ForgotMessage = styled.div`
  position: absolute;
  bottom: 0.5rem;
  font-size: 0.8em;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
`;

const Profile = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value !== currentUser.email) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/star");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <LoginBackground>
        <LoginColumnContainer>
          <LoginPanelContainer>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <LoginTitleContainer>Update Profile</LoginTitleContainer>
            <LoginBodyContainer>
              <LoginForm onSubmit={handleSubmitUpdate}>
                <LoginInputContainer>
                  <LoginInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    spellcheck="false"
                    ref={emailRef}
                    required
                    defaultValue={currentUser.email}
                  />
                  <LoginInput
                    type="password"
                    id="pwd"
                    name="pwd"
                    placeholder="Password"
                    ref={passwordRef}
                  />
                  <LoginInput
                    type="password"
                    id="pwdcf"
                    name="pwdcf"
                    placeholder="Confirm"
                    ref={passwordConfirmRef}
                  />
                </LoginInputContainer>
                <LoginButtonContainer>
                  <LoginButton disabled={loading} type="submit">
                    Update
                  </LoginButton>
                </LoginButtonContainer>
              </LoginForm>
            </LoginBodyContainer>
          </LoginPanelContainer>

          <BottomMessage>
            <BottomLink to="/">Go back to main page</BottomLink>
          </BottomMessage>
        </LoginColumnContainer>
      </LoginBackground>
    </>
  );
};

export default Profile;
