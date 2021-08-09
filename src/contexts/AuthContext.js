import React, { useContext, useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { auth, firestore } from "../firebase";

export const AuthContext = React.createContext(null);
export const useAuth = () => {
  return useContext(AuthContext);
};

const UserProvider = ({ children }) => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const userDB = auth.currentUser
    ? firestore.collection(`users/${auth.currentUser.uid}/user`)
    : firestore.collection(`catch`);

  const signup = (email, password, username) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        cred.user.updateProfile({ displayName: username });
      })
      .then(() => {});
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

  const updateUsername = (username) => {
    console.log("userDB", userDB);
    userDB.doc("profile").set({ username: username });
  };

  const onAuthStateChange = () => {
    return auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        console.log("The user is logged in");
        try {
          await setCurrentUser(user);
          user.updateProfile({ displayName: user.displayName });
        } catch (err) {
          console.log(err);
        }

        if (window.location.pathname === "/login") {
          history.push("/");
        } else if (window.location.pathname === "/signup") {
          history.push("/");
        }
      } else {
        console.log("The user is not logged in");
      }
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return unsubscribe;
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
    updateUsername,
    userDB,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default UserProvider;
