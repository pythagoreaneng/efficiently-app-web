import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { EntryContext } from "../contexts/EntryContext";
import EntryScreen, {
  BottomLink,
  ForgotMessage,
  LoginButton,
  LoginButtonContainer,
  LoginForm,
  LoginInput,
  LoginInputContainer,
} from "../screens/EntryScreen";

const Login = () => {
  const { login, history } = useAuth();
  const { emailRef, passwordRef, usernameRef, setError, loading, setLoading } =
    useContext(EntryContext);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to login");
    }
    await window.location.reload(); // reload the page to triger getTasks
    setLoading(false);
  };
  return (
    <EntryScreen title="Login">
      <LoginForm onSubmit={handleSubmitLogin}>
        <LoginInputContainer>
          <LoginInput
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            spellcheck="false"
            ref={emailRef}
          />
          <LoginInput
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </LoginInputContainer>
        <LoginButtonContainer>
          <LoginButton disabled={loading} type="submit">
            Login
          </LoginButton>
          <ForgotMessage>
            <BottomLink to="/reset">Forgot password</BottomLink>
          </ForgotMessage>
        </LoginButtonContainer>
      </LoginForm>
    </EntryScreen>
  );
};

export default Login;
