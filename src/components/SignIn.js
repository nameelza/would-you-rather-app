import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleSignIn } from "../actions/shared";
import { Navigate } from "react-router-dom";

class SignIn extends Component {
  state = {
    value: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    <Navigate to="/" />;
    this.state.value === ""
      ? alert("Please select a user")
      : this.props.dispatch(handleSignIn(this.props.users[this.state.value]));
  };

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      value,
    });
  };

  render() {
    const { users, loading } = this.props;
    return (
      <Fragment>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            <h1 className="center">Sign In</h1>
            <form onSubmit={this.handleSubmit}>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="" disabled>
                  Select User
                </option>
                {Object.keys(users).map((user) => (
                  <option key={user} value={user}>
                    {users[user].name}
                  </option>
                ))}
              </select>
              <button type="submit">Sign In</button>
            </form>
          </div>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
    loading: Object.keys(users).length === 0,
  };
}

export default connect(mapStateToProps)(SignIn);
