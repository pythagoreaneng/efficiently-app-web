import React from "react";

const Task = ({text,date}) => {
  return (
  <div className="border-2">
    <p>{text}</p>
    <p>{date}</p>
  </div>
  );
};

export default Task;
