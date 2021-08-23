import React, { useState, useContext, Children } from "react";
import {
  RiInboxFill,
  RiStarSFill,
  RiCalendarTodoFill,
  RiArchiveFill,
  RiLightbulbFlashFill,
  RiSearchLine,
  RiSettings5Fill,
} from "react-icons/ri";
import { GoSignOut } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import { TaskContext } from "../../contexts/TaskContext";
import {
  SectionIcon,
  SectionName,
  SideSectionContainer,
  SideSectionWrapper,
  SideBarWrapper,
  UserInfoContainer,
  UserProfilePicContainer,
  UsernameWrapper,
  LoginStatusContainer,
  LogoutButton,
  SideBottomContainer,
  SideBarContainer,
} from "../../pages/styles";
import { useAuth } from "../../contexts/AuthContext";
import UserProfilePic from "../UserProfilePic";

const SideBar = ({ children }) => {
  const { history, userDB } = useAuth();
  const { inboxRef, starRef, archiveRef, upcomingRef, todayRef, searchRef } =
    useContext(TaskContext);

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  };

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

          {/* <LoginStatusContainer>
        <LogoutButton onClick={handleLogout}>
          <GoSignOut />
        </LogoutButton>
        <Link to="/profile">
          <RiSettings5Fill />
        </Link>
      </LoginStatusContainer>*/}
        </SideBottomContainer>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
