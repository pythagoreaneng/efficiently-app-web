import React from "react";
import { SearchContainer, TitleContainer } from "../pages/styles";
import { Link, NavLink } from "react-router-dom";
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
import UserProfilePic from "./UserProfilePic";
import Search from "./Search";
import Title from "./Title";

const Header = () => {
  return (
    <>
      <TitleContainer>
        <Title />
      </TitleContainer>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <SideBottomContainer>
        <Link to="/profile">
          <UserInfoContainer>
            <UserProfilePicContainer>
              <UserProfilePic />
            </UserProfilePicContainer>
          </UserInfoContainer>
        </Link>
      </SideBottomContainer>
    </>
  );
};

export default Header;
