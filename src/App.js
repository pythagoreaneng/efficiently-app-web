import React from "react";
import "./index.css";
import Home from "./pages/index";
import Inbox from "./pages/inbox";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </>
  );
}

export default App;
