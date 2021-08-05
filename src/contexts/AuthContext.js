import React, { useContext, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";

export const AuthContext = React.createContext(null);
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const logout = async () => {
    await window.location.reload();
    auth.signOut();
  };
  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };
  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  };
  const updatePassword = (password) => {
    return currentUser.updatePassword(password);
  };

  function onAuthStateChange() {
    return auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        console.log("The user is logged in");
        if (window.location.pathname === "/login" || "/signup") {
          history.push("/");
        }
      } else {
        console.log("The user is not logged in");
        history.push("/login");
      }
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    history,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
