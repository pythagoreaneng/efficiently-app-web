import React from "react";
import TaskScreen from "../screens/TaskScreen";

const Archive = ({
  setTasks,
  sideScreenName,
  sectionType,
  setSectionType,
  today,
}) => {
  return (
    <>
      <TaskScreen
        sideScreenName={sideScreenName}
        sectionType={sectionType}
        setSectionType={setSectionType}
        today={today}
      />
    </>
  );
};

export default Archive;
