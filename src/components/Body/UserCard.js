import React from "react";
import { RiUserLine } from "react-icons/ri";
import styled from "styled-components";

export const UserProfilePicWrapper = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #bbb;
  border-radius: 50%;
  border: 0.1rem solid #42bcef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserCard = () => {
  return (
    <UserProfilePicWrapper>
      <RiUserLine />
    </UserProfilePicWrapper>
  );
};

export default UserCard;
