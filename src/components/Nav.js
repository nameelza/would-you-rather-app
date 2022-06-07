import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { handleSignOut } from "../actions/shared";
import { useDispatch } from "react-redux";

const Nav = ({ singedIn, userName, avatar }) => {
  const dispatch = useDispatch();

  const signOut = (e) => {
    dispatch(handleSignOut());
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) =>
              "link" + (isActive ? " active-link" : "")
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact="true"
            to="/newQuestion"
            className={({ isActive }) =>
              "link" + (isActive ? " active-link" : "")
            }
          >
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink
            exact="true"
            to="/leaderBoard"
            className={({ isActive }) =>
              "link" + (isActive ? " active-link" : "")
            }
          >
            Leader Board
          </NavLink>
        </li>
        {singedIn && (
          <>
            <li>
              <span>Hello, {userName}</span>
            </li>
            <li>
              <img src={avatar} alt="user avatar" className="nav-avatar" />
            </li>
            <li>
              <Link to="/signIn" className="link" onClick={signOut}>
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
    singedIn: authedUser !== null,
    userName: authedUser ? users[authedUser].name : "",
    avatar: authedUser ? users[authedUser].avatarURL : "",
  };
}

export default connect(mapStateToProps)(Nav);
