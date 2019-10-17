import React, { Component } from "react";
// import "./style.css";

class Button extends Component {
  state = {};

  render() {
    return (
      <>
        <button type={this.props.type} onClick={this.props.onClick} className="btn btn-primary">
          {this.props.text}
        </button>
      </>
    );
  }
}

export default Button;
