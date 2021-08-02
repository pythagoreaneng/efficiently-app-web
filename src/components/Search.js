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

const Search = () => {
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
      <TopSearchInput
        type="search"
        placeholder="Search(Press alt or  ⌥)"
        onChange={handleSearch}
        value={search}
        ref={searchBarRef}
        onKeyDown={inSearchBarKeyDown}
        onClick={handleSearchBarClick}
      />
    </>
  );
};

export default Search;
