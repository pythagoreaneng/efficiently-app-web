import React, { useState } from "react";
import { Container } from "../components/Common/styles";
import { SettingLayout } from "../components/Layouts";
import ToggleButton from "react-toggle-button";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";

const SettingBodyContainer = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const securityRowContainer = styled.div`
  width: 80%;
`;

const Security = () => {
  const [error, setError] = useState();
  const { deleteUser, history } = useAuth();
  const handleDeleteUser = async () => {
    setError("");
    try {
      await deleteUser();
      history.push("/login");
    } catch {
      console.log("Error deleting user");
    }
  };
  return (
    <Container>
      <SettingLayout title={"Security"} description={"Security settting"}>
        <SettingBodyContainer>
          <securityRowContainer>Clear cache</securityRowContainer>
          <securityRowContainer>Remove all the data</securityRowContainer>
          <securityRowContainer>
            Delete account<button onClick={handleDeleteUser}>Click</button>
          </securityRowContainer>
        </SettingBodyContainer>
      </SettingLayout>
    </Container>
  );
};

export default Security;
