import React, { useState, useRef, useEffect } from "react";
import {
  RiCalendarCheckFill,
  RiInboxFill,
  RiStarSFill,
  RiCalendarTodoFill,
  RiArchiveFill,
} from "react-icons/ri";
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
} from "../pages/styles";
import { NavLink } from "react-router-dom";

const TaskScreen = ({
  tasks,
  setTasks,
  sideScreenName,
  listType,
  setListType,
}) => {
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
              <SectionName>
                <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
                  Inbox
                </NavLink>
              </SectionName>
            </SideSectionWrapper>
            <SideSectionWrapper onClick={() => listTypeHandler("star")}>
              <SectionIcon>
                <RiStarSFill />
              </SectionIcon>

              <SectionName>
                <NavLink to="/star" activeStyle={{ fontWeight: "bold" }}>
                  Star
                </NavLink>
              </SectionName>
            </SideSectionWrapper>
            <SideSectionWrapper onClick={() => listTypeHandler("upcoming")}>
              <SectionIcon>
                <RiCalendarTodoFill />
              </SectionIcon>
              <SectionName>
                <NavLink to="/upcoming" activeStyle={{ fontWeight: "bold" }}>
                  Upcoming
                </NavLink>
              </SectionName>
            </SideSectionWrapper>
            <SideSectionWrapper onClick={() => listTypeHandler("archive")}>
              <SectionIcon>
                <RiArchiveFill />
              </SectionIcon>
              <SectionName>
                <NavLink to="/archive" activeStyle={{ fontWeight: "bold" }}>
                  Archive
                </NavLink>
              </SectionName>
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

export default TaskScreen;
