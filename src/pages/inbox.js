import React from "react";
import TaskList from "../components/TaskList";

const test = {
  "taskList":
  [{
      "key": 1,
      "title" : "sample title 1",
      "task" : "sample task 1",
      "completed": true,
      "star": true,
      "created-date":  "07-11-2021",
      "due-date": "07-11-2021"
  },
  {
      "key": 2,
      "title" : "sample title 2",
      "task" : "sample task 2",
      "completed": false,
      "star": true,
      "created-date":  "07-11-2021",
      "due-date": "07-11-2021"
  },
  {
      "key": 3,
      "title" : "sample title 3",
      "task" : "sample task 3",
      "completed": false,
      "star": true,
      "created-date":  "07-11-2021",
      "due-date": "07-11-2021",
  },
  {
      "key": 4,
      "title" : "sample title 4",
      "task" : "sample task 4",
      "completed": false,
      "star": true,
      "created-date":  "07-11-2021",
      "due-date": "07-11-2021"
  },
  {
      "key": 5,
      "title" : "sample title 5",
      "task" : "sample task 5",
      "completed": false,
      "star": true,
      "created-date":  "07-24-2021",
      "due-date": "07-24-2021" 
  }     
  ]
}
const inbox = () => {
  return (
    <>
      <TaskList />
    </>
  );
};

export default inbox;
