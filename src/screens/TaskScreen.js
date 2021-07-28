import React, { useState, useRef } from "react";
import {
  RiCalendarCheckFill,
  RiInboxFill,
  RiStarSFill,
  RiCalendarTodoFill,
  RiArchiveFill,
  RiLightbulbFlashFill,
} from "react-icons/ri";
import SectionTasks from "../components/SectionTasks";
import TaskInput from "../components/TaskInput";
import {
  Container,
  TopNavContainer,
  TaskInputContainer,
  TopTitleWrapper,
  TopTitleContainer,
  TopSearchContainer,
  TopSearchForm,
  TopSearchInput,
  ScreenContainer,
  SectionTasksContainer,
  SectionIcon,
  SectionName,
  SideScreenContainer,
  SideSectionWrapper,
  MainScreenContainer,
} from "../pages/styles";
import { NavLink } from "react-router-dom";

// TaskScreen is an interface which serves all the ToDo functionality

var todayDate = new Date();
var dd = String(todayDate.getDate()).padStart(2, "0");
var mm = String(todayDate.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = todayDate.getFullYear();

todayDate = mm + "/" + dd + "/" + yyyy;

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
    console.log("tasks:", tasks);
    return;
  };

  const completeTask = (key) => {
    let newTasks = tasks.map((task) => {
      console.log(key);
      if (key === task.key) {
        task.complete = !task.complete;
        console.log("task complete", task.complete);
      }
      return tasks;
    });
    console.log("Outside of completeTask");
    //setTasks(newTasks);
  };

  const removeTask = (key) => {
    const newTasks = [...tasks].filter((task) => task.key !== key);
    setTasks(newTasks);
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
                placeholder="Search(Press alt or  ⌥)"
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
                <RiLightbulbFlashFill />
              </SectionIcon>

              <SectionName>
                <NavLink
                  to="/today"
                  activeStyle={{ fontWeight: "bold" }}
                  onClick={() => sectionTypeHandler("today")}
                >
                  Today
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
            <SectionTasksContainer>
              <SectionTasks
                tasks={filteredTasks}
                sectionType={sectionType}
                completeTask={completeTask}
                todayDate={todayDate}
                removeTask={removeTask}
              />
            </SectionTasksContainer>

            <TaskInputContainer>
              <TaskInput
                onSubmit={addTask}
                searchRef={searchRef}
                inputRef={inputRef}
                todayDate={todayDate}
              />
            </TaskInputContainer>
          </MainScreenContainer>
        </ScreenContainer>
      </Container>
    </>
  );
};

export default TaskScreen;
