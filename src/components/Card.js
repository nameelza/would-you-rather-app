import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const { author, optionOne, id } = this.props.question;
    const option =
      optionOne.text.length > 35
        ? optionOne.text.slice(0, 35) + "..."
        : optionOne.text;

    return (
      <div className="card">
        <div>
          <p>{author} asks:</p>
        </div>
        <div id="user-card">
          <img
            src={this.props.avatar}
            alt={`Avatar of ${author.name}`}
            className="avatar"
          />
          <div>
            <p id="subheading">Would you rather</p>
            <h3 id="subheading">{option} or ...</h3>
            <Link
              to={`/card/${id}`}
              state={{
                isAnswered: this.props.isAnswered,
                question: this.props.question,
                avatar: this.props.avatar,
              }}
            >
              <button>View Poll</button>
            </Link>
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
