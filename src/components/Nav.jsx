import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { handleSignOut } from "../actions/shared";
import { useDispatch } from "react-redux";

const Nav = ({ isSingedIn, userName, avatar }) => {
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(handleSignOut());
  };

  const linkClassName = ({ isActive }) =>
    "link" + (isActive ? " active-link" : "");

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) => linkClassName({ isActive })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact="true"
            to="/newQuestion"
            className={({ isActive }) => linkClassName({ isActive })}
          >
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink
            exact="true"
            to="/leaderBoard"
            className={({ isActive }) => linkClassName({ isActive })}
          >
            Leader Board
          </NavLink>
        </li>
        {isSingedIn && (
          <>
            <li>
              <span>Hello, {userName}</span>
            </li>
            <li>
              <img src={avatar} alt="user avatar" className="nav-avatar" />
            </li>
            <li>
              <Link to="/signIn" className="link" onClick={onSignOut}>
                Sign Out
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    isSingedIn: authedUser !== null,
    userName: authedUser ? users[authedUser].name : "",
    avatar: authedUser ? users[authedUser].avatarURL : "",
  };
}

export default connect(mapStateToProps)(Nav);
