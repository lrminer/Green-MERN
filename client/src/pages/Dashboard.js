import React from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Button from "../components/Button";

class Dashboard extends React.Component {
  state = {
    comparison: {}
  };

  componentDidMount() {
    this.loadBudgets();
  }

  loadBudgets = () => {
    API.getBudgets()
      .then(res => this.setState({ comparison: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return <>
      <Navbar />
      <Footer />
    </>;
  }
}

export default Dashboard;
