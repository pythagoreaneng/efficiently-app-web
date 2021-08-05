import React, { useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import { EntryContext } from "../contexts/EntryContext";
import EntryScreen, {
  BottomLink,
  BottomMessage,
  ErrorMessage,
  ForgotMessage,
  LoginBodyContainer,
  LoginButton,
  LoginButtonContainer,
  LoginForm,
  LoginInput,
  LoginInputContainer,
  LoginPanelContainer,
  LoginTitleContainer,
} from "../screens/EntryScreen";

const Login = () => {
  const { login, history } = useAuth();
  const { emailRef, passwordRef, error, setError, loading, setLoading } =
    useContext(EntryContext);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
    await window.location.reload(); // reload the page to triger getTasks
    setLoading(false);
  };
  return (
    <EntryScreen title="Login">
      <LoginPanelContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginTitleContainer>Login</LoginTitleContainer>
        <LoginBodyContainer>
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
        </LoginBodyContainer>
      </LoginPanelContainer>
      <BottomMessage>
        Don't have an account? <BottomLink to="/signup">Signup</BottomLink>
      </BottomMessage>
    </EntryScreen>
  );
};

export default Login;
