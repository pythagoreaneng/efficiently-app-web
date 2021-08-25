import React, { useContext } from "react";
import { Search, Header, HamburgerMenu } from "../Header";
import { Body } from "../Body";
import { TaskSideBar, TaskContent } from "../Contents";
import { TaskContext } from "../../contexts/TaskContext";

// Filter by component example: takes {children}(ie Today) here

const TaskLayout = () => {
  const { theme } = useContext(TaskContext);
  return (
    <>
      <Header
        left={<HamburgerMenu />}
        center={<Search />}
        right={<></>}
        theme={theme}
      />
      <Body sidebar={<TaskSideBar />} content={<TaskContent />} />
    </>
  );
};

export default TaskLayout;
