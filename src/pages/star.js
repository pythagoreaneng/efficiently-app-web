import React, { useContext } from "react";
import TasksContext from "../providers/TasksContext";
import TaskScreen from "../screens/TaskScreen";

const Star = ({
  tasks,
  setTasks,
  sideScreenName,
  sectionType,
  setSectionType,
  today,
}) => {
  const msg = useContext(TasksContext);
  return (
    <>
      {msg}
      <TaskScreen
        sideScreenName={sideScreenName}
        sectionType={sectionType}
        setSectionType={setSectionType}
        today={today}
      />
    </>
  );
};

export default Star;
