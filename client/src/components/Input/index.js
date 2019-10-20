import React, { Component } from "react";
// import "./style.css";

class Input extends Component {
  state = {};

  render() {
    const { type, placeholder, name, aria, onChange } = this.props;
    return (
      <>
        <div className="form-group">
          <label htmlFor={name}>{placeholder}</label>
          <input
          onChange={onChange}
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
