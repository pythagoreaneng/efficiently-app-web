import React from "react";
import TaskScreen from "../screens/TaskScreen";

const Archive = ({
  tasks,
  setTasks,
  sideScreenName,
  sectionType,
  setSectionType,
}) => {
  return (
    <>
      <TaskScreen
        tasks={tasks}
        setTasks={setTasks}
        sideScreenName={sideScreenName}
        sectionType={sectionType}
        setSectionType={setSectionType}
      />
    </>
  );
};

export default Archive;
