import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleSignOut } from "../actions/shared";
import { useDispatch } from "react-redux";

function Nav({ singedIn, userName, avatar }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = (e) => {
    e.preventDefault();
    dispatch(handleSignOut());
    navigate("/signIn");
  };

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
        {singedIn && (
          <Fragment>
            <li>
              <span>Hello, {userName}</span>
            </li>
            <li>
              <img src={avatar} alt="avatar" className="nav-avatar" />
            </li>
            <li>
              <a href={"/signIn"} className="link" onClick={signOut}>
                Sign Out
              </a>
            </li>
          </Fragment>
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
