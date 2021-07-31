import React from "react";
import TaskScreen from "../screens/TaskScreen";

const Inbox = ({
  tasks,
  setTasks,
  sideScreenName,
  sectionType,
  setSectionType,
}) => {
  return (
    <>
      <TaskScreen
        sideScreenName={sideScreenName}
        sectionType={sectionType}
        setSectionType={setSectionType}
      />
    </>
  );
};

export default Inbox;
