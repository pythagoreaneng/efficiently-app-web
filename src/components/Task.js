import React, { useEffect, useRef, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";
import styled from "styled-components";
import useOutsideClick from "../Hooks/useOutsideClick";

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

const OptionsContainer = styled.button`
  position: absolute;
  right: 1rem;
  display: flex;
`;

// single task card component
const Task = ({ completed, title, completeTask, id, removeTask, editTask }) => {
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

  // const editKeyDown = (e) => {
  //   if (editRef.current && editRef.current.contains(e.target)) {
  //     // inside click
  //     console.log("init");
  //     if (e.key === "Enter") {
  //       setEdit(edit);
  //       setIsEdit(false);
  //       console.log("inside");
  //     }
  //     console.log("outside");
  //   }
  //   console.log(e);
  //   // outside click
  //   setEdit(false);

  //   console.log(e);
  //   if (e.key === "Enter") {
  //     setEdit(edit);
  //     setIsEdit(false);
  //   }
  // };

  const editKeyDown = (e) => {
    if (e.key === "Enter") {
      setEdit(edit);
      setIsEdit(false);
    }
  };

  useOutsideClick(editRef, () => {
    console.log("Outside click");
  });

  return (
    <TaskContainer key={id}>
      <Checkbox type="Checkbox" onClick={() => completeTask(id)} />
      <div onClick={handleOnClickEdit}>
        {isEdit ? (
          <input
            placeholder={title}
            value={edit}
            onChange={handleEdit}
            onKeyDown={editKeyDown}
            ref={editRef}
          />
        ) : (
          <div>{edit}</div>
        )}
      </div>

      <OptionsContainer>
        {/* <RiEditBoxLine onChange={(title) => editTask(id, title)} /> */}
        <RiCloseFill onClick={() => removeTask(id)} />
      </OptionsContainer>
    </TaskContainer>
  );
};

export default Task;
