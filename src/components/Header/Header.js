import React from "react";
import { SearchContainer, TitleContainer } from "../../pages/styles";
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
} from "../../pages/styles";
import UserProfilePic from "../UserProfilePic";
import Search from "./Search";
import { BiMenu } from "react-icons/bi";
import styled from "styled-components";

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = () => {
  return (
    <>
      <TitleContainer>
        <MenuWrapper>
          <BiMenu size={30} />
        </MenuWrapper>
      </TitleContainer>

      <SearchContainer>
        <Search />
      </SearchContainer>
      <SideBottomContainer>
        {/* <Link to="/profile">
          <UserInfoContainer>
            <UserProfilePicContainer>
              <UserProfilePic />
            </UserProfilePicContainer>
          </UserInfoContainer>
        </Link> */}
      </SideBottomContainer>
    </>
  );
};

export default Header;
