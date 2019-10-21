import React from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Input from "../components/Input";
// import UserForm from "../components/UserForm"

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
    // firstName: "",
    // lastName: "",
    // age: "",
    // location: "",
    // income: ""
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
    const {
      username,
      email,
      password
      // firstName,
      // lastName,
      // age,
      // location,
      // income
    } = this.state;
    const user = {
      username,
      email,
      password
      // firstName,
      // lastName,
      // age,
      // location,
      // income
    };
    console.log(user);
    API.register(user);
    this.setState({
      username: "",
      email: "",
      password: ""
      // firstName: "",
      // lastName: "",
      // age: "",
      // location: "",
      // income: ""
    });
  };
  //todo: fuctions
  render() {
    return (
      <div className="container">
        <Navbar />
        <form>
          <Input
            onChange={this.handleInputChange}
            type="text"
            name="username"
            value={this.props.username}
            placeholder="Username"
          />
          <Input
            onChange={this.handleInputChange}
            type="text"
            name="email"
            value={this.props.email}
            placeholder="Email"
          />
          <Input
            onChange={this.handleInputChange}
            type="password"
            name="password"
            value={this.props.password}
            placeholder="Password"
          />
          <Button
            type="button"
            onClick={this.handleFormSubmit}
            text="Register  "
          />
          {/* <div className="form-group">
            First Name
                        <input type="firstName" className="form-control" name="firstName" id="firstName" placeholder="FirstName" />
          </div>
          <div className="form-group">
            Last Name
                        <input type="lastName" className="form-control" name="lastName" id="lastName" placeholder="lastName" />
          </div>

          <div className="form-group">
            Username
                        <input type="username" className="form-control" name="username" id="username" placeholder="username" />
          </div>
          <div className="form-group">
            Email
                        <input type="email" className="form-control" name="email" id="email" placeholder="email" />
          </div>

          <div className="form-group">
            Password
                        <input type="password" className="form-control" name="password" id="password" placeholder="password" />
          </div>
          <div className="form-group">
            Age
                        <input type="age" className="form-control" name="age" id="age" placeholder="age" />
          </div>
          <div className="form-group">
            Location
                        <input type="location" className="form-control" name="location" id="location" placeholder="location" />
          </div>
          <div className="form-group">
            Income
                        <input type="income" className="form-control" name="income" id="income" placeholder="income" />
          </div> */}
          {/* <Button type="button" onClick={this.handleFormSubmit} text="Submit" /> */}
        </form>
        <Footer />
      </div>
    );
  }
}

export default Register;
