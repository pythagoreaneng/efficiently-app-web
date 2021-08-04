import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { firestore } from "../firebase";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = React.createContext(null);

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // const tasksRef = firestore.collection(
  //   `users/${auth.currentUser.uid}/userTasks`
  // );
  const tasksRef = firestore.collection("test");

  // save tasks locally
  const saveTasksLocally = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("ran saveTaskLocally()");
  };

  const getTasksLocally = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify());
      console.log("GetTasksLocally run");
    } else {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    }
  };

  const getTasks = () => {
    tasksRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setTasks(items);
    });
  };

  // intial loading of locally saved tasks
  useEffect(() => {
    //getTasksLocally();
    getTasks();
    //getTasksAlt();
  }, []);

  // on task change re-save locally
  useEffect(() => {
    //saveTasksLocally();
  }, [tasks]);

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
  console.log("seach is:", search);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  var todayDate = moment().format("YYYY-MM-D");

  const completeTask = (task) => {
    // let newTasks = tasks.map((task) => {
    //   console.log("Running completeTask");
    //   if (task.id === id) {
    //     task.completed = !task.completed;
    //   }
    //   return task;
    // });
    // setTasks(newTasks);
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
    // let newTasks = [...tasks].filter((task) => task.id !== id);
    // setTasks(newTasks);
    //console.log(`auth.currentUser.uid, ${auth.currentUser.uid}`);

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

  const editTask = (taskId, taskTitle) => {
    // map through tasks
    let newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.title = taskTitle; // update title
      }
      return task;
    });
    setTasks(newTasks); // update tasks
  };

  const toggleStar = (task) => {
    // let newTasks = tasks.map((task) => {
    //   if (task.id === id) {
    //     task.star = !task.star;
    //   }
    //   return task;
    // });
    // setTasks(newTasks);
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
    // doc("tasks").set worked
    const taskId = uuidv4();
    tasksRef.doc(taskId).set({
      id: taskId, // generate random string
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
        editTask,
        //tasksRef,
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
