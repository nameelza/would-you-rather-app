import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    console.log(this.props);
    return (
      <nav className="nav">
        {this.props.singedIn ? (
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
            <li>
              <span>Hello, {this.props.userName}</span>
            </li>
            <li>
              <Link to={"/signIn"} className="link">
                Sign Out
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <div className="link">Home</div>
            </li>
            <li>
              <div className="link">New Question</div>
            </li>
            <li>
              <div className="link">Leader Board</div>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    singedIn: authedUser !== null,
    userName: authedUser ? users[authedUser].name : "",
  };
}

export default connect(mapStateToProps)(Nav);
