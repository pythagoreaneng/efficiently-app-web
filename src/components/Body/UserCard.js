import React from "react";
import { RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";

const UserCardContainer = styled(Link)`
  padding: 1rem 1rem 0 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const PicContainer = styled.div``;

const PicWrapper = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #bbb;
  border-radius: 50%;
  border: 0.1rem solid #42bcef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UsernameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  font-size: 0.8em;
  margin-left: 0.5rem;
`;

const UserCard = () => {
  const { currentUser } = useAuth();
  return (
    <UserCardContainer to={"/profile"}>
      <PicContainer>
        <PicWrapper>
          <RiUserLine />
        </PicWrapper>
      </PicContainer>
      <UsernameContainer>
        {currentUser.displayName}
        <span>@{currentUser.displayName}</span>
      </UsernameContainer>
    </UserCardContainer>
  );
};

export default UserCard;
