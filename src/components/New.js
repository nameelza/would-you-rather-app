import React, { Component } from "react";
import { connect } from "react-redux";

class New extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };
  render() {
    const { optionOne, optionTwo } = this.state;
    return (
      <div>
        <h1>Create New Question</h1>
        <p>Complete the question:</p>
        <h3>Would you rather...</h3>
        <form>
          <input
            type="text"
            value={optionOne}
            placeholder="Option One"
            required
          />
          <h4>OR</h4>
          <input
            type="text"
            value={optionTwo}
            placeholder="Option Two"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(New);
