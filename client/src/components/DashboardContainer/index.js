import React, { Component } from "react";
import { RadialChart } from "react-vis";
// import "./style.css";
import "./../../../../node_modules/react-vis/dist/style.css";

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
