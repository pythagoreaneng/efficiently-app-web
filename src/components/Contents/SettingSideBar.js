import React, { useContext } from "react";
import { RiInboxFill, RiLightbulbFlashFill } from "react-icons/ri";
import { NavCard } from "../Body";

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
