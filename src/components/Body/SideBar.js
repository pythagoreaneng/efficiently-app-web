import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SideSectionContainer,
  SideBarWrapper,
  UserInfoContainer,
  UserProfilePicContainer,
  UsernameWrapper,
  SideBottomContainer,
  SideBarContainer,
} from "./styles";
import UserProfilePic from "./UserCard";
import { useAuth } from "../../contexts/AuthContext";

const SideBar = ({ children }) => {
  const { history, userDB } = useAuth();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  userDB
    .doc("profile")
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data().username);
        currentUser.updateProfile({ displayName: doc.data().username });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

  return (
    <SideBarContainer>
      <SideBarWrapper>
        <SideSectionContainer>{children}</SideSectionContainer>

        {error && <div>Error: {error}</div>}

        <SideBottomContainer>
          <Link to="/profile">
            <UserInfoContainer>
              <UserProfilePicContainer>
                <UserProfilePic />
              </UserProfilePicContainer>
              <UsernameWrapper> @{currentUser.displayName}</UsernameWrapper>
            </UserInfoContainer>
          </Link>
        </SideBottomContainer>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
