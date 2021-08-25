import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styled from "styled-components";
import UserCard from "./UserCard";

const BodyContainer = styled.div`
  display: flex;
  height: 90%;
`;

const SideBarContainer = styled.div`
  width: 15%;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const SideBottomContainer = styled.div`
  position: absolute;
  bottom: 0.5rem;
  width: 12%;
`;

const NavCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 85%;
`;

const Body = ({ sidebar, content }) => {
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
    <BodyContainer>
      <SideBarContainer>
        {error && <div>Error: {error}</div>}
        <NavCardsContainer>{sidebar}</NavCardsContainer>
        <SideBottomContainer>
          <UserCard />
        </SideBottomContainer>
      </SideBarContainer>
      <ContentContainer>{content}</ContentContainer>
    </BodyContainer>
  );
};

export default Body;
