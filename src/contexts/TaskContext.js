import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { auth, firestore } from "../firebase";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = React.createContext(null);

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [inboxCount, setInboxCount] = useState();
  const [todayCount, setTodayCount] = useState();
  const [starCount, setStarCount] = useState();
  const [archiveCount, setArchiveCount] = useState();

  // this should be handled more propery
  const taskDB = auth.currentUser
    ? firestore.collection(`users/${auth.currentUser.uid}/userTasks`)
    : firestore.collection(`catch`);

  // intial loading of locally saved tasks
  const getTasks = () => {
    taskDB.onSnapshot((querySnapshot) => {
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
    console.log("search set");
  };

  var todayDate = moment().format("YYYY-MM-D");

  const completeTask = (task) => {
    taskDB
      .doc(task.id)
      .update({ completed: !task.completed })
      .then(() => {
        console.log("Document successfully deleted!");
        console.log("taskDB.id", taskDB.id);
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const removeTask = (id) => {
    taskDB
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
    taskDB
      .doc(task.id)
      .update({ title: edit })
      .then(() => {
        console.log("Document successfully edited!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  const editSchedule = (task, schedule) => {
    console.log("editSchedule");
    taskDB
      .doc(task.id)
      .update({ scheduleDate: schedule })
      .then(() => {
        console.log("Document successfully edited!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const toggleStar = (task) => {
    taskDB
      .doc(task.id)
      .update({ star: !task.star })
      .then(() => {
        console.log("Document successfully toggeled star");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  // handler for submitting input
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskId = uuidv4(); // generate string id every time task is generated and assign to it
    taskDB.doc(taskId).set({
      id: taskId, // task gets assigned the id
      title: input,
      completed: false,
      star: false,
      createdDate: todayDate,
      dueDate: "",
      scheduleDate: "",
    });
    console.log("taskDB is:", taskDB.id);
    // clear input
    setInput("");
  };

  // hook to handle TaskInput value
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("#C0C0C0");
  const [dark, setDark] = useState(true);

  const handleTheme = (color) => {
    setTheme(color);
  };

  return (
    <TaskContext.Provider
      value={{
        dark,
        setDark,
        editSchedule,
        inboxCount,
        setInboxCount,
        todayCount,
        setTodayCount,
        starCount,
        setStarCount,
        archiveCount,
        setArchiveCount,
        theme,
        handleTheme,
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
