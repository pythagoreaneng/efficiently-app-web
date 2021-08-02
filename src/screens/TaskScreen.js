import React, { useState, useRef, useContext, useEffect } from "react";
import SectionTasks from "../components/SectionTasks";
import TaskInput from "../components/TaskInput";
import {
  Container,
  TopNavContainer,
  TaskInputContainer,
  TopTitleContainer,
  TopSearchContainer,
  TopSearchForm,
  TopSearchInput,
  ScreenContainer,
  SectionTasksContainer,
  SideScreenContainer,
  MainScreenContainer,
} from "../pages/styles";

import { TaskContext } from "../providers/TaskContext";
import SideScreen from "../components/SideScreen";
import Header from "../components/Header";
import Search from "../components/Search";

const TaskScreen = () => {
  const { tasks, setTasks, sideScreenName, sectionType, search } =
    useContext(TaskContext);

  // const addTask = (task) => {
  //   if (task.title === "" || /^\s*$/.test(task.title)) {
  //     console.log("Invalid task");
  //     return;
  //   }

  //   const newTasks = [task, ...tasks];
  //   setTasks(newTasks);
  //   console.log("tasks:", tasks);
  //   return;
  // };

  return (
    <Container>
      <TopNavContainer>
        <TopTitleContainer>
          <Header />
        </TopTitleContainer>
        <TopSearchContainer>
          <TopSearchForm>
            <Search />
          </TopSearchForm>
        </TopSearchContainer>
      </TopNavContainer>
      <ScreenContainer>
        <SideScreenContainer>
          {sideScreenName}
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
