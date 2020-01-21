import React from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import FriendsForm from "./components/FriendsForm";
function App() {
  return (
    <Router>
      <div className="App">
       <h3> <Link to="/login">Login</Link></h3>

        <Link to="/protected">Friends</Link>
        <Switch>
          <ProtectedRoute exact path="/protected" component={FriendsForm} />
          <Route path="/login" component={Login} />
          <Route path="/addfriend" component={FriendsForm} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
