import React from "react";
import "./index.css";
import {
  Inbox,
  Star,
  Archive,
  Upcoming,
  Today,
  Search,
  Login,
  Signup,
} from "./pages";
import AuthProvider from "./contexts/AuthContext";
import TaskContextProvider from "./contexts/TaskContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <TaskContextProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Inbox} />
            <PrivateRoute path="/today" component={Today} />
            <PrivateRoute path="/star" component={Star} />
            <PrivateRoute path="/upcoming" component={Upcoming} />
            <PrivateRoute path="/archive" component={Archive} />
            <PrivateRoute path="/search" component={Search} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect to="/" component={Inbox} />
          </Switch>
        </Router>
      </TaskContextProvider>
    </AuthProvider>
  );
}

export default App;
