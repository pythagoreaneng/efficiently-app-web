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
            <Route path="/star" component={Star} />
            <Route path="/archive" component={Archive} />
            <Route path="/upcoming" component={Upcoming} />
            <Route path="/today" component={Today} />
            <Route path="/search" component={Search} />
            <Route exact path="/" component={Search} />
            <Redirect to="/" component={Inbox} />
          </Switch>
        </Router>
      </TasksContextProvider>
    </>
  );
}

export default App;
