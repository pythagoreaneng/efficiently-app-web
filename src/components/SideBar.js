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
import { Link, NavLink } from "react-router-dom";
import { TaskContext } from "../contexts/TaskContext";
import {
  SectionIcon,
  SectionName,
  SideSectionContainer,
  SideSectionWrapper,
  SideBarContainer,
  LoginStatusContainer,
  LogoutButton,
  SideBottomContainer,
} from "../pages/styles";
import { useAuth } from "../contexts/AuthContext";

const SideBar = () => {
  const { history } = useAuth();
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
  return (
    <>
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
        <Link to="/profile"> Welcome, @{currentUser.displayName}</Link>
      </SideSectionContainer>

      {error && <div>Error: {error}</div>}
      <SideBottomContainer>
        <Link to="/settings">
          <RiSettings5Fill />
        </Link>

        <LoginStatusContainer>
          {currentUser.email}
          <LogoutButton onClick={handleLogout}>(Logout)</LogoutButton>
        </LoginStatusContainer>
      </SideBottomContainer>
    </>
  );
};

export default SideBar;
