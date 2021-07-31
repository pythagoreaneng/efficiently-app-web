import React, { useState, useEffect, useContext } from "react";
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
  // const [tasks, setTasks] = useState(test_tasks_2);

  return (
    <>
      <TasksContextProvider>
        <Router>
          <Switch>
            <Route path="/star">
              <Star />
            </Route>
            <Route path="/archive">
              <Archive />
            </Route>
            <Route path="/upcoming">
              <Upcoming />
            </Route>
            <Route path="/today">
              <Today />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route exact path="/">
              <Inbox />
            </Route>
            <Redirect to="/">
              <Inbox />
            </Redirect>
          </Switch>
        </Router>
      </TasksContextProvider>
    </>
  );
}

export default App;
