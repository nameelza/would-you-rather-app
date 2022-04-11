import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";

class LeaderBoard extends Component {
  render() {
    console.log(this.props.users);
    return (
      <div>
        <h1 className="center">Leader Board</h1>
        <ul>
          {Object.keys(this.props.users).map((id) => {
            const user = this.props.users[id];
            console.log("user", user);
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