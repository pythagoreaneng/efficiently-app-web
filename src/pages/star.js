import React from "react";
import TaskScreen from "../components/TaskScreen";

const Star = ({ tasks, setTasks, sideScreenName, listType, setListType }) => {
  return (
    <>
      <TaskScreen
        tasks={tasks}
        setTasks={setTasks}
        sideScreenName={sideScreenName}
        listType={listType}
        setListType={setListType}
      />
    </>
  );
};

export default Star;
