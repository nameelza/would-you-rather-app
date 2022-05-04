import React from "react";
import { connect } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { handleSignOut } from "../actions/shared";
import { useDispatch } from "react-redux";

function Nav({ singedIn, userName, avatar }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = (e) => {
    e.preventDefault();
    dispatch(handleSignOut());
    navigate("signIn");
  };

  return (
    <nav className="nav">
      <ul>
        {singedIn ? (
          <>
            <li>
              <NavLink
                exact
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
                exact
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
                exact
                to="/leaderBoard"
                className={({ isActive }) =>
                  "link" + (isActive ? " active-link" : "")
                }
              >
                Leader Board
              </NavLink>
            </li>
            <li>
              <span>Hello, {userName}</span>
            </li>
            <li>
              <img src={avatar} alt="avatar" className="nav-avatar" />
            </li>
            <li>
              <Link to="/signIn" className="link" onClick={signOut}>
                Sign Out
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink exact to="/signIn" className="link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/signIn" className="link">
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/signIn" className="link">
                Leader Board
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

function mapStateToProps({ authedUser, users }) {
  return {
    singedIn: authedUser !== null,
    userName: authedUser ? users[authedUser].name : "",
    avatar: authedUser ? users[authedUser].avatarURL : "",
  };
}

export default connect(mapStateToProps)(Nav);
