import React, { useState, useContext } from "react";
import { Container } from "../components/Common/styles";
import { SettingLayout } from "../components/Layouts";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { TaskContext } from "../contexts/TaskContext";

const SettingBodyContainer = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SecurityRowContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.6rem 2rem;
  margin: 2rem;
  font-size: 0.8em;
  border-radius: 0.5rem;
  background-color: #911;
  color: #fff;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;

const Security = () => {
  const [error, setError] = useState();
  const { deleteUser, history } = useAuth();
  const { removeUserTasks } = useContext(TaskContext);
  const handleDeleteUser = async () => {
    setError("");
    try {
      await deleteUser();
      history.push("/login");
    } catch {
      console.log("Error deleting user");
    }
  };

  const clearCache = async () => {
    setError("");
    try {
      await localStorage.clear();
      console.log("Cache has been removed");
    } catch {
      console.log("Error deleting user");
    }
  };

  const handleRemoveUserTasks = async () => {
    setError("");
    try {
      await removeUserTasks();
      console.log("Cache has been removed");
    } catch {
      console.log("Error deleting userTasks");
    }
  };

  return (
    <Container>
      <SettingLayout
        title={"Security"}
        description={
          "Your privacy is our priority. All the data will be completely from our server removed upon deletion."
        }
      >
        {/* <SecurityRowContainer>
          Remove all the data
          <button onClick={handleRemoveUserTasks}>click</button>
        </SecurityRowContainer> */}
        <SettingBodyContainer>
          <SecurityRowContainer>
            Clear cache<Button onClick={clearCache}>Clear</Button>
          </SecurityRowContainer>
          <SecurityRowContainer>
            Delete account<Button onClick={handleDeleteUser}>Delete</Button>
          </SecurityRowContainer>
        </SettingBodyContainer>
      </SettingLayout>
    </Container>
  );
};

export default Security;
