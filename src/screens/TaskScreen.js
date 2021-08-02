import React from "react";
import {
  Title,
  Search,
  SideScreen,
  SectionTasks,
  TaskInput,
} from "../components/";
import {
  Container,
  HeaderContainer,
  TaskInputContainer,
  TitleContainer,
  SearchContainer,
  ScreenContainer,
  SectionTasksContainer,
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
          <SectionTasksContainer>
            <SectionTasks />
          </SectionTasksContainer>
          <TaskInputContainer>
            <TaskInput />
          </TaskInputContainer>
        </MainScreenContainer>
      </ScreenContainer>
    </Container>
  );
};

export default TaskScreen;
