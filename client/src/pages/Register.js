import React from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Input from "../components/Input";

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  componentDidMount() {}

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
        <Navbar />
        <form>
          <Input type="text" name="username" />
          <Input type="password" name="password" />
          <Button type="button" onClick={this.handleFormSubmit} text="Submit" />
        </form>
        <Footer />
      </>
    );
  }
}

export default Register;
