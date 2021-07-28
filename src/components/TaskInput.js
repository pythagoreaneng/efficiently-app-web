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
  searchBarRef,
  inputRef,
  todayDate,
  inboxRef,
  todayRef,
  starRef,
  searchRef,
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

  useEffect(() => {
    if (window.location.pathname === "/search") {
      searchBarRef.current.focus();
    }
  }, [window.location.pathname]);

  const submitRef = useRef(null);

  const searchKeyDown = (e) => {
    console.log(e);
    // behavior for alt input in TaskInput
    if (e.key === "Alt") {
      // if already in search => go back to /inbox
      if (window.location.pathname === "/search") {
        console.log("getting out of search...");
        inboxRef.current.focus();
        inboxRef.current.click();
      }
      // if not in search => go to /search
      else {
        if (window.location.pathname === "/search") {
          console.log("fist if");
        } else {
          console.log("focus on search now");
          searchRef.current.click();
          searchBarRef.current.focus();
        }
      }
    } else if (e.key === "ArrowUp") {
      console.log("arrow up");
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
      console.log("Arrow down(searchKeyDown)");
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

  const handleTaskInputClick = () => {
    inboxRef.current.click();
  };

  return (
    <>
      <AddTaskContainer onSubmit={handleSubmit}>
        <WriteTaskInput
          placeholder="Start from here(Press ↑↓ to navigate)"
          onChange={handleChange}
          value={input}
          ref={inputRef}
          onKeyDown={searchKeyDown}
          onClick={handleTaskInputClick}
        />
        <AddTaskButton onClick={handleSubmit} ref={submitRef}>
          <RiAddCircleFill size={50} color={"#44BCFF"} />
        </AddTaskButton>
      </AddTaskContainer>
    </>
  );
};

export default TaskInput;
