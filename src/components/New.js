import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Navigate } from "react-router-dom";

class New extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    redirectToHome: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;
    if (optionOne !== "" && optionTwo !== "") {
      dispatch(handleAddQuestion({ optionOne, optionTwo }));
      this.setState({
        redirectToHome: true,
      });
    }
  };
  render() {
    if (this.state.redirectToHome) {
      return <Navigate to="/" />;
    }
    const { optionOne, optionTwo } = this.state;
    return (
      <div className="border">
        <h1 className="center">Create New Question</h1>
        <p>Complete the question:</p>
        <h3>Would you rather...</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={optionOne}
            name="optionOne"
            onChange={this.handleChange}
            placeholder="Option One"
            required
            className="input"
          />
          <h4>OR</h4>
          <input
            type="text"
            value={optionTwo}
            name="optionTwo"
            onChange={this.handleChange}
            placeholder="Option Two"
            required
            className="input"
          />
          <button type="submit" disabled={optionOne === "" || optionTwo === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(New);
