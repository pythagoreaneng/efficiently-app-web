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

const completeTask = (task) => {
  // let newTasks = tasks.map((task) => {
  //   console.log("Running completeTask");
  //   if (task.id === id) {
  //     task.completed = !task.completed;
  //   }
  //   return task;
  // });
  // setTasks(newTasks);
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
  // let newTasks = [...tasks].filter((task) => task.id !== id);
  // setTasks(newTasks);
  //console.log(`auth.currentUser.uid, ${auth.currentUser.uid}`);

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
  // map through tasks
  // let newTasks = tasks.map((task) => {
  //   if (task.id === taskId) {
  //     task.title = taskTitle; // update title
  //   }
  //   return task;
  // });
  // setTasks(newTasks); // update tasks
  taskDB
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
  // let newTasks = tasks.map((task) => {
  //   if (task.id === id) {
  //     task.star = !task.star;
  //   }
  //   return task;
  // });
  // setTasks(newTasks);
  taskDB
    .doc(task.id)
    .update({ star: !task.star })
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};

// on task change re-save locally
useEffect(() => {
  //saveTasksLocally();
}, [tasks]); // eslint-disable-line

const addTask = (task) => {
  if (task.title === "" || /^\s*$/.test(task.title)) {
    console.log("Invalid task");
    return;
  }

  const newTasks = [task, ...tasks];
  setTasks(newTasks);
  console.log("tasks:", tasks);
  return;
};

const inSearchBarKeyDown = (e) => {
  console.log(e);

  if (e.key === "Alt") {
    if (window.location.pathname === "/search") {
      inboxRef.current.click();
    }
    console.log("focus on search in inSearchBarKeyDown");
    inputRef.current.focus();
  } else if (e.key === "ArrowUp") {
    console.log("arrow up(input down!)");
    archiveRef.current.click();
  } else if (e.key === "ArrowDown") {
    console.log("Arrow down(inSearchBarKeyDown)");
    inputRef.current.focus();
    inboxRef.current.click();
  }
};
