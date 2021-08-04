import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { auth, firestore } from "../firebase";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = React.createContext(null);

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // this should be handled more propery
  const tasksRef = auth.currentUser
    ? firestore.collection(`users/${auth.currentUser.uid}/userTasks`)
    : firestore.collection(`errorTasks`);

  // intial loading of locally saved tasks
  const getTasks = () => {
    tasksRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setTasks(items);
    });
  };

  useEffect(() => {
    getTasks();
  }, []); // eslint-disable-line

  const searchBarRef = useRef(null);
  const inboxRef = useRef(null);
  const starRef = useRef(null);
  const archiveRef = useRef(null);
  const upcomingRef = useRef(null);
  const todayRef = useRef(null);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const editRef = useRef(null);

  // search related
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  var todayDate = moment().format("YYYY-MM-D");

  const completeTask = (task) => {
    tasksRef
      .doc(task.id)
      .update({ completed: !task.completed })
      .then(() => {
        console.log("Document successfully deleted!");
        console.log("tasksRef.id", tasksRef.id);
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const removeTask = (id) => {
    tasksRef
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const editTask = (task, edit) => {
    tasksRef
      .doc(task.id)
      .update({ title: edit })
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const toggleStar = (task) => {
    tasksRef
      .doc(task.id)
      .update({ star: !task.star })
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  // handler for submitting input
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskId = uuidv4(); // generate string id every time task is generated and assign to it
    tasksRef.doc(taskId).set({
      id: taskId, // task gets assigned the id
      // id: Math.floor(Math.random() * 1000), // generate ramdom int
      title: input,
      completed: false,
      star: false,
      createdDate: todayDate,
      dueDate: "2021-07-31",
      scheduleDate: "2021-08-28",
    });
    console.log("tasksRef is:", tasksRef.id);
    // clear input
    setInput("");
  };

  // hook to handle TaskInput value
  const [input, setInput] = useState("");

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        searchBarRef,
        inboxRef,
        starRef,
        archiveRef,
        upcomingRef,
        todayRef,
        searchRef,
        inputRef,
        editRef,
        search,
        setSearch,
        handleSearch,
        todayDate,
        completeTask,
        removeTask,
        editTask,
        toggleStar,
        handleSubmit,
        input,
        setInput,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
