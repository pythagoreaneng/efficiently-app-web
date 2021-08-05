import React, { useRef, useState } from "react";

export const EntryContext = React.createContext(null);

export const EntryContextProvider = ({ children }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const value = {
    error,
    setError,
    loading,
    setLoading,
    emailRef,
    passwordRef,
    usernameRef,
  };

  return (
    <EntryContext.Provider value={value}>{children}</EntryContext.Provider>
  );
};

export default EntryContextProvider;
