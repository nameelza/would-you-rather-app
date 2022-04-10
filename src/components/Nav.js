import React from "react";
import { connect } from "react-redux";

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        {this.props.singedIn ? (
          <ul>
            <li>
              <div>Home</div>
            </li>
            <li>
              <div>New Question</div>
            </li>
            <li>
              <div>Leader Board</div>
            </li>
            <li>
              <div>Sign Out</div>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <div>Home</div>
            </li>
            <li>
              <div>New Question</div>
            </li>
            <li>
              <div>Leader Board</div>
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
