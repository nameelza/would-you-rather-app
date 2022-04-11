import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/users";
import "../App.css";
import "../index.css";
import SignIn from "./SignIn";
// import CardsList from "./CardsList";
import New from "./New";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }
  render() {
    return (
      <Fragment>
        <Nav />
        <div className="container">
          {this.props.singedIn ? <New authedUser={this.props.authedUser}/>: <SignIn />}
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
