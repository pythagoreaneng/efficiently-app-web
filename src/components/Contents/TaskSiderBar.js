import { setDay } from "date-fns";
import React, { useState, useContext, useEffect } from "react";
import {
  RiInboxFill,
  RiStarSFill,
  RiCalendarTodoFill,
  RiArchiveFill,
  RiSearchLine,
  RiSunFill,
  RiMoonFill,
} from "react-icons/ri";
import { TaskContext } from "../../contexts/TaskContext";

import { NavCard } from "../Body";

const TaskSiderBar = () => {
  const { inboxCount, todayCount, starCount, upcomingCount, archiveCount } =
    useContext(TaskContext);
  // todo: move to taskContext
  var today = new Date();
  var time = today.getHours();

  // this should be dayTime, setDayTime and move up to TaskContext
  var isDay;
  if (time > 4 && time < 19) {
    isDay = true;
  } else {
    isDay = false;
  }

  return (
    <>
      <NavCard icon={<RiInboxFill />} type={"inbox"} count={inboxCount} />
      {isDay ? (
        <NavCard icon={<RiSunFill />} type={"today"} count={todayCount} />
      ) : (
        <NavCard icon={<RiMoonFill />} type={"today"} count={todayCount} />
      )}

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
