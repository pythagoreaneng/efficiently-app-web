import React from "react";
import { Title, Search, SideScreen } from "../components/";
import MainScreen from "../components/MainScreen";
import {
  Container,
  HeaderContainer,
  TitleContainer,
  SearchContainer,
  ScreenContainer,
  SideScreenContainer,
  MainScreenContainer,
} from "../pages/styles";

const TaskScreen = () => {
  return (
    <Container>
      <HeaderContainer>
        <TitleContainer>
          <Title />
        </TitleContainer>
        <SearchContainer>
          <Search />
        </SearchContainer>
      </HeaderContainer>

      <ScreenContainer>
        <SideScreenContainer>
          <SideScreen />
        </SideScreenContainer>

        <MainScreenContainer>
          <MainScreen />
        </MainScreenContainer>
      </ScreenContainer>
    </Container>
  );
};

export default TaskScreen;
