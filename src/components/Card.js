import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const { author, optionOne, id } = this.props.question;

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
              <Link
                to={{
                  pathname: `/card/${id}`,
                  state: {
                    isAnswered: this.props.isAnswered,
                  },
                }}
              >
                <button>View Poll</button>
              </Link>
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
