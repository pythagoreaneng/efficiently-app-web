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
      <NavCard
        icon={<RiInboxFill />}
        link={
          <NavLink to="/profile" activeStyle={{ fontWeight: "bold" }}>
            Profile
          </NavLink>
        }
      />

      <NavCard
        icon={<RiLightbulbFlashFill />}
        link={
          <NavLink to="/themes" activeStyle={{ fontWeight: "bold" }}>
            Theme
          </NavLink>
        }
      />

      <NavCard
        icon={<RiInboxFill />}
        link={
          <NavLink to="/security" activeStyle={{ fontWeight: "bold" }}>
            Security
          </NavLink>
        }
      />
      <NavCard
        icon={<RiInboxFill />}
        link={
          <NavLink to="/upgrade" activeStyle={{ fontWeight: "bold" }}>
            Efficiently+
          </NavLink>
        }
      />
    </>
  );
};

export default SettingSideBar;
