import React from "react";
// import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Login extends React.Component {
  state = {
    username: "",
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
    // Login action here
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <>
        <Navbar />
        <form>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <input
            type="button"
            name="submit"
            value="Submit"
            onClick={this.handleFormSubmit}
          />
        </form>
        <Footer />
      </>
    );
  }
}

export default Login;
