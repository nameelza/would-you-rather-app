import React, { Component } from "react";
import { connect } from "react-redux";

class Card extends Component {
  render() {
    const { author, optionOne, optionTwo } = this.props.question;

    return (
      <div className="card">
        <p>{author} asks:</p>
        <p>Would you rather {optionOne.text} or {optionTwo.text}</p>
      </div>
    );
  }
}

export default connect()(Card);
