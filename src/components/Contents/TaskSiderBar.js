import React, { useContext } from "react";
import {
  RiInboxFill,
  RiStarSFill,
  RiCalendarTodoFill,
  RiArchiveFill,
  RiSearchLine,
} from "react-icons/ri";
import { TaskContext } from "../../contexts/TaskContext";

import { NavCard } from "../Body";

const TaskSiderBar = () => {
  const { searchRef } = useContext(TaskContext);
  return (
    <>
      <NavCard icon={<RiInboxFill />} type={"inbox"} />
      <NavCard icon={<RiCalendarTodoFill />} type={"today"} />
      <NavCard icon={<RiStarSFill />} type={"star"} />
      <NavCard icon={<RiArchiveFill />} type={"archive"} />
      <NavCard icon={<RiSearchLine />} type={"search"} ref={searchRef} />
    </>
  );
};

export default TaskSiderBar;
