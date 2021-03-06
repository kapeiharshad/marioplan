import React, { Component } from "react";

class SignUp extends Component {
  state = { email: "", password: "", fristName: "", lastName: "" };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="passowrd" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="fristName">Frist Name</label>
            <input type="text" id="fristName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink ligthen-1 z-depth-0">SignUp</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
