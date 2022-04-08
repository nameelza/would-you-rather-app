import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/users";
import "../App.css";
import "../index.css";
import SignIn from "./SignIn";
import CardsList from "./CardsList";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }
  render() {
    console.log("APP PROPS", this.props);
    return (
      <Fragment>
        <div className="container">
          {this.props.singedIn ? <SignIn /> : <CardsList />}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    singedIn: authedUser !== null,
  };
}

export default connect(mapStateToProps)(App);
