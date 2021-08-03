import React, { useContext, useEffect, useState } from "react";
import { auth } from "../backend/firebase";
import { useAuth } from "./AuthContext";

export const AuthContext = React.createContext(null);
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
    return () => {
      unsubscribef;
    };
  }, []);

  const value = { currentUser, signUp };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default deProvider;
