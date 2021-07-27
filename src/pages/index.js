import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  RiCalendarCheckFill,
  RiInboxFill,
  RiStarSFill,
  RiCalendarTodoFill,
  RiArchiveFill,
} from "react-icons/ri";

import test_tasks_1 from "./data/test_tasks_1";
import TaskList from "../components/TaskList";
import TaskInput from "../components/TaskInput";

const Container = styled.div`
  height: 100vh;
  width: auto;
`;

const TopNavContainer = styled.div`
  height: 10%;
  width: 100wh;
  background-color: #46bcff;
  display: flex;

  align-items: center;
`;

const TopLogoContainer = styled.div`
  width: 5%;
  display: flex;
  justify-content: center;
  alitgn-items: cetner;
`;

const TopTitleContainer = styled.div`
  width: 25%;
  display: flex-start;
  justify-content: center;
  alitgn-items: cetner;
  font-size: 1.5em;
`;
const TopSearchContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  alitgn-items: cetner;
`;

const TopSearchForm = styled.form`
  width 90%;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
`;

const TopSearchInput = styled.input`
  width: 100%;
  border-radius: 1rem;
  height: 2.5rem;
  text-align: center;
`;

const ScreenContainer = styled.div`
  display: flex;
  height: 90%;
`;

const SideScreenContainer = styled.div`
  height: 100%;
  width: 30%;
  background-color: #fafafa;
`;

const MainScreenContainer = styled.div`
  height: 100%;
  width: 70%;
`;

const SideSectionWrapper = styled.button`
  height: 2rem;
  width: 80%;
  background-color: #fefefe;
  margin: 2rem;
  display: flex;
  align-items: center;
`;

const SectionIcon = styled.div`
  width: 10%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const SectionName = styled.div`
  display: flex;
  width: 90%;
`;

const MainTitleContainer = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 2rem;
`;

const AddTaskContainer = styled.form`
  width: 50%;
  padding 1rem;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  display: flex;
`;

const Home = ({ screenTitle }) => {
  // unfiltered tasks
  const [tasks, setTasks] = useState(test_tasks_1);

  // screen name hooks
  const [sideScreenName, setSideScreenName] = useState("");

  // list type (inbox, star, ...) hook
  const [listType, setListType] = useState("inbox");
  // clears search box upon click
  const listTypeHandler = (e) => {
    setListType(e);
    setSearch("");
  };

  //this has to add date
  const addTask = (task) => {
    if (task.title === "" || /^\s*$/.test(task.title)) {
      console.log("Invalid task");
      return;
    }

    const newTasks = [task, ...tasks];
    setTasks(newTasks);
    console.log(tasks);
    return;
  };

  const completeTask = (key) => {
    alert("Completing Task");
    console.log(tasks);
    const newTasks = tasks.map((task) => task.key !== key);
    console.log(newTasks);
    // setTasks(newTasks);
  };

  // search related
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Container>
        <TopNavContainer>
          <TopLogoContainer>
            <RiCalendarCheckFill className="h-8 w-8" />
          </TopLogoContainer>
          <TopTitleContainer>Efficiently App</TopTitleContainer>
          <TopSearchContainer>
            <TopSearchForm>
              <TopSearchInput
                type="search"
                placeholder="Search Efficiently"
                onChange={handleSearch}
                value={search}
              />
            </TopSearchForm>
          </TopSearchContainer>
        </TopNavContainer>
        <ScreenContainer>
          <SideScreenContainer>
            {sideScreenName}
            <SideSectionWrapper onClick={() => listTypeHandler("inbox")}>
              <SectionIcon>
                <RiInboxFill />
              </SectionIcon>
              <SectionName>Inbox</SectionName>
            </SideSectionWrapper>
            <SideSectionWrapper onClick={() => listTypeHandler("star")}>
              <SectionIcon>
                <RiStarSFill />
              </SectionIcon>
              <SectionName>Star</SectionName>
            </SideSectionWrapper>
            <SideSectionWrapper onClick={() => listTypeHandler("upcoming")}>
              <SectionIcon>
                <RiCalendarTodoFill />
              </SectionIcon>
              <SectionName>Upcoming</SectionName>
            </SideSectionWrapper>
            <SideSectionWrapper onClick={() => listTypeHandler("archive")}>
              <SectionIcon>
                <RiArchiveFill />
              </SectionIcon>
              <SectionName>Archive</SectionName>
            </SideSectionWrapper>
          </SideScreenContainer>
          <MainScreenContainer>
            <MainTitleContainer>{listType.toUpperCase()}</MainTitleContainer>

            <TaskList
              tasks={filteredTasks}
              listType={listType}
              completeTask={completeTask}
            />

            <AddTaskContainer>
              <TaskInput onSubmit={addTask} />
            </AddTaskContainer>
          </MainScreenContainer>
        </ScreenContainer>
      </Container>
    </>
  );
};

export default Home;
