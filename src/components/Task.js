import React, { useEffect, useRef, useState, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { RiCloseFill, RiStarSFill, RiStarSLine } from "react-icons/ri";
import styled from "styled-components";
import useOutsideClick from "../Hooks/useOutsideClick";
import moment from "moment";

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
const Task = ({
  completed,
  title,
  completeTask,
  id,
  removeTask,
  star,
  switchStar,
  createdDate,
  dueDate,
  scheduleDate,
  todayDate,
}) => {
  const { editTask } = useContext(TaskContext);
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState(title);
  const handleEdit = (e) => {
    setEdit(e.target.value);
  };

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
    // stops edit when enter is hit in edit input.
    if (e.key === "Enter") {
      if (edit === "" || /^\s*$/.test(edit)) {
        // check input
        console.log("Invalid edit");
        return;
      }
      setEdit(edit); //change value of edit,
      setIsEdit(false); // set edit attribute to false,
      editTask(id, edit); // update the task globally.
      console.log(edit);
    }
  };

  //Issue: clicking anohter task when editing
  useOutsideClick(editRef, () => {
    // stops edit when clicked outside of edit input.
    if (edit === "") {
      // if left blank, delete task
      removeTask(id);
    } else {
      // update task
      editTask(id, edit);
    }
  });

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
