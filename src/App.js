import React from "react";
import "./index.css";
import { Inbox, Star, Archive, Upcoming, Today, Search } from "./pages";
import TaskContextProvider from "./providers/TaskContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
      <TaskContextProvider>
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
      </TaskContextProvider>
    </>
  );
}

export default App;
