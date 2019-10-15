import React from "react";
import API from "../utils/API";

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  componentDidMount() {
    this.loadBudgets();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // TODO:
    // Create user action here
    const { username, email, password } = this.state;
    const user = { username, email, password };

    API.postUser(user);
    this.setState({ username: "", password: "", email: "" });
  };

  render() {
    return <></>;
  }
}

export default Dashboard;
