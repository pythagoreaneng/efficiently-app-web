import React, { useContext } from "react";
import {
  RiInboxFill,
  RiStarSFill,
  RiCalendarTodoFill,
  RiLightbulbFlashFill,
} from "react-icons/ri";
import { NavCard } from "../Body";
import { NavLink } from "react-router-dom";
import { TaskContext } from "../../contexts/TaskContext";

const SettingSideBar = () => {
  return (
    <>
      <NavCard icon={<RiInboxFill />} type={"profile"} />
      <NavCard icon={<RiLightbulbFlashFill />} type={"themes"} />
      <NavCard icon={<RiLightbulbFlashFill />} type={"security"} />
      <NavCard icon={<RiLightbulbFlashFill />} type={"upgrade"} />
    </>
  );
};

export default SettingSideBar;
