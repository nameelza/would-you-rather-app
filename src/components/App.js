import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/users";
// import logo from "../logo.svg";
import "../App.css";
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
      { this.props.singedIn ? (
        <CardsList />
      ) : (
        <SignIn />
      )}
      </Fragment>
    );
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    singedIn: authedUser !== null,
  };
}

export default connect(mapStateToProps)(App);