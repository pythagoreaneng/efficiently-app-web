import React, { useContext } from "react";
import styled from "styled-components";
import { TaskContext } from "../../contexts/TaskContext";
import { HeaderCenterContainer } from "./styles";

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
  const SearchInputContainer = styled.input`
    width: 80%;
    height: 2.5rem;
    border: 0.1rem solid #efefef;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 0.9rem;
    margin: 0 1rem 0 1rem;
    text-align: center;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 2rem #94d9ff;
    }
  `;

  return (
    <HeaderCenterContainer>
      <SearchInputContainer
        type="search"
        placeholder="Search(Press alt or  ⌥)"
        onChange={handleSearch}
        value={search}
        ref={searchBarRef}
        onKeyDown={inSearchBarKeyDown}
        onClick={handleSearchBarClick}
      />
    </HeaderCenterContainer>
  );
};

export default Search;
