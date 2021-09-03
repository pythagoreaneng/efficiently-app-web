import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineFormatPainter, AiOutlineLock } from "react-icons/ai";
import { NavCard } from "../Body";

const SettingSideBar = () => {
  return (
    <>
      <NavCard icon={<CgProfile />} type={"profile"} />
      <NavCard icon={<AiOutlineFormatPainter />} type={"customize"} />
      <NavCard icon={<AiOutlineLock />} type={"security"} />
    </>
  );
};

export default SettingSideBar;
