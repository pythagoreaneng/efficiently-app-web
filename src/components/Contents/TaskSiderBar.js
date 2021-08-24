import React, { useContext } from "react";
import {
  RiInboxFill,
  RiStarSFill,
  RiCalendarTodoFill,
  RiArchiveFill,
  RiSearchLine,
} from "react-icons/ri";
import { NavCard } from "../Body";

const TaskSiderBar = () => {
  return (
    <div>
      <NavCard icon={<RiInboxFill />} type={"inbox"} />
      <NavCard icon={<RiCalendarTodoFill />} type={"today"} />
      <NavCard icon={<RiStarSFill />} type={"star"} />
      <NavCard icon={<RiArchiveFill />} type={"archive"} />
      <NavCard icon={<RiSearchLine />} type={"search"} />
    </div>
  );
};

export default TaskSiderBar;
