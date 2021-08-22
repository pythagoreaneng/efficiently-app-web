import React, { useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import { EntryContext } from "../contexts/EntryContext";
import EntryComponent, {
  EntryBottomLink,
  LoginConfirmButton,
  EntryButtonContainer,
  EntryForm,
  EntryInput,
  EntryInputContainer,
} from "../components/main/EntryComponent";

const Reset = () => {
  const { resetPassword } = useAuth();
  const { emailRef, setSuccessMessage, setError, loading, setLoading } =
    useContext(EntryContext);

  // function to handle reset request
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

  // componenent for reset form
  const ResetForm = (
    <EntryForm onSubmit={handleSubmitReset}>
      <EntryInputContainer>
        <EntryInput
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          spellcheck="false"
          ref={emailRef}
          required
        />
      </EntryInputContainer>
      <EntryButtonContainer>
        <LoginConfirmButton disabled={loading} type="submit">
          Reset
        </LoginConfirmButton>
      </EntryButtonContainer>
    </EntryForm>
  );

  // message to let user login instead
  const RememberLoginMessage = (
    <>
      Remember your password?{" "}
      <EntryBottomLink to="/login">Login</EntryBottomLink>{" "}
    </>
  );
  return (
    <EntryComponent
      title="Reset Password"
      form={ResetForm}
      bottomMessage={RememberLoginMessage}
    />
  );
};

export default Reset;
