import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import createBudget from "./pages/createBudget";
import Chart from "./pages/Chart";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/createBudget" component={createBudget} />
          <Route exact path="/chart" component={Chart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
