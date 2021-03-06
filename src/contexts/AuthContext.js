import React, { useContext, useEffect, useState } from "react";
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

  const updateTheme = (theme) => {
    userDB.doc("theme").set({ theme: theme });
  };

  const deleteUser = () => {
    currentUser
      .delete()
      .then(() => {
        alert("Deletion completed. Thank you for trying Efficiently.app.");
      })
      .catch((error) => {
        alert("Please log in and try again.");
      });
  };

  const onAuthStateChange = () => {
    return auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        try {
          await setCurrentUser(user);
          user.updateProfile({ displayName: user.displayName });
        } catch (err) {
          console.log(err);
        }

        if (window.location.pathname === "/login") {
          history.push("/inbox");
        } else if (window.location.pathname === "/signup") {
          history.push("/inbox");
        } else if (window.location.pathname === "/") {
          history.push("/inbox");
        }
      } else {
        history.push("/login");
      }
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return unsubscribe;
  }, []); // eslint-disable-line

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
    updateTheme,
    userDB,
    deleteUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default UserProvider;
