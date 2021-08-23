import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import UserProfilePic from "../components/UserProfilePic";
import { useAuth } from "../contexts/AuthContext";
import SettingLayout from "../components/SettingLayout.js/SettingLayout";
import { LogoutButton } from "../pages/styles";
import { GoSignOut } from "react-icons/go";

const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
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
  margin: 2rem;
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

const SettingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SettingHeaderLeftContainer = styled.div`
  display: flex;
  height: 15%;
  font-size: 2em;
  justify-content: center;
  align-items: center;
`;

const SettingBodyContainer = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Profile = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const usernameRef = useRef(null);

  const { currentUser, updateEmail, updatePassword, updateUsername, logout } =
    useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    const promises = [];
    setLoading(true);
    setError("");

    if (usernameRef.current.value !== currentUser.username) {
      promises.push(updateUsername(usernameRef.current.value));
      console.log("username has been updated");
    }
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value !== currentUser.email) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        console.log("username has been updated");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SettingLayout>
      <SettingContentContainer>
        {error && <EntryErrorMessage>{error}</EntryErrorMessage>}
        <SettingHeaderLeftContainer>
          Profile settings
        </SettingHeaderLeftContainer>
        <SettingBodyContainer>
          <UserProfilePic />
          <EntryForm onSubmit={handleSubmitUpdate}>
            <EntryInput
              type="username"
              id="username"
              name="username"
              placeholder="Username"
              ref={usernameRef}
              defaultValue={currentUser.displayName}
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
              placeholder="Confirm Password"
              ref={passwordConfirmRef}
            />

            <LoginConfirmButton disabled={loading} type="submit">
              Update
            </LoginConfirmButton>
          </EntryForm>
          <LogoutButton onClick={handleLogout}>
            <GoSignOut /> Logout
          </LogoutButton>
        </SettingBodyContainer>
      </SettingContentContainer>
    </SettingLayout>
  );
};

export default Profile;
