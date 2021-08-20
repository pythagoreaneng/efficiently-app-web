import React, { useState, useContext } from "react";
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
import { TaskContext } from "../contexts/TaskContext";
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
} from "../pages/styles";
import { useAuth } from "../contexts/AuthContext";
import UserProfilePic from "./UserProfilePic";

const SideBar = () => {
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
    <SideBarWrapper>
      <SideSectionContainer>
        <SideSectionWrapper>
          <SectionIcon>
            <RiInboxFill />
          </SectionIcon>
          <SectionName>
            <NavLink
              exact
              to="/"
              activeStyle={{ fontWeight: "bold" }}
              ref={inboxRef}
            >
              Inbox
            </NavLink>
          </SectionName>
        </SideSectionWrapper>
        <SideSectionWrapper>
          <SectionIcon>
            <RiLightbulbFlashFill />
          </SectionIcon>

          <SectionName>
            <NavLink
              to="/today"
              activeStyle={{ fontWeight: "bold" }}
              ref={todayRef}
            >
              Today
            </NavLink>
          </SectionName>
        </SideSectionWrapper>
        <SideSectionWrapper>
          <SectionIcon>
            <RiStarSFill />
          </SectionIcon>

          <SectionName>
            <NavLink
              to="/star"
              activeStyle={{ fontWeight: "bold" }}
              ref={starRef}
            >
              Star
            </NavLink>
          </SectionName>
        </SideSectionWrapper>
        <SideSectionWrapper>
          <SectionIcon>
            <RiCalendarTodoFill />
          </SectionIcon>
          <SectionName>
            <NavLink
              to="/upcoming"
              activeStyle={{ fontWeight: "bold" }}
              ref={upcomingRef}
            >
              Upcoming
            </NavLink>
          </SectionName>
        </SideSectionWrapper>
        <SideSectionWrapper>
          <SectionIcon>
            <RiArchiveFill />
          </SectionIcon>
          <SectionName>
            <NavLink
              to="/archive"
              activeStyle={{ fontWeight: "bold" }}
              ref={archiveRef}
            >
              Archive
            </NavLink>
          </SectionName>
        </SideSectionWrapper>
        <SideSectionWrapper>
          <SectionIcon>
            <RiSearchLine />
          </SectionIcon>
          <SectionName>
            <NavLink
              to="/search"
              activeStyle={{ fontWeight: "bold" }}
              ref={searchRef}
            >
              Search
            </NavLink>
          </SectionName>
        </SideSectionWrapper>
      </SideSectionContainer>

      {error && <div>Error: {error}</div>}

      {/* <SideBottomContainer>
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
        </LoginStatusContainer>
      </SideBottomContainer> */}
    </SideBarWrapper>
  );
};

export default SideBar;
