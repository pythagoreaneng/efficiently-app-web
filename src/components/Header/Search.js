import { set } from "date-fns";
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
  const { handleSearch, search, navOpen, setNavOpen } = useContext(TaskContext);
  const { history } = useAuth();

  const handleSearchClick = () => {
    if (window.innerWidth <= 845 && navOpen) {
      setNavOpen(!navOpen);
    }
    history.push("/search");
  };

  return (
    <HeaderCenterContainer>
      <SearchInputContainer
        type="search"
        placeholder="Search(Press alt or  ⌥)"
        onChange={handleSearch}
        value={search}
        onClick={handleSearchClick}
      />
    </HeaderCenterContainer>
  );
};

export default Search;
