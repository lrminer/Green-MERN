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
          <Route exact path="/" component={Login} render={() => <Login />} />
          <Route exact path="/register" render={() => <Register />} />
          <Route exact path="/dashboard" render={() => <Dashboard />} />
          <Route exact path="/createBudget" render={() => <createBudget />} />
          <Route exact path="/chart" render={() => <Chart />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
