import { setDay } from "date-fns";
import React, { useState, useContext } from "react";
import {
  RiInboxFill,
  RiStarSFill,
  RiCalendarTodoFill,
  RiArchiveFill,
  RiSearchLine,
  RiSunFill,
} from "react-icons/ri";
import { TaskContext } from "../../contexts/TaskContext";

import { NavCard } from "../Body";

const TaskSiderBar = () => {
  const { inboxCount, todayCount, starCount, upcomingCount, archiveCount } =
    useContext(TaskContext);
  // todo: move to taskContext
  const [dayTime, setDayTime] = useState();
  return (
    <>
      <NavCard icon={<RiInboxFill />} type={"inbox"} count={inboxCount} />
      <NavCard icon={<RiSunFill />} type={"today"} count={todayCount} />
      <NavCard icon={<RiStarSFill />} type={"star"} count={starCount} />
      <NavCard
        icon={<RiCalendarTodoFill />}
        type={"upcoming"}
        count={upcomingCount}
      />
      <NavCard icon={<RiArchiveFill />} type={"archive"} count={archiveCount} />
      <NavCard icon={<RiSearchLine />} type={"search"} />
    </>
  );
};

export default TaskSiderBar;
