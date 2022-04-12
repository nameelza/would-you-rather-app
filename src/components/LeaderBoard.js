import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <h1 className="center">Leader Board</h1>
        <ul>
          {Object.keys(this.props.users).map((id) => {
            const user = this.props.users[id];
            return (
              <li key={id}>
                <UserCard user={user} />
              </li>
            )
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