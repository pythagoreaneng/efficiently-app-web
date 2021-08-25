import React, { useContext } from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { TaskContext } from "../../contexts/TaskContext";
import { HeaderCenterContainer } from "./styles";

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

const Search = () => {
  const { searchBarRef, handleSearch, search } = useContext(TaskContext);
  const { history } = useAuth();

  const handleSearchClick = () => {
    history.push("/search");
  };

  return (
    <HeaderCenterContainer>
      <SearchInputContainer
        type="search"
        placeholder="Search(Press alt or  ⌥)"
        onChange={handleSearch}
        value={search}
        ref={searchBarRef}
        onClick={handleSearchClick}
      />
    </HeaderCenterContainer>
  );
};

export default Search;
