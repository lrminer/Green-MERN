import React, { Component } from "react";
// import "./style.css";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Green
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/dashboard">
                  Home
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/createBudget">
                  Create Budget
                </a>

              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
