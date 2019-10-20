import React from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Input from "../components/Input";

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

    API.login().then(response => {
      // console.log(response);
      const { token } = response.data;
      console.log(token);
      localStorage.setItem("jwt", token);
    });
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <>
        <div className="container">
          <Navbar />
          <form>
            <Input type="text" name="username" />
            <Input type="password" name="password" />
            <Button
              type="button"
              onClick={this.handleFormSubmit}
              text="Submit"
            />
          </form>
          <Footer />
        </div>
      </>
    );
  }
}

export default Login;
