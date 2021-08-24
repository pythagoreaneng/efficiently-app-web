import React, { useContext } from "react";
import {
  RiInboxFill,
  RiStarSFill,
  RiCalendarTodoFill,
  RiArchiveFill,
  RiLightbulbFlashFill,
  RiSearchLine,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { TaskContext } from "../../contexts/TaskContext";
import {
  SectionIcon,
  SectionName,
  SideSectionWrapper,
} from "../../pages/styles";

const SettingSideBar = () => {
  const { inboxRef, starRef, archiveRef, upcomingRef, todayRef, searchRef } =
    useContext(TaskContext);
  return (
    <div>
      <SideSectionWrapper>
        <SectionIcon>
          <RiInboxFill />
        </SectionIcon>
        <SectionName>
          <NavLink to="/profile" activeStyle={{ fontWeight: "bold" }}>
            Profile
          </NavLink>
        </SectionName>
      </SideSectionWrapper>
      <SideSectionWrapper>
        <SectionIcon>
          <RiLightbulbFlashFill />
        </SectionIcon>

        <SectionName>
          <NavLink to="/themes" activeStyle={{ fontWeight: "bold" }}>
            Theme
          </NavLink>
        </SectionName>
      </SideSectionWrapper>
      <SideSectionWrapper>
        <SectionIcon>
          <RiStarSFill />
        </SectionIcon>

        <SectionName>
          <NavLink to="/security" activeStyle={{ fontWeight: "bold" }}>
            Security
          </NavLink>
        </SectionName>
      </SideSectionWrapper>
      <SideSectionWrapper>
        <SectionIcon>
          <RiCalendarTodoFill />
        </SectionIcon>
        <SectionName>
          <NavLink to="/upgrade" activeStyle={{ fontWeight: "bold" }}>
            Efficiently +
          </NavLink>
        </SectionName>
      </SideSectionWrapper>
    </div>
  );
};

export default SettingSideBar;
