import React from "react";
import "./index.css";
import { Inbox, Star, Archive, Upcoming, Today, Search } from "./pages";
import TasksContextProvider from "./providers/TasksContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
      <TasksContextProvider>
        <Router>
          <Switch>
            <Route path="/today" component={Today} />
            <Route path="/star" component={Star} />
            <Route path="/upcoming" component={Upcoming} />
            <Route path="/archive" component={Archive} />
            <Route path="/search" component={Search} />
            <Route exact path="/" component={Inbox} />
            <Redirect to="/" component={Inbox} />
          </Switch>
        </Router>
      </TasksContextProvider>
    </>
  );
}

export default App;
