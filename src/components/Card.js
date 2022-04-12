import React, { Component } from "react";
import { connect } from "react-redux";

class Card extends Component {
  render() {
    const { author, optionOne } = this.props.question;

    return (
      <div className="card">
        <p>{author} asks:</p>
        <h3>Would you rather</h3>
        <p>{optionOne.text} or ...</p>
        <button>View Poll</button>
      </div>
    );
  }
}

export default connect()(Card);
