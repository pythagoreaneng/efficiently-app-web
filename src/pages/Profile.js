import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import SettingScreen from "../screens/SettingScreen";

const EntryTitleContainer = styled.div`
  height: 30%;
  font-size: 1.7em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EntryForm = styled.form`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EntryButtonContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EntryInput = styled.input`
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

const LoginConfirmButton = styled.button`
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

const EntryErrorMessage = styled.div`
  position: absolute;
  top: 0.5rem;
  font-size: 0.7em;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
  background-color: #ffcccb;
`;
// const EntryForgotMessage = styled.div`
//   position: absolute;
//   bottom: 0.5rem;
//   font-size: 0.8em;
//   padding: 0 0.5rem;
//   margin: 0.5rem 0;
// `;

const Profile = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const usernameRef = useRef(null);

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
    <SettingScreen>
      {error && <EntryErrorMessage>{error}</EntryErrorMessage>}
      <EntryTitleContainer>Profile settings</EntryTitleContainer>

      <EntryForm onSubmit={handleSubmitUpdate}>
        <EntryInput
          type="username"
          id="username"
          name="username"
          placeholder="@username"
          ref={usernameRef}
        />
        <EntryInput
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          spellcheck="false"
          ref={emailRef}
          required
          defaultValue={currentUser.email}
        />
        <EntryInput
          type="password"
          id="pwd"
          name="pwd"
          placeholder="Password"
          ref={passwordRef}
        />
        <EntryInput
          type="password"
          id="pwdcf"
          name="pwdcf"
          placeholder="Confirm"
          ref={passwordConfirmRef}
        />

        <EntryButtonContainer>
          <LoginConfirmButton disabled={loading} type="submit">
            Update
          </LoginConfirmButton>
        </EntryButtonContainer>
      </EntryForm>
    </SettingScreen>
  );
};

export default Profile;
