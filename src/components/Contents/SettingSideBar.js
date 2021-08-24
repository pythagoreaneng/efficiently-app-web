import React from "react";
import { CgProfile } from "react-icons/cg";
import { BiBoltCircle } from "react-icons/bi";
import { AiOutlineFormatPainter, AiOutlineLock } from "react-icons/ai";

import { NavCard } from "../Body";

const SettingSideBar = () => {
  return (
    <>
      <NavCard icon={<CgProfile />} type={"profile"} />
      <NavCard icon={<AiOutlineFormatPainter />} type={"themes"} />
      <NavCard icon={<AiOutlineLock />} type={"security"} />
      <NavCard icon={<BiBoltCircle />} type={"upgrade"} />
    </>
  );
};

export default SettingSideBar;
