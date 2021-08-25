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
  const { inboxCount, todayCount, starCount, archiveCount } =
    useContext(TaskContext);
  return (
    <>
      <NavCard icon={<RiInboxFill />} type={"inbox"} count={inboxCount} />
      <NavCard
        icon={<RiCalendarTodoFill />}
        type={"today"}
        count={todayCount}
      />
      <NavCard icon={<RiStarSFill />} type={"star"} count={starCount} />
      <NavCard icon={<RiArchiveFill />} type={"archive"} count={archiveCount} />
      <NavCard icon={<RiSearchLine />} type={"search"} />
    </>
  );
};

export default TaskSiderBar;
