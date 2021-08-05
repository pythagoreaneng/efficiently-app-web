import React, { useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import { EntryContext } from "../contexts/EntryContext";
import EntryScreen, {
  EntryBottomLink,
  EntryForgotMessage,
  LoginConfirmButton,
  EntryButtonContainer,
  EntryForm,
  EntryInput,
  EntryInputContainer,
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
  const LoginForm = (
    <EntryForm onSubmit={handleSubmitLogin}>
      <EntryInputContainer>
        <EntryInput
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          spellcheck="false"
          ref={emailRef}
        />
        <EntryInput
          type="password"
          id="pwd"
          name="pwd"
          placeholder="Password"
          ref={passwordRef}
          required
        />
      </EntryInputContainer>
      <EntryButtonContainer>
        <LoginConfirmButton disabled={loading} type="submit">
          Login
        </LoginConfirmButton>
        <EntryForgotMessage>
          <EntryBottomLink to="/reset">Forgot password</EntryBottomLink>
        </EntryForgotMessage>
      </EntryButtonContainer>
    </EntryForm>
  );

  const SignupMessage = (
    <>
      Don't have an account?{" "}
      <EntryBottomLink to="/signup">Signup</EntryBottomLink>
    </>
  );

  return (
    <EntryScreen title="Login" form={LoginForm} bottomMessage={SignupMessage} />
  );
};

export default Login;
