import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        {this.props.singedIn ? (
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/newQuestion'}>New Question</Link>
            </li>
            <li>
              <Link to={'/leaderBoard'}>Leader Board</Link>
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

export default connect(mapStateToProps)(Nav);
