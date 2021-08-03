import React, { useContext } from "react";
import { TopSearchForm, TopSearchInput } from "../pages/styles";
import { TaskContext } from "../contexts/TaskContext";

const Search = () => {
  const {
    inboxRef,
    archiveRef,
    searchRef,
    inputRef,
    searchBarRef,
    handleSearch,
    search,
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
  );
};

export default Search;
