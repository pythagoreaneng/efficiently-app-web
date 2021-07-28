import React, { useState, useEffect, useRef } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";

const AddTaskContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border-radius: 1rem;
`;

const WriteTaskInput = styled.input`
  width: 100%;
  height: 3rem;
  border: 0.1rem solid #efefef;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  margin: 0 1rem 0 1rem;
  text-align: center;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0.5rem #46bcff;
  }
`;

const AddTaskButton = styled.button`
  height: auto;
  width: 3rem;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// input component to add tasks
const TaskInput = ({
  onSubmit,
  searchRef,
  inputRef,
  todayDate,
  inboxRef,
  todayRef,
  starRef,
  upcomingRef,
  archiveRef,
}) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      key: Math.floor(Math.random() * 1000),
      title: input,
      completed: false,
      star: false,
      created_date: todayDate,
      due_date: "07/28/2021",
      schedule_date: "08/28/2021",
    });
    setInput("");
  };

  // focus refs
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitRef = useRef(null);

  const searchKeyDown = (e) => {
    console.log(e);

    if (e.key === "Alt") {
      console.log("focus on search");
      searchRef.current.focus();
    } else if (e.key === "ArrowUp") {
      console.log("Control");
      if (window.location.pathname === "/") {
        console.log("if inboxRef");
        archiveRef.current.click();
      } else if (window.location.pathname === "/today") {
        console.log("if todayRef");
        inboxRef.current.click();
      } else if (window.location.pathname === "/star") {
        console.log("if todayRef");
        todayRef.current.click();
      } else if (window.location.pathname === "/upcoming") {
        console.log("if todayRef");
        starRef.current.click();
      } else if (window.location.pathname === "/archive") {
        console.log("if todayRef");
        upcomingRef.current.click();
      }
    } else if (e.key === "ArrowDown") {
      console.log("Control");
      if (window.location.pathname === "/") {
        console.log("if inboxRef");
        todayRef.current.click();
      } else if (window.location.pathname === "/today") {
        console.log("if todayRef");
        starRef.current.click();
      } else if (window.location.pathname === "/star") {
        console.log("if todayRef");
        upcomingRef.current.click();
      } else if (window.location.pathname === "/upcoming") {
        console.log("if todayRef");
        archiveRef.current.click();
      } else if (window.location.pathname === "/archive") {
        console.log("if todayRef");
        inboxRef.current.click();
      }
    }
  };

  return (
    <>
      <AddTaskContainer onSubmit={handleSubmit}>
        <WriteTaskInput
          placeholder="Start from here"
          onChange={handleChange}
          value={input}
          ref={inputRef}
          onKeyDown={searchKeyDown}
        />
        <AddTaskButton onClick={handleSubmit} ref={submitRef}>
          <RiAddCircleFill size={50} color={"#44BCFF"} />
        </AddTaskButton>
      </AddTaskContainer>
    </>
  );
};

export default TaskInput;
