import React from "react";
import { SearchContainer, TitleContainer } from "../pages/styles";
import Search from "./Search";
import Title from "./Title";

const Header = () => {
  return (
    <>
      <TitleContainer>
        <Title />
      </TitleContainer>
      <SearchContainer>
        <Search />
      </SearchContainer>
    </>
  );
};

export default Header;
