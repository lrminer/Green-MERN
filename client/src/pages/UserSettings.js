import React from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Input from "../components/Input";
// import UserForm from "../components/UserForm"

class UserSettings extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    location: "",
    income: ""
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
    const { firstName, lastName, age, location, income } = this.state;
    const user = {
      firstName,
      lastName,
      age,
      location,
      income
    };
    console.log(user);
    API.postUser(user);
    this.setState({
      firstName: "",
      lastName: "",
      age: "",
      location: "",
      income: ""
    });
  };
  //todo: fuctions
  render() {
    return (
      <div className="container">
        <Navbar />
        <form>
          <Input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
          />
          <Input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
          />
          <Input
            type="number"
            name="age"
            value={this.state.age}
            placeholder="Age"
          />
          <Input
            type="number"
            name="income"
            value={this.state.income}
            placeholder="Income"
          />
          <Input
            type="text"
            name="location"
            value={this.state.location}
            placeholder="State"
          />
          <Button
            type="button"
            onClick={this.handleFormSubmit}
            text="Update Settings"
          />
        </form>
        <Footer />
      </div>
    );
  }
}

export default UserSettings;
