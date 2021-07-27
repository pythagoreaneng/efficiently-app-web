import React, { useState } from "react";
import "./index.css";
import Inbox from "./pages/index";
import Star from "./pages/star";
import Archive from "./pages/archive";
import Upcoming from "./pages/upcoming";
import Today from "./pages/today";
import test_tasks_1 from "./pages/data/test_tasks_1";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

function App() {
  // unfiltered tasks
  const [tasks, setTasks] = useState(test_tasks_1);

  // screen name hook,
  const [sideScreenName, setSideScreenName] = useState("");

  // list type (inbox, star, ...) hook, required for filtering tasks in SectionTasks
  const [sectionType, setSectionType] = useState("inbox");
  return (
    <>
      <Router>
        <Switch>
          <Route path="/star">
            <Star
              tasks={tasks}
              setTasks={setTasks}
              sideScreenName={sideScreenName}
              sectionType={sectionType}
              setSectionType={setSectionType}
              today={today}
            />
          </Route>
          <Route path="/archive">
            <Archive
              tasks={tasks}
              setTasks={setTasks}
              sideScreenName={sideScreenName}
              sectionType={sectionType}
              setSectionType={setSectionType}
              today={today}
            />
          </Route>
          <Route path="/upcoming">
            <Upcoming
              tasks={tasks}
              setTasks={setTasks}
              sideScreenName={sideScreenName}
              sectionType={sectionType}
              setSectionType={setSectionType}
              today={today}
            />
          </Route>
          <Route path="/today">
            <Today
              tasks={tasks}
              setTasks={setTasks}
              sideScreenName={sideScreenName}
              sectionType={sectionType}
              setSectionType={setSectionType}
              today={today}
            />
          </Route>
          <Route exact path="/">
            <Inbox
              tasks={tasks}
              setTasks={setTasks}
              sideScreenName={sideScreenName}
              sectionType={sectionType}
              setSectionType={setSectionType}
              today={today}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
