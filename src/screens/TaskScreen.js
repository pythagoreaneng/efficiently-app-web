import React, { useState, useRef } from "react";
import {
  RiCalendarCheckFill,
  RiInboxFill,
  RiStarSFill,
  RiCalendarTodoFill,
  RiArchiveFill,
} from "react-icons/ri";
import SectionTasks from "../components/SectionTasks";
import TaskInput from "../components/TaskInput";
import {
  Container,
  TopNavContainer,
  TopLogoContainer,
  TopTitleWrapper,
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
  TaskInputContainer,
} from "../pages/styles";
import { NavLink } from "react-router-dom";

// TaskScreen is an interface which serves all the ToDo functionality

const TaskScreen = ({
  tasks,
  setTasks,
  sideScreenName,
  sectionType,
  setSectionType,
}) => {
  // clears search box upon click
  const sectionTypeHandler = (e) => {
    setSectionType(e);
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
          <TopTitleContainer>
            <NavLink exact to="/">
              <TopTitleWrapper>
                <RiCalendarCheckFill className="h-8 w-8" />
                <div>Efficiently App</div>
              </TopTitleWrapper>
            </NavLink>
          </TopTitleContainer>
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
            <SideSectionWrapper>
              <SectionIcon>
                <RiInboxFill />
              </SectionIcon>
              <SectionName>
                <NavLink
                  exact
                  to="/"
                  activeStyle={{ fontWeight: "bold" }}
                  onClick={() => sectionTypeHandler("inbox")}
                >
                  Inbox
                </NavLink>
              </SectionName>
            </SideSectionWrapper>
            <SideSectionWrapper>
              <SectionIcon>
                <RiStarSFill />
              </SectionIcon>

              <SectionName>
                <NavLink
                  to="/star"
                  activeStyle={{ fontWeight: "bold" }}
                  onClick={() => sectionTypeHandler("star")}
                >
                  Star
                </NavLink>
              </SectionName>
            </SideSectionWrapper>
            <SideSectionWrapper>
              <SectionIcon>
                <RiCalendarTodoFill />
              </SectionIcon>
              <SectionName>
                <NavLink
                  to="/upcoming"
                  activeStyle={{ fontWeight: "bold" }}
                  onClick={() => sectionTypeHandler("upcoming")}
                >
                  Upcoming
                </NavLink>
              </SectionName>
            </SideSectionWrapper>
            <SideSectionWrapper>
              <SectionIcon>
                <RiArchiveFill />
              </SectionIcon>
              <SectionName>
                <NavLink
                  to="/archive"
                  activeStyle={{ fontWeight: "bold" }}
                  onClick={() => sectionTypeHandler("archive")}
                >
                  Archive
                </NavLink>
              </SectionName>
            </SideSectionWrapper>
          </SideScreenContainer>
          <MainScreenContainer>
            <SectionTasks
              tasks={filteredTasks}
              sectionType={sectionType}
              completeTask={completeTask}
            />

            <TaskInputContainer>
              <TaskInput
                onSubmit={addTask}
                searchRef={searchRef}
                inputRef={inputRef}
              />
            </TaskInputContainer>
          </MainScreenContainer>
        </ScreenContainer>
      </Container>
    </>
  );
};

export default TaskScreen;
