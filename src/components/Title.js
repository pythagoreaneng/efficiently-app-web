import React from "react";
import { RiCalendarCheckFill } from "react-icons/ri";
import { TopTitleWrapper } from "../pages/styles";
import { NavLink } from "react-router-dom";

const Title = () => {
  return (
    <div>
      <NavLink exact to="/">
        <TopTitleWrapper>
          <RiCalendarCheckFill className="h-8 w-8" />
          <div>Efficiently App</div>
        </TopTitleWrapper>
      </NavLink>
    </div>
  );
};

export default Title;
