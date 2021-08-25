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
  const {
    inboxCount,
    todayCount,
    starCount,
    archiveCount,
    inboxRef,
    todayRef,
    starRef,
    archiveRef,
    searchRef,
  } = useContext(TaskContext);
  return (
    <>
      <NavCard
        icon={<RiInboxFill />}
        type={"inbox"}
        count={inboxCount}
        ref={inboxRef}
      />
      <NavCard
        icon={<RiCalendarTodoFill />}
        type={"today"}
        count={todayCount}
        ref={todayRef}
      />
      <NavCard
        icon={<RiStarSFill />}
        type={"star"}
        count={starCount}
        ref={starRef}
      />
      <NavCard
        icon={<RiArchiveFill />}
        type={"archive"}
        count={archiveCount}
        ref={archiveRef}
      />
      <NavCard icon={<RiSearchLine />} type={"search"} ref={searchRef} />
    </>
  );
};

export default TaskSiderBar;
