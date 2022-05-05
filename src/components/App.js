import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/users";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import "../App.css";
import "../index.css";
import SignIn from "./SignIn";
import CardsList from "./CardsList";
import New from "./New";
import LeaderBoard from "./LeaderBoard";
import Nav from "./Nav";
import CardPoll from "./CardPoll";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }
  render() {
    return (
      <Fragment>
        <LoadingBar />
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/signIn" element={<SignIn />} />
            <PrivateRoute exact path="/" element={<CardsList />} />
            <PrivateRoute path="/newQuestion" element={<New />} />
            <PrivateRoute path="/leaderBoard" element={<LeaderBoard />} />
            <PrivateRoute path="/card/:id" element={<CardPoll />} />
            <Route
              path="*"
              element={<p>Oops, wrong URL. There's nothing here!</p>}
            />
          </Routes>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    singedIn: authedUser !== null,
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
