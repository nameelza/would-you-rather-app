import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        <h1 className="center">Leader Board</h1>
        <ul>
          {Object.keys(users)
            .sort(
              (a, b) =>
                users[b].questions.length +
                Object.keys(users[b].answers).length -
                (users[a].questions.length +
                  Object.keys(users[a].answers).length)
            )
            .map((id) => {
              const user = users[id];
              return (
                <li key={id}>
                  <UserCard user={user} />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
