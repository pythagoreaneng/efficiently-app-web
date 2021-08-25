import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styled from "styled-components";
import UserCard from "./UserCard";

const SideBarContainer = styled.div`
  width: 15%;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1rem;
`;

const SideBottomContainer = styled.div`
  position: absolute;
  bottom: 0.5rem;
`;

const NavCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SideBar = ({ children }) => {
  const { userDB } = useAuth();
  const [error, setError] = useState("");
  const { currentUser } = useAuth();

  userDB
    .doc("profile")
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data().username);
        currentUser.updateProfile({ displayName: doc.data().username });
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

  return (
    <SideBarContainer>
      <NavCardsContainer>{children}</NavCardsContainer>
      {error && <div>Error: {error}</div>}
      <SideBottomContainer>
        <UserCard />
      </SideBottomContainer>
    </SideBarContainer>
  );
};

export default SideBar;
