import React, { useContext, useEffect, useRef, useState } from "react";
import { RiCloseFill, RiStarSFill, RiStarSLine } from "react-icons/ri";
import styled from "styled-components";

import moment from "moment";
import { TaskContext } from "../contexts/TaskContext";

const Checkbox = styled.input`
  margin: 1rem;
`;

const TaskContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0.1rem solid #f1f1f1;
  border-radius: 0.5rem;
  background-color: #efefef;
  margin: 1.5rem 3rem;
  padding: 0.1rem;
  position: relative;
`;

const OptionContainer = styled.button`
  position: absolute;
  right: 1rem;
  display: flex;
`;

const EditInput = styled.input`
  background-color: #efefef;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const TaskTitleContainer = styled.div`
  width: 70%;
`;

const DaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.6em;
`;

// single task card component
const Task = ({ title, star, dueDate, scheduleDate, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState(title);
  const handleEdit = (e) => {
    setEdit(e.target.value);
  };

  const { completeTask, removeTask, switchStar } = useContext(TaskContext);

  const editRef = useRef(null);

  const handleOnClickEdit = () => {
    setIsEdit(true);
  };

  useEffect(() => {
    if (isEdit) {
      editRef.current.focus();
    }
  }, [isEdit]);

  const editKeyDown = (e) => {
    if (e.key === "Enter") {
      if (edit === "" || /^\s*$/.test(edit)) {
        console.log("Invalid edit");
        return;
      }
      console.log("setEdit triggered");
      setEdit(edit);
      setIsEdit(false);
    }
  };

  var untilScheduleDate = moment(scheduleDate).fromNow();
  var untilDueDate = moment(dueDate).fromNow();

  return (
    <TaskContainer key={id}>
      <Checkbox type="Checkbox" onClick={() => completeTask(id)} />
      <TaskTitleContainer onClick={handleOnClickEdit}>
        {isEdit ? (
          <EditInput
            placeholder="Press enter to confirm edit"
            value={edit}
            onChange={handleEdit}
            onKeyDown={editKeyDown}
            ref={editRef}
          />
        ) : (
          <div>{edit}</div>
        )}
      </TaskTitleContainer>
      <DaysContainer>
        <p>{scheduleDate && <span>Scheduled {untilScheduleDate}</span>}</p>
        <p>{dueDate && <span>due {untilDueDate}</span>}</p>
      </DaysContainer>

      <OptionContainer>
        {star ? (
          <RiStarSFill onClick={() => switchStar(id)} />
        ) : (
          <RiStarSLine onClick={() => switchStar(id)} />
        )}
        <RiCloseFill onClick={() => removeTask(id)} />
      </OptionContainer>
    </TaskContainer>
  );
};

export default Task;
