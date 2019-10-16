import React from "react";
import API from "../utils/API";

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  componentDidMount() {
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
    console.log(user);
    API.postUser(user);
    this.setState({ username: "", password: "", email: "" });
  };

  render() {
    return (
      <>
        <form>
          <input type="text" name="username" onChange={this.handleInputChange} value={this.state.username} />
          <input type="text" name="email" onChange={this.handleInputChange} value={this.state.email} />
          <input type="password" name="password" onChange={this.handleInputChange} value={this.state.password} />
          
          <input
            type="button"
            name="submit"
            value="Submit"
            onClick={this.handleFormSubmit}
          />
        </form>
      </>
    );
  }
}

export default Register;
