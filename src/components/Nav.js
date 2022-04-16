import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../actions/authedUser";

class Nav extends React.Component {
  handleSignOut = () => {
    console.log("sign out");
    this.props.dispatch(signOut);
  }
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link to={"/"} className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/newQuestion"} className="link">
              New Question
            </Link>
          </li>
          <li>
            <Link to={"/leaderBoard"} className="link">
              Leader Board
            </Link>
          </li>
          {this.props.singedIn && (
            <Fragment>
              <li>
                <span>Hello, {this.props.userName}</span>
              </li>
              <li>
                <img
                  src={this.props.avatar}
                  alt="avatar"
                  className="nav-avatar"
                />
              </li>
              <li>
                <a href={"/signIn"} className="link">
                  Sign Out
                </a>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    singedIn: authedUser !== null,
    userName: authedUser ? users[authedUser].name : "",
    avatar: authedUser ? users[authedUser].avatarURL : "",
  };
}

export default connect(mapStateToProps)(Nav);
