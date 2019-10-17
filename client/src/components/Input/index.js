import React, { Component } from "react";
// import "./style.css";

class Input extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="input-group mb-3">
          <input
            type={this.props.type}
            className="form-control"
            name={this.props.name}
            placeholder={this.props.placeholder}
            aria-label={this.props.aria}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              {this.props.spanText}
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Input;
