import React, { Component } from 'react';

export default class HomeWork51 extends Component {
  state = {
    name: '',
    password: '',
    email: '',
    isShown: false,
  };
  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ isShown: !this.state.isShown });
  };
  render() {
    return (
      <div>
        <h5>Homework 5.1</h5>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Username"
            required
            value={this.state.name}
            onChange={this.onChangeName}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={this.state.password}
            onChange={this.onChangePassword}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
        {this.state.isShown && <div>{JSON.stringify(this.state)}</div>}
      </div>
    );
  }
}
