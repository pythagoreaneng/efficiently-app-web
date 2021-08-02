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

const TaskScreen = () => {
  const {
    tasks,
    setTasks,
    sideScreenName,
    sectionType,
    inboxRef,
    archiveRef,
    searchRef,
    inputRef,
    searchBarRef,
    handleSearch,
    search,
    todayDate,
    completeTask,
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

  const switchStar = (key) => {
    let newTasks = tasks.map((task) => {
      if (task.key === key) {
        task.star = !task.star;
      }
      return task;
    });
    setTasks(newTasks);
  };

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

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Container>
        <TopNavContainer>
          <TopTitleContainer>
            <Header />
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
            <SideScreen />
          </SideScreenContainer>
          <MainScreenContainer>
            <SectionTasksContainer>
              <SectionTasks
                tasks={filteredTasks}
                sectionType={sectionType}
                completeTask={completeTask}
                removeTask={removeTask}
                editTask={editTask}
                switchStar={switchStar}
                todayDate={todayDate}
              />
            </SectionTasksContainer>

            <TaskInputContainer>
              <TaskInput onSubmit={addTask} />
            </TaskInputContainer>
          </MainScreenContainer>
        </ScreenContainer>
      </Container>
    </>
  );
};

export default TaskScreen;
