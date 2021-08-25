import React from "react";
import { RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";

const UserCardContainer = styled(Link)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const PicContainer = styled.div`
  width: 20%;
`;

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
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
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
