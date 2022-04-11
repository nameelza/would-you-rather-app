import React, { Component } from "react";
import { connect } from "react-redux";

class New extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    // const { dispatch, authedUser } = this.props;
    console.log("submit", optionOne, optionTwo,);
  }
  render() {
    const { optionOne, optionTwo } = this.state;
    return (
      <div>
        <h1>Create New Question</h1>
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
          />
          <h4>OR</h4>
          <input
            type="text"
            value={optionTwo}
            name="optionTwo"
            onChange={this.handleChange}
            placeholder="Option Two"
            required
          />
          <button type="submit" disabled={optionOne === "" || optionTwo === ""}>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(New);
