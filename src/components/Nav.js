import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
      console.log("NAV PROPS", this.props.singedIn);
        {this.props.singedIn ? (
          <ul>
            <li>
              <NavLink to="/" exact >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/new" exact >
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard" exact >
                Leader Board
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <NavLink to="/signin" exact >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/signin" exact >
                New Tweet
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    singedIn: authedUser !== null,
  };
}

connect(mapStateToProps)(Nav);

export default Nav;
