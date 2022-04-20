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

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }
  render() {
    console.log('app', this.props)
    return (
      <Fragment>
        <LoadingBar />
        <Nav />
        <div className="container">
          {this.props.singedIn ? (
            <Routes>
              <Route exact path="/" element={<CardsList />} />
              <Route path="/newQuestion" element={<New />} />
              <Route path="/leaderBoard" element={<LeaderBoard />} />
              <Route path="/card/:id" element={<CardPoll />} />
            </Routes>
          ) : (
            <Routes>
              <Route exact path="/" element={<SignIn />} />
              <Route path="/newQuestion" element={<SignIn />} />
              <Route path="/leaderBoard" element={<SignIn />} />
              <Route path="/card/:id" element={<SignIn />} />
              <Route path="/signIn" element={<SignIn />} />
            </Routes> 
          )}
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
