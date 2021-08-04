import React, { useEffect, useRef, useContext } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import styled from "styled-components";
import { TaskContext } from "../contexts/TaskContext";

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
const TaskInput = ({ onSubmit }) => {
  const {
    searchBarRef,
    inboxRef,
    starRef,
    archiveRef,
    upcomingRef,
    todayRef,
    searchRef,
    inputRef,
    handleSubmit,
    input,
    setInput,
  } = useContext(TaskContext);

  // handler for this hook
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // hook to handle focus(either on TaskInput or SearchBar)
  useEffect(() => {
    // if in '/search' then focus on search bar automatically
    if (window.location.pathname === "/search") {
      searchBarRef.current.focus();
    }
    // if not then focus on TaskInput
    else {
      inputRef.current.focus();
    }
  }, [searchBarRef, inputRef]);

  const submitRef = useRef(null);

  // handler to go to inbox when user click TaskInput box
  const handleTaskInputClick = () => {
    inboxRef.current.click();
  };

  // Key Downs available in TaskInput
  // note that '/' is inbox directory
  const inInputKeyDown = (e) => {
    console.log(e);
    // behavior for alt input in TaskInput
    if (e.key === "Alt") {
      // if in '/search' => go to '/'
      if (window.location.pathname === "/search") {
        inboxRef.current.click();
        inboxRef.current.focus();
      }
      // if not in '/search' => go to '/search'
      else {
        searchRef.current.click();
        searchBarRef.current.focus();
      }

      // traverse side menu using up/down arrows (inbox to archive)
    } else if (e.key === "ArrowUp") {
      console.log("arrow up");
      // i.e. if in '/'
      if (window.location.pathname === "/") {
        // then go to '/archive' when UpArrow is input
        archiveRef.current.click();
      } else if (window.location.pathname === "/today") {
        inboxRef.current.click();
      } else if (window.location.pathname === "/star") {
        todayRef.current.click();
      } else if (window.location.pathname === "/upcoming") {
        starRef.current.click();
      } else if (window.location.pathname === "/archive") {
        upcomingRef.current.click();
      }
      // up arrow ver (opposite direction)
    } else if (e.key === "ArrowDown") {
      console.log("Arrow down(inInputKeyDown)");
      if (window.location.pathname === "/") {
        todayRef.current.click();
      } else if (window.location.pathname === "/today") {
        starRef.current.click();
      } else if (window.location.pathname === "/star") {
        upcomingRef.current.click();
      } else if (window.location.pathname === "/upcoming") {
        archiveRef.current.click();
      } else if (window.location.pathname === "/archive") {
        inboxRef.current.click();
      }
    }
  };

  return (
    <>
      <AddTaskContainer onSubmit={handleSubmit}>
        <WriteTaskInput
          placeholder="Start from here(Press ↑↓ to navigate)"
          value={input}
          ref={inputRef}
          onKeyDown={inInputKeyDown}
          onChange={handleChange}
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
