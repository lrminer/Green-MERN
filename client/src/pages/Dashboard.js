import React from "react";
import API from "../utils/API";

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
    return <></>;
  }
}

export default Dashboard;
