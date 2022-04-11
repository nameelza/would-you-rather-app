import React, { Component } from "react";
import { connect } from "react-redux";

class Card extends Component {
  render() {
    console.log(this.props.question);
    const { author, optionOne, optionTwo } = this.props.question;
    return (
      <div>
        <p> {author}</p>
        Would you rather {optionOne.text} or {optionTwo.text}
      </div>
    );
  }
}

export default connect()(Card);
