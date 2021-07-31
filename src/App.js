import React, { useState, useContext } from "react";
import "./index.css";
import Inbox from "./pages/index";
import Star from "./pages/star";
import Archive from "./pages/archive";
import Upcoming from "./pages/upcoming";
import Today from "./pages/today";
import Search from "./pages/search";
import TasksContextProvider from "./providers/TasksContext";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import test_tasks_2 from "./pages/data/test_tasks_2";
import TasksContext from "./providers/TasksContext";

function App() {
  // unfiltered tasks
  const [tasks, setTasks] = useState(test_tasks_2);

  // screen name hook,
  const [sideScreenName, setSideScreenName] = useState("");

  // list type (inbox, star, ...) hook, required for filtering tasks in SectionTasks
  const [sectionType, setSectionType] = useState("inbox");
  const msg = useContext(TasksContext);
  return (
    <>
      <Router>
        <Switch>
          <TasksContextProvider>
            <Route path="/star">
              <Star
                tasks={tasks}
                setTasks={setTasks}
                sideScreenName={sideScreenName}
                sectionType={sectionType}
                setSectionType={setSectionType}
              />
            </Route>
            <Route path="/archive">
              <Archive
                tasks={tasks}
                setTasks={setTasks}
                sideScreenName={sideScreenName}
                sectionType={sectionType}
                setSectionType={setSectionType}
              />
            </Route>
            <Route path="/upcoming">
              <Upcoming
                tasks={tasks}
                setTasks={setTasks}
                sideScreenName={sideScreenName}
                sectionType={sectionType}
                setSectionType={setSectionType}
              />
            </Route>
            <Route path="/today">
              <Today
                tasks={tasks}
                setTasks={setTasks}
                sideScreenName={sideScreenName}
                sectionType={sectionType}
                setSectionType={setSectionType}
              />
            </Route>
            <Route path="/search">
              <Search
                tasks={tasks}
                setTasks={setTasks}
                sideScreenName={sideScreenName}
                sectionType={sectionType}
                setSectionType={setSectionType}
              />
            </Route>
            <Route exact path="/">
              <Inbox
                tasks={tasks}
                setTasks={setTasks}
                sideScreenName={sideScreenName}
                sectionType={sectionType}
                setSectionType={setSectionType}
              />
            </Route>
            <Redirect to="/">
              <Inbox
                tasks={tasks}
                setTasks={setTasks}
                sideScreenName={sideScreenName}
                sectionType={sectionType}
                setSectionType={setSectionType}
              />
            </Redirect>
          </TasksContextProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
