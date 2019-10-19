import React, { Component } from "react";
// import "./style.css";

class Input extends Component {
  state = {};

  render() {
    const { type, placeholder, name, aria } = this.props;
    return (
      <>
        <div className="form-group">
          <label htmlFor={name}>{placeholder}</label>
          <input
            type={type}
            className="form-control"
            name={name}
            id={`input-${name}`}
            aria-label={aria}
          />
        </div>
      </>
    );
  }
}

export default Input;
