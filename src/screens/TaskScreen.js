import React from "react";
import SectionTasks from "../components/SectionTasks";
import TaskInput from "../components/TaskInput";
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

import SideScreen from "../components/SideScreen";
import Title from "../components/Title";
import Search from "../components/Search";

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
