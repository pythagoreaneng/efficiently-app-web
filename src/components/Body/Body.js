import React, { useState, useContext } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styled from "styled-components";
import UserCard from "./UserCard";
import { TaskContext } from "../../contexts/TaskContext";

const BodyContainer = styled.div`
  display: flex;
  height: 90%;
  background-color: ${(props) => (props.dark ? "#22272D" : "#fff")};
  color: ${(props) => (props.dark ? "#fff" : "#111")};
`;

const SideBarContainer = styled.div`
  ${(props) => (props.navOpen ? console.log("Open") : console.log("Closed"))}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: ${(props) => (props.navOpen ? "15%" : "0")};
  background-color: rgba(0, 0, 0, 0.1);
  transition: all linear 0.2s;
  transform: ${(props) => !props.navOpen && "translateX(-100%)"};
  visibility: ${(props) => !props.navOpen && "hidden"}; ;
`;

const ContentContainer = styled.div`=
  height: 100%;
  width: ${(props) => (props.navOpen ? "85%" : "100%")};
`;

const NavCardsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

// const SideBottomContainer = styled.div`
//   position: absolute;
//   bottom: 0.5rem;
//   width: 10%;
// `;

const Body = ({ sidebar, content }) => {
  const { userDB } = useAuth();
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const { dark, navOpen } = useContext(TaskContext);

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
      setError(error);
    });
  return (
    <BodyContainer dark={dark}>
      <SideBarContainer navOpen={navOpen}>
        {error && <div>Error: {error}</div>}
        <NavCardsContainer>{sidebar}</NavCardsContainer>
        <UserCard />
      </SideBarContainer>
      <ContentContainer>{content}</ContentContainer>
    </BodyContainer>
  );
};

export default Body;
