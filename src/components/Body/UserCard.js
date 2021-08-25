import React from "react";
import { RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";

const UserCardContainer = styled(Link)`
  display: flex;
  width: 100%;
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

const UsernameWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
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
      <UsernameWrapper>
        <span>@{currentUser.displayName}</span>
      </UsernameWrapper>
    </UserCardContainer>
  );
};

export default UserCard;
