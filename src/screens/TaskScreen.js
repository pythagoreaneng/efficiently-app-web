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

  const removeTask = (key) => {
    let newTasks = [...tasks].filter((task) => task.key !== key);
    setTasks(newTasks);
  };

  const editTask = (taskId, newTitle) => {
    // if (!newTitle.title || /^\s*$/.test(newTitle.text)) {
    //   return;
    // }

    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? newTitle : task))
    );
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

  // search related
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const searchRef = useRef(null);
  const inboxRef = useRef(null);
  const starRef = useRef(null);
  const archiveRef = useRef(null);
  const upcomingRef = useRef(null);
  const todayRef = useRef(null);

  const inputRef = useRef(null);

  const inputKeyDown = (e) => {
    console.log(e);

    if (e.key === "Alt") {
      console.log("focus on search");
      inputRef.current.focus();
    } else if (e.key === "ArrowUp") {
      console.log("Control");
      if (window.location.pathname === "/") {
        console.log("if inboxRef");
        archiveRef.current.click();
      } else if (window.location.pathname === "/today") {
        console.log("if todayRef");
        inboxRef.current.click();
      } else if (window.location.pathname === "/star") {
        console.log("if todayRef");
        todayRef.current.click();
      } else if (window.location.pathname === "/upcoming") {
        console.log("if todayRef");
        starRef.current.click();
      } else if (window.location.pathname === "/archive") {
        console.log("if todayRef");
        upcomingRef.current.click();
      }
    } else if (e.key === "ArrowDown") {
      console.log("Control");
      if (window.location.pathname === "/") {
        console.log("if inboxRef");
        todayRef.current.click();
      } else if (window.location.pathname === "/today") {
        console.log("if todayRef");
        starRef.current.click();
      } else if (window.location.pathname === "/star") {
        console.log("if todayRef");
        upcomingRef.current.click();
      } else if (window.location.pathname === "/upcoming") {
        console.log("if todayRef");
        archiveRef.current.click();
      } else if (window.location.pathname === "/archive") {
        console.log("if todayRef");
        inboxRef.current.click();
      }
    }
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
              />
            </SectionTasksContainer>

            <TaskInputContainer>
              <TaskInput
                onSubmit={addTask}
                searchRef={searchRef}
                inputRef={inputRef}
                inboxRef={inboxRef}
                todayRef={todayRef}
                starRef={starRef}
                upcomingRef={upcomingRef}
                archiveRef={archiveRef}
              />
            </TaskInputContainer>
          </MainScreenContainer>
        </ScreenContainer>
      </Container>
    </>
  );
};

export default TaskScreen;
