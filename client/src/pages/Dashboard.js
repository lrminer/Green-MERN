import React from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashboardComponent from "../components/DashboardContainer";
// import Button from "../components/Button";

class Dashboard extends React.Component {
  state = {
    comparison: {},
    data: {}
  };

  componentDidMount() {
    this.loadBudgets();
  }

  loadBudgets = () => {
    API.getBudgets()
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <div className="container">
          <Navbar />
          <DashboardComponent data={this.state.data} />
          <Footer />
        </div>
      </>
    );
  }
}

export default Dashboard;
