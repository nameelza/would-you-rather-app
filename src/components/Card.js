import React, { Component } from "react";
import { connect } from "react-redux";

class Card extends Component {
  render() {
    const { author, optionOne } = this.props.question;

    return (
      <div className="card">
        <div className="card-header">
          <p>{author} asks:</p>
        </div>
        <div id="user-card">
          <img
            src={this.props.avatar}
            alt={`Avatar of ${author.name}`}
            className="avatar"
          />
          <div>
            <div>
              <h3>Would you rather</h3>
              <p>{optionOne.text} or ...</p>
            </div>
            <div>
              <button>View Poll</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }, { question }) {
  const author = users[question.author];
  return {
    avatar: author.avatarURL,
  };
}

export default connect(mapStateToProps)(Card);
