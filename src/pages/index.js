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
import {
  Container,
  TopNavContainer,
  TopLogoContainer,
  TopTitleContainer,
  TopSearchContainer,
  TopSearchForm,
  TopSearchInput,
  ScreenContainer,
  SideScreenContainer,
  MainScreenContainer,
  SideSectionWrapper,
  SectionIcon,
  SectionName,
  MainTitleContainer,
  AddTaskContainer,
} from "./styles";

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

  const searchRef = useRef(null);

  const inputKeyDown = (e) => {
    console.log(e);
    if (e.key === "Alt") {
      console.log("focus on input");
      inputRef.current.focus();
    }
  };

  const inputRef = useRef(null);

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
                ref={searchRef}
                onKeyDown={inputKeyDown}
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
              <TaskInput
                onSubmit={addTask}
                searchRef={searchRef}
                inputRef={inputRef}
              />
            </AddTaskContainer>
          </MainScreenContainer>
        </ScreenContainer>
      </Container>
    </>
  );
};

export default Home;
