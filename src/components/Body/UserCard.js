import React from "react";
import { RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";

const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserProfilePicWrapper = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #bbb;
  border-radius: 50%;
  border: 0.1rem solid #42bcef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UsernameWrapper = styled.div`
  padding: 1.5rem;
`;

const UserCard = () => {
  const { currentUser } = useAuth();
  return (
    <Link to="/profile">
      <UserCardContainer>
        <UserProfilePicWrapper>
          <RiUserLine />
        </UserProfilePicWrapper>
        <UsernameWrapper>@{currentUser.displayName}</UsernameWrapper>
      </UserCardContainer>
    </Link>
  );
};

export default UserCard;
