import React from "react";
import TaskScreen from "../screens/TaskScreen";

const Upcoming = ({
  tasks,
  setTasks,
  sideScreenName,
  sectionType,
  setSectionType,
  today,
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

export default Upcoming;
