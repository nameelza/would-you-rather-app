import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { getUsers } from "../actions/users";
import "../App.css";
import "../index.css";
import SignIn from "./SignIn";
import CardsList from "./CardsList";
import New from "./New";
import LeaderBoard from "./LeaderBoard";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }
  render() {
    console.log("APP PROPS", this.props);
    return (
      <Router>
        <Fragment>
          <div className="container">
            <Nav />
              <Routes>
                <Route path="/" exact element={<CardsList />} />
                <Route path="/new" element={<New />} />
                <Route path="/leaderboard" element={<LeaderBoard />} />
                <Route path="/signin" element={<SignIn />} />
              </Routes>
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    singedIn: authedUser !== null,
  };
}

export default connect(mapStateToProps)(App);
