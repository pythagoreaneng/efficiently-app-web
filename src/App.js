import React from "react";
import "./index.css";
import { Login, Reset, Signup } from "./pages";
import { Inbox, Security, Themes, Profile, Upgrade } from "./pages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import {
  TaskContextProvider,
  EntryContextProvider,
  UserProvider,
} from "./contexts";

function App() {
  return (
    <Router>
      <UserProvider>
        <TaskContextProvider>
          <Switch>
            <PrivateRoute path="/inbox" component={Inbox} />
            <PrivateRoute path="/today" component={Inbox} />
            <PrivateRoute path="/star" component={Inbox} />
            <PrivateRoute path="/upcoming" component={Inbox} />
            <PrivateRoute path="/archive" component={Inbox} />
            <PrivateRoute path="/search" component={Inbox} />

            <EntryContextProvider>
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/security" component={Security} />
              <PrivateRoute path="/themes" component={Themes} />
              <PrivateRoute path="/upgrade" component={Upgrade} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/reset" component={Reset} />
            </EntryContextProvider>
            <Redirect to="/" component={Inbox} />
          </Switch>
        </TaskContextProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
