import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class SignIn extends Component {
  state = {
    selectedUser: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.state.selectedUser === ""
      ? console.log("empty")
      : console.log("not empty");
  };
  handleChange = (e) => {
    this.setState({
      selectedUser: e.target.value,
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
            <h1>Sign In</h1>
            <form onSubmit={this.handleSubmit}>
              <select onChange={this.handleChange}>
                <option value="" disabled selected>
                  Select a user
                </option>
                {Object.keys(users).map((id) => (
                  <option key={id} value={users[id]}>
                    {users[id].name}
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
  console.log("USERS", users);
  return {
    users,
    loading: Object.keys(users).length === 0,
  };
}

export default connect(mapStateToProps)(SignIn);
