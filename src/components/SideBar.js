import React, { useContext } from "react";
import {
  RiInboxFill,
  RiStarSFill,
  RiCalendarTodoFill,
  RiArchiveFill,
  RiLightbulbFlashFill,
  RiSearchLine,
} from "react-icons/ri";
import { SectionIcon, SectionName, SideSectionWrapper } from "../pages/styles";
import { NavLink } from "react-router-dom";
import { TaskContext } from "../providers/TaskContext";

const SideBar = () => {
  const {
    inboxRef,
    starRef,
    archiveRef,
    upcomingRef,
    todayRef,
    searchRef,
    sectionTypeHandler,
  } = useContext(TaskContext);
  return (
    <>
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
      <SideSectionWrapper>
        <SectionIcon>
          <RiSearchLine />
        </SectionIcon>
        <SectionName>
          <NavLink
            to="/search"
            activeStyle={{ fontWeight: "bold" }}
            onClick={() => sectionTypeHandler("search")}
            ref={searchRef}
          >
            Search
          </NavLink>
        </SectionName>
      </SideSectionWrapper>
    </>
  );
};

export default SideBar;
