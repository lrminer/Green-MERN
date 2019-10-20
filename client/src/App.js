import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateBudget from "./pages/CreateBudget";
import UserSettings from "./pages/UserSettings";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/createBudget" component={CreateBudget} />
          <Route path="/settings" component={UserSettings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
