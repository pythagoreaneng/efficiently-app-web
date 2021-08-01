import React, { useState, useRef, useContext, useEffect } from "react";
import {
  RiCalendarCheckFill,
  RiInboxFill,
  RiStarSFill,
  RiCalendarTodoFill,
  RiArchiveFill,
  RiLightbulbFlashFill,
  RiSearchLine,
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
import moment from "moment";
import { TaskContext } from "../providers/TaskContext";

var todayDate = moment().format("YYYY-MM-D");

const TaskScreen = () => {
  const {
    tasks,
    setTasks,
    sideScreenName,
    setSideScreenName,
    sectionType,
    setSectionType,
  } = useContext(TaskContext);
  console.log(sectionType);


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

  const removeTask = (key) => {
    let newTasks = [...tasks].filter((task) => task.key !== key);
    setTasks(newTasks);
  };

  const editTask = (id, taskTitle) => {
    let newTasks = tasks.map((task) => { // map through tasks
      if (task.key === id) { // find key
        task.title = taskTitle; // update title
      }
      return task;
    });
    setTasks(newTasks); // update Tasks
  };

  const completeTask = (key) => {
    let newTasks = tasks.map((task) => {
      if (task.key === key) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(newTasks);
  };

  const switchStar = (key) => {
    let newTasks = tasks.map((task) => {
      if (task.key === key) {
        task.star = !task.star;
      }
      return task;
    });
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

  const searchBarRef = useRef(null);
  const inboxRef = useRef(null);
  const starRef = useRef(null);
  const archiveRef = useRef(null);
  const upcomingRef = useRef(null);
  const todayRef = useRef(null);
  const searchRef = useRef(null);

  const inputRef = useRef(null);

  const inSearchBarKeyDown = (e) => {
    console.log(e);

    if (e.key === "Alt") {
      if (window.location.pathname === "/search") {
        inboxRef.current.click();
      }
      console.log("focus on search in inSearchBarKeyDown");
      inputRef.current.focus();
    } else if (e.key === "ArrowUp") {
      console.log("arrow up(input down!)");
      archiveRef.current.click();
    } else if (e.key === "ArrowDown") {
      console.log("Arrow down(inSearchBarKeyDown)");
      inputRef.current.focus();
      inboxRef.current.click();
    }
  };

  const handleSearchBarClick = () => {
    searchRef.current.click();
  };

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
                ref={searchBarRef}
                onKeyDown={inSearchBarKeyDown}
                onClick={handleSearchBarClick}
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
                  ref={inboxRef}
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
                  ref={todayRef}
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
                  ref={starRef}
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
                  ref={upcomingRef}
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
                  ref={archiveRef}
                >
                  Archive
                </NavLink>
              </SectionName>
            </SideSectionWrapper>
            <SideSectionWrapper>
              <SectionIcon>
                <RiSearchLine />
              </SectionIcon>
              <SectionName>
                <NavLink
                  to="/search"
                  activeStyle={{ fontWeight: "bold" }}
                  onClick={() => sectionTypeHandler("search")}
                  ref={searchRef}
                >
                  Search
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
                editTask={editTask}
                switchStar={switchStar}
                todayDate={todayDate}
              />
            </SectionTasksContainer>

            <TaskInputContainer>
              <TaskInput
                onSubmit={addTask}
                todayDate={todayDate}
                searchBarRef={searchBarRef}
                inputRef={inputRef}
                inboxRef={inboxRef}
                todayRef={todayRef}
                starRef={starRef}
                upcomingRef={upcomingRef}
                archiveRef={archiveRef}
                searchRef={searchRef}
              />
            </TaskInputContainer>
          </MainScreenContainer>
        </ScreenContainer>
      </Container>
    </>
  );
};

export default TaskScreen;
