import React, { useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import EntryScreen, {
  LoginButton,
  LoginButtonContainer,
  LoginForm,
  LoginInput,
  LoginInputContainer,
} from "../screens/EntryScreen";
import { EntryContext } from "../contexts/EntryContext";

const Signup = () => {
  const { signup, history } = useAuth();
  const { emailRef, passwordRef, usernameRef, setError, loading, setLoading } =
    useContext(EntryContext);

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        usernameRef.current.value
      );
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    window.location.reload();
    setLoading(false);
  };

  return (
    <>
      <EntryScreen>
        <LoginForm onSubmit={handleSubmitSignup}>
          <LoginInputContainer>
            <LoginInput
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              spellcheck="false"
              ref={emailRef}
              required
            />
            <LoginInput
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Password"
              ref={passwordRef}
              required
            />
            <LoginInput
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              ref={usernameRef}
              required
            />
          </LoginInputContainer>

          <LoginButtonContainer>
            <LoginButton disabled={loading} type="submit">
              Join
            </LoginButton>
          </LoginButtonContainer>
        </LoginForm>
      </EntryScreen>
    </>
  );
};

export default Signup;
