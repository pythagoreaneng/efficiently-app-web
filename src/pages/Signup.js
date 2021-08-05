import React, { useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import EntryScreen, {
  EntryBottomLink,
  LoginConfirmButton,
  EntryButtonContainer,
  EntryForm,
  EntryInput,
  EntryInputContainer,
} from "../screens/EntryScreen";
import { EntryContext } from "../contexts/EntryContext";

const Signup = () => {
  const { signup, history } = useAuth();
  const { emailRef, passwordRef, usernameRef, setError, loading, setLoading } =
    useContext(EntryContext);

  // function to handle reset request
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
    } catch (err) {
      setError(err.message);
    }
    window.location.reload();
    setLoading(false);
  };

  // componenent for signup form
  const SignupForm = (
    <EntryForm onSubmit={handleSubmitSignup}>
      <EntryInputContainer>
        <EntryInput
          type="text"
          id="username"
          name="username"
          placeholder="@username"
          ref={usernameRef}
          required
        />
        <EntryInput
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          spellcheck="false"
          ref={emailRef}
          required
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
          Join
        </LoginConfirmButton>
      </EntryButtonContainer>
    </EntryForm>
  );

  // message to let user login instead
  const LoginMessage = (
    <>
      Already have an account?{" "}
      <EntryBottomLink to="/login">Login</EntryBottomLink>
    </>
  );
  return (
    <EntryScreen
      title="Signup"
      form={SignupForm}
      bottomMessage={LoginMessage}
    />
  );
};

export default Signup;
