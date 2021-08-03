import React, { useState } from "react";
import { Header, SideBar, Body } from "../components/";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import {
  Container,
  HeaderContainer,
  ContentContainer,
  SideBarContainer,
  BodyContainer,
} from "../pages/styles";

const TaskScreen = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  };
  return (
    <Container>
      {error && <div>{error}</div>}
      Loged In as: {currentUser.email}
      <button onClick={handleLogout}>Logout</button>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ContentContainer>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <BodyContainer>
          <Body />
        </BodyContainer>
      </ContentContainer>
    </Container>
  );
};

export default TaskScreen;
