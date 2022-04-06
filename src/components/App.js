import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
// import { handleSignIn } from "../actions/shared";
import { getUsers } from "../actions/users";
// import logo from "../logo.svg";
import "../App.css";
import SignIn from "./SignIn";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }
  render() {
    console.log("APP PROPS", this.props);
    return (
      <Fragment>
        <SignIn />
      </Fragment>
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
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(App);