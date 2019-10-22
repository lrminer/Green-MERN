import React, { Component } from "react";
import { RadialChart } from "react-vis";
// import "./style.css";
import "./../../../../node_modules/react-vis/dist/style.css";
import API from "../../utils/API";

class DashboardContainer extends Component {
  state = {
    data: [
      { angle: 1 },
      { angle: 1 },
      { angle: 1 },
      { angle: 1 },
      { angle: 1 },
      { angle: 1 }
    ]
  };

  componentDidMount() {
    API.getBudgets().then(budgets => console.log(budgets));
  }

  render() {
    return (
      <>
        <div className="container">
          <RadialChart height={300} width={300} data={this.state.data} />
        </div>
      </>
    );
  }
}

export default DashboardContainer;
